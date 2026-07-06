import React from 'react';
import { ViewType } from '../types';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (view: ViewType) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <div 
              className="flex items-center cursor-pointer group"
              onClick={() => onNavigate('home')}
            >
              <Logo size="md" theme="dark" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed pt-2">
              Bespoke digital architecture. We engineer high-performance, conversion-oriented platforms for businesses worldwide.
            </p>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Solutions
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('services')} 
                  className="hover:text-white transition-colors flex items-center group cursor-pointer"
                >
                  <span>SaaS Platforms</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-1" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')} 
                  className="hover:text-white transition-colors flex items-center group cursor-pointer"
                >
                  <span>E-Commerce Integration</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-1" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')} 
                  className="hover:text-white transition-colors flex items-center group cursor-pointer"
                >
                  <span>Corporate Platforms</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-1" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')} 
                  className="hover:text-white transition-colors flex items-center group cursor-pointer"
                >
                  <span>High-Converting Landers</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-1" />
                </button>
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
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                  About Our Agency
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-white transition-colors cursor-pointer">
                  Our Work (Portfolio)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-white transition-colors cursor-pointer">
                  Service Packages
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Inquire & Contact
                </button>
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
                <span className="hover:text-white transition-colors">hello@webtotalsolution.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                <span className="hover:text-white transition-colors">+1 (555) 019-2837</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span>Tech District, Building 4,<br />San Francisco, CA 94105</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {currentYear} Web Total Solution. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Security Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
