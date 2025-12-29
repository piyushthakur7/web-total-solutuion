'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CustomCursor from '../../components/CustomCursor';
import SmoothScrollProvider from '../../components/SmoothScrollProvider';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const WorkParticles = dynamic(() => import('../../components/WorkParticles'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" />
});

export default function WorkPage() {

  // --- Projects ---
  const projects = [
    {
      title: "Banerjee Academy",
      description: "Professional EdTech platform offering virtual accounting, tax compliance training, and SAP certification.",
      image: "/projects/banerjee.png",
      link: "https://www.banerjeeacademy.com"
    },
    {
      title: "Fairmount Photographys",
      description: "High-end photography portfolio showcasing cinematic portraits, editorials, and architectural work.",
      image: "/projects/fairmount.png",
      link: "https://www.fairmountphotographys.com"
    },
    {
      title: "BMS Scrubber",
      description: "Industrial cleaning solutions website featuring advanced scrubber technology and enterprise equipment.",
      image: "/projects/bms.png",
      link: "https://www.bmsscrubber.com"
    },
    {
      title: "Amiora Diamonds",
      description: "Luxury e-commerce experience for fine jewelry, featuring timeless designs and premium craftsmanship.",
      image: "/projects/amiora.png",
      link: "https://www.amioradiamonds.com"
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

            <WorkParticles />

            <div className="absolute inset-0 flex items-center justify-center text-center px-4 pointer-events-none z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pointer-events-auto"
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
                    className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative w-full aspect-video bg-gray-700 text-gray-500 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
                      </div>
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm font-semibold inline-flex items-center gap-2 mt-auto"
                      >
                        Visit Website <span>→</span>
                      </Link>
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
