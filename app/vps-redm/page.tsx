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
  Users,
  Settings,
  Crown,
  Gamepad2,
} from "lucide-react"
import { redmPlans } from "./plans"

export default function VpsRedmPage() {
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

  const planDetails = {
    "Puff PioneerNode": {
      specs: {
        processor: "AMD Ryzen 9 9900X",
        storage: "45GB SSD NVMe",
        memory: "2GB RAM DDR5",
        network: "10Gbps dedicado",
        location: "Brasil (São Paulo)",
      },
      features: {
        protection: "Anti-DDoS",
        setup: "Servidor limpo (windows/Ubuntu/CentOS)",
        access: "Acesso root completo",
        panel: "Painel de controle básico",
        support: "Suporte técnico 24/7",
      },
      capacity: {
        slots: "Suporte para até 32 jogadores",
        database: "Você instala MySQL/PostgreSQL",
        performance: "Recursos dedicados",
        mods: "Instale qualquer mod/script",
        scripts: "Liberdade total de configuração",
      },
    },
    "Puff OutlawCore": {
      specs: {
        processor: "AMD Ryzen 9 9900X",
        storage: "50GB SSD NVMe",
        memory: "4GB RAM DDR5",
        network: "10Gbps dedicado",
        location: "Brasil (São Paulo)",
      },
      features: {
        protection: "Anti-DDoS básico",
        setup: "Servidor limpo (windows/Ubuntu/CentOS)",
        access: "Acesso root completo",
        panel: "Painel de controle básico",
        support: "Suporte técnico 24/7",
      },
      capacity: {
        slots: "Suporte para até 48 jogadores",
        database: "Você instala MySQL/PostgreSQL",
        performance: "Recursos dedicados",
        mods: "Instale qualquer mod/script",
        scripts: "Liberdade total de configuração",
        economy: "Recursos para sistemas complexos",
      },
    },
    "Puff SheriffHost": {
      specs: {
        processor: "AMD Ryzen 9 9900X",
        storage: "60GB SSD NVMe",
        memory: "6GB RAM DDR5",
        network: "10Gbps dedicado",
        location: "Brasil (São Paulo)",
      },
      features: {
        protection: "Anti-DDoS",
        setup: "Servidor limpo (windows/Ubuntu/CentOS)",
        access: "Acesso root completo",
        panel: "Painel de controle básico",
        support: "Suporte técnico 24/7",
      },
      capacity: {
        slots: "Suporte para até 64 jogadores",
        database: "Você instala MySQL/PostgreSQL/Redis",
        performance: "Alta performance dedicada",
        mods: "Instale qualquer mod/script",
        scripts: "Liberdade total de configuração",
        economy: "Recursos para sistemas complexos",
        jobs: "Suporte a sistemas avançados",
      },
    },
    "Puff DesertEngine": {
      specs: {
        processor: "AMD Ryzen 9 9900X",
        storage: "70GB SSD NVMe",
        memory: "8GB RAM DDR5",
        network: "10Gbps dedicado",
        location: "Brasil (São Paulo)",
      },
      features: {
        protection: "Anti-DDoS",
        setup: "Servidor limpo (windows/Ubuntu/CentOS)",
        access: "Acesso root completo",
        panel: "Painel de controle básico",
        support: "Suporte técnico 24/7",
      },
      capacity: {
        slots: "Suporte para até 96 jogadores",
        database: "Você instala MySQL/PostgreSQL/Redis",
        performance: "Alta performance dedicada",
        mods: "Instale qualquer mod/script",
        scripts: "Liberdade total de configuração",
        economy: "Recursos para sistemas complexos",
        jobs: "Suporte a sistemas avançados",
        properties: "Recursos para sistemas de propriedades",
      },
    },
    "Puff LegendaryWest": {
      specs: {
        processor: "AMD Ryzen 9 9900X",
        storage: "80GB SSD NVMe",
        memory: "10GB RAM DDR5",
        network: "10Gbps dedicado",
        location: "Brasil (São Paulo)",
      },
      features: {
        protection: "Anti-DDoS",
        setup: "Servidor limpo (windows/Ubuntu/CentOS)",
        access: "Acesso root completo",
        panel: "Painel de controle básico",
        support: "Suporte técnico 24/7",
      },
      capacity: {
        slots: "Suporte para até 128+ jogadores",
        database: "Você instala MySQL/PostgreSQL/Redis",
        performance: "Máxima performance dedicada",
        mods: "Instale qualquer mod/script",
        scripts: "Liberdade total de configuração",
        economy: "Recursos para sistemas complexos",
        jobs: "Suporte a sistemas avançados",
        properties: "Recursos para sistemas de propriedades",
        gangs: "Recursos para sistemas de gangues",
      },
    },
  }

  // FAQ específico para RedM
  const faqItems = [
    {
      id: "redm-setup",
      question: "O RedM já vem pré-instalado?",
      answer:
        "Não, nossos servidores VPS são entregues completamente limpos com sistema operacional básico (Ubuntu ou CentOS). Você recebe acesso root total para instalar e configurar o RedM da maneira que preferir. Não fornecemos instalação, configuração de scripts ou suporte específico para plataformas de jogos. Todo o processo de instalação do RedM, configuração de banco de dados e gerenciamento de scripts é de responsabilidade do cliente.",
    },
    {
      id: "scripts-mods",
      question: "Quais scripts estão inclusos?",
      answer:
        "Não fornecemos scripts pré-instalados. Nossos servidores VPS são entregues limpos para que você tenha total liberdade de instalar e configurar os scripts que desejar. Você tem acesso root completo para personalizar seu servidor RedM conforme suas necessidades.",
    },
    {
      id: "performance",
      question: "Quantos jogadores suporta?",
      answer:
        "A capacidade de jogadores depende do plano escolhido e de como você configura seu servidor RedM. Nossos planos têm recursos suficientes para suportar de 32 até 128+ jogadores simultâneos, mas o desempenho real dependerá dos scripts que você instalar e das otimizações que implementar.",
    },
    {
      id: "roleplay-features",
      question: "Inclui recursos para roleplay?",
      answer:
        "Fornecemos apenas a infraestrutura de alta qualidade. Os recursos de roleplay como criação de personagens, empregos, economia, propriedades e gangues dependem dos scripts e mods que você escolher instalar e configurar em seu servidor.",
    },
    {
      id: "database",
      question: "Como funciona o banco de dados?",
      answer:
        "Nossos servidores são compatíveis com MySQL, PostgreSQL e outros bancos de dados que você escolher instalar. É sua responsabilidade configurar e gerenciar backups dos seus dados. A instalação e configuração do banco de dados são de sua responsabilidade.",
    },
    {
      id: "customization",
      question: "Posso personalizar meu servidor?",
      answer:
        "Absolutamente! Você tem acesso root completo para instalar qualquer script, mod ou recurso personalizado. Nossa infraestrutura oferece total liberdade para você configurar seu servidor RedM exatamente como desejar.",
    },
    {
      id: "support-redm",
      question: "O suporte entende de RedM?",
      answer:
        "Nosso suporte técnico é especializado em infraestrutura de servidores, questões de conectividade, performance e funcionamento do hardware. Não oferecemos suporte para configurações específicas de RedM, scripts ou mods. Nosso foco é garantir que sua infraestrutura funcione perfeitamente.",
    },
    {
      id: "migration",
      question: "Posso migrar meu servidor existente?",
      answer:
        "Sim! Você pode migrar seus arquivos, banco de dados e configurações para nossos servidores. Oferecemos suporte técnico para questões de infraestrutura durante a migração, mas a transferência e configuração dos dados específicos do RedM são de sua responsabilidade.",
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
              <Crown className="w-4 h-4 mr-2" />
              VPS PARA REDM
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Servidores{" "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                VPS para RedM
              </span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Red Dead Redemption 2
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-800 max-w-3xl mx-auto mb-8 leading-relaxed font-medium">
              Infraestrutura premium para você criar seu servidor RedM com{" "}
              <span className="text-pink-600 font-semibold">total liberdade</span> e{" "}
              <span className="text-pink-600 font-semibold">máxima performance</span>
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="group bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:border-pink-300 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:rotate-6 transition-transform duration-300">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="text-xl font-bold text-gray-900 mb-1">{"<15ms"}</div>
                <div className="text-sm font-medium text-gray-800 mb-1">Latência Brasil</div>
                <div className="text-xs text-pink-600 font-medium flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Ultra Responsivo
                </div>
              </div>

              <div className="group bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:rotate-6 transition-transform duration-300">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="text-xl font-bold text-gray-900 mb-1">128+</div>
                <div className="text-sm font-medium text-gray-800 mb-1">Jogadores Suportados</div>
                <div className="text-xs text-purple-600 font-medium flex items-center justify-center">
                  <Crown className="w-3 h-3 mr-1" />
                  Velho Oeste
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
              <Gamepad2 className="w-4 h-4 mr-2" />
              INFRAESTRUTURA PARA REDM
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Servidor{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                limpo e pronto
              </span>{" "}
              para suas configurações
            </h2>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto">
              Fornecemos apenas a infraestrutura premium. Você tem total controle para instalar e configurar o RedM,
              scripts e mods conforme sua visão do Velho Oeste.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Total Liberdade</h3>
              <p className="text-gray-800 text-sm leading-relaxed">
                Servidor completamente limpo com acesso root total. Instale o RedM, configure scripts de roleplay e
                personalize tudo conforme sua visão do Velho Oeste.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Infraestrutura Premium</h3>
              <p className="text-gray-800 text-sm leading-relaxed">
                Hardware AMD Ryzen de última geração, SSD NVMe ultra-rápido e rede de alta velocidade para garantir
                performance excepcional em seu servidor RedM.
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
              PLANOS VPS REDM
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Escolha sua{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                infraestrutura ideal
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Servidores VPS otimizados para RedM com recursos dedicados e performance garantida
            </p>
          </div>

          <div className="space-y-4">
            {redmPlans.map((plan) => {
              const isExpanded = expandedPlan === plan.name
              const details = planDetails[plan.name as keyof typeof planDetails]

              return (
                <div
                  key={plan.name}
                  className={`bg-white rounded-xl shadow-lg border-2 overflow-hidden transition-all duration-300 hover:shadow-xl ${
                    plan.popular ? "border-pink-300 ring-2 ring-pink-100" : "border-gray-200 hover:border-pink-200"
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-2 text-sm font-bold">
                      <Star className="w-4 h-4 inline mr-2" />
                      MAIS POPULAR
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      {/* Left Side - Plan Info */}
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => togglePlan(plan.name)}
                          className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-pink-100 transition-colors"
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-pink-500" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-pink-500" />
                          )}
                        </button>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                          <div className="flex items-center text-sm text-purple-600 font-medium mt-1">
                            <Users className="w-4 h-4 mr-1" />
                            {plan.slots}
                          </div>
                        </div>
                      </div>

                      {/* Middle - Specs */}
                      <div className="hidden md:flex items-center space-x-8">
                        <div className="text-center">
                          <div className="text-sm font-bold text-gray-900">{plan.ram}</div>
                          <div className="text-xs text-gray-500">Memória</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-bold text-gray-900">{plan.cpu}</div>
                          <div className="text-xs text-gray-500">Processador</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-bold text-gray-900">{plan.storage}</div>
                          <div className="text-xs text-gray-500">Armazenamento</div>
                        </div>
                      </div>

                      {/* Right Side - Price & Action */}
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">R${plan.price}</div>
                          <div className="text-sm text-gray-600">/mês</div>
                        </div>
                        <button
                          onClick={() => plan.link && window.open(plan.link, "_blank")}
                          disabled={!plan.link}
                          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                            plan.popular
                              ? "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg"
                              : "bg-gray-900 hover:bg-gray-800 text-white"
                          } ${!plan.link ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                        >
                          Contratar
                        </button>
                      </div>
                    </div>

                    {/* Mobile Specs */}
                    <div className="md:hidden mt-4 grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-sm font-bold text-gray-900">{plan.ram}</div>
                        <div className="text-xs text-gray-500">Memória</div>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">{plan.cpu}</div>
                        <div className="text-xs text-gray-500">CPU</div>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">{plan.storage}</div>
                        <div className="text-xs text-gray-500">Storage</div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {isExpanded && details && (
                    <div className="border-t border-gray-200 bg-gray-50 p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Specifications */}
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <h4 className="text-base font-bold text-pink-600 mb-3 flex items-center">
                            <Cpu className="w-4 h-4 mr-2" />
                            Especificações
                          </h4>
                          <div className="space-y-2">
                            {Object.entries(details.specs).map(([key, value]) => (
                              <div key={key} className="flex justify-between text-sm">
                                <span className="text-gray-600 capitalize">
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
                                <span className="font-medium text-gray-900">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Features */}
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <h4 className="text-base font-bold text-purple-600 mb-3 flex items-center">
                            <Award className="w-4 h-4 mr-2" />
                            Recursos Inclusos
                          </h4>
                          <div className="space-y-2">
                            {Object.entries(details.features).map(([key, value]) => (
                              <div key={key} className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Capacity */}
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <h4 className="text-base font-bold text-blue-600 mb-3 flex items-center">
                            <Crown className="w-4 h-4 mr-2" />
                            Capacidades
                          </h4>
                          <div className="space-y-2">
                            {Object.entries(details.capacity).map(([key, value]) => (
                              <div key={key} className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{value}</span>
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
                VPS para RedM
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
