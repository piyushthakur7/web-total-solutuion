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
            >
              <Logo size="md" theme="dark" />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed pt-2">
              We are a trusted web development agency in Kolkata, engineering high-performance, conversion-oriented platforms for businesses worldwide.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a 
                href="https://www.instagram.com/webtotalsolution/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-brand-blue transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/web-total-solutions/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-brand-blue transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/channel/UCNlUYW1RyevmpKY1xUQKatA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-brand-blue transition-colors cursor-pointer"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/webtotalindia" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-brand-blue transition-colors cursor-pointer"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Solutions
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  href="/services" 
                  className="hover:text-white transition-colors flex items-center group cursor-pointer"
                >
                  <span>SaaS Platforms</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-1" />
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="hover:text-white transition-colors flex items-center group cursor-pointer"
                >
                  <span>E-Commerce Integration</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-1" />
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="hover:text-white transition-colors flex items-center group cursor-pointer"
                >
                  <span>Corporate Platforms</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-1" />
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="hover:text-white transition-colors flex items-center group cursor-pointer"
                >
                  <span>High-Converting Landers</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h4>
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
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-blue shrink-0" />
                <span className="hover:text-white transition-colors">info@webtotalsolution.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                <span className="hover:text-white transition-colors">+91 6291 519 364</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span>Pachpota, Garia,<br />Kolkata, West Bengal 700152</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {currentYear} Web Total Solution. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors cursor-pointer">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors cursor-pointer">Terms of Service</Link>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Security Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
