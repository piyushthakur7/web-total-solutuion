/** The domestic campaign is separate from the studio's USD packages. */
export const ADS_PATH = '/website-design-development';
export const ADS_CTA = 'Get My Website Quote';
export const ADS_WHATSAPP = 'https://wa.me/916291519364?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20business%20website.';

export const ADS_WEBSITE_TYPES = [
  'Business / Corporate', 'E-commerce', 'School / Coaching', 'Real Estate',
  'Interior Design', 'Clinic / Healthcare', 'Hotel / Hospitality', 'Custom Website',
] as const;
export const ADS_BUDGETS = ['₹6,999–₹15,000', '₹15,000–₹30,000', '₹30,000–₹60,000', '₹60,000+', 'Please advise'] as const;
export const ADS_TIMELINES = ['As soon as possible', 'Within a month', 'Within 1–3 months', 'Just exploring'] as const;
export const CAMPAIGN_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'gbraid', 'wbraid'] as const;

export interface AdsLead {
  name: string;
  phone: string;
  email: string;
  business: string;
  businessType: string;
  website: string;
  websiteType: string;
  budget: string;
  timeline: string;
  details: string;
}
export const EMPTY_ADS_LEAD: AdsLead = {
  name: '', phone: '', email: '', business: '', businessType: '', website: '',
  websiteType: '', budget: '', timeline: '', details: '',
};
export type AdsErrors = Partial<Record<keyof AdsLead, string>>;

export function validateAdsLead(fields: AdsLead): AdsErrors {
  const errors: AdsErrors = {};
  if (!fields.name.trim()) errors.name = 'Please enter your full name.';
  else if (fields.name.length > 120) errors.name = 'Please keep your name under 120 characters.';
  const digits = fields.phone.replace(/\D/g, '');
  if (!/^[+\d\s().-]+$/.test(fields.phone) || digits.length < 10 || digits.length > 15) {
    errors.phone = 'Enter a valid phone number, including your country code if outside India.';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.trim()) || fields.email.length > 254) {
    errors.email = 'Please enter an email address like you@company.com.';
  }
  for (const key of ['business', 'businessType', 'website'] as const) {
    if (fields[key].length > 240) errors[key] = 'Please keep this under 240 characters.';
  }
  if (fields.website && !/^https?:\/\/[^\s]+\.[^\s]+$/i.test(fields.website)) {
    errors.website = 'Enter the full website address, starting with https://, or leave it empty.';
  }
  if (fields.websiteType && !(ADS_WEBSITE_TYPES as readonly string[]).includes(fields.websiteType)) errors.websiteType = 'Choose a website type from the list.';
  if (fields.budget && !(ADS_BUDGETS as readonly string[]).includes(fields.budget)) errors.budget = 'Choose a budget from the list.';
  if (fields.timeline && !(ADS_TIMELINES as readonly string[]).includes(fields.timeline)) errors.timeline = 'Choose a timeline from the list.';
  if (fields.details.length > 2000) errors.details = 'Please keep project details under 2,000 characters.';
  return errors;
}

/** Allowlisted campaign values only; arbitrary query parameters never enter the CRM. */
export function campaignFromSearch(search: string): Record<string, string> {
  const params = new URLSearchParams(search);
  return Object.fromEntries(CAMPAIGN_KEYS.flatMap((key) => {
    const value = params.get(key)?.replace(/[\x00-\x1f\x7f]/g, '').slice(0, 200);
    return value ? [[key, value]] : [];
  }));
}

export function adsLeadMessage(fields: AdsLead, campaign: Record<string, string>) {
  const lines = [
    'Website design & development campaign enquiry',
    'Offer viewed: Starter Website, starting at INR 6,999; final scope subject to written quote.',
    `Name: ${fields.name}`, `Email: ${fields.email}`, `Phone / WhatsApp: ${fields.phone}`,
    fields.business && `Business name: ${fields.business}`,
    fields.businessType && `Business type: ${fields.businessType}`,
    fields.website && `Current website: ${fields.website}`,
    fields.websiteType && `Website required: ${fields.websiteType}`,
    fields.budget && `Approximate budget: ${fields.budget}`,
    fields.timeline && `Expected timeline: ${fields.timeline}`,
    `Project details: ${fields.details || '(not provided)'}`,
    ...Object.entries(campaign).map(([key, value]) => `${key}: ${value}`),
  ];
  return lines.filter(Boolean).join('\n');
}

export const ADS_FAQS = [
  { question: 'How much does a business website cost?', answer: 'Our Starter Website offer starts at ₹6,999. Your final price depends on the agreed pages, content and features. We send a written quote before any work begins; e-commerce and custom development are quoted separately.' },
  { question: 'What is included in the ₹6,999 package?', answer: 'The offer is for a starter business website. The exact page count, features, revision rounds and content responsibilities are confirmed in your written quote. Please share your requirements so we can confirm whether the starting offer fits your project.' },
  { question: 'How long does development take?', answer: 'We confirm a delivery estimate after reviewing your requirements, content and integrations. Your quote includes the agreed schedule. Content readiness and design approvals affect the launch date.' },
  { question: 'Will my website work on mobile?', answer: 'Yes. Websites are built responsively and checked on mobile, tablet and desktop so visitors can read your content and contact your business across screen sizes.' },
  { question: 'Can you redesign my existing website?', answer: 'Yes. Share your current website and what you want to improve. We review the existing pages, content and functionality, then quote for the redesign and any migration work.' },
  { question: 'Are domain, hosting and taxes included?', answer: 'Domain registration, hosting, renewals, paid tools and any applicable taxes are itemised in the written quote. They are not advertised as included in the ₹6,999 starting price. Ask us for the complete first-year and recurring costs before proceeding.' },
  { question: 'Can I add an online store or custom features?', answer: 'Yes. Online payments, product catalogues, bookings, dashboards and advanced integrations are scoped and priced separately. Tell us what you need and we will recommend a suitable approach.' },
  { question: 'What support is available after launch?', answer: 'The support period, included fixes and any ongoing maintenance fees are agreed in your written quote before work starts. Ask us about a care plan if you need regular updates after the included period.' },
];
