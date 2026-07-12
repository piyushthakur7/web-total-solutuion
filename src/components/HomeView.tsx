import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { PORTFOLIO_ITEMS } from '../data';
import { 
  Zap, Shield, PieChart, Database, ArrowRight, CheckCircle2, 
  Sparkles, ChevronRight, Monitor, TrendingUp, PenTool, Layout, Smartphone, Cpu, ShoppingCart
} from 'lucide-react';

const FAQSection = dynamic(() => import('./FAQSection'));
const IndustriesAndTech = dynamic(() => import('./IndustriesAndTech'));
const WhyNeedWebsite = dynamic(() => import('./WhyNeedWebsite'));

export default function HomeView() {

  return (
    <div className="space-y-24 pb-20 overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative pt-16 lg:pt-24 pb-48 bg-slate-900">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blue/5 rounded-full filter blur-3xl -z-10" />
        <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-brand-blue/10 rounded-full filter blur-2xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-brand-blue/10 border border-brand-blue/20 px-3.5 py-1.5 rounded-full text-brand-blue text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>Web Total Solution | Web Development Agency in Kolkata</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Your Business Growth <br />
                <span className="text-brand-blue bg-clip-text">Is Our Ultimate Goal</span>
              </h1>
              
              <ul className="space-y-2.5 text-slate-300 text-left mx-auto lg:mx-0 max-w-sm pt-2">
                {[
                  'Bespoke UI/UX Design',
                  'Lightning-Fast Performance',
                  'SEO & Mobile Optimized',
                  'Enterprise-Grade Security',
                  'Fluid Responsive Layouts',
                  'Intuitive User Experiences',
                  'Scalable Cloud Architecture'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3.5 rounded-xl font-bold tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Contact Now</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="https://wa.me/916291519364"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white border-2 border-slate-700 px-8 py-3.5 rounded-xl font-bold tracking-wide shadow-sm hover:shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>WhatsApp Us Now</span>
                </a>
              </div>
            </div>

            {/* Right Asset Frame */}
            <div className="lg:col-span-6 relative mt-10 lg:-mt-12">
              <div className="absolute inset-0 bg-slate-200/50 rounded-2xl filter blur-xl transform translate-x-3 translate-y-3 -z-10" />
              
              {/* Dynamic Google Review Badge */}
              <a 
                href="https://share.google/na7XhIzRCjwcQnh9J"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -top-8 -right-2 sm:-top-10 sm:-right-6 md:-right-8 bg-white p-3.5 sm:p-4 rounded-2xl shadow-2xl flex items-center space-x-3 hover:-translate-y-2 hover:shadow-3xl transition-all duration-300 z-20 border border-slate-100 group"
              >
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-1.5">
                    <span className="text-lg font-extrabold text-slate-900 leading-none">4.6</span>
                    <div className="flex text-yellow-400 text-[14px]">
                      ★★★★<span className="text-yellow-400/50">★</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1 group-hover:text-blue-600 transition-colors">
                    Google Reviews
                  </span>
                </div>
              </a>

              <div className="border-8 border-white bg-white rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/6476257/pexels-photo-6476257.jpeg"
                  alt="High Performance Digital Agency Illustration"
                  className="w-full h-auto object-cover max-h-[500px]"
                  width={800}
                  height={500}
                  referrerPolicy="no-referrer"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-[-2px] left-0 right-0 z-10 pointer-events-none">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-slate-50" preserveAspectRatio="none">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* 1.5 Quick Services Grid (Overlapping Hero) */}
      <section className="relative z-20 -mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {[
            { title: 'Corporate Websites', icon: <Layout className="w-6 h-6 text-white" />, link: '/services/corporate', desc: 'Premium, high-performance portfolios and company portals.' },
            { title: 'Landing Pages', icon: <Monitor className="w-6 h-6 text-white" />, link: '/services/landing-pages', desc: 'High-conversion, single-page sites engineered for lead generation.' },
            { title: 'Informative Pages', icon: <PieChart className="w-6 h-6 text-white" />, link: '/services/informative', desc: 'Detailed, highly structured platforms for brand storytelling.' },
            { title: 'Content Writing', icon: <PenTool className="w-6 h-6 text-white" />, link: '/services/content-writing', desc: 'SEO-driven copy that engages audiences and drives action.' },
            { title: 'Maintenance & Support', icon: <Shield className="w-6 h-6 text-white" />, link: '/services/maintenance', desc: 'Ongoing technical support to keep your platform flawless.' },
            { title: 'Digital Marketing', icon: <TrendingUp className="w-6 h-6 text-white" />, link: '/services/digital-marketing', desc: 'Data-driven marketing campaigns accelerating brand growth.' },
          ].map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h2 className="font-bold text-slate-900 mb-2 leading-tight text-lg">{service.title}</h2>
              <p className="text-xs text-slate-500 mb-4 flex-grow">{service.desc}</p>
              <Link href={service.link} className="text-brand-blue text-xs font-bold uppercase tracking-wide flex items-center group">
                Explore More <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Brand Trust Loop */}
      <section className="bg-slate-50 py-10 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Engineered For Dynamic Growth and Trusted by Leading Teams
          </p>
        </div>
        <div className="relative flex overflow-hidden w-full group">
          <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
            {[...PORTFOLIO_ITEMS, ...PORTFOLIO_ITEMS].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors mx-8 md:mx-12 opacity-70 hover:opacity-100 shrink-0">
                <div className="w-5 h-5 rounded bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold shrink-0">★</div>
                <span className="text-sm font-semibold tracking-wider font-mono">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5. Why Business Needs a Website */}
      <WhyNeedWebsite />

      {/* 3. Industries & Technologies */}
      <IndustriesAndTech />

      {/* 4. Comprehensive Digital Solutions (Services Preview) */}
      <section className="bg-white py-24">
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
            <Link
              href="/services"
              className="inline-flex items-center space-x-1.5 text-brand-blue font-bold text-sm hover:underline cursor-pointer"
            >
              <span>Explore All Capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
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
              <Link
                href="/services"
                className="mt-8 inline-flex items-center space-x-1 text-xs font-bold text-slate-800 hover:text-brand-blue group cursor-pointer"
              >
                <span>Learn More</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Service Item 2 */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-6">
                <span className="text-3xl">🎯</span>
                <h3 className="text-xl font-bold text-slate-950">High-Conversion Landing Pages</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Laser-focused single-page platforms engineered with one ultimate goal: maximizing leads, driving sales, and capturing user intent instantly.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-600 pt-2 border-t border-slate-50">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>Optimized Call-to-Action Flows</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>A/B Tested User Journeys</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/services"
                className="mt-8 inline-flex items-center space-x-1 text-xs font-bold text-slate-800 hover:text-brand-blue group cursor-pointer"
              >
                <span>Learn More</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Service Item 3 */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-6">
                <span className="text-3xl">📖</span>
                <h3 className="text-xl font-bold text-slate-950">Informative Websites</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Structured, content-rich platforms ideal for educational institutions, or intricate service explanations with fluid navigation.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-600 pt-2 border-t border-slate-50">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>Intuitive Content Hierarchies</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>Lightning Fast Asset Delivery</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/services"
                className="mt-8 inline-flex items-center space-x-1 text-xs font-bold text-slate-800 hover:text-brand-blue group cursor-pointer"
              >
                <span>Learn More</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Methodology Section (The Architectural Approach) */}
      <section className="relative bg-[#0F172B] py-24 sm:py-32">
        {/* Top Wave */}
        <div className="absolute top-[-1px] left-0 right-0 z-10 pointer-events-none transform rotate-180">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[60px] sm:h-[120px] text-white" preserveAspectRatio="none">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="currentColor"></path>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left image banner */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-slate-800/50 rounded-2xl -z-10 transform -rotate-2" />
            <div className="border border-slate-700/50 rounded-2xl overflow-hidden shadow-lg bg-[#0F172B] p-2">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
                alt="Product Engineering Process Methodology Diagram"
                className="w-full h-auto rounded-xl object-cover max-h-[500px]"
                width={800}
                height={500}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right text steps timeline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest font-extrabold text-blue-400">
                Our Methodology
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                The Architectural Approach
              </h2>
              <p className="text-slate-400">
                We believe exceptional software is a product of absolute clarity, systematic prototyping, and continuous stress auditing.
              </p>
            </div>

            {/* Vertical timeline */}
            <div className="space-y-8 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-800">
              {/* Step 1 */}
              <div className="flex space-x-6 relative group">
                <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-slate-300 font-bold font-mono text-sm group-hover:border-blue-500 group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-all shrink-0 z-10">
                  01
                </div>
                <div className="space-y-1.5 pt-1">
                  <h3 className="text-lg font-bold text-white">Discovery & Strategy</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    We deep-dive into your analytics, define target conversions, outline system architectures, and create an absolute project scope blueprint.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex space-x-6 relative group">
                <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-slate-300 font-bold font-mono text-sm group-hover:border-blue-500 group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-all shrink-0 z-10">
                  02
                </div>
                <div className="space-y-1.5 pt-1">
                  <h3 className="text-lg font-bold text-white">Design & Prototyping</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Our team develops clean, custom visual boards and functional layouts, testing interactive UX and content hierarchies before a single line of server code is written.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex space-x-6 relative group">
                <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-slate-300 font-bold font-mono text-sm group-hover:border-blue-500 group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-all shrink-0 z-10">
                  03
                </div>
                <div className="space-y-1.5 pt-1">
                  <h3 className="text-lg font-bold text-white">Development & Quality Assurance</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    We code with absolute precision, utilizing highly modular systems, rigorous speed auditing, and comprehensive security testing to ensure pristine production code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-[-1px] left-0 right-0 z-10 pointer-events-none">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[60px] sm:h-[120px] text-white" preserveAspectRatio="none">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

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
            <Link
              href="/contact"
              className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold tracking-wide px-8 py-4 rounded-xl shadow-md transition-all inline-flex items-center space-x-2 cursor-pointer"
            >
              <span>Initiate Free Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
