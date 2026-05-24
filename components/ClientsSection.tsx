'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// TODO: Replace placeholder SVG logos with real client logos when available
const clients = [
    { name: 'Novus Retail', logo: '/clients/novus.svg' },
    { name: 'Blue Harbor', logo: '/clients/blueharbor.svg' },
    { name: 'Astra Health', logo: '/clients/astra.svg' },
    { name: 'Bloom Studio', logo: '/clients/bloom.svg' },
    { name: 'RevLift', logo: '/clients/revlift.svg' },
];

// SVG wordmark logo generator — creates simple text-based placeholder logos
const PlaceholderLogo: React.FC<{ name: string }> = ({ name }) => (
    <svg
        viewBox="0 0 140 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        role="img"
        aria-label={`${name} logo`}
    >
        <text
            x="70"
            y="25"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="currentColor"
            fontSize="14"
            fontWeight="600"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="1"
        >
            {name}
        </text>
        <rect x="1" y="1" width="138" height="38" rx="6" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" fill="none" />
    </svg>
);

const testimonials = [
    {
        quote:
            "They rebuilt our store and the result was immediate — faster load, cleaner UX, and a direct uplift in AOV. Not flashy, just effective.",
        name: 'Anita Rao',
        role: 'Head of eCommerce',
        company: 'RevLift',
        // TODO: Replace with real company URL
        companyUrl: 'https://revlift.com',
        avatar: 'https://ui-avatars.com/api/?name=Anita+Rao&background=3b82f6&color=fff&size=80',
        rating: 5,
    },
    {
        quote:
            "Delivered a complex portal on schedule. Security and performance were treated as first-class citizens. Great communication.",
        name: 'Dr. Suresh Patel',
        role: 'CTO',
        company: 'PulseHealth',
        // TODO: Replace with real company URL
        companyUrl: 'https://pulsehealth.com',
        avatar: 'https://ui-avatars.com/api/?name=Suresh+Patel&background=8b5cf6&color=fff&size=80',
        rating: 5,
    },
    {
        quote:
            "Clear process, clear milestones, and high-quality engineering. Our retention improved after the redesign.",
        name: 'Maya Singh',
        role: 'Founder',
        company: 'Bloom Studio',
        // TODO: Replace with real company URL
        companyUrl: 'https://bloomstudio.com',
        avatar: 'https://ui-avatars.com/api/?name=Maya+Singh&background=06b6d4&color=fff&size=80',
        rating: 4.9,
    },
];

const ClientsSection: React.FC = () => {
    return (
        <section id="clients" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
            <div className="container mx-auto px-6">
                <h3 className="text-2xl text-center font-semibold text-blue-400 mb-8">Trusted by</h3>

                {/* Client Logos — TODO: Replace PlaceholderLogo with real <Image> logos */}
                <div className="flex items-center justify-center gap-8 flex-wrap mb-12">
                    {clients.map((c) => (
                        <div
                            key={c.name}
                            className="w-36 h-12 flex items-center justify-center bg-white/5 rounded-lg border border-gray-800 text-gray-300 px-3"
                        >
                            <PlaceholderLogo name={c.name} />
                        </div>
                    ))}
                </div>

                {/* Testimonials */}
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
                            <p className="text-gray-200 italic mb-4">&ldquo;{t.quote}&rdquo;</p>

                            {/* Author with avatar */}
                            <div className="flex items-center gap-3">
                                <Image
                                    src={t.avatar}
                                    alt={`${t.name} avatar`}
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                    unoptimized
                                />
                                <div className="text-sm">
                                    <div className="text-white font-medium">{t.name}</div>
                                    <div className="text-gray-400">
                                        {t.role},{' '}
                                        {t.companyUrl ? (
                                            <a
                                                href={t.companyUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-400 hover:text-blue-300 transition-colors"
                                            >
                                                {t.company}
                                            </a>
                                        ) : (
                                            t.company
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.blockquote>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
