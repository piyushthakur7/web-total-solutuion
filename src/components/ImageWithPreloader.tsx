"use client";

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

/**
 * Image with a skeleton placeholder while it loads.
 *
 * Portfolio screenshots are served from InsForge Storage (they used to be
 * hotlinked from microlink, which generated each one on demand and could not be
 * optimised), so next/image handles resizing and AVIF/WebP conversion normally.
 */
export default function ImageWithPreloader(props: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-slate-200 animate-pulse z-10"
        />
      )}

      <Image
        {...props}
        onLoad={() => setIsLoading(false)}
        className={`${props.className || ''} transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
}
