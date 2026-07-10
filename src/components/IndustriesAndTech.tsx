"use client";

import React from 'react';
import Image from 'next/image';
import { 
  GraduationCap, HeartPulse, Truck, ShoppingCart, Scale, Home, 
  Building2, Plane, Utensils, Wallet, Users, Car
} from 'lucide-react';

const industries = [
  { name: 'Education', icon: GraduationCap },
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'Logistics', icon: Truck },
  { name: 'Retail & E-commerce', icon: ShoppingCart },
  { name: 'Legal', icon: Scale },
  { name: 'Interior', icon: Home },
  { name: 'Real Estate', icon: Building2 },
  { name: 'Travel', icon: Plane },
  { name: 'Food & Restaurant', icon: Utensils },
  { name: 'Finance', icon: Wallet },
  { name: 'Social', icon: Users },
  { name: 'Transport & Cab', icon: Car },
];

const technologies = [
  { name: 'WordPress', shadowColor: 'group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg' },
  { name: 'Shopify', shadowColor: 'group-hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]', logo: 'https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg' },
  { name: 'JavaScript', shadowColor: 'group-hover:shadow-[0_0_15px_rgba(250,204,21,0.4)]', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'CSS3', shadowColor: 'group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'HTML5', shadowColor: 'group-hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'PHP', shadowColor: 'group-hover:shadow-[0_0_15px_rgba(129,140,248,0.4)]', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
  { name: 'CodeIgniter', shadowColor: 'group-hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg' },
  { name: 'Laravel', shadowColor: 'group-hover:shadow-[0_0_15px_rgba(220,38,38,0.4)]', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
  { name: 'Next.js', shadowColor: 'group-hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', invert: true },
  { name: 'Vue.js', shadowColor: 'group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
  { name: 'React', shadowColor: 'group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Node.js', shadowColor: 'group-hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
];

export default function IndustriesAndTech() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full filter blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 xl:gap-12">
          
          {/* Industries Section */}
          <div className="space-y-10">
            <div className="text-center xl:text-left space-y-4">
              <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">Domains</span>
              <h2 className="text-3xl font-extrabold tracking-tight">Industries We Work With</h2>
            </div>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6">
              {industries.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800 hover:border-brand-blue/50 transition-all duration-300 group cursor-pointer backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-slate-700/50 flex items-center justify-center text-slate-400 group-hover:text-brand-blue group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 mb-4 shadow-inner">
                    <item.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-300 text-center leading-tight group-hover:text-white transition-colors">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="space-y-10">
            <div className="text-center xl:text-left space-y-4">
              <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">Tech Stack</span>
              <h2 className="text-3xl font-extrabold tracking-tight">Tools & Technologies</h2>
            </div>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6">
              {technologies.map((tech, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800 hover:border-slate-500 transition-all duration-300 group cursor-pointer backdrop-blur-sm">
                  <div className={`w-12 h-12 rounded-xl bg-slate-900/80 border border-slate-700/50 flex items-center justify-center group-hover:scale-110 transition-all duration-300 mb-4 shadow-inner ${tech.shadowColor}`}>
                    <Image src={tech.logo} alt={`${tech.name} logo`} width={24} height={24} className={`w-6 h-6 object-contain transition-transform duration-300 ${tech.invert ? 'invert' : ''}`} />
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-300 text-center leading-tight group-hover:text-white transition-colors">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
