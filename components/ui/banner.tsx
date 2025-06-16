interface BannerProps {
  title: string
  subtitle?: string
  image: string
  className?: string
}

export default function Banner({ title, subtitle, image, className = '' }: BannerProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <div 
        className="h-64 md:h-80 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="text-white px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-2">{title}</h2>
            {subtitle && (
              <p className="text-lg md:text-xl opacity-90">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}