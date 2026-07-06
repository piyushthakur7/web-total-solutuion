import React from 'react';
import { motion } from 'motion/react';

interface LogoIconProps {
  className?: string;
  size?: number;
  iconColorPrimary?: string; // Bright blue
  iconColorSecondary?: string; // Dark navy
}

export function LogoIcon({
  className = '',
  size = 40,
  iconColorPrimary = '#0E70A6',
  iconColorSecondary = '#0F172A',
}: LogoIconProps) {
  // Center of concentric arcs is at (42, 50) on a 100x100 canvas.
  // This leaves perfect room for the terminals on the right.
  const strokeWidth = 5;
  const nodeRadius = 3.5;
  const nodeStrokeWidth = 2.5;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Track (Bright Blue) - Radius 36 */}
      <path
        d="M 73.18 32.0 A 36 36 0 1 0 67.45 75.45"
        stroke={iconColorPrimary}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Outer Track Terminal Node */}
      <circle
        cx="73.18"
        cy="32.0"
        r={nodeRadius}
        fill="white"
        stroke={iconColorPrimary}
        strokeWidth={nodeStrokeWidth}
      />

      {/* Second Track (Dark Navy) - Radius 28 */}
      <path
        d="M 69.05 42.75 A 28 28 0 1 0 58.06 72.93"
        stroke={iconColorSecondary}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Second Track Terminal Node */}
      <circle
        cx="69.05"
        cy="42.75"
        r={nodeRadius}
        fill="white"
        stroke={iconColorSecondary}
        strokeWidth={nodeStrokeWidth}
      />

      {/* Third Track (Bright Blue) - Radius 20 */}
      <path
        d="M 62.0 50.0 A 20 20 0 1 0 48.84 68.80"
        stroke={iconColorPrimary}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Third Track Terminal Node */}
      <circle
        cx="62.0"
        cy="50.0"
        r={nodeRadius}
        fill="white"
        stroke={iconColorPrimary}
        strokeWidth={nodeStrokeWidth}
      />

      {/* Fourth Track / Innermost Hook (Dark Navy) */}
      <path
        d="M 42 50 Q 42 68 55 75"
        stroke={iconColorSecondary}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
      />
      {/* Fourth Track Terminal Node */}
      <circle
        cx="42.0"
        cy="50.0"
        r={nodeRadius}
        fill="white"
        stroke={iconColorSecondary}
        strokeWidth={nodeStrokeWidth}
      />
    </svg>
  );
}

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
}

export default function Logo({
  className = '',
  size = 'md',
  theme = 'light',
}: LogoProps) {
  const isDarkBg = theme === 'dark';

  // Sizing map
  const iconSizeMap = {
    sm: 32,
    md: 44,
    lg: 56,
  };

  const textSizeMap = {
    sm: {
      title: 'text-sm font-extrabold tracking-tight',
      subtitle: 'text-[8px] tracking-[0.25em] font-medium -mt-1',
      gap: 'space-x-2',
    },
    md: {
      title: 'text-lg font-extrabold tracking-tight',
      subtitle: 'text-[10px] tracking-[0.25em] font-medium -mt-1',
      gap: 'space-x-3',
    },
    lg: {
      title: 'text-2xl font-extrabold tracking-tight',
      subtitle: 'text-[12px] tracking-[0.25em] font-medium -mt-1.5',
      gap: 'space-x-4',
    },
  };

  const primaryColor = '#0E70A6'; // Bright blue
  const secondaryColor = isDarkBg ? '#F8FAFC' : '#0F172A'; // White/slate vs Navy/dark

  return (
    <div className={`flex items-center ${textSizeMap[size].gap} ${className}`}>
      {/* Pulsing load animation on the custom logo icon */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        className="shrink-0 flex items-center justify-center"
      >
        <LogoIcon
          size={iconSizeMap[size]}
          iconColorPrimary={primaryColor}
          iconColorSecondary={isDarkBg ? '#38BDF8' : secondaryColor} // lighter blue on dark bg, or navy
        />
      </motion.div>
      <div className="flex flex-col justify-center select-none">
        {/* WEB TOTAL */}
        <span
          className={`${textSizeMap[size].title} leading-none transition-colors`}
          style={{ color: primaryColor }}
        >
          WEB TOTAL
        </span>
        {/* SOLUTION */}
        <span
          className={`${textSizeMap[size].subtitle} uppercase leading-none transition-colors`}
          style={{ color: isDarkBg ? '#94A3B8' : '#1E293B' }} // light gray-blue or dark slate
        >
          SOLUTION
        </span>
      </div>
    </div>
  );
}
