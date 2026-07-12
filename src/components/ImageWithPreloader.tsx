"use client";

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { Loader2 } from 'lucide-react';

export default function ImageWithPreloader(props: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full">
      {/* Skeleton Preloader */}
      {isLoading && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse flex flex-col items-center justify-center text-brand-blue z-10 backdrop-blur-sm">
          <Loader2 className="w-8 h-8 animate-spin opacity-80" />
        </div>
      )}

      {/* Actual Image */}
      <Image
        {...props}
        unoptimized={true} // Bypasses Next.js optimization which often times out with microlink.io
        onLoad={() => setIsLoading(false)}
        className={`${props.className || ''} ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  );
}
