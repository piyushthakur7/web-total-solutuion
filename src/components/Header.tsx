"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_URL } from '../siteContent';

/** Contact is the header button, so it is not repeated as a nav link. */
const navItems = [
  { label: 'Work', path: '/work' },
  { label: 'Services', path: '/services' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Products', path: '/projects' },
  { label: 'Blog', path: '/blog' },
];

/**
 * Four core offers for a startup audience. The other service pages stay
 * reachable from /services and the footer.
 */
const servicesDropdown = [
  { label: 'Startup Websites', subtext: 'From seed-stage launch to growth-stage presence', path: '/pricing' },
  { label: 'Landing Pages', subtext: 'High-converting pages for products and campaigns', path: '/services/landing-pages' },
  { label: 'Website Redesign', subtext: 'Upgrade positioning, UX and conversion', path: '/website-redesign' },
  { label: 'Product UI/UX', subtext: 'Interfaces for SaaS and digital products', path: '/services/saas-development' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setIsOpen(false)}
            aria-label="Web Total Solution — home"
          >
            <Logo size="md" theme="light" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 md:flex lg:gap-9" aria-label="Main">
            {navItems.map((item) => {
              const active = isActive(item.path);
              const linkClass = `text-sm tracking-tight transition-colors duration-200 ${
                active ? 'text-ink' : 'text-graphite hover:text-ink'
              }`;

              if (item.label !== 'Services') {
                return (
                  <Link key={item.path} href={item.path} className={`relative py-2 ${linkClass}`}>
                    {item.label}
                    {active && <span className="absolute inset-x-0 -bottom-0.5 h-px bg-ink" />}
                  </Link>
                );
              }

              return (
                <div key={item.path} className="group relative py-2">
                  <Link href={item.path} className={`flex items-center gap-1 ${linkClass}`}>
                    <span>{item.label}</span>
                    <ChevronDown className="size-3.5 opacity-60 transition-transform duration-200 group-focus-within:rotate-180 group-hover:rotate-180" />
                  </Link>

                  <div className="invisible absolute -left-5 top-full z-50 w-80 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="overflow-hidden rounded-lg border border-ink/20 bg-white p-2">
                      {servicesDropdown.map((service) => (
                        <Link
                          key={service.path}
                          href={service.path}
                          className="block rounded-md px-4 py-3 transition-colors hover:bg-paper"
                        >
                          <span className="block text-sm font-semibold text-ink">{service.label}</span>
                          <span className="mt-0.5 block text-xs text-graphite">{service.subtext}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-2 md:flex">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-11 items-center justify-center rounded-md border border-ink/25 text-ink transition-colors hover:border-ink"
              title="WhatsApp"
              aria-label="Contact via WhatsApp"
            >
              <WhatsAppIcon className="size-4.5" />
            </a>
            <Link href="/contact" className="btn btn-ink min-h-11 px-5 py-2.5">
              Book a call
            </Link>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-11 items-center justify-center rounded-md border border-ink/25 text-ink"
              aria-label="Contact via WhatsApp"
            >
              <WhatsAppIcon className="size-5" />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label="Toggle menu"
              className="flex size-11 items-center justify-center rounded-md bg-ink text-white"
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            className="overflow-hidden border-t border-ink/10 md:hidden"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto px-5 pb-8 pt-2" aria-label="Mobile">
              <ul>
                {navItems.map((item) => (
                  <li key={item.path} className="border-b border-ink/10">
                    {item.label === 'Services' ? (
                      <>
                        <button
                          type="button"
                          aria-expanded={mobileServicesOpen}
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="flex w-full items-center justify-between py-4 text-left font-display text-3xl text-ink"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={`size-5 text-ink/40 transition-transform duration-200 ${
                              mobileServicesOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {mobileServicesOpen && (
                          <ul className="pb-4">
                            <li>
                              <Link
                                href={item.path}
                                onClick={() => setIsOpen(false)}
                                className="block py-2.5 text-base font-semibold text-ink"
                              >
                                All services
                              </Link>
                            </li>
                            {servicesDropdown.map((service) => (
                              <li key={service.path}>
                                <Link
                                  href={service.path}
                                  onClick={() => setIsOpen(false)}
                                  className="block py-2.5 text-base text-graphite"
                                >
                                  {service.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block py-4 font-display text-3xl ${
                          isActive(item.path) ? 'text-brand-blue' : 'text-ink'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <Link href="/contact" onClick={() => setIsOpen(false)} className="btn btn-ink mt-6 w-full">
                Book a call
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
