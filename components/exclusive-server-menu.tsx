"use client"

import { Server, Monitor, Gamepad2, HardDrive, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

export const ExclusiveServerMenu = () => {
  return (
    <div className="w-[360px] bg-[#1a1a1a] border border-gray-800/60 rounded-lg shadow-2xl overflow-hidden">
      {/* VPS Servers Section */}
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
          <h3 className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">SERVIDORES VPS</h3>
        </div>

        <div className="space-y-0.5">
          <Link href="/semi-dedicado">
            <div className="flex items-center space-x-3 p-2.5 rounded-md hover:bg-gray-800/40 transition-colors cursor-pointer group">
              <div className="p-1.5 rounded-md bg-purple-500/15">
                <Server className="w-3.5 h-3.5 text-purple-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-white group-hover:text-gray-200">Semi Dedicado</h4>
                <p className="text-xs text-gray-500 mt-0.5">Servidores custo-benefício único.</p>
              </div>
            </div>
          </Link>

          <Link href="/vps-streaming">
            <div className="flex items-center space-x-3 p-2.5 rounded-md hover:bg-gray-800/40 transition-colors cursor-pointer group">
              <div className="p-1.5 rounded-md bg-purple-500/15">
                <Monitor className="w-3.5 h-3.5 text-purple-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-white group-hover:text-gray-200">VPS Streaming</h4>
                <p className="text-xs text-gray-500 mt-0.5">Servidor veloz para Streaming.</p>
              </div>
            </div>
          </Link>

          <Link href="/vps-fivem">
            <div className="flex items-center space-x-3 p-2.5 rounded-md hover:bg-gray-800/40 transition-colors cursor-pointer group">
              <div className="p-1.5 rounded-md bg-purple-500/15">
                <Gamepad2 className="w-3.5 h-3.5 text-purple-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-white group-hover:text-gray-200">VPS FiveM</h4>
                <p className="text-xs text-gray-500 mt-0.5">Hospedagem de FiveM.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Popular VPS Gamer Card */}
      <div className="px-4 pb-4">
        <Link href="/vps-gamer">
          <div className="relative p-4 rounded-lg bg-gradient-to-br from-purple-900/50 to-purple-800/30 border border-purple-700/40 hover:border-purple-600/60 transition-all duration-200 cursor-pointer group">
            {/* Popular Badge */}
            <div className="flex items-center space-x-1.5 mb-2.5">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span className="text-[10px] font-semibold text-green-400 uppercase tracking-wide">POPULAR</span>
            </div>

            <div>
              <h4 className="text-base font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                VPS Gamer
              </h4>
              <p className="text-xs text-gray-300 mb-3 leading-relaxed">
                Servidores localizados em São Paulo com máxima performance
              </p>

              <div className="flex items-baseline space-x-1">
                <span className="text-lg font-bold text-white">R$ 72,90</span>
                <span className="text-[10px] text-gray-400">por mês</span>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Baremetal Section */}
      <div className="px-4 pb-4">
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
          <h3 className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">BAREMETAL</h3>
        </div>

        <div className="space-y-0.5">
          <Link href="/dedicado">
            <div className="flex items-center space-x-3 p-2.5 rounded-md hover:bg-gray-800/40 transition-colors cursor-pointer group">
              <div className="p-1.5 rounded-md bg-orange-500/15">
                <HardDrive className="w-3.5 h-3.5 text-orange-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-white group-hover:text-gray-200">Servidor Dedicado</h4>
                <p className="text-xs text-gray-500 mt-0.5">Hardware exclusivo para você.</p>
              </div>
            </div>
          </Link>

          <Link href="/enterprise">
            <div className="flex items-center space-x-3 p-2.5 rounded-md hover:bg-gray-800/40 transition-colors cursor-pointer group">
              <div className="p-1.5 rounded-md bg-orange-500/15">
                <Zap className="w-3.5 h-3.5 text-orange-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-white group-hover:text-gray-200">Enterprise</h4>
                <p className="text-xs text-gray-500 mt-0.5">Soluções corporativas avançadas.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-2.5 border-t border-gray-800/50 bg-[#151515]">
        <div className="flex justify-between items-center">
          <Link
            href="/status"
            className="text-[11px] text-gray-500 hover:text-gray-300 transition-colors flex items-center space-x-1"
          >
            <span>Status</span>
            <ArrowRight className="w-2.5 h-2.5" />
          </Link>
          <Link
            href="/redes"
            className="text-[11px] text-gray-500 hover:text-gray-300 transition-colors flex items-center space-x-1"
          >
            <span>Redes</span>
            <ArrowRight className="w-2.5 h-2.5" />
          </Link>
          <Link
            href="/changelog"
            className="text-[11px] text-gray-500 hover:text-gray-300 transition-colors flex items-center space-x-1"
          >
            <span>Changelog</span>
            <ArrowRight className="w-2.5 h-2.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
