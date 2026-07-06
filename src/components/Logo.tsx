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
  // We increased the base height slightly, but will rely on CSS scale to make it pop.
  const heightMap = {
    sm: 'h-10',
    md: 'h-16', // 64px
    lg: 'h-20',
  };

  return (
    <div className={`flex items-center ${className}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        className="shrink-0 flex items-center justify-center relative"
      >
        <img
          src="/bhaskar_logo_1.png"
          alt="Web Total Solution Logo"
          // scale-[2] makes it 2x larger visually without taking up more physical space!
          className={`${heightMap[size]} w-auto object-contain drop-shadow-sm scale-[2.2] origin-left`}
        />
      </motion.div>
    </div>
  );
}
