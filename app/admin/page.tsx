"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import {
  Heart,
  Users,
  DollarSign,
  Clock,
  Eye,
  Trash2,
  CheckCircle,
  XCircle,
  AlertCircle,
  Plus,
  Edit,
} from "lucide-react"

interface Order {
  id: string
  customer_name: string
  partner_name: string
  email: string
  phone: string
  package: string
  story: string
  photos: number
  price: number
  status: string
  site_url: string | null
  created_at: string
}

interface Page {
  id: string
  title: string
  slug: string
  content: string
  images: string[]
  status: string
  created_at: string
  updated_at: string
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [orders, setOrders] = useState<Order[]>([])
  const [pages, setPages] = useState<Page[]>([])
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("dashboard")
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false)
  const [isPageDialogOpen, setIsPageDialogOpen] = useState(false)
  const [editingPage, setEditingPage] = useState<Page | null>(null)
  const [newPage, setNewPage] = useState({
    title: "",
    slug: "",
    content: "",
    images: [] as string[],
    status: "published",
  })
  const [uploadingImage, setUploadingImage] = useState(false)

  const [stats, setStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    pendingOrders: 0,
    completedOrders: 0,
  })

  useEffect(() => {
    if (isAuthenticated) {
      fetchOrders()
      fetchPages()
    }
  }, [isAuthenticated])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (username === "joker" && password === "jokerbaba2121") {
      setIsAuthenticated(true)
    } else {
      alert("Hatalı kullanıcı adı veya şifre!")
    }
  }

  const fetchOrders = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/orders")
      const data = await response.json()
      if (data.success) {
        setOrders(data.data)
        calculateStats(data.data)
      }
    } catch (error) {
      console.error("Error fetching orders:", error)
    } finally {
      setLoading(false)
    }
  }

  const fetchPages = async () => {
    try {
      const response = await fetch("/api/pages")
      const data = await response.json()
      if (data.success) {
        setPages(data.data)
      }
    } catch (error) {
      console.error("Error fetching pages:", error)
    }
  }

  const calculateStats = (ordersData: Order[]) => {
    const totalOrders = ordersData.length
    const totalRevenue = ordersData.reduce((sum, order) => sum + order.price, 0)
    const pendingOrders = ordersData.filter((order) => order.status === "pending").length
    const completedOrders = ordersData.filter((order) => order.status === "completed").length

    setStats({
      totalOrders,
      totalRevenue,
      pendingOrders,
      completedOrders,
    })
  }

  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: newStatus,
          site_url: newStatus === "completed" ? `/examples/custom-${orderId}` : null,
        }),
      })

      if (response.ok) {
        fetchOrders()
      }
    } catch (error) {
      console.error("Error updating order:", error)
    }
  }

  const deleteOrder = async (orderId: string) => {
    if (confirm("Bu siparişi silmek istediğinizden emin misiniz?")) {
      try {
        const response = await fetch(`/api/orders/${orderId}`, {
          method: "DELETE",
        })

        if (response.ok) {
          fetchOrders()
        }
      } catch (error) {
        console.error("Error deleting order:", error)
      }
    }
  }

  const handleImageUpload = async (file: File) => {
    setUploadingImage(true)
    try {
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()
      if (data.success) {
        setNewPage((prev) => ({
          ...prev,
          images: [...prev.images, data.url],
        }))
      } else {
        alert("Resim yükleme başarısız: " + data.error)
      }
    } catch (error) {
      console.error("Upload error:", error)
      alert("Resim yükleme hatası!")
    } finally {
      setUploadingImage(false)
    }
  }

  const createOrUpdatePage = async () => {
    try {
      const url = editingPage ? `/api/pages/${editingPage.slug}` : "/api/pages"
      const method = editingPage ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPage),
      })

      if (response.ok) {
        fetchPages()
        setIsPageDialogOpen(false)
        setEditingPage(null)
        setNewPage({
          title: "",
          slug: "",
          content: "",
          images: [],
          status: "published",
        })
      }
    } catch (error) {
      console.error("Error saving page:", error)
    }
  }

  const deletePage = async (slug: string) => {
    if (confirm("Bu sayfayı silmek istediğinizden emin misiniz?")) {
      try {
        const response = await fetch(`/api/pages/${slug}`, {
          method: "DELETE",
        })

        if (response.ok) {
          fetchPages()
        }
      } catch (error) {
        console.error("Error deleting page:", error)
      }
    }
  }

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { color: "bg-yellow-100 text-yellow-800", icon: Clock, text: "Beklemede" },
      approved: { color: "bg-blue-100 text-blue-800", icon: CheckCircle, text: "Onaylandı" },
      deploying: { color: "bg-purple-100 text-purple-800", icon: AlertCircle, text: "Hazırlanıyor" },
      completed: { color: "bg-green-100 text-green-800", icon: CheckCircle, text: "Tamamlandı" },
      rejected: { color: "bg-red-100 text-red-800", icon: XCircle, text: "Reddedildi" },
    }

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending
    const Icon = config.icon

    return (
      <Badge className={`${config.color} flex items-center gap-1`}>
        <Icon className="w-3 h-3" />
        {config.text}
      </Badge>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <CardTitle className="text-2xl">Admin Girişi</CardTitle>
            <CardDescription>AşkSitesi yönetim paneli</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username">Kullanıcı Adı</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Şifre</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-purple-500">
                Giriş Yap
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-pink-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                AşkSitesi Admin
              </span>
            </div>
            <Button onClick={() => setIsAuthenticated(false)} variant="outline">
              Çıkış Yap
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="orders">Siparişler</TabsTrigger>
            <TabsTrigger value="pages">Sayfa Yönetimi</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Toplam Sipariş</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.totalOrders}</p>
                    </div>
                    <Users className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Toplam Gelir</p>
                      <p className="text-2xl font-bold text-gray-900">₺{stats.totalRevenue}</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Bekleyen</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.pendingOrders}</p>
                    </div>
                    <Clock className="h-8 w-8 text-yellow-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Tamamlanan</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.completedOrders}</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Orders */}
            <Card>
              <CardHeader>
                <CardTitle>Son Siparişler</CardTitle>
                <CardDescription>En son gelen siparişler</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.slice(0, 5).map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">
                          {order.customer_name} & {order.partner_name}
                        </h4>
                        <p className="text-sm text-gray-600">{order.email}</p>
                        <p className="text-xs text-gray-500 mt-1">{order.story.substring(0, 100)}...</p>
                      </div>
                      <div className="text-right">
                        {getStatusBadge(order.status)}
                        <p className="text-sm text-gray-500 mt-1">₺{order.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tüm Siparişler</CardTitle>
                <CardDescription>Müşteri siparişlerini yönetin</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="text-center py-8">Yükleniyor...</div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Müşteri</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Paket</TableHead>
                          <TableHead>Fiyat</TableHead>
                          <TableHead>Durum</TableHead>
                          <TableHead>Tarih</TableHead>
                          <TableHead>İşlemler</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {orders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell>
                              <div>
                                <div className="font-medium">
                                  {order.customer_name} & {order.partner_name}
                                </div>
                                <div className="text-sm text-gray-500">{order.phone}</div>
                              </div>
                            </TableCell>
                            <TableCell>{order.email}</TableCell>
                            <TableCell>
                              <Badge variant={order.package === "premium" ? "default" : "secondary"}>
                                {order.package === "premium" ? "Premium" : "Temel"}
                              </Badge>
                            </TableCell>
                            <TableCell>₺{order.price}</TableCell>
                            <TableCell>{getStatusBadge(order.status)}</TableCell>
                            <TableCell>{new Date(order.created_at).toLocaleDateString("tr-TR")}</TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                <Select
                                  value={order.status}
                                  onValueChange={(value) => updateOrderStatus(order.id, value)}
                                >
                                  <SelectTrigger className="w-32">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="pending">Beklemede</SelectItem>
                                    <SelectItem value="approved">Onaylandı</SelectItem>
                                    <SelectItem value="deploying">Hazırlanıyor</SelectItem>
                                    <SelectItem value="completed">Tamamlandı</SelectItem>
                                    <SelectItem value="rejected">Reddedildi</SelectItem>
                                  </SelectContent>
                                </Select>

                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button size="sm" variant="outline" onClick={() => setSelectedOrder(order)}>
                                      <Eye className="w-4 h-4" />
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="max-w-2xl">
                                    <DialogHeader>
                                      <DialogTitle>Sipariş Detayları</DialogTitle>
                                      <DialogDescription>
                                        {selectedOrder?.customer_name} & {selectedOrder?.partner_name}
                                      </DialogDescription>
                                    </DialogHeader>
                                    {selectedOrder && (
                                      <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                          <div>
                                            <Label>Email</Label>
                                            <p className="text-sm">{selectedOrder.email}</p>
                                          </div>
                                          <div>
                                            <Label>Telefon</Label>
                                            <p className="text-sm">{selectedOrder.phone}</p>
                                          </div>
                                          <div>
                                            <Label>Paket</Label>
                                            <p className="text-sm">
                                              {selectedOrder.package === "premium" ? "Premium" : "Temel"}
                                            </p>
                                          </div>
                                          <div>
                                            <Label>Fiyat</Label>
                                            <p className="text-sm">₺{selectedOrder.price}</p>
                                          </div>
                                        </div>
                                        <div>
                                          <Label>Aşk Hikayesi</Label>
                                          <p className="text-sm mt-1 p-3 bg-gray-50 rounded">{selectedOrder.story}</p>
                                        </div>
                                      </div>
                                    )}
                                  </DialogContent>
                                </Dialog>

                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => deleteOrder(order.id)}
                                  className="text-red-600 hover:text-red-700"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pages" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Sayfa Yönetimi</CardTitle>
                    <CardDescription>Örnek sayfaları oluşturun ve düzenleyin</CardDescription>
                  </div>
                  <Dialog open={isPageDialogOpen} onOpenChange={setIsPageDialogOpen}>
                    <DialogTrigger asChild>
                      <Button
                        onClick={() => {
                          setEditingPage(null)
                          setNewPage({
                            title: "",
                            slug: "",
                            content: "",
                            images: [],
                            status: "published",
                          })
                        }}
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Yeni Sayfa
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>{editingPage ? "Sayfa Düzenle" : "Yeni Sayfa Oluştur"}</DialogTitle>
                        <DialogDescription>Aşk sitesi için yeni bir örnek sayfa oluşturun</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="title">Başlık</Label>
                            <Input
                              id="title"
                              value={newPage.title}
                              onChange={(e) => setNewPage((prev) => ({ ...prev, title: e.target.value }))}
                              placeholder="Örn: Ayşe & Mehmet"
                            />
                          </div>
                          <div>
                            <Label htmlFor="slug">URL Slug</Label>
                            <Input
                              id="slug"
                              value={newPage.slug}
                              onChange={(e) => setNewPage((prev) => ({ ...prev, slug: e.target.value }))}
                              placeholder="Örn: ayse-mehmet"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="content">İçerik</Label>
                          <Textarea
                            id="content"
                            value={newPage.content}
                            onChange={(e) => setNewPage((prev) => ({ ...prev, content: e.target.value }))}
                            placeholder="Aşk hikayesini buraya yazın..."
                            rows={6}
                          />
                        </div>

                        <div>
                          <Label>Resimler</Label>
                          <div className="space-y-2">
                            <Input
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0]
                                if (file) {
                                  handleImageUpload(file)
                                }
                              }}
                              disabled={uploadingImage}
                            />
                            {uploadingImage && <p className="text-sm text-blue-600">Resim yükleniyor...</p>}

                            <div className="grid grid-cols-3 gap-2 mt-2">
                              {newPage.images.map((image, index) => (
                                <div key={index} className="relative">
                                  <img
                                    src={image || "/placeholder.svg"}
                                    alt={`Upload ${index}`}
                                    className="w-full h-20 object-cover rounded"
                                  />
                                  <Button
                                    size="sm"
                                    variant="destructive"
                                    className="absolute top-1 right-1 h-6 w-6 p-0"
                                    onClick={() => {
                                      setNewPage((prev) => ({
                                        ...prev,
                                        images: prev.images.filter((_, i) => i !== index),
                                      }))
                                    }}
                                  >
                                    ×
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="status">Durum</Label>
                          <Select
                            value={newPage.status}
                            onValueChange={(value) => setNewPage((prev) => ({ ...prev, status: value }))}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="published">Yayında</SelectItem>
                              <SelectItem value="draft">Taslak</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex justify-end space-x-2">
                          <Button variant="outline" onClick={() => setIsPageDialogOpen(false)}>
                            İptal
                          </Button>
                          <Button onClick={createOrUpdatePage}>{editingPage ? "Güncelle" : "Oluştur"}</Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Başlık</TableHead>
                        <TableHead>Slug</TableHead>
                        <TableHead>Durum</TableHead>
                        <TableHead>Resim Sayısı</TableHead>
                        <TableHead>Oluşturulma</TableHead>
                        <TableHead>İşlemler</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pages.map((page) => (
                        <TableRow key={page.id}>
                          <TableCell className="font-medium">{page.title}</TableCell>
                          <TableCell>{page.slug}</TableCell>
                          <TableCell>
                            <Badge variant={page.status === "published" ? "default" : "secondary"}>
                              {page.status === "published" ? "Yayında" : "Taslak"}
                            </Badge>
                          </TableCell>
                          <TableCell>{page.images.length}</TableCell>
                          <TableCell>{new Date(page.created_at).toLocaleDateString("tr-TR")}</TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => window.open(`/examples/${page.slug}`, "_blank")}
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                  setEditingPage(page)
                                  setNewPage({
                                    title: page.title,
                                    slug: page.slug,
                                    content: page.content,
                                    images: page.images,
                                    status: page.status,
                                  })
                                  setIsPageDialogOpen(true)
                                }}
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => deletePage(page.slug)}
                                className="text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
