'use client';

import React, { useRef, Suspense, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import CustomCursor from '../../components/CustomCursor';
import SmoothScrollProvider from '../../components/SmoothScrollProvider';
import Portfolio from '../../components/Portfolio';

export default function WorkPage() {
  // Particle System for "Creation in Motion"
  const Particles = () => {
    const ref = useRef<THREE.Points>(null!);
    const count = 1000;
    const positions = useMemo(() => {
      const arr = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        arr[i * 3] = (Math.random() - 0.5) * 8;
        arr[i * 3 + 1] = (Math.random() - 0.5) * 4;
        arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
      }
      return arr;
    }, [count]);

    useFrame(({ clock }) => {
      const t = clock.getElapsedTime();
      ref.current.rotation.y = t * 0.1;
    });

    return (
      <points ref={ref}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#3b82f6"
          opacity={0.8}
          transparent
          depthWrite={false}
        />
      </points>
    );
  };

  return (
    <>
      <CustomCursor />
      <SmoothScrollProvider>
        <main className="min-h-screen bg-black text-white pt-20 relative overflow-hidden">
          {/* Hero Section with Particle Animation */}
          <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-70">
              <Canvas camera={{ position: [0, 0, 7], fov: 60 }}>
                <ambientLight intensity={0.4} />
                <pointLight position={[5, 5, 5]} intensity={1.2} />
                <Suspense fallback={null}>
                  <Particles />
                </Suspense>
              </Canvas>
            </div>

            <div className="container mx-auto px-4 relative z-10">
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
                  As a reliable web development firm, we design smooth digital experiences specific to your business requirements.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Portfolio Showcase */}
          <Portfolio />

          {/* Framework Section */}
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
                  Our Framework
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  As a web development service provider, we collaborate with our development process to bring your vision to life with business success.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    step: "01",
                    title: "Discovery",
                    description: "Detailed consultation to explore your vision and requirements to grow your business."
                  },
                  {
                    step: "02",
                    title: "Planning",
                    description: "Solidly planned roadmap developed by our professional web developers and strategists for transparency and coherence."
                  },
                  {
                    step: "03",
                    title: "Development",
                    description: "Your project is built using the latest frameworks and best practices by our expert team."
                  },
                  {
                    step: "04",
                    title: "Launch",
                    description: "We also provide integrated digital marketing services to help your new website gain traction and visibility."
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
                    <div className="bg-blue-500 text-black text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{process.title}</h3>
                    <p className="text-gray-300">{process.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 bg-black">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  What Our Clients Say
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Hear directly from our clients about their experience working with us.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Amit Sharma",
                    role: "CEO, TechVision",
                    feedback: "They transformed our outdated website into a sleek, modern platform that boosted our conversions by 40%. Outstanding work!"
                  },
                  {
                    name: "Sofia Khan",
                    role: "Founder, GreenLeaf",
                    feedback: "The team understood our vision perfectly and delivered a product that exceeded expectations. Communication was seamless throughout."
                  },
                  {
                    name: "David Wilson",
                    role: "Marketing Head, FinEdge",
                    feedback: "Professional, reliable, and creative. Their process made everything smooth and stress-free. Highly recommend!"
                  }
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-900 p-8 rounded-2xl shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-gray-300 mb-6">“{testimonial.feedback}”</p>
                    <div>
                      <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                      <p className="text-blue-500">{testimonial.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </SmoothScrollProvider>
    </>
  );
}
