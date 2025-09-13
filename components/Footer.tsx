'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Web Total Solution</h3>
            <p className="text-gray-400">Building digital experiences that matter</p>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500">
              © {new Date().getFullYear()} Web Total Solution. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;