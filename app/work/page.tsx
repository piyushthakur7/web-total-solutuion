'use client';

import React, { useRef, Suspense, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import CustomCursor from '../../components/CustomCursor';
import SmoothScrollProvider from '../../components/SmoothScrollProvider';
import Image from 'next/image';
import Link from 'next/link';

export default function WorkPage() {
  // --- Particle Animation ---
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

  // --- Projects ---
  const projects = [
    {
      title: "Healthcare Platform",
      description: "A seamless portal for patients and doctors to manage healthcare services.",
      image: "",
    },
    {
      title: "E-commerce Store",
      description: "A modern online store with smooth UI and fast checkout experience.",
      image: "",
    },
    {
      title: "FinTech Dashboard",
      description: "Interactive financial dashboard with real-time analytics and reporting.",
      image: "",
    },
    {
      title: "Education App",
      description: "Learning platform connecting teachers and students with gamified features.",
      image: "",
    },
  ];

  // --- Mock Google Reviews ---
  const reviews = [
    {
      name: "Amit Sharma",
      text: "Outstanding web development team! They built our platform exactly how we envisioned it.",
      rating: 5
    },
    {
      name: "Sofia Khan",
      text: "Great experience — fast delivery, excellent communication, and top-tier design quality.",
      rating: 5
    },
    {
      name: "David Wilson",
      text: "The team was responsive and creative. Our website performance skyrocketed after launch.",
      rating: 4.5
    },
  ];

  return (
    <>
      <CustomCursor />
      <SmoothScrollProvider>
        <main className="min-h-screen bg-black text-white relative overflow-hidden">

          {/* Hero Section */}
          <section className="relative overflow-hidden min-h-[80vh] lg:min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="absolute inset-0 z-0 opacity-70">
              <Canvas camera={{ position: [0, 0, 7], fov: 60 }}>
                <ambientLight intensity={0.4} />
                <pointLight position={[5, 5, 5]} intensity={1.2} />
                <Suspense fallback={null}>
                  <Particles />
                </Suspense>
              </Canvas>
            </div>

            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-6xl md:text-8xl font-bold mb-6">
                  Our <span className="text-blue-500">Work</span>
                </h1>
                <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto">
                  We craft seamless digital experiences designed for business growth.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Projects */}
          <section className="py-20 bg-gray-900/50">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Showcasing our work across industries and technologies.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative w-full h-48 bg-gray-700 flex items-center justify-center text-gray-500">
                      <span>No Image</span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-300">{project.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Google Reviews Section */}
          <section className="py-20 bg-black border-t border-gray-800">
            <div className="container mx-auto px-4 text-center">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                What Our Clients Say
              </motion.h2>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {reviews.map((r, i) => (
                  <motion.div
                    key={i}
                    className="bg-gray-900 p-8 rounded-2xl border border-gray-700"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-center mb-4">
                      {Array.from({ length: Math.floor(r.rating) }).map((_, j) => (
                        <span key={j} className="text-yellow-400 text-xl">★</span>
                      ))}
                      {r.rating % 1 !== 0 && <span className="text-yellow-400 text-xl">☆</span>}
                    </div>
                    <p className="text-gray-300 mb-6 italic">“{r.text}”</p>
                    <p className="text-blue-500 font-bold">{r.name}</p>
                  </motion.div>
                ))}
              </div>

              <Link
                href="https://share.google/sjqw4AX5wN2lW168j"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
              >
                View All Reviews on Google
              </Link>
            </div>
          </section>

          {/* Start a Project CTA */}
          <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="container mx-auto px-4"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
                Let’s build something powerful together — we turn ideas into digital experiences that deliver results.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-full text-lg hover:bg-blue-100 transition"
              >
                Start a Project
              </Link>
            </motion.div>
          </section>
        </main>
      </SmoothScrollProvider>
    </>
  );
}
