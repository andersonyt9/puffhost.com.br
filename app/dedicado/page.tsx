"use client"

import { Card, CardBody, Chip } from "@nextui-org/react"
import { Button } from "@nextui-org/button"
import {
  Star,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Server,
  Database,
  Users,
  Award,
  Gauge,
  Lock,
  Crown,
  Sparkles,
} from "lucide-react"
import { AccordionItems } from "../_components/accordion"
import { useState, useEffect } from "react"
import { dedicadoPlans } from "./plans"

const plans = dedicadoPlans

export default function Dedicados() {
  const [mounted, setMounted] = useState(false)
  const [expandedPlan, setExpandedPlan] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-pink-500"></div>
      </div>
    )
  }

  const togglePlan = (index: number) => {
    setExpandedPlan(expandedPlan === index ? null : index)
  }

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Essential":
        return "from-blue-500 to-cyan-500"
      case "Professional":
        return "from-purple-500 to-pink-500"
      case "Enterprise":
        return "from-orange-500 to-red-500"
      default:
        return "from-purple-500 to-pink-500"
    }
  }

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case "Essential":
        return <Server className="w-4 h-4" />
      case "Professional":
        return <Crown className="w-4 h-4" />
      case "Enterprise":
        return <Sparkles className="w-4 h-4" />
      default:
        return <Server className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30">
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:50px_50px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full px-4 py-2 mb-4 border border-purple-500/20">
              <Crown className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Servidores Dedicados Premium</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              Poder
              <br />
              <span className="text-gray-900">Absoluto</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-900 max-w-3xl mx-auto mb-6 leading-relaxed">
              Hardware exclusivo com processadores AMD Ryzen de última geração.
              <br />
              <span className="text-pink-600 font-semibold">100% dos recursos dedicados ao seu projeto.</span>
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-gray-200 backdrop-blur-sm shadow-sm">
                <Award className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-gray-800">Hardware Exclusivo</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-gray-200 backdrop-blur-sm shadow-sm">
                <Shield className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-800">Proteção DDoS 348TB/s</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-gray-200 backdrop-blur-sm shadow-sm">
                <Gauge className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-gray-800">99.99% Uptime SLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-16 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Servidores Dedicados
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
              Hardware exclusivo com processadores AMD Ryzen. Escolha o poder computacional ideal para seu projeto.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-700 ${
                  expandedPlan === index
                    ? `bg-white border-2 ${plan.popular ? "border-purple-500/50" : "border-purple-500/30"} shadow-2xl shadow-purple-500/10`
                    : "bg-white border border-gray-200 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/5"
                } backdrop-blur-sm`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      <Star className="w-4 h-4 inline mr-1" />
                      Mais Popular
                    </div>
                  </div>
                )}

                {/* Tier Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <div
                    className={`bg-gradient-to-r ${getTierColor(plan.tier)} text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1`}
                  >
                    {getTierIcon(plan.tier)}
                    {plan.tier}
                  </div>
                </div>

                <CardBody className={`p-6 ${plan.popular ? "pt-8" : ""}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    {/* Plan Info */}
                    <div className="lg:col-span-4">
                      <div className="text-center lg:text-left">
                        {/* AMD Logo */}
                        <div className="flex justify-center lg:justify-start mb-4">
                          <div className="relative w-20 h-12 flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-xl"></div>
                            <img
                              src="/amd-logo-new.jpg"
                              alt="AMD Logo"
                              className="relative z-10 max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.nome}</h3>
                        <p className="text-base text-purple-600 font-medium mb-1">{plan.frequencia}</p>
                        <p className="text-gray-600 mb-4 text-sm">
                          {plan.nucleos} núcleos • {plan.threads} threads
                        </p>

                        <div className="flex items-baseline justify-center lg:justify-start gap-2 mb-4">
                          <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            R$ {plan.preco.toFixed(2)}
                          </span>
                          <span className="text-gray-600">/mês</span>
                        </div>

                        <div className="mb-4">
                          <Chip
                            size="md"
                            className="font-bold px-4 py-1"
                            variant="shadow"
                            color={plan.disponibilidade ? "success" : "danger"}
                          >
                            {plan.disponibilidade ? "✓ Disponível" : "Indisponível"}
                          </Chip>
                        </div>

                        <div className="space-y-3">
                          <Button
                            onClick={() => plan.link && window.open(plan.link, "_blank")}
                            disabled={!plan.link}
                            className={`w-full bg-gradient-to-r ${getTierColor(plan.tier)} hover:shadow-lg text-white font-bold py-3 ${!plan.link ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                            size="md"
                          >
                            <Crown className="w-4 h-4 mr-2" />
                            Contratar Agora
                          </Button>

                          <Button
                            variant="ghost"
                            className="w-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 py-3"
                            size="md"
                            onClick={() => togglePlan(index)}
                          >
                            {expandedPlan === index ? (
                              <>
                                Menos Detalhes <ChevronUp className="w-4 h-4 ml-2" />
                              </>
                            ) : (
                              <>
                                Ver Especificações <ChevronDown className="w-4 h-4 ml-2" />
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Specs Grid */}
                    <div className="lg:col-span-8">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {plan.specs.map((spec, specIndex) => (
                          <div
                            key={specIndex}
                            className="text-center p-4 rounded-xl bg-gradient-to-b from-gray-50 to-gray-100/50 hover:from-gray-100 hover:to-purple-50 transition-all duration-300 backdrop-blur-sm hover:scale-105 border border-gray-200 hover:border-purple-500/30"
                          >
                            <div className="text-purple-600 mb-3 flex justify-center">{spec.icon}</div>
                            <h4 className="font-bold text-gray-900 mb-1 text-base">{spec.label}</h4>
                            <p className="text-sm text-gray-700">{spec.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedPlan === index && (
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Recursos Inclusos */}
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                            Recursos Inclusos
                          </h4>
                          <ul className="space-y-2">
                            {plan.recursos.map((recurso, i) => (
                              <li key={i} className="flex items-center text-gray-800">
                                <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                                {recurso}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Aplicações Suportadas */}
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                            <Zap className="w-5 h-5 text-purple-600 mr-2" />
                            Casos de Uso
                          </h4>
                          <ul className="space-y-2">
                            {plan.aplicacoes.map((app, i) => (
                              <li key={i} className="flex items-center text-gray-800">
                                <ArrowRight className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                                {app}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Exclusividade Premium
              </span>
            </h2>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto">
              Recursos exclusivos que fazem a diferença em projetos críticos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Crown className="w-8 h-8" />,
                title: "Hardware Exclusivo",
                description: "100% dos recursos dedicados exclusivamente ao seu projeto, sem compartilhamento",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Proteção Máxima",
                description: "348TB/s de proteção DDoS e firewall avançado para máxima segurança",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Gauge className="w-8 h-8" />,
                title: "Performance Extrema",
                description: "Processadores AMD Ryzen de última geração com frequências até 5.6GHz",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "Armazenamento NVMe",
                description: "SSDs NVMe Gen4 para velocidades de leitura/escrita extremas",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Suporte VIP",
                description: "Equipe técnica especializada disponível 24/7 com atendimento prioritário",
                color: "from-purple-500 to-indigo-500",
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Acesso Root Total",
                description: "Controle completo do servidor com acesso administrativo irrestrito",
                color: "from-pink-500 to-rose-500",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white border border-gray-200 hover:border-purple-500/30 transition-all duration-500 hover:scale-105 group shadow-sm hover:shadow-lg"
              >
                <CardBody className="p-6 text-center">
                  <div
                    className={`bg-gradient-to-r ${feature.color} p-3 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">{feature.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Guarantees */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-3xl p-8 md:p-12 border border-purple-500/20 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Garantias Enterprise</h2>
              <p className="text-lg text-gray-800 max-w-3xl mx-auto">
                Compromissos que garantem a excelência do seu projeto
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  99.99%
                </div>
                <div className="text-gray-900 font-bold text-lg mb-1">Uptime SLA</div>
                <div className="text-gray-600 text-sm">Garantia contratual</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-gray-900 font-bold text-lg mb-1">Suporte VIP</div>
                <div className="text-gray-600 text-sm">Sempre disponível</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  7
                </div>
                <div className="text-gray-900 font-bold text-lg mb-1">Dias Garantia</div>
                <div className="text-gray-600 text-sm">Satisfação garantida</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  0
                </div>
                <div className="text-gray-900 font-bold text-lg mb-1">Taxa Setup</div>
                <div className="text-gray-600 text-sm">Configuração gratuita</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Perguntas Frequentes
              </span>
            </h2>
            <p className="text-lg text-gray-800">Esclareça suas dúvidas sobre nossos servidores dedicados</p>
          </div>
          <div className="text-gray-900">
            <AccordionItems />
          </div>
        </div>
      </section>
    </div>
  )
}
