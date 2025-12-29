'use client';

import React from 'react'
import { motion } from 'framer-motion'
import SmoothScrollProvider from '../../components/SmoothScrollProvider'
import Contact from '../../components/Contact'
import dynamic from 'next/dynamic'

const CustomCursor = dynamic(() => import('../../components/CustomCursor'), { ssr: false })
const WhatsAppButton = dynamic(() => import('../../components/WhatsAppButton'), { ssr: false })

export default function ContactPage() {
  return (
    <>
      <CustomCursor />
      <SmoothScrollProvider>
        <main className="min-h-screen bg-black text-white pt-20">
          {/* Contact Hero Section */}
          <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="container mx-auto px-4">
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
                  href="tel:+916291519364"
                  className="bg-gray-700 hover:bg-gray-600 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
                >
                  Call Us
                </a>
                {/* <button
    onClick={() => {
      const upiId = "ariesaugust23@okhdfcbank"; // replace with your UPI ID
      const name = "Web Total Solution"; // your business name
      const note = "Payment"; 
      const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
        name
      )}&cu=INR&tn=${encodeURIComponent(note)}`;
      window.location.href = upiLink;
    }}
    className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
  >
    Pay Now
  </button> */}
              </motion.div>
            </div>

          </section>

          {/* Contact Form Section */}
          <Contact />

          {/* Additional Contact Info */}
          <section className="py-20 bg-gray-900/50">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blue-500 text-black text-2xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    📍
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Our Location</h3>
                  <p className="text-gray-300">
                    Garia south 24 pgs <br />
                    Kolkata-700152<br />
                    West Bengal, India
                  </p>
                </motion.div>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blue-500 text-black text-2xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    📞
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Phone</h3>
                  <p className="text-gray-300">
                    +91 6291 519 364 <br />
                    Mon - Fri: 9AM - 6PM <br />
                    Weekend: On Call
                  </p>
                </motion.div>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blue-500 text-black text-2xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    ✉️
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Email</h3>
                  <p className="text-gray-300">
                    infowebtotalsolution@gmail.com<br />
                    Response within 24 hours
                  </p>
                </motion.div>
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
