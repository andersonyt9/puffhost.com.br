import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "VPS RedM - Servidores Red Dead Redemption 2 | PuffHost",
  description:
    "VPS RedM otimizado para Red Dead Redemption 2 roleplay. Scripts premium, economia completa, até 128+ jogadores. Velho Oeste imersivo.",
  keywords: [
    "VPS redm",
    "servidor redm",
    "red dead redemption 2",
    "redm roleplay",
    "servidor rdr2",
    "velho oeste roleplay",
    "redm brasil",
    "scripts redm",
    "economia redm",
  ],
  openGraph: {
    title: "VPS RedM - Servidores Red Dead Redemption 2",
    description:
      "Servidores VPS especializados em RedM para roleplay no Velho Oeste com scripts premium e suporte 24/7.",
    url: "https://puffhost.com.br/vps-redm",
    images: [
      {
        url: "/og-vps-redm.jpg",
        width: 1200,
        height: 630,
        alt: "VPS RedM PuffHost",
      },
    ],
  },
  alternates: {
    canonical: "/vps-redm",
  },
}

export default function VPSRedMLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "VPS RedM",
            description: "Servidor VPS otimizado para RedM e Red Dead Redemption 2",
            brand: {
              "@type": "Brand",
              name: "PuffHost",
            },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "BRL",
              lowPrice: "119.90",
              highPrice: "649.90",
              offerCount: "5",
            },
          }),
        }}
      />
      {children}
    </>
  )
}
