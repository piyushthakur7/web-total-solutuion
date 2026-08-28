"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import ImageWithPreloader from './ImageWithPreloader';
import { PortfolioItem } from '../types';
import { Sparkles, ArrowUpRight, Filter, MessageSquare, TrendingUp, ExternalLink } from 'lucide-react';

/**
 * Projects are loaded from the InsForge `portfolio_projects` table by the page
 * (a Server Component) and passed in here, so adding work to the portfolio is a
 * database change rather than a code deploy.
 */
export default function PortfolioView({ projects }: { projects: PortfolioItem[] }) {
  const router = useRouter();
  const onNavigate = (view: string, context?: any) => {
    router.push(view === 'home' ? '/' : `/${view}`);
  };
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  // Built from the projects we actually have, in a fixed display order, so a
  // filter can never be offered that would land the visitor on an empty grid.
  const CATEGORY_ORDER = ['SaaS', 'E-Commerce', 'Corporate', 'Landing Page'];
  const categories = [
    'All',
    ...CATEGORY_ORDER.filter((cat) => projects.some((item) => item.category === cat)),
  ];

  const filteredItems = projects.filter(item => {
    if (selectedFilter === 'All') return true;
    return item.category === selectedFilter;
  });

  const handleInquireSimilar = (title: string) => {
    onNavigate('contact', {
      projectType: 'SaaS Platforms',
      details: `Hi! I was exploring your portfolio and got interested in a project similar to "${title}". I'd love to learn more and discuss our requirements.`
    });
  };

  return (
    <div className="space-y-16 pb-20 overflow-x-hidden">
      {/* Hero Header */}
      <section className="text-center pt-16 space-y-4 max-w-3xl mx-auto px-4">
        <div className="inline-flex items-center space-x-2 bg-brand-blue/10 border border-brand-blue/20 px-3 py-1 rounded-full text-brand-blue text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Case Studies</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
          Our Proven Engineering Work
        </h1>
        <p className="text-slate-600 text-base max-w-xl mx-auto">
          Explore real-world platforms built on optimized architectures, custom designs, and conversion performance strategies.
        </p>
      </section>

      {/* Filter Menu */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-100 pb-6">
          {/* slate-400 on white is only 2.63:1 — below the 4.5:1 WCAG minimum. */}
          <span className="text-xs font-bold text-slate-600 uppercase tracking-widest mr-2 flex items-center space-x-1.5">
            <Filter className="w-3.5 h-3.5 text-slate-600" />
            <span>Filter Work:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-brand-blue text-white shadow-sm'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat === 'Landing Page' ? 'Landing Pages' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card titles are h3; without this the document jumps h1 → h3. */}
        <h2 className="sr-only">Client projects</h2>
        {filteredItems.length === 0 ? (
          /* Unreachable in normal use — the filters above are built from the
             projects we actually have. Kept as a safe last resort. */
          <div className="text-center py-20 bg-slate-50 border border-slate-100 rounded-3xl space-y-4">
            <p className="text-slate-700 text-sm font-semibold">
              We build in this category too — the case study is not published yet.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-brand-blue hover:bg-brand-blue/95 text-white font-bold tracking-wide px-6 py-3 rounded-xl text-sm transition-all cursor-pointer"
            >
              Ask us about similar work
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                {/* Visual Area */}
                <div className="relative group overflow-hidden bg-slate-100 border-b border-slate-100 aspect-video">
                  {item.websiteUrl ? (
                    <a
                      href={item.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full relative"
                    >
                      <ImageWithPreloader
                        src={item.imageUrl}
                        alt={`${item.title} website designed by Web Total Solution`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        width={600}
                        height={400}
                        quality={70}
                        sizes="(max-width: 768px) 100vw, 640px"
                        // The first row is above the fold; the rest stay lazy.
                        priority={index < 2}
                      />
                      {/* Hover Overlay with text */}
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white/95 text-slate-900 px-4 py-2 rounded-xl text-xs font-bold shadow-md flex items-center space-x-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Visit Live Website</span>
                        </span>
                      </div>
                    </a>
                  ) : (
                    <ImageWithPreloader
                      src={item.imageUrl}
                      alt={`${item.title} project by Web Total Solution`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      width={600}
                      height={400}
                      quality={70}
                      sizes="(max-width: 768px) 100vw, 640px"
                      priority={index < 2}
                    />
                  )}
                  {/* Category overlay */}
                  <span className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest font-extrabold px-3 py-1.5 rounded-lg shadow">
                    {item.category === 'Landing Page' ? 'Landing Page' : item.category}
                  </span>

                  {/* Highlight Badge overlay */}
                  <div className="absolute bottom-4 right-4 bg-emerald-500/95 backdrop-blur-sm text-white px-4 py-2 rounded-xl shadow-lg flex items-center space-x-1.5">
                    <Sparkles className="w-4 h-4" />
                    <div>
                      <span className="block text-[8px] font-bold text-white/70 uppercase tracking-widest leading-none">HIGHLIGHT</span>
                      <span className="text-sm font-extrabold leading-none">{item.highlight}</span>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-slate-950 tracking-tight">{item.title}</h3>
                      {item.websiteUrl && (
                        <span className="text-[10px] font-bold bg-brand-blue/10 text-brand-blue px-2.5 py-1 rounded-full flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-ping" />
                          <span>Live Client Site</span>
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>

                  <div className="space-y-4">
                    {/* Tech tag loops */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.techStack.map((tech) => (
                        <span key={tech} className="text-[10px] font-mono text-slate-500 bg-slate-50 border border-slate-100 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Quick inquiry CTA */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => handleInquireSimilar(item.title)}
                        className="text-xs font-bold text-slate-500 hover:text-brand-blue flex items-center space-x-1.5 cursor-pointer transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Inquire Similar Scope</span>
                      </button>
                      {item.websiteUrl ? (
                        <a
                          href={item.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold text-brand-blue hover:underline flex items-center space-x-1 cursor-pointer transition-colors"
                        >
                          <span>Visit Live Site</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <button
                          onClick={() => handleInquireSimilar(item.title)}
                          className="p-2 rounded-lg bg-slate-50 text-slate-500 hover:text-brand-blue hover:bg-slate-100 transition-all cursor-pointer"
                          title="View Case Study Specs"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Global Callout */}
      <section className="bg-slate-50/60 py-16 border-y border-slate-100 max-w-7xl mx-auto rounded-3xl p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-950">Have a highly custom platform scope?</h2>
        <p className="text-slate-600 text-sm max-w-lg mx-auto">
          We construct complex REST/GraphQL APIs, customized checkout mechanisms, enterprise database structures, and high-frequency systems.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onNavigate('contact')}
            className="bg-brand-blue hover:bg-brand-blue/95 text-white font-bold tracking-wide px-6 py-3.5 rounded-xl shadow-sm hover:shadow transition-all inline-flex items-center space-x-2 cursor-pointer"
          >
            <span>Request Tech Consultation</span>
          </button>
        </div>
      </section>
    </div>
  );
}
