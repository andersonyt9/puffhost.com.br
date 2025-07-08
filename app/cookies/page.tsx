import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Cookie, Settings, Shield, Eye, Users, Mail } from "lucide-react"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Cookie className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Política de Cookies</h1>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Transparência total sobre como utilizamos cookies para melhorar sua experiência em nossos serviços de
            hospedagem.
          </p>
          <Badge variant="outline" className="mt-4">
            Atualizado em Julho de 2025
          </Badge>
        </div>

        <div className="grid gap-8">
          {/* O que são Cookies */}
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-blue-600" />O que são Cookies?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você visita nosso site.
                Eles nos ajudam a melhorar sua experiência, lembrar suas preferências e fornecer funcionalidades
                essenciais.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Importante:</strong> Utilizamos cookies em conformidade com a LGPD (Lei Geral de Proteção de
                  Dados) e solicitamos seu consentimento quando necessário.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Tipos de Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-green-600" />
                Tipos de Cookies Utilizados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-l-green-500 pl-4">
                    <h4 className="font-semibold text-green-700 dark:text-green-400">Cookies Essenciais</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Necessários para o funcionamento básico do site, como autenticação e segurança.
                    </p>
                  </div>
                  <div className="border-l-4 border-l-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400">Cookies de Performance</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Coletam informações sobre como você usa nosso site para melhorar a performance.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-l-purple-500 pl-4">
                    <h4 className="font-semibold text-purple-700 dark:text-purple-400">Cookies de Funcionalidade</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Lembram suas preferências e configurações para personalizar sua experiência.
                    </p>
                  </div>
                  <div className="border-l-4 border-l-orange-500 pl-4">
                    <h4 className="font-semibold text-orange-700 dark:text-orange-400">Cookies de Marketing</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Utilizados para exibir anúncios relevantes e medir a eficácia de campanhas.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Finalidades */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-purple-600" />
                Finalidades dos Cookies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Segurança</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Proteger contra ataques e manter sessões seguras
                  </p>
                </div>
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <Settings className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Personalização</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Lembrar preferências e configurações do usuário
                  </p>
                </div>
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <Eye className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Analytics</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Analisar uso do site para melhorias contínuas
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Como Gerenciar */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-orange-600" />
                Como Gerenciar Cookies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                Você tem controle total sobre os cookies em nosso site:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-medium">Configurações do Site</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Use nosso banner de cookies para aceitar ou recusar categorias específicas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-medium">Configurações do Navegador</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Configure seu navegador para bloquear ou alertar sobre cookies
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-medium">Exclusão Manual</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Exclua cookies existentes através das configurações do navegador
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-medium">Modo Privado</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Use navegação privada para sessões sem armazenamento de cookies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cookies de Terceiros */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-indigo-600" />
                Cookies de Terceiros
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                Alguns cookies são definidos por serviços de terceiros que utilizamos:
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div>
                    <h5 className="font-medium">Google Analytics</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Análise de tráfego e comportamento</p>
                  </div>
                  <Badge variant="secondary">Analytics</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div>
                    <h5 className="font-medium">Cloudflare</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Segurança e performance</p>
                  </div>
                  <Badge variant="secondary">Essencial</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div>
                    <h5 className="font-medium">Sistemas de Pagamento</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Processamento seguro de transações</p>
                  </div>
                  <Badge variant="secondary">Funcional</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Atualizações */}
          <Card>
            <CardHeader>
              <CardTitle>Atualizações desta Política</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                Esta política de cookies pode ser atualizada periodicamente para refletir mudanças em nossos serviços ou
                na legislação aplicável. Recomendamos que você revise esta página regularmente.
              </p>
              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  <strong>Última atualização:</strong> Julho de 2025. Notificaremos sobre mudanças significativas
                  através de nosso site ou por e-mail.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contato */}
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-green-600" />
                Dúvidas sobre Cookies?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Entre em Contato</h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Se você tiver dúvidas sobre nossa política de cookies ou como gerenciá-los:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>E-mail:</strong> contato@puffhost.com.br
                    </p>
                    <p>
                      <strong>Suporte:</strong> https://discord.gg/qN8pH33jdh
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Seus Direitos</h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">Conforme a LGPD, você tem direito a:</p>
                  <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                    <li>• Saber quais cookies utilizamos</li>
                    <li>• Revogar consentimento a qualquer momento</li>
                    <li>• Solicitar exclusão de dados</li>
                    <li>• Obter informações sobre tratamento</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-slate-500 dark:text-slate-400">
          <p>
            Esta política de cookies faz parte dos nossos{" "}
            <a href="https://docs.google.com/document/d/1M0vO1m2AhLXjYe8J44XXJKNKhZ_KsLssNj1IKuuG3LI/edit?tab=t.0" className="text-blue-600 hover:underline">
              Termos de Uso
            </a>{" "}
            e{" "}
            <a href="/privacidade" className="text-blue-600 hover:underline">
              Política de Privacidade
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
