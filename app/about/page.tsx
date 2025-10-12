'use client';

import React, { useRef, Suspense, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';
import CustomCursor from '../../components/CustomCursor';
import SmoothScrollProvider from '../../components/SmoothScrollProvider';
import Approach from '../../components/Approach';

export default function AboutPage() {
  // --- Three.js Globe ---
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
        {/* Wireframe Sphere */}
        <Sphere args={[1.2, 64, 64]}>
          <meshBasicMaterial color="#3b82f6" wireframe opacity={0.15} transparent />
        </Sphere>

        {/* Network Lines */}
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

  return (
    <>
      <CustomCursor />
      <SmoothScrollProvider>
        <main className="min-h-screen bg-black text-white pt-20 relative overflow-hidden">

          {/* About Hero Section */}
          <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
            
            {/* Three.js Animated Globe */}
            <div className="absolute inset-0 z-0 opacity-70">
              <Canvas camera={{ position: [0, 0, 3] }}>
                <Suspense fallback={null}>
                  <NetworkGlobe />
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
                  Web Development <span className="text-blue-500">Company in Kolkata</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  At Web Total Solution, we design SEO-friendly websites to fuel business growth.
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
                    Story
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    Our innovative web developers and talented digital marketing experts provide performance-driven solutions with managed IT services and creative digital solutions. 
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    For every project, we center our efforts on growth so that our clients receive top-notch IT solutions and effective digital marketing strategies.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { num: 'Discovery & Planning', label: 'We begin by understanding your business goals and target audience through in-depth consultation.' },
                    { num: 'Design & Prototyping', label: 'We ensure your website development and digital marketing strategy are user-focused and outcome-oriented.' },
                    { num: 'Development & Testing', label: 'We deliver high-quality web development using modern technologies and rigorous testing.' },
                    { num: 'Launch & Support', label: 'After launch, we provide round-the-clock managed IT services and ongoing support.' }
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-left"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-bold text-blue-500 mb-2">{step.num}</h3>
                      <p className="text-gray-300 text-sm">{step.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Our Approach Section */}
          <Approach />
        </main>
      </SmoothScrollProvider>
    </>
  );
}
