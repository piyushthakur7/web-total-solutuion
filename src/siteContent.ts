/**
 * Shared conversion / trust content used across the homepage and landing pages.
 * Keeping it here means copy edits happen in one file instead of across JSX.
 */

export const WHATSAPP_URL = 'https://wa.me/916291519364';
export const PHONE_DISPLAY = '+91 6291 519 364';
export const EMAIL = 'info@webtotalsolution.com';

/** Short reassurance chips shown directly under the primary CTA. */
export const HERO_TRUST_BADGES = [
  'Fast Delivery',
  'SEO Ready',
  'Mobile Responsive',
  '30 Days Support',
];

/**
 * Headline social proof.
 * NOTE: `35+` is the figure supplied by the business. Update these numbers as
 * the portfolio grows — every claim here should stay verifiable.
 */
export const TRUST_STATS = [
  { value: '35+', label: 'Websites Delivered', sub: 'Across 12+ industries' },
  { value: '4.6★', label: 'Google Rating', sub: 'Verified client reviews' },
  { value: '100%', label: 'Mobile Responsive', sub: 'Every build, every device' },
  { value: '24 hrs', label: 'Response Time', sub: 'On every new inquiry' },
];

/** Secondary proof strip — capability signals rather than numbers. */
export const CAPABILITY_SIGNALS = [
  'SEO Optimised Structure',
  'Modern, Premium UI',
  'Core Web Vitals Tuned',
  'Secure & SSL Ready',
  'Full Code Ownership',
];

/** "Web Total Solution vs Typical Freelancer" comparison rows. */
export const COMPARISON_ROWS: {
  feature: string;
  detail: string;
  agency: boolean;
  freelancer: boolean | 'partial';
}[] = [
  {
    feature: 'Professional Design',
    detail: 'Custom UI built around your brand — never a recycled template.',
    agency: true,
    freelancer: 'partial',
  },
  {
    feature: 'SEO Ready',
    detail: 'Semantic structure, schema markup and metadata configured at build.',
    agency: true,
    freelancer: false,
  },
  {
    feature: 'Fast Loading',
    detail: 'Image optimisation, lazy loading and Core Web Vitals auditing.',
    agency: true,
    freelancer: false,
  },
  {
    feature: 'Scalable',
    detail: 'Add pages, products or a booking system later without a rebuild.',
    agency: true,
    freelancer: false,
  },
  {
    feature: 'Ongoing Support',
    detail: 'A team that answers within 24 hours — not one person going quiet.',
    agency: true,
    freelancer: 'partial',
  },
  {
    feature: 'Business Strategy',
    detail: 'We map your customer journey before we design a single screen.',
    agency: true,
    freelancer: false,
  },
  {
    feature: 'Conversion Focus',
    detail: 'Every page is structured to turn visitors into enquiries.',
    agency: true,
    freelancer: false,
  },
];

/** 5-step delivery process. */
export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery Call',
    description:
      'We understand your business, your customers and what a successful website actually needs to achieve for you.',
  },
  {
    step: '02',
    title: 'Planning',
    description:
      'We map the page structure, customer journey and conversion points, then share a clear scope, timeline and fixed quote.',
  },
  {
    step: '03',
    title: 'Design',
    description:
      'You review a premium, on-brand design before development begins — so there are no surprises at handover.',
  },
  {
    step: '04',
    title: 'Development',
    description:
      'We build a fast, secure, mobile-first website with SEO structure and analytics configured from day one.',
  },
  {
    step: '05',
    title: 'Launch & Support',
    description:
      'We handle domain, hosting and go-live, then support you for 30 days so your website keeps performing.',
  },
];

/**
 * ⚠️ PLACEHOLDER TESTIMONIALS — REPLACE BEFORE GOING LIVE.
 *
 * These are structural placeholders so the section renders correctly. Publishing
 * invented reviews is a real risk (ASCI / CCPA guidelines on misleading
 * endorsements, and Google Ads misrepresentation policy). Swap each entry for a
 * genuine client quote — ideally pulled from your Google Reviews — and add a
 * real photo at `public/testimonials/<file>.jpg`, or leave `photo` undefined to
 * fall back to the initials avatar.
 */
export const TESTIMONIALS: {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  result: string;
  photo?: string;
}[] = [
  {
    quote:
      'Add the client’s own words here — what problem they had before the website, and what changed after launch.',
    name: 'Client Name',
    role: 'Founder',
    company: 'Manufacturing Business, Kolkata',
    rating: 5,
    result: 'Result achieved — e.g. “3x more enquiries in 60 days”',
  },
  {
    quote:
      'Add the client’s own words here — mention responsiveness, design quality or delivery speed if they raised it.',
    name: 'Client Name',
    role: 'Director',
    company: 'Professional Services Firm',
    rating: 5,
    result: 'Result achieved — e.g. “Ranking on page 1 for 5 local keywords”',
  },
  {
    quote:
      'Add the client’s own words here — a short, specific quote converts far better than a generic compliment.',
    name: 'Client Name',
    role: 'Owner',
    company: 'Retail & E-Commerce Brand',
    rating: 5,
    result: 'Result achieved — e.g. “Online orders up 40% after redesign”',
  },
];

/** Homepage FAQ set — also emitted as FAQPage schema. */
export const HOME_FAQS = [
  {
    question: 'How much does a professional business website cost?',
    answer:
      'Every project is quoted on scope rather than a fixed package, because a 5-page service website and a 40-product store are very different builds. Most business websites we deliver fall in the ₹15,000 to ₹50,000 range, and larger platforms are quoted individually. Book a free consultation and you will get a written quote with the exact scope, timeline and deliverables — no hidden fees.',
  },
  {
    question: 'How long does it take to build a business website?',
    answer:
      'A focused landing page typically goes live in 1–2 weeks. A complete business website with 5–10 pages usually takes 2–4 weeks, and e-commerce or custom platforms take longer depending on features. We confirm the exact timeline in writing before development starts.',
  },
  {
    question: 'Will my website be mobile-friendly and SEO optimised?',
    answer:
      'Yes — every website we build is mobile-first and ships with technical SEO in place: clean heading structure, fast load times, schema markup, optimised images, sitemap and metadata. Over 70% of Indian business traffic is mobile, so we design for the phone first and scale up.',
  },
  {
    question: 'Do you provide support after the website goes live?',
    answer:
      'Yes. Every project includes 30 days of complimentary post-launch support covering fixes, small content changes and technical assistance. Ongoing maintenance and content update plans are available if you want us to keep managing the site.',
  },
  {
    question: 'Do I own the website and the code?',
    answer:
      'Completely. You own the domain, the hosting account, the content and the source code. We do not lock clients into proprietary systems or hold assets hostage — if you ever move on, everything transfers to you.',
  },
  {
    question: 'Can you redesign my existing website instead of starting over?',
    answer:
      'Yes. Redesign is one of our core services. We audit your current site for speed, mobile experience, SEO and conversion gaps, then rebuild it on a modern stack while preserving your existing rankings and content equity.',
  },
  {
    question: 'Do you work with businesses outside Kolkata?',
    answer:
      'Yes. We are based in Kolkata and work with businesses across India and internationally. The entire process — consultation, design reviews, approvals and handover — runs smoothly over call, email and WhatsApp.',
  },
];
