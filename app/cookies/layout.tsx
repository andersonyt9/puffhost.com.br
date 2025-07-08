import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Cookies | PuffHost - Hospedagem de Servidores",
  description:
    "Saiba como utilizamos cookies em nossos serviços de hospedagem. Política transparente sobre coleta e uso de dados através de cookies.",
  keywords: "cookies, política de cookies, LGPD, privacidade, PuffHost, hospedagem",
  openGraph: {
    title: "Política de Cookies | PuffHost",
    description: "Política transparente sobre o uso de cookies nos serviços PuffHost",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
