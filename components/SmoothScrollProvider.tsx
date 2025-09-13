'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const tickerCallbackRef = useRef<((time: number) => void) | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize Lenis
    const lenis = new Lenis();

    lenisRef.current = lenis;

    // Connect Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Store ticker callback in ref for proper cleanup
    tickerCallbackRef.current = (time: number) => {
      lenis.raf(time * 1000);
    };
    
    gsap.ticker.add(tickerCallbackRef.current);
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      
      // Properly remove the ticker callback using the stored ref
      if (tickerCallbackRef.current) {
        gsap.ticker.remove(tickerCallbackRef.current);
        tickerCallbackRef.current = null;
      }
      
      // Proper ScrollTrigger cleanup
      ScrollTrigger.killAll();
      ScrollTrigger.clearScrollMemory();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider;