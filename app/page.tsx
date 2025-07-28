"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Star, Users, Clock, ArrowRight, CheckCircle, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Ayşe & Mehmet",
      text: "Harika bir deneyimdi! Sevgilimle olan anılarımızı çok güzel bir şekilde dijitalleştirdiler. Herkese tavsiye ederim! ❤️",
      rating: 5,
      package: "Premium",
      image: "/placeholder.svg?height=60&width=60&text=A&M",
    },
    {
      name: "Zeynep & Can",
      text: "Uzak mesafe ilişkimiz için mükemmel bir çözüm! Artık anılarımız hep yanımızda. Çok teşekkürler! 💕",
      rating: 5,
      package: "Premium",
      image: "/placeholder.svg?height=60&width=60&text=Z&C",
    },
    {
      name: "Elif & Burak",
      text: "Düğün hazırlıklarımız için harika bir eklenti oldu. Misafirlerimiz çok beğendi! 🎉",
      rating: 5,
      package: "Premium",
      image: "/placeholder.svg?height=60&width=60&text=E&B",
    },
  ]

  const features = [
    {
      icon: Heart,
      title: "Kişiselleştirilmiş Tasarım",
      description: "Her çift için özel olarak tasarlanan benzersiz arayüz",
    },
    {
      icon: Users,
      title: "Kolay Paylaşım",
      description: "Sosyal medyada kolayca paylaşabileceğiniz özel link",
    },
    {
      icon: Clock,
      title: "Hızlı Teslimat",
      description: "24 saat içinde siteniz hazır ve kullanıma sunuluyor",
    },
    {
      icon: Sparkles,
      title: "Mobil Uyumlu",
      description: "Tüm cihazlarda mükemmel görünüm ve performans",
    },
  ]

  const examples = [
    {
      title: "Ayşe & Mehmet",
      description: "Klasik aşk hikayesi - Kahve dükkanında başlayan romantik yolculuk",
      image: "/placeholder.svg?height=200&width=300&text=Ayşe+Mehmet",
      url: "/examples/ayse-mehmet",
      type: "Aşk Hikayesi",
      color: "from-pink-400 to-purple-400",
    },
    {
      title: "Elif & Burak",
      description: "Düğün teması - Evlilik yolculuğuna giden çiftler için",
      image: "/placeholder.svg?height=200&width=300&text=Elif+Burak",
      url: "/examples/elif-burak",
      type: "Düğün Teması",
      color: "from-rose-400 to-pink-400",
    },
    {
      title: "Zeynep & Can",
      description: "Uzak mesafe - Dijital aşk günlüğü ve mesajlaşma teması",
      image: "/placeholder.svg?height=200&width=300&text=Zeynep+Can",
      url: "/examples/zeynep-can",
      type: "Uzak Mesafe",
      color: "from-blue-400 to-purple-400",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-pink-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                AşkSitesi
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#ornekler" className="text-gray-600 hover:text-pink-500 transition-colors">
                Örnekler
              </a>
              <a href="#ozellikler" className="text-gray-600 hover:text-pink-500 transition-colors">
                Özellikler
              </a>
              <a href="#yorumlar" className="text-gray-600 hover:text-pink-500 transition-colors">
                Yorumlar
              </a>
              <Link href="/create">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all">
                  Hemen Başla
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-pink-100 text-pink-700 px-4 py-2">
              ✨ Türkiye'nin #1 Romantik Web Sitesi Platformu
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Aşkınızı{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Dijitalleştirin
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Sevgilinizle olan özel anılarınızı, fotoğraflarınızı ve duygularınızı özel bir web sitesinde birleştirin.
              💕
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/create">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  Hemen Başla ❤️
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="#ornekler">
                <Button
                  variant="outline"
                  className="px-8 py-4 rounded-full text-lg border-2 border-pink-200 hover:border-pink-300 bg-transparent"
                >
                  Örnekleri İncele
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500 mb-2">500+</div>
                <div className="text-gray-600">Mutlu Çift</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-500 mb-2">24 Saat</div>
                <div className="text-gray-600">Hızlı Teslimat</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500 mb-2">%100</div>
                <div className="text-gray-600">Memnuniyet</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="ornekler" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Örnek Sitelerimiz</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Farklı temalar ve hikayelerle hazırlanmış örnek siteleri inceleyin
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {examples.map((example, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <Image
                    src={example.image || "/placeholder.svg"}
                    alt={example.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r ${example.color}`}
                  >
                    {example.type}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{example.title}</h3>
                  <p className="text-gray-600 mb-4">{example.description}</p>
                  <Link href={example.url}>
                    <Button className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white hover:shadow-lg transition-all">
                      Siteyi İncele
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="ozellikler" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Neden AşkSitesi?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Aşkınızı en güzel şekilde dijitalleştirmek için ihtiyacınız olan her şey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-pink-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="yorumlar" className="py-20 px-4 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Mutlu Çiftlerimizden</h2>
          <p className="text-xl text-pink-100 mb-12 max-w-2xl mx-auto">Aşkını dijitalleştiren çiftlerin deneyimleri</p>

          <Card className="max-w-2xl mx-auto p-8">
            <CardContent className="text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 mb-4 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</div>
              <Badge className="mt-2 bg-pink-100 text-pink-700">{testimonials[currentTestimonial].package} Paket</Badge>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Paketlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Size en uygun paketi seçin ve aşkınızı dijitalleştirin
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-2 border-gray-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Temel Paket</CardTitle>
                <div className="text-4xl font-bold text-pink-500 my-4">₺100</div>
                <CardDescription>Aşkınızın ilk adımı için</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />5 fotoğraf
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Aşk hikayeniz
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Mobil uyumlu tasarım
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    24 saat teslimat
                  </li>
                </ul>
                <Link href="/create">
                  <Button className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white">Başla</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-pink-500 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white px-4 py-1">
                Popüler
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Premium Paket</CardTitle>
                <div className="text-4xl font-bold text-pink-500 my-4">₺150</div>
                <CardDescription>Tam aşk deneyimi için</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Sınırsız fotoğraf
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Video desteği
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Müzik ekleme
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Özel domain
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    12 saat teslimat
                  </li>
                </ul>
                <Link href="/create">
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                    Premium'u Seç
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Aşkınızı Ölümsüzleştirin</h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Sevgilinizle olan özel anlarınızı dijital dünyada sonsuza kadar saklayın
          </p>
          <Link href="/create">
            <Button className="bg-white text-pink-500 px-12 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Hemen Başla ❤️
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-pink-500" />
                <span className="text-xl font-bold">AşkSitesi</span>
              </div>
              <p className="text-gray-400">Aşkınızı dijitalleştiren Türkiye'nin #1 romantik web sitesi platformu.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Hızlı Linkler</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#ornekler" className="hover:text-pink-400">
                    Örnekler
                  </a>
                </li>
                <li>
                  <a href="#ozellikler" className="hover:text-pink-400">
                    Özellikler
                  </a>
                </li>
                <li>
                  <a href="#yorumlar" className="hover:text-pink-400">
                    Yorumlar
                  </a>
                </li>
                <li>
                  <Link href="/create" className="hover:text-pink-400">
                    Hemen Başla
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Destek</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="mailto:info@asksitesi.com" className="hover:text-pink-400">
                    info@asksitesi.com
                  </a>
                </li>
                <li>
                  <a href="tel:+905551234567" className="hover:text-pink-400">
                    0555 123 45 67
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400">
                    SSS
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400">
                    İletişim
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Sosyal Medya</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-pink-400">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400">
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AşkSitesi. Tüm hakları saklıdır. Made with ❤️ in Turkey</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
