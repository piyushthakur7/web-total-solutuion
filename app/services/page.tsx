'use client';

import React from 'react'
import { motion } from 'framer-motion'
import CustomCursor from '../../components/CustomCursor'
import SmoothScrollProvider from '../../components/SmoothScrollProvider'
import Services from '../../components/Services'

export default function ServicesPage() {
  return (
    <>
      <CustomCursor />
      <SmoothScrollProvider>
        <main className="min-h-screen bg-black text-white pt-20">
          {/* Services Hero Section */}
          <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  Our <span className="text-blue-500">Services</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Comprehensive web solutions tailored to elevate your digital presence and drive business success.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Services Grid */}
          <Services />

          {/* Additional Service Benefits */}
          <section className="py-20 bg-gray-900/50">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Why Choose Our Services?
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Quality Assurance",
                    description: "Rigorous testing and quality checks ensure your project meets the highest standards.",
                    icon: "🎯"
                  },
                  {
                    title: "Timely Delivery",
                    description: "We respect deadlines and deliver projects on time, every time.",
                    icon: "⚡"
                  },
                  {
                    title: "Ongoing Support",
                    description: "Comprehensive support and maintenance to keep your website running smoothly.",
                    icon: "🛠️"
                  },
                  {
                    title: "Scalable Solutions",
                    description: "Built to grow with your business, our solutions adapt to your evolving needs.",
                    icon: "📈"
                  },
                  {
                    title: "Modern Technology",
                    description: "We use the latest technologies and frameworks to ensure future-proof solutions.",
                    icon: "💻"
                  },
                  {
                    title: "Custom Approach",
                    description: "Every project is unique, and we tailor our approach to your specific requirements.",
                    icon: "🎨"
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </SmoothScrollProvider>
    </>
  )
}