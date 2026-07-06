"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { 
  CheckCircle2, ArrowRight, Laptop, ShoppingCart, Cpu, 
  Sparkles, ExternalLink, RefreshCw, Smartphone, Layers
} from 'lucide-react';

export default function ServicesView() {
  const router = useRouter();
  const onNavigate = (view: string, context?: any) => {
    router.push(view === 'home' ? '/' : `/${view}`);
  };
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'ecommerce'>('all');

  const techBadgeSet = {
    frontend: ['React 19', 'Tailwind v4', 'Vite', 'Motion', 'Typescript'],
    backend: ['Node.js', 'Express', 'REST / GraphQL', 'PostgreSQL', 'Redis'],
    ecommerce: ['Stripe API', 'Shopify Hydrogen', 'Cart Engines', 'Inventory Synced'],
  };

  return (
    <div className="space-y-24 pb-20 overflow-x-hidden">
      {/* 1. Services Hero */}
      <section className="relative pt-16 lg:pt-24 bg-slate-50/50 py-16 border-b border-slate-100">
        <div className="absolute inset-0 bg-brand-blue/5 opacity-50 filter blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-emerald-700 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Precision Engineering</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Technical Expertise, <br />
                <span className="text-brand-blue">Architectural Precision.</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                We engineer scalable, high-performance digital platforms for enterprise stakeholders, fast-growing startups, and ecommerce companies requiring extreme speed and robust architecture.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold tracking-wide px-7 py-3.5 rounded-xl shadow-sm transition-all flex items-center space-x-2 cursor-pointer"
                >
                  <span>Discuss Your Requirements</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column (Hero image matching mockup) */}
            <div className="lg:col-span-5">
              <div className="border-4 border-white bg-white rounded-2xl overflow-hidden shadow-xl relative">
                <img
                  src="https://lh3.googleusercontent.com/aida/AP1WRLtez1F_LlPcD5NzSXhgJrNtBdg3jZLt2zxfvtmWt7g-PibuZWDVfl7dt-NahpKcdj9O4oy2mVj4cIwAN_e5LCpWXwLEiTAdxmq3E-EWFBc-KziMDj18-ueOv1g2YJeL_jD1kl1PZ-_tIeDkWHctPTucjZrtuP_bj0La6uuNSOEss2lssyNa6_gQxD2HAINzRCuCeNfn9O5YqtCa8qz7TK4D-M-MUx3MBIgEHpc1y38VxMQ2mEDcJ9OAJQ"
                  alt="Precision Digital Architecture Showcase Dashboard"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Stack Selector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">OUR TECHNOLOGIES</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Standardized Core Stacks</h2>
          <p className="text-slate-600 text-sm">We operate only with high-performance, standardized stacks to guarantee stability, security, and velocity.</p>
        </div>

        {/* Tab filters */}
        <div className="flex justify-center space-x-2 mb-8">
          {(['all', 'frontend', 'backend', 'ecommerce'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-brand-blue text-white shadow-sm'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {tab === 'all' ? 'All Stacks' : tab}
            </button>
          ))}
        </div>

        {/* Dynamic Badges */}
        <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-6 max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {activeTab === 'all' && (
              <>
                {techBadgeSet.frontend.map((badge) => (
                  <span key={badge} className="px-3.5 py-1.5 bg-white border border-slate-100 rounded-xl text-xs font-bold text-slate-700 shadow-sm flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>{badge}</span>
                  </span>
                ))}
                {techBadgeSet.backend.map((badge) => (
                  <span key={badge} className="px-3.5 py-1.5 bg-white border border-slate-100 rounded-xl text-xs font-bold text-slate-700 shadow-sm flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    <span>{badge}</span>
                  </span>
                ))}
                {techBadgeSet.ecommerce.map((badge) => (
                  <span key={badge} className="px-3.5 py-1.5 bg-white border border-slate-100 rounded-xl text-xs font-bold text-slate-700 shadow-sm flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{badge}</span>
                  </span>
                ))}
              </>
            )}
            {activeTab === 'frontend' && techBadgeSet.frontend.map((badge) => (
              <span key={badge} className="px-4 py-2 bg-blue-50/30 border border-blue-100 rounded-xl text-xs font-bold text-blue-700 shadow-sm flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>{badge}</span>
              </span>
            ))}
            {activeTab === 'backend' && techBadgeSet.backend.map((badge) => (
              <span key={badge} className="px-4 py-2 bg-purple-50/30 border border-purple-100 rounded-xl text-xs font-bold text-purple-700 shadow-sm flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                <span>{badge}</span>
              </span>
            ))}
            {activeTab === 'ecommerce' && techBadgeSet.ecommerce.map((badge) => (
              <span key={badge} className="px-4 py-2 bg-emerald-50/30 border border-emerald-100 rounded-xl text-xs font-bold text-emerald-700 shadow-sm flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{badge}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services Grid Bento Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Bento Card 1: Website Development */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-blue shadow-sm">
                <Laptop className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-950">Website Development</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Tailored corporate dashboards and platform views built to display your brand, optimize SEO, and streamline performance.
                </p>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600 pt-4 border-t border-slate-200/50">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>Headless CMS integrations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>Server-Side Rendering (SSR) & Speed Tuning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>Custom Analytics Dashboards</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD81TKGkMosvx34Z-jZE3PqQCWQteA-8q5DTnF-AJsoiNJphdOllXFQFgwR2jdDRe_gn7c3Y9OzbO1b7gjwRwnqiMnkVzv9r0B0fXtrCh7S7UU9A42lyXphKTf9CH4I5X7312Z7oFEkG5JLnrGU8cUgA9idKllyXG3NolRUj6JKXbqsxOomy7yp6p_Q6xKcrUPxlvH5NN611w09KywC9KB3CWpI2u3Lc3-zqr491yuGwYlkeEHpcJ54p36At1W0uGIZYVZIgUM8znM"
                alt="Corporate Website Showcase Layout"
                className="w-full h-32 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Bento Card 2: E-Commerce & Apps */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-950">E-Commerce & Apps</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Engineered ecommerce checkouts and sales funnels. Optimized to eliminate lag and maximize cart completions.
                </p>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600 pt-4 border-t border-slate-200/50">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Stripe API, Apple Pay, & Wallet setups</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Inventory systems & CRM syncs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Fluid Checkout Flows & Cart Funnels</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6q9xi8S_kkVSHtPGphrN_161Y-Sz6drSn5H76-zkg8YsTcjfMTKgKaDz9H1elj7OFTmuQixqrMcn5FjcImjfXErCgRneDxXsR6Cy9XY1VusSPszHdNO2XXE-MlIt2B6ZYT6KFikBOOKaBFq4fs_pb_DXo6My-yLjcylYDGFsz8Fd0t0o84KqNJ0Vme9fMY_JZThlEo6lGC_XHkRGzAQW5ciDy5flJst0nVGJIg4HJRWENCp3apYkCOieXlk7Z8nG2QtKdDkdBz4g"
                alt="E-Commerce Custom Storefront Layout"
                className="w-full h-32 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Bento Card 3: Full SaaS Applications */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-purple-600 shadow-sm">
                <Cpu className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-950">Full SaaS Applications</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Interactive multi-tenant administration systems, web products, and secure APIs built with performance at the core.
                </p>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600 pt-4 border-t border-slate-200/50">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Robust User Auth & Session Tokens</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Secure Multi-Tenant Databases</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Dynamic reporting & analytics loops</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjKTXS0cB8XWOSdJ6YxiP-hlMr6NnJo-wQGJ9EpAMrrUo1oy95yW1ZPvQZhb_nvapfej8S9s1WAmK8XMUPAXuisiiW-fxNGPtBKPpgQrNvpajih93sS1EbE5SOG5hyomJIZj-lRXFpSEqQg-0vrbtMqovxLVCCFqnt2VGQre2lIXstt3Lt9_1OGeBKhp_CI8ooh2r_qFXJkeXenWsf6CmaEDfw-0D0njMab6yP3J920Bd5cvs6284rRqElezwKeBT_31HDop2QD68"
                alt="SaaS Application Admin Dashboard Mockup"
                className="w-full h-32 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Bento Card 4: High-Converting Landing Pages (Spans all 3 columns in lg) */}
          <div className="lg:col-span-3 bg-slate-900 text-white rounded-3xl p-8 shadow-sm flex flex-col lg:flex-row justify-between items-stretch gap-8 relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-80 h-80 bg-brand-blue/10 rounded-full filter blur-3xl -z-10" />
            
            {/* Text left */}
            <div className="space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-1 bg-brand-blue/20 px-3 py-1 rounded-full text-brand-blue text-[10px] uppercase tracking-widest font-extrabold">
                  Conversion Engine
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">High-Converting Landing Pages</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
                  Speed-optimized promopages styled around your value proposition. We craft custom analytics meters, visual charts, and clear checkout buttons to convert traffic.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 max-w-sm pt-4 border-t border-white/5">
                <div>
                  <span className="block text-xl font-bold font-mono text-emerald-400">99+</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest">Mobile Audits</span>
                </div>
                <div>
                  <span className="block text-xl font-bold font-mono text-brand-blue">34.8%</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest">Avg Conversion Boost</span>
                </div>
              </div>
            </div>

            {/* Asset right */}
            <div className="flex-1 rounded-2xl overflow-hidden border border-white/5 bg-slate-800/50 p-2 shadow-2xl relative self-center lg:self-auto max-w-xl lg:max-w-none w-full">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2qJ_r16K7-NLk-Z1-MimQ5n_YZLq9We_retGapH3bx4dfHkNgzMVFFoJ-9LZ4nSABl2HP0Cot2BWudtgrYfEDuZ2UOIprLiRK3tZVdFY_urOCak2F6sm5ROjfmspQCk0ZdMIpU4ZwvTQ1aigl_cMSRgHLviVGbiLC-Xx2ey9H12UfM85X1O_v1joUdbWz8aEbXdSVlZZVqIXYtOWBtYr-R2ejAd0j_UH4Xfd40IqZREiqei5ScMl5DKwO2jfK5Zn4O2iwGuyStHA"
                alt="High Converting Promo Dashboard Mockup"
                className="w-full h-full object-cover rounded-xl max-h-[250px] lg:max-h-none"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="bg-slate-950 text-white rounded-3xl max-w-7xl mx-auto px-8 py-12 md:py-16 text-center space-y-6 relative overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl -z-10" />
        <div className="max-w-xl mx-auto space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight">Ready to Build Your Custom Digital Solution?</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Connect with our system architecture team to align on feature scopes, code specifications, and product delivery schedules.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-brand-blue hover:bg-brand-blue/95 text-white font-bold tracking-wide px-8 py-4 rounded-xl shadow-md transition-all inline-flex items-center space-x-2 cursor-pointer"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
