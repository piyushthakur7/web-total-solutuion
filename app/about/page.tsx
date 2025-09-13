'use client';

import React from 'react'
import { motion } from 'framer-motion'
import CustomCursor from '../../components/CustomCursor'
import SmoothScrollProvider from '../../components/SmoothScrollProvider'
import Approach from '../../components/Approach'

export default function AboutPage() {
  return (
    <>
      <CustomCursor />
      <SmoothScrollProvider>
        <main className="min-h-screen bg-black text-white pt-20">
          {/* About Hero Section */}
          <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  About <span className="text-blue-500">Us</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  We are passionate digital craftsmen dedicated to building exceptional web experiences that drive business growth.
                </p>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Our Story
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    Founded with a vision to transform the digital landscape, Web Total Solution has been at the forefront of web innovation. We combine creativity with technical expertise to deliver solutions that exceed expectations.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Our team of dedicated professionals brings years of experience in web development, design, and digital strategy to every project we undertake.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-blue-500 mb-2">100+</h3>
                    <p className="text-gray-300">Projects Completed</p>
                  </motion.div>
                  
                  <motion.div
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-blue-500 mb-2">50+</h3>
                    <p className="text-gray-300">Happy Clients</p>
                  </motion.div>
                  
                  <motion.div
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-blue-500 mb-2">5+</h3>
                    <p className="text-gray-300">Years Experience</p>
                  </motion.div>
                  
                  <motion.div
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-blue-500 mb-2">24/7</h3>
                    <p className="text-gray-300">Support</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Our Approach Section */}
          <Approach />
        </main>
      </SmoothScrollProvider>
    </>
  )
}