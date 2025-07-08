import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, Users, Mail, Calendar } from "lucide-react"

export default function PrivacidadePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Shield className="h-8 w-8 text-pink-500" />
          <h1 className="text-3xl font-bold">Política de Privacidade</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Na PuffHost, levamos sua privacidade a sério. Esta política explica como coletamos, usamos e protegemos suas
          informações pessoais.
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <Badge variant="outline" className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            Última atualização: Julho 2025
          </Badge>
          <Badge variant="secondary">LGPD Compliance</Badge>
        </div>
      </div>

      <div className="space-y-6">
        {/* Informações Coletadas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-blue-500" />
              Informações que Coletamos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Dados Pessoais:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Nome completo, e-mail e telefone</li>
                <li>Dados de faturamento e endereço</li>
                <li>Informações de pagamento (processadas por terceiros seguros)</li>
                <li>Histórico de comunicações e suporte</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Dados Técnicos:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Endereço IP e localização aproximada</li>
                <li>Informações do navegador e dispositivo</li>
                <li>Logs de acesso e uso dos serviços</li>
                <li>Dados de performance e monitoramento</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Como Usamos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-green-500" />
              Como Usamos suas Informações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Prestação de Serviços:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Provisionar e manter seus serviços</li>
                  <li>Processar pagamentos e faturas</li>
                  <li>Fornecer suporte técnico</li>
                  <li>Monitorar performance e segurança</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Comunicação:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Enviar atualizações importantes</li>
                  <li>Notificações de manutenção</li>
                  <li>Ofertas relevantes (com seu consentimento)</li>
                  <li>Pesquisas de satisfação</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compartilhamento */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-orange-500" />
              Compartilhamento de Dados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Não vendemos seus dados pessoais. Compartilhamos apenas quando necessário:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Prestadores de Serviço</p>
                  <p className="text-sm text-muted-foreground">
                    Processadores de pagamento, provedores de infraestrutura e ferramentas de suporte
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Obrigações Legais</p>
                  <p className="text-sm text-muted-foreground">
                    Quando exigido por lei ou para proteger nossos direitos e segurança
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Segurança */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-red-500" />
              Segurança dos Dados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Medidas Técnicas:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Criptografia SSL/TLS</li>
                  <li>Firewalls e monitoramento 24/7</li>
                  <li>Backups seguros e redundantes</li>
                  <li>Controle de acesso restrito</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Medidas Organizacionais:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Treinamento da equipe</li>
                  <li>Políticas de segurança rigorosas</li>
                  <li>Auditoria regular de processos</li>
                  <li>Resposta rápida a incidentes</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Seus Direitos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-purple-500" />
              Seus Direitos (LGPD)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 bg-pink-500 rounded"></div>
                  <span className="font-medium text-sm">Acesso aos dados</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 bg-pink-500 rounded"></div>
                  <span className="font-medium text-sm">Correção de dados</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 bg-pink-500 rounded"></div>
                  <span className="font-medium text-sm">Exclusão de dados</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 bg-pink-500 rounded"></div>
                  <span className="font-medium text-sm">Portabilidade</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 bg-pink-500 rounded"></div>
                  <span className="font-medium text-sm">Revogação do consentimento</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 bg-pink-500 rounded"></div>
                  <span className="font-medium text-sm">Informações sobre tratamento</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 bg-pink-500 rounded"></div>
                  <span className="font-medium text-sm">Oposição ao tratamento</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 bg-pink-500 rounded"></div>
                  <span className="font-medium text-sm">Revisão de decisões automatizadas</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Retenção de Dados */}
        <Card>
          <CardHeader>
            <CardTitle>Retenção de Dados</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Mantemos seus dados apenas pelo tempo necessário para:</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Prestação dos serviços contratados</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Cumprimento de obrigações legais (até 5 anos)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Resolução de disputas e exercício de direitos</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contato */}
        <Card className="border-pink-200 bg-pink-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-pink-500" />
              Contato para Questões de Privacidade
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Para exercer seus direitos ou esclarecer dúvidas sobre privacidade:
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-pink-500" />
                <span className="text-sm font-medium">contato@puffhost.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-pink-500" />
                <span className="text-sm">Discord: https://discord.gg/qN8pH33jdh</span>
              </div>
            </div>
            <Separator className="my-4" />
            <p className="text-xs text-muted-foreground">
              Responderemos sua solicitação em até 15 dias úteis, conforme previsto na LGPD.
            </p>
          </CardContent>
        </Card>

        {/* Alterações */}
        <Card>
          <CardHeader>
            <CardTitle>Alterações nesta Política</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Podemos atualizar esta política periodicamente. Alterações significativas serão comunicadas por e-mail ou
              através de nossos canais oficiais. A versão mais atual estará sempre disponível em nosso site.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Footer da página */}
      <div className="text-center mt-12 pt-8 border-t">
        <p className="text-sm text-muted-foreground">
          Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD) - Lei nº 13.709/2018
        </p>
      </div>
    </div>
  )
}
