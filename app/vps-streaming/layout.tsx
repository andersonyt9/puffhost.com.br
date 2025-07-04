import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "VPS Streaming - Servidores para Criadores | PuffHost",
  description:
    "VPS Streaming otimizado para OBS, multi-streaming e gravação. 4K 60fps, latência <2s, tráfego ilimitado. Ideal para Twitch, YouTube e Facebook Gaming.",
  keywords: [
    "VPS streaming",
    "servidor streaming",
    "OBS servidor",
    "streaming twitch",
    "streaming youtube",
    "multi-streaming",
    "servidor criadores",
    "hospedagem streaming",
    "4K streaming",
    "baixa latencia streaming",
  ],
  openGraph: {
    title: "VPS Streaming - Servidores para Criadores de Conteúdo",
    description:
      "Servidores VPS especializados em streaming com qualidade 4K, multi-plataforma e suporte creator 24/7.",
    url: "https://puffhost.com.br/vps-streaming",
    images: [
      {
        url: "/og-vps-streaming.jpg",
        width: 1200,
        height: 630,
        alt: "VPS Streaming PuffHost",
      },
    ],
  },
  alternates: {
    canonical: "/vps-streaming",
  },
}

export default function VPSStreamingLayout({
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
            name: "VPS Streaming",
            description: "Servidor VPS otimizado para streaming e criadores de conteúdo",
            brand: {
              "@type": "Brand",
              name: "PuffHost",
            },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "BRL",
              lowPrice: "89.90",
              highPrice: "699.90",
              offerCount: "5",
            },
          }),
        }}
      />
      {children}
    </>
  )
}
