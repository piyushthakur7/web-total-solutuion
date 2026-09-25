/**
 * Products Web Total Solution builds and runs itself, rendered by
 * <ProjectsView /> on /projects. This is deliberately separate from
 * `portfolio_projects` in InsForge: the portfolio is client work, this is our
 * own product line.
 *
 * Copy here follows the WTS CRM launch brief and its claim guardrails — flat
 * final prices with no tax split, no GST-invoice promise, no payment-gateway
 * promise, no testimonials, ratings or customer counts until they are real.
 */

export type ProjectIcon =
  | 'users'
  | 'bell'
  | 'listChecks'
  | 'fileText'
  | 'lock'
  | 'clock'
  | 'messageSquare'
  | 'wallet';

export interface ProjectFeature {
  icon: ProjectIcon;
  title: string;
  description: string;
}

export interface ProjectStep {
  label: string;
  description: string;
}

export interface ProjectPlan {
  name: string;
  price: string;
  cadence: string;
  /** Optional small print under the feature list. */
  note?: string;
  bestFor: string;
  features: string[];
  badge?: string;
}

export interface ProjectData {
  slug: string;
  name: string;
  /** Short label under the product name, e.g. the category it sits in. */
  kicker: string;
  /**
   * Descriptive sub-heading rendered inside the product <h2>. This is where the
   * page states plainly what the product is, in the words people search for.
   */
  headline: string;
  /** Where the product is in its lifecycle — shown as a status pill. */
  status: string;
  /** The single promise. Kept to one line. */
  tagline: string;
  positioning: string;
  supportingCopy: string;
  audienceHeading: string;
  audience: string[];
  featuresHeading: string;
  features: ProjectFeature[];
  workflowHeading: string;
  workflowIntro: string;
  workflow: ProjectStep[];
  pricingHeading: string;
  pricingNote: string;
  plans: ProjectPlan[];
  /** Stated plainly so nobody arrives expecting a team CRM. */
  notForHeading: string;
  notFor: string[];
  primaryCta: string;
  /**
   * The product's own site. Rendered as a plain followed link (no nofollow) so
   * it passes crawl discovery and referral traffic to wtscrm.com.
   */
  siteUrl?: string;
  /** Bare domain, used as the visible anchor text for the site link. */
  siteLabel?: string;
  /**
   * Live trial URL. Left undefined until the signup flow is verified — the CTA
   * falls back to /contact so nothing links to a page that is not ready.
   */
  trialUrl?: string;
  secondaryCta: string;
  reassurance: string;
  /** Trial terms, restated beside pricing. */
  trialNote: string;
  /** Shown in place of the trial CTA while `trialUrl` is undefined. */
  preLaunchCta: string;
  preLaunchNote: string;
  faqHeading: string;
  /** Rendered on the page and emitted as FAQPage structured data. */
  faqs: { question: string; answer: string }[];
  /** Page-level target queries, passed through to the route's metadata. */
  keywords: string[];
}

export const WTS_CRM: ProjectData = {
  slug: 'wts-crm',
  name: 'WTS CRM',
  kicker: 'CRM & invoicing workspace',
  headline: 'A simple CRM and invoicing app for Indian freelancers and agency teams',
  status: 'Live — free 3-day trial',
  tagline: 'Never miss a follow-up or retype an invoice.',
  positioning:
    'A simple Indian CRM for freelancers and agency teams who want to convert more leads and get paid without spreadsheet chaos.',
  supportingCopy:
    'Capture every enquiry, know exactly who to contact today, create professional invoices, and keep client work organised — without a complicated team CRM.',
  audienceHeading: 'Built for people who run the business themselves',
  audience: [
    'Freelance designers, developers and marketers',
    'Consultants, photographers and coaches',
    'Solo agency owners with 10–100 active leads',
    'Agency teams that need shared CRM operations',
    'Anyone tracking leads in WhatsApp, notes or Excel',
    'Anyone sending invoices manually',
  ],
  featuresHeading: 'What is inside',
  features: [
    {
      icon: 'users',
      title: 'Lead capture and tracking',
      description:
        'Every enquiry lands in one list with its source, stage and history, instead of scattered across WhatsApp threads and notebooks.',
    },
    {
      icon: 'bell',
      title: 'Follow-up reminders',
      description:
        'Set the next follow-up when you log the lead, and open a daily view that tells you exactly who to contact today.',
    },
    {
      icon: 'listChecks',
      title: 'Tasks and projects',
      description:
        'Turn a won lead into a client project with tasks against it, so delivery work stays attached to the client it belongs to.',
    },
    {
      icon: 'fileText',
      title: 'Professional invoices',
      description:
        'Create a clean invoice from the client record instead of retyping the same details into a document every month.',
    },
    {
      icon: 'wallet',
      title: 'Payment tracking',
      description:
        'Mark what has been paid and what is still outstanding, so you know who to chase before the month closes.',
    },
    {
      icon: 'lock',
      title: 'A private workspace',
      description:
        'Your leads, clients and invoices sit in your own workspace. Solo-first by design — nothing is shared with anyone else.',
    },
  ],
  workflowHeading: 'How it works',
  workflowIntro:
    'One straight line from the first enquiry to the money in your account. No configuration project, no sales-ops consultant.',
  workflow: [
    {
      label: 'Lead',
      description: 'An enquiry arrives from WhatsApp, a call or your website. Log it once, with context.',
    },
    {
      label: 'Follow-up',
      description: 'Set the next touchpoint. The daily view surfaces who is due, so nobody goes cold.',
    },
    {
      label: 'Invoice',
      description: 'The lead converts. Raise the invoice from the client record you already have.',
    },
    {
      label: 'Payment',
      description: 'Track what is paid and what is pending, and follow up on the rest with the same system.',
    },
  ],
  pricingHeading: 'Simple, flat pricing',
  pricingNote: 'Every plan is a flat final amount. No hidden charges, and no separate tax is collected.',
  plans: [
    {
      name: 'Starter',
      price: '₹499',
      cadence: '/ month',
      bestFor: 'The essentials for an independent professional on a budget.',
      features: [
        'One user',
        'Up to 100 clients',
        'Lead tracking and follow-up reminders',
        'Notes and basic dashboard',
      ],
    },
    {
      name: 'Solo',
      price: '₹999',
      cadence: '/ month',
      bestFor: 'The complete CRM for one owner.',
      features: ['Every CRM feature', 'Unlimited clients and leads', 'One owner workspace'],
    },
    {
      name: 'Team',
      price: '₹2,499',
      cadence: '/ month',
      bestFor: 'Shared CRM operations for an agency team.',
      features: ['5 seats included', 'Roles and record assignment', 'Extra seats ₹399/month each'],
      badge: 'Best for small teams',
    },
    {
      name: 'Agency',
      price: '₹4,999',
      cadence: '/ month',
      bestFor: 'More capacity and support for a growing agency.',
      features: [
        'Everything in Team',
        '15 seats included',
        'Advanced reporting',
        'Priority support',
        'Extra seats ₹299/month each',
      ],
    },
  ],
  notForHeading: 'What it is not, today',
  notFor: [
    'Not an enterprise sales CRM with pipelines-of-pipelines',
    'Not a replacement for your accountant',
  ],
  siteUrl: 'https://wtscrm.com',
  siteLabel: 'wtscrm.com',
  trialUrl: 'https://wtscrm.com',
  primaryCta: 'Start your free 3-day trial',
  secondaryCta: 'See how it works',
  reassurance: 'No card required for the free 3-day trial. Paid access is billed through Razorpay.',
  trialNote:
    'Every plan starts with a free 3-day trial. No card, and no charge. If you stop there, the workspace locks and nothing is deleted.',
  preLaunchCta: 'Ask for an early-access invite',
  preLaunchNote: 'Trial signup is not open yet. Until then we are inviting early users personally.',
  faqHeading: 'Questions people ask before they start',
  faqs: [
    {
      question: 'Who is WTS CRM for?',
      answer:
        'Indian freelancers and solo agency owners who handle their own sales and delivery — designers, developers, marketers, consultants, photographers and coaches with roughly 10 to 100 active leads or clients. If you currently track enquiries in WhatsApp, notes or Excel, it is built for you.',
    },
    {
      question: 'How much does WTS CRM cost?',
      answer:
        'Starter is ₹499 per month for one user and up to 100 clients. Solo is ₹999 per month with every CRM feature and unlimited clients. Team is ₹2,499 per month with five seats included, and extra seats are ₹399 per month each. Agency is ₹4,999 per month with fifteen seats, advanced reporting and priority support, and extra seats are ₹299 per month each. There are no hidden charges, and paid access is billed through Razorpay.',
    },
    {
      question: 'Is there a free trial, and do I need a card?',
      answer:
        'Yes. Every plan starts with a free 3-day trial and no card is required, so nothing is charged. If you stop at the end of the trial your workspace locks, and nothing is deleted.',
    },
    {
      question: 'Can WTS CRM replace tracking leads in WhatsApp and Excel?',
      answer:
        'That is exactly what it is for. Log an enquiry once with its source and context, set the next follow-up against it, and open a daily view that tells you who to contact today. When the lead converts, the same record becomes the client you invoice.',
    },
    {
      question: 'Can I create invoices and track payments?',
      answer:
        'Yes. You can raise a professional invoice from a client record instead of retyping the same details each month, and mark what has been paid and what is still outstanding so you know who to follow up with.',
    },
    {
      question: 'Does WTS CRM work for teams?',
      answer:
        'Yes. The Team plan supports shared CRM operations for agency teams, includes five seats, and provides roles and record assignment, with additional seats at ₹399 per month each. Growing agencies can move to the Agency plan for fifteen seats, advanced reporting and priority support, with additional seats at ₹299 per month each.',
    },
    {
      question: 'What makes it different from a large sales CRM?',
      answer:
        'Scope. There is no setup project, no pipeline configuration and no unused enterprise features to work around. It covers one straight line — lead, follow-up, invoice, payment — for a person who does the selling and the delivery themselves.',
    },
  ],
  keywords: [
    'CRM for freelancers India',
    'simple CRM for solo agency owners',
    'invoicing software for freelancers India',
    'lead management software for small business India',
    'follow up reminder CRM',
    'client and invoice management for freelancers',
    'CRM and invoicing app India',
    'WTS CRM',
  ],
};

/** Ordered as they should appear on /projects. */
export const PROJECTS: ProjectData[] = [WTS_CRM];
