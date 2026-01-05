import React from 'react'
import type { Metadata } from 'next'
import { Outfit, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Web Total Solution - We Build Digital Experiences',
  description: 'Professional web development agency specializing in modern digital solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}