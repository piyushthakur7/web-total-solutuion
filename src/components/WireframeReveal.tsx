"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { animate, motion, useMotionTemplate, useMotionValue, useReducedMotion } from 'motion/react';

/** Where the divider rests after the opening sweep, as a % from the left. */
const REST_POSITION = 50;

/**
 * Blueprint drawing of the page in the screenshot underneath it. Positions are
 * percentages so the drawing lines up with the screenshot at every width.
 */
function Wireframe() {
  const line = 'absolute border border-brand-blue/70';
  const bar = 'absolute bg-brand-blue/25';
  const note = 'absolute hidden text-[11px] font-medium text-brand-blue sm:block';

  return (
    <div className="blueprint-grid absolute inset-0 bg-paper" aria-hidden="true">
      {/* Navigation */}
      <div className={`${line} left-[3%] top-[3%] h-[5%] w-[9%]`} />
      <div className={`${bar} left-[36%] top-[4.6%] h-[1.6%] w-[6%]`} />
      <div className={`${bar} left-[44%] top-[4.6%] h-[1.6%] w-[6%]`} />
      <div className={`${bar} left-[52%] top-[4.6%] h-[1.6%] w-[5%]`} />
      <div className={`${line} left-[87%] top-[3%] h-[5%] w-[10%] rounded-full`} />

      {/* Headline */}
      <div className={`${bar} left-[33%] top-[21%] h-[7.5%] w-[34%]`} />
      <div className={`${bar} left-[36%] top-[31%] h-[7.5%] w-[28%]`} />
      <span className={`${note} left-[69%] top-[23%]`}>Headline: one promise, five words</span>

      {/* Supporting copy */}
      <div className={`${bar} left-[30%] top-[44%] h-[1.4%] w-[40%]`} />
      <div className={`${bar} left-[30%] top-[47.2%] h-[1.4%] w-[40%]`} />
      <div className={`${bar} left-[39%] top-[50.4%] h-[1.4%] w-[22%]`} />

      {/* Calls to action */}
      <div className={`${line} left-[39%] top-[55.5%] h-[6%] w-[12%] rounded-full bg-brand-blue/15`} />
      <div className={`${line} left-[52.5%] top-[55.5%] h-[6%] w-[9%] rounded-full`} />
      <span className={`${note} left-[6%] top-[57%]`}>One primary action: start a free trial</span>

      {/* Product preview */}
      <div className={`${line} bottom-0 left-[9%] top-[71%] w-[82%] border-b-0`}>
        <div className="absolute inset-y-0 left-0 w-[15%] border-r border-brand-blue/70" />
        <div className="absolute left-[18%] top-[30%] h-[42%] w-[18%] border border-brand-blue/70" />
        <div className="absolute left-[38%] top-[30%] h-[42%] w-[18%] border border-brand-blue/70" />
        <div className="absolute left-[58%] top-[30%] h-[42%] w-[18%] border border-brand-blue/70" />
        <div className="absolute left-[78%] top-[30%] h-[42%] w-[19%] border border-brand-blue/70" />
      </div>
      <span className={`${note} left-[9%] top-[66%]`}>Show the product before the first scroll</span>
    </div>
  );
}

/**
 * Hero visual: the same page as a first wireframe and as the shipped product.
 * The divider sweeps across once on load, then follows the pointer, a touch
 * drag or the arrow keys.
 */
export default function WireframeReveal({
  src,
  alt,
  siteLabel,
}: {
  src: string;
  alt: string;
  /** Domain of the shipped site, shown in the caption. */
  siteLabel: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const position = useMotionValue(100);
  const [value, setValue] = useState(REST_POSITION);

  const clipPath = useMotionTemplate`inset(0 calc(100% - ${position}%) 0 0)`;
  const left = useMotionTemplate`${position}%`;

  useEffect(() => {
    if (reduceMotion) {
      position.set(REST_POSITION);
      return;
    }
    const controls = animate(position, REST_POSITION, {
      duration: 1.5,
      delay: 0.35,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [position, reduceMotion]);

  const moveTo = (next: number) => {
    const clamped = Math.min(100, Math.max(0, next));
    position.stop();
    position.set(clamped);
    setValue(Math.round(clamped));
  };

  const moveToPointer = (event: React.PointerEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    moveTo(((event.clientX - rect.left) / rect.width) * 100);
  };

  return (
    <figure>
      <div
        ref={containerRef}
        className="relative aspect-[16/10] cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-lg border border-ink/15 bg-white"
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(event.pointerId);
          moveToPointer(event);
        }}
        onPointerMove={(event) => {
          if (event.currentTarget.hasPointerCapture(event.pointerId)) moveToPointer(event);
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          draggable={false}
          sizes="(min-width: 1280px) 1216px, 100vw"
          className="object-cover object-top"
        />

        <motion.div className="absolute inset-0" style={{ clipPath }}>
          <Wireframe />
        </motion.div>

        {/* Divider and handle */}
        <motion.div className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-ink" style={{ left }}>
          <span className="absolute left-1/2 top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink bg-marker text-ink">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
            </svg>
          </span>
        </motion.div>

        {/* Keyboard and screen-reader control for the same divider. */}
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(event) => moveTo(Number(event.target.value))}
          aria-label="Reveal the shipped site over the wireframe"
          className="peer pointer-events-none absolute inset-0 size-full opacity-0"
        />
        <span className="pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:outline-2 peer-focus-visible:-outline-offset-2 peer-focus-visible:outline-brand-blue" />
      </div>

      <figcaption className="mt-4 flex items-start justify-between gap-6 text-sm text-graphite">
        <span className="shrink-0">First wireframe</span>
        <span className="text-right">Production, live at {siteLabel}. Drag to compare.</span>
      </figcaption>
    </figure>
  );
}
