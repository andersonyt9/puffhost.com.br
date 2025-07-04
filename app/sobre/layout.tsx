import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre a PuffHost - Hospedagem Premium no Brasil",
  description:
    "Conheça a PuffHost, empresa brasileira especializada em hospedagem premium. Nossa história, valores, equipe e infraestrutura de alta performance.",
  keywords: [
    "sobre puffhost",
    "empresa hospedagem brasil",
    "história puffhost",
    "equipe puffhost",
    "valores puffhost",
    "infraestrutura puffhost",
    "datacenter brasil",
    "hospedagem brasileira",
  ],
  openGraph: {
    title: "Sobre a PuffHost - Nossa História e Valores",
    description: "Conheça a PuffHost, empresa brasileira líder em hospedagem premium com infraestrutura de ponta.",
    url: "https://puffhost.com.br/sobre",
    images: [
      {
        url: "/og-sobre.jpg",
        width: 1200,
        height: 630,
        alt: "Sobre a PuffHost",
      },
    ],
  },
  alternates: {
    canonical: "/sobre",
  },
}

export default function SobreLayout({
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
            "@type": "AboutPage",
            name: "Sobre a PuffHost",
            description: "História, valores e equipe da PuffHost",
            url: "https://puffhost.com.br/sobre",
            mainEntity: {
              "@type": "Organization",
              name: "PuffHost",
              foundingDate: "2021",
              description: "Empresa brasileira especializada em hospedagem premium",
            },
          }),
        }}
      />
      {children}
    </>
  )
}
