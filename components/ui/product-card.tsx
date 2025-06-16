import { formatPrice } from '@/lib/utils'
import { Plus } from 'lucide-react'
import { useCart } from '@/contexts/cart-context'

interface ProductCardProps {
  id: string
  name: string
  description?: string
  price: number
}

export default function ProductCard({
  id,
  name,
  description,
  price,
}: ProductCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({ id, name, price })
  }
  return (
    <div className="card hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <div className="w-full h-48 bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
          <span className="text-6xl">🍣</span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
        
        {description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary-600">
            {formatPrice(price)}
          </span>
          
          <button
            onClick={handleAddToCart}
            className="btn-primary flex items-center space-x-1 text-sm"
          >
            <Plus className="h-4 w-4" />
            <span>Adicionar</span>
          </button>
        </div>
      </div>
    </div>
  )
}