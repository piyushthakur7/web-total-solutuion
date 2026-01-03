'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import SpotlightCard from './SpotlightCard';
import { ArrowUpRight } from 'lucide-react';

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
        <section id="our-work" className="py-32 bg-black relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-blue-900/10 blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Selected Works
                        </h2>
                        <h3 className="text-xl text-gray-400 font-light max-w-2xl">
                            Digital products that solve real business problems.
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="hidden md:block"
                    >
                        <Link href="/work" className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                            View All Projects
                            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid gap-12 md:grid-cols-2">
                    {portfolio.map((p, i) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                            className="group h-full"
                        >
                            <SpotlightCard className="h-full bg-white/[0.02] border-white/5 hover:border-white/20 transition-all duration-500 rounded-3xl overflow-hidden flex flex-col">

                                {/* Image Area */}
                                <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-900">
                                    <Image
                                        src={p.img}
                                        alt={p.title}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                                </div>

                                {/* Content Area */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{p.title}</h4>
                                            <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">{p.type}</p>
                                        </div>
                                        <Link
                                            href={p.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-white transform group-hover:scale-110 group-hover:bg-white/10 transition-all"
                                        >
                                            <ArrowUpRight size={20} />
                                        </Link>
                                    </div>

                                    <p className="text-gray-400 leading-relaxed mb-8">
                                        {p.short}
                                    </p>

                                    <div className="mt-auto flex flex-wrap gap-2">
                                        {p.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 text-xs font-medium text-gray-400 bg-white/5 rounded-full border border-white/5">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16 md:hidden">
                    <Link href="/work" className="inline-flex items-center gap-2 text-white border-b border-white pb-1">
                        View all projects <ArrowUpRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
