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
      
      // Toggle cursor hiding class based on whether custom cursor should render
      if (shouldShow) {
        document.body.classList.add('custom-cursor-active');
      } else {
        document.body.classList.remove('custom-cursor-active');
      }
    };

    checkShouldRender();
    
    // Set up event listeners
    const handleResize = () => checkShouldRender();
    const handleMotionChange = () => checkShouldRender();
    
    window.addEventListener('resize', handleResize);
    
    // Listen for changes to motion preferences
    const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointerMediaQuery = window.matchMedia('(pointer: coarse)');
    
    motionMediaQuery.addEventListener('change', handleMotionChange);
    pointerMediaQuery.addEventListener('change', handleMotionChange);

    // Cleanup function for event listeners
    const cleanup = () => {
      window.removeEventListener('resize', handleResize);
      motionMediaQuery.removeEventListener('change', handleMotionChange);
      pointerMediaQuery.removeEventListener('change', handleMotionChange);
      // Always remove the cursor hiding class on cleanup
      document.body.classList.remove('custom-cursor-active');
    };

    // Early return if cursor shouldn't render
    if (!shouldRender) {
      return cleanup;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      return cleanup;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return cleanup;
    }

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      lastPos.current = { ...mousePos.current };
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Add new particles when mouse moves
      const distance = Math.sqrt(
        Math.pow(mousePos.current.x - lastPos.current.x, 2) +
        Math.pow(mousePos.current.y - lastPos.current.y, 2)
      );
      
      if (distance > 2) {
        // Cap particles at 300 to prevent unbounded arrays
        const maxParticles = 300;
        const particlesToAdd = Math.min(3, maxParticles - particles.current.length);
        
        for (let i = 0; i < particlesToAdd; i++) {
          particles.current.push(createParticle(mousePos.current.x, mousePos.current.y));
        }
      }
    };

    // Create particle
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

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.current = particles.current.filter(particle => {
        // Update particle
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 1;
        particle.vx *= 0.98; // friction
        particle.vy *= 0.98;
        
        // Draw particle
        const alpha = Math.max(0, particle.life / particle.maxLife);
        const size = Math.max(0.1, particle.size * alpha);
        
        ctx.save();
        ctx.globalAlpha = alpha * 0.6;
        
        // Create gradient for smoky effect
        const gradientRadius = Math.max(1, size * 2); // Ensure minimum radius of 1
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, gradientRadius
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(0.5, 'rgba(100, 149, 237, 0.4)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, gradientRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        
        return particle.life > 0;
      });
      
      // Draw main cursor
      if (mousePos.current.x !== 0 || mousePos.current.y !== 0) {
        ctx.save();
        ctx.globalAlpha = 0.8;
        
        // Main cursor dot
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
        
        // Outer ring
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(mousePos.current.x, mousePos.current.y, 15, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.restore();
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
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

  // Don't render if conditions aren't met
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