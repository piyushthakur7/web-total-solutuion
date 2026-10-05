/**
 * Shared facts used across the site: contact details, offices, the founder,
 * the current website packages and the commitments made on every project.
 *
 * This file is the single source for package names, USD starting prices,
 * inclusions, revision counts, the support term and enquiry labels. Pages
 * render from it rather than restating a price or a support period, so a
 * change here changes the whole site.
 */

export const SITE_URL = 'https://www.webtotalsolution.com';

export const WHATSAPP_URL = 'https://wa.me/916291519364';
export const PHONE_DISPLAY = '+91 6291 519 364';
export const PHONE_HREF = 'tel:+916291519364';
export const EMAIL = 'info@webtotalsolution.com';
export const WORKING_HOURS = 'Monday to Saturday, 10:00 AM to 7:00 PM IST';

/**
 * Pre-filled WhatsApp message used only on /law-firm-websites, where the first
 * conversation happens over WhatsApp or email.
 */
export const LAW_FIRM_WHATSAPP_URL =
  'https://wa.me/916291519364?text=Hi%2C%20I%27m%20interested%20in%20a%20website%20for%20my%20law%20firm.';

/**
 * Founder details shown on /about and /law-firm-websites.
 * `photo` stays null until a genuine portrait is supplied; nothing is rendered
 * in its place. Never fill empty fields with invented copy.
 */
export const FOUNDER: { name: string; title: string; photo: string | null } = {
  name: 'Piyush Thakur',
  title: 'Founder, designer and lead developer',
  photo: null,
};

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

/**
 * Public Google Business listing. The site links to it but does not print a
 * rating or review count: a number hard-coded here goes stale and cannot be
 * checked from the page.
 */
export const GOOGLE_REVIEWS_URL = 'https://share.google/na7XhIzRCjwcQnh9J';

/* -------------------------------------------------------------------------- */
/* Enquiry wording                                                            */
/* -------------------------------------------------------------------------- */

/**
 * No scheduler is integrated: every "call" action opens the enquiry form, so
 * the label asks for a call instead of promising a booked time.
 */
export const CTA = {
  primary: 'Request a discovery call',
  quote: 'Request a project quote',
  discuss: 'Discuss this project',
  work: 'View selected work',
};

export const RESPONSE_EXPECTATION = 'We reply within one working day.';

/** What happens after an enquiry, in order. Shown beside every enquiry form. */
export const NEXT_STEPS = [
  {
    title: 'You describe the project',
    text: 'A few lines about the business, the audience and what the website or product needs to do.',
  },
  {
    title: 'We reply within one working day',
    text: 'By email, or WhatsApp if you left a number, with any questions and a suggested time for a discovery call.',
  },
  {
    title: 'We agree the scope together',
    text: 'Pages, content responsibilities, integrations and anything that needs a separate budget.',
  },
  {
    title: 'You receive a written quote',
    text: 'Scope, price, payment milestones and timeline in writing. There is no obligation to go ahead.',
  },
];

/* -------------------------------------------------------------------------- */
/* Website packages                                                           */
/* -------------------------------------------------------------------------- */

/** The support period included with every website package. */
export const SUPPORT_DAYS = 30;
export const SUPPORT_TERM = `${SUPPORT_DAYS} days of post-launch support`;
export const SUPPORT_DETAIL = `Every website package includes ${SUPPORT_TERM} for fixes, small content changes and technical help. Ongoing maintenance is quoted separately.`;

export const OWNERSHIP_TERM =
  'You own the domain, hosting account, content and source code of the delivered website.';

export interface WebsitePackage {
  /** Stable key used in enquiry links: /contact?package=<slug>. */
  slug: string;
  name: string;
  /** Starting price in USD. A starting price, never a fixed fee for any scope. */
  from: number;
  audience: string;
  /** What the starting price is scoped around. */
  scope: string;
  includes: string[];
  /** Revision rounds included, or null when agreed per project. */
  revisionRounds: number | null;
  /** What moves the quote above the starting price. */
  quoteDrivers: string;
  highlight: boolean;
  /** LeadForm project type pre-selected for this package. */
  projectType: string;
}

export const WEBSITE_PACKAGES: WebsitePackage[] = [
  {
    slug: 'landing-page-sprint',
    name: 'Landing Page Sprint',
    from: 1200,
    audience: 'For an early-stage startup launching or testing one offer.',
    scope: 'One landing page built around a single audience, offer and action.',
    includes: [
      'Message hierarchy and page structure',
      'Wireframe before visual design',
      'Custom UI design',
      'Responsive Next.js build',
      'Enquiry, demo or waitlist form',
      'Basic on-page SEO',
      'Analytics setup',
    ],
    revisionRounds: 2,
    quoteDrivers: 'Copywriting, extra sections or pages, custom illustration and third-party integrations.',
    highlight: false,
    projectType: 'Landing Page',
  },
  {
    slug: 'startup-growth-site',
    name: 'Startup Growth Site',
    from: 2500,
    audience: 'For a startup that needs a complete marketing website.',
    scope: 'A multi-page marketing website. The page list is agreed in the written scope.',
    includes: [
      'Everything in the Landing Page Sprint',
      'Site structure and page-by-page messaging',
      'Product and feature pages',
      'CMS or blog, where scoped',
      'SEO foundation: metadata, sitemap, structured data',
      'Analytics and enquiry tracking',
    ],
    revisionRounds: 3,
    quoteDrivers: 'Number of page templates, CMS content types, copywriting, migration from an existing site and integrations.',
    highlight: true,
    projectType: 'Startup Marketing Website',
  },
  {
    slug: 'custom-product-website',
    name: 'Custom Product Website',
    from: 5000,
    audience: 'For a product company whose website has more to explain or connect.',
    scope: 'A scoped product or marketing website with custom structure, content types and integrations.',
    includes: [
      'UX strategy and information architecture',
      'Custom page templates and interactions',
      'CMS with dynamic content',
      'API and third-party integrations, as scoped',
      'Interactive product explanations, where scoped',
      'Performance work on the built pages',
    ],
    revisionRounds: null,
    quoteDrivers: 'Depth of integrations, number of content types, interaction design and any product interface work, which is scoped separately.',
    highlight: false,
    projectType: 'Startup Marketing Website',
  },
];

export function getPackage(slug: string | null | undefined) {
  return WEBSITE_PACKAGES.find((pkg) => pkg.slug === slug);
}

export function formatUsd(amount: number) {
  return `$${amount.toLocaleString('en-US')}`;
}

export function revisionLabel(pkg: WebsitePackage) {
  return pkg.revisionRounds === null
    ? 'Revision rounds agreed in the written scope'
    : `${pkg.revisionRounds} revision rounds`;
}

/** Notes that apply to every package, shown wherever prices are listed. */
export const PACKAGE_TERMS = [
  'Starting prices in USD. The written quote follows a scope review and can be higher.',
  'Timeline agreed after scope review and confirmed in the written quote.',
  'Design is approved before development begins.',
  SUPPORT_DETAIL,
  OWNERSHIP_TERM,
  'Hosting, domains, paid plugins and third-party services are billed by their providers and listed in the quote.',
  'Payment milestones are set out in the written quote.',
  'Web applications, dashboards and mobile apps are not part of these packages and are scoped separately.',
];

/* -------------------------------------------------------------------------- */
/* Process, commitments, FAQs                                                 */
/* -------------------------------------------------------------------------- */

/** The five stages of a project: what you get, and what we need from you. */
export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We talk through the business, the audience and what the website has to achieve.',
    output: 'A written scope and quote.',
    yourPart: 'One conversation, and any existing brand or content material.',
  },
  {
    step: '02',
    title: 'Structure',
    description: 'Messaging and page structure are worked out before anything is styled.',
    output: 'Sitemap and wireframes.',
    yourPart: 'Review and approve the structure.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'The approved structure becomes a designed interface, on desktop and mobile.',
    output: 'UI design for the agreed pages.',
    yourPart: 'Feedback within the agreed revision rounds, then sign-off.',
  },
  {
    step: '04',
    title: 'Development',
    description: 'The approved design is built responsively, with the CMS and integrations in the scope.',
    output: 'A working preview link.',
    yourPart: 'Final content, and access to the accounts the site connects to.',
  },
  {
    step: '05',
    title: 'Launch and support',
    description: 'Testing, go-live and handover, followed by the included support period.',
    output: `The live website, handover and ${SUPPORT_TERM}.`,
    yourPart: 'Launch approval.',
  },
];

/**
 * Commitments made in writing on every project.
 *
 * Keep every line here to something the business actually does and would honour
 * if a client held us to it — this section exists precisely because invented
 * testimonials do not survive scrutiny.
 */
export const CLIENT_COMMITMENTS = [
  'A written scope and quote before any work begins',
  'A timeline agreed after scope review, confirmed in writing',
  'Design approval before development starts',
  `${SUPPORT_TERM} included`,
  'Ownership of your domain, hosting, content and source code',
  'A reply within one working day',
];

export interface Faq {
  question: string;
  answer: string;
  link?: { label: string; href: string };
}

/** Homepage FAQ set — also emitted as FAQPage schema. */
export const HOME_FAQS: Faq[] = [
  {
    question: 'What kind of project is a good fit?',
    answer:
      'Startup marketing websites, product websites and landing pages, where the job is to explain a product clearly and lead a visitor to one next step. Product interfaces and web applications are taken on as separately scoped projects. If your project is a better fit for a template or a website builder, we will say so.',
  },
  {
    question: 'How is the price decided?',
    answer:
      'The three packages have starting prices in USD: Landing Page Sprint from $1,200, Startup Growth Site from $2,500 and Custom Product Website from $5,000. The written quote follows a scope review and depends on the number of page templates, who writes the content, the CMS and the integrations involved.',
    link: { label: 'See what each package includes', href: '/pricing' },
  },
  {
    question: 'How long does a project take?',
    answer:
      'It depends on the scope and on how quickly content and approvals come back, so the timeline is agreed after the scope review and written into the quote. We would rather give you a date we can keep than a headline number.',
  },
  {
    question: 'Who provides the content?',
    answer:
      'Either you supply the copy and images, or copywriting is added to the scope. Whichever applies is written into the quote, because late content is the most common reason a website launch moves.',
  },
  {
    question: 'Who owns the website when it is finished?',
    answer:
      'You do. The domain, hosting account, content and source code of the delivered website are yours, and accounts are set up in your name. Nothing is locked to us.',
  },
  {
    question: 'How do you work with clients outside India?',
    answer:
      'Quotes and invoices are in USD. Day-to-day communication runs over email, with WhatsApp or Slack if you prefer, and calls are arranged in the overlap between your working day and Indian Standard Time. Design reviews and approvals happen on shared preview links, so nothing depends on being in the same room.',
  },
  {
    question: 'What support is included after launch?',
    answer: SUPPORT_DETAIL,
  },
];
