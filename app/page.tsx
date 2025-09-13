'use client';

import CustomCursor from '../components/CustomCursor'
import SmoothScrollProvider from '../components/SmoothScrollProvider'
import Hero from '../components/Hero'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <SmoothScrollProvider>
        <main className="min-h-screen bg-black text-white">
          <Hero />
          
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