import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AşkSitesi - Sevgiline Özel Dijital Aşk Köşesi",
  description:
    "Aşkınızı dijital dünyada ölümsüzleştirin. Anılarınızı, fotoğraflarınızı ve duygularınızı özel bir web sitesinde birleştirin.",
  keywords: "aşk sitesi, romantik website, çift sitesi, dijital anı defteri, kişisel web sitesi",
  authors: [{ name: "AşkSitesi" }],
  openGraph: {
    title: "AşkSitesi - Sevgiline Özel Dijital Aşk Köşesi",
    description: "Aşkınızı dijital dünyada ölümsüzleştirin",
    type: "website",
    locale: "tr_TR",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
