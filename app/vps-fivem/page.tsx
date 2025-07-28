"use client"

import { useState, useEffect } from "react"
import {
  Zap,
  Shield,
  Headphones,
  ChevronDown,
  ChevronUp,
  Cpu,
  Database,
  CheckCircle,
  Star,
  Award,
  Rocket,
  Server,
  HelpCircle,
  ArrowUp,
  Users,
  Settings,
  Activity,
} from "lucide-react"
import { plans } from "./plans"

export default function VpsFiveMPage() {
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

  // Dados dos planos VPS FiveM
  const vpsPlans = [
    {
      name: "Puff FiveStart",
      ram: "2GB RAM",
      cpu: "3 vCPU",
      storage: "45GB SSD NVMe",
      slots: "32 jogadores",
      price: "87,90",
      popular: false,
      link: plans[0]?.link || "",
    },
    {
      name: "Puff FiveCore",
      ram: "4GB RAM",
      cpu: "3 vCPU",
      storage: "50GB SSD NVMe",
      slots: "64 jogadores",
      price: "127,90",
      popular: true,
      link: plans[1]?.link || "",
    },
    {
      name: "Puff FiveForce",
      ram: "6GB RAM",
      cpu: "4 vCPU",
      storage: "60GB SSD NVMe",
      slots: "128 jogadores",
      price: "197,90",
      popular: false,
      link: plans[2]?.link || "",
    },
    {
      name: "Puff FivePower",
      ram: "8GB RAM",
      cpu: "5 vCPU",
      storage: "70GB SSD NVMe",
      slots: "200 jogadores",
      price: "245,90",
      popular: false,
      link: plans[3]?.link || "",
    },
    {
      name: "Puff FiveElite",
      ram: "10GB RAM",
      cpu: "6 vCPU",
      storage: "80GB SSD NVMe",
      slots: "300+ jogadores",
      price: "288,90",
      popular: false,
      link: plans[4]?.link || "",
    },
  ]

  const planDetails = {
    "Puff FiveStart": {
      specs: {
        processor: "AMD Ryzen 9 9900X",
        storage: "45GB SSD NVMe",
        memory: "2GB RAM DDR5",
        network: "10Gbps dedicado",
        location: "São Paulo, Brasil",
      },
      features: {
        protection: "Anti-DDoS",
        setup: "Servidor limpo (Ubuntu/CentOS)",
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
    "Puff FiveCore": {
      specs: {
        processor: "AMD Ryzen 9 9900X",
        storage: "50GB SSD NVMe",
        memory: "4GB RAM DDR5",
        network: "10Gbps dedicado",
        location: "São Paulo, Brasil",
      },
      features: {
        protection: "Anti-DDoS",
        setup: "Servidor limpo (Ubuntu/CentOS)",
        access: "Acesso root completo",
        panel: "Painel de controle básico",
        support: "Suporte técnico 24/7",
      },
      capacity: {
        slots: "Suporte para até 64 jogadores",
        database: "Você instala MySQL/PostgreSQL",
        performance: "Recursos dedicados",
        mods: "Instale qualquer mod/script",
        scripts: "Liberdade total de configuração",
        economy: "Recursos para sistemas complexos",
      },
    },
    "Puff FiveForce": {
      specs: {
        processor: "AMD Ryzen 9 9900X",
        storage: "60GB SSD NVMe",
        memory: "6GB RAM DDR5",
        network: "10Gbps dedicado",
        location: "São Paulo, Brasil",
      },
      features: {
        protection: "Anti-DDoS",
        setup: "Servidor limpo (Ubuntu/CentOS)",
        access: "Acesso root completo",
        panel: "Painel de controle básico",
        support: "Suporte técnico 24/7",
      },
      capacity: {
        slots: "Suporte para até 128 jogadores",
        database: "Você instala MySQL/PostgreSQL/Redis",
        performance: "Alta performance dedicada",
        mods: "Instale qualquer mod/script",
        scripts: "Liberdade total de configuração",
        economy: "Recursos para sistemas complexos",
        jobs: "Suporte a sistemas avançados",
      },
    },
    "Puff FivePower": {
      specs: {
        processor: "AMD Ryzen 9 9900X",
        storage: "70GB SSD NVMe",
        memory: "8GB RAM DDR5",
        network: "10Gbps dedicado",
        location: "São Paulo, Brasil",
      },
      features: {
        protection: "Anti-DDoS",
        setup: "Servidor limpo (Ubuntu/CentOS)",
        access: "Acesso root completo",
        panel: "Painel de controle básico",
        support: "Suporte técnico 24/7",
      },
      capacity: {
        slots: "Suporte para até 200 jogadores",
        database: "Você instala MySQL/PostgreSQL/Redis",
        performance: "Máxima performance dedicada",
        mods: "Instale qualquer mod/script",
        scripts: "Liberdade total de configuração",
        economy: "Recursos para sistemas complexos",
        jobs: "Suporte a sistemas avançados",
        housing: "Recursos para sistemas de casas",
      },
    },
    "Puff FiveElite": {
      specs: {
        processor: "AMD Ryzen 9 9900X",
        storage: "80GB SSD NVMe",
        memory: "10GB RAM DDR5",
        network: "10Gbps dedicado",
        location: "São Paulo, Brasil",
      },
      features: {
        protection: "Anti-DDoS",
        setup: "Servidor limpo (Ubuntu/CentOS)",
        access: "Acesso root completo",
        panel: "Painel de controle básico",
        support: "Suporte técnico 24/7",
      },
      capacity: {
        slots: "Suporte para até 300+ jogadores",
        database: "Você instala MySQL/PostgreSQL/Redis",
        performance: "Máxima performance dedicada",
        mods: "Instale qualquer mod/script",
        scripts: "Liberdade total de configuração",
        economy: "Recursos para sistemas complexos",
        jobs: "Suporte a sistemas avançados",
        housing: "Recursos para sistemas de casas",
        gangs: "Recursos para sistemas de gangues",
      },
    },
  }

  // FAQ específico para VPS FiveM
  const faqItems = [
    {
      id: "fivem-setup",
      question: "O FiveM já vem instalado e configurado?",
      answer:
        "Não, nossos servidores VPS são entregues completamente limpos com sistema operacional básico (Ubuntu ou CentOS). Você recebe acesso root total para instalar e configurar o FiveM da maneira que preferir. Não fornecemos instalação, configuração de scripts ou suporte específico para plataformas de jogos. Todo o processo de instalação do FiveM, configuração de banco de dados e gerenciamento de scripts é de responsabilidade do cliente.",
    },
    {
      id: "slots-performance",
      question: "Quantos jogadores posso ter online simultaneamente?",
      answer:
        "A capacidade de jogadores depende do plano escolhido e de como você configura seu servidor FiveM. Nossos planos têm recursos suficientes para suportar de 32 até 300+ jogadores simultâneos, mas o desempenho real dependerá dos scripts que você instalar, configurações do servidor e otimizações que você implementar.",
    },
    {
      id: "scripts-mods",
      question: "Posso instalar scripts e mods personalizados?",
      answer:
        "Sim! Você tem acesso root completo ao servidor para instalar qualquer script, mod, MLO ou recurso personalizado que desejar. Nossos servidores são compatíveis com todos os recursos do FiveM, mas a instalação e configuração são de sua responsabilidade.",
    },
    {
      id: "database-backup",
      question: "Vocês fazem backup dos meus dados?",
      answer:
        "Não fornecemos serviço de backup automático. Como você tem acesso root completo ao servidor, é sua responsabilidade configurar e gerenciar backups dos seus dados, banco de dados e configurações. Recomendamos que você configure seus próprios backups regulares para garantir a segurança dos seus dados.",
    },
    {
      id: "migration-support",
      question: "Vocês ajudam na migração do meu servidor atual?",
      answer:
        "Oferecemos suporte técnico para questões de infraestrutura e conectividade, mas a migração de dados, scripts e configurações específicas do FiveM são de responsabilidade do cliente. Podemos ajudar com questões relacionadas ao servidor em si, mas não com configurações específicas de jogos.",
    },
    {
      id: "performance-optimization",
      question: "Como é a performance para roleplay intenso?",
      answer:
        "Nossos servidores utilizam processadores AMD Ryzen 9 9900X e SSD NVMe para garantir excelente performance. A latência é inferior a 15ms para jogadores brasileiros. No entanto, a performance final do seu servidor FiveM dependerá de como você configura os scripts, otimizações que implementa e recursos que utiliza.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-gray-100 opacity-20"></div>
        <div className="absolute top-20 right-10 w-24 h-24 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg mb-8">
              <Server className="w-4 h-4 mr-2" />
              VPS PARA FIVEM
              <Star className="w-4 h-4 ml-2" />
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
              Servidores{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                VPS para FiveM
              </span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-800">Infraestrutura Profissional</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              Servidores VPS com <span className="text-pink-600 font-semibold">máxima performance</span> e{" "}
              <span className="text-pink-600 font-semibold">total liberdade</span> para configurar seu FiveM
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:border-pink-300 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="text-xl font-black text-gray-900">300+</div>
                <div className="text-xs font-semibold text-gray-700">Slots Suportados</div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="text-xl font-black text-gray-900">{"<15ms"}</div>
                <div className="text-xs font-semibold text-gray-700">Latência Brasil</div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:border-pink-300 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="text-xl font-black text-gray-900">99.9%</div>
                <div className="text-xs font-semibold text-gray-700">Uptime</div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Headphones className="w-5 h-5 text-white" />
                </div>
                <div className="text-xl font-black text-gray-900">24/7</div>
                <div className="text-xs font-semibold text-gray-700">Suporte</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que oferecemos Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-pink-100 text-pink-600 mb-6">
              <Server className="w-4 h-4 mr-2" />O QUE OFERECEMOS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Infraestrutura{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                para você configurar
              </span>
            </h2>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto">
              Fornecemos apenas a infraestrutura de alta qualidade. Você tem total liberdade para instalar e configurar
              o FiveM da maneira que preferir.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-800 mb-6 leading-relaxed">
                <strong>Nossos servidores VPS</strong> são entregues completamente limpos com sistema operacional básico
                (Ubuntu ou CentOS). Você recebe acesso root total para instalar o FiveM, configurar scripts, mods e
                personalizar tudo conforme suas necessidades.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Servidor Limpo:</span>
                    <span className="text-gray-700 ml-1">Ubuntu ou CentOS, você instala o que precisar</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Acesso Root Total:</span>
                    <span className="text-gray-700 ml-1">Controle completo para suas configurações</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Suporte de Infraestrutura:</span>
                    <span className="text-gray-700 ml-1">Ajudamos com questões do servidor, não com FiveM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Activity className="w-5 h-5 text-pink-500 mr-2" />
                Recursos de Infraestrutura
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-pink-50 rounded-lg">
                  <Cpu className="w-6 h-6 text-pink-500 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">AMD Ryzen</div>
                  <div className="text-xs text-gray-600">Alta performance</div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <Database className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">SSD NVMe</div>
                  <div className="text-xs text-gray-600">Velocidade máxima</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-600 mb-6">
              <Server className="w-4 h-4 mr-2" />
              PLANOS VPS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Escolha sua{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                infraestrutura ideal
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Servidores VPS com recursos dedicados para você configurar seu FiveM
            </p>
          </div>

          <div className="space-y-4">
            {vpsPlans.map((plan) => {
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
                          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                            plan.popular
                              ? "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg"
                              : "bg-gray-900 hover:bg-gray-800 text-white"
                          } ${plan.link ? "cursor-pointer" : "cursor-not-allowed opacity-50"}`}
                          disabled={!plan.link}
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
                            <Settings className="w-4 h-4 mr-2" />
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

      {/* Features Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-pink-100 text-pink-600 mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              INFRAESTRUTURA PREMIUM
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Tecnologia{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                de ponta
              </span>{" "}
              para seus projetos
            </h2>
            <p className="text-lg text-gray-800 max-w-4xl mx-auto">
              Nossa infraestrutura oferece a base perfeita para você construir e configurar seu servidor FiveM com
              máxima performance e estabilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl hover:border-pink-200 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Server className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Hardware Dedicado</h3>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                Processadores AMD Ryzen 9 9900X e SSD NVMe para máxima performance. Recursos dedicados que garantem
                estabilidade mesmo com muitos jogadores conectados.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0" />
                  AMD Ryzen 9 9900X
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0" />
                  SSD NVMe ultra-rápido
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0" />
                  Recursos dedicados
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl hover:border-pink-200 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Proteção Básica</h3>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                Proteção anti-DDoS básica e monitoramento de infraestrutura para garantir que seu servidor permaneça
                online. Você é responsável por configurar backups e segurança adicional.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0" />
                  Anti-DDoS básico
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0" />
                  Monitoramento de infraestrutura
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0" />
                  Você configura seus backups
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl hover:border-pink-200 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Suporte Técnico</h3>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                Suporte técnico 24/7 para questões de infraestrutura, conectividade e funcionamento do servidor. Não
                oferecemos suporte para configurações específicas de jogos ou instalação de software.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0" />
                  Suporte 24/7
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0" />
                  Questões de infraestrutura
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0" />
                  Conectividade e rede
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-600 mb-6">
              <HelpCircle className="w-4 h-4 mr-2" />
              PERGUNTAS FREQUENTES
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Dúvidas sobre{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                VPS para FiveM
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
                  className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200"
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
