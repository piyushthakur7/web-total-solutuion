"use client";

import React, { useState } from 'react';
import { Globe, ShieldCheck, TrendingUp, Zap } from 'lucide-react';

export default function WhyNeedWebsite() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const benefits = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "24/7 Global Storefront",
      description: "Your website never sleeps. It acts as an always-on sales representative, allowing customers to discover your business, explore products, and make inquiries anytime, from anywhere in the world.",
      stat: "81%",
      statText: "of shoppers research online before buying."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Instant Credibility & Trust",
      description: "A professional, fast-loading website instantly signals legitimacy. Businesses without a digital presence are often perceived as outdated or less trustworthy by modern consumers.",
      stat: "75%",
      statText: "judge credibility based on website design."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scalable Lead Generation",
      description: "Through SEO and targeted digital marketing, a well-engineered website captures high-intent traffic, converting casual visitors into qualified leads and paying customers.",
      stat: "3x",
      statText: "more leads generated compared to outbound."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Competitive Edge",
      description: "A dynamic website levels the playing field. With superior UI/UX and lightning-fast performance, you can outshine established competitors and capture market share.",
      stat: "2.5x",
      statText: "revenue growth for digital-first businesses."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-blue/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-slate-900/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-extrabold text-brand-blue uppercase tracking-widest mb-3 block">
            Digital Imperative
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Why Your Business Needs a <span className="text-brand-blue">High-Performance Website</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            In today's digital-first economy, a website isn't just a digital brochure—it's your most powerful engine for growth, credibility, and customer acquisition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 transition-all duration-500 ease-in-out transform cursor-pointer relative overflow-hidden ${
                activeCard === index ? 'bg-slate-900 text-white scale-[1.02] shadow-2xl' : 'hover:bg-white hover:shadow-xl hover:-translate-y-1'
              }`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Highlight gradient on hover */}
              <div className={`absolute top-0 right-0 w-40 h-40 bg-brand-blue/20 rounded-full filter blur-3xl transition-opacity duration-500 ${
                activeCard === index ? 'opacity-100' : 'opacity-0'
              }`} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                    activeCard === index ? 'bg-brand-blue text-white' : 'bg-white text-brand-blue shadow-md'
                  }`}>
                    {benefit.icon}
                  </div>
                  
                  <div className={`text-right transition-colors duration-300 ${
                    activeCard === index ? 'text-brand-blue/90' : 'text-slate-300'
                  }`}>
                    <span className="text-4xl font-black opacity-30">0{index + 1}</span>
                  </div>
                </div>

                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                  activeCard === index ? 'text-white' : 'text-slate-900'
                }`}>
                  {benefit.title}
                </h3>
                
                <p className={`text-sm sm:text-base leading-relaxed mb-8 flex-grow transition-colors duration-300 ${
                  activeCard === index ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {benefit.description}
                </p>

                <div className={`pt-6 border-t transition-colors duration-300 ${
                  activeCard === index ? 'border-slate-800' : 'border-slate-200'
                }`}>
                  <div className="flex items-center space-x-4">
                    <span className={`text-3xl font-extrabold transition-colors duration-300 ${
                      activeCard === index ? 'text-brand-blue' : 'text-slate-900'
                    }`}>
                      {benefit.stat}
                    </span>
                    <span className={`text-xs sm:text-sm font-medium uppercase tracking-wide leading-tight transition-colors duration-300 ${
                      activeCard === index ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      {benefit.statText}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
