import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da PuffHost - Como coletamos, usamos e protegemos seus dados pessoais de acordo com a LGPD.",
  keywords: [
    "política de privacidade",
    "LGPD",
    "proteção de dados",
    "privacidade",
    "dados pessoais",
    "PuffHost",
    "hospedagem",
  ],
  openGraph: {
    title: "Política de Privacidade | PuffHost",
    description: "Conheça nossa política de privacidade e como protegemos seus dados pessoais.",
    url: "/privacidade",
  },
  alternates: {
    canonical: "/privacidade",
  },
}

export default function PrivacidadeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
