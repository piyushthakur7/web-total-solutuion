/**
 * Copy for /law-firm-websites — the landing page for law firms in the US, UK
 * and UAE. Offer, price, care plan and call hours are supplied by the
 * business; do not change them or add figures without confirmation.
 *
 * This is a niche offer with its own fixed framing ($2,500, 5–8 pages, three
 * weeks). It sits alongside the general website packages in siteContent and
 * does not replace them.
 */

export const LAW_FIRM_PAGE = {
  slug: 'law-firm-websites',
  serviceName: 'Law Firm Website Development',
  meta: {
    title: 'Next.js Websites for Law Firms | Live in 3 Weeks, From $2,500',
    description:
      'Fast, search-ready Next.js websites for law firms in the US, UK and UAE. Live in 3 weeks, from $2,500 with a fixed written quote and full code ownership.',
    ogTitle: 'Law Firm Websites Built in Next.js — Live in 3 Weeks',
    ogDescription:
      'A fast, search-ready website for your firm, from $2,500. Fixed written quote in USD, calls in your working hours, and you own the code.',
  },
  eyebrow: 'For law firms in the US, UK & UAE',
  h1: 'Next.js websites for law firms — live in 3 weeks',
  subheadline:
    'A fast, search-ready website that presents your firm clearly and turns visitors into enquiries. Fixed written quote in USD before any work begins.',
  offer: {
    price: 'From $2,500',
    scope: '5–8 pages',
    timeline: 'Live in 3 weeks',
    /** What the three-week timeline depends on. */
    timelineCondition:
      'The three weeks run from the point the scope is approved and your content is ready, and assume design feedback within the agreed review days. The delivery date is confirmed in writing at the start.',
    carePlan: {
      price: '$250/month',
      includes: 'Hosting, updates, small edits, and monthly speed and uptime checks.',
    },
  },
  problems: {
    heading: 'What a law firm website has to get right',
    intro:
      'A prospective client usually meets your firm on its website before they speak to anyone. These are the things we build for.',
    items: [
      {
        title: 'A first impression that matches the firm',
        description:
          'A dated or slow site undersells the quality of the practice behind it. We design around your firm rather than adapting a generic template.',
      },
      {
        title: 'Practice areas people can actually find',
        description:
          'Each practice area gets its own clearly structured page, with the metadata, headings and schema markup search engines need to understand it.',
      },
      {
        title: 'Speed on a phone',
        description:
          'Many visitors arrive on mobile. We build mobile-first in Next.js, with images sized for the screen and page speed checked before launch.',
      },
      {
        title: 'An obvious next step',
        description:
          'Every page leads to a clear way to get in touch, so an interested visitor does not have to hunt for how to contact the right person.',
      },
    ],
  },
  abroad: {
    heading: 'Working with us from abroad',
    intro: 'We work with you remotely, so here is exactly how the engagement runs.',
    items: [
      {
        icon: 'clock' as const,
        title: 'Available in your working day',
        description:
          'Calls available 9am–5pm UK time, throughout the UAE workday, and 9am–12:30pm US Eastern.',
      },
      {
        icon: 'dollar' as const,
        title: 'Quoted and paid in USD',
        description: 'Your quote and invoices are in US dollars.',
      },
      {
        icon: 'message' as const,
        title: 'WhatsApp, email and Slack',
        description:
          'The first conversation happens over WhatsApp or email. Day-to-day project communication runs over email or Slack, with a call whenever you prefer one.',
      },
      {
        icon: 'file' as const,
        title: 'A fixed written quote',
        description:
          'Scope, timeline and price are agreed in writing before any work begins — never an open-ended estimate.',
      },
      {
        icon: 'key' as const,
        title: 'Full code ownership',
        description:
          'You own the domain, hosting account, content and source code. Nothing is locked to us.',
      },
    ],
  },
  /**
   * Live client sites shown as evidence. Only the first is a law firm; the
   * page says so, and the others are labelled with their real sector.
   */
  examples: [
    {
      id: 'sproutslegal',
      sector: 'Law firm, India',
      description:
        'Website for Sprouts Legal. Indian law firm websites customarily open with a Bar Council of India disclaimer, so the preview shows that notice in front of the site.',
    },
    {
      id: 'kavitakabira',
      sector: 'Not a law firm: psychology practice',
      description:
        'Shown as another professional-services site where the first impression has to feel calm and credible.',
    },
  ],
  processSteps: [
    {
      step: '01',
      title: 'First conversation',
      description:
        'Over WhatsApp or email — or a call if you prefer — we learn about your firm, your practice areas and what your current website is not doing for you.',
    },
    {
      step: '02',
      title: 'Scope and quote',
      description:
        'You receive a written scope, timeline and fixed quote in USD. Nothing starts until you approve it.',
    },
    {
      step: '03',
      title: 'Design',
      description:
        'You review and approve the design before development begins — so there are no surprises at handover.',
    },
    {
      step: '04',
      title: 'Development',
      description:
        'We build the site in Next.js with search structure and analytics configured from day one, and keep you updated by email or Slack.',
    },
    {
      step: '05',
      title: 'Launch and support',
      description:
        'We handle go-live and support you for 30 days. The optional care plan covers the site after that.',
    },
  ],
  faqs: [
    {
      question: 'How much does a law firm website cost?',
      answer:
        'Projects start from $2,500 for a 5–8 page website. The exact figure depends on the number of pages and the features you need, and you receive it as a fixed written quote in USD before any work begins.',
    },
    {
      question: 'How long does the project take?',
      answer:
        'Our law firm website offer is built to go live in 3 weeks. That runs from the point the scope is approved and your content is ready, and assumes design feedback within the agreed review days. The delivery date is agreed in writing at the start.',
    },
    {
      question: 'How will we communicate across time zones?',
      answer:
        'The first conversation happens over WhatsApp or email, with a call if you prefer one. Calls are available 9am–5pm UK time, throughout the UAE workday, and 9am–12:30pm US Eastern. During the project, communication runs over email or Slack.',
    },
    {
      question: 'Who owns the website and the code?',
      answer:
        'You do. You own the domain, the hosting account, the content and the source code. We do not lock clients into proprietary systems — if you ever move on, everything transfers to you.',
    },
    {
      question: 'What support do we get after launch?',
      answer:
        'Every project includes 30 days of post-launch support. After that, the optional care plan is $250/month and covers hosting, updates, small edits, and monthly speed and uptime checks.',
    },
    {
      question: 'Why Next.js rather than a template or page builder?',
      answer:
        'Next.js lets us build a site around your firm instead of bending a theme to fit. Pages are server-rendered, so they load quickly and search engines can read them, and because it is a standard open-source framework, any competent developer can maintain the code later.',
    },
  ],
};
