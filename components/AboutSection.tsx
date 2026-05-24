'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaRocket, FaChartLine, FaBolt, FaCheckCircle } from 'react-icons/fa';

const metrics = [
    { label: 'Years Combined Experience', value: '18+', icon: '🏆' },
    { label: 'Projects Delivered', value: '320+', icon: '🚀' },
    { label: 'Avg. Conversion Lift', value: '2.4x', icon: '📈' },
    { label: 'Avg. Page Speed', value: '≤ 1.6s', icon: '⚡' },
];

const workProcess = [
    {
        step: '01',
        title: 'Discovery',
        description: 'Clarify goals, users, and success metrics.',
        icon: FaRocket,
        color: 'from-blue-500 to-cyan-500'
    },
    {
        step: '02',
        title: 'Design',
        description: 'Prototypes and tests, not guesses.',
        icon: FaChartLine,
        color: 'from-purple-500 to-pink-500'
    },
    {
        step: '03',
        title: 'Build',
        description: 'Solid engineering, CI, and observability.',
        icon: FaBolt,
        color: 'from-orange-500 to-red-500'
    },
    {
        step: '04',
        title: 'Optimize',
        description: 'Data-driven iteration after launch.',
        icon: FaCheckCircle,
        color: 'from-green-500 to-emerald-500'
    },
];

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.span
                        className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold mb-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        WHO WE ARE
                    </motion.span>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                            About Us
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We partner with startups and growth-stage companies to ship high-quality web products.
                        Our team focuses on <span className="text-white font-semibold">simplicity, performance, and measurable business results</span> — not bells and whistles.
                    </p>
                </motion.div>

                {/* Metrics Grid */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={metric.label}
                            className="relative group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 group-hover:border-blue-500/50 rounded-2xl p-6 text-center transition-all duration-300">
                                <div className="text-4xl mb-3">{metric.icon}</div>
                                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                    {metric.value}
                                </div>
                                <div className="text-sm text-gray-400 font-medium">{metric.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* How We Work Section */}
                <motion.div
                    className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 md:p-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                How We Work
                            </span>
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Our proven process ensures exceptional results at every stage of your project
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        {workProcess.map((process, index) => {
                            const Icon = process.icon;
                            return (
                                <motion.div
                                    key={process.step}
                                    className="relative group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${process.color} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                                    <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 group-hover:border-gray-600 rounded-xl p-6 h-full transition-all duration-300">
                                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${process.color} mb-4`}>
                                            <Icon className="text-white text-xl" />
                                        </div>
                                        <div className="text-sm text-gray-500 font-mono mb-2">{process.step}</div>
                                        <h4 className="text-xl font-bold text-white mb-2">{process.title}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{process.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <Link
                            href="/contact"
                            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <FaRocket className="group-hover:rotate-12 transition-transform duration-300" />
                                Start a Project
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                        <Link
                            href="/about"
                            className="px-8 py-4 border-2 border-gray-700 hover:border-blue-500 rounded-full text-gray-300 hover:text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                        >
                            Our Process
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
