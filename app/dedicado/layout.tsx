import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servidores Dedicados - Hardware Exclusivo | PuffHost",
  description:
    "Servidores Dedicados com hardware 100% exclusivo, AMD Ryzen/Intel Xeon, até 128GB RAM, configuração personalizada e suporte VIP 24/7.",
  keywords: [
    "servidor dedicado",
    "hardware dedicado",
    "servidor exclusivo",
    "AMD Ryzen dedicado",
    "Intel Xeon",
    "servidor físico",
    "configuração personalizada",
    "suporte VIP",
  ],
  openGraph: {
    title: "Servidores Dedicados - Hardware 100% Exclusivo",
    description: "Servidores físicos com hardware exclusivo e configuração personalizada para máxima performance.",
    url: "https://puffhost.com.br/dedicado",
    images: [
      {
        url: "/og-dedicado.jpg",
        width: 1200,
        height: 630,
        alt: "Servidores Dedicados PuffHost",
      },
    ],
  },
  alternates: {
    canonical: "/dedicado",
  },
}

export default function DedicadoLayout({
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
            name: "Servidor Dedicado",
            description: "Servidor físico com hardware 100% exclusivo",
            brand: {
              "@type": "Brand",
              name: "PuffHost",
            },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "BRL",
              lowPrice: "800.00",
              highPrice: "1650.00",
              offerCount: "3",
            },
          }),
        }}
      />
      {children}
    </>
  )
}
