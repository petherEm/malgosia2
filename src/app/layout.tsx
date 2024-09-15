import '@/styles/tailwind.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Małgorzata Szynkarczuk',
  description:
    'Automotive Business Development, Director, General Manager, C Executive, Strategy, Strategic Marketing and Product Management, Automotive Industry, Electric Vehicles, and Renewable Energy.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
      </head>
      <body className="scroll-smooth text-gray-950 antialiased">
        {children}
      </body>
    </html>
  )
}
