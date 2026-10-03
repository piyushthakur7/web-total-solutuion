"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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

/** INR ranges for the domestic landing pages; USD ranges match /pricing. */
const BUDGET_RANGES = {
  INR: [
    '₹15,000 – ₹25,000',
    '₹25,000 – ₹50,000',
    '₹50,000 – ₹1,00,000',
    'Above ₹1,00,000',
    'Not sure yet — advise me',
  ],
  USD: [
    '$1,200 – $2,500',
    '$2,500 – $5,000',
    '$5,000 – $10,000',
    'Above $10,000',
    'Not sure yet — advise me',
  ],
};

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
  /** Currency of the budget ranges offered. */
  currency?: keyof typeof BUDGET_RANGES;
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
  currency = 'INR',
}: LeadFormProps) {
  const budgetRanges = BUDGET_RANGES[currency];

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState(defaultProjectType);
  const [budget, setBudget] = useState(budgetRanges[0]);
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
      setError('Add your name and phone number so we can reach you.');
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
        setError(result.error || 'Your request was not sent. Try again, or message us on WhatsApp.');
      }
    } catch {
      setError('Your request was not sent. Check your connection and try again, or message us on WhatsApp.');
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

  // 16px text keeps iOS from zooming the page when a field is focused.
  const fieldClass =
    'w-full min-h-12 px-4 py-3 rounded-md border border-ink/25 bg-white text-base text-ink placeholder:text-graphite/70 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors';
  const labelClass = 'block text-[15px] font-semibold text-ink';
  const optionalClass = 'font-normal text-graphite';

  const wrapperClass =
    variant === 'card'
      ? 'bg-white border border-ink/15 rounded-lg p-6 sm:p-9 relative'
      : 'relative';

  return (
    <div className={wrapperClass}>
      <AnimatePresence mode="wait" initial={false}>
        {!submitted ? (
          <motion.form
            key="lead-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="lead-name" className={labelClass}>
                  Your name
                </label>
                <input
                  id="lead-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={fieldClass}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lead-phone" className={labelClass}>
                  Phone or WhatsApp
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
                  placeholder="With country code"
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="lead-email" className={labelClass}>
                Email <span className={optionalClass}>(optional)</span>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="lead-project-type" className={labelClass}>
                  What do you need?
                </label>
                <select
                  id="lead-project-type"
                  name="projectType"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className={fieldClass}
                >
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {PROJECT_TYPE_LABELS[type]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="lead-budget" className={labelClass}>
                  Budget range
                </label>
                <select
                  id="lead-budget"
                  name="budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className={fieldClass}
                >
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="lead-details" className={labelClass}>
                About the project <span className={optionalClass}>(optional)</span>
              </label>
              <textarea
                id="lead-details"
                name="details"
                rows={5}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="What does your business do, and what should the website achieve?"
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
              <p role="alert" className="rounded-md border border-red-300 bg-red-50 px-4 py-3 text-[15px] font-medium text-red-800">
                {error}
              </p>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="btn btn-ink w-full disabled:opacity-50"
            >
              {isSubmitting ? 'Sending…' : submitLabel}
            </button>

            <p className="text-sm leading-relaxed text-graphite">
              We reply within 24 hours on working days. Your details stay private, and there is no
              obligation to go ahead.
            </p>
          </motion.form>
        ) : (
          <motion.div
            key="lead-success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-4"
          >
            <h3 className="font-display text-4xl text-ink">Request sent</h3>
            <p className="mt-3 max-w-md text-base leading-relaxed text-graphite">
              Thanks {name.split(' ')[0] || 'there'}. We will review what you sent and reply within
              24 hours on working days.
            </p>

            <dl className="mt-8 max-w-sm border-t border-ink/15 text-[15px]">
              <div className="flex justify-between gap-6 border-b border-ink/15 py-3">
                <dt className="text-graphite">Reference</dt>
                <dd className="font-semibold text-ink">{inquiryCode}</dd>
              </div>
              <div className="flex justify-between gap-6 border-b border-ink/15 py-3">
                <dt className="text-graphite">Project</dt>
                <dd className="text-right font-semibold text-ink">{projectType}</dd>
              </div>
            </dl>

            <button
              type="button"
              onClick={handleReset}
              className="mt-8 text-[15px] font-semibold text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink cursor-pointer"
            >
              Send another request
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
