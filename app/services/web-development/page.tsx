'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaRocket, FaMobileAlt, FaSearch, FaLaptopCode, FaCogs, FaServer } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiGraphql, SiPostgresql, SiVercel } from 'react-icons/si';

// Metadata needs to be in a separate layout or handled differently in 'use client' components
// Since this is a page component, we'll focus on the UI. Metadata export works in server components.
// If you need metadata, it should be in layout.tsx or a separate server wrapper.

const features = [
  {
    icon: FaReact,
    title: 'Modern Frameworks',
    desc: 'Built with Next.js and React for lightning-fast performance and SEO dominance.',
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile-First Design',
    desc: 'Responsive layouts that look perfect on every device, from mobile to 4K desktop.',
  },
  {
    icon: FaSearch,
    title: 'SEO Optimized',
    desc: 'Technical SEO best practices built-in from day one to rank higher on Google.',
  },
  {
    icon: FaCogs,
    title: 'Scalable Architecture',
    desc: 'Clean, maintainable code designed to grow with your business needs.',
  },
  {
    icon: FaRocket,
    title: 'Performance First',
    desc: 'Optimized assets and server-side rendering for near-instant page loads.',
  },
  {
    icon: FaServer,
    title: 'Secure Backend',
    desc: 'Robust API integration and secure database management.',
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "We analyze your business goals, target audience, and competition to build a roadmap for success."
  },
  {
    num: "02",
    title: "UI/UX Architecture",
    desc: "Designing intuitive user flows and high-fidelity wireframes that align with your brand identity."
  },
  {
    num: "03",
    title: "Agile Development",
    desc: "Writing clean, semantic code with regular updates and feedback loops to ensure alignment."
  },
  {
    num: "04",
    title: "Testing & Launch",
    desc: "Rigorous testing across devices and browsers, followed by a seamless deployment to production."
  }
];

const techStack = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: FaNodeJs },
  { name: "GraphQL", icon: SiGraphql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Vercel", icon: SiVercel },
];

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-blue-400 text-xs font-semibold tracking-wide uppercase">Web Development Services</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Digital Products</span> That Scale
              </h1>

              <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
                We engineer high-performance, secure, and scalable web solutions tailored to drive your business growth. From complex web apps to marketing sites, we deliver excellence.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-1"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/work"
                  className="px-8 py-4 border border-gray-700 hover:border-blue-500/50 text-gray-300 hover:text-white rounded-full transition-all duration-300 backdrop-blur-md hover:bg-white/5"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl shadow-blue-900/20 group">
                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10 pointer-events-none" />
                <Image
                  src="/images/web-dev-hero.png"
                  alt="Advanced Web Development"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0F0F0F] relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Our <span className="text-blue-500">Solutions</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We don&apos;t just write code; we build improved digital capabilities for your organization.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-blue-500/30 group transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-2xl text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Our Proven <br /><span className="text-blue-500">Development Process</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                We follow a rigorous, agile methodology to ensure your project is delivered on time, on budget, and beyond expectations.
              </p>
              <div className="hidden lg:block relative h-[300px] w-full rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/50">
                {/* Abstract graphical representation or code snippet could go here */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-700">
                  <FaLaptopCode className="text-9xl opacity-20" />
                </div>
              </div>
            </motion.div>

            <div className="space-y-8">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-6 relative"
                >
                  {/* Vertical Line */}
                  {idx !== processSteps.length - 1 && (
                    <div className="absolute left-[27px] top-16 bottom-[-32px] w-px bg-gray-800" />
                  )}

                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center font-bold text-blue-500 relative z-10">
                    {step.num}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-[#0F0F0F] border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Powered by <span className="text-blue-500">Next-Gen Technology</span>
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-80">
            {techStack.map((tech, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center gap-3 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-black border border-gray-800 flex items-center justify-center group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
                  <tech.icon className="text-3xl text-gray-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <span className="text-sm font-medium text-gray-500 group-hover:text-gray-300 transition-colors">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-blue-900/20" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6">Ready to Build Your <br /><span className="text-blue-500">Digital Future?</span></h2>
            <p className="text-gray-300 text-lg mb-10">
              Let&apos;s create a web experience that sets you apart from the competition.
              Schedule a consultation today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <FaRocket className="text-blue-600" />
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}