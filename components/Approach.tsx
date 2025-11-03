'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { approachSteps } from '../data/approach';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Approach: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      stepsRef.current.forEach((step) => {
        if (step) {
          // Fade + pop animation
          gsap.fromTo(
            step,
            { opacity: 0, y: 100, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: step,
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse',
              },
            }
          );

          // Icon animation
          gsap.fromTo(
            step.querySelector('.step-icon'),
            { scale: 0, rotation: -180 },
            {
              scale: 1,
              rotation: 0,
              duration: 0.6,
              delay: 0.3,
              ease: 'back.out(1.7)',
              scrollTrigger: {
                trigger: step,
                start: 'top bottom-=80',
              },
            }
          );
        }
      });

      // Line animation
      gsap.fromTo(
        '.step-connector',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-black relative" id="approach">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Approach
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            A proven process that delivers exceptional results every time.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center line for large screens */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 hidden lg:block">
            <div className="step-connector h-full w-full origin-top bg-gradient-to-b from-blue-500 to-purple-500"></div>
          </div>

          {approachSteps.map((step, index) => (
            <div
              key={step.id}
              ref={(el) => {
                stepsRef.current[index] = el;
              }}
              className={`flex flex-col lg:flex-row items-center mb-16 lg:mb-24 ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Text Block */}
              <div
                className={`lg:w-5/12 mb-8 lg:mb-0 ${
                  index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                }`}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold text-blue-400 mr-4">
                      {step.step.toString().padStart(2, '0')}
                    </span>
                    <h3 className="text-2xl font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Icon */}
              <div className="lg:w-2/12 flex justify-center mb-6 lg:mb-0">
                <div className="step-icon w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl text-white shadow-lg shadow-blue-500/30 relative z-10">
                  {step.icon}
                </div>
              </div>

              {/* Empty spacer for layout balance */}
              <div className="lg:w-5/12 hidden lg:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
