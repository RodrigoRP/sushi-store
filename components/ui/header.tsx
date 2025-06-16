'use client'

import { ShoppingCart, Menu } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/contexts/cart-context'

interface HeaderProps {
  onCartClick?: () => void
}

export default function Header({ onCartClick }: HeaderProps) {
  const { state } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary-600">
              🍣 M.V Sushi Delivery
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-4">
              <a href="#menu" className="text-gray-700 hover:text-primary-600 transition-colors">
                Cardápio
              </a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">
                Sobre
              </a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">
                Contato
              </a>
            </nav>
            
            <div className="relative">
              <button 
                onClick={onCartClick}
                className="p-2 text-gray-700 hover:text-primary-600 transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                {state.itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {state.itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <a href="#menu" className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors">
                Cardápio
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors">
                Sobre
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors">
                Contato
              </a>
              <div className="px-3 py-2">
                <button 
                  onClick={onCartClick}
                  className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Carrinho ({state.itemCount})
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}