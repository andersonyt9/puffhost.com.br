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
  Database,
  MemoryStick,
  Wifi,
  CheckCircle,
  Server,
  Star,
  Globe,
  Award,
  Rocket,
  HelpCircle,
  ArrowRight,
  ArrowUp,
  Activity,
  CloudLightning,
  TrendingUp,
} from "lucide-react"

export default function SemiDedicadoPage() {
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

  // Dados dos planos Semi-Dedicados
  const semiDedicatedPlans = [
    {
      name: "Puff CoreFusion",
      ram: "16GB RAM",
      cpu: "8 núcleos",
      storage: "100 GB SSD NVMe",
      price: "305,96",
      popular: false,
      link: "https://app.puffhost.com.br/index.php?rp=/store/semi-dedicado/semi-dedicado",
    },
    {
      name: "Puff SteelEngine",
      ram: "24GB RAM",
      cpu: "8 núcleos",
      storage: "250 GB SSD NVMe",
      price: "450,90",
      popular: true,
      link: "https://app.puffhost.com.br/index.php?rp=/store/semi-dedicado/semi-dedicado-2",
    },
    {
      name: "Puff NitroPulse",
      ram: "32GB RAM",
      cpu: "9 núcleos",
      storage: "250 GB SSD NVMe",
      price: "593,90",
      popular: false,
      link: "https://app.puffhost.com.br/index.php?rp=/store/semi-dedicado/semi-dedicado-3",
    },
    {
      name: "Puff IronMaster",
      ram: "64GB RAM",
      cpu: "9 núcleos",
      storage: "350 GB SSD NVMe",
      price: "669,90",
      popular: false,
      link: "https://app.puffhost.com.br/index.php?rp=/store/semi-dedicado/semi-dedicado-4",
    },
  ]

  const planDetails = {
    "Puff CoreFusion": {
      specs: {
        processor: "AMD Ryzen 9 9900X",
        storage: "100 GB SSD NVMe Gen4",
        memory: "16GB RAM DDR5",
        network: "Link dedicado de 1Gbps",
        location: "Brasil (São Paulo)",
      },
      resources: {
        protection: "Proteção Anti-DDoS básica",
        setup: "Ativação imediata",
        backup: "Sem backup automático",
        panel: "Painel de controle avançado",
        support: "Suporte técnico 24/7",
      },
      applications: {
        websites: "Sites de alto tráfego (50k+ visitantes/dia)",
        databases: "MySQL, PostgreSQL, MongoDB",
        ecommerce: "Lojas virtuais com até 10k produtos",
        apis: "APIs REST com alta demanda",
        applications: "Aplicações web empresariais",
      },
    },
    "Puff SteelEngine": {
      specs: {
        processor: "AMD Ryzen 9 9900X",
        storage: "250 GB SSD NVMe Gen4",
        memory: "24GB RAM DDR5",
        network: "Link dedicado de 1Gbps",
        location: "Brasil (São Paulo)",
      },
      resources: {
        protection: "Proteção Anti-DDoS básica",
        setup: "Ativação imediata",
        backup: "Sem backup automático",
        panel: "Painel de controle avançado",
        support: "Suporte técnico 24/7",
      },
      applications: {
        websites: "Sites de alto tráfego (100k+ visitantes/dia)",
        databases: "Bancos de dados complexos",
        ecommerce: "E-commerce com até 50k produtos",
        apis: "Microserviços e APIs críticas",
        applications: "ERP, CRM e sistemas empresariais",
      },
    },
    "Puff NitroPulse": {
      specs: {
        processor: "AMD Ryzen 9 9900X",
        storage: "250 GB SSD NVMe Gen4",
        memory: "32GB RAM DDR5",
        network: "Link dedicado de 1Gbps",
        location: "Brasil (São Paulo)",
      },
      resources: {
        protection: "Proteção Anti-DDoS básica",
        setup: "Ativação imediata",
        backup: "Sem backup automático",
        panel: "Painel de controle avançado",
        support: "Suporte técnico 24/7",
      },
      applications: {
        websites: "Portais corporativos de grande porte",
        databases: "Data warehouses e analytics",
        ecommerce: "Marketplaces com 100k+ produtos",
        apis: "Arquiteturas distribuídas complexas",
        applications: "Sistemas críticos de missão",
      },
    },
    "Puff IronMaster": {
      specs: {
        processor: "AMD Ryzen 9 9900X",
        storage: "350 GB SSD NVMe Gen4",
        memory: "64GB RAM DDR5",
        network: "Link dedicado de 1Gbps",
        location: "Brasil (São Paulo)",
      },
      resources: {
        protection: "Proteção Anti-DDoS básica",
        setup: "Ativação imediata",
        backup: "Sem backup automático",
        panel: "Painel de controle avançado",
        support: "Suporte técnico 24/7",
      },
      applications: {
        websites: "Aplicações web de alta complexidade",
        databases: "Big Data e processamento intensivo",
        ecommerce: "Plataformas enterprise de e-commerce",
        apis: "Sistemas distribuídos de larga escala",
        applications: "Aplicações de inteligência artificial",
      },
    },
  }

  // FAQ específico para Semi-Dedicados
  const faqItems = [
    {
      id: "diferenca",
      question: "Qual a diferença entre VPS e Semi-Dedicado?",
      answer:
        "Servidores Semi-Dedicados oferecem recursos garantidos e isolados, com hardware dedicado exclusivo para seu projeto. Diferente de um VPS tradicional, você não compartilha recursos físicos com outros usuários, garantindo performance consistente e previsível para aplicações críticas.",
    },
    {
      id: "recursos",
      question: "Os recursos são realmente garantidos?",
      answer:
        "Sim! Em nossos servidores Semi-Dedicados, CPU, RAM e armazenamento são completamente dedicados ao seu projeto. Não há overselling ou compartilhamento de recursos, garantindo que você sempre tenha acesso total à performance contratada.",
    },
    {
      id: "performance",
      question: "Qual a performance esperada dos processadores AMD Ryzen?",
      answer:
        "Utilizamos processadores AMD Ryzen 9 9900X de última geração, com arquitetura Zen 3, oferecendo até 4.8GHz de clock boost e cache L3 de 64MB. Isso garante performance excepcional para aplicações que exigem alto processamento, como bancos de dados, e-commerce e sistemas empresariais.",
    },
    {
      id: "backup",
      question: "Como funcionam os backups?",
      answer:
        "Não fornecemos serviço de backup automático. Como você tem acesso root completo ao servidor, é sua responsabilidade configurar e gerenciar backups dos seus dados, banco de dados e configurações. Recomendamos que você configure seus próprios backups regulares para garantir a segurança dos seus dados.",
    },
    {
      id: "ddos",
      question: "A proteção DDoS é realmente eficaz?",
      answer:
        "Nossa proteção anti-DDoS básica oferece proteção contra ataques comuns. O sistema é automatizado e sempre ativo, detectando e bloqueando ataques básicos em tempo real. Para proteção mais avançada, recomendamos soluções adicionais como Cloudflare.",
    },
    {
      id: "suporte",
      question: "O suporte técnico é especializado?",
      answer:
        "Nossa equipe de suporte oferece assistência 24/7 para questões de infraestrutura, conectividade e funcionamento do servidor. Oferecemos suporte via chat, ticket e telefone, com foco em resolver problemas relacionados ao hardware e conectividade.",
    },
    {
      id: "migracao",
      question: "Vocês ajudam na migração de outros provedores?",
      answer:
        "Oferecemos assistência básica na migração, ajudando com questões de conectividade e configuração inicial do servidor. No entanto, a migração de dados, aplicações e configurações específicas são de responsabilidade do cliente.",
    },
    {
      id: "escalabilidade",
      question: "É possível fazer upgrade de recursos?",
      answer:
        "Sim! Você pode fazer upgrade de RAM, CPU ou armazenamento entrando em contato com nosso suporte. O processo pode requerer uma breve manutenção, mas mantemos todas as suas configurações e dados intactos sempre que possível.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-gray-100 opacity-20"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center">
            {/* Badge Premium */}
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg mb-8 transform hover:scale-105 transition-all duration-300">
              <Server className="w-4 h-4 mr-2" />
              SERVIDORES SEMI-DEDICADOS
              <Award className="w-4 h-4 ml-2" />
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight">
              Performance{" "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                Empresarial
              </span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Recursos Garantidos
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed font-medium">
              Servidores com{" "}
              <span className="text-pink-600 font-bold bg-pink-100 px-2 py-1 rounded-lg">
                recursos dedicados exclusivos
              </span>
              , <span className="text-purple-600 font-bold bg-purple-100 px-2 py-1 rounded-lg">AMD Ryzen 9 9900X</span>{" "}
              e{" "}
              <span className="text-pink-600 font-bold bg-pink-100 px-2 py-1 rounded-lg">suporte empresarial 24/7</span>
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {/* Performance Card */}
              <div className="group bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:border-pink-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:rotate-6 transition-transform duration-300 shadow-md">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <div className="text-xl font-black text-gray-900 mb-1">AMD Ryzen</div>
                <div className="text-sm font-bold text-gray-700 mb-1">Processadores</div>
                <div className="text-xs text-pink-600 font-semibold flex items-center justify-center">
                  <Zap className="w-3 h-3 mr-1" />
                  Alta Performance
                </div>
              </div>

              {/* Resources Card */}
              <div className="group bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:rotate-6 transition-transform duration-300 shadow-md">
                  <MemoryStick className="w-5 h-5 text-white" />
                </div>
                <div className="text-xl font-black text-gray-900 mb-1">100%</div>
                <div className="text-sm font-bold text-gray-700 mb-1">Recursos Dedicados</div>
                <div className="text-xs text-purple-600 font-semibold flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Garantidos
                </div>
              </div>

              {/* Storage Card */}
              <div className="group bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:border-pink-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:rotate-6 transition-transform duration-300 shadow-md">
                  <HardDrive className="w-5 h-5 text-white" />
                </div>
                <div className="text-xl font-black text-gray-900 mb-1">NVMe</div>
                <div className="text-sm font-bold text-gray-700 mb-1">SSD Gen4</div>
                <div className="text-xs text-pink-600 font-semibold flex items-center justify-center">
                  <Activity className="w-3 h-3 mr-1" />
                  Ultra Rápido
                </div>
              </div>

              {/* Support Card */}
              <div className="group bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:rotate-6 transition-transform duration-300 shadow-md">
                  <Headphones className="w-5 h-5 text-white" />
                </div>
                <div className="text-xl font-black text-gray-900 mb-1">24/7</div>
                <div className="text-sm font-bold text-gray-700 mb-1">Suporte Técnico</div>
                <div className="text-xs text-purple-600 font-semibold flex items-center justify-center">
                  <Star className="w-3 h-3 mr-1" />
                  Especializado
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-4 opacity-70">
              <div className="flex items-center text-sm text-gray-600 font-medium">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>Ativação Imediata</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 font-medium">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>Migração Assistida</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 font-medium">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>99.5% Uptime</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 font-medium">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>Recursos Garantidos</span>
              </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="mt-12 flex flex-col items-center">
              <p className="text-sm text-gray-500 font-medium mb-2">Veja nossos planos abaixo</p>
              <div className="animate-bounce">
                <ArrowRight className="w-5 h-5 text-pink-500 rotate-90" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Semi-Dedicated Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-600 mb-4">
                <HelpCircle className="w-4 h-4 mr-2" />O QUE É SEMI-DEDICADO?
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Recursos{" "}
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Dedicados Exclusivos
                </span>
              </h2>
              <div className="space-y-4 text-gray-800">
                <p className="leading-relaxed">
                  Um servidor semi-dedicado oferece recursos de hardware completamente dedicados ao seu projeto. CPU,
                  RAM e armazenamento são exclusivos, sem compartilhamento com outros usuários.
                </p>
                <p className="leading-relaxed">
                  Ideal para empresas que precisam de performance consistente e previsível, com a flexibilidade de um
                  ambiente virtualizado mas com recursos físicos garantidos.
                </p>
                <p className="leading-relaxed text-pink-600 font-semibold bg-pink-50 p-3 rounded-lg">
                  💡 Com processadores AMD Ryzen 9 9900X e SSD NVMe Gen4, garantimos performance excepcional para suas
                  aplicações mais exigentes.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-3">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">CPU Dedicada</h3>
                <p className="text-xs text-gray-600">Núcleos exclusivos para seu projeto</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-3">
                  <MemoryStick className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">RAM Garantida</h3>
                <p className="text-xs text-gray-600">Memória DDR5 exclusiva</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-3">
                  <HardDrive className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">SSD NVMe</h3>
                <p className="text-xs text-gray-600">Armazenamento de alta velocidade</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-3">
                  <Wifi className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">Rede Premium</h3>
                <p className="text-xs text-gray-600">1Gbps dedicado com baixa latência</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-600 mb-4">
              <Server className="w-4 h-4 mr-2" />
              PLANOS SEMI-DEDICADOS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Escolha seu{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                plano ideal
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Recursos garantidos com processadores AMD Ryzen para máxima performance
            </p>
          </div>

          {/* Plans Cards */}
          <div className="space-y-4">
            {semiDedicatedPlans.map((plan) => {
              const isExpanded = expandedPlan === plan.name
              const details = planDetails[plan.name as keyof typeof planDetails]

              return (
                <div
                  key={plan.name}
                  className={`bg-white rounded-xl shadow-lg border overflow-hidden transition-all duration-300 ${
                    plan.popular ? "border-pink-300 ring-2 ring-pink-200" : "border-gray-200"
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                      <Star className="w-4 h-4 inline mr-2" />
                      MAIS POPULAR
                      <Star className="w-4 h-4 inline ml-2" />
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      {/* Left side - Chevron and Plan name */}
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
                          <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                          {plan.popular && (
                            <div className="text-sm text-pink-600 font-medium">Recomendado para empresas</div>
                          )}
                        </div>
                      </div>

                      {/* Center - Specs (visible on desktop) */}
                      <div className="hidden md:flex items-center justify-center space-x-8 flex-1">
                        <div className="text-center">
                          <div className="text-sm font-medium text-gray-800">{plan.ram}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium text-gray-800">{plan.cpu}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium text-gray-800">{plan.storage}</div>
                        </div>
                      </div>

                      {/* Right side - Price and button */}
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="text-xl font-bold text-gray-900">R${plan.price}</div>
                          <div className="text-sm text-gray-600">/mês</div>
                          <div className="text-xs text-pink-600 font-medium">15% OFF no anual</div>
                        </div>
                        <button
                          className={`inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 px-6 py-2 text-sm whitespace-nowrap ${
                            plan.popular
                              ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg hover:shadow-xl"
                              : plan.link
                                ? "bg-gray-800 text-white hover:bg-gray-700"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                          }`}
                          disabled={!plan.link}
                          onClick={() => plan.link && window.open(plan.link, "_blank")}
                        >
                          {plan.link ? "Contratar agora" : "Em breve"}
                        </button>
                      </div>
                    </div>

                    {/* Mobile specs */}
                    <div className="md:hidden mt-3 flex items-center justify-center space-x-6">
                      <span className="text-sm text-gray-600">{plan.ram}</span>
                      <span className="text-sm text-gray-600">{plan.cpu}</span>
                      <span className="text-sm text-gray-600">{plan.storage}</span>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {isExpanded && details && (
                    <div className="border-t border-gray-200 p-5 bg-gray-50">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Especificações Técnicas */}
                        <div>
                          <h4 className="text-base font-semibold text-pink-500 mb-3 flex items-center">
                            <Cpu className="w-4 h-4 mr-2" />
                            Especificações Técnicas
                          </h4>
                          <div className="space-y-2">
                            <div className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <span className="font-medium text-gray-900 text-sm">Processador:</span>
                                <span className="text-gray-700 ml-1 text-sm">{details.specs.processor}</span>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <span className="font-medium text-gray-900 text-sm">Armazenamento:</span>
                                <span className="text-gray-700 ml-1 text-sm">{details.specs.storage}</span>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <span className="font-medium text-gray-900 text-sm">Memória:</span>
                                <span className="text-gray-700 ml-1 text-sm">{details.specs.memory}</span>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <span className="font-medium text-gray-900 text-sm">Rede:</span>
                                <span className="text-gray-700 ml-1 text-sm">{details.specs.network}</span>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <span className="font-medium text-gray-900 text-sm">Localização:</span>
                                <span className="text-gray-700 ml-1 text-sm">{details.specs.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Recursos Inclusos */}
                        <div>
                          <h4 className="text-base font-semibold text-pink-500 mb-3 flex items-center">
                            <Award className="w-4 h-4 mr-2" />
                            Recursos Inclusos
                          </h4>
                          <div className="space-y-2">
                            <div className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <span className="font-medium text-gray-900 text-sm">Proteção:</span>
                                <span className="text-gray-700 ml-1 text-sm">{details.resources.protection}</span>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <span className="font-medium text-gray-900 text-sm">Setup:</span>
                                <span className="text-gray-700 ml-1 text-sm">{details.resources.setup}</span>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <span className="font-medium text-gray-900 text-sm">Backup:</span>
                                <span className="text-gray-700 ml-1 text-sm">{details.resources.backup}</span>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <span className="font-medium text-gray-900 text-sm">Painel:</span>
                                <span className="text-gray-700 ml-1 text-sm">{details.resources.panel}</span>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <span className="font-medium text-gray-900 text-sm">Suporte:</span>
                                <span className="text-gray-700 ml-1 text-sm">{details.resources.support}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Aplicações Suportadas */}
                        <div>
                          <h4 className="text-base font-semibold text-pink-500 mb-3 flex items-center">
                            <Globe className="w-4 h-4 mr-2" />
                            Aplicações Suportadas
                          </h4>
                          <div className="space-y-2">
                            {Object.entries(details.applications).map(([app, description]) => (
                              <div key={app} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                  <span className="font-medium text-gray-900 text-sm capitalize">
                                    {app.replace("websites", "Sites").replace("databases", "Bancos de Dados")}:
                                  </span>
                                  <span className="text-gray-700 ml-1 text-sm">{description}</span>
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
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-600 mb-4">
              <Rocket className="w-4 h-4 mr-2" />
              TECNOLOGIA EMPRESARIAL
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Infraestrutura{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                de ponta
              </span>{" "}
              para empresas
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Hardware dedicado com tecnologias de última geração para garantir máxima performance e confiabilidade
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Performance Garantida */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl hover:border-pink-200 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Performance Garantida</h3>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                Recursos de CPU, RAM e armazenamento completamente dedicados ao seu projeto, sem compartilhamento com
                outros usuários, garantindo performance consistente.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-3 h-3 text-pink-500 mr-2 flex-shrink-0" />
                  CPU dedicada exclusiva
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-3 h-3 text-pink-500 mr-2 flex-shrink-0" />
                  RAM DDR5 garantida
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-3 h-3 text-pink-500 mr-2 flex-shrink-0" />
                  SSD NVMe Gen4 exclusivo
                </div>
              </div>
            </div>

            {/* Proteção Empresarial */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl hover:border-pink-200 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Proteção Básica</h3>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                Sistema anti-DDoS básico com firewall configurável e monitoramento 24/7, oferecendo proteção adequada
                para a maioria das aplicações empresariais.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-3 h-3 text-pink-500 mr-2 flex-shrink-0" />
                  Proteção DDoS básica
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-3 h-3 text-pink-500 mr-2 flex-shrink-0" />
                  Firewall configurável
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-3 h-3 text-pink-500 mr-2 flex-shrink-0" />
                  Monitoramento em tempo real
                </div>
              </div>
            </div>

            {/* Suporte Especializado */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl hover:border-pink-200 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Suporte Técnico</h3>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                Equipe técnica disponível 24/7 para resolver questões de infraestrutura, conectividade e funcionamento
                do servidor com rapidez e eficiência.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-3 h-3 text-pink-500 mr-2 flex-shrink-0" />
                  Suporte 24/7
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-3 h-3 text-pink-500 mr-2 flex-shrink-0" />
                  Migração assistida
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-3 h-3 text-pink-500 mr-2 flex-shrink-0" />
                  Consultoria técnica
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Casos de Uso Ideais</h2>
            <p className="text-lg text-gray-700">Perfeito para diversos tipos de aplicações empresariais</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Globe className="w-5 h-5" />,
                title: "E-commerce",
                description: "Lojas virtuais com alto volume de vendas e tráfego intenso",
              },
              {
                icon: <Database className="w-5 h-5" />,
                title: "Bancos de Dados",
                description: "MySQL, PostgreSQL com performance otimizada para consultas complexas",
              },
              {
                icon: <CloudLightning className="w-5 h-5" />,
                title: "APIs Críticas",
                description: "Microserviços e APIs que exigem baixa latência e alta disponibilidade",
              },
              {
                icon: <TrendingUp className="w-5 h-5" />,
                title: "Sistemas ERP",
                description: "Aplicações empresariais críticas que não podem ter downtime",
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-5 text-center hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="text-purple-500 mb-3 flex justify-center">{useCase.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{useCase.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl p-8 border border-pink-200">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nossas Garantias</h2>
              <p className="text-gray-700">Compromisso com a excelência em hospedagem empresarial</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500 mb-2">99.5%</div>
                <div className="text-gray-900 font-semibold mb-1 text-sm">Uptime Garantido</div>
                <div className="text-gray-600 text-xs">SLA com monitoramento contínuo</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-500 mb-2">24/7</div>
                <div className="text-gray-900 font-semibold mb-1 text-sm">Suporte Técnico</div>
                <div className="text-gray-600 text-xs">Equipe especializada sempre disponível</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500 mb-2">7</div>
                <div className="text-gray-900 font-semibold mb-1 text-sm">Dias de Garantia</div>
                <div className="text-gray-600 text-xs">Satisfação garantida ou dinheiro de volta</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-600 mb-4">
              <HelpCircle className="w-4 h-4 mr-2" />
              PERGUNTAS FREQUENTES
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Dúvidas sobre{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Semi-Dedicados
              </span>
              ?
            </h2>
            <p className="text-lg text-gray-700">
              Encontre respostas para as principais dúvidas sobre nossos servidores semi-dedicados
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item) => {
              const isExpanded = expandedFaq === item.id

              return (
                <div
                  key={item.id}
                  className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <HelpCircle className="w-4 h-4 text-pink-500 flex-shrink-0" />
                      <span className="font-semibold text-gray-900 text-sm pr-4">{item.question}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-pink-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-pink-500" />
                      )}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-4 bg-white border-t border-gray-200">
                      <div className="flex items-start space-x-3 pt-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div className="text-gray-800 text-sm leading-relaxed">{item.answer}</div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  )
}
