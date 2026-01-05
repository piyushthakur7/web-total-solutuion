'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from '../components/CustomCursor'
import SmoothScrollProvider from '../components/SmoothScrollProvider'
import Hero from '../components/Hero'
import dynamic from 'next/dynamic'

const ServicesSection = dynamic(() => import('../components/ServicesSection'), { ssr: true })
const PortfolioSection = dynamic(() => import('../components/PortfolioSection'), { ssr: true })
const AboutSection = dynamic(() => import('../components/AboutSection'), { ssr: true })
const ClientsSection = dynamic(() => import('../components/ClientsSection'), { ssr: true })
const CTASection = dynamic(() => import('../components/CTASection'), { ssr: true })
import WhatsAppButton from '../components/WhatsAppButton'
import Preloader from '../components/Preloader'

// ... keep imports ...

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Lock scroll while loading
  // Using useEffect to handle body overflow
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
    }
  }, [loading]);

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <SmoothScrollProvider>
        <main className="min-h-screen bg-black text-white">
          <Hero />
          <ServicesSection />
          <PortfolioSection />
          <AboutSection />
          <ClientsSection />
          <CTASection />

          {/* Floating WhatsApp Button */}
          <WhatsAppButton
            variant="floating"
            message="Hello! I'm interested in your web development services. Can we discuss my project?"
          />
        </main>
      </SmoothScrollProvider>
    </>
  )
}