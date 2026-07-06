"use client";

import React from 'react';
import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark'; // kept for compatibility if passed by parent
}

export default function Logo({
  className = '',
  size = 'md',
  theme = 'light',
}: LogoProps) {
  // Sizing map defining strict heights to ensure navbar breadth isn't increased
  const heightMap = {
    sm: 'h-8',   // 32px
    md: 'h-11',  // 44px
    lg: 'h-14',  // 56px
  };

  return (
    <div className={`flex items-center ${className}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        className="shrink-0 flex items-center justify-center"
      >
        <img
          src="/images/image.png"
          alt="Web Total Solution Logo"
          className={`${heightMap[size]} w-auto object-contain drop-shadow-sm`}
        />
      </motion.div>
    </div>
  );
}
