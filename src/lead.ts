/**
 * Enquiry logic shared by <LeadForm /> and its tests: the options offered,
 * validation, the payload sent to the capture-lead function and the query
 * parameters other pages use to open the form with context.
 *
 * Kept free of React and browser APIs so it can be tested directly.
 */

import { WEBSITE_PACKAGES, getPackage } from './siteContent';

export const PROJECT_TYPES = [
  'Startup Marketing Website',
  'Landing Page',
  'Website Redesign',
  'Business Website',
  'SaaS / Web Application',
  'E-Commerce Platform',
  'Mobile App',
  'Content Writing',
  'Digital Marketing & SEO',
  'Something else',
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];

/**
 * Budget is optional and starts unselected. Ranges are in USD to match the
 * published packages; a domestic enquiry can ask for an INR quote instead of
 * guessing at a converted figure.
 */
export const BUDGET_RANGES = [
  'Under $1,200',
  '$1,200 – $2,500',
  '$2,500 – $5,000',
  '$5,000 – $10,000',
  'Above $10,000',
  'Please quote in INR after scoping',
  'Not sure yet',
] as const;

export interface LeadFields {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  /** Package slug from WEBSITE_PACKAGES, or '' when none is chosen. */
  packageSlug: string;
  budget: string;
  details: string;
}

export const EMPTY_LEAD: LeadFields = {
  name: '',
  email: '',
  phone: '',
  company: '',
  projectType: '',
  packageSlug: '',
  budget: '',
  details: '',
};

export type LeadErrors = Partial<Record<'name' | 'email' | 'phone', string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Name and email are required. Phone is optional but must look like a number if given. */
export function validateLead(fields: LeadFields): LeadErrors {
  const errors: LeadErrors = {};
  if (!fields.name.trim()) errors.name = 'Enter your name.';

  const email = fields.email.trim();
  if (!email) errors.email = 'Enter your email address so we can reply.';
  else if (!EMAIL_PATTERN.test(email)) errors.email = 'Enter an email address like name@company.com.';

  const phone = fields.phone.trim();
  if (phone && phone.replace(/\D/g, '').length < 7) {
    errors.phone = 'Enter a full phone number with country code, or leave this empty.';
  }
  return errors;
}

/** The readable summary stored with the lead and sent in the notification. */
export function buildLeadMessage(fields: LeadFields, source?: string): string {
  const pkg = getPackage(fields.packageSlug);
  return [
    `Name: ${fields.name.trim()}`,
    `Email: ${fields.email.trim()}`,
    fields.phone.trim() ? `Phone / WhatsApp: ${fields.phone.trim()}` : null,
    fields.company.trim() ? `Company / website: ${fields.company.trim()}` : null,
    fields.projectType ? `Project type: ${fields.projectType}` : null,
    pkg ? `Package: ${pkg.name} (from $${pkg.from.toLocaleString('en-US')} USD)` : null,
    fields.budget ? `Budget range: ${fields.budget}` : null,
    source ? `Enquiry source: ${source}` : null,
    '',
    'Project details:',
    fields.details.trim() || '(not provided)',
  ]
    .filter((line) => line !== null)
    .join('\n');
}

/**
 * Body posted to the capture-lead function. The shape matches what the
 * function already receives; `phone` is an empty string when it was left out.
 */
export function buildLeadPayload(
  fields: LeadFields,
  context: { key: string; source?: string; pageUrl: string },
) {
  return {
    name: fields.name.trim(),
    phone: fields.phone.trim(),
    email: fields.email.trim(),
    message: buildLeadMessage(fields, context.source),
    key: context.key,
    source: context.source || 'Website form',
    page_url: context.pageUrl,
  };
}

/**
 * Reads the context another page passed in the URL, e.g.
 * /contact?package=startup-growth-site or /contact?type=Landing%20Page.
 * Unknown values are ignored rather than trusted, and free text is capped.
 */
export function parseLeadPrefill(search: string): Partial<LeadFields> {
  const params = new URLSearchParams(search);
  const prefill: Partial<LeadFields> = {};

  const pkg = getPackage(params.get('package'));
  if (pkg) {
    prefill.packageSlug = pkg.slug;
    prefill.projectType = pkg.projectType;
  }

  const type = params.get('type');
  if (type && (PROJECT_TYPES as readonly string[]).includes(type)) prefill.projectType = type;

  const details = params.get('details');
  if (details) prefill.details = details.slice(0, 600);

  return prefill;
}

/** Builds an enquiry link that opens /contact with the right context. */
export function contactHref(context: { package?: string; type?: ProjectType; details?: string } = {}) {
  const params = new URLSearchParams();
  if (context.package && WEBSITE_PACKAGES.some((pkg) => pkg.slug === context.package)) {
    params.set('package', context.package);
  }
  if (context.type) params.set('type', context.type);
  if (context.details) params.set('details', context.details);
  const query = params.toString();
  return query ? `/contact?${query}` : '/contact';
}

/** mailto: fallback offered when the form cannot be delivered. */
export function mailtoFallback(email: string, fields: LeadFields, source?: string) {
  const subject = `Project enquiry from ${fields.name.trim() || 'the website'}`;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    buildLeadMessage(fields, source),
  )}`;
}
