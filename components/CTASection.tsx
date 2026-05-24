'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCalendarAlt } from 'react-icons/fa';

const CTASection: React.FC = () => {
    // TODO: Replace with actual Calendly URL when available
    const calendlyUrl = 'https://calendly.com/webtotalsolution';

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
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        {/* Primary CTA — Request Proposal (goes to contact form) */}
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
                        >
                            Request Proposal
                        </Link>

                        {/* Secondary CTA — Book a Call (opens Calendly in new tab) */}
                        <a
                            href={calendlyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-white rounded-full text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                        >
                            <FaCalendarAlt className="group-hover:rotate-12 transition-transform duration-300" />
                            Book a Call
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
