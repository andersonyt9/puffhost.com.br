"use client"

import { useState, useEffect } from "react"
import {
  Zap,
  Shield,
  Headphones,
  HardDrive,
  ChevronDown,
  ChevronUp,
  Cpu,
  CheckCircle,
  Gamepad2,
  Star,
  Globe,
  Award,
  Rocket,
  Server,
  HelpCircle,
  ArrowUp,
} from "lucide-react"

export default function VpsGamerPage() {
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null)
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const togglePlan = (planName: string) => {
    setExpandedPlan(expandedPlan === planName ? null : planName)
  }

  const toggleFaq = (faqId: string) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId)
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Dados dos planos VPS
  const vpsPlans = [
    {
      name: "VPS Gamer 1",
      ram: "2GB RAM",
      cpu: "2 CPU",
      storage: "40 GB SSD/NVMe",
      price: "70,90",
      popular: false,
    },
    {
      name: "VPS Gamer 2",
      ram: "4GB RAM",
      cpu: "2 CPU",
      storage: "50 GB SSD/NVMe",
      price: "90,90",
      popular: false,
    },
    {
      name: "VPS Gamer 3",
      ram: "6GB RAM",
      cpu: "3 CPU",
      storage: "60 GB SSD/NVMe",
      price: "118,90",
      popular: true,
    },
    {
      name: "VPS Gamer 4",
      ram: "8GB RAM",
      cpu: "4 CPU",
      storage: "70 GB SSD/NVMe",
      price: "167,90",
      popular: false,
    },
    {
      name: "VPS Gamer 5",
      ram: "12GB RAM",
      cpu: "6 CPU",
      storage: "80 GB SSD/NVMe",
      price: "257,90",
      popular: false,
    },
    {
      name: "VPS Gamer 6",
      ram: "16GB RAM",
      cpu: "10 CPU",
      storage: "100 GB SSD/NVMe",
      price: "357,90",
      popular: false,
    },
    {
      name: "VPS Gamer 7",
      ram: "20GB RAM",
      cpu: "12 CPU",
      storage: "120 GB SSD/NVMe",
      price: "447,90",
      popular: false,
    },
    {
      name: "VPS Gamer 8",
      ram: "32GB RAM",
      cpu: "16 CPU",
      storage: "150 GB SSD/NVMe",
      price: "557,90",
      popular: false,
    },
  ]

  const planDetails = {
    "VPS Gamer 1": {
      specs: {
        processor: "AMD Ryzen 9 5900X",
        storage: "40 GB SSD/NVMe",
        memory: "2GB RAM DDR4",
        network: "Link dedicado de 1Gbps",
        location: "Brasil (São Paulo)",
      },
      resources: {
        protection: "Anti-DDoS",
        setup: "Ativação imediata",
        backup: "Sem backup automático",
        panel: "Painel básico incluso",
        support: "Suporte técnico 24/7",
      },
      games: {
        minecraft: "até 20 jogadores",
        csgo: "até 12 jogadores",
        terraria: "até 16 jogadores",
      },
    },
    "VPS Gamer 2": {
      specs: {
        processor: "AMD Ryzen 9 5900X",
        storage: "50 GB SSD/NVMe",
        memory: "4GB RAM DDR4",
        network: "Link dedicado de 1Gbps",
        location: "Brasil (São Paulo)",
      },
      resources: {
        protection: "Anti-DDoS",
        setup: "Ativação imediata",
        backup: "Sem backup automático",
        panel: "Painel básico incluso",
        support: "Suporte técnico 24/7",
      },
      games: {
        minecraft: "até 40 jogadores",
        csgo: "até 24 jogadores",
        rust: "até 30 jogadores",
        terraria: "até 32 jogadores",
      },
    },
    "VPS Gamer 3": {
      specs: {
        processor: "AMD Ryzen 9 5900X",
        storage: "60 GB SSD/NVMe",
        memory: "6GB RAM DDR4",
        network: "Link dedicado de 1Gbps",
        location: "Brasil (São Paulo)",
      },
      resources: {
        protection: "Anti-DDoS",
        setup: "Ativação imediata",
        backup: "Sem backup automático",
        panel: "Painel básico incluso",
        support: "Suporte técnico 24/7",
      },
      games: {
        minecraft: "até 100 jogadores",
        csgo: "até 64 jogadores",
        rust: "até 80 jogadores",
        ark: "até 50 jogadores",
        valheim: "até 64 jogadores",
      },
    },
    "VPS Gamer 4": {
      specs: {
        processor: "AMD Ryzen 9 5900X",
        storage: "70 GB SSD/NVMe",
        memory: "8GB RAM DDR4",
        network: "Link dedicado de 1Gbps",
        location: "Brasil (São Paulo)",
      },
      resources: {
        protection: "Anti-DDoS",
        setup: "Ativação imediata",
        backup: "Sem backup automático",
        panel: "Painel básico incluso",
        support: "Suporte técnico 24/7",
      },
      games: {
        minecraft: "até 200 jogadores",
        csgo: "até 128 jogadores",
        rust: "até 150 jogadores",
        ark: "até 100 jogadores",
        valheim: "até 128 jogadores",
        fivem: "até 128 jogadores",
      },
    },
    "VPS Gamer 5": {
      specs: {
        processor: "AMD Ryzen 9 5900X",
        storage: "80 GB SSD/NVMe",
        memory: "12GB RAM DDR4",
        network: "Link dedicado de 1Gbps",
        location: "Brasil (São Paulo)",
      },
      resources: {
        protection: "Anti-DDoS",
        setup: "Ativação imediata",
        backup: "Sem backup automático",
        panel: "Painel básico incluso",
        support: "Suporte técnico 24/7",
      },
      games: {
        minecraft: "até 500 jogadores",
        csgo: "até 256 jogadores",
        rust: "até 300 jogadores",
        ark: "até 200 jogadores",
        valheim: "até 256 jogadores",
        fivem: "até 256 jogadores",
      },
    },
    "VPS Gamer 6": {
      specs: {
        processor: "AMD Ryzen 9 5900X",
        storage: "100 GB SSD/NVMe",
        memory: "16GB RAM DDR4",
        network: "Link dedicado de 1Gbps",
        location: "Brasil (São Paulo)",
      },
      resources: {
        protection: "Anti-DDoS",
        setup: "Ativação imediata",
        backup: "Sem backup automático",
        panel: "Painel básico incluso",
        support: "Suporte técnico 24/7",
      },
      games: {
        minecraft: "até 500 jogadores",
        csgo: "até 256 jogadores",
        rust: "até 300 jogadores",
        ark: "até 200 jogadores",
        valheim: "até 256 jogadores",
        fivem: "até 256 jogadores",
      },
    },
    "VPS Gamer 7": {
      specs: {
        processor: "AMD Ryzen 9 5900X",
        storage: "120 GB SSD/NVMe",
        memory: "20GB RAM DDR4",
        network: "Link dedicado de 1Gbps",
        location: "Brasil (São Paulo)",
      },
      resources: {
        protection: "Anti-DDoS",
        setup: "Ativação imediata",
        backup: "Sem backup automático",
        panel: "Painel básico incluso",
        support: "Suporte técnico 24/7",
      },
      games: {
        minecraft: "até 500 jogadores",
        csgo: "até 256 jogadores",
        rust: "até 300 jogadores",
        ark: "até 200 jogadores",
        valheim: "até 256 jogadores",
        fivem: "até 256 jogadores",
      },
    },
    "VPS Gamer 8": {
      specs: {
        processor: "AMD Ryzen 9 5900X",
        storage: "150 GB SSD/NVMe",
        memory: "32GB RAM DDR4",
        network: "Link dedicado de 1Gbps",
        location: "Brasil (São Paulo)",
      },
      resources: {
        protection: "Anti-DDoS",
        setup: "Ativação imediata",
        backup: "Sem backup automático",
        panel: "Painel básico incluso",
        support: "Suporte técnico 24/7",
      },
      games: {
        minecraft: "até 500 jogadores",
        csgo: "até 256 jogadores",
        rust: "até 300 jogadores",
        ark: "até 200 jogadores",
        valheim: "até 256 jogadores",
        fivem: "até 256 jogadores",
      },
    },
  }

  // FAQ específico para VPS Gamer
  const faqItems = [
    {
      id: "latencia",
      question: "Qual é a latência média dos servidores VPS Gamer?",
      answer:
        "Nossos servidores VPS Gamer possuem latência média de 15-30ms para as principais regiões do Brasil. Utilizamos infraestrutura com processadores AMD Ryzen 9 5900X e rotas otimizadas para garantir boa experiência em jogos online.",
    },
    {
      id: "ddos",
      question: "Como funciona a proteção anti-DDoS?",
      answer:
        "Oferecemos proteção anti-DDoS em todos os planos VPS Gamer. Nossa proteção é automática e ajuda a mitigar ataques comuns, mantendo seu servidor online na maioria das situações.",
    },
    {
      id: "jogos",
      question: "Posso hospedar qualquer tipo de jogo no VPS Gamer?",
      answer:
        "Sim! Nossos servidores VPS Gamer são compatíveis com a maioria dos jogos populares como Minecraft, CS:GO, Rust, ARK, Valheim, FiveM, entre outros. Cada plano é dimensionado para diferentes capacidades de jogadores.",
    },
    {
      id: "ativacao",
      question: "Quanto tempo leva para ativar meu servidor VPS Gamer?",
      answer:
        "A ativação é feita em poucos minutos após a confirmação do pagamento! Você receberá os dados de acesso por email e poderá começar a configurar seu servidor de jogos imediatamente.",
    },
    {
      id: "suporte",
      question: "Vocês ajudam na configuração inicial do servidor?",
      answer:
        "Oferecemos suporte técnico 24/7 para ajudar com dúvidas sobre configuração do seu servidor VPS Gamer. Nossa equipe pode orientar sobre instalação básica e configurações iniciais.",
    },
    {
      id: "upgrade",
      question: "É possível fazer upgrade de plano sem perder dados?",
      answer:
        "Sim! Você pode fazer upgrade do seu plano VPS Gamer através do painel de controle. Recomendamos fazer backup dos seus dados antes de qualquer alteração para garantir segurança.",
    },
    {
      id: "backup",
      question: "Como posso fazer backup dos meus dados?",
      answer:
        "Os backups são de responsabilidade do cliente. Recomendamos fazer backups regulares dos seus mundos e configurações de jogos. Você pode usar ferramentas do próprio sistema ou soluções externas.",
    },
    {
      id: "painel",
      question: "Qual painel de controle é usado nos VPS Gamer?",
      answer:
        "Fornecemos um painel básico de controle que permite gerenciar seu VPS, reiniciar, monitorar recursos e acessar logs básicos. Para funcionalidades específicas de jogos, você pode instalar painéis adicionais.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100 opacity-20"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-5 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg mb-10 transform hover:scale-105 transition-all duration-300">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
              </svg>
              VPS GAMER PREMIUM
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
              </svg>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-5 leading-tight">
              Servidores{" "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                VPS Gamer
              </span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                de Alta Performance
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed font-medium">
              Domine os jogos com{" "}
              <span className="text-pink-600 font-bold bg-pink-100 px-2 py-1 rounded-lg">latência otimizada</span>,{" "}
              <span className="text-purple-600 font-bold bg-purple-100 px-2 py-1 rounded-lg">proteção DDoS</span>{" "}
              e <span className="text-pink-600 font-bold bg-pink-100 px-2 py-1 rounded-lg">suporte técnico 24/7</span>
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-gray-200 hover:border-pink-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17L10.59 10.75C10.21 10.28 9.68 10 9 10C7.9 10 7 10.9 7 12S7.9 14 9 14C10.1 14 11 13.1 11 12C11 11.32 10.72 10.79 10.25 10.41L15.83 4.83L18.5 7.5L20 6L21 9ZM4 12C4 16.97 7.84 21 12.8 21C13.04 21 13.27 21 13.5 20.96V19.96C13.17 19.99 12.84 20 12.5 20C8.36 20 5 16.64 5 12.5C5 11.28 5.22 10.12 5.61 9.06L4.65 8.29C4.23 9.47 4 10.71 4 12Z" />
                  </svg>
                </div>
                <div className="text-2xl font-black text-gray-900 mb-1">{"<15ms"}</div>
                <div className="text-sm font-bold text-gray-700 mb-1">Latência Otimizada</div>
                <div className="text-xs text-pink-600 font-semibold flex items-center justify-center">
                  <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z" />
                  </svg>
                  Boa Resposta
                </div>
              </div>

              <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V14.5C14.8,16.4 13.4,18 12,18C10.6,18 9.2,16.4 9.2,14.5V10C9.2,8.6 10.6,7 12,7Z" />
                  </svg>
                </div>
                <div className="text-2xl font-black text-gray-900 mb-1">99.5%</div>
                <div className="text-sm font-bold text-gray-700 mb-1">Uptime Médio</div>
                <div className="text-xs text-purple-600 font-semibold flex items-center justify-center">
                  <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
                  </svg>
                  Boa Disponibilidade
                </div>
              </div>

              <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-gray-200 hover:border-pink-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16,4C18.11,4 20.11,4.89 21.39,6.39L22.5,5.5C20.86,3.85 18.54,3 16,3C13.46,3 11.14,3.85 9.5,5.5L10.61,6.39C11.89,4.89 13.89,4 16,4M16,7C17.38,7 18.63,7.56 19.54,8.46L20.5,7.5C19.27,6.27 17.68,5.5 16,5.5C14.32,5.5 12.73,6.27 11.5,7.5L12.46,8.46C13.37,7.56 14.62,7 16,7M16,10.5C16.69,10.5 17.32,10.82 17.71,11.29L16,13L14.29,11.29C14.68,10.82 15.31,10.5 16,10.5M7,14C5.9,14 5,14.9 5,16V20C5,21.1 5.9,22 7,22H9C10.1,22 11,21.1 11,20V16C11,14.9 10.1,14 9,14H7Z" />
                  </svg>
                </div>
                <div className="text-2xl font-black text-gray-900 mb-1">500+</div>
                <div className="text-sm font-bold text-gray-700 mb-1">Jogadores Suportados</div>
                <div className="text-xs text-pink-600 font-semibold flex items-center justify-center">
                  <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
                  </svg>
                  Plano Máximo
                </div>
              </div>

              <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,1C14.67,1.58 16.42,3.25 17,5.25C17.58,7.25 16.67,9.58 14.5,11.5C13.5,12.42 12.25,13 11,13C9.75,13 8.5,12.42 7.5,11.5C5.33,9.58 4.42,7.25 5,5.25C5.58,3.25 7.33,1.58 10,1H12M12,2.5C11.25,2.5 10.5,2.92 10,3.5C9.5,4.08 9.25,4.83 9.5,5.5C9.75,6.17 10.42,6.5 11,6.5C11.58,6.5 12.25,6.17 12.5,5.5C12.75,4.83 12.5,4.08 12,3.5C11.5,2.92 10.75,2.5 10,2.5H12M7,14H17A2,2 0 0,1 19,16V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V16A2,2 0 0,1 7,14M8,15A1,1 0 0,0 7,16V20A1,1 0 0,0 8,21H16A1,1 0 0,0 17,20V16A1,1 0 0,0 16,15H8Z" />
                  </svg>
                </div>
                <div className="text-2xl font-black text-gray-900 mb-1">24/7</div>
                <div className="text-sm font-bold text-gray-700 mb-1">Suporte Técnico</div>
                <div className="text-xs text-purple-600 font-semibold flex items-center justify-center">
                  <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2Z" />
                  </svg>
                  Sempre Disponível
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap justify-center items-center gap-6 opacity-70">
              <div className="flex items-center text-sm text-gray-600 font-medium">
                <svg className="w-4 h-4 text-green-500 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.41,10.09L6,11.5L11,16.5Z" />
                </svg>
                <span>Ativação Rápida</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 font-medium">
                <svg className="w-4 h-4 text-green-500 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.41,10.09L6,11.5L11,16.5Z" />
                </svg>
                <span>Sem Taxa de Setup</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 font-medium">
                <svg className="w-4 h-4 text-green-500 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.41,10.09L6,11.5L11,16.5Z" />
                </svg>
                <span>Cancele Quando Quiser</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 font-medium">
                <svg className="w-4 h-4 text-green-500 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.41,10.09L6,11.5L11,16.5Z" />
                </svg>
                <span>Infraestrutura Confiável</span>
              </div>
            </div>

            <div className="mt-16 flex flex-col items-center">
              <p className="text-sm text-gray-500 font-medium mb-3">Role para baixo para ver os planos</p>
              <div className="animate-bounce">
                <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-pink-100 text-pink-600 mb-6">
              <Server className="w-4 h-4 mr-2" />
              PLANOS VPS GAMER
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Escolha seu{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                arsenal perfeito
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Planos otimizados para diferentes tipos de jogos e necessidades de performance
            </p>
          </div>

          <div className="space-y-4">
            {vpsPlans.map((plan) => {
              const isExpanded = expandedPlan === plan.name
              const details = planDetails[plan.name as keyof typeof planDetails]

              return (
                <div
                  key={plan.name}
                  className={`bg-white rounded-2xl shadow-lg border overflow-hidden transition-all duration-300 ${plan.popular ? "border-pink-300 ring-2 ring-pink-200" : "border-gray-200"}`}
                >
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                      <Star className="w-4 h-4 inline mr-2" />
                      MAIS POPULAR
                      <Star className="w-4 h-4 inline ml-2" />
                    </div>
                  )}

                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => togglePlan(plan.name)}
                          className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-pink-500" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-pink-500" />
                          )}
                        </button>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                          {plan.popular && (
                            <div className="text-sm text-pink-600 font-medium">Recomendado para a maioria</div>
                          )}
                        </div>
                      </div>

                      <div className="hidden md:flex items-center justify-center space-x-12 flex-1">
                        <div className="text-center">
                          <div className="text-sm font-medium text-gray-700">{plan.ram}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium text-gray-700">{plan.cpu}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium text-gray-700">{plan.storage}</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-6">
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">R${plan.price}</div>
                          <div className="text-sm text-gray-600">/mês</div>
                          <div className="text-xs text-pink-600 font-medium">10% OFF no anual</div>
                        </div>
                        <button
                          className={`inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 px-8 py-3 text-base whitespace-nowrap ${plan.popular ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg hover:shadow-xl" : "bg-gray-800 text-white hover:bg-gray-700"}`}
                        >
                          Contratar agora
                        </button>
                      </div>
                    </div>

                    <div className="md:hidden mt-3 flex items-center justify-center space-x-6">
                      <span className="text-sm text-gray-600">{plan.ram}</span>
                      <span className="text-sm text-gray-600">{plan.cpu}</span>
                      <span className="text-sm text-gray-600">{plan.storage}</span>
                    </div>
                  </div>

                  {isExpanded && details && (
                    <div className="border-t border-gray-200 p-6 bg-gray-50">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div>
                          <h4 className="text-lg font-semibold text-pink-500 mb-4 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Especificações Técnicas
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <span className="font-medium text-gray-900">Processador:</span>
                                <span className="text-gray-600 ml-1">{details.specs.processor}</span>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <span className="font-medium text-gray-900">Armazenamento:</span>
                                <span className="text-gray-600 ml-1">{details.specs.storage}</span>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <span className="font-medium text-gray-900">Memória:</span>
                                <span className="text-gray-600 ml-1">{details.specs.memory}</span>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <span className="font-medium text-gray-900">Rede:</span>
                                <span className="text-gray-600 ml-1">{details.specs.network}</span>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <span className="font-medium text-gray-900">Localização:</span>
                                <span className="text-gray-600 ml-1">{details.specs.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-pink-500 mb-4 flex items-center">
                            <Award className="w-5 h-5 mr-2" />
                            Recursos Inclusos
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <span className="font-medium text-gray-900">Proteção:</span>
                                <span className="text-gray-600 ml-1">{details.resources.protection}</span>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <span className="font-medium text-gray-900">Setup:</span>
                                <span className="text-gray-600 ml-1">{details.resources.setup}</span>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <span className="font-medium text-gray-900">Backup:</span>
                                <span className="text-gray-600 ml-1">{details.resources.backup}</span>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <span className="font-medium text-gray-900">Painel de controle:</span>
                                <span className="text-gray-600 ml-1">{details.resources.panel}</span>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <span className="font-medium text-gray-900">Suporte:</span>
                                <span className="text-gray-600 ml-1">{details.resources.support}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-pink-500 mb-4 flex items-center">
                            <Gamepad2 className="w-5 h-5 mr-2" />
                            Jogos Suportados
                          </h4>
                          <div className="space-y-3">
                            {Object.entries(details.games).map(([game, players]) => (
                              <div key={game} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                  <span className="font-medium text-gray-900 capitalize">
                                    {game.replace("csgo", "CS:GO").replace("fivem", "FiveM")}:
                                  </span>
                                  <span className="text-gray-600 ml-1">{players}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-600 mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              INFRAESTRUTURA CONFIÁVEL
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Infraestrutura{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">sólida</span>{" "}
              para seus jogos
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Nossa infraestrutura foi desenvolvida para oferecer uma base confiável para seus servidores de jogos, com
              recursos essenciais para uma boa experiência.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-2xl hover:border-pink-200 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Latência Otimizada</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Servidores localizados no Brasil para garantir latência de 15-30ms para as principais regiões,
                proporcionando uma experiência de jogo mais fluida.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-pink-500 mr-3 flex-shrink-0" />
                  Servidores em São Paulo
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-pink-500 mr-3 flex-shrink-0" />
                  Roteamento otimizado
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-pink-500 mr-3 flex-shrink-0" />
                  Monitoramento básico
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-2xl hover:border-pink-200 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proteção Anti-DDoS</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sistema anti-DDoS básico que ajuda a proteger seus servidores contra ataques comuns, mantendo seus jogos
                online na maioria das situações.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-pink-500 mr-3 flex-shrink-0" />
                  Proteção contra ataques básicos
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-pink-500 mr-3 flex-shrink-0" />
                  Firewall configurável
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-pink-500 mr-3 flex-shrink-0" />
                  Mitigação automática
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-2xl hover:border-pink-200 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Suporte Técnico 24/7</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Equipe de suporte técnico disponível 24/7 para ajudar com dúvidas sobre configuração e funcionamento do
                seu servidor VPS.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-pink-500 mr-3 flex-shrink-0" />
                  Suporte via chat e ticket
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-pink-500 mr-3 flex-shrink-0" />
                  Orientação técnica básica
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-pink-500 mr-3 flex-shrink-0" />
                  Disponível 24 horas
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garantias Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-600 mb-6">
              <Award className="w-4 h-4 mr-2" />O QUE OFERECEMOS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Recursos{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                inclusos
              </span>{" "}
              em todos os planos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">99.5% Uptime</h3>
              <p className="text-sm text-gray-600">Disponibilidade média dos servidores</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Rede 1Gbps</h3>
              <p className="text-sm text-gray-600">Conectividade de alta velocidade</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <HardDrive className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">SSD/NVMe</h3>
              <p className="text-sm text-gray-600">Armazenamento de alta performance</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Suporte 24/7</h3>
              <p className="text-sm text-gray-600">Atendimento técnico sempre disponível</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-600 mb-6">
              <HelpCircle className="w-4 h-4 mr-2" />
              PERGUNTAS FREQUENTES
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Dúvidas sobre{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                VPS Gamer
              </span>
              ?
            </h2>
            <p className="text-lg text-gray-600">
              Encontre respostas para as principais dúvidas sobre nossos servidores VPS Gamer
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => {
              const isExpanded = expandedFaq === item.id

              return (
                <div
                  key={item.id}
                  className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <HelpCircle className="w-5 h-5 text-pink-500 flex-shrink-0" />
                      <span className="font-semibold text-gray-900 text-base pr-4">{item.question}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-pink-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-pink-500" />
                      )}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 bg-white border-t border-gray-200">
                      <div className="flex items-start space-x-3 pt-4">
                        <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div className="text-gray-700 text-sm leading-relaxed">{item.answer}</div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}