'use client';

import React, { useRef, Suspense, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';
import CustomCursor from '../../components/CustomCursor';
import SmoothScrollProvider from '../../components/SmoothScrollProvider';
import Approach from '../../components/Approach';
import Link from 'next/link';
import { FaRocket, FaChartLine, FaCode, FaTrophy, FaUsers, FaLightbulb } from 'react-icons/fa';

export default function AboutPage() {
  const NetworkGlobe = () => {
    const group = useRef<THREE.Group>(null!);

    useFrame(() => {
      if (group.current) {
        group.current.rotation.y += 0.002;
        group.current.rotation.x = Math.sin(Date.now() * 0.0002) * 0.1;
      }
    });

    const lines = useMemo(() => {
      const temp: { start: THREE.Vector3; end: THREE.Vector3 }[] = [];
      for (let i = 0; i < 100; i++) {
        const a = Math.random() * Math.PI * 2;
        const b = Math.random() * Math.PI;
        const radius = 1.2;

        const x = radius * Math.sin(b) * Math.cos(a);
        const y = radius * Math.sin(b) * Math.sin(a);
        const z = radius * Math.cos(b);

        const start = new THREE.Vector3(x, y, z);
        const end = start.clone().multiplyScalar(1.1 + Math.random() * 0.3);

        temp.push({ start, end });
      }
      return temp;
    }, []);

    return (
      <group ref={group}>
        <Sphere args={[1.2, 64, 64]}>
          <meshBasicMaterial color="#3b82f6" wireframe opacity={0.15} transparent />
        </Sphere>
        {lines.map((l, i) => (
          <Line
            key={i}
            points={[l.start, l.end]}
            color="#60a5fa"
            lineWidth={0.3}
            transparent
            opacity={0.6}
          />
        ))}
      </group>
    );
  };

  const stats = [
    { icon: FaTrophy, value: '320+', label: 'Projects Delivered' },
    { icon: FaUsers, value: '150+', label: 'Happy Clients' },
    { icon: FaChartLine, value: '2.4x', label: 'Avg. ROI Increase' },
    { icon: FaRocket, value: '18+', label: 'Years Combined Experience' },
  ];

  const values = [
    {
      icon: FaLightbulb,
      title: 'Innovation First',
      description: 'We stay ahead of the curve, leveraging cutting-edge technologies to build future-proof solutions.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: FaUsers,
      title: 'Client-Centric',
      description: 'Your success is our success. We work as an extension of your team, not just a vendor.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaCode,
      title: 'Quality Code',
      description: 'Clean, maintainable, and scalable code that stands the test of time and growth.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaChartLine,
      title: 'Results Driven',
      description: 'We measure success in metrics that matter: conversions, speed, and business growth.',
      gradient: 'from-green-500 to-emerald-500'
    },
  ];

  const process = [
    {
      num: '01',
      title: 'Discovery & Strategy',
      description: 'We dig deep to understand your goals, audience, and challenges before designing a single pixel.',
      color: 'blue'
    },
    {
      num: '02',
      title: 'Design & Experience',
      description: 'We craft interfaces that not only look beautiful but make users take action and convert.',
      color: 'purple'
    },
    {
      num: '03',
      title: 'Development & Testing',
      description: 'Modern tech stacks, clean code, and obsessive performance testing for flawless execution.',
      color: 'cyan'
    },
    {
      num: '04',
      title: 'Launch & Growth',
      description: 'We don&apos;t disappear after launch — we help you scale what works and optimize continuously.',
      color: 'green'
    }
  ];

  return (
    <>
      <CustomCursor />
      <SmoothScrollProvider>
        <main className="min-h-screen bg-black text-white pt-20 relative overflow-hidden">

          {/* Hero Section */}
          <section className="relative py-32 md:py-40 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
            </div>

            {/* Three.js Animated Globe */}
            <div className="absolute inset-0 z-0 opacity-40">
              <Canvas camera={{ position: [0, 0, 3] }}>
                <Suspense fallback={null}>
                  <NetworkGlobe />
                </Suspense>
              </Canvas>
            </div>

            <div className="container mx-auto px-6 relative z-10">
              <motion.div
                className="text-center max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.span
                  className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  ABOUT WEB TOTAL SOLUTION
                </motion.span>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                  We Build Websites That{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Drive Growth
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
                  Not just code — we deliver <span className="text-white font-semibold">strategy, speed, and results</span> that move the needle for your business.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/contact"
                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <FaRocket className="group-hover:rotate-12 transition-transform duration-300" />
                      Start a Project
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                  <Link
                    href="/work"
                    className="px-8 py-4 border-2 border-gray-700 hover:border-blue-500 rounded-full text-gray-300 hover:text-white font-semibold transition-all duration-300"
                  >
                    View Our Work
                  </Link>
                </div>

                <p className="text-sm text-gray-500 mt-6">
                  Trusted by startups & businesses across industries
                </p>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      className="relative group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 group-hover:border-blue-500/50 rounded-2xl p-6 text-center transition-all duration-300">
                        <Icon className="text-3xl text-blue-400 mx-auto mb-3" />
                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>

          {/* Our Story Section */}
          <section className="py-24 relative">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold mb-6">
                    OUR STORY
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Building Digital Excellence{' '}
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Since Day One
                    </span>
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    We started with one simple goal — build digital experiences that don&apos;t just look good, but <span className="text-white font-semibold">perform</span>.
                    Every project we take on is designed to help our clients grow faster, sell smarter, and scale easier.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    From high-performance websites to conversion-focused marketing, we combine creativity with technical depth to deliver measurable results that impact your bottom line.
                  </p>
                </motion.div>

                <motion.div
                  className="grid grid-cols-2 gap-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <motion.div
                        key={value.title}
                        className="relative group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                        <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 group-hover:border-gray-700 rounded-xl p-6 h-full transition-all duration-300">
                          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${value.gradient} mb-4`}>
                            <Icon className="text-white text-xl" />
                          </div>
                          <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-24 relative bg-gradient-to-b from-black via-gray-900 to-black">
            <div className="container mx-auto px-6">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold mb-6">
                  HOW WE WORK
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Our Proven{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Process
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  A systematic approach that ensures exceptional results at every stage of your project
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {process.map((step, index) => (
                  <motion.div
                    key={step.num}
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br from-${step.color}-500/20 to-${step.color}-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 group-hover:border-gray-700 rounded-xl p-8 h-full transition-all duration-300">
                      <div className={`text-6xl font-bold bg-gradient-to-br from-${step.color}-400 to-${step.color}-600 bg-clip-text text-transparent mb-4 opacity-20`}>
                        {step.num}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Approach Section */}
          <Approach />
        </main>
      </SmoothScrollProvider>
    </>
  );
}
