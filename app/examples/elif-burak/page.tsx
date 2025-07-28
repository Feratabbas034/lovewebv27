"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ArrowLeft, Calendar, MapPin, Users, Star, Camera, Music } from "lucide-react"
import Link from "next/link"

export default function ElifBurakPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5" />
              <span>Ana Sayfaya Dön</span>
            </Link>
            <Badge className="bg-purple-100 text-purple-700">Premium Örnek</Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <Heart className="h-16 w-16 text-purple-500 animate-pulse" />
                <div className="absolute -top-2 -right-2">
                  <Star className="h-6 w-6 text-yellow-400 animate-bounce" />
                </div>
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Elif & Burak
            </h1>
            <p className="text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Müziğin ritmiyle başlayan, aşkın melodisiyle devam eden sonsuz hikayemiz...
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 mb-12">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>10 Haziran 2019</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Ankara</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                <span>4 Yıl Birlikte</span>
              </div>
              <div className="flex items-center">
                <Music className="h-4 w-4 mr-2" />
                <span>Müzik Aşıkları</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Hikayemizin Videosu</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="h-16 w-16 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Özel Video</h3>
                  <p className="text-gray-500">Birlikte geçirdiğimiz güzel anların videosu</p>
                  <Button className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500">Videoyu İzle</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Fotoğraf Galerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=300&width=300&text=Konser"
                alt="İlk konser"
                className="w-full h-60 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">İlk Konser</h3>
                  <p className="text-sm">Müzik Festivali</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=300&width=300&text=Piknik"
                alt="Piknik günü"
                className="w-full h-60 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Piknik</h3>
                  <p className="text-sm">Gölbaşı</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=300&width=300&text=Yemek"
                alt="Romantik yemek"
                className="w-full h-60 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Romantik Yemek</h3>
                  <p className="text-sm">Yıldönümü</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=300&width=300&text=Seyahat"
                alt="Seyahat anımız"
                className="w-full h-60 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Kapadokya</h3>
                  <p className="text-sm">Balon Turu</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl md:col-span-2">
              <img
                src="/placeholder.svg?height=300&width=600&text=Nişan"
                alt="Nişan töreni"
                className="w-full h-60 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Nişan Töreni</h3>
                  <p className="text-sm">En Mutlu Günümüz</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=300&width=300&text=Dans"
                alt="Dans ederken"
                className="w-full h-60 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">İlk Dans</h3>
                  <p className="text-sm">Nişan Gecesi</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=300&width=300&text=Ev"
                alt="Yeni evimiz"
                className="w-full h-60 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Yeni Evimiz</h3>
                  <p className="text-sm">Birlikte Yaşam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Love Story Timeline */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Aşk Hikayemiz</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>

              <div className="space-y-12">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <Card className="p-6 bg-white shadow-lg">
                      <CardContent className="p-0">
                        <h3 className="text-xl font-semibold mb-3 text-purple-600">Müzik Festivali</h3>
                        <p className="text-gray-600">
                          2019 yılında Ankara'da düzenlenen müzik festivalinde tanıştık. İkimiz de aynı grubun
                          hayranıydık ve konser sırasında yan yana geldik. Müziğin büyüsü bizi birbirimize yaklaştırdı.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center relative z-10">
                    <Music className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-1/2 pl-8">
                    <div className="text-sm text-gray-500">10 Haziran 2019</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="text-sm text-gray-500">15 Temmuz 2019</div>
                  </div>
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center relative z-10">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-1/2 pl-8">
                    <Card className="p-6 bg-white shadow-lg">
                      <CardContent className="p-0">
                        <h3 className="text-xl font-semibold mb-3 text-pink-600">İlk Randevu</h3>
                        <p className="text-gray-600">
                          Festival sonrası bir ay boyunca mesajlaştık. İlk randevumuz için Gölbaşı'nda piknik yapmaya
                          karar verdik. O gün ikimiz de anladık ki bu sadece arkadaşlık değil, çok daha özel bir şey.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <Card className="p-6 bg-white shadow-lg">
                      <CardContent className="p-0">
                        <h3 className="text-xl font-semibold mb-3 text-purple-600">Birlikte Yaşam</h3>
                        <p className="text-gray-600">
                          2 yıl sonra birlikte yaşamaya karar verdik. Küçük bir dairede başladığımız hayat, her geçen
                          gün daha da güzelleşti. Birlikte müzik dinlemek, yemek yapmak, hayaller kurmak...
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center relative z-10">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-1/2 pl-8">
                    <div className="text-sm text-gray-500">20 Ağustos 2021</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="text-sm text-gray-500">14 Şubat 2023</div>
                  </div>
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center relative z-10">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-1/2 pl-8">
                    <Card className="p-6 bg-white shadow-lg">
                      <CardContent className="p-0">
                        <h3 className="text-xl font-semibold mb-3 text-pink-600">Nişan</h3>
                        <p className="text-gray-600">
                          Sevgililer Günü'nde Burak bana evlenme teklif etti. Tabii ki "Evet" dedim! Nişanımızı
                          ailelerimiz ve yakın arkadaşlarımızla kutladık. Artık resmi olarak nişanlıyız!
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Bizim Şarkımız</h2>
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-xl">
              <Music className="h-16 w-16 text-purple-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">"Perfect" - Ed Sheeran</h3>
              <p className="text-gray-600 mb-6">
                İlk dansımızda çalan şarkı. Her dinlediğimizde o anı yeniden yaşıyoruz.
              </p>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500">Şarkıyı Dinle</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Siz de Aşkınızı Ölümsüzleştirin</h2>
          <p className="text-xl mb-8 opacity-90">
            Elif & Burak gibi sizin de hikayenizi anlatan özel bir site oluşturalım
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link href="/create">Premium Paket</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              <Link href="/create">Temel Paket</Link>
            </Button>
          </div>
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
