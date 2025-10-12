'use client';

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { motion } from 'framer-motion'
import CustomCursor from '../../components/CustomCursor'
import SmoothScrollProvider from '../../components/SmoothScrollProvider'
import Contact from '../../components/Contact'
import WhatsAppButton from '../../components/WhatsAppButton'

export default function ContactPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / 400, // height of hero section ~400px, can adjust
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, 400) // hero height
    renderer.setPixelRatio(window.devicePixelRatio)
    camera.position.z = 5

    // Particles
    const particlesCount = 800
    const positions = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const material = new THREE.PointsMaterial({
      color: 0x3b82f6,
      size: 0.02,
      transparent: true,
      opacity: 0.8,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    const clock = new THREE.Clock()

    const animate = () => {
      const elapsed = clock.getElapsedTime()
      particles.rotation.y = elapsed * 0.1
      particles.rotation.x = Math.sin(elapsed * 0.1) * 0.05
      material.size = 0.015 + Math.sin(elapsed * 2) * 0.005
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      renderer.setSize(window.innerWidth, 400)
      camera.aspect = window.innerWidth / 400
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <>
      <CustomCursor />
      <SmoothScrollProvider>
        <main className="min-h-screen bg-black text-white pt-20 relative z-10">
          
          {/* Hero Section with Three.js Animation */}
          <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
            <canvas
              ref={canvasRef}
              className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
            />

            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  Contact <span className="text-blue-500">Us</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Ready to start your next project? Get in touch and let's create something amazing together.
                </p>
              </motion.div>

              {/* Quick Contact Options */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <WhatsAppButton
                  message="Hi! I'd like to discuss a web development project."
                  className="w-full sm:w-auto"
                />
                <a
                  href="mailto:info@webtotalsolution.com"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
                >
                  Send Email
                </a>
                <a
                  href="tel:+919748894719"
                  className="bg-gray-700 hover:bg-gray-600 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
                >
                  Call Us
                </a>
              </motion.div>
            </div>
          </section>

          {/* Contact Form Section */}
          <Contact />

          {/* Additional Contact Info */}
          <section className="py-20 bg-gray-900/50 relative z-10">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: '📍',
                    title: 'Our Location',
                    content: 'Garia south 24 pgs\nKolkata-700152\nWest Bengal, India'
                  },
                  {
                    icon: '📞',
                    title: 'Phone',
                    content: '+91 9748894719\n+91 8583039357\nMon - Fri: 9AM - 6PM\nWeekend: On Call'
                  },
                  {
                    icon: '✉️',
                    title: 'Email',
                    content: 'infowebtotalsolution@gmail.com\nResponse within 24 hours'
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-blue-500 text-black text-2xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-300 whitespace-pre-line">{item.content}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

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
