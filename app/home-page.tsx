'use client'

import { useState } from 'react'
import Header from '@/components/ui/header'
import Banner from '@/components/ui/banner'
import ProductCard from '@/components/ui/product-card'
import CartSidebar from '@/components/ui/cart-sidebar'
import CheckoutModal from '@/components/ui/checkout-modal'
import { products, categories } from '@/data/products'

export default function HomePage() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos')

  const mockBanners = [
    {
      id: '1',
      title: 'M.V Sushi Delivery!',
      subtitle: 'Os melhores sabores japoneses na sua casa',
      image: '/api/placeholder/800/400',
    }
  ]

  const filteredProducts = selectedCategory === 'Todos' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  const handleCartClick = () => {
    setIsCartOpen(true)
  }

  const handleCheckout = () => {
    setIsCartOpen(false)
    setIsCheckoutOpen(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onCartClick={handleCartClick} />
      
      <main>
        {/* Hero Banner */}
        <section className="px-4 pt-6 pb-8">
          <div className="max-w-7xl mx-auto">
            {mockBanners.map((banner) => (
              <Banner
                key={banner.id}
                title={banner.title}
                subtitle={banner.subtitle}
                image={banner.image}
              />
            ))}
          </div>
        </section>

        {/* Available Dates Info */}
        <section className="px-4 pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                📅 Reservas Disponíveis
              </h3>
              <p className="text-blue-700">
                Faça sua reserva com antecedência! Entregamos em São Francisco de Assis e região.
              </p>
              <p className="text-sm text-blue-600 mt-2">
                📍 Maurício Cardoso 1242, Centro - São Francisco de Assis
              </p>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="px-4 pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Nosso Cardápio
              </h2>
              <p className="text-gray-600">
                Sushi fresco preparado com ingredientes premium
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                onClick={() => setSelectedCategory('Todos')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === 'Todos'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Todos
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                Pronto para fazer sua reserva?
              </h3>
              <p className="text-primary-700 mb-6">
                Selecione seus itens favoritos e reserve agora para garantir seu sushi fresquinho!
              </p>
              <button className="btn-primary text-lg py-3 px-8">
                Fazer Reserva
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="px-4 pb-12 bg-white">
          <div className="max-w-4xl mx-auto text-center py-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sobre o M.V Sushi Delivery
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Há mais de 5 anos servindo o melhor sushi de São Francisco de Assis e região. Trabalhamos apenas com peixes frescos 
              e ingredientes premium. Fazemos suas reservas com carinho e pontualidade, entregando diretamente na sua casa.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-4 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contato
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h4 className="font-semibold text-gray-900 mb-2">WhatsApp</h4>
                <p className="text-gray-600">(55) 99600-5343</p>
                <a 
                  href="https://wa.me/5555996005343" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 hover:text-primary-700 transition-colors mt-2 inline-block"
                >
                  Chamar no WhatsApp
                </a>
              </div>
              <div className="card p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Localização</h4>
                <p className="text-gray-600">Maurício Cardoso 1242, Centro</p>
                <p className="text-gray-600">São Francisco de Assis</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 M.V Sushi Delivery. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Cart Sidebar */}
      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </div>
  )
}