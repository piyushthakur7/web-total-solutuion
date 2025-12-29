'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

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
    // Disable on mobile/tablet (performance optimization)
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    tickerCallbackRef.current = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallbackRef.current);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      if (tickerCallbackRef.current) {
        gsap.ticker.remove(tickerCallbackRef.current);
        tickerCallbackRef.current = null;
      }
      ScrollTrigger.clearScrollMemory();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider;