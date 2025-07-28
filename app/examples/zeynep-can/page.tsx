"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ArrowLeft, Calendar, MapPin, Users, Star, Plane, Gift } from "lucide-react"
import Link from "next/link"

export default function ZeynepCanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-orange-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5" />
              <span>Ana Sayfaya Dön</span>
            </Link>
            <Badge className="bg-rose-100 text-rose-700">Evlilik Örneği</Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-400/20 to-orange-400/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <Heart className="h-20 w-20 text-rose-500 animate-pulse" />
                <div className="absolute -top-3 -right-3">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-sm">💍</span>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent mb-6">
              Zeynep & Can
            </h1>
            <p className="text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Dostlukla başlayan, aşkla büyüyen, evlilikle taçlanan muhteşem yolculuğumuz...
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 mb-12 flex-wrap gap-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>5 Eylül 2018</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>İzmir</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                <span>5 Yıl Birlikte</span>
              </div>
              <div className="flex items-center">
                <Gift className="h-4 w-4 mr-2" />
                <span>2 Yıl Evli</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Photos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Düğün Fotoğraflarımız</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="md:col-span-2">
              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg?height=400&width=600&text=Düğün+Töreni"
                  alt="Düğün töreni"
                  className="w-full h-80 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg">Düğün Töreni</h3>
                    <p className="text-sm">En Mutlu Günümüz</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg?height=180&width=300&text=İlk+Dans"
                  alt="İlk dans"
                  className="w-full h-36 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-2 left-2 text-white">
                    <h3 className="font-semibold text-sm">İlk Dans</h3>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg?height=180&width=300&text=Nikah"
                  alt="Nikah töreni"
                  className="w-full h-36 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-2 left-2 text-white">
                    <h3 className="font-semibold text-sm">Nikah</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Anılarımız</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=250&width=250&text=Üniversite"
                alt="Üniversite yılları"
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="font-semibold text-sm">Üniversite</h3>
                  <p className="text-xs">İlk Tanışma</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=250&width=250&text=Mezuniyet"
                alt="Mezuniyet"
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="font-semibold text-sm">Mezuniyet</h3>
                  <p className="text-xs">Birlikte Başarı</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=250&width=250&text=Seyahat"
                alt="Seyahat"
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="font-semibold text-sm">Avrupa Turu</h3>
                  <p className="text-xs">Balayı</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=250&width=250&text=Ev"
                alt="Yeni ev"
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="font-semibold text-sm">Yeni Evimiz</h3>
                  <p className="text-xs">Yuva Kurma</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=250&width=250&text=Aile"
                alt="Ailelerle"
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="font-semibold text-sm">Ailelerimiz</h3>
                  <p className="text-xs">Büyük Aile</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=250&width=250&text=Doğum+Günü"
                alt="Doğum günü"
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="font-semibold text-sm">Doğum Günü</h3>
                  <p className="text-xs">Sürprizler</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=250&width=250&text=Tatil"
                alt="Tatil"
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="font-semibold text-sm">Bodrum Tatili</h3>
                  <p className="text-xs">Yaz Keyfi</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=250&width=250&text=Günlük"
                alt="Günlük hayat"
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="font-semibold text-sm">Günlük Hayat</h3>
                  <p className="text-xs">Mutlu Anlar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Love Story */}
      <section className="py-16 bg-gradient-to-br from-rose-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Aşk Hikayemiz</h2>
            <div className="space-y-8">
              <Card className="p-8 bg-white shadow-lg">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-rose-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Üniversitede Tanışma</h3>
                      <p className="text-gray-600 leading-relaxed">
                        2018 yılında İzmir'de üniversite okurken tanıştık. İkimiz de mühendislik fakültesinde okuyorduk
                        ve ortak bir proje grubunda yer aldık. Can'ın zekası ve Zeynep'in enerjisi, o proje sürecinde
                        birbirimizi fark etmemize sebep oldu. İlk başta sadece arkadaştık, ama zamanla bu arkadaşlık çok
                        daha özel bir şeye dönüştü.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 bg-white shadow-lg">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <Heart className="h-6 w-6 text-orange-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Aşkın Başlangıcı</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Mezuniyet yaklaşırken, ikimiz de farklı şehirlerde iş bulmuştuk. Ayrılık korkusu bizi gerçek
                        duygularımızı itiraf etmeye itti. O gece sahilde yürürken Can bana aşkını itiraf etti. Ben de
                        aynı şeyleri hissettiğimi söyledim. Uzaktan ilişki zor olacaktı ama aşkımız her şeyin üstesinden
                        geldi.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 bg-white shadow-lg">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                        <Plane className="h-6 w-6 text-rose-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Uzaktan İlişki</h3>
                      <p className="text-gray-600 leading-relaxed">
                        2 yıl boyunca İstanbul-İzmir arası mekik dokuduk. Her hafta sonu birbirimizi görmeye çalışıyor,
                        video konuşmalarla günlerimizi paylaşıyorduk. Bu süreç bizi daha da güçlendirdi. Birbirimize
                        olan bağlılığımızı ve aşkımızın ne kadar gerçek olduğunu anladık.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 bg-white shadow-lg">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <Star className="h-6 w-6 text-orange-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Evlilik Kararı</h3>
                      <p className="text-gray-600 leading-relaxed">
                        2021 yılında Can İzmir'e taşınmaya karar verdi. Artık aynı şehirde yaşıyorduk ve geleceğimizi
                        birlikte planlıyorduk. 2022 yılında evlenme kararı aldık. Ailelerimiz çok mutlu oldu. Düğünümüzü
                        İzmir'de, deniz kenarında yaptık. En mutlu günümüzdü ve artık resmi olarak bir aileyiz!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Geleceğe Dair Planlarımız</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-rose-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Aile Kurma</h3>
                  <p className="text-gray-600 text-sm">Yakın gelecekte aile büyütmeyi planlıyoruz</p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plane className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Dünya Turu</h3>
                  <p className="text-gray-600 text-sm">Birlikte dünyayı gezmeyi hayal ediyoruz</p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="h-8 w-8 text-rose-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Yeni Ev</h3>
                  <p className="text-gray-600 text-sm">Bahçeli bir evde yaşamak istiyoruz</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-rose-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Siz de Aşkınızı Ölümsüzleştirin</h2>
          <p className="text-xl mb-8 opacity-90">
            Zeynep & Can gibi sizin de hikayenizi anlatan özel bir site oluşturalım
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
              <Link href="/create">Hemen Başlayın</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-rose-600 bg-transparent"
            >
              <Link href="/examples">Diğer Örnekler</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-rose-500 mr-2" />
            <span className="text-2xl font-bold">AşkSitesi</span>
          </div>
          <p className="text-gray-400 mb-4">Sevgilinize özel siteler oluşturuyoruz</p>
          <p className="text-sm text-gray-500">© 2024 AşkSitesi. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  )
}
