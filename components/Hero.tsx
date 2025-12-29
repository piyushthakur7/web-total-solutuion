'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const BackgroundStars = dynamic(() => import('./BackgroundStars'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" />
});

const taglines = [
  'Landing Pages that Convert',
  'E-Commerce Experiences that Sell',
  'Web Solutions Built for Growth',
];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToWork = () => {
    const section = document.getElementById('our-work');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
      role="banner"
    >
      {/* 3D Stars Background - Lazy Loaded */}
      <BackgroundStars />

      {/* Glowing gradient orbs - Optimized with will-change */}
      {!isMobile && (
        <>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse will-change-[opacity]" />
          <div
            className="absolute top-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse will-change-[opacity]"
            style={{ animationDelay: '2s' }}
          />
          <div
            className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse will-change-[opacity]"
            style={{ animationDelay: '4s' }}
          />
        </>
      )}

      <div className="container mx-auto px-6 sm:px-8 text-center relative z-10 flex flex-col items-center">
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 sm:mb-8 leading-snug sm:leading-tight text-blue-500"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block">We Build</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.0 }}
            >
              {taglines[index]}
            </motion.span>
          </AnimatePresence>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-md sm:max-w-2xl mx-auto leading-relaxed px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          We're a web development agency that creates high-performance websites and applications that
          drive business growth and deliver exceptional user experiences.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <Link
            href="/contact"
            aria-label="Start Your Project"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400 text-center"
          >
            <motion.span
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              className="block"
            >
              Start Your Project
            </motion.span>
          </Link>

          <motion.button
            className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white"
            onClick={scrollToWork}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="View Our Work"
          >
            View Our Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;