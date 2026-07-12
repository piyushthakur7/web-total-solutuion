"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, MessageSquare, ArrowRight, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Pricing', path: '/pricing' },
  // { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

const servicesDropdown = [
  { label: 'Landing & Informative Pages', subtext: 'Starting from ₹7,999', path: '/services/landing-pages' },
  { label: 'Full SaaS Development', subtext: 'Custom Price', path: '/services/saas-development' },
  { label: 'Content Writing', subtext: 'Starting from ₹1,000', path: '/services/content-writing' },
  { label: 'E-commerce Development', subtext: 'Starting from ₹12,999', path: '/services/ecommerce-development' },
  { label: 'Android & iOS Apps', subtext: 'Custom Price', path: '/services/app-development' },
  { label: 'Digital Marketing', subtext: 'Custom Price', path: '/services/digital-marketing' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            href="/"
            className="flex items-center cursor-pointer group"
            onClick={() => setIsOpen(false)}
          >
            <Logo size="md" theme="light" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              if (item.label === 'Services') {
                return (
                  <div key={item.path} className="relative group py-2">
                    <Link
                      href={item.path}
                      className={`relative text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer flex items-center space-x-1 ${
                        isActive 
                          ? 'text-brand-blue font-semibold' 
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                      {isActive && (
                        <div 
                          className="absolute -bottom-2 left-0 right-0 h-0.5 bg-brand-blue rounded-full"
                        />
                      )}
                    </Link>

                    {/* Desktop Dropdown */}
                    <div className="absolute top-full -left-4 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 pt-2">
                      <div className="py-2 bg-white rounded-2xl overflow-hidden">
                        {servicesDropdown.map((service, idx) => (
                          <Link 
                            key={idx} 
                            href={service.path}
                            className="block px-5 py-3 hover:bg-slate-50 transition-colors group/item"
                          >
                            <span className="block text-sm font-bold text-slate-800 group-hover/item:text-brand-blue transition-colors">{service.label}</span>
                            <span className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wide mt-0.5">{service.subtext}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative py-2 text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                    isActive 
                      ? 'text-brand-blue font-semibold' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/916291519364"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 p-3 rounded-xl bg-slate-50 text-emerald-600 hover:text-white hover:bg-emerald-500 transition-all cursor-pointer"
              title="WhatsApp Consultation"
              aria-label="Contact via WhatsApp"
            >
              <WhatsAppIcon className="w-6 h-6" />
            </a>
            <Link
              href="/contact"
              className="bg-brand-blue hover:bg-brand-blue/90 text-white px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all flex items-center space-x-2 cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <a
              href="https://wa.me/916291519364"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-50 text-emerald-600 hover:text-white hover:bg-emerald-500 transition-all cursor-pointer"
              aria-label="Contact via WhatsApp"
            >
              <WhatsAppIcon className="w-6 h-6" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-xl text-slate-600 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden border-t border-slate-100 bg-white overflow-hidden shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold tracking-wide transition-all block ${
                      isActive
                        ? 'bg-brand-blue/5 text-brand-blue'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-slate-100 px-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white py-3 rounded-xl text-center font-bold tracking-wide shadow-sm transition-all block"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
      </div>
    </header>
  );
}
