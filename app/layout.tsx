export const metadata = {
  title: 'M.V Sushi Delivery',
  description: 'Reserve seu sushi favorito',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  )
}