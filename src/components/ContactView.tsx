"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, ArrowRight, MessageSquare, Shield, Clock, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactView() {
  const router = useRouter();
  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Corporate Websites');
  const [details, setDetails] = useState('');

  // Submission process state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryCode, setInquiryCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);

    // Simulate database write & security handshake
    setTimeout(() => {
      const code = `WTS-${Math.floor(100000 + Math.random() * 900000)}`;
      setInquiryCode(code);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setDetails('');
    setSubmitted(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Title */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">Contact Our Team</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
          Ready to Grow Your Business?
        </h1>
        <p className="text-slate-600 text-sm">
          Submit your scope details below. Our engineering team will review your specifications and follow up within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Left Side: Form */}
        <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-8 shadow-sm relative">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="contact-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="workEmail" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Work Email *
                    </label>
                    <input
                      id="workEmail"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                    />
                  </div>
                </div>

                {/* Scope dropdown select */}
                <div className="space-y-1.5">
                  <label htmlFor="projectType" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Project Target Scope
                  </label>
                  <select
                    id="projectType"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue bg-white transition-colors"
                  >
                    <option value="Corporate Websites">Corporate Website (Marketing & Brand Showcase)</option>
                    <option value="SaaS Platforms">SaaS / Web Application Development</option>
                    <option value="E-Commerce Platforms">E-Commerce Storefront (Checkout & Payment setup)</option>
                    <option value="Landing Pages">High-Converting Landing Pages (Promo/Ad campaigns)</option>
                  </select>
                </div>

                {/* Details text area */}
                <div className="space-y-1.5">
                  <label htmlFor="projectDetails" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Project Details & Specs
                  </label>
                  <textarea
                    id="projectDetails"
                    rows={5}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Describe your design, feature requirements, and timeline parameters..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors resize-none"
                  />
                </div>

                {/* Disclaimers */}
                <div className="flex items-center space-x-3 text-[11px] text-slate-400 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <Shield className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>Data is encrypted strictly under our privacy policies. We never sell, distribute, or share lead metrics.</span>
                </div>

                {/* Submit trigger */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-4 rounded-xl text-sm tracking-wide shadow-sm hover:shadow-md transition-all flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin border-2 border-white border-t-transparent w-4 h-4 rounded-full mr-2" />
                      <span>Transmitting Blueprint specs...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="submission-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-8 space-y-6"
              >
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-sm border border-emerald-100">
                  <CheckCircle className="w-10 h-10" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-950">Inquiry Received!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Hi <span className="font-semibold text-slate-900">{name}</span>, your scope blueprint was dispatched successfully. Our design and system architecture team has been notified.
                  </p>
                </div>

                {/* Inquiry Code & SLA */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 max-w-sm mx-auto text-left space-y-3">
                  <div className="flex justify-between text-xs text-slate-500 border-b border-slate-200/50 pb-2.5">
                    <span>TRANSMISSION ID</span>
                    <span className="font-mono font-bold text-slate-800">{inquiryCode}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500 border-b border-slate-200/50 pb-2.5">
                    <span>TARGET SCOPE</span>
                    <span className="font-semibold text-slate-800 text-right">{projectType}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>RESPONSE SLA</span>
                    <span className="font-bold text-emerald-600 flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 inline mr-0.5" />
                      <span>&lt; 24 Hours</span>
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleResetForm}
                    className="text-xs font-bold text-brand-blue hover:underline cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Side: Map & Direct Channels */}
        <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
          {/* Quick info rails */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 space-y-6">
            <h3 className="text-lg font-bold text-slate-950 tracking-tight">Direct Channels</h3>
            
            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-bold">Email Address</span>
                  <a href="mailto:hello@webtotalsolution.com" className="text-sm font-semibold text-slate-800 hover:text-brand-blue hover:underline">
                    hello@webtotalsolution.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                  <MessageSquare className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-bold">WhatsApp Direct</span>
                  <span className="text-sm font-semibold text-slate-800">
                    +1 (555) 019-2837
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-bold">Headquarters</span>
                  <span className="text-sm font-semibold text-slate-800">
                    Tech District, Building 4,<br />San Francisco, CA 94105
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Styled Map frame with marker overlay */}
          <div className="border border-slate-150 rounded-3xl overflow-hidden bg-white shadow-sm relative group aspect-video">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpPUtL1l6N-Hol-fBqsvSbAXTM9CBjo0p0HRX7VaQ38CMZ3q4kwqxeMonZsihaAFfomEU6cR7jYBuaiUuhufq74XEeccPQzZk4EJDaBddUMON4TNz40Knmg8-zrFiQCX4nCAjV7HXj9OZ0_WGeWxDaRXj1zm8m2MErjL7r7loFvQWEK89whWjoNkWapP5lBQ9PllqBzaimTnmAYqL8AwPtFTl0u7zWxA0u2S2ADO7BzhvRJI9OLGKWMU84N4NGBQMGW4Er4gEWk0Q"
              alt="Web Total Solution San Francisco Headquarters Map Location"
              className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
            {/* Pulsing Marker Overlay */}
            <div className="absolute top-[48%] left-[51%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="w-3.5 h-3.5 bg-brand-blue border-2 border-white rounded-full inline-block animate-ping absolute" />
              <span className="w-3.5 h-3.5 bg-brand-blue border-2 border-white rounded-full inline-block relative z-10" />
              <div className="bg-slate-900 text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-md mt-1 font-mono uppercase tracking-wide">
                WTS HQ
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
