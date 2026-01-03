'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const ThreeScene = dynamic(() => import('./ThreeScene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-transparent" />
});

const Hero: React.FC = () => {
  const scrollToWork = () => {
    const section = document.getElementById('our-work');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
      role="banner"
    >
      {/* 3D Background Scene - PRESERVED */}
      <ThreeScene />

      {/* Atmospheric Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/80 pointer-events-none z-0" />

      {/* Content Layer */}
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center pointer-events-none">

        {/* Left Column: Text & CTA */}
        <div className="text-center lg:text-left pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80 animate-pulse" />
              <span className="text-white/80 text-xs font-medium tracking-wide">
                WEB TOTAL SOLUTION
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
              Crafting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
                Digital Excellence
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
              We engineer bespoke digital experiences that blend performance, beauty, and function.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105"
              >
                <span className="relative z-10">Start Project</span>
                <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Link>
              <button
                onClick={scrollToWork}
                className="px-8 py-4 border border-white/10 text-white rounded-full hover:bg-white/5 transition-colors backdrop-blur-sm"
              >
                View Work
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Empty for 3D visual */}
        <div className="hidden lg:block relative h-[500px] pointer-events-none">
          {/* The 3D scene occupies this space visually */}
        </div>

      </div>
    </section>
  );
};

export default Hero;