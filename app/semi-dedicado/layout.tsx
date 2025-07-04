import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servidores Semi-Dedicados - Recursos Garantidos | PuffHost",
  description:
    "Servidores Semi-Dedicados com recursos 100% dedicados, AMD Ryzen 9 5900X, até 64GB RAM e SSD NVMe. Performance empresarial garantida.",
  keywords: [
    "servidor semi-dedicado",
    "semi dedicado",
    "recursos dedicados",
    "servidor empresarial",
    "AMD Ryzen 9",
    "hospedagem empresarial",
    "servidor garantido",
    "performance empresarial",
  ],
  openGraph: {
    title: "Servidores Semi-Dedicados - Performance Empresarial",
    description: "Servidores com recursos 100% dedicados e performance empresarial garantida.",
    url: "https://puffhost.com.br/semi-dedicado",
    images: [
      {
        url: "/og-semi-dedicado.jpg",
        width: 1200,
        height: 630,
        alt: "Servidores Semi-Dedicados PuffHost",
      },
    ],
  },
  alternates: {
    canonical: "/semi-dedicado",
  },
}

export default function SemiDedicadoLayout({
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
            name: "Servidor Semi-Dedicado",
            description: "Servidor com recursos 100% dedicados e performance empresarial",
            brand: {
              "@type": "Brand",
              name: "PuffHost",
            },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "BRL",
              lowPrice: "305.96",
              highPrice: "669.90",
              offerCount: "4",
            },
          }),
        }}
      />
      {children}
    </>
  )
}
