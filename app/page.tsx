'use client';

import CustomCursor from '../components/CustomCursor'
import SmoothScrollProvider from '../components/SmoothScrollProvider'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Approach from '../components/Approach'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <SmoothScrollProvider>
        <main className="min-h-screen bg-black text-white">
          <Hero />
          <Services />
          <Approach />
          <Portfolio />
          <Contact />
          <Footer />
        </main>
      </SmoothScrollProvider>
    </>
  )
}