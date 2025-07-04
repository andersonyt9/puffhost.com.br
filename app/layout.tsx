import type React from "react"
import { Footer } from "@/components/footer"
import { NavbarComponent } from "@/components/navbar"
import { siteConfig } from "@/config/site"
import "@/styles/globals.css"
import clsx from "clsx"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"

export const metadata: Metadata = {
  title: {
    default: "PuffHost - Hospedagem Premium no Brasil | VPS, Dedicados e Gaming",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Hospedagem de alta performance no Brasil com VPS Gamer, servidores dedicados e semi-dedicados. AMD Ryzen, SSD NVMe, Anti-DDoS 348TB/s e suporte 24/7. Ideal para gaming, streaming e empresas.",
  keywords: [
    "hospedagem brasil",
    "VPS brasil",
    "servidor dedicado brasil",
    "hospedagem gaming",
    "VPS gamer",
    "servidor minecraft",
    "servidor fivem",
    "hospedagem streaming",
    "VPS streaming",
    "servidor rust",
    "hospedagem premium",
    "datacenter brasil",
    "anti-ddos",
    "AMD Ryzen",
    "SSD NVMe",
    "baixa latencia",
    "suporte 24/7",
    "servidor semi-dedicado",
    "hospedagem empresarial",
    "cloud brasil",
    "PuffHost",
    "servidor redm",
    "hospedagem minecraft",
    "servidor cs2",
    "VPS windows",
    "VPS linux",
    "servidor palworld",
    "hospedagem ark",
    "servidor valheim",
    "hospedagem satisfactory",
  ],
  authors: [{ name: "PuffHost", url: "https://puffhost.com.br" }],
  creator: "PuffHost",
  publisher: "PuffHost",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://puffhost.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://puffhost.com.br",
    title: "PuffHost - Hospedagem Premium no Brasil | VPS, Dedicados e Gaming",
    description:
      "Hospedagem de alta performance no Brasil com VPS Gamer, servidores dedicados e semi-dedicados. AMD Ryzen, SSD NVMe, Anti-DDoS 348TB/s e suporte 24/7.",
    siteName: "PuffHost",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PuffHost - Hospedagem Premium no Brasil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PuffHost - Hospedagem Premium no Brasil",
    description:
      "VPS Gamer, servidores dedicados e hospedagem premium com AMD Ryzen, SSD NVMe e suporte 24/7 no Brasil.",
    images: ["/og-image.jpg"],
    creator: "@puffhost",
    site: "@puffhost",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "Hospedagem Web, VPS, Servidores Dedicados",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicon.ico", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#ec4899",
      },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#ec4899",
    "theme-color": "#ffffff",
  },
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PuffHost",
              url: "https://puffhost.com.br",
              logo: "https://puffhost.com.br/logo-branca.webp",
              description: "Hospedagem premium no Brasil com VPS, servidores dedicados e soluções para gaming",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Paulista, 1578",
                addressLocality: "São Paulo",
                addressRegion: "SP",
                postalCode: "01310-200",
                addressCountry: "BR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-11-3456-7890",
                contactType: "customer service",
                availableLanguage: "Portuguese",
              },
              sameAs: ["https://discord.gg/Tgm2gn9zM3", "https://twitter.com/puffhost", "https://www.instagram.com/puff.host/#"],
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "BRL",
                lowPrice: "29.90",
                highPrice: "1999.90",
                offerCount: "20+",
              },
            }),
          }}
        />
      </head>
      <body className={clsx("min-h-screen bg-white font-sans antialiased", inter.className)}>
        <div className="relative flex flex-col min-h-screen">
          <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <NavbarComponent />
          </header>
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
