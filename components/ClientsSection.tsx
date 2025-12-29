'use client';

import React from 'react';
import { motion } from 'framer-motion';

const clients = [
    { name: 'Novus Retail', logo: '/clients/novus.svg' },
    { name: 'Blue Harbor', logo: '/clients/blueharbor.svg' },
    { name: 'Astra Health', logo: '/clients/astra.svg' },
    { name: 'Bloom Studio', logo: '/clients/bloom.svg' },
    { name: 'RevLift', logo: '/clients/revlift.svg' },
];

const testimonials = [
    {
        quote:
            "They rebuilt our store and the result was immediate — faster load, cleaner UX, and a direct uplift in AOV. Not flashy, just effective.",
        author: 'Anita Rao — Head of eCommerce, RevLift',
        rating: 5,
    },
    {
        quote:
            "Delivered a complex portal on schedule. Security and performance were treated as first-class citizens. Great communication.",
        author: 'Dr. Suresh Patel — CTO, PulseHealth',
        rating: 5,
    },
    {
        quote:
            "Clear process, clear milestones, and high-quality engineering. Our retention improved after the redesign.",
        author: 'Maya Singh — Founder, Bloom Studio',
        rating: 4.9,
    },
];

const ClientsSection: React.FC = () => {
    return (
        <section id="clients" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
            <div className="container mx-auto px-6">
                <h3 className="text-2xl text-center font-semibold text-blue-400 mb-8">Trusted by</h3>

                <div className="flex items-center justify-center gap-8 flex-wrap mb-12">
                    {clients.map((c) => (
                        <div
                            key={c.name}
                            className="w-28 h-12 flex items-center justify-center bg-white/5 rounded-lg border border-gray-800"
                        >
                            <span className="text-sm text-gray-300">{c.name}</span>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.blockquote
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl border border-gray-800 bg-gradient-to-b from-black/60 to-gray-900"
                        >
                            <p className="text-gray-200 italic mb-4">“{t.quote}”</p>
                            <div className="text-sm text-gray-400">{t.author}</div>
                        </motion.blockquote>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
