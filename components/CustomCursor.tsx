'use client';

import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

const CustomCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const lastPos = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const [shouldRender, setShouldRender] = useState(false);

  // Offscreen canvas for particle sprite
  const spriteRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Check accessibility preferences and device capabilities
    const checkShouldRender = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

      const isMobile = hasTouch || isSmallScreen;
      const hasMotionRestrictions = prefersReducedMotion || hasCoarsePointer;

      const shouldShow = !isMobile && !hasMotionRestrictions;
      setShouldRender(shouldShow);

      // Toggle cursor hiding class
      if (shouldShow) {
        document.body.classList.add('custom-cursor-active');
      } else {
        document.body.classList.remove('custom-cursor-active');
      }
    };

    checkShouldRender();

    // Create sprite once
    if (typeof document !== 'undefined' && !spriteRef.current) {
      const c = document.createElement('canvas');
      c.width = 32;
      c.height = 32;
      const cx = c.getContext('2d');
      if (cx) {
        const gradient = cx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(0.5, 'rgba(100, 149, 237, 0.4)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        cx.fillStyle = gradient;
        cx.fillRect(0, 0, 32, 32);
        spriteRef.current = c;
      }
    }

    const handleResize = () => checkShouldRender();
    const handleMotionChange = () => checkShouldRender();

    window.addEventListener('resize', handleResize);

    const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointerMediaQuery = window.matchMedia('(pointer: coarse)');

    motionMediaQuery.addEventListener('change', handleMotionChange);
    pointerMediaQuery.addEventListener('change', handleMotionChange);

    const cleanup = () => {
      window.removeEventListener('resize', handleResize);
      motionMediaQuery.removeEventListener('change', handleMotionChange);
      pointerMediaQuery.removeEventListener('change', handleMotionChange);
      document.body.classList.remove('custom-cursor-active');
    };

    if (!shouldRender) {
      return cleanup;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      return cleanup;
    }

    const ctx = canvas.getContext('2d', { alpha: true }); // Optimized context
    if (!ctx) {
      return cleanup;
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      lastPos.current = { ...mousePos.current };
      mousePos.current = { x: e.clientX, y: e.clientY };

      const distance = Math.sqrt(
        Math.pow(mousePos.current.x - lastPos.current.x, 2) +
        Math.pow(mousePos.current.y - lastPos.current.y, 2)
      );

      if (distance > 2) {
        // Reduced max particles for performance
        const maxParticles = 150;
        const particlesToAdd = Math.min(2, maxParticles - particles.current.length);

        for (let i = 0; i < particlesToAdd; i++) {
          particles.current.push(createParticle(mousePos.current.x, mousePos.current.y));
        }
      }
    };

    const createParticle = (x: number, y: number): Particle => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.5 + 0.2;

      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: Math.random() * 60 + 40,
        maxLife: Math.random() * 60 + 40,
        size: Math.random() * 3 + 1,
      };
    };

    const animate = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 1;
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        const alpha = Math.max(0, particle.life / particle.maxLife);
        const size = Math.max(0.1, particle.size * alpha);

        if (spriteRef.current) {
          ctx.globalAlpha = alpha * 0.6;
          // Draw sprite centered at particle position
          // Sprite is 32x32, we map size to scaling
          // Original logic: radius = gradientRadius ~ size*2. 
          // So diameter = size*4.
          const drawSize = size * 4;
          ctx.drawImage(spriteRef.current, particle.x - drawSize / 2, particle.y - drawSize / 2, drawSize, drawSize);
        }

        return particle.life > 0;
      });

      // Draw main cursor
      if (mousePos.current.x !== 0 || mousePos.current.y !== 0) {
        ctx.save();
        ctx.globalAlpha = 0.8;

        // Use standard drawing for the main cursor as it's just one item
        const gradient = ctx.createRadialGradient(
          mousePos.current.x, mousePos.current.y, 0,
          mousePos.current.x, mousePos.current.y, 8
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.7, 'rgba(100, 149, 237, 0.8)');
        gradient.addColorStop(1, 'rgba(100, 149, 237, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mousePos.current.x, mousePos.current.y, 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(mousePos.current.x, mousePos.current.y, 15, 0, Math.PI * 2);
        ctx.stroke();

        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      cleanup();
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [shouldRender]);

  if (!shouldRender) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="cursor-follow"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;