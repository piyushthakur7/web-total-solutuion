'use client';

import React, { useRef, Suspense, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import CustomCursor from '../../components/CustomCursor';
import SmoothScrollProvider from '../../components/SmoothScrollProvider';
import Services from '../../components/Services';

export default function ServicesPage() {
  // --- Three.js Animated Digital Grid ---
  const FloatingGrid = () => {
    const group = useRef<THREE.Group>(null!);
    const cubes = useMemo(() => {
      const temp: { position: [number, number, number]; scale: number }[] = [];
      for (let i = 0; i < 120; i++) {
        const x = (Math.random() - 0.5) * 10;
        const y = (Math.random() - 0.5) * 6;
        const z = (Math.random() - 0.5) * 8;
        const scale = Math.random() * 0.4 + 0.1;
        temp.push({ position: [x, y, z], scale });
      }
      return temp;
    }, []);

    useFrame(({ clock }) => {
      const t = clock.getElapsedTime();
      if (group.current) {
        group.current.rotation.y = t * 0.05;
        group.current.children.forEach((child, i) => {
          const mesh = child as THREE.Mesh;
          mesh.position.y += Math.sin(t + i) * 0.002;
        });
      }
    });

    return (
      <group ref={group}>
        {cubes.map((cube, i) => (
          <mesh key={i} position={cube.position}>
            <boxGeometry args={[cube.scale, cube.scale, cube.scale]} />
            <meshStandardMaterial
              color={new THREE.Color().setHSL(Math.random() * 0.6 + 0.4, 0.8, 0.6)}
              emissive="#2563eb"
              emissiveIntensity={Math.random() * 0.4}
              roughness={0.3}
              metalness={0.7}
            />
          </mesh>
        ))}
      </group>
    );
  };

  return (
    <>
      <CustomCursor />
      <SmoothScrollProvider>
        <main className="min-h-screen bg-black text-white pt-20 relative overflow-hidden">
          {/* Hero Section with Custom Grid Animation */}
          <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-70">
              <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
                <ambientLight intensity={0.3} />
                <pointLight position={[5, 5, 5]} intensity={1.2} />
                <Suspense fallback={null}>
                  <FloatingGrid />
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
                  Our <span className="text-blue-500">Services</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  We offer an extensive range of web development solutions and online marketing services 
                  to propel your business success in today's digital world.
                </p>
              </motion.div>

              {/* Core Services */}
              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {[
                  {
                    title: "Website Development",
                    desc: "Tailored websites and web applications designed by professional developers using modern tools and best practices."
                  },
                  {
                    title: "UI/UX Design",
                    desc: "User-friendly and design-driven experiences that elevate your brand and engage your audience."
                  },
                  {
                    title: "SEO Optimization",
                    desc: "Advanced SEO strategies to boost your website’s visibility and dominate search engine rankings."
                  },
                  {
                    title: "Branding",
                    desc: "Strategic brand identity design that tells your story and resonates deeply with your audience."
                  }
                ].map((service, i) => (
                  <motion.div
                    key={i}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-blue-500 mb-4">{service.title}</h3>
                    <p className="text-gray-300">{service.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Why Choose Us Section */}
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
                  Why Select Our Web Development Solutions?
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  As a top web development and digital marketing agency, we position your business for success through our dedication to quality and innovation.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Quality Assurance",
                    desc: "Stringent testing and high standards to ensure your website performs flawlessly."
                  },
                  {
                    title: "On-Time Delivery",
                    desc: "We honor deadlines and deliver projects on time, every single time."
                  },
                  {
                    title: "Extended Support",
                    desc: "Ongoing support and upkeep to ensure your website remains reliable after launch."
                  },
                  {
                    title: "Scalable Solutions",
                    desc: "Our sites evolve with your business, scaling smoothly as your needs grow."
                  },
                  {
                    title: "Modern Technology",
                    desc: "We leverage advanced frameworks and tools for long-term performance and security."
                  },
                  {
                    title: "Custom Approach",
                    desc: "Each project gets a personalized strategy aligned with your goals and brand identity."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="text-xl font-bold text-blue-500 mb-4">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* About Web Total Solution */}
          <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="container mx-auto px-4 text-center">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                About <span className="text-blue-500">Web Total Solution</span>
              </motion.h2>
              <motion.p
                className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Web Total Solution is a reputable web development and digital marketing firm that specializes in scalable digital solutions and builds strong, effective websites.
              </motion.p>

              <motion.div
                className="bg-gray-900/50 border border-gray-700 rounded-lg max-w-xl mx-auto p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-blue-500 mb-4">Our Services Include</h3>
                <ul className="text-gray-300 space-y-3 text-left inline-block">
                  <li>- Website Development</li>
                  <li>- UI/UX Design</li>
                  <li>- Digital Marketing</li>
                  <li>- Website Maintenance</li>
                </ul>
              </motion.div>
            </div>
          </section>
        </main>
      </SmoothScrollProvider>
    </>
  );
}
