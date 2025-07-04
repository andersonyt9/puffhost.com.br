import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ - Perguntas Frequentes | PuffHost",
  description:
    "Encontre respostas para as principais dúvidas sobre hospedagem, VPS, servidores dedicados, gaming, pagamento e suporte técnico.",
  keywords: [
    "FAQ puffhost",
    "perguntas frequentes",
    "dúvidas hospedagem",
    "ajuda VPS",
    "suporte técnico",
    "como contratar",
    "dúvidas gaming",
    "pagamento hospedagem",
  ],
  openGraph: {
    title: "FAQ - Perguntas Frequentes sobre Hospedagem",
    description: "Central de ajuda com respostas para todas as suas dúvidas sobre nossos serviços.",
    url: "https://puffhost.com.br/faq",
    images: [
      {
        url: "/og-faq.jpg",
        width: 1200,
        height: 630,
        alt: "FAQ PuffHost",
      },
    ],
  },
  alternates: {
    canonical: "/faq",
  },
}

export default function FAQLayout({
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
            "@type": "FAQPage",
            name: "Perguntas Frequentes - PuffHost",
            description: "Respostas para as principais dúvidas sobre hospedagem",
            url: "https://puffhost.com.br/faq",
            mainEntity: [
              {
                "@type": "Question",
                name: "O que é a PuffHost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A PuffHost é uma empresa brasileira especializada em hospedagem de alta performance, oferecendo VPS, servidores semi-dedicados e dedicados com infraestrutura nacional de última geração.",
                },
              },
              {
                "@type": "Question",
                name: "Onde estão localizados os servidores?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nossos servidores estão localizados em datacenters Tier 1 no Brasil, especificamente em São Paulo, Rio de Janeiro e Fortaleza.",
                },
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
