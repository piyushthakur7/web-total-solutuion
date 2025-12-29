'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import SpotlightCard from './SpotlightCard';

const portfolio = [
    {
        id: 'banerjee-academy',
        title: 'Banerjee Academy',
        type: 'EdTech Platform',
        short: 'Full-stack platform for virtual accounting training with SAP integration.',
        tech: ['Next.js', 'Postgres', 'Stripe'],
        img: '/projects/education.png',
        link: 'https://www.banerjeeacademy.com',
    },
    {
        id: 'fairmount',
        title: 'Fairmount Photographys',
        type: 'Creative Portfolio',
        short: 'Cinematic photography portfolio with immersive gallery interactions.',
        tech: ['React', 'Framer Motion', 'Vite'],
        img: '/projects/fintech.png',
        link: 'https://www.fairmountphotographys.com',
    },
    {
        id: 'bms-scrubbers',
        title: 'BMS Scrubber',
        type: 'Industrial E-commerce',
        short: 'Enterprise catalog for industrial cleaning solutions and equipment.',
        tech: ['Next.js', 'Sanity CMS', 'Tailwind'],
        img: '/projects/healthcare.png',
        link: 'https://www.bmsscrubber.com',
    },
    {
        id: 'amiora',
        title: 'Amiora Diamonds',
        type: 'Luxury E-commerce',
        short: 'Premium shopping experience for fine jewelry with 3D product view.',
        tech: ['Shopify Headless', 'Three.js', 'React'],
        img: '/projects/ecommerce.png',
        link: 'https://www.amioradiamonds.com',
    },
];

const PortfolioSection: React.FC = () => {
    return (
        <section id="our-work" className="py-32 bg-[#030014] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4">
                            Selected Works
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            We build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">digital products</span> that scale.
                        </h3>
                    </motion.div>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {portfolio.map((p, i) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <SpotlightCard className="h-full group hover:border-blue-500/50 transition-colors duration-500">
                                <div className="flex flex-col h-full">
                                    {/* Image / Gradient Placeholder */}
                                    <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-900 border-b border-white/5 group">
                                        {/* Rich Fallback Pattern */}
                                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-gray-900 to-black z-0" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                            <svg className="w-16 h-16 text-blue-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>

                                        {/* ideally we use real images, but if missing, fall back to nice gradient */}
                                        <Image
                                            src={p.img}
                                            alt={p.title}
                                            fill
                                            className="object-cover z-10 group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100 mix-blend-overlay md:mix-blend-normal"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-20" />
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h4 className="text-2xl font-bold text-white mb-1">{p.title}</h4>
                                                <p className="text-sm text-blue-400 font-mono">{p.type}</p>
                                            </div>
                                            <Link
                                                href={p.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/20 transition-all text-white transform -rotate-45 group-hover:rotate-0"
                                            >
                                                →
                                            </Link>
                                        </div>

                                        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                            {p.short}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {p.tech.map((t) => (
                                                <span key={t} className="text-xs font-medium text-gray-300 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link href="/work" className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors font-medium">
                        View all projects <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
