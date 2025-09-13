# Overview

Web Total Solution is a modern web development agency landing page built with Next.js 14. The project showcases a professional digital agency website featuring animated UI components, smooth scrolling effects, and interactive elements designed to attract potential clients and demonstrate web development capabilities. The site includes multiple pages (home, about, services, work, contact) with a focus on creating an engaging user experience through advanced animations and visual effects.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Framework
- **Next.js 14 with App Router**: Chosen for its server-side rendering capabilities, optimized performance, and modern React features. The App Router provides file-based routing and improved developer experience.
- **React 18**: Provides the component-based architecture with hooks for state management and side effects.
- **TypeScript**: Ensures type safety and better developer experience with intellisense and compile-time error detection.

## Styling and Animation
- **TailwindCSS**: Utility-first CSS framework for rapid UI development with consistent design system and responsive design capabilities.
- **Framer Motion**: Primary animation library for React components, providing declarative animations and gesture handling.
- **GSAP with ScrollTrigger**: Advanced animation library for complex scroll-based animations and performance-optimized transitions.
- **Lenis**: Smooth scrolling library that enhances the user experience with momentum-based scrolling.

## Component Architecture
- **Modular Components**: Each page feature is broken into reusable components (Hero, Services, Portfolio, Contact, etc.).
- **Custom Cursor**: Interactive particle system cursor effect for desktop users with accessibility considerations.
- **Responsive Navigation**: Mobile-friendly navigation with hamburger menu and smooth transitions.
- **Layout System**: Consistent layout with shared Navigation and Footer components.

## Data Management
- **Static Data**: Project data, services, and approach steps are stored in TypeScript files in the `/data` directory for easy maintenance.
- **Type-Safe Interfaces**: All data structures are properly typed using TypeScript interfaces.

## Performance Optimizations
- **Device Detection**: Custom cursor and animations are conditionally rendered based on device capabilities and user preferences.
- **Accessibility**: Respects user preferences for reduced motion and provides appropriate fallbacks.
- **Code Splitting**: Next.js automatic code splitting for optimal loading performance.

## User Experience Features
- **Smooth Scrolling**: Integrated Lenis for enhanced scrolling experience across the site.
- **Progressive Enhancement**: Features degrade gracefully on mobile devices and for users with accessibility preferences.
- **Interactive Elements**: Hover effects, animated cards, and engaging micro-interactions throughout the site.

# External Dependencies

## Core Framework Dependencies
- **Next.js 14**: React-based web framework for production applications
- **React 18**: JavaScript library for building user interfaces
- **TypeScript**: Typed superset of JavaScript for better development experience

## Styling and Animation Libraries
- **TailwindCSS**: Utility-first CSS framework with PostCSS and Autoprefixer for browser compatibility
- **Framer Motion**: Production-ready motion library for React applications
- **GSAP**: Professional-grade animation library with ScrollTrigger plugin
- **Lenis**: Modern smooth scrolling library for enhanced user experience

## UI Components and Icons
- **React Icons**: Popular icon library providing Font Awesome and other icon sets
- **Google Fonts**: Web font service for the Inter font family

## Third-Party Integrations
- **WhatsApp Business API**: Direct messaging integration for customer communication
- **Email Integration**: Standard mailto links for contact functionality

## Development Tools
- **ESLint**: Code linting and quality assurance
- **PostCSS**: CSS processing tool for TailwindCSS compilation

## Hosting and Deployment
- **Configured for Replit**: Development server runs on host 0.0.0.0 port 5000 for Replit compatibility
- **Static Export Capable**: Can be built for static hosting or deployed to Vercel/Netlify

## Browser Compatibility
- **Modern Browser Support**: Targets ES6+ compatible browsers
- **Mobile Responsive**: Optimized for mobile and tablet devices
- **Accessibility Compliant**: Follows WCAG guidelines for inclusive design