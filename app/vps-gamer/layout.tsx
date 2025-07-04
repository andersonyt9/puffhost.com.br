import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "VPS Gamer - Servidores para Jogos | PuffHost",
  description:
    "VPS Gamer otimizado para Minecraft, FiveM, Rust, CS2 e outros jogos. AMD Ryzen, Anti-DDoS 348TB/s, latência <5ms e suporte 24/7. A partir de R$ 29,90/mês.",
  keywords: [
    "VPS gamer",
    "servidor minecraft",
    "servidor fivem",
    "servidor rust",
    "servidor cs2",
    "hospedagem gaming",
    "VPS jogos",
    "servidor palworld",
    "servidor ark",
    "servidor valheim",
    "anti-ddos gaming",
    "baixa latencia",
    "AMD Ryzen gaming",
  ],
  openGraph: {
    title: "VPS Gamer - Servidores Otimizados para Jogos",
    description:
      "Servidores VPS especializados para games com AMD Ryzen, Anti-DDoS avançado e suporte 24/7. Perfeitos para FiveM, Minecraft, Rust e muito mais.",
    url: "https://puffhost.com.br/vps-gamer",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "VPS Gamer PuffHost",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VPS Gamer - Servidores para Jogos | PuffHost",
    description: "Servidores VPS otimizados para games com performance máxima, Anti-DDoS e suporte 24/7.",
  },
  alternates: {
    canonical: "/vps-gamer",
  },
}

export default function VPSGamerLayout({
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
            name: "VPS Gamer",
            description: "Servidor VPS otimizado para jogos com AMD Ryzen e Anti-DDoS",
            brand: {
              "@type": "Brand",
              name: "PuffHost",
            },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "BRL",
              lowPrice: "29.90",
              highPrice: "599.90",
              offerCount: "5",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "150",
            },
          }),
        }}
      />
      {children}
    </>
  )
}
