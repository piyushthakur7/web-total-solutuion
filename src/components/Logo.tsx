"use client";

import React from 'react';
import Image from 'next/image';

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
      <div
        className="shrink-0 flex items-center justify-center relative hover:scale-[1.05] transition-transform duration-300 ease-out"
      >
        <Image
          src="/bhaskar_logo_1.png"
          alt="Web Total Solution"
          // The source asset is square; declaring 240x80 gave next/image a false
          // aspect ratio and made it request a far larger variant than needed.
          width={320}
          height={320}
          sizes="160px"
          quality={75}
          priority
          // scale-[2.2] makes it larger visually without taking more layout space.
          className={`${heightMap[size]} w-auto object-contain drop-shadow-sm scale-[2.2] origin-left`}
        />
      </div>
    </div>
  );
}
