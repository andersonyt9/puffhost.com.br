import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "VPS FiveM - Servidores para Roleplay | PuffHost",
  description:
    "VPS FiveM otimizado para roleplay com scripts premium, MySQL configurado e suporte especializado. Até 300+ slots, anti-cheat e economia incluída.",
  keywords: [
    "VPS fivem",
    "servidor fivem",
    "fivem roleplay",
    "servidor roleplay",
    "fivem brasil",
    "scripts fivem",
    "mysql fivem",
    "anti-cheat fivem",
    "economia fivem",
    "fivem premium",
  ],
  openGraph: {
    title: "VPS FiveM - Servidores para Roleplay Profissional",
    description: "Servidores VPS especializados em FiveM com scripts premium, suporte roleplay e até 300+ slots.",
    url: "https://puffhost.com.br/vps-fivem",
    images: [
      {
        url: "/og-vps-fivem.jpg",
        width: 1200,
        height: 630,
        alt: "VPS FiveM PuffHost",
      },
    ],
  },
  alternates: {
    canonical: "/vps-fivem",
  },
}

export default function VPSFiveMLayout({
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
            name: "VPS FiveM",
            description: "Servidor VPS otimizado para FiveM e roleplay",
            brand: {
              "@type": "Brand",
              name: "PuffHost",
            },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "BRL",
              lowPrice: "89.90",
              highPrice: "599.90",
              offerCount: "5",
            },
          }),
        }}
      />
      {children}
    </>
  )
}
