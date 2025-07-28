"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ArrowLeft, Calendar, MapPin, Users, Star } from "lucide-react"
import Link from "next/link"

export default function AyseMehmetPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5" />
              <span>Ana Sayfaya Dön</span>
            </Link>
            <Badge className="bg-pink-100 text-pink-700">Örnek Site</Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Heart className="h-12 w-12 text-pink-500 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Ayşe & Mehmet
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              İki kalbin bir olduğu, aşkın en güzel halini yaşadığımız hikayemiz...
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 mb-12">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>15 Şubat 2020</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>İstanbul</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                <span>3 Yıl Birlikte</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Anılarımız</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=400&width=300&text=İlk+Buluşma"
                alt="İlk buluşmamız"
                className="w-full h-80 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">İlk Buluşma</h3>
                  <p className="text-sm">Kadıköy Sahil</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=400&width=300&text=Doğum+Günü"
                alt="Doğum günü kutlaması"
                className="w-full h-80 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Doğum Günü</h3>
                  <p className="text-sm">Sürpriz Kutlama</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=400&width=300&text=Tatil"
                alt="Tatil anımız"
                className="w-full h-80 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Tatil</h3>
                  <p className="text-sm">Antalya</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=400&width=300&text=Yıldönümü"
                alt="Yıldönümü kutlaması"
                className="w-full h-80 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">1. Yıldönümü</h3>
                  <p className="text-sm">Romantik Akşam</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=400&width=300&text=Aile"
                alt="Ailelerle birlikte"
                className="w-full h-80 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Ailelerle</h3>
                  <p className="text-sm">İlk Tanışma</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=400&width=300&text=Günlük"
                alt="Günlük anımız"
                className="w-full h-80 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Günlük Hayat</h3>
                  <p className="text-sm">Evde Birlikte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Love Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Aşk Hikayemiz</h2>
            <div className="space-y-8">
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                        <Heart className="h-6 w-6 text-pink-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">İlk Karşılaşma</h3>
                      <p className="text-gray-600 leading-relaxed">
                        2020 yılının soğuk bir şubat gününde, üniversitede ortak bir derste tanıştık. Mehmet'in
                        gülümsemesi ve Ayşe'nin kahkahası, o sınıfta aşkın ilk tohumlarını ekti. Ders sonrası kahve
                        içmeye gitmek, hayatımızın en güzel kararlarından biri oldu.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <Star className="h-6 w-6 text-purple-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">İlk Randevu</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Kadıköy sahilinde yürüyüş yapmak, denizi izlemek ve saatlerce konuşmak... O gün ikimiz de
                        anladık ki bu sadece bir arkadaşlık değil, çok daha özel bir şey. Güneş batarken verdiğimiz el
                        ele, kalbimizde yeni bir başlangıcın işaretiydi.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-pink-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Birlikte Büyümek</h3>
                      <p className="text-gray-600 leading-relaxed">
                        3 yıldır birlikte büyüyor, birlikte öğreniyor, birlikte gülüyor ve ağlıyoruz. Her geçen gün
                        birbirimizi daha çok sevmeyi, daha çok anlamayı öğreniyoruz. Hayallerimizi paylaşıyor,
                        geleceğimizi birlikte planlıyoruz. Bu sadece aşk değil, bu bir yaşam tarzı, bir mutluluk hali.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Siz de Aşkınızı Ölümsüzleştirin</h2>
          <p className="text-xl mb-8 opacity-90">
            Ayşe & Mehmet gibi sizin de hikayenizi anlatan özel bir site oluşturalım
          </p>
          <Button asChild size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
            <Link href="/create">Hemen Başlayın</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-pink-500 mr-2" />
            <span className="text-2xl font-bold">AşkSitesi</span>
          </div>
          <p className="text-gray-400 mb-4">Sevgilinize özel siteler oluşturuyoruz</p>
          <p className="text-sm text-gray-500">© 2024 AşkSitesi. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  )
}
