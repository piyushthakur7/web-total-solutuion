'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CTASection: React.FC = () => {
    return (
        <section id="cta" className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ scale: 0.98, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to build something exceptional?</h2>
                    <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
                        Tell us about your project and we&apos;ll propose a plan with timeline and predictable costs.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition"
                        >
                            Request Proposal
                        </Link>
                        <Link
                            href="/contact"
                            className="px-6 py-3 border border-white rounded-full text-white hover:bg-white/10 transition"
                        >
                            Book a Call
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
