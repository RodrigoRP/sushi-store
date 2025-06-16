'use client'

import { useState } from 'react'
import { X, MapPin, Phone, Mail, User } from 'lucide-react'
import { useCart } from '@/contexts/cart-context'
import { formatPrice } from '@/lib/utils'

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { state, clearCart } = useCart()
  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    customerCity: '',
    notes: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderCompleted, setOrderCompleted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simular envio do pedido
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setOrderCompleted(true)
      clearCart()
      
      // Fechar modal após 3 segundos
      setTimeout(() => {
        setOrderCompleted(false)
        onClose()
      }, 3000)
    } catch (error) {
      console.error('Erro ao processar pedido:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {orderCompleted ? (
            // Success State
            <div className="p-8 text-center">
              <div className="text-6xl mb-4">🍣</div>
              <h2 className="text-2xl font-bold text-green-600 mb-2">
                Pedido Realizado com Sucesso!
              </h2>
              <p className="text-gray-600 mb-4">
                Obrigado pela preferência! Entraremos em contato em breve para confirmar os detalhes.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-green-800">
                  <strong>Total:</strong> {formatPrice(state.total)}
                </p>
                <p className="text-sm text-green-800 mt-1">
                  Número do pedido será enviado via WhatsApp
                </p>
              </div>
            </div>
          ) : (
            // Checkout Form
            <>
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-2xl font-bold">Finalizar Pedido</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6">
                {/* Order Summary */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Resumo do Pedido</h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    {state.items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span>{item.quantity}x {item.name}</span>
                        <span>{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    ))}
                    <div className="border-t pt-2 flex justify-between font-semibold">
                      <span>Total:</span>
                      <span className="text-primary-600">{formatPrice(state.total)}</span>
                    </div>
                  </div>
                </div>

                {/* Customer Info */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Seus Dados</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <User className="inline h-4 w-4 mr-1" />
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <Phone className="inline h-4 w-4 mr-1" />
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="customerPhone"
                      value={formData.customerPhone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <Mail className="inline h-4 w-4 mr-1" />
                      E-mail (opcional)
                    </label>
                    <input
                      type="email"
                      name="customerEmail"
                      value={formData.customerEmail}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <MapPin className="inline h-4 w-4 mr-1" />
                      Cidade *
                    </label>
                    <input
                      type="text"
                      name="customerCity"
                      value={formData.customerCity}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Sua cidade"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Observações (opcional)
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Alguma observação especial sobre seu pedido..."
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="mt-6 pt-6 border-t">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Processando...' : `Confirmar Pedido - ${formatPrice(state.total)}`}
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Ao confirmar, você será contatado no WhatsApp (55) 99600-5343 para finalizar os detalhes
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  )
}