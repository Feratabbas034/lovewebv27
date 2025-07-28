"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Heart, CheckCircle, ArrowLeft, Star, Clock, Users } from "lucide-react"
import Link from "next/link"

export default function CreatePage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    customerName: "",
    partnerName: "",
    email: "",
    phone: "",
    package: "",
    story: "",
    photos: 0,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSuccess(true)
        // Email notification gönderme
        await fetch("/api/email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: formData.email,
            customerName: formData.customerName,
            siteUrl: `https://sevgiline.vercel.app/site/${formData.customerName.toLowerCase()}-${formData.partnerName.toLowerCase()}`,
          }),
        })
      }
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full text-center">
          <CardHeader>
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            <CardTitle className="text-2xl text-green-600">Siparişiniz Alındı! 🎉</CardTitle>
            <CardDescription>
              Sevgilinize özel siteniz 24 saat içinde hazır olacak. Email adresinize bilgilendirme göndereceğiz.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg text-left">
              <h4 className="font-semibold text-blue-800 mb-2">📧 Sonraki Adımlar:</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Email adresinizi kontrol edin</li>
                <li>• WhatsApp üzerinden fotoğraf linki gelecek</li>
                <li>• 24 saat içinde siteniz hazır olacak</li>
              </ul>
            </div>
            <Button asChild className="w-full">
              <Link href="/">Ana Sayfaya Dön</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <Heart className="h-8 w-8 text-pink-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                AşkSitesi
              </span>
            </Link>
            <Badge variant="secondary" className="bg-pink-100 text-pink-700">
              Adım {step}/3
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">İlerleme</span>
              <span className="text-sm font-medium text-gray-700">{Math.round((step / 3) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>

          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Heart className="h-6 w-6 text-pink-500 mr-2" />
                  Kişisel Bilgiler
                </CardTitle>
                <CardDescription>Sizin ve sevgilinizin bilgilerini girin</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="customerName">Adınız *</Label>
                    <Input
                      id="customerName"
                      value={formData.customerName}
                      onChange={(e) => handleInputChange("customerName", e.target.value)}
                      placeholder="Örn: Ahmet"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="partnerName">Sevgilinizin Adı *</Label>
                    <Input
                      id="partnerName"
                      value={formData.partnerName}
                      onChange={(e) => handleInputChange("partnerName", e.target.value)}
                      placeholder="Örn: Ayşe"
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Adresiniz *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="ornek@email.com"
                    className="mt-1"
                  />
                  <p className="text-sm text-gray-500 mt-1">Site linki bu adrese gönderilecek</p>
                </div>
                <div>
                  <Label htmlFor="phone">Telefon Numaranız</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="0555 123 45 67"
                    className="mt-1"
                  />
                  <p className="text-sm text-gray-500 mt-1">Fotoğraf paylaşımı için WhatsApp</p>
                </div>
                <Button
                  onClick={() => setStep(2)}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500"
                  disabled={!formData.customerName || !formData.partnerName || !formData.email}
                >
                  Devam Et
                </Button>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Star className="h-6 w-6 text-purple-500 mr-2" />
                  Paket Seçimi
                </CardTitle>
                <CardDescription>Size en uygun paketi seçin</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div
                    className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                      formData.package === "basic"
                        ? "border-pink-500 bg-pink-50 shadow-lg"
                        : "border-gray-200 hover:border-pink-300"
                    }`}
                    onClick={() => handleInputChange("package", "basic")}
                  >
                    <h3 className="text-lg font-semibold mb-2">Basic</h3>
                    <p className="mb-2">Hızlı ve uygun fiyatlı</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-center">
                        <Users className="mr-1 h-4 w-4 text-purple-500" /> 1 Kişi İçin
                      </li>
                      <li className="flex items-center">
                        <Clock className="mr-1 h-4 w-4 text-purple-500" /> 24 Saat Teslim
                      </li>
                    </ul>
                  </div>

                  <div
                    className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                      formData.package === "premium"
                        ? "border-purple-500 bg-purple-50 shadow-lg"
                        : "border-gray-200 hover:border-purple-300"
                    }`}
                    onClick={() => handleInputChange("package", "premium")}
                  >
                    <h3 className="text-lg font-semibold mb-2">Premium</h3>
                    <p className="mb-2">Ekstra özellikler ile</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-center">
                        <Users className="mr-1 h-4 w-4 text-pink-500" /> 2 Kişi İçin
                      </li>
                      <li className="flex items-center">
                        <Clock className="mr-1 h-4 w-4 text-pink-500" /> 12 Saat Teslim
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button onClick={() => setStep(1)}>Geri</Button>
                  <Button
                    onClick={() => setStep(3)}
                    className="bg-gradient-to-r from-pink-500 to-purple-500"
                    disabled={!formData.package}
                  >
                    Devam Et
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Clock className="h-6 w-6 text-purple-500 mr-2" />
                  Aşk Hikayeniz & Fotoğraf Sayısı
                </CardTitle>
                <CardDescription>
                  Bize aşk hikayenizi anlatın ve kaç fotoğraf paylaşmak istediğinizi seçin
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="story">Aşk Hikayeniz *</Label>
                  <Textarea
                    id="story"
                    value={formData.story}
                    onChange={(e) => handleInputChange("story", e.target.value)}
                    placeholder="Nasıl tanıştınız, güzel anılar..."
                    className="mt-1"
                    rows={5}
                  />
                </div>

                <div>
                  <Label htmlFor="photos">Kaç Fotoğraf Paylaşmak İstiyorsunuz? *</Label>
                  <Input
                    id="photos"
                    type="number"
                    min={0}
                    max={10}
                    value={formData.photos}
                    onChange={(e) => handleInputChange("photos", Number(e.target.value))}
                    className="mt-1"
                  />
                  <p className="text-sm text-gray-500 mt-1">En fazla 10 fotoğraf ekleyebilirsiniz.</p>
                </div>

                <div className="flex justify-between">
                  <Button onClick={() => setStep(2)}>Geri</Button>
                  <Button
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-pink-500 to-purple-500"
                    disabled={!formData.story || formData.photos < 0 || formData.photos > 10}
                    isLoading={isSubmitting}
                  >
                    Gönder
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
