import Link from "next/link"
import { AlertCircle, Home } from "lucide-react"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <AlertCircle className="h-24 w-24 text-pink-500 mx-auto mb-4" />
          <h1 className="text-6xl font-bold text-white mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-gray-300 mb-4">Página não encontrada</h2>
          <p className="text-gray-400 mb-8">A página que você está procurando não existe ou foi movida.</p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
        >
          <Home className="h-5 w-5" />
          Voltar para o início
        </Link>
      </div>
    </div>
  )
}
