'use client';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from '../components/CustomCursor'
import SmoothScrollProvider from '../components/SmoothScrollProvider'
import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import PortfolioSection from '../components/PortfolioSection'
import AboutSection from '../components/AboutSection'
import ClientsSection from '../components/ClientsSection'
import CTASection from '../components/CTASection'
import WhatsAppButton from '../components/WhatsAppButton'
import Preloader from '../components/Preloader'

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
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
      )}
    </>
  )
}