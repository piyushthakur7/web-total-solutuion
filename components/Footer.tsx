'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { siteConfig } from '../data/siteConfig';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-gray-900 border-t border-gray-800 text-gray-400">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left"
        >
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">{siteConfig.name}</h3>
            <p className="text-gray-400 mb-2">
              {siteConfig.description}
            </p>

            {/* Location & Email */}
            <div className="text-sm text-gray-500 space-y-1 mt-3">
              <p>📍 Kolkata, West Bengal, India</p>
              <p>
                ✉️{' '}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex mt-4 space-x-4 justify-center md:justify-start">
              {/* TODO: Replace placeholder URLs with real ones if needed */}
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Twitter / X">
                <FaXTwitter size={20} />
              </a>
              <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Our Services</h4>
            <ul className="space-y-2">
              <li>Web Development (Next.js, React, MERN, WordPress)</li>
              <li>UI/UX Design</li>
              <li>Digital Marketing</li>
              <li>E-Commerce Solutions</li>
              <li>Website Maintenance</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/terms" className="hover:text-white">Terms &amp; Conditions</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          © {new Date().getFullYear()} Web Total Solution. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
