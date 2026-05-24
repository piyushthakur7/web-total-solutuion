import React from 'react'
import type { Metadata } from 'next'
import { Outfit, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SmoothScrollProvider from '../components/SmoothScrollProvider'
import { siteConfig } from '../data/siteConfig'

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
  title: {
    default: siteConfig.name + ' — Premium Web Development Agency',
    template: `%s | ${siteConfig.name}`,
  },
  description: 'Web Total Solution is a premium web development agency based in Kolkata, India. We build high-performance websites, web apps, and e-commerce solutions using Next.js, React, and modern technologies.',
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name + ' — Premium Web Development Agency',
    description: 'We engineer bespoke digital experiences that blend performance, beauty, and function. 320+ projects delivered with 2.4x average conversion lift.',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name + ' — Premium Web Development Agency',
    description: 'We engineer bespoke digital experiences that blend performance, beauty, and function.',
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <SmoothScrollProvider>
          <Navigation />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}