import type { Metadata } from 'next'
import { Hanken_Grotesk } from 'next/font/google'
import './globals.css'

const hkGrotesk = Hanken_Grotesk({
  variable: '--font-hk-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Ecommerce App',
  description: 'An ecommerce application built with Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${hkGrotesk.className} antialiased`}>{children}</body>
    </html>
  )
}
