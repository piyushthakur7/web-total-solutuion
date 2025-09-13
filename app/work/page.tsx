'use client';

import React from 'react'
import { motion } from 'framer-motion'
import CustomCursor from '../../components/CustomCursor'
import SmoothScrollProvider from '../../components/SmoothScrollProvider'
import Portfolio from '../../components/Portfolio'

export default function WorkPage() {
  return (
    <>
      <CustomCursor />
      <SmoothScrollProvider>
        <main className="min-h-screen bg-black text-white pt-20">
          {/* Work Hero Section */}
          <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  Our <span className="text-blue-500">Work</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Explore our portfolio of successful projects that showcase our expertise in creating exceptional digital experiences.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Portfolio Showcase */}
          <Portfolio />

          {/* Process Overview */}
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
                  Our Development Process
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  A streamlined approach that ensures quality and client satisfaction at every step.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    step: "01",
                    title: "Discovery",
                    description: "Understanding your vision, goals, and requirements through detailed consultation."
                  },
                  {
                    step: "02", 
                    title: "Planning",
                    description: "Creating a comprehensive project roadmap with timelines and milestones."
                  },
                  {
                    step: "03",
                    title: "Development",
                    description: "Building your solution using modern technologies and best practices."
                  },
                  {
                    step: "04",
                    title: "Launch",
                    description: "Deploying your project and providing ongoing support for success."
                  }
                ].map((process, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-blue-500 text-black text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{process.title}</h3>
                    <p className="text-gray-300">{process.description}</p>
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