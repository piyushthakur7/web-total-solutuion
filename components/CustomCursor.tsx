'use client';

import React, { useEffect, useRef, useState } from 'react';

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile or has touch capabilities
    const checkMobile = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(hasTouch || isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const canvas = canvasRef.current;
    if (!canvas || isMobile) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      
      lastPos.current = { ...mousePos.current };
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Add new particles when mouse moves
      const distance = Math.sqrt(
        Math.pow(mousePos.current.x - lastPos.current.x, 2) +
        Math.pow(mousePos.current.y - lastPos.current.y, 2)
      );
      
      if (distance > 2) {
        for (let i = 0; i < 3; i++) {
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
        life: 1,
        maxLife: Math.random() * 60 + 40,
        size: Math.random() * 3 + 1,
      };
    };

    // Animation loop
    const animate = () => {
      if (!ctx || isMobile) return;
      
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
        const alpha = particle.life / particle.maxLife;
        const size = particle.size * alpha;
        
        ctx.save();
        ctx.globalAlpha = alpha * 0.6;
        
        // Create gradient for smoky effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, size * 2
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(0.5, 'rgba(100, 149, 237, 0.4)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size * 2, 0, Math.PI * 2);
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
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', checkMobile);
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMobile]);

  // Don't render on mobile devices
  if (isMobile) {
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