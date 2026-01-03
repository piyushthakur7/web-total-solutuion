'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Web Development',
    subtitle: 'Scalable Systems',
    desc: 'High-performance web applications built with Next.js and React. We focus on speed, security, and scalability.',
    tags: ['Next.js', 'React', 'Node.js'],
    href: '/services/web-development',
  },
  {
    id: '02',
    title: 'E-Commerce',
    subtitle: 'Revenue Driven',
    desc: 'Custom Shopify and headless commerce solutions designed to convert visitors into loyal customers.',
    tags: ['Shopify', 'Woocommerce', 'Stripe'],
    href: '/services/e-commerce-solution',
  },
  {
    id: '03',
    title: 'UI/UX Design',
    subtitle: 'Visual storytelling',
    desc: 'User-centric interfaces that blend aesthetics with functionality. We design for clarity and impact.',
    tags: ['Figma', 'Prototyping', 'Design Systems'],
    href: '/services/ui-ux-design',
  },
  {
    id: '04',
    title: 'Growth & SEO',
    subtitle: 'Organic Traffic',
    desc: 'Data-driven strategies to increase your visibility and drive qualified leads to your digital products.',
    tags: ['Technical SEO', 'Analytics', 'Content'],
    href: '/services/digital-marketing',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Expertise
            </h2>
            <p className="text-gray-400 max-w-xl text-lg">
              We translate business goals into digital reality through code and design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <Link href="/services" className="text-white border-b border-white pb-1 hover:text-blue-400 hover:border-blue-400 transition-colors">
              View all services
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, idx) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Link href={s.href} className="group block h-full">
                <div className="glass-panel p-10 rounded-3xl h-full transition-all duration-500 hover:bg-white/[0.08] hover:scale-[1.01] relative overflow-hidden">

                  <div className="absolute top-8 right-8 text-gray-600 font-mono text-sm group-hover:text-white transition-colors">
                    /{s.id}
                  </div>

                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{s.title}</h3>
                    <p className="text-sm font-mono text-gray-500 uppercase tracking-wider">{s.subtitle}</p>
                  </div>

                  <p className="text-gray-400 mb-8 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {s.desc}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex gap-3">
                      {s.tags.map(tag => (
                        <span key={tag} className="text-xs text-gray-500 border border-white/10 px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 transform group-hover:-rotate-45">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
