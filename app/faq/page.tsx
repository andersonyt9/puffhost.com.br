"use client"

import { useState, useMemo } from "react"
import {
  Search,
  ChevronDown,
  ChevronUp,
  ArrowUp,
  HelpCircle,
  Server,
  Gamepad2,
  CreditCard,
  HeadphonesIcon,
  Shield,
  Settings,
  Sparkles,
  MessageCircle,
  Phone,
} from "lucide-react"
import { Button } from "@nextui-org/button"
import Link from "next/link"
import { useEffect } from "react"

const categories = [
  {
    id: "geral",
    name: "Geral",
    icon: <HelpCircle className="w-5 h-5" />,
    color: "text-pink-600",
  },
  {
    id: "vps",
    name: "VPS",
    icon: <Server className="w-5 h-5" />,
    color: "text-purple-600",
  },
  {
    id: "gaming",
    name: "Gaming",
    icon: <Gamepad2 className="w-5 h-5" />,
    color: "text-pink-500",
  },
  {
    id: "pagamento",
    name: "Pagamento",
    icon: <CreditCard className="w-5 h-5" />,
    color: "text-purple-500",
  },
  {
    id: "suporte",
    name: "Suporte",
    icon: <HeadphonesIcon className="w-5 h-5" />,
    color: "text-pink-600",
  },
  {
    id: "seguranca",
    name: "Segurança",
    icon: <Shield className="w-5 h-5" />,
    color: "text-purple-600",
  },
  {
    id: "tecnico",
    name: "Técnico",
    icon: <Settings className="w-5 h-5" />,
    color: "text-pink-500",
  },
]

const faqs = [
  // Geral
  {
    category: "geral",
    question: "O que é a PuffHost?",
    answer:
      "A PuffHost é uma empresa brasileira especializada em hospedagem de alta performance, oferecendo VPS, servidores semi-dedicados e dedicados com infraestrutura nacional de última geração. Focamos em gaming, streaming e aplicações empresariais.",
  },
  {
    category: "geral",
    question: "Onde estão localizados os servidores?",
    answer:
      "Nossos servidores estão localizados em datacenters Tier 1 no Brasil, especificamente em São Paulo, Rio de Janeiro e Fortaleza, garantindo baixa latência para usuários brasileiros e conectividade premium.",
  },
  {
    category: "geral",
    question: "Qual é o SLA de uptime oferecido?",
    answer:
      "Oferecemos SLA de 99.9% de uptime com compensação automática em caso de indisponibilidade. Nosso monitoramento 24/7 garante máxima disponibilidade dos serviços.",
  },
  {
    category: "geral",
    question: "Como funciona o suporte técnico?",
    answer:
      "Nosso suporte técnico funciona 24/7 através de chat ao vivo, tickets e Discord. Temos uma equipe especializada em cada tipo de servidor com tempo médio de resposta de 15 minutos.",
  },
  {
    category: "geral",
    question: "Vocês oferecem migração gratuita?",
    answer:
      "Sim! Oferecemos migração gratuita para todos os planos. Nossa equipe técnica cuida de todo o processo de transferência dos seus dados e configurações sem custo adicional.",
  },

  // VPS
  {
    category: "vps",
    question: "Qual a diferença entre VPS e servidor dedicado?",
    answer:
      "VPS (Virtual Private Server) compartilha recursos físicos entre múltiplos usuários, mas com recursos garantidos. Servidor dedicado oferece hardware 100% exclusivo. VPS é ideal para projetos médios, dedicado para alta demanda.",
  },
  {
    category: "vps",
    question: "Posso fazer upgrade do meu VPS?",
    answer:
      "Sim! Você pode fazer upgrade de RAM, CPU, storage e bandwidth a qualquer momento. O processo é instantâneo e sem downtime. Entre em contato conosco para solicitar o upgrade.",
  },
  {
    category: "vps",
    question: "Qual sistema operacional posso usar?",
    answer:
      "Oferecemos Windows Server (2019/2022) e diversas distribuições Linux (Ubuntu, CentOS, Debian, AlmaLinux). Você pode escolher na contratação ou solicitar reinstalação a qualquer momento.",
  },
  {
    category: "vps",
    question: "Tenho acesso root/administrador?",
    answer:
      "Sim! Todos os nossos VPS oferecem acesso root completo no Linux e administrador no Windows, permitindo total controle sobre o servidor e instalação de qualquer software.",
  },
  {
    category: "vps",
    question: "Como funciona o backup automático?",
    answer:
      "Realizamos backup automático diário de todos os VPS, mantendo 7 dias de histórico. Os backups são armazenados em local separado e podem ser restaurados gratuitamente a qualquer momento.",
  },

  // Gaming
  {
    category: "gaming",
    question: "Vocês oferecem servidores para FiveM?",
    answer:
      "Sim! Temos VPS otimizados especificamente para FiveM com scripts premium inclusos, anti-cheat, MySQL configurado e suporte especializado para roleplay. Planos de 32 a 300+ slots.",
  },
  {
    category: "gaming",
    question: "Posso hospedar servidor de Minecraft?",
    answer:
      "Perfeitamente! Nossos VPS são ideais para Minecraft com Java pré-instalado, painel de controle específico, mods suportados e otimizações para melhor performance. Suportamos todas as versões.",
  },
  {
    category: "gaming",
    question: "Como funciona a proteção anti-DDoS para jogos?",
    answer:
      "Oferecemos proteção DDoS premium de 348TB/s específica para gaming, com filtragem inteligente que não afeta a latência dos jogos. Proteção ativa 24/7 sem configuração necessária.",
  },
  {
    category: "gaming",
    question: "Qual a latência média para jogos?",
    answer:
      "Nossa latência média é inferior a 5ms para usuários no Brasil. Com servidores em múltiplas localidades e rede otimizada, garantimos a melhor experiência para gaming online.",
  },
  {
    category: "gaming",
    question: "Posso instalar mods e plugins?",
    answer:
      "Sim! Com acesso root/admin completo, você pode instalar qualquer mod, plugin ou script. Oferecemos suporte para instalação e configuração de mods populares.",
  },

  // Pagamento
  {
    category: "pagamento",
    question: "Quais formas de pagamento vocês aceitam?",
    answer:
      "Aceitamos PIX (desconto de 5%), cartão de crédito/débito, boleto bancário, PayPal e transferência bancária. Pagamentos via PIX são processados instantaneamente.",
  },
  {
    category: "pagamento",
    question: "Como funciona a cobrança mensal?",
    answer:
      "A cobrança é feita mensalmente na data de contratação. Enviamos lembretes por email 3 dias antes do vencimento. Pagamentos em atraso têm 5 dias de tolerância antes da suspensão.",
  },
  {
    category: "pagamento",
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim! Não temos fidelidade. Você pode cancelar a qualquer momento através da área do cliente. O serviço permanece ativo até o final do período pago.",
  },
  {
    category: "pagamento",
    question: "Vocês oferecem reembolso?",
    answer:
      "Oferecemos garantia de 7 dias para novos clientes. Se não ficar satisfeito, reembolsamos 100% do valor pago. Para cancelamentos após esse período, não há reembolso proporcional.",
  },
  {
    category: "pagamento",
    question: "Há desconto para pagamento anual?",
    answer:
      "Sim! Oferecemos 10% de desconto para pagamento anual e 5% para semestral. O desconto é aplicado automaticamente na contratação de planos anuais.",
  },

  // Suporte
  {
    category: "suporte",
    question: "Qual o horário de funcionamento do suporte?",
    answer:
      "Nosso suporte técnico funciona 24 horas por dia, 7 dias por semana, incluindo feriados. Estamos sempre disponíveis para ajudar através de chat, tickets ou Discord.",
  },
  {
    category: "suporte",
    question: "Vocês ajudam com configurações?",
    answer:
      "Sim! Nossa equipe ajuda com configurações básicas, instalação de softwares, otimizações e resolução de problemas. Oferecemos suporte técnico completo incluído no plano.",
  },
  {
    category: "suporte",
    question: "Como abrir um ticket de suporte?",
    answer:
      "Você pode abrir tickets através da área do cliente, chat ao vivo no site ou Discord. Todos os tickets são priorizados por urgência e respondidos em até 15 minutos.",
  },
  {
    category: "suporte",
    question: "Vocês oferecem suporte em português?",
    answer:
      "Sim! Todo nosso suporte é em português brasileiro com técnicos especializados. Entendemos as necessidades específicas do mercado brasileiro.",
  },
  {
    category: "suporte",
    question: "Posso solicitar configuração personalizada?",
    answer:
      "Claro! Oferecemos configurações personalizadas para atender necessidades específicas. Nossa equipe pode configurar ambientes complexos e otimizações avançadas.",
  },

  // Segurança
  {
    category: "seguranca",
    question: "Como funciona a proteção DDoS?",
    answer:
      "Utilizamos proteção DDoS premium de 348TB/s com filtragem em tempo real. A proteção é automática e transparente, bloqueando ataques sem afetar o tráfego legítimo.",
  },
  {
    category: "seguranca",
    question: "Os dados estão seguros?",
    answer:
      "Sim! Utilizamos criptografia, firewalls avançados, monitoramento 24/7 e backups automáticos. Nossos datacenters possuem segurança física e certificações internacionais.",
  },
  {
    category: "seguranca",
    question: "Posso configurar firewall personalizado?",
    answer:
      "Sim! Oferecemos firewall configurável através do painel de controle. Você pode criar regras personalizadas, bloquear IPs e configurar portas específicas.",
  },
  {
    category: "seguranca",
    question: "Como funciona o monitoramento?",
    answer:
      "Monitoramos 24/7 todos os servidores com alertas automáticos. Verificamos CPU, RAM, disco, rede e disponibilidade. Problemas são detectados e resolvidos proativamente.",
  },
  {
    category: "seguranca",
    question: "Vocês fazem auditoria de segurança?",
    answer:
      "Realizamos auditorias regulares de segurança, testes de penetração e atualizações constantes. Seguimos as melhores práticas de segurança da indústria.",
  },

  // Técnico
  {
    category: "tecnico",
    question: "Qual hardware vocês utilizam?",
    answer:
      "Utilizamos processadores AMD Ryzen de última geração, SSD NVMe para máxima velocidade, RAM DDR5 e rede 10Gbps. Todo hardware é enterprise grade.",
  },
  {
    category: "tecnico",
    question: "Posso escolher a localização do servidor?",
    answer:
      "Sim! Oferecemos servidores em São Paulo, Rio de Janeiro e Fortaleza. Você pode escolher a localização mais próxima dos seus usuários para menor latência.",
  },
  {
    category: "tecnico",
    question: "Como funciona a rede?",
    answer:
      "Nossa rede utiliza múltiplas operadoras (Tier 1) com redundância total. Conexão 10Gbps por servidor com roteamento otimizado para melhor performance no Brasil.",
  },
  {
    category: "tecnico",
    question: "Posso ter IP dedicado?",
    answer:
      "Sim! Todos os planos incluem IP dedicado brasileiro. IPs adicionais podem ser contratados conforme necessidade, sujeito à disponibilidade e justificativa.",
  },
  {
    category: "tecnico",
    question: "Qual painel de controle vocês oferecem?",
    answer:
      "Oferecemos painel próprio otimizado para cada tipo de servidor, além de opções como cPanel, Plesk e Pterodactyl para gaming. Interface intuitiva e em português.",
  },
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("todos")
  const [openItems, setOpenItems] = useState<string[]>([])
  const [showScrollTop, setShowScrollTop] = useState(false)

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

  const filteredFAQs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesSearch =
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "todos" || faq.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const toggleItem = (index: number) => {
    const itemId = `faq-${index}`
    setOpenItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Espaçamento para navbar */}
      <div className="h-16"></div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 via-transparent to-purple-100/20 pointer-events-none" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-200/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-2xl animate-pulse" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 rounded-full mb-6 shadow-md shadow-pink-200/20">
            <Sparkles className="w-4 h-4 text-pink-600 mr-2 animate-pulse" />
            <span className="text-sm text-pink-700 font-semibold">Central de Ajuda</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-pink-700 bg-clip-text text-transparent">
              Perguntas Frequentes
            </span>
          </h1>

          <p className="text-base text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Encontre respostas para as principais dúvidas sobre nossos serviços de hospedagem premium. Nossa base de
            conhecimento está sempre atualizada para ajudar você.
          </p>

          {/* Barra de Pesquisa */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Pesquisar perguntas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all duration-300 shadow-sm"
            />
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">{faqs.length}+</div>
              <div className="text-xs text-gray-600">Perguntas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">24/7</div>
              <div className="text-xs text-gray-600">Suporte</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">15min</div>
              <div className="text-xs text-gray-600">Resposta</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">99.9%</div>
              <div className="text-xs text-gray-600">Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros por Categoria */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Categorias</h2>
            <p className="text-sm text-gray-600">Filtre as perguntas por categoria para encontrar o que precisa</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory("todos")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedCategory === "todos"
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-pink-300 hover:shadow-md"
              }`}
            >
              Todas as Categorias
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-pink-300 hover:shadow-md"
                }`}
              >
                <span className={selectedCategory === category.id ? "text-white" : category.color}>
                  {category.icon}
                </span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Nenhuma pergunta encontrada</h3>
              <p className="text-gray-600">Tente ajustar sua pesquisa ou selecionar uma categoria diferente.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => {
                const itemId = `faq-${index}`
                const isOpen = openItems.includes(itemId)
                const category = categories.find((cat) => cat.id === faq.category)

                return (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-pink-300"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors duration-300"
                    >
                      <div className="flex items-center space-x-3 flex-1">
                        {category && <span className={category.color}>{category.icon}</span>}
                        <h3 className="font-semibold text-gray-900 text-sm md:text-base">{faq.question}</h3>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-4">
                        <div className="pl-8 border-l-2 border-pink-200">
                          <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Não encontrou sua resposta?</h2>
            <p className="text-gray-600 mb-6 text-sm">
              Nossa equipe de suporte está disponível 24/7 para ajudar você com qualquer dúvida
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold px-6 py-3 text-sm transition-all duration-300 shadow-lg hover:shadow-pink-500/25 hover:scale-105">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Abrir Ticket
                </Button>
              </Link>

              <Link href="tel:+5511999999999">
                <Button className="bg-white border-2 border-pink-300 text-pink-600 hover:bg-pink-50 font-semibold px-6 py-3 text-sm transition-all duration-300 hover:scale-105">
                  <Phone className="w-4 h-4 mr-2" />
                  Ligar Agora
                </Button>
              </Link>
            </div>
          </div>
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
