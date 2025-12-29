'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const portfolio = [
    {
        id: 'banerjee-academy',
        title: 'Banerjee Academy — EdTech Platform',
        short: 'Empowering careers with practical training in Accounting, GST, and SAP.',
        tech: ['Next.js', 'React', 'Node', 'Vercel'],
        img: '/projects/banerjee.png',
        link: 'https://www.banerjeeacademy.com',
    },
    {
        id: 'fairmount',
        title: 'Fairmount Photographys — Portfolio',
        short: 'Cinematic and elegant portfolio for high-end editorial and portrait photography.',
        tech: ['React', 'Vite', 'Tailwind', 'Motion'],
        img: '/projects/fairmount.png',
        link: 'https://www.fairmountphotographys.com',
    },
    {
        id: 'bms-scrubbers',
        title: 'BMS Scrubber — Industrial Solutions',
        short: 'Advanced industrial cleaning equipment and scrubber solutions for enterprise.',
        tech: ['Next.js', 'Tailwind', 'Postgres'],
        img: '/projects/bms.png',
        link: 'https://www.bmsscrubber.com',
    },
    {
        id: 'amiora',
        title: 'Amiora Diamonds — Luxury Jewelry',
        short: 'Premium fine jewelry e-commerce with a focus on craft and timeless designs.',
        tech: ['React', 'Vite', 'Shopify', 'Analytics'],
        img: '/projects/amiora.png',
        link: 'https://www.amioradiamonds.com',
    },
];

const PortfolioSection: React.FC = () => {
    return (
        <section id="our-work" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between mb-8">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-blue-400"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Recent Work
                    </motion.h2>
                    <Link href="/portfolio" className="text-sm text-gray-300 underline">
                        View full portfolio
                    </Link>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {portfolio.map((p) => (
                        <motion.div
                            key={p.id}
                            whileHover={{ scale: 1.025 }}
                            className="relative rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-b from-black/60 to-gray-900"
                        >
                            {/* image area (if images missing, fallback to gradient) */}
                            <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 flex items-end">
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                                    <p className="text-sm text-gray-200/80 mt-2 max-w-prose">{p.short}</p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {p.tech.map((t) => (
                                            <span key={t} className="text-xs text-gray-300 bg-black/40 px-2 py-1 rounded-full">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 flex items-center justify-between border-t border-gray-800">
                                <Link href={p.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-400 hover:underline">
                                    Visit Live Site
                                </Link>
                                <Link
                                    href="/contact"
                                    className="text-sm px-4 py-2 rounded-full bg-white text-black font-semibold"
                                >
                                    Start similar
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
