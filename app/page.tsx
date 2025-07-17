"use client"

import { Button } from "@nextui-org/button"
import { AccordionItems } from "./_components/accordion"
import {
  ShieldCheckIcon,
  ShieldIcon,
  Server,
  ArrowUp,
  Star,
  Users,
  Clock,
  Globe,
  Rocket,
  Zap,
  Check,
  HardDrive,
  Sparkles,
  TrendingUp,
  Award,
  Cpu,
  Database,
  Wifi,
  Lock,
  HeadphonesIcon,
  MonitorSpeaker,
  CloudIcon,
  Activity,
  BarChart3,
  Shield,
  Timer,
  CheckCircle,
  ArrowRight,
  Target,
  Settings,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const plans = [
  {
    icon: <Globe className="w-5 h-5 text-pink-500" />,
    title: "VPS Streaming",
    description: "Servidores no Brasil com tráfego mensal ilimitado para streaming e aplicações web profissionais",
    price: "149",
    cents: "90",
    link: "/vps-streaming",
    popular: false,
    badge: "Criadores",
    features: [
      "Tráfego ilimitado nacional",
      "SSD NVMe 60GB ultra-rápido",
      "Painel de Controle avançado",
      "Suporte OBS Studio",
      "Multi-streaming incluído",
    ],
    specs: {
      cpu: "AMD Ryzen 9",
      ram: "4GB DDR4",
      storage: "60GB NVMe",
      bandwidth: "1Gbps",
    },
  },
  {
    icon: <Zap className="w-5 h-5 text-white" />,
    title: "VPS Gamer",
    description: "VPS de alta performance no Brasil com Anti-DDoS PRO e otimizações específicas para jogos",
    price: "70",
    cents: "90",
    link: "/vps-gamer",
    popular: true,
    badge: "Mais Popular",
    features: [
      "Anti-DDoS PRO 348TB/s",
      "Processador AMD Ryzen 9",
      "Latência ultra baixa < 15ms",
      "Suporte técnico 24/7",
      "Painel de jogos exclusivo",
    ],
    specs: {
      cpu: "AMD Ryzen 9",
      ram: "2GB DDR4",
      storage: "40GB NVMe",
      bandwidth: "1Gbps",
    },
  },
  {
    icon: <Server className="w-5 h-5 text-pink-500" />,
    title: "Semi-Dedicados",
    description: "Servidores robustos Windows e Linux no Brasil com recursos dedicados e performance empresarial",
    price: "305",
    cents: "96",
    link: "/semi-dedicado",
    popular: false,
    badge: "Empresarial",
    features: [
      "Windows/Linux disponível",
      "Recursos 100% dedicados",
      "IP dedicado incluído",
      "Acesso root completo",
      "SLA 99.9% uptime",
      "Suporte prioritário",
    ],
    specs: {
      cpu: "AMD Ryzen 9",
      ram: "16GB DDR4",
      storage: "100GB NVMe",
      bandwidth: "1Gbps",
    },
  },
  {
    icon: <HardDrive className="w-5 h-5 text-pink-500" />,
    title: "Servidores Dedicados",
    description: "Servidores físicos de alta performance no Brasil com hardware exclusivo e configuração personalizada",
    price: "950",
    cents: "00",
    link: "/dedicado",
    popular: false,
    badge: "Premium",
    features: [
      "Hardware 100% dedicado",
      "Performance máxima garantida",
      "Configuração personalizada",
      "Suporte premium VIP",
      "Monitoramento 24/7",
      "Migração gratuita",
    ],
    specs: {
      cpu: "AMD Ryzen 9",
      ram: "64GB DDR4",
      storage: "1TB NVMe",
      bandwidth: "1Gbps",
    },
  },
]

const stats = [
  {
    number: "99.9%",
    label: "Uptime Garantido",
    icon: <Clock className="w-4 h-4" />,
    description: "SLA com garantia de disponibilidade",
  },
  {
    number: "24/7",
    label: "Suporte Técnico",
    icon: <Users className="w-4 h-4" />,
    description: "Equipe especializada sempre disponível",
  },
  {
    number: "348TB/s",
    label: "Proteção DDoS",
    icon: <ShieldIcon className="w-4 h-4" />,
    description: "Proteção premium contra ataques",
  },
  {
    number: "< 15ms",
    label: "Latência Baixa",
    icon: <Zap className="w-4 h-4" />,
    description: "Conexão ultra-rápida no Brasil",
  },
]

const features = [
  {
    icon: <ShieldCheckIcon className="w-8 h-8 text-pink-500" />,
    title: "Segurança Avançada",
    description:
      "Proteção DDoS premium, firewall avançado e monitoramento 24/7 para máxima segurança dos seus dados e aplicações",
    details: ["Firewall configurável", "Monitoramento em tempo real", "Backup automático", "SSL gratuito"],
  },
  {
    icon: <Rocket className="w-8 h-8 text-pink-500" />,
    title: "Performance Superior",
    description: "Servidores AMD Ryzen com SSD NVMe, rede de alta velocidade e otimizações para máxima performance",
    details: ["SSD NVMe ultra-rápido", "Processadores AMD Ryzen", "Rede 10Gbps", "Cache otimizado"],
  },
  {
    icon: <Globe className="w-8 h-8 text-pink-500" />,
    title: "Infraestrutura Nacional",
    description: "Datacenter tier 1 no Brasil com conectividade premium para menor latência e melhor experiência",
    details: ["Datacenter Tier 1", "Múltiplas operadoras", "Redundância total", "Energia backup"],
  },
  {
    icon: <Users className="w-8 h-8 text-pink-500" />,
    title: "Suporte Especializado",
    description: "Equipe técnica brasileira disponível 24/7 com conhecimento especializado em cada tipo de servidor",
    details: ["Suporte em português", "Técnicos especializados", "Chat ao vivo", "Tickets prioritários"],
  },
]

const technologies = [
  {
    name: "AMD Ryzen",
    icon: <Cpu className="w-6 h-6 text-pink-500" />,
    description: "Processadores de última geração",
  },
  { name: "NVMe SSD", icon: <Database className="w-6 h-6 text-pink-500" />, description: "Armazenamento ultra-rápido" },
  { name: "Anti-DDoS", icon: <Shield className="w-6 h-6 text-pink-500" />, description: "Proteção premium 348TB/s" },
  {
    name: "Rede 10Gbps",
    icon: <Wifi className="w-6 h-6 text-pink-500" />,
    description: "Conectividade de alta velocidade",
  },
  {
    name: "Backup Auto",
    icon: <CloudIcon className="w-6 h-6 text-pink-500" />,
    description: "Backup automático diário",
  },
  { name: "Monitoramento", icon: <Activity className="w-6 h-6 text-pink-500" />, description: "Monitoramento 24/7" },
]

const guarantees = [
  {
    icon: <Award className="w-8 h-8 text-pink-500" />,
    title: "SLA 99.9%",
    description: "Garantia de uptime com compensação em caso de indisponibilidade",
  },
  {
    icon: <Timer className="w-8 h-8 text-pink-500" />,
    title: "Setup em 5 minutos",
    description: "Servidor configurado e entregue em até 5 minutos após pagamento",
  },
  {
    icon: <HeadphonesIcon className="w-8 h-8 text-pink-500" />,
    title: "Suporte Premium",
    description: "Atendimento especializado 24/7 em português com técnicos qualificados",
  },
  {
    icon: <Lock className="w-8 h-8 text-pink-500" />,
    title: "Segurança Total",
    description: "Proteção DDoS, firewall e monitoramento contínuo inclusos",
  },
]

const testimonials = [
  {
    name: "Carlos Silva",
    role: "CTO",
    company: "TechCorp Brasil",
    content:
      "Migrei nossa infraestrutura completa para a PuffHost há cerca de 1 mês e, até agora, a experiência tem sido excelente. O uptime está impecável, a performance é muito acima da média e o suporte técnico sempre responde de forma rápida e clara. Mesmo nesse curto período, já percebi como a latência baixa fez diferença na experiência dos nossos usuários. Recomendo a PuffHost para quem busca qualidade e estabilidade desde o início.",
    rating: 5,
    avatar: "CS",
    project: "E-commerce com 50k+ usuários",
  },
  {
    name: "Ana Costa",
    role: "Desenvolvedora Full-Stack",
    company: "StartupBR",
    content:
      "Estou usando a PuffHost há cerca de 1 mês para hospedar nossos servidores de jogos, e a experiência tem sido excelente. A performance é excepcional, mesmo com muitos jogadores conectados ao mesmo tempo. A proteção DDoS já mostrou ser realmente eficaz, garantindo estabilidade total até agora. Sempre que precisei, o suporte técnico respondeu muito rápido e com total clareza. Pelo que vi até aqui, tem o melhor custo-benefício do mercado.",
    rating: 5,
    avatar: "AC",
    project: "Servidor FiveM com 200+ slots",
  },
  {
    name: "Roberto Lima",
    role: "Administrador de Sistemas",
    company: "GameHost Pro",
    content:
      "Estou usando a PuffHost há 1 mês para hospedar vários servidores de jogos e, até agora, tem sido uma ótima experiência. A infraestrutura é bem sólida, com excelente estabilidade e desempenho, mesmo com bastante tráfego. O painel de controle é muito intuitivo e facilita toda a administração, desde backups até configurações avançadas. Para quem busca confiabilidade e praticidade desde o começo, recomendo muito.",
    rating: 5,
    avatar: "RL",
    project: "15+ servidores de jogos",
  },
]

const useCases = [
  {
    icon: <MonitorSpeaker className="w-6 h-6 text-pink-500" />,
    title: "Streaming Profissional",
    description: "OBS Studio, multi-streaming, gravação simultânea",
    examples: ["Twitch", "YouTube", "Facebook Gaming"],
  },
  {
    icon: <Zap className="w-6 h-6 text-pink-500" />,
    title: "Servidores de Jogos",
    description: "FiveM, RedM, Minecraft, CS2, Rust",
    examples: ["Roleplay", "Survival", "PvP"],
  },
  {
    icon: <Database className="w-6 h-6 text-pink-500" />,
    title: "Aplicações Web",
    description: "Sites, APIs, e-commerce, sistemas",
    examples: ["WordPress", "Laravel", "Node.js"],
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-pink-500" />,
    title: "Desenvolvimento",
    description: "Ambiente de desenvolvimento e testes",
    examples: ["Git", "CI/CD", "Docker"],
  },
]

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

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

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="pt-[20%] md:pt-[12%] lg:pt-[8%] pb-16 relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 via-transparent to-purple-100/20 pointer-events-none" />
        <div className="absolute top-20 left-10 w-48 h-48 bg-pink-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative z-10">
            <div className="text-center lg:text-left space-y-6">
              <div className="space-y-5">
                <div className="flex justify-center lg:justify-start">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 rounded-full backdrop-blur-sm shadow-md shadow-pink-200/20">
                    <Sparkles className="w-4 h-4 text-pink-600 mr-2 animate-pulse" />
                    <span className="text-sm text-pink-700 font-semibold">Hospedagem Premium no Brasil</span>
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-pink-700 bg-clip-text text-transparent">
                    Hospedagem
                  </span>
                  <br />
                  <span className="text-gray-900">de Alta Performance</span>
                  <br />
                  <span className="bg-gradient-to-r from-gray-900 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                    para Profissionais
                  </span>
                </h1>

                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Infraestrutura nacional de última geração com processadores AMD Ryzen, SSD NVMe, proteção DDoS premium
                  e suporte técnico especializado 24/7 para impulsionar seu projeto.
                </p>
              </div>

              <div className="flex justify-center lg:justify-start">
                <Link href="#plans">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-5 text-base transition-all duration-300 shadow-md shadow-purple-600/30 hover:shadow-purple-700/50 hover:scale-105"
                  >
                    <Rocket className="w-5 h-5 mr-2" />
                    Começar Agora
                  </Button>
                </Link>
              </div>

              {/* Compact Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center space-y-2 group cursor-pointer">
                    <div className="flex justify-center text-pink-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-xs font-medium text-gray-800">{stat.label}</div>
                    <div className="text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-300/30 to-purple-300/30 rounded-3xl blur-2xl animate-pulse" />
                <img
                  src="/svgs/Server-rafiki.svg"
                  alt="Servidores de Alta Performance"
                  className="relative z-10 w-full h-auto max-w-md animate-bounce-y hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Technologies Section */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 rounded-full mb-3">
              <Settings className="w-4 h-4 text-pink-600 mr-2" />
              <span className="text-sm text-pink-700 font-medium">Tecnologias de Ponta</span>
            </div>
            <h2 className="text-2xl font-bold mb-3">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Infraestrutura de Última Geração
              </span>
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Utilizamos as melhores tecnologias do mercado para garantir máxima performance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center hover:scale-105 transition-all duration-300 shadow-md hover:shadow-pink-200/20 border border-gray-200 hover:border-pink-300 group"
              >
                <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm group-hover:text-pink-600 transition-colors duration-300">
                  {tech.name}
                </h3>
                <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact Features Section */}
      <section className="py-16 relative bg-gradient-to-r from-pink-50/50 via-white to-purple-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 rounded-full mb-4">
              <TrendingUp className="w-4 h-4 text-pink-600 mr-2" />
              <span className="text-sm text-pink-700 font-semibold">Diferenciais Exclusivos</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Por que Escolher a PuffHost
              </span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Combinamos tecnologia de ponta, infraestrutura nacional e suporte especializado
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`relative group p-5 rounded-xl transition-all duration-500 cursor-pointer ${
                    activeFeature === index
                      ? "bg-gradient-to-r from-pink-100 to-purple-100 border-2 border-pink-300 shadow-lg shadow-pink-200/20"
                      : "bg-white border border-gray-200 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-200/10"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`flex-shrink-0 p-2 rounded-lg transition-all duration-300 ${
                        activeFeature === index ? "bg-white shadow-md" : "bg-pink-50 group-hover:bg-pink-100"
                      }`}
                    >
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                          activeFeature === index ? "text-pink-600" : "text-gray-900 group-hover:text-pink-600"
                        }`}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-3 text-sm">{feature.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {feature.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                            <span className="text-xs text-gray-600">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-200/40 to-purple-200/40 rounded-2xl blur-2xl animate-pulse" />
                <img
                  src="/datacenter-infrastructure1.png"
                  alt="Infraestrutura Avançada - Datacenter Moderno"
                  className="relative z-10 w-full h-auto max-w-sm hover:scale-105 transition-transform duration-300 rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Plans Section */}
      <section className="py-20 relative bg-white" id="plans">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50/30 to-purple-50/30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 rounded-full mb-4">
              <Star className="w-4 h-4 text-pink-600 mr-2" />
              <span className="text-sm text-pink-700 font-semibold">Planos Profissionais</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-pink-700 bg-clip-text text-transparent">
                Soluções Pensadas para Você
              </span>
            </h2>
            <p className="text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Desde projetos pessoais até aplicações enterprise, oferecemos a infraestrutura perfeita para cada
              necessidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02] group ${
                  plan.popular
                    ? "bg-gradient-to-br from-pink-500 to-purple-600 border-2 border-pink-400 shadow-xl shadow-pink-500/30"
                    : "bg-white border-2 border-gray-200 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-200/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                      ⭐ {plan.badge}
                    </div>
                  </div>
                )}

                {!plan.popular && (
                  <div className="absolute -top-2 left-4">
                    <div className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold border border-pink-200">
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className="space-y-5">
                  {/* Icon and Title */}
                  <div className="text-center space-y-3">
                    <div
                      className={`inline-flex p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 ${
                        plan.popular
                          ? "bg-white/20"
                          : "bg-gradient-to-r from-pink-100 to-purple-100 group-hover:bg-gradient-to-r group-hover:from-pink-200 group-hover:to-purple-200"
                      }`}
                    >
                      <div className={plan.popular ? "text-white" : "text-pink-600"}>{plan.icon}</div>
                    </div>
                    <h3
                      className={`text-lg font-bold group-hover:text-pink-600 transition-colors duration-300 ${
                        plan.popular ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {plan.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-xs leading-relaxed text-center ${plan.popular ? "text-white/90" : "text-gray-600"}`}
                  >
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="text-center py-2">
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className={`text-sm font-medium ${plan.popular ? "text-white/80" : "text-gray-600"}`}>
                        R$
                      </span>
                      <span
                        className={`text-3xl font-bold group-hover:text-pink-600 transition-colors duration-300 ${
                          plan.popular ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span className={`text-lg font-medium ${plan.popular ? "text-white/80" : "text-gray-600"}`}>
                        ,{plan.cents}
                      </span>
                    </div>
                    <span className={`text-xs ${plan.popular ? "text-white/70" : "text-gray-500"}`}>/mensal</span>
                  </div>

                  {/* Specs */}
                  <div className="space-y-2">
                    <h4 className={`font-semibold text-xs ${plan.popular ? "text-white" : "text-gray-900"}`}>
                      Especificações:
                    </h4>
                    <div className="grid grid-cols-2 gap-1 text-xs">
                      <div className={`${plan.popular ? "text-white/90" : "text-gray-600"}`}>
                        <span className="font-medium">CPU:</span> {plan.specs.cpu}
                      </div>
                      <div className={`${plan.popular ? "text-white/90" : "text-gray-600"}`}>
                        <span className="font-medium">RAM:</span> {plan.specs.ram}
                      </div>
                      <div className={`${plan.popular ? "text-white/90" : "text-gray-600"}`}>
                        <span className="font-medium">Storage:</span> {plan.specs.storage}
                      </div>
                      <div className={`${plan.popular ? "text-white/90" : "text-gray-600"}`}>
                        <span className="font-medium">Banda:</span> {plan.specs.bandwidth}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className={`font-semibold text-xs ${plan.popular ? "text-white" : "text-gray-900"}`}>
                      Recursos inclusos:
                    </h4>
                    {plan.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="flex-shrink-0">
                          <Check className="w-3 h-3 text-green-400" />
                        </div>
                        <span className={`text-xs ${plan.popular ? "text-white/90" : "text-gray-700"}`}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <div className="pt-3">
                    <Link href={plan.link} className="block">
                      <Button
                        className={`w-full font-semibold py-4 text-sm transition-all duration-300 ${
                          plan.popular
                            ? "bg-white hover:bg-gray-100 text-pink-600 shadow-lg hover:scale-105"
                            : "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border border-pink-200 hover:border-pink-300 hover:scale-105"
                        }`}
                        size="lg"
                      >
                        Ver todos os planos
                        <ArrowRight className="w-3 h-3 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact Use Cases Section */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 rounded-full mb-3">
              <Target className="w-4 h-4 text-pink-600 mr-2" />
              <span className="text-sm text-pink-700 font-medium">Casos de Uso</span>
            </div>
            <h2 className="text-2xl font-bold mb-3">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Perfeito para Qualquer Projeto
              </span>
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Nossa infraestrutura atende desde criadores de conteúdo até grandes empresas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-pink-200/20 border border-gray-200 hover:border-pink-300 group"
              >
                <div className="text-center space-y-3">
                  <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300 text-sm">
                    {useCase.title}
                  </h3>
                  <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {useCase.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-1 pt-2">
                    {useCase.examples.map((example, exampleIndex) => (
                      <span
                        key={exampleIndex}
                        className="px-2 py-1 bg-pink-50 text-pink-600 text-xs rounded-full border border-pink-200 group-hover:bg-pink-100 transition-colors duration-300"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact Guarantees Section */}
      <section className="py-12 bg-gradient-to-r from-pink-50/50 via-white to-purple-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 rounded-full mb-3">
              <Shield className="w-4 h-4 text-pink-600 mr-2" />
              <span className="text-sm text-pink-700 font-medium">Nossas Garantias</span>
            </div>
            <h2 className="text-2xl font-bold mb-3">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Compromisso com a Excelência
              </span>
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Oferecemos garantias sólidas para que você tenha total confiança
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <div
                key={index}
                className="text-center space-y-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-pink-300 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-pink-200/20 group"
              >
                <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  {guarantee.icon}
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300 text-sm">
                  {guarantee.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {guarantee.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact Testimonials */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 rounded-full mb-4">
              <Star className="w-4 h-4 text-pink-600 mr-2" />
              <span className="text-sm text-pink-700 font-semibold">Depoimentos Reais</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                O que Nossos Clientes Dizem
              </span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Confiança de milhares de profissionais e empresas que escolheram nossa infraestrutura
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:border-pink-300 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-200/20 group"
              >
                <div className="space-y-4">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-sm">
                    "{testimonial.content}"
                  </p>

                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300 text-sm">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-gray-600">
                          {testimonial.role} • {testimonial.company}
                        </div>
                        <div className="text-xs text-pink-600 font-medium mt-1">{testimonial.project}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 rounded-full mb-4 shadow-lg shadow-pink-200/20">
              <Sparkles className="w-4 h-4 text-pink-600 mr-2 animate-pulse" />
              <span className="text-sm text-pink-700 font-semibold">Dúvidas Frequentes</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-pink-700 bg-clip-text text-transparent">
                Perguntas Frequentes
              </span>
            </h2>
            <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Respostas detalhadas para as principais dúvidas sobre nossos serviços de hospedagem premium
            </p>
          </div>
          <AccordionItems />
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 animate-pulse"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  )
}
