'use client';

import React, { useRef, Suspense, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Link from 'next/link';
import CustomCursor from '../../components/CustomCursor';
import SmoothScrollProvider from '../../components/SmoothScrollProvider';


export default function ServicesPage() {
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
          {/* Hero Section */}
          <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-70">
              <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
                <ambientLight intensity={0.3} />
                <pointLight position={[5, 5, 5]} intensity={1.2} />
                <Suspense fallback={null}>
                  <FloatingGrid />
                </Suspense>
              </Canvas>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Services That <span className="text-blue-500">Build, Scale,</span> and Convert
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  From design to deployment, we craft digital solutions that grow your business — not your workload.
                </p>
                <div className="mt-10">
                  <Link
                    href="/contact"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
                  >
                    Start a Project
                  </Link>
                  <p className="text-sm text-gray-400 mt-4">
                    Get a free consultation — see what’s possible for your brand.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Core Services */}
          <section className="py-20 bg-black relative z-10">
            <div className="container mx-auto px-4">
              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {[
                  {
                    title: "Web Development",
                    desc: "High-performance websites and web apps built with modern frameworks to convert visitors into customers.",
                  },
                  {
                    title: "UI/UX Design",
                    desc: "Human-centered designs that blend aesthetics and usability to create seamless digital experiences.",
                  },
                  {
                    title: "SEO Optimization",
                    desc: "Search-first strategies that put your business ahead of competitors and keep it there.",
                  },
                  {
                    title: "Brand Identity",
                    desc: "Strategic branding that builds trust, recognition, and long-term customer loyalty.",
                  },
                ].map((service, i) => (
                  <motion.div
                    key={i}
                    className="bg-gray-900/50 border border-gray-700 rounded-xl p-8 text-center backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-blue-500 mb-4">{service.title}</h3>
                    <p className="text-gray-300 text-base">{service.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-20 bg-gray-900/50">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Why Choose <span className="text-blue-500">Us</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  We don’t just deliver websites — we deliver measurable business results backed by strategy and precision.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "On-Time, Every Time",
                    desc: "Your deadlines matter. We deliver without compromising quality.",
                  },
                  {
                    title: "Performance Obsessed",
                    desc: "Fast load times, flawless UI, and zero guesswork. Every pixel has purpose.",
                  },
                  {
                    title: "Growth-Focused",
                    desc: "Our work is built to help your brand grow faster, smarter, and more sustainably.",
                  },
                  {
                    title: "Future-Proof Tech",
                    desc: "We build with modern stacks that scale as your business expands.",
                  },
                  {
                    title: "Transparent Process",
                    desc: "No jargon, no fluff — just clear communication and accountability.",
                  },
                  {
                    title: "Dedicated Support",
                    desc: "We stay with you post-launch to optimize, maintain, and keep everything running smoothly.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-black/50 border border-gray-700 rounded-lg p-8 text-center backdrop-blur-sm"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="text-xl font-bold text-blue-500 mb-4">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* About Web Total Solution */}
          <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="container mx-auto px-4 text-center">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-8"
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
                We’re a team of designers, developers, and strategists building digital products that actually perform.
                From startups to established brands, we help businesses turn ideas into impact.
              </motion.p>

              <motion.div
                className="bg-gray-900/50 border border-gray-700 rounded-lg max-w-xl mx-auto p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-blue-500 mb-4">What We Deliver</h3>
                <ul className="text-gray-300 space-y-3 text-left inline-block">
                  <li>✓ Custom Websites & Web Apps</li>
                  <li>✓ UI/UX Design</li>
                  <li>✓ SEO & Performance Optimization</li>
                  <li>✓ Ongoing Maintenance & Growth Support</li>
                </ul>
              </motion.div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 bg-black text-center border-t border-gray-800">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Ready to Build Something That Performs?
              </h2>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300"
              >
                Start a Project
              </Link>
              <p className="text-gray-400 text-sm mt-4">
                No pressure — just a quick chat about your goals.
              </p>
            </motion.div>
          </section>
        </main>
      </SmoothScrollProvider>
    </>
  );
}
