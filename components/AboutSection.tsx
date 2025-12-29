'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const metrics = [
    { label: 'Years Collective', value: '18+' },
    { label: 'Projects Delivered', value: '320+' },
    { label: 'Avg. Conversion Lift', value: '2.4x' },
    { label: 'Avg. Page Speed', value: '≤ 1.6s' },
];

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-black text-white">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-purple-400 mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        About Us
                    </motion.h2>
                    <p className="text-gray-300 mb-6 max-w-prose">
                        We partner with startups and growth-stage companies to ship high-quality web products.
                        Our team focuses on simplicity, performance, and measurable business results — not bells and whistles.
                        We help with product strategy, design systems, and long-term technical roadmaps.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {metrics.map((m) => (
                            <motion.div
                                key={m.label}
                                className="bg-gradient-to-b from-gray-900 to-black p-4 rounded-2xl text-center"
                            >
                                <div className="text-2xl font-bold text-white">{m.value}</div>
                                <div className="text-xs text-gray-400">{m.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-6">
                    <h4 className="text-lg font-semibold text-blue-300 mb-3">How we work</h4>
                    <ol className="list-decimal pl-5 text-gray-300 space-y-2">
                        <li>Discovery — clarify goals, users, and success metrics.</li>
                        <li>Design — prototypes and tests, not guesses.</li>
                        <li>Build — solid engineering, CI, and observability.</li>
                        <li>Optimize — data-driven iteration after launch.</li>
                    </ol>
                    <div className="mt-6 flex gap-3">
                        <Link
                            href="/contact"
                            className="px-4 py-2 bg-blue-600 rounded-full font-semibold hover:bg-blue-700 transition"
                        >
                            Start a Project
                        </Link>
                        <Link
                            href="/process"
                            className="px-4 py-2 border border-gray-700 rounded-full text-gray-300 hover:text-white hover:border-white transition"
                        >
                            Our Process
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
