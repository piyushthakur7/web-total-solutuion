"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ServiceData } from '../types';
import { ArrowRight, CheckCircle2, LayoutTemplate } from 'lucide-react';
import PricingView from './PricingView';

export default function ServiceDetailView({ service }: { service: ServiceData }) {
  const router = useRouter();

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Wave */}
      <section className="relative pt-32 pb-40 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src={service.heroImage} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-20"
            width={1920}
            height={1080}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-slate-300 font-medium max-w-2xl mx-auto">
            {service.subtitle}
          </p>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-[-2px] left-0 right-0 z-20">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-white" preserveAspectRatio="none">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.content.overview}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Us?</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {service.content.whyChooseUs}
                </p>
                <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                    <LayoutTemplate className="w-6 h-6 mr-3 text-brand-blue" />
                    Key Features
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.content.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Technology Stack</h2>
                <div className="flex flex-wrap gap-3">
                  {service.content.techStack.map((tech, idx) => (
                    <span key={idx} className="px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-semibold tracking-wide">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Sidebar CTA */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-brand-blue">₹</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Start Your Project</h3>
                  <p className="text-slate-500 text-sm font-medium">
                    {service.priceText}
                  </p>
                  <div className="pt-4 space-y-4">
                    <button
                      onClick={() => router.push('/contact')}
                      className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white py-4 rounded-xl font-bold tracking-wide shadow-md transition-all flex items-center justify-center space-x-2"
                    >
                      <span>Get a Free Quote</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    <a
                      href="https://wa.me/916291519364"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 py-4 rounded-xl font-bold tracking-wide transition-all flex items-center justify-center block text-center"
                    >
                      WhatsApp Us Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <div className="bg-slate-50 pt-10 pb-20 border-t border-slate-100">
        <PricingView serviceSlug={service.slug} />
      </div>
    </div>
  );
}
