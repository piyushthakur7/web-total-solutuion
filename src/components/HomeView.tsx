"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { CLIENT_LOGOS } from '../data';
import { 
  Zap, Shield, PieChart, Database, ArrowRight, CheckCircle2, 
  Sparkles, ChevronRight
} from 'lucide-react';

export default function HomeView() {
  const router = useRouter();
  const onNavigate = (view: string, context?: any) => {
    router.push(view === 'home' ? '/' : `/${view}`);
  };
  // Speed simulator states
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditProgress, setAuditProgress] = useState(0);
  const [auditComplete, setAuditComplete] = useState(false);
  const [auditScore, setAuditScore] = useState(72);

  // Security firewall simulation state
  const [firewallOn, setFirewallOn] = useState(true);

  const startPerformanceAudit = () => {
    if (isAuditing) return;
    setIsAuditing(true);
    setAuditComplete(false);
    setAuditProgress(0);
    
    const interval = setInterval(() => {
      setAuditProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAuditing(false);
          setAuditComplete(true);
          setAuditScore(99);
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  return (
    <div className="space-y-24 pb-20 overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative pt-16 lg:pt-24">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blue/5 rounded-full filter blur-3xl -z-10" />
        <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-brand-blue/10 rounded-full filter blur-2xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-brand-blue/10 border border-brand-blue/20 px-3.5 py-1.5 rounded-full text-brand-blue text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next-Gen Web Engineering</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Building High-Performance Websites <br />
                <span className="text-brand-blue bg-clip-text">That Grow Your Business</span>
              </h1>
              
              <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                We engineer bespoke, lightning-fast digital solutions. Combining pristine interactive UI, tailored SEO mechanics, and military-grade architecture.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue/95 text-white px-8 py-4 rounded-xl font-bold tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-semibold tracking-wide shadow-sm hover:shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>View Portfolio</span>
                </button>
              </div>

              {/* Minimal metrics row */}
              <div className="grid grid-cols-3 gap-6 pt-10 border-t border-slate-100 max-w-md mx-auto lg:mx-0">
                <div>
                  <span className="block text-2xl font-bold text-slate-900">99%</span>
                  <span className="text-xs text-slate-500 font-medium">Avg Speed Score</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-slate-900">4.9/5</span>
                  <span className="text-xs text-slate-500 font-medium">Clutch Rating</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-slate-900">100%</span>
                  <span className="text-xs text-slate-500 font-medium">SLA Commitment</span>
                </div>
              </div>
            </div>

            {/* Right Asset Frame */}
            <div className="lg:col-span-6 relative">
              <div className="absolute inset-0 bg-slate-200/50 rounded-2xl filter blur-xl transform translate-x-3 translate-y-3 -z-10" />
              <div className="border-8 border-white bg-white rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/6476257/pexels-photo-6476257.jpeg"
                  alt="High Performance Digital Agency Illustration"
                  className="w-full h-auto object-cover max-h-[500px]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brand Trust Loop */}
      <section className="bg-slate-50 py-10 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
            Engineered For Dynamic Growth and Trusted by Leading Teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-70">
            {CLIENT_LOGOS.map((logo, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors">
                <div className="w-5 h-5 rounded bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold">★</div>
                <span className="text-sm font-semibold tracking-wider font-mono">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Engineered for Performance (Bento Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
            Performance Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Designed for Performance, Built for Scalability
          </h2>
          <p className="text-slate-600">
            We abandon boilerplate templates to build highly optimized platforms customized to power business velocity and dynamic enterprise operations.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Lightning Fast (Spans 2 columns) */}
          <div className="md:col-span-2 bg-slate-900 text-white rounded-3xl p-8 shadow-md relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute right-0 top-0 w-64 h-64 bg-brand-blue/10 rounded-full filter blur-3xl" />
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-brand-blue">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold">Lightning Fast Load Times</h3>
              <p className="text-slate-400 max-w-xl text-sm leading-relaxed">
                Page speed directly affects search indexing and user conversion. Our structures deliver near-instant loading through advanced SSR, static caching, and fine-tuned asset pipelines.
              </p>
            </div>

            {/* Interactive Live Speed Simulator */}
            <div className="mt-8 bg-slate-800/80 border border-white/10 rounded-2xl p-6 relative">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-xs text-slate-400 block font-mono">SITE AUDIT SIMULATOR</span>
                  <span className="text-sm font-bold text-white">Lighthouse Performance Report</span>
                </div>
                <button
                  onClick={startPerformanceAudit}
                  disabled={isAuditing}
                  className={`text-xs px-3.5 py-1.5 rounded-lg font-bold tracking-wide transition-all ${
                    isAuditing 
                      ? 'bg-slate-700 text-slate-400 cursor-not-allowed' 
                      : 'bg-brand-blue text-white hover:bg-brand-blue/95 cursor-pointer'
                  }`}
                >
                  {isAuditing ? 'Auditing...' : 'Run Performance Audit'}
                </button>
              </div>

              {/* Progress/Score Display */}
              <div className="space-y-3">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Server Response Rate</span>
                  <span className="font-mono">{isAuditing ? `${auditProgress}%` : auditComplete ? '100%' : 'Ready'}</span>
                </div>
                <div className="h-2.5 bg-slate-700/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-brand-blue rounded-full transition-all duration-150"
                    style={{ width: `${isAuditing ? auditProgress : auditComplete ? 100 : 40}%` }}
                  />
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <span className="text-xs text-slate-400">Calculated Speed Score</span>
                  <div className="flex items-center space-x-2">
                    <span className={`text-lg font-extrabold font-mono ${
                      auditComplete ? 'text-green-400' : 'text-yellow-400'
                    }`}>
                      {isAuditing ? 'Calculating...' : `${auditScore}/100`}
                    </span>
                    <span className="text-[10px] text-slate-500">(90+ is Ideal)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Enterprise Security */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-950">Enterprise Security</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Military-grade architecture with zero trust models. Protected from bots, scrapers, and malicious injection attacks.
              </p>
            </div>

            {/* Interactive Security Switch */}
            <div className="mt-8 bg-white border border-slate-100 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block font-mono">FIREWALL SYSTEM</span>
                <span className="text-sm font-bold text-slate-800">
                  {firewallOn ? 'Active Shielding' : 'Shielding Suspended'}
                </span>
              </div>
              <button
                onClick={() => setFirewallOn(!firewallOn)}
                className={`w-12 h-6 rounded-full p-0.5 transition-colors duration-200 cursor-pointer ${
                  firewallOn ? 'bg-emerald-500' : 'bg-slate-300'
                }`}
              >
                <div className={`w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform duration-200 ${
                  firewallOn ? 'translate-x-6' : 'translate-x-0'
                }`} />
              </button>
            </div>
          </div>

          {/* Card 3: Data-Driven Design */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-brand-blue/5 rounded-2xl flex items-center justify-center text-brand-blue">
                <PieChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-950">Data-Driven Design</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Visual aesthetics are empty without conversions. Every asset placement, call-to-action flow, and text block is backed by core analytical models.
              </p>
            </div>

            <div className="mt-8 bg-white border border-slate-100 rounded-2xl p-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] text-slate-400 font-mono">CONVERSION BOOST</span>
                <span className="text-xs font-bold text-emerald-600 font-mono">+14.2%</span>
              </div>
              <div className="flex space-x-1.5 h-10 items-end">
                <div className="w-full bg-slate-100 h-[25%] rounded-t-sm" />
                <div className="w-full bg-slate-100 h-[40%] rounded-t-sm" />
                <div className="w-full bg-slate-100 h-[35%] rounded-t-sm" />
                <div className="w-full bg-slate-100 h-[65%] rounded-t-sm" />
                <div className="w-full bg-slate-100 h-[55%] rounded-t-sm" />
                <div className="w-full bg-brand-blue h-[90%] rounded-t-sm animate-pulse" />
              </div>
            </div>
          </div>

          {/* Card 4: Scalable Architecture (Spans 2 columns) */}
          <div className="md:col-span-2 bg-slate-900 text-white rounded-3xl p-8 shadow-md relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute left-0 top-0 w-64 h-64 bg-slate-800 rounded-full filter blur-3xl -z-10" />
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-brand-blue">
                <Database className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-2xl font-bold">Scalable Architecture</h3>
              <p className="text-slate-400 max-w-xl text-sm leading-relaxed">
                Whether you serve 100 visitors or millions of concurrent sessions, our serverless, CDN-cached infrastructures scale automatically with absolute reliability and predictability.
              </p>
            </div>

            {/* Simulated server nodes */}
            <div className="mt-8 grid grid-cols-4 gap-4">
              {['US-West Edge', 'EU-Central Node', 'AP-South Ingress', 'US-East Replica'].map((node, i) => (
                <div key={i} className="bg-slate-800/80 border border-white/5 rounded-xl p-3 text-center">
                  <span className="text-[9px] font-mono text-slate-500 block uppercase">{node}</span>
                  <div className="flex items-center justify-center space-x-1 mt-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-ping" />
                    <span className="text-[11px] font-bold text-slate-300">99.9%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Comprehensive Digital Solutions (Services Preview) */}
      <section className="bg-slate-50/60 py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
                Enterprise Execution
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Comprehensive Digital Solutions
              </h2>
              <p className="text-slate-600 text-sm">
                From sleek corporate portfolios to elaborate enterprise-ready software. We engineer platforms with precision and clarity.
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center space-x-1.5 text-brand-blue font-bold text-sm hover:underline cursor-pointer"
            >
              <span>Explore All Capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Item 1 */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-6">
                <span className="text-3xl">🏢</span>
                <h3 className="text-xl font-bold text-slate-950">Corporate Websites</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Beautiful, fast showcase platforms designed to display your brand power, connect with prospective clients, and streamline recruitment processes.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-600 pt-2 border-t border-slate-50">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>Tailored Premium Visual Designs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>Search Engine Architecture</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="mt-8 inline-flex items-center space-x-1 text-xs font-bold text-slate-800 hover:text-brand-blue group cursor-pointer"
              >
                <span>Learn More</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Service Item 2 */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-6">
                <span className="text-3xl">💻</span>
                <h3 className="text-xl font-bold text-slate-950">SaaS & Apps</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Interactive administrative systems, cloud services, and tailored multi-tenant web tools styled with flawless speed and absolute data integrity.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-600 pt-2 border-t border-slate-50">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>Highly Responsive Systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>Third-Party API Integrations</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="mt-8 inline-flex items-center space-x-1 text-xs font-bold text-slate-800 hover:text-brand-blue group cursor-pointer"
              >
                <span>Learn More</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Service Item 3 */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-6">
                <span className="text-3xl">🛒</span>
                <h3 className="text-xl font-bold text-slate-950">E-Commerce Platforms</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Tailored storefronts with quick load sequences, automated checkout models, and fluid inventory structures designed to drive checkout conversion.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-600 pt-2 border-t border-slate-50">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>Fluid Checkout Sequences</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>Stripe & Payment Configurations</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="mt-8 inline-flex items-center space-x-1 text-xs font-bold text-slate-800 hover:text-brand-blue group cursor-pointer"
              >
                <span>Learn More</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Methodology Section (The Architectural Approach) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left image banner */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-slate-100 rounded-2xl -z-10 transform -rotate-2" />
            <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-lg bg-white p-2">
              <img
                src="https://lh3.googleusercontent.com/aida/AP1WRLsRGmB7q_kxILfqZb9_PNNf50HTzwA1vDptiPLClxwY7Zj2T4LTN2gQRHSL_67McvPCE0gg7X_4mZ5LvYr4_yu9NTlnCcydCb3YuV5giPY-TCIvWAeRGj6sQMsWCfEdHWCtW9S3t8Vu5i_XTPigjier10MDIYSXMx-_u7rwugvM5mK2xCFY6124_XmlN5ZfXpaQlOJfABS9x7bO4FtlsMtuijlgbatKlB5IuhVxXV2oBtHUfQImEhR4PA"
                alt="Product Engineering Process Methodology Diagram"
                className="w-full h-auto rounded-xl object-cover max-h-[500px]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right text steps timeline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
                Our Methodology
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                The Architectural Approach
              </h2>
              <p className="text-slate-600">
                We believe exceptional software is a product of absolute clarity, systematic prototyping, and continuous stress auditing.
              </p>
            </div>

            {/* Vertical timeline */}
            <div className="space-y-8 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
              {/* Step 1 */}
              <div className="flex space-x-6 relative group">
                <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center text-slate-700 font-bold font-mono text-sm group-hover:border-brand-blue group-hover:bg-brand-blue/5 transition-all shrink-0 z-10">
                  01
                </div>
                <div className="space-y-1.5 pt-1">
                  <h3 className="text-lg font-bold text-slate-950">Discovery & Strategy</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We deep-dive into your analytics, define target conversions, outline system architectures, and create an absolute project scope blueprint.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex space-x-6 relative group">
                <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center text-slate-700 font-bold font-mono text-sm group-hover:border-brand-blue group-hover:bg-brand-blue/5 transition-all shrink-0 z-10">
                  02
                </div>
                <div className="space-y-1.5 pt-1">
                  <h3 className="text-lg font-bold text-slate-950">Design & Prototyping</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Our team develops clean, custom visual boards and functional layouts, testing interactive UX and content hierarchies before a single line of server code is written.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex space-x-6 relative group">
                <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center text-slate-700 font-bold font-mono text-sm group-hover:border-brand-blue group-hover:bg-brand-blue/5 transition-all shrink-0 z-10">
                  03
                </div>
                <div className="space-y-1.5 pt-1">
                  <h3 className="text-lg font-bold text-slate-950">Development & Quality Assurance</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We code with absolute precision, utilizing highly modular systems, rigorous speed auditing, and comprehensive security testing to ensure pristine production code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Static CTA Section */}
      <section className="bg-slate-900 text-white rounded-3xl max-w-7xl mx-auto px-8 py-12 md:py-16 text-center space-y-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-brand-blue/10 rounded-full filter blur-3xl" />
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Ready to Build Your High-Performance Digital Platform?
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Inquire today to schedule an architecture alignment call. Let’s map out a customized digital solution that elevates conversions, speed, and market reach.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold tracking-wide px-8 py-4 rounded-xl shadow-md transition-all inline-flex items-center space-x-2 cursor-pointer"
            >
              <span>Initiate Free Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
