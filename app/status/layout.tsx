import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Status dos Serviços | PuffHost - Monitoramento em Tempo Real",
  description:
    "Acompanhe o status em tempo real dos serviços PuffHost. Verifique uptime, incidentes e manutenções programadas dos nossos servidores de hospedagem.",
  keywords: [
    "status puffhost",
    "uptime servidor",
    "monitoramento hospedagem",
    "status vps",
    "servidor dedicado status",
    "incidentes puffhost",
    "manutenção servidor",
    "disponibilidade hospedagem",
  ].join(", "),
  openGraph: {
    title: "Status dos Serviços | PuffHost",
    description: "Monitoramento em tempo real dos serviços de hospedagem PuffHost",
    type: "website",
    siteName: "PuffHost",
  },
  twitter: {
    card: "summary_large_image",
    title: "Status dos Serviços | PuffHost",
    description: "Monitoramento em tempo real dos serviços de hospedagem PuffHost",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function StatusLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
