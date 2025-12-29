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
      {/* 3D Background Scene */}
      <ThreeScene />

      {/* Content Layer */}
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center pointer-events-none">

        {/* Left Column: Text & CTA */}
        <div className="text-center lg:text-left pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 mb-6 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-sm">
              <span className="text-blue-400 font-mono text-xs tracking-widest uppercase">
                Premium Web Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Crafting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
                Digital Excellence
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
              We are a team of visionary developers and designers building the future of the web.
              Elevate your brand with our bespoke, high-performance applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                Start Your Project
              </Link>
              <button
                onClick={scrollToWork}
                className="px-8 py-4 border border-white/20 hover:border-white text-white backdrop-blur-md rounded-full transition-all hover:bg-white/10"
              >
                View Our Work
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Empty for 3D visual to shine through, or add floating overlay stats */}
        <div className="hidden lg:block relative h-[500px] pointer-events-none">
          {/* The 3D scene occupies this space visually */}
        </div>

      </div>

      {/* Bottom fade for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;