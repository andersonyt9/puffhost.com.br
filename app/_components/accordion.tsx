"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { ChevronDown, Sparkles, HelpCircle } from "lucide-react"

export function AccordionItems() {
  const pathname = usePathname()
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqVpsGamer = [
    {
      title: "Qual é a latência média dos servidores?",
      content:
        "Nossos servidores VPS Gamer possuem latência média inferior a 30ms para as principais regiões do Brasil. Utilizamos infraestrutura de alta performance e rotas otimizadas para garantir a melhor experiência em jogos.",
    },
    {
      title: "Como funciona a proteção anti-DDoS?",
      content:
        "Oferecemos proteção anti-DDoS premium em todos os planos, com capacidade de mitigação de até 200 Tbps. Nossa proteção é automática e sempre ativa, garantindo que seu servidor permaneça online mesmo durante ataques.",
    },
    {
      title: "Posso hospedar qualquer tipo de jogo?",
      content:
        "Sim! Nossos servidores são compatíveis com a maioria dos jogos populares como Minecraft, CS:GO, ARK, Rust, entre outros. Cada plano é otimizado para diferentes capacidades de jogadores e recursos necessários.",
    },
    {
      title: "Quanto tempo leva para ativar meu servidor?",
      content:
        "A ativação é instantânea após a confirmação do pagamento. Em poucos minutos você terá acesso ao painel de controle e poderá começar a configurar seu servidor de jogos.",
    },
    {
      title: "Vocês ajudam na configuração inicial?",
      content:
        "Sim! Oferecemos suporte especializado para ajudar na configuração inicial do seu servidor. Nossa equipe pode auxiliar com a instalação de mods, plugins e otimizações específicas para cada jogo.",
    },
    {
      title: "É possível fazer upgrade de plano?",
      content:
        "Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento através do painel de controle. O processo é simples e mantém todos os seus dados e configurações.",
    },
  ]

  const faqDedicado = [
    {
      title: "O que é um servidor dedicado?",
      content:
        "Um servidor dedicado é um servidor físico exclusivo para você, oferecendo recursos dedicados como processador, memória RAM e armazenamento. Isso significa que você tem controle total sobre o hardware e não compartilha recursos com outros usuários.",
    },
    {
      title: "Qual a diferença entre servidor dedicado e VPS?",
      content:
        "A principal diferença é que em um servidor dedicado você tem acesso exclusivo a todo o hardware físico, enquanto em uma VPS você compartilha o hardware físico com outros usuários, embora com recursos garantidos. Servidores dedicados oferecem mais poder de processamento e são ideais para aplicações que exigem alto desempenho.",
    },
    {
      title: "Vocês oferecem suporte técnico?",
      content:
        "Sim, oferecemos suporte técnico 24/7 através de chat, e-mail e telefone. Nossa equipe está sempre pronta para ajudar com qualquer problema ou dúvida que você possa ter.",
    },
    {
      title: "Como funciona o backup?",
      content:
        "Realizamos backups automáticos diários de todos os servidores e mantemos as últimas 7 versões. Você também pode criar backups manuais a qualquer momento através do painel de controle.",
    },
    {
      title: "Qual o prazo de ativação?",
      content:
        "A ativação do seu servidor dedicado é feita em até 24 horas após a confirmação do pagamento. Em alguns casos, pode ser necessário um prazo maior dependendo da disponibilidade do hardware solicitado.",
    },
    {
      title: "Posso escolher o sistema operacional?",
      content:
        "Sim, você pode escolher entre várias distribuições Linux (Ubuntu, CentOS, Debian) ou Windows Server. Se precisar de uma distribuição específica, podemos avaliar a possibilidade de instalação.",
    },
  ]

  const faqDefault = [
    {
      title: "Como funciona o suporte técnico da PuffHost?",
      content:
        "Nosso suporte premium está disponível 24/7 através de chat ao vivo, e-mail e Discord. Nossa equipe técnica especializada responde em média em 5 minutos e resolve 95% dos problemas na primeira interação. Oferecemos suporte em português com técnicos certificados.",
    },
    {
      title: "Qual o prazo de ativação dos serviços?",
      content:
        "VPS e hospedagem são ativados instantaneamente após confirmação do pagamento via PIX ou cartão. Servidores semi-dedicados levam até 2 horas, enquanto servidores dedicados podem levar até 24 horas para configuração completa e testes de qualidade.",
    },
    {
      title: "Como funcionam os backups automáticos?",
      content:
        "Realizamos backups automáticos diários de todos os serviços, mantendo as últimas 7 versões com rotação inteligente. Os backups são armazenados em datacenter separado para máxima segurança. Você também pode criar backups manuais ilimitados através do painel de controle avançado.",
    },
    {
      title: "Quais formas de pagamento vocês aceitam?",
      content:
        "Aceitamos PIX (desconto de 5%), cartão de crédito (até 12x), boleto bancário, PayPal e criptomoedas. Para empresas, oferecemos faturamento mensal via boleto. Todos os pagamentos são processados com segurança SSL e criptografia bancária.",
    },
    {
      title: "Vocês oferecem migração gratuita completa?",
      content:
        "Sim! Nossa equipe técnica especializada realiza migração gratuita e completa dos seus dados, incluindo sites, bancos de dados, e-mails e configurações. O processo é feito sem downtime e com garantia de integridade dos dados. Também oferecemos suporte pós-migração por 30 dias.",
    },
    {
      title: "Qual a velocidade e qualidade da conexão?",
      content:
        "Todos os serviços contam com link dedicado de 1Gbps com uplink redundante. Utilizamos as melhores rotas de rede nacional e internacional, garantindo latência inferior a 10ms para São Paulo e Rio de Janeiro. Nossa infraestrutura possui 99.9% de uptime garantido em contrato.",
    },
  ]

  const getFaqItems = () => {
    if (pathname === "/vps-gamer") {
      return faqVpsGamer
    } else if (pathname === "/dedicado") {
      return faqDedicado
    } else {
      return faqDefault
    }
  }

  const items = getFaqItems()

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative group border rounded-xl overflow-hidden bg-gradient-to-br from-white/15 to-white/5 shadow-md hover:shadow-lg hover:shadow-pink-500/20 hover:border-pink-500/60 transition-all duration-300 backdrop-blur-sm"
        >
          {/* Decorative gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

          <button
            onClick={() => toggleItem(index)}
            className="relative w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-pink-500/5 hover:to-purple-500/5 transition-all duration-300 group-hover:px-7"
          >
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <HelpCircle className="w-5 h-5 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
              </div>
                  <span className="font-semibold text-black text-base group-hover:text-gray-700 transition-colors duration-300 pr-4">
                {item.title}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              {openItems.includes(index) && <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />}
              <ChevronDown
                className={`w-5 h-5 text-gray-300 group-hover:text-pink-400 transition-all duration-300 ${
                  openItems.includes(index) ? "rotate-180 text-pink-400" : ""
                }`}
              />
            </div>
          </button>

          {openItems.includes(index) && (
            <div className="relative px-6 pb-6 bg-gradient-to-r from-pink-500/5 to-purple-500/5 border-t border-gray-600/30">
              <div className="flex items-start space-x-3 pt-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse" />
                </div>
                <div className="text-black hover:text-gray-700 text-sm leading-relaxed font-medium transition-colors duration-300">{item.content}</div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
