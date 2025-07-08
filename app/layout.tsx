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
    default: "PuffHost — Hospedagem Premium 100% Brasileira | VPS Gamer, Dedicados e Muito Mais",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Hospedagem Premium no Brasil com desempenho extremo — VPS Gamer, Semi-Dedicados e Dedicados equipados com AMD Ryzen, SSD NVMe ultrarrápido e proteção Anti-DDoS de até 348Tb/s. Suporte 24/7 especializado para projetos de games, streaming e empresas.",
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
    title: "PuffHost — Hospedagem Premium no Brasil com foco em VPS, Dedicados e Servidores Gamer",
    description:
      "Hospedagem de Alta Performance no Brasil — VPS Gamer, Semi-Dedicados e Dedicados com AMD Ryzen, SSD NVMe, proteção Anti-DDoS de até 348Tb/s e suporte 24/7 especializado.",
    siteName: "PuffHost",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PuffHost — Hospedagem de Alta Performance no Brasil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PuffHost — Hospedagem de Alta Performance no Brasil",
    description:
      "VPS Gamer, Dedicados e Hospedagem Premium no Brasil com Ryzen de última geração, SSD NVMe ultrarrápido e suporte 24/7 especializado.",
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
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
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
  generator: "v0.dev",
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
  preload: true,
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/* Preload crítico para performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//app.puffhost.com.br" />
        <link rel="dns-prefetch" href="//discord.gg" />

        {/* Preload recursos críticos */}
        <link rel="preload" href="/logo-branca.webp" as="image" type="image/webp" />

        {/* Meta tags para performance */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta name="format-detection" content="telephone=no" />

        {/* PWA Meta Tags */}
        <meta name="application-name" content="PuffHost" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PuffHost" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ec4899" />
        <meta name="msapplication-tap-highlight" content="no" />

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
              description: "Hospedagem Premium no Brasil com VPS Gamer, Dedicados e Semi-Dedicados",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                url: "https://discord.gg/Tgm2gn9zM3",
                availableLanguage: "Portuguese",
              },
              sameAs: ["https://discord.gg/Tgm2gn9zM3"],
              address: {
                "@type": "PostalAddress",
                addressCountry: "BR",
              },
            }),
          }}
        />
      </head>
      <body className={clsx("min-h-screen bg-background font-sans antialiased mobile-optimized", inter.className)}>
        <div className="relative flex min-h-screen flex-col">
          <NavbarComponent />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
