"use client"

import { Button } from "@nextui-org/button"
import Link from "next/link"
import { Server, Headphones, Building2, Mail, MapPin } from "lucide-react"

export const Footer = () => {
  const sections = [
    {
      title: "Servidores",
      icon: <Server className="w-5 h-5" />,
      color: "text-purple-400",
      borderColor: "border-purple-400",
      links: [
        { name: "VPS Gamer", url: "/vps-gamer", badge: "Popular" },
        { name: "VPS Streaming", url: "/vps-streaming", badge: "Novo" },
        { name: "VPS RedM", url: "/vps-redm", badge: "Novo" },
        { name: "VPS FiveM", url: "/vps-fivem" },
        { name: "Semi-Dedicado", url: "/semi-dedicado" },
        { name: "Dedicado", url: "/dedicado", badge: "Premium" },
      ],
    },
    {
      title: "Suporte",
      icon: <Headphones className="w-5 h-5" />,
      color: "text-blue-400",
      borderColor: "border-blue-400",
      links: [
        { name: "Central de Ajuda", url: "https://discord.gg/Tgm2gn9zM3" },
        { name: "Discord", url: "https://discord.gg/Tgm2gn9zM3", badge: "24/7" },
        { name: "FAQ", url: "/faq" },
        { name: "Status", url: "/status" },
        //{ name: "Reclame aqui", url: "/reclame-aqui" },
      ],
    },
    {
      title: "Empresa",
      icon: <Building2 className="w-5 h-5" />,
      color: "text-green-400",
      borderColor: "border-green-400",
      links: [
        { name: "Área do Cliente", url: "https://app.puffhost.com.br/clientarea.php" },
        { name: "Painel de Controle", url: "https://app.puffhost.com.br/clientarea.php" },
        { name: "Sobre Nós", url: "/sobre" },
        { name: "Termos de Serviço", url: "https://docs.google.com/document/d/1M0vO1m2AhLXjYe8J44XXJKNKhZ_KsLssNj1IKuuG3LI/edit?usp=sharing" },
      ],
    },
  ]

  return (
    <footer className="bg-background-dark border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo and Description Section */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">puffhost</span>
              </div>
            </div>

            <div className="flex items-start space-x-3 mb-6">
              <div className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2 border-b border-pink-500 pb-1 inline-block">Sobre nós</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  Hospedagem de alta performance com suporte 24/7. Servidores otimizados para jogos, aplicações web e
                  VPS no Brasil.
                </p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>99.9% Uptime</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-blue-400" />
                    <span>Brasil</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="mb-6">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-pink-400" />
                <a href="mailto:contato@puffhost.com.br" className="hover:text-white transition-colors">
                  contato@puffhost.com.br
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <Link href="https://discord.gg/Tgm2gn9zM3" target="_blank">
                <Button
                  isIconOnly
                  className="bg-gray-800 hover:bg-purple-600 text-gray-400 hover:text-white transition-all duration-300 shadow-md"
                  size="sm"
                  aria-label="Discord"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                  </svg>
                </Button>
              </Link>
              <Link href="https://www.instagram.com/puff.host/#" target="_blank">
                <Button
                  isIconOnly
                  className="bg-gray-800 hover:bg-pink-600 text-gray-400 hover:text-white transition-all duration-300 shadow-md"
                  size="sm"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>

          {/* Service Sections - Side by Side */}
          {sections.map((section, index) => (
            <div key={section.title} className="col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className={section.color}>{section.icon}</div>
                <h3 className={`font-semibold text-white border-b ${section.borderColor} pb-1`}>{section.title}</h3>
              </div>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name} className="flex items-center justify-between">
                    <Link
                      href={link.url}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                      target={link.url.startsWith("http") ? "_blank" : undefined}
                    >
                      {link.name}
                    </Link>
                    {link.badge && (
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          link.badge === "Popular"
                            ? "bg-purple-500/20 text-purple-300"
                            : link.badge === "Novo"
                              ? "bg-pink-500/20 text-pink-300"
                              : link.badge === "Premium"
                                ? "bg-yellow-500/20 text-yellow-300"
                                : "bg-blue-500/20 text-blue-300"
                        }`}
                      >
                        {link.badge}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></div>
              <p className="text-sm text-gray-400">© 2025 PuffHost. Todos os direitos reservados.</p>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacidade" className="hover:text-white transition-colors">
                Privacidade
              </Link>
              <Link href="https://docs.google.com/document/d/1M0vO1m2AhLXjYe8J44XXJKNKhZ_KsLssNj1IKuuG3LI/edit?usp=sharing" className="hover:text-white transition-colors">
                Termos
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookies
              </Link>
              <span className="text-gray-500">
                Desenvolvido por{" "}
                <Link
                  href="https://discord.gg/qN8pH33jdh"
                  target="_blank"
                  className="text-pink-400 hover:text-pink-300 font-semibold"
                >
                  Andersondv
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
