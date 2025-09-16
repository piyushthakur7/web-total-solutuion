'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-gray-900 border-t border-gray-800 text-gray-400">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left"
        >
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Web Total Solution</h3>
            <p className="text-gray-400">
              We’re a web development agency building scalable digital products
              using Next.js, React, MERN, WordPress, UI/UX design, and digital
              marketing solutions.
            </p>
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
              {/* <li><a href="/clients" className="hover:text-white">Clients</a></li>
              <li><a href="/testimonials" className="hover:text-white">Testimonials</a></li> */}
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
