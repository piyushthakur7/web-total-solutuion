/**
 * Shared conversion / trust content used across the homepage and landing pages.
 * Keeping it here means copy edits happen in one file instead of across JSX.
 */

export const WHATSAPP_URL = 'https://wa.me/916291519364';
export const PHONE_DISPLAY = '+91 6291 519 364';
export const EMAIL = 'info@webtotalsolution.com';

/** Offices we operate from. Kolkata is the primary (registered) address. */
export const OFFICES = [
  {
    city: 'Kolkata',
    lines: ['Pachpota, Garia', 'Kolkata, West Bengal 700152'],
    mapQuery: '22.4571905,88.4215653',
  },
  {
    city: 'Delhi',
    lines: ['Dhani Ram Colony, Shiv Chowk, Rohini Sector 19', 'North West Delhi, Delhi 110042'],
    mapQuery: 'Dhani Ram Colony, Shiv Chowk, Rohini Sector 19, Delhi 110042',
  },
];

/**
 * InsForge "capture-lead" function used by LeadForm to store enquiries in the
 * backend. The key is a public, function-scoped identifier (not an admin/API
 * secret) — it's meant to ship to the browser, the same way the InsForge
 * anon key is.
 */
export const LEAD_CAPTURE_URL = 'https://6rggp898.ap-southeast.insforge.app/functions/capture-lead';
export const LEAD_CAPTURE_KEY = '7d1968548bef4caeaa40f5158ecdf54d9ef6f9b93a394b5e9b1d6e57a21b312f';

/** Public Google Business listing — the source of the rating shown on the site. */
export const GOOGLE_REVIEWS_URL = 'https://share.google/na7XhIzRCjwcQnh9J';
export const GOOGLE_RATING = 4.6;

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
 * Commitments made in writing on every project, shown in the trust section.
 *
 * Keep every line here to something the business actually does and would honour
 * if a client held us to it — this section exists precisely because invented
 * testimonials do not survive scrutiny.
 */
export const CLIENT_COMMITMENTS = [
  'A fixed written quote before any work begins — never an open-ended estimate',
  'An agreed delivery date, confirmed in writing at the start',
  'Design approval before a single line of development',
  '30 days of post-launch support included',
  'Full ownership of your domain, hosting, content and source code',
  'A reply within 24 hours, from a team rather than one person',
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

/**
 * Starting-price packages. Shown in full on /pricing and summarised on the
 * local SEO landing pages, so the two can never quote different figures.
 */
export const PRICING_PACKAGES: {
  name: string;
  audience: string;
  /** Starting price in INR; null means quoted individually. */
  from: number | null;
  highlight: boolean;
  features: string[];
}[] = [
  {
    name: 'Business Essential',
    audience: 'For established businesses that need a credible, lead-generating presence online.',
    from: 15000,
    highlight: false,
    features: [
      'Up to 5 custom-designed pages',
      'Mobile-first responsive build',
      'On-page SEO & schema setup',
      'Enquiry form + WhatsApp integration',
      'Google Analytics & Search Console',
      '30 days post-launch support',
    ],
  },
  {
    name: 'Business Growth',
    audience: 'For businesses actively competing for search traffic and paid-ad conversions.',
    from: 35000,
    highlight: true,
    features: [
      'Up to 10 custom-designed pages',
      'Conversion-focused page structure',
      'Advanced SEO & content optimisation',
      'Content management system (CMS)',
      'Blog setup & landing page templates',
      'Speed & Core Web Vitals tuning',
      '90 days post-launch support',
    ],
  },
  {
    name: 'Premium & Custom',
    audience: 'For e-commerce, multi-location brands and custom platform requirements.',
    from: null,
    highlight: false,
    features: [
      'Unlimited pages & custom modules',
      'E-commerce or booking functionality',
      'Payment gateway integration',
      'Custom database & user accounts',
      'Third-party & CRM integrations',
      'Priority support & maintenance plan',
    ],
  },
];
