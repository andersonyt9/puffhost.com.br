"use client"

import { useState, useEffect } from "react"
import {
  Zap,
  Shield,
  Headphones,
  ChevronDown,
  ChevronUp,
  Cpu,
  CheckCircle,
  Star,
  Award,
  Server,
  HelpCircle,
  ArrowUp,
  Settings,
  Video,
  Camera,
  Radio,
} from "lucide-react"

export default function VpsStreamingPage() {
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

  // Planos VPS Streaming
  const streamingPlans = [
    {
      name: "VPS Stream Basic",
      ram: "4GB RAM",
      cpu: "2 vCPU",
      storage: "60GB SSD",
      price: "149,90",
      popular: false,
      quality: "720p 30fps",
    },
    {
      name: "VPS Stream Pro",
      ram: "6GB RAM",
      cpu: "4 vCPU",
      storage: "80GB SSD",
      price: "219,90",
      popular: false,
      quality: "1080p 30fps",
    },
    {
      name: "VPS Stream Advanced",
      ram: "8GB RAM",
      cpu: "6 vCPU",
      storage: "120GB SSD",
      price: "329,90",
      popular: true,
      quality: "1080p 60fps",
    },
    {
      name: "VPS Stream Premium",
      ram: "12GB RAM",
      cpu: "8 vCPU",
      storage: "160GB SSD",
      price: "499,90",
      popular: false,
      quality: "1440p 60fps",
    },
    {
      name: "VPS Stream Ultimate",
      ram: "16GB RAM",
      cpu: "12 vCPU",
      storage: "240GB SSD",
      price: "799,90",
      popular: false,
      quality: "4K 30fps",
    },
  ]

  const planDetails = {
    "VPS Stream Basic": {
      specs: {
        processor: "AMD Ryzen 9 5900X",
        storage: "60GB SSD NVMe",
        memory: "4GB RAM DDR4",
        network: "1Gbps dedicado",
        location: "Brasil (São Paulo)",
      },
      resources: {
        protection: "Anti-DDoS",
        setup: "Servidor limpo",
        backup: "Sem backup automático",
        panel: "Painel de controle",
        support: "Suporte técnico 24/7",
      },
      streaming: {
        quality: "Suporte para streaming 720p 30fps",
        encoding: "Compatível com OBS, XSplit",
        platforms: "Twitch, YouTube, Facebook",
        bandwidth: "Upload otimizado",
        latency: "Baixa latência para Brasil",
      },
    },
    "VPS Stream Pro": {
      specs: {
        processor: "AMD Ryzen 9 5900X",
        storage: "80GB SSD NVMe",
        memory: "6GB RAM DDR4",
        network: "1Gbps dedicado",
        location: "Brasil (São Paulo)",
      },
      resources: {
        protection: "Anti-DDoS",
        setup: "Servidor limpo",
        backup: "Sem backup automático",
        panel: "Painel de controle",
        support: "Suporte técnico 24/7",
      },
      streaming: {
        quality: "Suporte para streaming 1080p 30fps",
        encoding: "Compatível com OBS, XSplit, FFmpeg",
        platforms: "Todas as plataformas de streaming",
        bandwidth: "Upload otimizado para HD",
        latency: "Baixa latência para Brasil",
        recording: "Gravação simultânea suportada",
      },
    },
    "VPS Stream Advanced": {
      specs: {
        processor: "AMD Ryzen 9 5900X",
        storage: "120GB SSD NVMe",
        memory: "8GB RAM DDR4",
        network: "1Gbps dedicado",
        location: "Brasil (São Paulo)",
      },
      resources: {
        protection: "Anti-DDoS",
        setup: "Servidor limpo",
        backup: "Sem backup automático",
        panel: "Painel de controle",
        support: "Suporte técnico 24/7",
      },
      streaming: {
        quality: "Suporte para streaming 1080p 60fps",
        encoding: "Hardware encoding suportado",
        platforms: "Todas as plataformas + RTMP",
        bandwidth: "Upload premium para Full HD",
        latency: "Ultra baixa latência",
        recording: "Gravação + streaming simultâneo",
        multistream: "Multi-streaming suportado",
      },
    },
    "VPS Stream Premium": {
      specs: {
        processor: "AMD Ryzen 9 5900X",
        storage: "160GB SSD NVMe",
        memory: "12GB RAM DDR4",
        network: "1Gbps dedicado",
        location: "Brasil (São Paulo)",
      },
      resources: {
        protection: "Anti-DDoS",
        setup: "Servidor limpo",
        backup: "Sem backup automático",
        panel: "Painel de controle",
        support: "Suporte técnico 24/7",
      },
      streaming: {
        quality: "Suporte para streaming 1440p 60fps",
        encoding: "Hardware encoding avançado",
        platforms: "Todas as plataformas + CDN",
        bandwidth: "Upload premium para 2K",
        latency: "Ultra baixa latência global",
        recording: "Gravação profissional",
        multistream: "Multi-streaming avançado",
        transcoding: "Transcoding em tempo real",
      },
    },
    "VPS Stream Ultimate": {
      specs: {
        processor: "AMD Ryzen 9 5900X",
        storage: "240GB SSD NVMe",
        memory: "16GB RAM DDR4",
        network: "1Gbps dedicado",
        location: "Brasil (São Paulo)",
      },
      resources: {
        protection: "Anti-DDoS",
        setup: "Servidor limpo",
        backup: "Sem backup automático",
        panel: "Painel de controle",
        support: "Suporte técnico 24/7",
      },
      streaming: {
        quality: "Suporte para streaming 4K 30fps",
        encoding: "Hardware encoding profissional",
        platforms: "Todas as plataformas + CDN global",
        bandwidth: "Upload dedicado para 4K",
        latency: "Latência mínima mundial",
        recording: "Gravação 4K profissional",
        multistream: "Multi-streaming profissional",
        transcoding: "Transcoding 4K em tempo real",
        redundancy: "Redundância de conexão",
      },
    },
  }

  // FAQ específico para VPS Streaming
  const faqItems = [
    {
      id: "streaming-setup",
      question: "Os softwares de streaming já vêm instalados?",
      answer:
        "Não, nossos servidores VPS são entregues completamente limpos com sistema operacional básico. Você recebe acesso root total para instalar OBS, XSplit, FFmpeg ou qualquer software de streaming que preferir. Não fornecemos instalação ou configuração de softwares específicos. Todo o processo de instalação e configuração é de responsabilidade do cliente.",
    },
    {
      id: "streaming-quality",
      question: "Qual qualidade de streaming posso alcançar?",
      answer:
        "A qualidade de streaming depende do plano escolhido e de como você configura seus softwares. Nossos planos suportam desde 720p 30fps até 4K 30fps, mas a qualidade final dependerá das configurações que você implementar, codecs utilizados e otimizações que fizer.",
    },
    {
      id: "platforms-support",
      question: "Posso fazer streaming para múltiplas plataformas?",
      answer:
        "Sim! Nossos servidores têm recursos suficientes para multi-streaming. Você pode configurar seu software para transmitir simultaneamente para Twitch, YouTube, Facebook e outras plataformas. A configuração do multi-streaming é de sua responsabilidade.",
    },
    {
      id: "bandwidth-latency",
      question: "Como é a velocidade de upload e latência?",
      answer:
        "Nossos servidores possuem conexão de 1Gbps dedicado com latência inferior a 15ms para o Brasil. Isso garante upload estável para streaming em alta qualidade. A performance real dependerá de suas configurações e da plataforma de destino.",
    },
    {
      id: "recording-storage",
      question: "Posso gravar enquanto faço streaming?",
      answer:
        "Sim! Nossos servidores têm recursos suficientes para gravação simultânea ao streaming. O espaço de armazenamento varia conforme o plano escolhido. Você é responsável por configurar a gravação e gerenciar o espaço em disco.",
    },
    {
      id: "streaming-software",
      question: "Quais softwares de streaming posso usar?",
      answer:
        "Você tem total liberdade para instalar qualquer software: OBS Studio, XSplit, FFmpeg, Wirecast, ou qualquer outro. Nossos servidores são compatíveis com todos os softwares de streaming populares. A instalação e configuração são de sua responsabilidade.",
    },
    {
      id: "support-streaming",
      question: "O suporte ajuda com configurações de streaming?",
      answer:
        "Nosso suporte técnico é especializado em infraestrutura de servidores, questões de conectividade, performance e funcionamento do hardware. Não oferecemos suporte para configurações específicas de softwares de streaming, OBS ou outras plataformas. Nosso foco é garantir que sua infraestrutura funcione perfeitamente.",
    },
    {
      id: "migration-streaming",
      question: "Posso migrar minhas configurações existentes?",
      answer:
        "Sim! Você pode transferir suas configurações, cenas do OBS, overlays e outros arquivos para nossos servidores. Oferecemos suporte técnico para questões de infraestrutura durante a migração, mas a transferência e configuração dos softwares específicos são de sua responsabilidade.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-gray-100 opacity-20"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg mb-6 transform hover:scale-105 transition-all duration-300">
              <Video className="w-4 h-4 mr-2" />
              VPS PARA STREAMING
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Servidores{" "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                VPS para Streaming
              </span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Infraestrutura Premium
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-800 max-w-3xl mx-auto mb-8 leading-relaxed font-medium">
              Infraestrutura de alta performance para você configurar seus softwares de streaming com{" "}
              <span className="text-pink-600 font-semibold">total liberdade</span> e{" "}
              <span className="text-pink-600 font-semibold">máxima qualidade</span>
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="group bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:border-pink-300 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:rotate-6 transition-transform duration-300">
                  <Video className="w-5 h-5 text-white" />
                </div>
                <div className="text-xl font-bold text-gray-900 mb-1">4K</div>
                <div className="text-sm font-medium text-gray-800 mb-1">Qualidade Suportada</div>
                <div className="text-xs text-pink-600 font-medium flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Ultra HD
                </div>
              </div>

              <div className="group bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:rotate-6 transition-transform duration-300">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="text-xl font-bold text-gray-900 mb-1">{"<15ms"}</div>
                <div className="text-sm font-medium text-gray-800 mb-1">Latência Brasil</div>
                <div className="text-xs text-purple-600 font-medium flex items-center justify-center">
                  <Radio className="w-3 h-3 mr-1" />
                  Tempo Real
                </div>
              </div>

              <div className="group bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:border-pink-300 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:rotate-6 transition-transform duration-300">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="text-xl font-bold text-gray-900 mb-1">99.99%</div>
                <div className="text-sm font-medium text-gray-800 mb-1">Uptime Garantido</div>
                <div className="text-xs text-pink-600 font-medium flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Sempre Online
                </div>
              </div>

              <div className="group bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:rotate-6 transition-transform duration-300">
                  <Headphones className="w-5 h-5 text-white" />
                </div>
                <div className="text-xl font-bold text-gray-900 mb-1">24/7</div>
                <div className="text-sm font-medium text-gray-800 mb-1">Suporte Técnico</div>
                <div className="text-xs text-purple-600 font-medium flex items-center justify-center">
                  <Settings className="w-3 h-3 mr-1" />
                  Infraestrutura
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que oferecemos Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-pink-100 text-pink-600 mb-4">
              <Camera className="w-4 h-4 mr-2" />
              INFRAESTRUTURA PARA STREAMING
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Servidor{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                limpo e otimizado
              </span>{" "}
              para suas transmissões
            </h2>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto">
              Fornecemos apenas a infraestrutura premium. Você tem total controle para instalar OBS, XSplit, FFmpeg e
              configurar seus streams da maneira que preferir.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Total Liberdade</h3>
              <p className="text-gray-800 text-sm leading-relaxed">
                Servidor completamente limpo com acesso root total. Instale OBS, XSplit, FFmpeg ou qualquer software de
                streaming e configure tudo conforme suas necessidades.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Hardware Premium</h3>
              <p className="text-gray-800 text-sm leading-relaxed">
                Processadores AMD Ryzen de última geração, SSD NVMe ultra-rápido e conexão de 1Gbps dedicado para
                garantir streaming em alta qualidade sem travamentos.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Suporte Técnico</h3>
              <p className="text-gray-800 text-sm leading-relaxed">
                Suporte 24/7 para questões de infraestrutura, conectividade e performance do servidor. Focamos no que
                sabemos fazer melhor: manter sua infraestrutura funcionando perfeitamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-600 mb-4">
              <Server className="w-4 h-4 mr-2" />
              PLANOS VPS STREAMING
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Escolha sua{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                infraestrutura ideal
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Servidores VPS otimizados para streaming com recursos dedicados e performance garantida
            </p>
          </div>

          <div className="space-y-4">
            {streamingPlans.map((plan) => {
              const isExpanded = expandedPlan === plan.name
              const details = planDetails[plan.name as keyof typeof planDetails]

              return (
                <div
                  key={plan.name}
                  className={`bg-white rounded-xl shadow-lg border overflow-hidden transition-all duration-300 ${plan.popular ? "border-pink-300 ring-2 ring-pink-200" : "border-gray-200"}`}
                >
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                      <Star className="w-4 h-4 inline mr-2" />
                      MAIS POPULAR
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
                          <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                          <div className="text-sm text-purple-600 font-medium">Suporte para {plan.quality}</div>
                        </div>
                      </div>

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

                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="text-xl font-bold text-gray-900">R${plan.price}</div>
                          <div className="text-sm text-gray-600">/mês</div>
                        </div>
                        <button
                          className={`inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 px-6 py-2 text-sm whitespace-nowrap ${plan.popular ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg" : "bg-gray-800 text-white hover:bg-gray-700"}`}
                        >
                          Contratar
                        </button>
                      </div>
                    </div>

                    <div className="md:hidden mt-3 flex items-center justify-center space-x-6 text-sm text-gray-600">
                      <span>{plan.ram}</span>
                      <span>{plan.cpu}</span>
                      <span>{plan.storage}</span>
                    </div>
                  </div>

                  {isExpanded && details && (
                    <div className="border-t border-gray-200 p-5 bg-gray-50">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div>
                          <h4 className="text-base font-semibold text-pink-500 mb-3 flex items-center">
                            <Cpu className="w-4 h-4 mr-2" />
                            Especificações
                          </h4>
                          <div className="space-y-2">
                            {Object.entries(details.specs).map(([key, value]) => (
                              <div key={key} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                                <div className="text-sm">
                                  <span className="font-medium text-gray-900 capitalize">
                                    {key === "processor"
                                      ? "CPU"
                                      : key === "storage"
                                        ? "Storage"
                                        : key === "memory"
                                          ? "RAM"
                                          : key === "network"
                                            ? "Rede"
                                            : key === "location"
                                              ? "Local"
                                              : key}
                                    :
                                  </span>
                                  <span className="text-gray-700 ml-1">{value}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-base font-semibold text-purple-500 mb-3 flex items-center">
                            <Award className="w-4 h-4 mr-2" />
                            Recursos Inclusos
                          </h4>
                          <div className="space-y-2">
                            {Object.entries(details.resources).map(([key, value]) => (
                              <div key={key} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <div className="text-sm">
                                  <span className="font-medium text-gray-900 capitalize">
                                    {key === "protection"
                                      ? "Proteção"
                                      : key === "setup"
                                        ? "Setup"
                                        : key === "backup"
                                          ? "Backup"
                                          : key === "panel"
                                            ? "Painel"
                                            : key === "support"
                                              ? "Suporte"
                                              : key}
                                    :
                                  </span>
                                  <span className="text-gray-700 ml-1">{value}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-base font-semibold text-pink-500 mb-3 flex items-center">
                            <Video className="w-4 h-4 mr-2" />
                            Capacidades de Streaming
                          </h4>
                          <div className="space-y-2">
                            {Object.entries(details.streaming).map(([key, value]) => (
                              <div key={key} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                                <div className="text-sm">
                                  <span className="font-medium text-gray-900 capitalize">
                                    {key === "quality"
                                      ? "Qualidade"
                                      : key === "encoding"
                                        ? "Encoding"
                                        : key === "platforms"
                                          ? "Plataformas"
                                          : key === "bandwidth"
                                            ? "Banda"
                                            : key === "latency"
                                              ? "Latência"
                                              : key === "recording"
                                                ? "Gravação"
                                                : key === "multistream"
                                                  ? "Multi-stream"
                                                  : key === "transcoding"
                                                    ? "Transcoding"
                                                    : key === "redundancy"
                                                      ? "Redundância"
                                                      : key}
                                    :
                                  </span>
                                  <span className="text-gray-700 ml-1">{value}</span>
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

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-600 mb-4">
              <HelpCircle className="w-4 h-4 mr-2" />
              PERGUNTAS FREQUENTES
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Dúvidas sobre{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                VPS para Streaming
              </span>
              ?
            </h2>
          </div>

          <div className="space-y-3">
            {faqItems.map((item) => {
              const isExpanded = expandedFaq === item.id

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <HelpCircle className="w-4 h-4 text-pink-500 flex-shrink-0" />
                      <span className="font-semibold text-gray-900 text-sm pr-4">{item.question}</span>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-pink-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-pink-500" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-4 bg-gray-50 border-t border-gray-200">
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