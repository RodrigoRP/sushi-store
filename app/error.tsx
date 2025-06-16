'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">Erro</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Algo deu errado!
        </h2>
        <p className="text-gray-600 mb-8">
          Ocorreu um erro inesperado. Tente novamente.
        </p>
        <button
          onClick={reset}
          className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors mr-4"
        >
          Tentar novamente
        </button>
        <a
          href="/"
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Voltar ao início
        </a>
      </div>
    </div>
  )
}