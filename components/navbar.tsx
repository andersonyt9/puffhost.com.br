"use client"

import { Button } from "@nextui-org/button"
import { Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle } from "@nextui-org/navbar"
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react"
import {
  Server,
  HardDrive,
  Headphones,
  Building2,
  ChevronDown,
  Users,
  Monitor,
  Gamepad2,
  MapPin,
  Award,
  Info,
  Home,
  ArrowRight,
  Globe,
  Database,
  Activity,
  Cloud,
} from "lucide-react"
import { default as Link, default as NextLink } from "next/link"
import { useState } from "react"

export const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activePopover, setActivePopover] = useState<string | null>(null)
  const [popoverTimeout, setPopoverTimeout] = useState<NodeJS.Timeout | null>(null)

  const handlePopover = (popoverKey: string) => {
    clearTimeout(popoverTimeout!)
    setActivePopover((prev) => (prev === popoverKey ? null : popoverKey))
  }

  const closePopoverWithDelay = () => {
    const timeout = setTimeout(() => {
      setActivePopover(null)
    }, 300)
    setPopoverTimeout(timeout)
  }

  const companyOptions = [
    {
      name: "Sobre Nós",
      description: "Nossa história e compromisso",
      icon: <Info className="w-4 h-4" />,
      link: "/sobre",
    },
    {
      name: "Área do Cliente",
      description: "Acesse sua conta e gerencie serviços",
      icon: <Users className="w-4 h-4" />,
      link: "https://app.puffhost.com.br/login",
      badge: "Login",
    },
    {
      name: "Painel de Controle",
      description: "Gerencie seus servidores e recursos",
      icon: <Monitor className="w-4 h-4" />,
      link: "https://app.puffhost.com.br/clientarea.php",
      badge: "Painel",
    },
    {
      name: "Termos de Serviço",
      description: "Políticas e termos de uso",
      icon: <Award className="w-4 h-4" />,
      link: "https://docs.google.com/document/d/1M0vO1m2AhLXjYe8J44XXJKNKhZ_KsLssNj1IKuuG3LI/edit?usp=sharing",
      badge: "Legal",
    },
  ]

  const supportOptions = [
    {
      name: "Discord",
      description: "Suporte 24/7 via Discord",
      icon: <Headphones className="w-4 h-4" />,
      link: "https://discord.gg/Tgm2gn9zM3",
      badge: "24/7",
    },
    {
      name: "FAQ",
      description: "Perguntas frequentes e soluções",
      icon: <Info className="w-4 h-4" />,
      link: "/faq",
      badge: "Ajuda",
    },
    {
      name: "Status",
      description: "Monitoramento em tempo real",
      icon: <Activity className="w-4 h-4" />,
      link: "/status",
      badge: "Live",
    },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <Navbar
        className="bg-[#0a0a0a] border-b border-gray-800 shadow-2xl"
        maxWidth="7xl"
        position="static"
        onMenuOpenChange={setIsMenuOpen}
      >
        {/* Desktop Content */}
        <NavbarContent className="hidden lg:flex gap-6 items-center" justify="center">
          {/* Logo */}
          <NavbarItem>
            <NextLink className="flex justify-start items-center group" href="/">
              <div className="flex items-center space-x-2.5">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 rounded-lg blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative w-9 h-9 bg-gradient-to-br from-pink-500 via-pink-400 to-pink-500 rounded-lg flex items-center justify-center shadow-lg border border-pink-400/20">
                    <span className="text-white font-bold text-base">P</span>
                  </div>
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                  puffhost
                </span>
              </div>
            </NextLink>
          </NavbarItem>

          {/* Navigation Items */}
          <NavbarItem>
            <NextLink href="/" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
              Início
            </NextLink>
          </NavbarItem>

          {/* Servidores Dropdown - Design Exclusivo PuffHost */}
          <NavbarItem className="relative" onMouseLeave={closePopoverWithDelay}>
            <Popover placement="bottom" offset={12} showArrow={false} isOpen={activePopover === "servers"}>
              <PopoverTrigger>
                <Button
                  className="p-0 bg-transparent hover:bg-transparent text-gray-300 hover:text-white font-medium transition-colors duration-200 group"
                  radius="sm"
                  variant="light"
                  endContent={
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activePopover === "servers" ? "rotate-180" : ""
                      }`}
                    />
                  }
                  onMouseEnter={() => handlePopover("servers")}
                >
                  <div className="flex items-center space-x-2">
                    <Server className="w-4 h-4" />
                    <span>Servidores</span>
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-[420px] p-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d0d0d] to-[#111111] border border-pink-400/20 shadow-2xl rounded-2xl backdrop-blur-xl"
                onMouseEnter={() => clearTimeout(popoverTimeout!)}
                onMouseLeave={closePopoverWithDelay}
              >
                {/* Header Exclusivo */}
                <div className="relative p-5 border-b border-pink-500/10">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400/5 via-pink-400/5 to-pink-400/5 rounded-t-2xl"></div>
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-400 rounded-xl blur-sm opacity-40"></div>
                        <div className="relative p-2.5 bg-gradient-to-br from-pink-400/20 to-pink-400/20 rounded-xl border border-pink-300/30 backdrop-blur-sm">
                          <Cloud className="w-5 h-5 text-pink-400" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold bg-gradient-to-r from-white via-pink-200 to-pink-300 bg-clip-text text-transparent">
                          PuffHost Cloud
                        </h3>
                        <p className="text-xs text-gray-400 font-medium">Infraestrutura de alta performance</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1.5">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                        <span className="text-xs text-green-400 font-semibold">Online</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 space-y-6">
                  {/* SERVIDORES VPS */}
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-1 h-4 bg-gradient-to-b from-pink-400 to-pink-400 rounded-full"></div>
                      <h3 className="text-xs font-bold text-pink-400 uppercase tracking-[0.1em] flex items-center space-x-2">
                        <span>SERVIDORES VPS</span>
                        <div className="w-8 h-px bg-gradient-to-r from-pink-400/50 to-transparent"></div>
                      </h3>
                    </div>

                    <div className="space-y-2">
                      {/* VPS Gamer - Destaque Principal */}
                      <Link href="/vps-gamer">
                        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-pink-800/40 via-pink-700/30 to-pink-800/40 border border-pink-300/40 hover:border-pink-200/60 transition-all duration-300 cursor-pointer">
                          {/* Efeito de brilho animado */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                          {/* Badge Popular */}
                          <div className="absolute top-2 right-2">
                            <div className="px-2 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-400/40 backdrop-blur-sm">
                              <span className="text-[10px] text-green-300 font-bold uppercase tracking-wide">
                                🚀 Popular
                              </span>
                            </div>
                          </div>

                          <div className="relative p-4">
                            <div className="flex items-center space-x-3">
                              <div className="p-2 bg-gradient-to-br from-pink-400/30 to-pink-400/30 rounded-lg border border-pink-300/50 backdrop-blur-sm">
                                <Gamepad2 className="w-5 h-5 text-pink-300" />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-base font-bold text-white group-hover:text-pink-200 transition-colors">
                                  VPS Gamer
                                </h4>
                                <p className="text-sm text-pink-300/80 font-medium leading-tight">
                                  Alta performance em SP por R$70,90/mês
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>

                      {/* Outros VPS */}
                      <div className="grid gap-2">
                        <Link href="/semi-dedicado">
                          <div className="group p-3 rounded-lg bg-gray-900/40 hover:bg-gray-800/60 border border-gray-700/50 hover:border-pink-400/30 transition-all duration-200 cursor-pointer">
                            <div className="flex items-center space-x-3">
                              <div className="p-1.5 bg-pink-400/10 rounded-md border border-pink-400/20">
                                <Database className="w-4 h-4 text-pink-300" />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-sm font-semibold text-white group-hover:text-pink-300 transition-colors">
                                  Semi Dedicado
                                </h4>
                                <p className="text-xs text-gray-400 leading-tight">
                                  Desempenho de ponta com ótimo custo-benefício.
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>

                        <Link href="/vps-streaming">
                          <div className="group p-3 rounded-lg bg-gray-900/40 hover:bg-gray-800/60 border border-gray-700/50 hover:border-pink-400/30 transition-all duration-200 cursor-pointer">
                            <div className="flex items-center space-x-3">
                              <div className="p-1.5 bg-pink-400/10 rounded-md border border-pink-400/20">
                                <Monitor className="w-4 h-4 text-pink-300" />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-sm font-semibold text-white group-hover:text-pink-300 transition-colors">
                                  VPS Streaming
                                </h4>
                                <p className="text-xs text-gray-400 leading-tight">
                                  Velocidade e estabilidade para transmissões ao vivo.
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>

                        <Link href="/vps-fivem">
                          <div className="group p-3 rounded-lg bg-gray-900/40 hover:bg-gray-800/60 border border-gray-700/50 hover:border-pink-400/30 transition-all duration-200 cursor-pointer">
                            <div className="flex items-center space-x-3">
                              <div className="p-1.5 bg-pink-400/10 rounded-md border border-pink-400/20">
                                <Globe className="w-4 h-4 text-pink-300" />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-sm font-semibold text-white group-hover:text-pink-300 transition-colors">
                                  VPS FiveM
                                </h4>
                                <p className="text-xs text-gray-400 leading-tight">
                                  Hospedagem otimizada para servidores FiveM.
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link href="/vps-redm">
                          <div className="group p-3 rounded-lg bg-gray-900/40 hover:bg-gray-800/60 border border-gray-700/50 hover:border-pink-400/30 transition-all duration-200 cursor-pointer">
                            <div className="flex items-center space-x-3">
                              <div className="p-1.5 bg-pink-400/10 rounded-md border border-pink-400/20">
                                <Users className="w-4 h-4 text-pink-300" />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-sm font-semibold text-white group-hover:text-pink-300 transition-colors">
                                  VPS RedM
                                </h4>
                                <p className="text-xs text-gray-400 leading-tight">
                                  Servidores otimizados para Red Dead Redemption 2.
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Divisor */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gradient-to-r from-transparent via-gray-700/50 to-transparent"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* BAREMETAL */}
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-1 h-4 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
                      <h3 className="text-xs font-bold text-orange-300 uppercase tracking-[0.1em] flex items-center space-x-2">
                        <span>BAREMETAL</span>
                        <div className="w-8 h-px bg-gradient-to-r from-orange-500/50 to-transparent"></div>
                      </h3>
                    </div>

                    <div className="space-y-2">
                      <Link href="/dedicado">
                        <div className="group p-3 rounded-lg bg-gray-900/40 hover:bg-gray-800/60 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-200 cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <div className="p-1.5 bg-orange-500/10 rounded-md border border-orange-500/20">
                              <HardDrive className="w-4 h-4 text-orange-400" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-sm font-semibold text-white group-hover:text-orange-200 transition-colors">
                                Servidor Dedicado
                              </h4>
                              <p className="text-xs text-gray-400 leading-tight">Hardware físico 100% exclusivo.</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </NavbarItem>

          {/* Empresa Dropdown */}
          <NavbarItem className="relative" onMouseLeave={closePopoverWithDelay}>
            <Popover placement="bottom" offset={12} showArrow={false} isOpen={activePopover === "company"}>
              <PopoverTrigger>
                <Button
                  className="p-0 bg-transparent hover:bg-transparent text-gray-300 hover:text-white font-medium transition-colors duration-200 group"
                  radius="sm"
                  variant="light"
                  endContent={
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activePopover === "company" ? "rotate-180" : ""
                      }`}
                    />
                  }
                  onMouseEnter={() => handlePopover("company")}
                >
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-4 h-4" />
                    <span>Empresa</span>
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-[420px] p-0 bg-[#0a0a0a] border border-gray-700/60 shadow-2xl rounded-xl"
                onMouseEnter={() => clearTimeout(popoverTimeout!)}
                onMouseLeave={closePopoverWithDelay}
              >
                <div className="p-4">
                  {/* Header */}
                  <div className="flex items-center space-x-3 mb-4 p-3 bg-gradient-to-r from-pink-900/30 to-pink-800/20 rounded-lg border border-pink-400/20">
                    <div className="p-2 bg-pink-400/15 rounded-lg border border-pink-300/30">
                      <Building2 className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">PuffHost</h3>
                      <p className="text-xs text-gray-400">Excelência em hospedagem</p>
                    </div>
                  </div>

                  {/* Company Options */}
                  <div className="space-y-2">
                    {companyOptions.map((option, index) => (
                      <Link
                        href={option.link}
                        key={index}
                        target={option.link.startsWith("http") ? "_blank" : undefined}
                      >
                        <div className="group p-3 rounded-lg hover:bg-gray-800/60 transition-colors border border-transparent hover:border-gray-700/50">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-pink-400/10 rounded-lg text-pink-300 group-hover:scale-105 transition-transform border border-pink-400/20">
                              {option.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <h4 className="font-medium text-white group-hover:text-pink-300 transition-colors">
                                  {option.name}
                                </h4>
                                {option.badge && (
                                  <span className="px-2 py-0.5 text-xs rounded-full bg-pink-400/20 text-pink-300 border border-pink-400/30">
                                    {option.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-gray-500">{option.description}</p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-pink-300 transition-colors" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </NavbarItem>

          {/* Suporte Dropdown */}
          <NavbarItem className="relative" onMouseLeave={closePopoverWithDelay}>
            <Popover placement="bottom" offset={12} showArrow={false} isOpen={activePopover === "support"}>
              <PopoverTrigger>
                <Button
                  className="p-0 bg-transparent hover:bg-transparent text-gray-300 hover:text-white font-medium transition-colors duration-200 group"
                  radius="sm"
                  variant="light"
                  endContent={
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activePopover === "support" ? "rotate-180" : ""
                      }`}
                    />
                  }
                  onMouseEnter={() => handlePopover("support")}
                >
                  <div className="flex items-center space-x-2">
                    <Headphones className="w-4 h-4" />
                    <span>Suporte</span>
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-[350px] p-0 bg-[#0a0a0a] border border-gray-700/60 shadow-2xl rounded-xl"
                onMouseEnter={() => clearTimeout(popoverTimeout!)}
                onMouseLeave={closePopoverWithDelay}
              >
                <div className="p-4">
                  {/* Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-pink-400/10 rounded-lg border border-pink-400/20">
                      <Headphones className="w-5 h-5 text-pink-300" />
                    </div>
                    <h3 className="text-base font-semibold text-white">Central de Suporte</h3>
                  </div>

                  {/* Support Options */}
                  <div className="space-y-2">
                    {supportOptions.map((option, index) => (
                      <Link
                        href={option.link}
                        key={index}
                        target={option.link.startsWith("http") ? "_blank" : undefined}
                      >
                        <div className="group p-3 rounded-lg hover:bg-gray-800/60 transition-colors border border-transparent hover:border-gray-700/50">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-pink-400/10 rounded-lg text-pink-300 group-hover:scale-105 transition-transform border border-pink-400/20">
                              {option.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <h4 className="font-medium text-white group-hover:text-pink-300 transition-colors">
                                  {option.name}
                                </h4>
                                {option.badge && (
                                  <span className="px-2 py-0.5 text-xs rounded-full bg-pink-400/20 text-pink-300 border border-pink-400/30">
                                    {option.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-gray-500">{option.description}</p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-pink-300 transition-colors" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile Menu Toggle */}
        <NavbarContent className="lg:hidden" justify="start">
          <NavbarItem>
            <NextLink className="flex justify-start items-center group" href="/">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 rounded-lg blur-sm opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-400 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">P</span>
                  </div>
                </div>
                <span className="text-lg font-bold text-white">puffhost</span>
              </div>
            </NextLink>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="lg:hidden text-white" />
        </NavbarContent>

        {/* Right Side - Desktop */}
        <NavbarContent className="hidden lg:flex gap-3" justify="end">
          <NavbarItem>
            <Link href="https://discord.gg/Tgm2gn9zM3" target="_blank">
              <Button
                isIconOnly
                className="bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 hover:text-white border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300"
                size="md"
                aria-label="Discord"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                </svg>
              </Button>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <NextLink href="https://app.puffhost.com.br/login" target="_blank">
              <Button
                size="md"
                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold transition-all duration-300 px-5 shadow-lg border border-pink-400/30"
              >
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Acessar Conta</span>
                </div>
              </Button>
            </NextLink>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu className="pt-6 bg-[#0a0a0a] border-t border-gray-800">
          <div className="flex flex-col gap-4">
            <NavbarItem>
              <NextLink href="/" className="w-full text-white font-medium py-2 flex items-center space-x-2">
                <Home className="w-4 h-4 text-pink-300" />
                <span>Início</span>
              </NextLink>
            </NavbarItem>

            {/* Mobile Servers */}
            <div className="space-y-2">
              <h3 className="text-pink-300 font-semibold text-sm uppercase tracking-wide flex items-center space-x-2">
                <Server className="w-4 h-4" />
                <span>Servidores</span>
              </h3>

              {/* VPS Section */}
              <div className="ml-4 space-y-1">
                <p className="text-xs text-gray-500 uppercase tracking-wider flex items-center space-x-1">
                  <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
                  <span>VPS</span>
                </p>
                <NavbarItem>
                  <Link href="/semi-dedicado" className="w-full">
                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-pink-400/10 transition-colors border border-gray-800 hover:border-pink-400/50">
                      <div className="text-pink-300 p-1 bg-pink-400/15 rounded">
                        <Database className="w-3 h-3" />
                      </div>
                      <div className="flex-1">
                        <span className="text-white text-sm font-medium">Semi Dedicado</span>
                        <p className="text-xs text-gray-400">R$ 89,90/mês</p>
                      </div>
                    </div>
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link href="/vps-streaming" className="w-full">
                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-pink-400/10 transition-colors border border-gray-800 hover:border-pink-400/50">
                      <div className="text-pink-300 p-1 bg-pink-400/15 rounded">
                        <Globe className="w-3 h-3" />
                      </div>
                      <div className="flex-1">
                        <span className="text-white text-sm font-medium">VPS Streaming</span>
                        <p className="text-xs text-gray-400">R$ 129,90/mês</p>
                      </div>
                    </div>
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link href="/vps-gamer" className="w-full">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-pink-800/40 to-pink-700/30 border border-pink-300/40">
                      <div className="flex items-center space-x-3">
                        <div className="text-pink-300 p-1 bg-pink-400/20 rounded">
                          <Gamepad2 className="w-3 h-3" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-white text-sm font-semibold">VPS Gamer</span>
                            <span className="text-[10px] text-green-400 font-bold">POPULAR</span>
                          </div>
                          <p className="text-xs text-pink-300">R$ 72,90/mês</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link href="/vps-fivem" className="w-full">
                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-pink-400/10 transition-colors border border-gray-800 hover:border-pink-400/50">
                      <div className="text-pink-300 p-1 bg-pink-400/10 border border-pink-400/20 rounded">
                        <Monitor className="w-3 h-3" />
                      </div>
                      <div className="flex-1">
                        <span className="text-white text-sm font-medium">VPS FiveM</span>
                        <p className="text-xs text-gray-400">R$ 99,90/mês</p>
                      </div>
                    </div>
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link href="/vps-redm" className="w-full">
                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-pink-400/10 transition-colors border border-gray-800 hover:border-pink-400/50">
                      <div className="text-pink-300 p-1 bg-pink-400/10 border border-pink-400/20 rounded">
                        <Users className="w-3 h-3" />
                      </div>
                      <div className="flex-1">
                        <span className="text-white text-sm font-medium">VPS RedM</span>
                        <p className="text-xs text-gray-400">R$ 119,90/mês</p>
                      </div>
                    </div>
                  </Link>
                </NavbarItem>
              </div>

              {/* Baremetal Section */}
              <div className="ml-4 space-y-1 mt-3">
                <p className="text-xs text-gray-500 uppercase tracking-wider flex items-center space-x-1">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span>Baremetal</span>
                </p>
                <NavbarItem>
                  <Link href="/dedicado" className="w-full">
                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-orange-500/10 transition-colors border border-gray-800 hover:border-orange-500/50">
                      <div className="text-orange-400 p-1 bg-orange-500/15 rounded">
                        <HardDrive className="w-3 h-3" />
                      </div>
                      <div className="flex-1">
                        <span className="text-white text-sm font-medium">Servidor Dedicado</span>
                        <p className="text-xs text-gray-400">R$ 1.299/mês</p>
                      </div>
                    </div>
                  </Link>
                </NavbarItem>
              </div>
            </div>

            {/* Mobile Company */}
            <div className="space-y-2">
              <h3 className="text-pink-300 font-semibold text-sm uppercase tracking-wide flex items-center space-x-2">
                <Building2 className="w-4 h-4" />
                <span>Empresa</span>
              </h3>
              {companyOptions.map((option, index) => (
                <NavbarItem key={index}>
                  <Link
                    href={option.link}
                    className="w-full"
                    target={option.link.startsWith("http") ? "_blank" : undefined}
                  >
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/60 transition-colors border border-gray-800 hover:border-gray-700/50">
                      <div className="text-pink-300 p-1 bg-pink-400/10 rounded border border-pink-400/20">
                        {option.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-white font-medium">{option.name}</span>
                          {option.badge && (
                            <span className="px-2 py-0.5 text-xs rounded-full bg-pink-400/20 text-pink-300 border border-pink-400/30">
                              {option.badge}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </NavbarItem>
              ))}
            </div>

            {/* Mobile Support */}
            <div className="space-y-2">
              <h3 className="text-pink-300 font-semibold text-sm uppercase tracking-wide flex items-center space-x-2">
                <Headphones className="w-4 h-4" />
                <span>Suporte</span>
              </h3>
              {supportOptions.map((option, index) => (
                <NavbarItem key={index}>
                  <Link
                    href={option.link}
                    target={option.link.startsWith("http") ? "_blank" : undefined}
                    className="w-full"
                  >
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/60 transition-colors border border-gray-800 hover:border-gray-700/50">
                      <div className="text-pink-300 p-1 bg-pink-400/10 rounded border border-pink-400/20">
                        {option.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-white font-medium">{option.name}</span>
                          {option.badge && (
                            <span className="px-2 py-0.5 text-xs rounded-full bg-pink-400/20 text-pink-300 border border-pink-400/30">
                              {option.badge}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </NavbarItem>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="pt-4 space-y-3 border-t border-gray-800">
              <NavbarItem>
                <NextLink href="https://app.puffhost.com.br/login" target="_blank" className="w-full">
                  <Button
                    className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold shadow-lg border border-pink-400/30"
                    size="lg"
                  >
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>Acessar Conta</span>
                    </div>
                  </Button>
                </NextLink>
              </NavbarItem>
            </div>
          </div>
        </NavbarMenu>
      </Navbar>
    </div>
  )
}
