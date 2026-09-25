"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { Check, Plus, Minus, ArrowRight, Star, Sparkles, ShieldCheck } from 'lucide-react';
import { PRICING_PACKAGES } from '../siteContent';

/**
 * Investment page. Deliberately presents ranges and a custom-quote path rather
 * than a low headline price — the objective is qualified enquiries, not the
 * cheapest possible sale.
 */

const ADD_ONS = [
  { id: 'pages', label: 'Additional Custom Pages', note: 'Per extra page', price: 3500 },
  { id: 'cms', label: 'Content Management System', note: 'Edit your own content', price: 8000 },
  { id: 'branding', label: 'Logo & Brand Identity', note: 'Custom brand assets', price: 7500 },
  { id: 'ecommerce', label: 'E-Commerce & Payments', note: 'Products, cart, checkout', price: 20000 },
  { id: 'seo', label: 'SEO Content Package', note: '5 optimised pages of copy', price: 12000 },
];

const BASE_INVESTMENT = 15000;

export default function PricingView() {
  const [extraPages, setExtraPages] = useState(0);
  const [selected, setSelected] = useState<Record<string, boolean>>({});

  const toggle = (id: string) =>
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }));

  const addOnTotal = ADD_ONS.reduce((sum, addon) => {
    if (addon.id === 'pages') return sum + extraPages * addon.price;
    return selected[addon.id] ? sum + addon.price : sum;
  }, 0);

  const estimate = BASE_INVESTMENT + addOnTotal;

  const estimateQuery = () => {
    const chosen = ADD_ONS.filter((addon) =>
      addon.id === 'pages' ? extraPages > 0 : selected[addon.id]
    ).map((addon) => (addon.id === 'pages' ? `${extraPages} extra pages` : addon.label));

    const details = `I used the scope estimator on your website. Indicative total: ₹${estimate.toLocaleString(
      'en-IN'
    )}${chosen.length ? `, including: ${chosen.join(', ')}` : ''}. Please share a detailed quote.`;

    return `/contact?type=${encodeURIComponent(
      selected.ecommerce ? 'E-Commerce Platform' : 'Business Website'
    )}&details=${encodeURIComponent(details)}`;
  };

  return (
    <div className="space-y-24 pb-20 overflow-x-hidden">
      {/* Header */}
      <section className="text-center pt-16 space-y-5 max-w-3xl mx-auto px-4">
        <div className="inline-flex items-center space-x-2 bg-brand-blue/10 border border-brand-blue/20 px-3.5 py-1.5 rounded-full text-brand-blue text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transparent Investment</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
          Custom Quotes, Built Around Your Business
        </h1>
        <p className="text-slate-600 text-base max-w-xl mx-auto leading-relaxed">
          We do not sell fixed templates, so we do not quote fixed template prices. Every project is
          scoped to what your business actually needs — with the full cost confirmed in writing
          before any work begins.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue/90 text-white px-7 py-4 rounded-xl font-bold tracking-wide shadow-lg shadow-brand-blue/20 transition-all inline-flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>Request Your Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/portfolio"
            className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-7 py-4 rounded-xl font-bold tracking-wide transition-all inline-flex items-center justify-center cursor-pointer"
          >
            See Our Work
          </Link>
        </div>
      </section>

      {/* Packages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
                pkg.highlight
                  ? 'bg-slate-900 text-white shadow-xl border-2 border-brand-blue relative lg:-translate-y-2'
                  : 'bg-slate-50/50 border border-slate-100 hover:border-slate-200'
              }`}
            >
              {pkg.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-[10px] uppercase tracking-widest font-extrabold px-3.5 py-1 rounded-full shadow-sm flex items-center space-x-1.5 whitespace-nowrap">
                  <Star className="w-3 h-3 fill-white text-white" />
                  <span>Most Chosen</span>
                </span>
              )}

              <div className="space-y-6">
                <div>
                  <h2 className={`text-xl font-extrabold ${pkg.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {pkg.name}
                  </h2>
                  <p className={`text-xs mt-1.5 leading-relaxed ${pkg.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                    {pkg.audience}
                  </p>
                </div>

                <div className="flex items-baseline flex-wrap gap-x-2">
                  {pkg.from === null ? (
                    <span className={`text-4xl font-extrabold ${pkg.highlight ? 'text-white' : 'text-slate-950'}`}>
                      Custom Quote
                    </span>
                  ) : (
                    <>
                      <span className={`text-xs font-bold uppercase tracking-widest ${pkg.highlight ? 'text-slate-500' : 'text-slate-400'}`}>
                        From
                      </span>
                      <span className={`text-4xl font-extrabold ${pkg.highlight ? 'text-white' : 'text-slate-950'}`}>
                        ₹{pkg.from.toLocaleString('en-IN')}
                      </span>
                      <span className={`text-xs ${pkg.highlight ? 'text-slate-500' : 'text-slate-400'}`}>
                        one-time project
                      </span>
                    </>
                  )}
                </div>

                <ul className={`space-y-3.5 text-xs pt-6 border-t ${pkg.highlight ? 'text-slate-300 border-white/10' : 'text-slate-600 border-slate-200/60'}`}>
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-2.5">
                      <Check className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <Link
                  href={`/contact?type=${encodeURIComponent(
                    pkg.name === 'Premium & Custom' ? 'E-Commerce Platform' : 'Business Website'
                  )}&details=${encodeURIComponent(
                    `I would like a custom quote for the ${pkg.name} scope. Here is a bit about my business:`
                  )}`}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all cursor-pointer flex items-center justify-center space-x-2 ${
                    pkg.highlight
                      ? 'bg-brand-blue hover:bg-brand-blue/90 text-white shadow'
                      : 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-200'
                  }`}
                >
                  <span>Request Custom Quote</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-start justify-center space-x-2.5 text-xs text-slate-500 max-w-2xl mx-auto text-center">
          <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0 mt-px" />
          <p className="text-left sm:text-center">
            Ranges shown are starting points for planning. Your final quote is fixed in writing after
            the free consultation — no hidden fees, and you own the code and content outright.
          </p>
        </div>
      </section>

      {/* Scope estimator */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-mono text-brand-blue uppercase tracking-widest font-extrabold">
              Scope Estimator
            </span>
            <h2 className="text-2xl font-bold text-slate-900">Build an Indicative Scope</h2>
            <p className="text-slate-500 text-xs max-w-md mx-auto">
              Add what your business needs to see an indicative figure. It is a planning guide, not a
              quote — send it to us and we will confirm the exact cost.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {ADD_ONS.map((addon) =>
                addon.id === 'pages' ? (
                  <div key={addon.id} className="flex items-center justify-between gap-3 p-4 bg-slate-50 rounded-2xl">
                    <div className="min-w-0">
                      <span className="text-xs font-bold text-slate-800 block">{addon.label}</span>
                      <span className="text-[10px] text-slate-400">
                        {addon.note} · ₹{addon.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 shrink-0">
                      <button
                        type="button"
                        onClick={() => setExtraPages(Math.max(0, extraPages - 1))}
                        disabled={extraPages === 0}
                        aria-label="Remove a page"
                        className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-brand-blue hover:bg-slate-100 disabled:opacity-40 cursor-pointer"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-sm font-bold font-mono text-slate-800 w-4 text-center">
                        {extraPages}
                      </span>
                      <button
                        type="button"
                        onClick={() => setExtraPages(extraPages + 1)}
                        aria-label="Add a page"
                        className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-brand-blue hover:bg-slate-100 cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <label
                    key={addon.id}
                    className="flex items-center justify-between gap-3 p-4 bg-slate-50 rounded-2xl cursor-pointer hover:bg-slate-100/70 transition-colors"
                  >
                    <span className="min-w-0">
                      <span className="text-xs font-bold text-slate-800 block">{addon.label}</span>
                      <span className="text-[10px] text-slate-400">
                        {addon.note} · ₹{addon.price.toLocaleString('en-IN')}
                      </span>
                    </span>
                    <input
                      type="checkbox"
                      checked={Boolean(selected[addon.id])}
                      onChange={() => toggle(addon.id)}
                      className="w-5 h-5 accent-brand-blue rounded border-slate-200 shrink-0"
                    />
                  </label>
                )
              )}
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[9px] font-mono text-brand-blue uppercase tracking-widest font-extrabold">
                  Indicative Scope
                </span>

                <div className="space-y-2 border-b border-white/10 pb-4">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Core business website</span>
                    <span>₹{BASE_INVESTMENT.toLocaleString('en-IN')}</span>
                  </div>
                  {extraPages > 0 && (
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>Extra pages ({extraPages})</span>
                      <span>+₹{(extraPages * 3500).toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  {ADD_ONS.filter((addon) => addon.id !== 'pages' && selected[addon.id]).map((addon) => (
                    <div key={addon.id} className="flex justify-between text-xs text-slate-400">
                      <span>{addon.label}</span>
                      <span>+₹{addon.price.toLocaleString('en-IN')}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-baseline pt-2 gap-3">
                  <span className="text-sm font-semibold">Indicative total</span>
                  <div className="text-right">
                    <span className="text-3xl font-extrabold text-white font-mono">
                      ₹{estimate.toLocaleString('en-IN')}
                    </span>
                    <span className="text-slate-500 block text-[9px] mt-0.5">
                      one-time project investment
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href={estimateQuery()}
                className="w-full mt-6 bg-brand-blue hover:bg-brand-blue/90 text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Send This Scope for a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50/60 border border-slate-100 py-12 text-center rounded-3xl p-8 space-y-4">
          <h2 className="text-xl font-bold text-slate-950">
            Need a custom platform, integration or web application?
          </h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed">
            We build custom booking systems, customer portals, CRM integrations and secure web
            applications. Tell us the problem and we will scope the solution.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?type=SaaS%20%2F%20Web%20Application"
              className="text-sm font-bold text-brand-blue hover:underline cursor-pointer"
            >
              Discuss a custom project →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
