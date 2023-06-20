import './globals.css'




export const metadata = {
  title: 'Car Hub',
  description: 'Discover the best cars in the wo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
