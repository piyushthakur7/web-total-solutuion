/**
 * Selected work — the four case studies shown on /work and /work/[slug].
 *
 * Rules for this file:
 * - Every statement must be something the business can stand behind. No
 *   invented metrics, results, timelines or testimonials.
 * - Optional fields that are not known yet stay undefined; their section is
 *   simply not rendered. What is still missing is listed in `contentNeeded`,
 *   which is shown on the page in development only, never in production.
 */

import { WTS_CRM } from './projects';

export type WorkVisual =
  | { type: 'screenshot'; src: string; alt: string }
  /** Rendered from WTS_CRM.workflow — fallback for a study with no screenshots. */
  | { type: 'workflow' };

export interface WorkGalleryImage {
  src: string;
  alt: string;
  caption?: string;
  /** `full` spans the page, `half` pairs up on desktop, `mobile` is a tall phone screen. */
  layout: 'full' | 'half' | 'mobile';
}

export interface WorkCaseStudy {
  slug: string;
  name: string;
  /** Short sector label shown on the card and hero. */
  category: string;
  /** Card headline on /work. */
  headline: string;
  /** One-sentence positioning used in the case study hero. */
  positioning: string;
  summary: string;
  visual: WorkVisual;
  websiteUrl: string;
  websiteLabel: string;
  industry: string;
  services: string[];
  /** Only set when the real timeline is known. */
  timeline?: string;
  platform: string;
  /** Shown in the engineering section only — never on the cards. */
  technology: string[];
  overview: string[];
  challenge?: string[];
  approach?: { title: string; description: string }[];
  /** Problem → UX decision → resulting experience. */
  ux?: { problem: string; decision: string; result: string }[];
  /** Extra content blocks, e.g. the product surface of a SaaS. */
  sections?: {
    eyebrow: string;
    heading: string;
    intro?: string;
    items: { title: string; description: string }[];
  }[];
  gallery?: WorkGalleryImage[];
  engineering: string[];
  outcomes: string[];
  /** Only ever a real, attributable client quote. */
  testimonial?: { quote: string; name: string; role: string };
  /** Missing real-world content. Shown in development builds only. */
  contentNeeded: string[];
  meta: { title: string; description: string };
}

export const WORK_CASE_STUDIES: WorkCaseStudy[] = [
  {
    slug: 'mechverses',
    name: 'Mechverses',
    category: 'Industrial / Marketplace',
    headline: 'Industrial machinery, made easier to find.',
    positioning: 'A search-led marketplace for second-hand ceramic machinery.',
    summary:
      'A marketplace website for the ceramic industry, built around search: buyers look for polishing lines, kilns and presses in an inventory of verified second-hand machinery.',
    visual: {
      type: 'screenshot',
      src: '/work/mechverses/home.webp',
      alt: 'Mechverses home page with machinery search',
    },
    websiteUrl: 'https://www.mechverses.in',
    websiteLabel: 'mechverses.in',
    industry: 'Industrial machinery / Ceramics',
    services: ['Website design', 'Front-end development'],
    platform: 'Website',
    technology: ['React', 'Three.js', 'Tailwind CSS', 'Framer Motion'],
    overview: [
      'Mechverses is a marketplace for the ceramic industry, listing verified second-hand machinery that is tested, certified and delivered.',
      'We designed and built its website. The home page leads with a single search field for equipment such as polishing lines, kilns and presses, with the company, its expertise and its products one step away in the navigation.',
    ],
    gallery: [
      {
        src: '/work/mechverses/inventory.webp',
        alt: 'Mechverses inventory page listing ceramic machinery',
        caption: 'Inventory — the machinery listing',
        layout: 'full',
      },
      {
        src: '/work/mechverses/expertise.webp',
        alt: 'Mechverses expertise page',
        caption: 'Expertise',
        layout: 'half',
      },
      {
        src: '/work/mechverses/about.webp',
        alt: 'Mechverses about page',
        caption: 'About',
        layout: 'half',
      },
      {
        src: '/work/mechverses/mobile-home.webp',
        alt: 'Mechverses home page on mobile',
        caption: 'Home on mobile',
        layout: 'mobile',
      },
      {
        src: '/work/mechverses/mobile-inventory.webp',
        alt: 'Mechverses inventory page on mobile',
        caption: 'Inventory on mobile',
        layout: 'mobile',
      },
    ],
    engineering: [
      'The same team that designed the interface wrote the production code, so the design that was approved is the design that shipped.',
    ],
    outcomes: [
      'A production website, live at mechverses.in',
      'A home page built around searching the machinery inventory',
      'Company, expertise and product information organised under a short, clear navigation',
    ],
    contentNeeded: [
      '[ADD REAL CLIENT CHALLENGE]',
      '[ADD WHY THE PROJECT MATTERED TO THE CLIENT]',
      '[ADD PROJECT TIMELINE]',
      '[ADD OUR APPROACH — discovery, content hierarchy, visual direction]',
      '[ADD UX / INFORMATION ARCHITECTURE DECISIONS]',
      '[CONFIRM TECHNOLOGY — list is taken from the old portfolio record, whose description did not match the live site]',
      '[ADD MEASURABLE RESULT]',
      '[ADD CLIENT TESTIMONIAL]',
    ],
    meta: {
      title: 'Mechverses Case Study',
      description:
        'How Web Total Solution designed and built the Mechverses website: a search-led marketplace for verified second-hand ceramic machinery.',
    },
  },
  {
    slug: 'medara-labs',
    name: 'Medara Labs',
    category: 'Pharmaceuticals',
    headline: 'Building a clearer and more credible digital presence.',
    positioning: 'A clearer, more credible digital presence for a pharmaceutical company.',
    summary:
      'A website for a pharmaceutical company, structured around its products, its quality assurance and a direct route to enquiry.',
    visual: {
      type: 'screenshot',
      src: '/work/medara-labs/home.webp',
      alt: 'Medara Labs home page',
    },
    websiteUrl: 'https://www.medaralabs.com/',
    websiteLabel: 'medaralabs.com',
    industry: 'Pharmaceuticals',
    services: ['Website design', 'Front-end development'],
    platform: 'Website',
    technology: ['React', 'Vite', 'Tailwind CSS'],
    overview: [
      'Medara Labs is a pharmaceutical company focused on quality manufacturing, ethical promotion and affordable healthcare.',
      'We designed and built its website. The structure is deliberately short — company, products, quality and contact — with an enquiry button held in the header and the product portfolio and quality assurance offered as the two first actions.',
    ],
    gallery: [
      {
        src: '/work/medara-labs/products.webp',
        alt: 'Medara Labs product portfolio page with category filters',
        caption: 'Product portfolio with category filters',
        layout: 'full',
      },
      {
        src: '/work/medara-labs/quality.webp',
        alt: 'Medara Labs quality and compliance page',
        caption: 'Quality & compliance',
        layout: 'half',
      },
      {
        src: '/work/medara-labs/home-intro.webp',
        alt: 'Medara Labs home page company introduction section',
        caption: 'Company introduction on the home page',
        layout: 'half',
      },
      {
        src: '/work/medara-labs/mobile-home.webp',
        alt: 'Medara Labs home page on mobile',
        caption: 'Home on mobile',
        layout: 'mobile',
      },
      {
        src: '/work/medara-labs/mobile-products.webp',
        alt: 'Medara Labs product portfolio on mobile',
        caption: 'Product portfolio on mobile',
        layout: 'mobile',
      },
    ],
    engineering: [
      'The same team that designed the interface wrote the production code, so the design that was approved is the design that shipped.',
    ],
    outcomes: [
      'A production website, live at medaralabs.com',
      'Products and quality assurance given their own sections and lead calls to action',
      'A direct enquiry route in the main navigation',
    ],
    contentNeeded: [
      '[ADD REAL CLIENT CHALLENGE]',
      '[ADD WHY THE PROJECT MATTERED TO THE CLIENT]',
      '[ADD PROJECT TIMELINE]',
      '[ADD OUR APPROACH — discovery, content hierarchy, visual direction]',
      '[ADD UX / INFORMATION ARCHITECTURE DECISIONS]',
      '[CONFIRM TECHNOLOGY — list is taken from the old portfolio record, whose description did not match the live site]',
      '[ADD MEASURABLE RESULT]',
      '[ADD CLIENT TESTIMONIAL]',
    ],
    meta: {
      title: 'Medara Labs Case Study',
      description:
        'How Web Total Solution designed and built the Medara Labs website: a pharmaceutical company presented through its products, quality assurance and a direct enquiry route.',
    },
  },
  {
    slug: 'faw-dubai',
    name: 'FAW Dubai',
    category: 'Luxury Weddings / Dubai',
    headline: 'A premium digital experience built for an international audience.',
    positioning: 'A cinematic website for a luxury wedding design company.',
    summary:
      'A website for Frozen Apple, a luxury wedding design company, led by full-screen photography and film with a direct route to booking a consultation.',
    visual: {
      type: 'screenshot',
      src: '/work/faw-dubai/home.webp',
      alt: 'Frozen Apple Weddings home page',
    },
    websiteUrl: 'https://www.fawdubai.com/',
    websiteLabel: 'fawdubai.com',
    industry: 'Weddings & events',
    services: ['Website design', 'Front-end development'],
    platform: 'Website',
    technology: ['React', 'Vite', 'Tailwind CSS'],
    overview: [
      'FAW Dubai is the website of Frozen Apple, a wedding design company presenting its work to a luxury audience in Dubai.',
      'We designed and built the site. Photography and film carry the home page, with services, case studies and a dedicated Dubai section in the navigation, and consultation booking available from both the header and the opening screen.',
    ],
    gallery: [
      {
        src: '/work/faw-dubai/case-study.webp',
        alt: 'Frozen Apple Weddings featured case study page',
        caption: 'Featured wedding case study',
        layout: 'full',
      },
      {
        src: '/work/faw-dubai/services.webp',
        alt: 'Frozen Apple Weddings services page',
        caption: 'Services',
        layout: 'half',
      },
      {
        src: '/work/faw-dubai/dubai.webp',
        alt: 'Frozen Apple Weddings Dubai page',
        caption: 'Dubai',
        layout: 'half',
      },
      {
        src: '/work/faw-dubai/mobile-home.webp',
        alt: 'Frozen Apple Weddings home page on mobile',
        caption: 'Home on mobile',
        layout: 'mobile',
      },
      {
        src: '/work/faw-dubai/mobile-services.webp',
        alt: 'Frozen Apple Weddings services page on mobile',
        caption: 'Services on mobile',
        layout: 'mobile',
      },
    ],
    engineering: [
      'The same team that designed the interface wrote the production code, so the design that was approved is the design that shipped.',
    ],
    outcomes: [
      'A production website, live at fawdubai.com',
      'A home page led by full-screen photography and film',
      'Consultation booking reachable from the header and the opening screen',
    ],
    contentNeeded: [
      '[ADD REAL CLIENT CHALLENGE]',
      '[ADD WHY THE PROJECT MATTERED TO THE CLIENT]',
      '[ADD PROJECT TIMELINE]',
      '[ADD OUR APPROACH — discovery, content hierarchy, visual direction]',
      '[ADD UX / INFORMATION ARCHITECTURE DECISIONS]',
      '[CONFIRM TECHNOLOGY — list is taken from the old portfolio record, whose description did not match the live site]',
      '[ADD MEASURABLE RESULT]',
      '[ADD CLIENT TESTIMONIAL]',
    ],
    meta: {
      title: 'FAW Dubai Case Study',
      description:
        'How Web Total Solution designed and built the FAW Dubai website for Frozen Apple, a luxury wedding design company: full-screen photography, film and consultation booking.',
    },
  },
  {
    slug: 'wts-crm',
    name: 'WTS CRM',
    category: 'SaaS / CRM',
    headline: 'From product idea to production SaaS.',
    positioning: 'From product idea to production SaaS.',
    summary:
      'Product strategy, UX architecture, interface design and engineering for a modern CRM platform.',
    visual: {
      type: 'screenshot',
      src: '/work/wts-crm/home.webp',
      alt: 'WTS CRM website home page showing the dashboard',
    },
    websiteUrl: 'https://wtscrm.com',
    websiteLabel: 'wtscrm.com',
    industry: 'SaaS / CRM',
    services: ['Product strategy', 'UX architecture', 'Interface design', 'Engineering'],
    platform: 'Web application',
    technology: ['Next.js', 'React', 'CSS Modules'],
    overview: [
      'WTS CRM is our own subscription product: a CRM for Indian service businesses that connects leads, follow-ups, quotations, client projects, invoices and payments in one workspace.',
      'We took it from product idea to a live SaaS with tiered plans and a free trial, with strategy, UX, interface design and engineering all done in-house. We do not only design websites for software companies — we design, build and run a software product ourselves.',
    ],
    challenge: [
      'WTS CRM is built for service businesses that track leads in WhatsApp and Excel. In that setup, enquiries, follow-ups, quotations, project work and invoices live in separate places, and the next action depends on someone remembering it.',
      'The product had to connect the whole path from new enquiry to paid invoice without turning into a large sales CRM, and it had to work for a solo operator as well as a team sharing one workspace.',
    ],
    approach: [
      {
        title: 'Product strategy',
        description:
          'The scope follows one path — lead, follow-up, quotation, project, invoice, payment — instead of a broad feature list.',
      },
      {
        title: 'UX architecture',
        description:
          'Each lead keeps its contact details, source, value, notes and activity together, so related work is reached from the record it belongs to.',
      },
      {
        title: 'Dashboard design',
        description:
          'Dashboard and calendar views surface what is due and overdue. Filters and saved views narrow the list to the work for the day.',
      },
      {
        title: 'Roles and workspaces',
        description:
          'Owner, admin and member roles with record assignment, so the same product serves a solo owner and an agency team.',
      },
      {
        title: 'Plans',
        description:
          'Tiered plans and a free trial, with billing features such as quotations and GST invoicing tied to the selected plan.',
      },
      {
        title: 'Engineering',
        description:
          'Built by the same team in Next.js and React, with workspace data separated at the database level.',
      },
    ],
    ux: [
      {
        problem: 'Lead details, notes and history are spread across chats and spreadsheets.',
        decision:
          'One record per lead holds contact details, source, value, notes and activity together.',
        result:
          'Leads move through stages, are marked hot, warm or cold, and are found again through filters and saved views.',
      },
      {
        problem: 'The next follow-up depends on someone remembering it.',
        decision:
          'Every call, message, email or meeting records an outcome and books the next action.',
        result: 'Due and overdue work appears on the dashboard and the calendar.',
      },
      {
        problem: 'Quotations, project work and invoices sit in separate tools.',
        decision:
          'An accepted quotation converts to an invoice, and projects keep their tasks, notes and invoices connected.',
        result:
          'Full or partial payments are recorded against the invoice, with the remaining balance always visible.',
      },
    ],
    sections: [
      {
        eyebrow: 'Product surface',
        heading: 'What the product covers',
        intro:
          'The modules below are live in the product. Some depend on the selected plan, and some integrations need separate setup.',
        items: WTS_CRM.features.map((feature) => ({
          title: feature.title,
          description: feature.description,
        })),
      },
    ],
    gallery: [
      {
        src: '/work/wts-crm/dashboard.webp',
        alt: 'WTS CRM dashboard with open leads, follow-ups due, tasks and pipeline value',
        caption: 'Dashboard — open leads, follow-ups due, tasks and pipeline',
        layout: 'full',
      },
      {
        src: '/work/wts-crm/follow-ups.webp',
        alt: 'WTS CRM follow-ups view',
        caption: 'Follow-ups due and overdue',
        layout: 'half',
      },
      {
        src: '/work/wts-crm/pricing.webp',
        alt: 'WTS CRM pricing page',
        caption: 'Plans and pricing',
        layout: 'half',
      },
      {
        src: '/work/wts-crm/mobile-home.webp',
        alt: 'WTS CRM website on mobile',
        caption: 'wtscrm.com on mobile',
        layout: 'mobile',
      },
      {
        src: '/work/wts-crm/mobile-features.webp',
        alt: 'WTS CRM features page on mobile',
        caption: 'Features on mobile',
        layout: 'mobile',
      },
    ],
    engineering: [
      'WTS CRM is designed, built and run by the same team. The application is built with Next.js and React, styled with CSS Modules.',
      'Workspaces are private, with user accounts, roles and data separated at the database level. Subscriptions run on tiered plans with a free trial.',
    ],
    outcomes: [
      'A production SaaS, live at wtscrm.com',
      'One connected workflow from new enquiry to paid invoice',
      'Solo and team workspaces with owner, admin and member roles',
      'Tiered subscription plans with a free 3-day trial',
    ],
    contentNeeded: [
      '[ADD IN-APP SCREENSHOTS — lead record, pipeline, quotation, invoice; current images are from the public wtscrm.com site]',
      '[ADD PROJECT TIMELINE]',
      '[ADD MEASURABLE RESULT — only if real adoption or usage figures can be shared]',
    ],
    meta: {
      title: 'WTS CRM Case Study',
      description:
        'How Web Total Solution took WTS CRM from product idea to production SaaS: product strategy, UX architecture, interface design and Next.js engineering.',
    },
  },
];

export const WORK_SLUGS = WORK_CASE_STUDIES.map((study) => study.slug);

export function getWorkCaseStudy(slug: string) {
  return WORK_CASE_STUDIES.find((study) => study.slug === slug);
}

/** The study after this one, wrapping round to the first. */
export function getNextWorkCaseStudy(slug: string) {
  const index = WORK_CASE_STUDIES.findIndex((study) => study.slug === slug);
  return WORK_CASE_STUDIES[(index + 1) % WORK_CASE_STUDIES.length];
}
