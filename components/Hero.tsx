'use client';

import React, { Suspense, useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import Link from 'next/link';

const Stars = () => {
  const ref = useRef<THREE.Points>(null!);
  const sphere = React.useMemo(() => {
    const points = [];
    for (let i = 0; i < 4000; i++) {
      const r = 1.2 + Math.random() * 1.5;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      points.push(x, y, z);
    }
    return new Float32Array(points);
  }, []);

  useFrame(() => {
    ref.current.rotation.x -= 0.0005;
    ref.current.rotation.y -= 0.001;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.005}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const taglines = [
  'Landing Pages that Convert',
  'E-Commerce Experiences that Sell',
  'Web Solutions Built for Growth'
];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToWork = () => {
    const section = document.getElementById('our-work');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Three.js Animated Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 2] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
        </Canvas>
      </div>

      {/* Overlay gradient glows */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 flex flex-col items-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-8 leading-tight text-blue-500"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block">We Build</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              {taglines[index]}
            </motion.span>
          </AnimatePresence>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          We're a web development agency that creates stunning, high-performance websites 
          and applications that drive business growth and deliver exceptional user experiences.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <Link href="/contact" aria-label="Start Your Project">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </Link>

          <motion.button
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white"
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
