'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    id: 'web-dev',
    title: 'Web Development',
    subtitle: 'Custom web apps & platforms',
    desc: 'React / Next.js / Node — scalable, SEO-friendly, and fast. We handle integrations, security, and performance tuning.',
    bullets: ['Next.js', 'SSR & Static', 'API integrations', 'Performance budgets'],
    cta: '/services/web-development',
  },
  {
    id: 'ecom',
    title: 'E-Commerce',
    subtitle: 'Conversion-first stores',
    desc: 'Shopify, WooCommerce or headless storefronts — optimized catalog, checkout, and analytics for growth.',
    bullets: ['Shopify', 'Headless', 'Checkout optimization', 'Analytics'],
    cta: '/services/ecommerce',
  },
  {
    id: 'uiux',
    title: 'UI / UX Design',
    subtitle: 'Design that converts',
    desc: 'User research, wireframes, and high-fidelity UI that reduces friction and increases conversion rates.',
    bullets: ['User flows', 'Figma prototypes', 'Design systems', 'Usability testing'],
    cta: '/services/ui-ux',
  },
  {
    id: 'seo',
    title: 'SEO & Growth',
    subtitle: 'Sustained organic growth',
    desc: 'Technical SEO, content strategy and analytics work together to increase visibility and qualified traffic.',
    bullets: ['Technical audits', 'Content strategy', 'Slow to fast wins', 'Core Web Vitals'],
    cta: '/services/seo',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-blue-400 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Core Services
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <motion.article
              key={s.id}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-gray-900/60 to-black/40 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-300">{s.title}</h3>
                  <p className="text-sm text-gray-400">{s.subtitle}</p>
                </div>
                <div className="text-sm text-gray-500 font-mono">{s.id.toUpperCase()}</div>
              </div>

              <p className="text-gray-300 mb-4 text-sm">{s.desc}</p>

              <ul className="text-xs text-gray-400 mb-6 space-y-1">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-none">
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="#7C3AED"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between">
                <Link
                  href="/services"
                  className="text-sm font-semibold text-white bg-blue-600/90 px-4 py-2 rounded-full hover:opacity-95"
                >
                  Learn More
                </Link>
                <span className="text-xs text-gray-500">Avg start: ₹3k+</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
