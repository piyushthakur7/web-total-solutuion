import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowUpRight, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link 
              href="/"
              className="flex items-center cursor-pointer group"
              aria-label="Home"
            >
              <Logo size="md" theme="dark" />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed pt-2">
              A premium web development agency in Kolkata building fast, SEO-optimised business
              websites that help companies attract customers, build trust and grow online.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a 
                href="https://www.instagram.com/webtotalsolution/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 -m-2 text-slate-400 hover:text-brand-blue transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/web-total-solutions/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 -m-2 text-slate-400 hover:text-brand-blue transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/channel/UCNlUYW1RyevmpKY1xUQKatA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 -m-2 text-slate-400 hover:text-brand-blue transition-colors cursor-pointer"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/webtotalindia" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 -m-2 text-slate-400 hover:text-brand-blue transition-colors cursor-pointer"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/business-website-development', label: 'Business Website Development' },
                { href: '/website-redesign', label: 'Website Redesign' },
                { href: '/ecommerce-development', label: 'E-Commerce Development' },
                { href: '/services/landing-pages', label: 'Landing Pages' },
                { href: '/services/content-writing', label: 'Content Writing & SEO' },
                { href: '/services/digital-marketing', label: 'Digital Marketing' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors flex items-center group cursor-pointer"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-1 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors cursor-pointer block">
                  About Our Agency
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors cursor-pointer block">
                  Our Work (Portfolio)
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors cursor-pointer block">
                  Service Packages
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors cursor-pointer block">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors cursor-pointer block">
                  Inquire & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-blue shrink-0" />
                <a href="mailto:info@webtotalsolution.com" className="hover:text-white transition-colors break-all">
                  info@webtotalsolution.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                <a href="tel:+916291519364" className="hover:text-white transition-colors">
                  +91 6291 519 364
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span>Pachpota, Garia,<br />Kolkata, West Bengal 700152</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400">
          <p>© {currentYear} Web Total Solution. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors cursor-pointer py-2">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors cursor-pointer py-2">Terms of Service</Link>
            <span className="hover:text-slate-300 transition-colors cursor-pointer py-2">Security Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
