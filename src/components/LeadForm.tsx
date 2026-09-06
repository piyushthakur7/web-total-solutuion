"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Clock, Send, Shield } from 'lucide-react';
import { LEAD_CAPTURE_KEY, LEAD_CAPTURE_URL } from '../siteContent';

export const PROJECT_TYPES = [
  'Business Website',
  'Website Redesign',
  'E-Commerce Platform',
  'Landing Page',
  'SaaS / Web Application',
  'Digital Marketing & SEO',
] as const;

const PROJECT_TYPE_LABELS: Record<string, string> = {
  'Business Website': 'Business Website (services, brand, lead generation)',
  'Website Redesign': 'Website Redesign (rebuild an existing site)',
  'E-Commerce Platform': 'E-Commerce Store (products, payments, checkout)',
  'Landing Page': 'Landing Page (ad campaign or single offer)',
  'SaaS / Web Application': 'SaaS / Web Application (custom software)',
  'Digital Marketing & SEO': 'Digital Marketing & SEO',
};

const BUDGET_RANGES = [
  '₹15,000 – ₹25,000',
  '₹25,000 – ₹50,000',
  '₹50,000 – ₹1,00,000',
  'Above ₹1,00,000',
  'Not sure yet — advise me',
];

interface LeadFormProps {
  /** Pre-selects the enquiry type, e.g. from a landing page. */
  defaultProjectType?: string;
  /** Pre-fills the message body. */
  defaultDetails?: string;
  /** Identifies which page produced the lead, included in the message. */
  source?: string;
  /** `compact` drops the surrounding card chrome for embedding in a section. */
  variant?: 'card' | 'compact';
  submitLabel?: string;
}

/**
 * Shared enquiry form used by the contact page and every landing page.
 * Submissions open the visitor's mail client or WhatsApp — the same mechanism
 * the site already used, now with qualification fields that raise lead quality.
 */
export default function LeadForm({
  defaultProjectType = 'Business Website',
  defaultDetails = '',
  source,
  variant = 'card',
  submitLabel = 'Get My Free Consultation',
}: LeadFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState(defaultProjectType);
  const [budget, setBudget] = useState(BUDGET_RANGES[0]);
  const [details, setDetails] = useState(defaultDetails);
  // Honeypot — real visitors never see or fill this field.
  const [companyWebsite, setCompanyWebsite] = useState('');

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryCode, setInquiryCode] = useState('');

  // Allow CTAs elsewhere on the site to deep-link with context, e.g.
  // /contact?type=Website%20Redesign&details=...
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    const message = params.get('details');
    if (type && (PROJECT_TYPES as readonly string[]).includes(type)) setProjectType(type);
    if (message) setDetails(message);
  }, []);

  const buildMessage = () =>
    [
      `Name: ${name}`,
      `Phone / WhatsApp: ${phone}`,
      email ? `Email: ${email}` : null,
      `Project Type: ${projectType}`,
      `Budget Range: ${budget}`,
      source ? `Enquiry Source: ${source}` : null,
      '',
      'Requirements:',
      details || '(not provided)',
    ]
      .filter(Boolean)
      .join('\n');

  const handleSubmit = async () => {
    if (!name.trim() || !phone.trim()) {
      setError('Please add your name and phone number so we can reach you.');
      return;
    }

    // Bots fill every field, including this hidden one — accept silently
    // without ever hitting the backend.
    if (companyWebsite) {
      setInquiryCode(`WTS-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitted(true);
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      const res = await fetch(LEAD_CAPTURE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          message: buildMessage(),
          key: LEAD_CAPTURE_KEY,
          source: source || 'Website form',
          page_url: window.location.href,
        }),
      });
      const result = await res.json();

      if (result.ok) {
        setInquiryCode(`WTS-${Math.floor(100000 + Math.random() * 900000)}`);
        setSubmitted(true);
      } else {
        setError(result.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setDetails('');
    setSubmitted(false);
  };

  const fieldClass =
    'w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors';
  const labelClass = 'text-xs font-bold text-slate-700 uppercase tracking-wide';

  const wrapperClass =
    variant === 'card'
      ? 'bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm relative'
      : 'relative';

  return (
    <div className={wrapperClass}>
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="lead-form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label htmlFor="lead-name" className={labelClass}>
                  Your Name *
                </label>
                <input
                  id="lead-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rohan Sharma"
                  className={fieldClass}
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="lead-phone" className={labelClass}>
                  Phone / WhatsApp *
                </label>
                <input
                  id="lead-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="lead-email" className={labelClass}>
                Email <span className="text-slate-400 normal-case font-medium">(optional)</span>
              </label>
              <input
                id="lead-email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className={fieldClass}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label htmlFor="lead-project-type" className={labelClass}>
                  What Do You Need?
                </label>
                <select
                  id="lead-project-type"
                  name="projectType"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className={`${fieldClass} bg-white`}
                >
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {PROJECT_TYPE_LABELS[type]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="lead-budget" className={labelClass}>
                  Investment Range
                </label>
                <select
                  id="lead-budget"
                  name="budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className={`${fieldClass} bg-white`}
                >
                  {BUDGET_RANGES.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="lead-details" className={labelClass}>
                Tell Us About Your Business
              </label>
              <textarea
                id="lead-details"
                name="details"
                rows={4}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="What does your business do, and what should the website achieve for you?"
                className={`${fieldClass} resize-none`}
              />
            </div>

            {/* Honeypot: real visitors never see this field. Leave it in the form. */}
            <input
              name="company_website"
              type="text"
              value={companyWebsite}
              onChange={(e) => setCompanyWebsite(e.target.value)}
              style={{ position: 'absolute', left: '-9999px' }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            {error && (
              <p role="alert" className="text-xs font-semibold text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                {error}
              </p>
            )}

            <div className="flex items-center space-x-3 text-[11px] text-slate-500 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              <Shield className="w-4 h-4 text-brand-blue shrink-0" />
              <span>
                Your details stay private. We never sell or share enquiry data, and there is no
                obligation to proceed after the consultation.
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-4 rounded-xl text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending…' : submitLabel}</span>
              </button>
            </div>

            <p className="text-center text-[11px] text-slate-400">
              Typical response time: under 24 hours on working days.
            </p>
          </motion.form>
        ) : (
          <motion.div
            key="lead-success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-8 space-y-6"
          >
            <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-sm border border-emerald-100">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-950">Consultation Request Sent</h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Thanks {name.split(' ')[0] || 'there'} — your request is on its way. Our team will
                review your requirements and get back to you with next steps.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 max-w-sm mx-auto text-left space-y-3">
              <div className="flex justify-between text-xs text-slate-500 border-b border-slate-200/50 pb-2.5">
                <span>REFERENCE ID</span>
                <span className="font-mono font-bold text-slate-800">{inquiryCode}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-500 border-b border-slate-200/50 pb-2.5">
                <span>REQUIREMENT</span>
                <span className="font-semibold text-slate-800 text-right">{projectType}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-500">
                <span>RESPONSE TIME</span>
                <span className="font-bold text-emerald-600 flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>&lt; 24 Hours</span>
                </span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="text-xs font-bold text-brand-blue hover:underline cursor-pointer"
            >
              Submit another enquiry
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
