/**
 * Products Web Total Solution builds and runs itself, rendered by
 * <ProjectsView /> on /projects. This is deliberately separate from
 * `portfolio_projects` in InsForge: the portfolio is client work, this is our
 * own product line.
 *
 * Copy follows the current WTS CRM feature brief. Keep plan-dependent features
 * and integrations that need separate setup clearly qualified.
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
  /** Trial is shown in pricing but excluded from paid subscription offers. */
  isTrial?: boolean;
  ctaLabel?: string;
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
  /** Scope and integration guidance shown below the FAQs. */
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
  kicker: 'CRM for Indian service businesses',
  headline: 'Manage leads, follow-ups, quotations, projects and payments in one workspace',
  status: 'Live — free 3-day trial',
  tagline: 'From new enquiry to paid invoice, keep the work moving.',
  positioning:
    'WTS CRM helps Indian service businesses capture enquiries, stay on top of follow-ups, send quotations, manage client projects and track invoices and payments.',
  supportingCopy:
    'Start as a solo operator or bring your team into a shared workspace. Features depend on your plan, and some integrations need separate setup.',
  audienceHeading: 'Built for service businesses and the teams behind them',
  audience: [
    'Freelancers and consultants',
    'Agencies and service teams',
    'Businesses handling enquiries from several sources',
    'Teams managing quotations and client projects',
    'Owners tracking invoices and outstanding payments',
  ],
  featuresHeading: 'What you can do with WTS CRM',
  features: [
    {
      icon: 'users',
      title: 'Keep every lead in context',
      description:
        'Store contact details, source, value, notes and activity together. Move leads through stages, mark them hot, warm or cold, and use filters and saved views to focus your day.',
    },
    {
      icon: 'users',
      title: 'Capture and import enquiries',
      description:
        'Add leads manually, import Excel or CSV files with a preview and duplicate checks, or capture enquiries from your website. Meta Lead Ads requires setup.',
    },
    {
      icon: 'bell',
      title: 'Plan follow-ups and calls',
      description:
        'Schedule calls, messages, emails or meetings, record outcomes and book the next action. See due and overdue work on the dashboard and calendar.',
    },
    {
      icon: 'messageSquare',
      title: 'Work with WhatsApp',
      description:
        'Open a lead chat, use message templates, share a quotation or prepare an invoice reminder. You review and send each message in WhatsApp.',
    },
    {
      icon: 'fileText',
      title: 'Send quotations',
      description:
        'Build itemised, branded quotations with discounts, charges and applicable GST. Share a customer link, track views and decisions, then convert an accepted quote to an invoice.',
    },
    {
      icon: 'listChecks',
      title: 'Manage client projects',
      description:
        'Track each project’s owner, service, status, budget and dates. Keep related tasks, notes, invoices and client context connected.',
    },
    {
      icon: 'wallet',
      title: 'Invoice and track payments',
      description:
        'Create branded GST invoices, record full or partial payments, and see the remaining balance. Prepare overdue reminders for WhatsApp.',
    },
    {
      icon: 'clock',
      title: 'Automate routine work',
      description:
        'Use follow-up workflows and rules for assignments, tasks, tags, notes and notifications. Scheduled automation and email delivery require backend setup.',
    },
    {
      icon: 'lock',
      title: 'Work as a team',
      description:
        'Invite teammates, assign records and manage work with owner, admin and member roles. Workspace data is separated at the database level.',
    },
    {
      icon: 'fileText',
      title: 'See reports and export data',
      description:
        'Review pipeline, conversions, sources and team activity. Billing plans also show revenue and receivables; export lists to CSV or account data to CSV or JSON.',
    },
  ],
  workflowHeading: 'How it works',
  workflowIntro:
    'Keep the whole customer journey connected in one place.',
  workflow: [
    {
      label: 'Lead',
      description: 'Capture an enquiry or import existing leads, then qualify and assign it.',
    },
    {
      label: 'Follow-up',
      description: 'Schedule the next call or message and see what is due today.',
    },
    {
      label: 'Quotation',
      description: 'Send an itemised quote and track when the customer views or accepts it.',
    },
    {
      label: 'Project',
      description: 'Keep delivery tasks, notes and client context together after the deal is won.',
    },
    {
      label: 'Invoice',
      description: 'Create a GST invoice with the right items, branding and tax details.',
    },
    {
      label: 'Payment',
      description: 'Record full or partial payments and follow up on the balance.',
    },
  ],
  pricingHeading: 'Choose the workspace that fits your work',
  pricingNote:
    'Explore the complete workspace free for 3 days. Paid plans start at ₹499 per month.',
  plans: [
    {
      name: 'Trial',
      price: 'Free',
      cadence: '',
      isTrial: true,
      ctaLabel: 'Start free trial',
      bestFor: '3 days to explore the complete workspace.',
      features: ['Everything unlocked', 'Up to 100 clients', 'No card required'],
    },
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
      badge: 'Best for agencies',
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
  notForHeading: 'Plan and integration details',
  notFor: [
    'Quotations, projects, GST invoicing and payments depend on the selected plan.',
    'WhatsApp actions open a click-to-chat flow for the user to review and send; WTS CRM is not a shared inbox or automatic WhatsApp sender.',
    'Meta Lead Ads, Exotel calling, Google Calendar, local business lead search and some scheduled emails require separate setup or launch settings.',
  ],
  siteUrl: 'https://wtscrm.com',
  siteLabel: 'wtscrm.com',
  trialUrl: 'https://wtscrm.com',
  primaryCta: 'Start free trial',
  secondaryCta: 'See how it works',
  reassurance: '3 days free to explore the complete workspace. No card required.',
  trialNote:
    'The free trial unlocks the complete workspace for 3 days, with up to 100 clients and no card required.',
  preLaunchCta: 'Ask for an early-access invite',
  preLaunchNote: 'Trial signup is not open yet. Until then we are inviting early users personally.',
  faqHeading: 'Questions people ask before they start',
  faqs: [
    {
      question: 'Who is WTS CRM for?',
      answer:
        'Indian service businesses, from independent professionals to agency teams, that need to manage enquiries, follow-ups, quotations, client work and payments in one place.',
    },
    {
      question: 'How much does WTS CRM cost?',
      answer:
        'The 3-day trial is free, unlocks the complete workspace, allows up to 100 clients and needs no card. Starter is ₹499 per month for one user and up to 100 clients. Solo is ₹999 per month with every CRM feature and unlimited clients and leads. Team is ₹2,499 per month with five seats included; extra seats cost ₹399 per month each. Agency is ₹4,999 per month with fifteen seats, advanced reporting and priority support; extra seats cost ₹299 per month each.',
    },
    {
      question: 'Is there a free trial, and do I need a card?',
      answer:
        'Yes. The Trial plan gives you 3 days to explore the complete workspace, with up to 100 clients. No card is required.',
    },
    {
      question: 'Can WTS CRM replace tracking leads in WhatsApp and Excel?',
      answer:
        'Yes. Log or import leads, keep their notes and history together, and schedule the next action. WhatsApp messages open in WhatsApp for you to review and send.',
    },
    {
      question: 'Can I create invoices and track payments?',
      answer:
        'Yes, on plans that include billing. Create branded GST invoices with itemised charges, then record full or partial payments and track the outstanding balance.',
    },
    {
      question: 'Does WTS CRM send WhatsApp messages automatically?',
      answer:
        'No. WhatsApp actions use click-to-chat: WTS CRM prepares the message, and you review and send it in WhatsApp. It is not a shared WhatsApp inbox or an automatic sender.',
    },
    {
      question: 'Which integrations need separate setup?',
      answer:
        'Meta Lead Ads, Exotel calling and Google Calendar require their own connection and setup. Local business lead search also needs its search integration and launch setting enabled; some scheduled emails depend on backend configuration.',
    },
    {
      question: 'Does WTS CRM work for teams?',
      answer:
        'Yes. The Team plan supports shared CRM operations for agency teams, includes five seats, and provides roles and record assignment, with additional seats at ₹399 per month each. Growing agencies can move to the Agency plan for fifteen seats, advanced reporting and priority support, with additional seats at ₹299 per month each.',
    },
    {
      question: 'What makes it different from a large sales CRM?',
      answer:
        'It connects the practical work of a service business: lead capture, follow-ups, quotations, projects, invoicing and payments. Solo and team plans let the workspace grow with the business.',
    },
  ],
  keywords: [
    'CRM for Indian service businesses',
    'simple CRM for solo agency owners',
    'invoicing software for freelancers India',
    'lead management software for small business India',
    'follow up reminder CRM',
    'client and invoice management for freelancers',
    'CRM and invoicing app India',
    'quotation and project management CRM',
    'WTS CRM',
  ],
};

/** Ordered as they should appear on /projects. */
export const PROJECTS: ProjectData[] = [WTS_CRM];
