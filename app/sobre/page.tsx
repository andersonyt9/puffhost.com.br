"use client"

import { Button } from "@nextui-org/button"
import { Card, CardBody } from "@nextui-org/card"
import {
  Users,
  Heart,
  Shield,
  Zap,
  Award,
  Clock,
  Headphones,
  TrendingUp,
  Building2,
  Calendar,
  Star,
  CheckCircle,
  ArrowUp,
  Rocket,
  Cpu,
  HardDrive,
  Wifi,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function SobrePage() {
  const [scrollY, setScrollY] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const stats = [
    { number: "99.9%", label: "Uptime Garantido", icon: <TrendingUp className="w-4 h-4" /> },
    { number: "24/7", label: "Suporte Técnico", icon: <Headphones className="w-4 h-4" /> },
    { number: "2025", label: "Ano de Fundação", icon: <Calendar className="w-4 h-4" /> },
    { number: "100%", label: "Foco em Qualidade", icon: <Star className="w-4 h-4" /> },
  ]

  const values = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Segurança",
      description:
        "Infraestrutura protegida com sistemas anti-DDoS avançados e monitoramento contínuo para garantir máxima disponibilidade e proteção dos seus dados.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Performance",
      description:
        "Hardware de última geração com processadores AMD Ryzen e armazenamento NVMe para entregar a performance que seus projetos merecem.",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Compromisso",
      description:
        "Dedicação total ao sucesso dos nossos clientes, fornecendo infraestrutura confiável e suporte técnico especializado quando você precisar.",
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Excelência",
      description:
        "Busca constante pela perfeição em todos os aspectos da nossa infraestrutura, desde a qualidade do hardware até a estabilidade da rede.",
    },
  ]

  const team = [
    {
      name: "Equipe Técnica",
      role: "Infraestrutura & Suporte",
      description:
        "Especialistas em sistemas, redes e infraestrutura dedicados a manter seus serviços sempre online e funcionando perfeitamente.",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Equipe de Operações",
      role: "Monitoramento 24/7",
      description:
        "Profissionais responsáveis pelo monitoramento contínuo da infraestrutura e resposta rápida a qualquer eventualidade.",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Equipe de Desenvolvimento",
      role: "Inovação & Melhorias",
      description:
        "Desenvolvedores focados em criar ferramentas e melhorar continuamente a experiência dos nossos clientes.",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Equipe Comercial",
      role: "Atendimento & Vendas",
      description:
        "Consultores especializados em ajudar você a escolher a melhor solução de hospedagem para suas necessidades.",
      image: "/placeholder.svg?height=120&width=120",
    },
  ]

  const milestones = [
    {
      year: "2025",
      title: "Fundação da PuffHost",
      description:
        "Lançamento oficial da PuffHost com foco em fornecer infraestrutura de hospedagem premium para o mercado brasileiro.",
    },
    {
      year: "2025 Q2",
      title: "Expansão da Infraestrutura",
      description:
        "Investimento em hardware AMD Ryzen de última geração e implementação de proteção anti-DDoS de nível empresarial.",
    },
    {
      year: "2025 Q3",
      title: "Diversificação de Serviços",
      description:
        "Lançamento de nossa linha completa de VPS especializados e servidores dedicados para diferentes necessidades.",
    },
    {
      year: "2025 Q4",
      title: "Consolidação no Mercado",
      description:
        "Estabelecimento como referência em qualidade e confiabilidade no setor de hospedagem premium no Brasil.",
    },
  ]

  const infrastructure = [
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Processadores AMD Ryzen",
      description: "CPUs de última geração para máxima performance",
    },
    {
      icon: <HardDrive className="w-5 h-5" />,
      title: "Armazenamento NVMe",
      description: "SSDs ultra-rápidos para velocidade excepcional",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Proteção Anti-DDoS",
      description: "Segurança avançada contra ataques maliciosos",
    },
    {
      icon: <Wifi className="w-5 h-5" />,
      title: "Rede de Alta Velocidade",
      description: "Conectividade premium com baixa latência",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-white"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            background:
              "radial-gradient(circle at 30% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
          }}
        ></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-100 to-purple-100 px-3 py-1 rounded-full mb-4 border border-pink-200/50">
              <Building2 className="w-3 h-3 text-pink-600" />
              <span className="text-xs font-semibold text-pink-700">Sobre a PuffHost</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Infraestrutura Premium
              </span>
              <br />
              <span className="text-gray-900">para seus Projetos</span>
            </h1>

            <p className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A PuffHost é uma empresa brasileira especializada em fornecer infraestrutura de hospedagem de alta
              performance. Oferecemos servidores limpos e recursos de qualidade premium para que você tenha total
              liberdade de configurar seus projetos da forma que desejar.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-pink-100 hover:border-pink-200 transition-all duration-300 hover:shadow-md hover:shadow-pink-100/50"
              >
                <CardBody className="text-center p-3">
                  <div className="flex justify-center mb-1 text-pink-600">{stat.icon}</div>
                  <div className="text-lg font-bold text-gray-900 mb-0">{stat.number}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-10 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Nossa História</h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto">
              Conheça a visão que deu origem à PuffHost e nosso compromisso com a excelência em infraestrutura.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nascida da Necessidade do Mercado</h3>
              <div className="space-y-3 text-gray-700 text-sm">
                <p>
                  A PuffHost foi fundada em 2025 com uma missão clara: fornecer infraestrutura de hospedagem premium que
                  realmente atenda às demandas do mercado brasileiro moderno. Identificamos uma lacuna significativa
                  entre o que os clientes precisavam e o que estava disponível no mercado.
                </p>
                <p>
                  Nossa proposta é simples e direta: oferecemos servidores de alta qualidade, completamente limpos e
                  prontos para suas configurações. Não interferimos no seu projeto - fornecemos apenas a base sólida que
                  você precisa para construir exatamente o que imaginou.
                </p>
                <p>
                  Com investimento em hardware de última geração e uma equipe técnica especializada, estabelecemos um
                  novo padrão de qualidade no setor, focando exclusivamente na excelência da infraestrutura que
                  oferecemos.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-xl blur-lg"></div>
              <Card className="relative bg-white border border-pink-100 shadow-lg">
                <CardBody className="p-5">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Nossa Missão</h4>
                    <p className="text-gray-700 text-sm">
                      Democratizar o acesso à infraestrutura de hospedagem premium, fornecendo servidores de alta
                      qualidade que servem como base sólida para o sucesso dos projetos dos nossos clientes.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-pink-400 to-purple-400"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"} mb-6`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-6 text-right" : "pl-6 text-left"}`}>
                  <Card className="bg-white border border-pink-100 hover:border-pink-200 transition-all duration-300 hover:shadow-md">
                    <CardBody className="p-4">
                      <div className="text-lg font-bold text-pink-600 mb-1">{milestone.year}</div>
                      <h4 className="text-base font-semibold text-gray-900 mb-1">{milestone.title}</h4>
                      <p className="text-gray-700 text-xs">{milestone.description}</p>
                    </CardBody>
                  </Card>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full border-2 border-white shadow-md"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Nossos Valores</h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto">
              Os princípios fundamentais que orientam nossa abordagem na entrega de infraestrutura de qualidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group bg-white border border-gray-200 hover:border-pink-200 transition-all duration-300 hover:shadow-md hover:shadow-pink-100/50 hover:-translate-y-1"
              >
                <CardBody className="p-4 text-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:from-pink-500 group-hover:to-purple-600 transition-all duration-300">
                    <div className="text-pink-600 group-hover:text-white transition-colors duration-300">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-700 text-xs leading-relaxed">{value.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Nossa Equipe</h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto">
              Profissionais especializados dedicados a manter sua infraestrutura funcionando com excelência.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group bg-white border border-gray-200 hover:border-pink-200 transition-all duration-300 hover:shadow-md hover:shadow-pink-100/50"
              >
                <CardBody className="p-4 text-center">
                  <div className="relative mb-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full mx-auto flex items-center justify-center group-hover:from-pink-500 group-hover:to-purple-600 transition-all duration-300">
                      <Users className="w-8 h-8 text-pink-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-0">{member.name}</h3>
                  <div className="text-pink-600 font-medium text-xs mb-2">{member.role}</div>
                  <p className="text-gray-700 text-xs leading-relaxed">{member.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Infraestrutura */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Nossa Infraestrutura</h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto">
              Hardware de última geração e tecnologia de ponta para garantir performance excepcional e confiabilidade
              total.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {infrastructure.map((item, index) => (
              <Card
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-pink-200 transition-all duration-300 hover:shadow-md hover:shadow-pink-100/50"
              >
                <CardBody className="p-4 text-center">
                  <div className="text-pink-600 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-700 text-xs">{item.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Datacenter Image */}
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <img
              src="/datacenter-infrastructure.webp"
              alt="Datacenter PuffHost com servidores de alta performance"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-base font-bold mb-1">Datacenter de Classe Mundial</h3>
              <p className="text-xs opacity-90">Infraestrutura moderna com redundância total e monitoramento 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Compromissos */}
      <section className="py-10 bg-gradient-to-br from-pink-50 via-purple-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Nossos Compromissos</h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto">
              Garantias sólidas que demonstram nossa dedicação à excelência em infraestrutura e satisfação dos clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: <CheckCircle className="w-4 h-4" />,
                title: "SLA de 99.9%",
                description:
                  "Garantia de disponibilidade da infraestrutura com compensação automática em caso de indisponibilidade.",
              },
              {
                icon: <Clock className="w-4 h-4" />,
                title: "Ativação em 24h",
                description: "Entrega rápida do seu servidor limpo e pronto para configuração em até 24 horas.",
              },
              {
                icon: <Headphones className="w-4 h-4" />,
                title: "Suporte Técnico 24/7",
                description:
                  "Equipe especializada em infraestrutura disponível todos os dias para questões técnicas do servidor.",
              },
              {
                icon: <Shield className="w-4 h-4" />,
                title: "Segurança da Infraestrutura",
                description: "Proteção anti-DDoS, monitoramento de rede e segurança física do datacenter garantidos.",
              },
              {
                icon: <Star className="w-4 h-4" />,
                title: "Satisfação Garantida",
                description: "30 dias de garantia na qualidade da infraestrutura ou seu dinheiro de volta.",
              },
              {
                icon: <TrendingUp className="w-4 h-4" />,
                title: "Escalabilidade Total",
                description: "Recursos de infraestrutura que crescem junto com suas necessidades, sem complicações.",
              },
            ].map((commitment, index) => (
              <Card
                key={index}
                className="group bg-white/80 backdrop-blur-sm border border-pink-100 hover:border-pink-200 transition-all duration-300 hover:shadow-md hover:shadow-pink-100/50"
              >
                <CardBody className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-pink-500 group-hover:to-purple-600 transition-all duration-300">
                      <div className="text-pink-600 group-hover:text-white transition-colors duration-300">
                        {commitment.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-1">{commitment.title}</h3>
                      <p className="text-gray-700 text-xs leading-relaxed">{commitment.description}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* O que NÃO fazemos */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Transparência Total</h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto">
              Para evitar qualquer mal-entendido, deixamos claro o que fazemos e o que não fazemos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-green-50 border border-green-200">
              <CardBody className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-green-800">O que FORNECEMOS</h3>
                </div>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>• Servidor limpo com sistema operacional básico</li>
                  <li>• Acesso root completo para suas configurações</li>
                  <li>• Hardware premium (AMD Ryzen + NVMe)</li>
                  <li>• Proteção anti-DDoS e segurança de rede</li>
                  <li>• Suporte técnico para infraestrutura</li>
                  <li>• Monitoramento 24/7 da conectividade</li>
                  <li>• Garantia de uptime de 99.9%</li>
                </ul>
              </CardBody>
            </Card>

            <Card className="bg-red-50 border border-red-200">
              <CardBody className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold">✕</span>
                  </div>
                  <h3 className="text-lg font-bold text-red-800">O que NÃO fazemos</h3>
                </div>
                <ul className="space-y-2 text-sm text-red-700">
                  <li>• Instalação de jogos, softwares ou aplicações</li>
                  <li>• Configuração de FiveM, RedM ou outros mods</li>
                  <li>• Suporte para problemas específicos de software</li>
                  <li>• Fornecimento de scripts, plugins ou recursos</li>
                  <li>• Configuração de streaming ou OBS</li>
                  <li>• Gerenciamento de conteúdo ou dados</li>
                  <li>• Consultoria sobre configurações específicas</li>
                </ul>
              </CardBody>
            </Card>
          </div>

          <div className="mt-6 text-center">
            <Card className="bg-blue-50 border border-blue-200 inline-block">
              <CardBody className="p-4">
                <p className="text-sm text-blue-800 font-medium">
                  <strong>Resumo:</strong> Fornecemos a infraestrutura premium. Você tem total liberdade para configurar
                  como quiser.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Pronto para Ter Infraestrutura de Verdade?</h2>
          <p className="text-base text-pink-100 mb-6 max-w-2xl mx-auto">
            Experimente a diferença de ter um servidor premium, limpo e pronto para suas configurações. Infraestrutura
            de qualidade para projetos sérios.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/">
              <Button
                size="md"
                className="bg-white text-pink-600 hover:bg-pink-50 font-semibold px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300"
              >
                Ver Nossos Planos
              </Button>
            </Link>
            <Link href="https://discord.gg/Tgm2gn9zM3" target="_blank">
              <Button
                size="md"
                variant="bordered"
                className="border-white text-white hover:bg-white hover:text-pink-600 font-semibold px-6 py-2 transition-all duration-300"
              >
                Falar Conosco
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          isIconOnly
          className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          size="sm"
          onClick={scrollToTop}
        >
          <ArrowUp className="w-4 h-4" />
        </Button>
      )}
    </div>
  )
}