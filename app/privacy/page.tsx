'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CustomCursor from '../../components/CustomCursor';
import SmoothScrollProvider from '../../components/SmoothScrollProvider';
import Link from 'next/link';
import { FaShieldAlt } from 'react-icons/fa';

// TODO: Replace placeholder privacy policy content with actual legal content reviewed by a lawyer
export default function PrivacyPolicyPage() {
  return (
    <>
      <CustomCursor />
      <SmoothScrollProvider>
        <main className="min-h-screen bg-black text-white pt-20 relative overflow-hidden">
          {/* Hero Section */}
          <section className="relative py-28 md:py-36 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
              <motion.div
                className="text-center max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.span
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <FaShieldAlt />
                  PRIVACY &amp; DATA PROTECTION
                </motion.span>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                  Privacy{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Policy
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
                  Your privacy is important to us. This policy outlines how Web Total Solution collects, uses, and protects your personal information.
                </p>

                <p className="text-sm text-gray-500">
                  Last updated: May 1, 2026 &bull; Effective immediately
                </p>
              </motion.div>
            </div>
          </section>

          {/* Content */}
          <section className="pb-24 relative">
            <div className="container mx-auto px-6">
              <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Sections */}
                <div className="space-y-10">
                  {/* 1. Information We Collect */}
                  <div className="bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-800 rounded-2xl p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">1. Information We Collect</h2>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                      <p>We may collect the following types of information:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong className="text-white">Personal Information:</strong> Name, email address, phone number, and company name when you fill out our contact form or engage our services.</li>
                        <li><strong className="text-white">Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referral sources.</li>
                        <li><strong className="text-white">Cookies:</strong> We use cookies and similar tracking technologies to improve your browsing experience and analyze site traffic.</li>
                      </ul>
                    </div>
                  </div>

                  {/* 2. How We Use Your Information */}
                  <div className="bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-800 rounded-2xl p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                      <p>Your information is used for the following purposes:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>To respond to your inquiries and provide the services you request</li>
                        <li>To send you project updates, proposals, and relevant communications</li>
                        <li>To improve our website and services based on usage analytics</li>
                        <li>To comply with legal obligations and protect our rights</li>
                      </ul>
                    </div>
                  </div>

                  {/* 3. Data Sharing */}
                  <div className="bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-800 rounded-2xl p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">3. Data Sharing &amp; Third Parties</h2>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                      <p>We do not sell your personal information. We may share data with:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Trusted service providers who assist in operating our website (e.g., analytics, hosting)</li>
                        <li>Legal authorities when required by law</li>
                        <li>Business partners only with your explicit consent</li>
                      </ul>
                    </div>
                  </div>

                  {/* 4. Data Security */}
                  <div className="bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-800 rounded-2xl p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">4. Data Security</h2>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                      <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
                    </div>
                  </div>

                  {/* 5. Your Rights */}
                  <div className="bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-800 rounded-2xl p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">5. Your Rights</h2>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                      <p>You have the right to:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Access the personal data we hold about you</li>
                        <li>Request correction of inaccurate data</li>
                        <li>Request deletion of your data (subject to legal obligations)</li>
                        <li>Opt out of marketing communications at any time</li>
                      </ul>
                    </div>
                  </div>

                  {/* 6. Contact */}
                  <div className="bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-800 rounded-2xl p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">6. Contact Us</h2>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                      <p>If you have questions about this Privacy Policy, please contact us:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Email: <a href="mailto:info@webtotalsolution.com" className="text-blue-400 hover:text-blue-300 transition-colors">info@webtotalsolution.com</a></li>
                        <li>Phone: +91 6291 519 364</li>
                        <li>Address: Kolkata, West Bengal, India</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <motion.div
                  className="mt-16 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-2xl p-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Questions About Your Privacy?
                  </h3>
                  <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    We take your privacy seriously. If you have any concerns, don&rsquo;t hesitate to reach out.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-2xl hover:shadow-blue-500/30 rounded-full font-semibold text-white transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </motion.div>

                {/* Footer note */}
                <div className="mt-12 text-center text-sm text-gray-600">
                  <p>
                    © {new Date().getFullYear()} Web Total Solution. All rights reserved.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </SmoothScrollProvider>
    </>
  );
}
