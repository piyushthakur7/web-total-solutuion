"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Check, Plus, Minus, ArrowRight, HelpCircle, Star, Sparkles } from 'lucide-react';

export default function PricingView({ serviceSlug }: { serviceSlug?: string }) {
  const router = useRouter();
  const onNavigate = (view: string, context?: any) => {
    router.push(view === 'home' ? '/' : `/${view}`);
  };
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  // Interactive Addon states
  const [extraPages, setExtraPages] = useState(0);
  const [cmsSetup, setCmsSetup] = useState(false);
  const [logoDesign, setLogoDesign] = useState(false);
  const [ecommerceIntegration, setEcommerceIntegration] = useState(false);

  let basePrices = { starter: 7999, growth: 14999, premium: 35000 };
  let customFeatures = null;

  if (serviceSlug === 'content-writing') {
    basePrices = { starter: 1000, growth: 3000, premium: 8000 };
    customFeatures = {
      starter: ['SEO Optimized Blog Post', 'Basic Copywriting', '1 Revision', '48-Hour Delivery SLA'],
      growth: ['4 Weekly Blog Posts', 'Social Media Copy', 'Unlimited Revisions', '24-Hour Priority SLA'],
      premium: ['Full Content Strategy', 'Whitepapers & PR', 'Dedicated Editor', 'Immediate Response SLA']
    };
  } else if (serviceSlug === 'ecommerce') {
    basePrices = { starter: 12999, growth: 24999, premium: 45000 };
  } else if (serviceSlug === 'saas' || serviceSlug === 'mobile-apps' || serviceSlug === 'digital-marketing') {
    // Custom price flag
    basePrices = { starter: -1, growth: -1, premium: -1 };
  }

  // Package base pricing
  const starterPrice = billingCycle === 'monthly' ? basePrices.starter : Math.round(basePrices.starter * 0.8);
  const growthPrice = billingCycle === 'monthly' ? basePrices.growth : Math.round(basePrices.growth * 0.8);
  const premiumPrice = billingCycle === 'monthly' ? basePrices.premium : Math.round(basePrices.premium * 0.8);

  // Live estimate math
  const extraPagesCost = extraPages * 2500;
  const cmsCost = cmsSetup ? 8000 : 0;
  const logoCost = logoDesign ? 5000 : 0;
  const ecomCost = ecommerceIntegration ? 15000 : 0;
  
  const selectedBasePrice = growthPrice; // base calculation on standard growth tier
  const liveTotalEstimate = selectedBasePrice + extraPagesCost + cmsCost + logoCost + ecomCost;

  const handleSelectPlan = (planName: string, planPrice: number) => {
    const cycleText = billingCycle === 'annual' ? 'one-time payment' : 'billed monthly';
    onNavigate('contact', {
      projectType: planName === 'Premium Plan' ? 'SaaS Platforms' : 'Corporate Websites',
      details: `Hi! I would like to choose the "${planName} (₹${planPrice.toLocaleString()}/mo, ${cycleText})". Let's align on the roadmap!`
    });
  };

  const handleInquireEstimate = () => {
    const activeAddons: string[] = [];
    if (extraPages > 0) activeAddons.push(`${extraPages} Extra Pages`);
    if (cmsSetup) activeAddons.push('Blog/CMS Setup');
    if (logoDesign) activeAddons.push('Logo Design');
    if (ecommerceIntegration) activeAddons.push('E-Commerce integration');

    const addOnText = activeAddons.length > 0 
      ? ` with the following additions: ${activeAddons.join(', ')}` 
      : '';

    onNavigate('contact', {
      projectType: ecommerceIntegration ? 'E-Commerce Platforms' : 'Corporate Websites',
      details: `Hi! I created a customized plan estimate on your website totaling ₹${liveTotalEstimate.toLocaleString()}. Let's discuss starting this scope${addOnText}!`
    });
  };

  return (
    <div className="space-y-24 pb-20 overflow-x-hidden">
      {/* Header */}
      <section className="text-center pt-16 space-y-4 max-w-3xl mx-auto px-4">
        <div className="inline-flex items-center space-x-2 bg-brand-blue/10 border border-brand-blue/20 px-3 py-1 rounded-full text-brand-blue text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Flexible Investing</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
          Conversion-Focused Pricing
        </h1>
        <p className="text-slate-600 text-base max-w-xl mx-auto">
          Honest pricing engineered strictly for your scope. No hidden retention fees, absolute code ownership.
        </p>

        {/* Cycle Toggle */}
        <div className="pt-6 flex justify-center items-center space-x-4">
          <span className={`text-sm font-semibold ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-400'}`}>Monthly Billing</span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
            className="w-12 h-6 bg-slate-200 rounded-full p-0.5 transition-colors relative cursor-pointer"
            aria-label="Toggle one-time payment"
          >
            <div className={`w-5 h-5 bg-brand-blue rounded-full shadow-sm transform transition-transform duration-200 ${
              billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-0'
            }`} />
          </button>
          <span className={`text-sm font-semibold flex items-center space-x-1 ${billingCycle === 'annual' ? 'text-slate-900' : 'text-slate-400'}`}>
            <span>One-Time Payment</span>
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Save 20%</span>
          </span>
        </div>
      </section>

      {/* Package Bento Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Plan 1: Starter */}
          <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-200 transition-all">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Starter Package</h3>
                <p className="text-slate-500 text-xs">For clean, singular promopages requiring top-tier optimization.</p>
              </div>
              
              <div className="flex items-baseline">
                {starterPrice === -1 ? (
                  <span className="text-4xl font-extrabold text-slate-950">Custom</span>
                ) : (
                  <>
                    <span className="text-4xl font-extrabold text-slate-950">₹{starterPrice.toLocaleString()}</span>
                    <span className="text-slate-400 text-sm ml-1">/ mo</span>
                  </>
                )}
              </div>

              <ul className="space-y-3.5 text-xs text-slate-600 pt-6 border-t border-slate-200/50">
                {customFeatures ? customFeatures.starter.map((feat, i) => (
                  <li key={i} className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                )) : (
                  <>
                    <li className="flex items-start space-x-2.5">
                      <Check className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span>1 High-Performance Landing Page</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <Check className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span>Basic SEO Architecture</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <Check className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span>1 Year Complimentary Support</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <Check className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span>48-Hour Response SLA</span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => handleSelectPlan('Starter Plan', starterPrice)}
                className="w-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 py-3 rounded-xl font-bold text-xs tracking-wider uppercase transition-all cursor-pointer"
              >
                Choose Starter Scope
              </button>
            </div>
          </div>

          {/* Plan 2: Growth (Highlighted) */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 flex flex-col justify-between relative shadow-xl border-2 border-brand-blue transform lg:-translate-y-2">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-[10px] uppercase tracking-widest font-extrabold px-3.5 py-1 rounded-full shadow-sm flex items-center space-x-1.5">
              <Star className="w-3 h-3 fill-white text-white" />
              <span>Most Popular Choice</span>
            </span>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-extrabold text-white">Growth Package</h3>
                <p className="text-slate-400 text-xs">A comprehensive system optimized for fast-growing SMEs.</p>
              </div>
              
              <div className="flex items-baseline">
                {growthPrice === -1 ? (
                  <span className="text-5xl font-extrabold text-white">Custom</span>
                ) : (
                  <>
                    <span className="text-5xl font-extrabold text-white">₹{growthPrice.toLocaleString()}</span>
                    <span className="text-slate-500 text-sm ml-1">/ mo</span>
                  </>
                )}
              </div>

              <ul className="space-y-3.5 text-xs text-slate-300 pt-6 border-t border-white/5">
                {customFeatures ? customFeatures.growth.map((feat, i) => (
                  <li key={i} className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                )) : (
                  <>
                    <li className="flex items-start space-x-2.5">
                      <Check className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span>Up to 5 Responsive Sub-pages</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <Check className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span>Headless Content Management (CMS)</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <Check className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span>Advanced Conversion Funnel setup</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <Check className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span>24-Hour Response SLA</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <Check className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span>Custom Analytics Integration</span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => handleSelectPlan('Growth Plan', growthPrice)}
                className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase shadow transition-all cursor-pointer"
              >
                Choose Growth Scope
              </button>
            </div>
          </div>

          {/* Plan 3: Premium */}
          <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-200 transition-all">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Premium Package</h3>
                <p className="text-slate-500 text-xs">For high-traffic platforms requiring advanced server configurations.</p>
              </div>
              
              <div className="flex items-baseline">
                {premiumPrice === -1 ? (
                  <span className="text-4xl font-extrabold text-slate-950">Custom</span>
                ) : (
                  <>
                    <span className="text-4xl font-extrabold text-slate-950">₹{premiumPrice.toLocaleString()}</span>
                    <span className="text-slate-400 text-sm ml-1">/ mo</span>
                  </>
                )}
              </div>

              <ul className="space-y-3.5 text-xs text-slate-600 pt-6 border-t border-slate-200/50">
                {customFeatures ? customFeatures.premium.map((feat, i) => (
                  <li key={i} className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>{feat}</span>
                  </li>
                )) : (
                  <>
                    <li className="flex items-start space-x-2.5">
                      <Check className="w-4 h-4 text-brand-blue shrink-0" />
                      <span>Up to 10 Advanced Pages</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <Check className="w-4 h-4 text-brand-blue shrink-0" />
                      <span>Advanced Database & Auth Schemes</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <Check className="w-4 h-4 text-brand-blue shrink-0" />
                      <span>Extreme SEO & Performance Audits</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <Check className="w-4 h-4 text-brand-blue shrink-0" />
                      <span>Priority 24/7 Phone Support</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <Check className="w-4 h-4 text-brand-blue shrink-0" />
                      <span>Immediate Emergency Mitigation SLA</span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => handleSelectPlan('Premium Plan', premiumPrice)}
                className="w-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 py-3 rounded-xl font-bold text-xs tracking-wider uppercase transition-all cursor-pointer"
              >
                Choose Premium Scope
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Budget Estimator (Creative craftsmanship addition) */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-8">
          <div className="text-center space-y-1.5">
            <span className="text-[10px] font-mono text-brand-blue uppercase tracking-widest font-extrabold">INTERACTIVE CALCULATOR</span>
            <h2 className="text-2xl font-bold text-slate-900">Configure Modular Scope Add-Ons</h2>
            <p className="text-slate-500 text-xs">Toggle individual modules onto the standard Growth base plan to calculate your live setup quote.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Controls */}
            <div className="space-y-5">
              {/* Addon 1: Extra pages */}
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                <div>
                  <span className="text-xs font-bold text-slate-850 block">Extra Custom Pages</span>
                  <span className="text-[10px] text-slate-400">₹2,500 per extra page</span>
                </div>
                <div className="flex items-center space-x-3.5">
                  <button
                    onClick={() => setExtraPages(Math.max(0, extraPages - 1))}
                    className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-brand-blue hover:bg-slate-100 disabled:opacity-40"
                    disabled={extraPages === 0}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-bold font-mono text-slate-800">{extraPages}</span>
                  <button
                    onClick={() => setExtraPages(extraPages + 1)}
                    className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-brand-blue hover:bg-slate-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Addon 2: CMS setup */}
              <label className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl cursor-pointer">
                <div>
                  <span className="text-xs font-bold text-slate-850 block">Headless CMS Setup</span>
                  <span className="text-[10px] text-slate-400">₹8,000 one-time setup</span>
                </div>
                <input
                  type="checkbox"
                  checked={cmsSetup}
                  onChange={(e) => setCmsSetup(e.target.checked)}
                  className="w-5 h-5 accent-brand-blue rounded border-slate-200"
                />
              </label>

              {/* Addon 3: Logo design */}
              <label className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl cursor-pointer">
                <div>
                  <span className="text-xs font-bold text-slate-850 block">Branding & Logo Design</span>
                  <span className="text-[10px] text-slate-400">₹5,000 custom assets</span>
                </div>
                <input
                  type="checkbox"
                  checked={logoDesign}
                  onChange={(e) => setLogoDesign(e.target.checked)}
                  className="w-5 h-5 accent-brand-blue rounded border-slate-200"
                />
              </label>

              {/* Addon 4: E-commerce setup */}
              <label className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl cursor-pointer">
                <div>
                  <span className="text-xs font-bold text-slate-850 block">Stripe E-Commerce Setup</span>
                  <span className="text-[10px] text-slate-400">₹15,000 complete custom checkout</span>
                </div>
                <input
                  type="checkbox"
                  checked={ecommerceIntegration}
                  onChange={(e) => setEcommerceIntegration(e.target.checked)}
                  className="w-5 h-5 accent-brand-blue rounded border-slate-200"
                />
              </label>
            </div>

            {/* Right Live Estimate Recalculator */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[9px] font-mono text-brand-blue uppercase tracking-widest font-extrabold">LIVE SETUP ESTIMATE</span>
                
                <div className="space-y-2 border-b border-white/5 pb-4">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Base Tier (Growth)</span>
                    <span>₹{selectedBasePrice.toLocaleString()}</span>
                  </div>
                  {extraPages > 0 && (
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>Extra Pages ({extraPages})</span>
                      <span>+₹{extraPagesCost.toLocaleString()}</span>
                    </div>
                  )}
                  {cmsSetup && (
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>CMS Setup</span>
                      <span>+₹8,000</span>
                    </div>
                  )}
                  {logoDesign && (
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>Logo & Brand assets</span>
                      <span>+₹5,000</span>
                    </div>
                  )}
                  {ecommerceIntegration && (
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>E-Commerce System</span>
                      <span>+₹15,000</span>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-baseline pt-2">
                  <span className="text-sm font-semibold">Total Estimated Cost:</span>
                  <div className="text-right">
                    <span className="text-3xl font-extrabold text-white font-mono">₹{liveTotalEstimate.toLocaleString()}</span>
                    <span className="text-slate-500 block text-[9px] mt-0.5">({billingCycle === 'annual' ? 'one-time payment' : 'billed monthly'})</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleInquireEstimate}
                className="w-full mt-6 bg-brand-blue hover:bg-brand-blue/95 text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Inquire With Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Bottom Callout */}
      <section className="bg-slate-50/60 py-12 border-y border-slate-100 text-center max-w-7xl mx-auto rounded-3xl p-8 space-y-4">
        <h2 className="text-xl font-bold text-slate-950">Require custom platform design or APIs?</h2>
        <p className="text-slate-600 text-sm max-w-md mx-auto">
          Our team provides custom serverless integrations, real-time message relays, secure databases, and bespoke platform templates.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onNavigate('contact', { projectType: 'SaaS Platforms', details: 'Hi! We would like to discuss a custom Enterprise solution with proprietary API structures.' })}
            className="text-sm font-bold text-brand-blue hover:underline cursor-pointer"
          >
            Discuss Enterprise Solutions →
          </button>
        </div>
      </section>
    </div>
  );
}
