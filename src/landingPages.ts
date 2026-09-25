/**
 * Config-driven landing pages rendered by <LandingPageView />.
 * Each entry is a full Google Ads destination: hero → benefits → portfolio →
 * testimonials → FAQ → CTA → contact form.
 */

import { PortfolioItem } from './types';

export interface LandingBenefit {
  title: string;
  description: string;
  icon: 'target' | 'gauge' | 'search' | 'shield' | 'smartphone' | 'trending' | 'cart' | 'refresh' | 'headset';
}

/**
 * Optional long-form sections for pages that must rank organically, not just
 * convert ad clicks. Each renders only when present, so the ads-only pages
 * above stay lean.
 */
export interface LandingSeoSections {
  /** Keyword-bearing introduction placed directly after the trust bar. */
  intro?: { heading: string; paragraphs: string[] };
  /** Case for the technology itself, for pages targeting a framework or platform. */
  highlights?: {
    heading: string;
    intro: string;
    items: { title: string; description: string }[];
  };
  /**
   * Service hub. Items with an `href` link out to their dedicated page; items
   * without one render as plain cards.
   */
  services?: {
    heading: string;
    intro: string;
    items: { title: string; description: string; href?: string }[];
  };
  /**
   * Performance practices plus links that let the visitor test live builds
   * themselves. Deliberately holds no scores: numbers go stale, a live test
   * does not.
   */
  performance?: {
    heading: string;
    intro: string;
    points: { title: string; description: string }[];
    tests: { label: string; url: string }[];
  };
  /**
   * Named, verifiable builds. Every entry must be live and actually built by
   * us on the stack the page is about.
   */
  caseStudies?: {
    heading: string;
    intro: string;
    items: {
      name: string;
      kind: string;
      description: string;
      points: string[];
      stack: string[];
      links: { label: string; href: string }[];
    }[];
  };
  /** Grouped technology list. */
  techStack?: { heading: string; intro: string; groups: { title: string; items: string[] }[] };
  /** Price snapshot built from PRICING_PACKAGES, targeting "cost" queries. */
  pricing?: { heading: string; intro: string; note: string };
  /** Typical delivery time per project type, targeting "how long" queries. */
  timelines?: {
    heading: string;
    intro: string;
    items: { project: string; duration: string; description: string }[];
    note: string;
  };
  /** What happens after launch — support, maintenance and handover. */
  support?: { heading: string; intro: string; items: { title: string; description: string }[] };
  /** Industries and areas served, for local relevance. */
  coverage?: { heading: string; intro: string; industries: string[]; areas: string[] };
}

export interface LandingPageConfig {
  slug: string;
  /** Short name used for the breadcrumb and Service schema. */
  serviceName: string;
  /** Contact form pre-selection so the enquiry arrives tagged with intent. */
  projectType: string;
  eyebrow: string;
  h1: string;
  subheadline: string;
  primaryCta: string;
  heroImage: string;
  heroImageAlt: string;
  trustBadges: string[];
  benefitsEyebrow?: string;
  benefitsHeading: string;
  benefitsIntro: string;
  benefits: LandingBenefit[];
  /** Portfolio categories to feature on this page. */
  portfolioCategories: PortfolioItem['category'][];
  portfolioHeading: string;
  portfolioIntro?: string;
  faqHeading?: string;
  faqIntro?: string;
  faqs: { question: string; answer: string }[];
  seo?: LandingSeoSections;
  ctaHeadline: string;
  ctaText: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const LANDING_PAGES: Record<string, LandingPageConfig> = {
  /**
   * Primary local SEO page. Owns the "website development company in Kolkata"
   * cluster (web development / website design company, website developer and
   * designer in Kolkata, website cost in Kolkata). Other pages should link here
   * with that anchor text rather than target those phrases themselves.
   */
  'website-development-company-kolkata': {
    slug: 'website-development-company-kolkata',
    serviceName: 'Website Development in Kolkata',
    projectType: 'Business Website',
    eyebrow: 'Web Design & Development · Kolkata',
    h1: 'Website Development Company in Kolkata That Grows Your Business',
    subheadline:
      'We design and build fast, SEO-ready websites for Kolkata businesses — from 5-page company sites to full online stores — with a fixed written quote, an agreed delivery date and a local team you can actually reach.',
    primaryCta: 'Get Free Website Consultation',
    heroImage: 'https://images.pexels.com/photos/6476257/pexels-photo-6476257.jpeg',
    heroImageAlt: 'Web Total Solution team planning a website for a Kolkata business',
    trustBadges: ['Based in Kolkata', 'Fixed Written Quote', 'SEO Ready', '30 Days Support'],
    benefitsEyebrow: 'Why Web Total Solution',
    benefitsHeading: 'Why Kolkata Businesses Choose Web Total Solution',
    benefitsIntro:
      'There is no shortage of website developers and web development companies in Kolkata. These are the things our clients tell us made the difference when they compared quotes.',
    benefits: [
      {
        icon: 'headset',
        title: 'A Local Team, Not a Middleman',
        description:
          'You speak directly to the people designing and building your website, in your working hours, with a reply within 24 hours — not to a salesperson relaying messages to an outsourced developer.',
      },
      {
        icon: 'shield',
        title: 'Fixed Quote, Agreed Deadline',
        description:
          'You get a written quote and a delivery date before any work begins. No open-ended estimates, no surprise invoices at handover.',
      },
      {
        icon: 'search',
        title: 'Built to Be Found on Google',
        description:
          'Clean heading structure, schema markup, metadata, sitemaps and fast load times are part of every build — the technical foundation local rankings depend on.',
      },
      {
        icon: 'smartphone',
        title: 'Designed for Mobile First',
        description:
          'Most of your customers will find you on a phone. Every layout is designed for small screens first, then scaled up to tablet and desktop.',
      },
      {
        icon: 'target',
        title: 'Structured to Win Enquiries',
        description:
          'Every page leads to a clear next step — call, WhatsApp or enquiry form — so visitors become conversations instead of bounces.',
      },
      {
        icon: 'refresh',
        title: 'You Own Everything',
        description:
          'Your domain, hosting, content and source code belong to you. No lock-in, no proprietary builder you cannot leave.',
      },
    ],
    portfolioCategories: ['Corporate', 'E-Commerce', 'Landing Page'],
    portfolioHeading: 'Recent Websites From Our Kolkata Studio',
    faqHeading: 'Website Development in Kolkata: FAQs',
    faqIntro:
      'Straight answers to what Kolkata business owners ask us before hiring a website development company.',
    faqs: [
      {
        question: 'How much does website development cost in Kolkata?',
        answer:
          'It depends on the number of pages, the level of custom design and the features you need. Our Business Essential websites (up to 5 pages) start at ₹15,000, Business Growth websites (up to 10 pages with a CMS and blog) start at ₹35,000, and e-commerce or custom platforms are quoted individually. After a free consultation you receive a fixed written quote, so you know the exact investment before work begins.',
      },
      {
        question: 'How long does it take to build a website?',
        answer:
          'A landing page typically goes live in 1–2 weeks, a complete business website with 5–10 pages in 2–4 weeks, and an online store in 3–6 weeks depending on catalogue size and integrations. We confirm your timeline in writing before development starts.',
      },
      {
        question: 'How do I choose the right website development company in Kolkata?',
        answer:
          'Ask to see live websites they have built, not just screenshots. Insist on a fixed written quote and an agreed delivery date. Confirm in writing that you will own the domain, hosting and source code. Check what support is included after launch, open their past work on your phone to judge speed, and read their public Google reviews. A good company will be comfortable with every one of these questions.',
      },
      {
        question: 'Why hire a Kolkata company instead of a freelancer or an out-of-state agency?',
        answer:
          'A local company works your hours, understands the Kolkata market your customers are in, and is accountable as a team rather than depending on one person staying available. You still get agency-level process — written scope, design approval, testing and post-launch support — without the communication gaps of a remote vendor you have never spoken to.',
      },
      {
        question: 'Will my website rank on Google in Kolkata?',
        answer:
          'Every website we build ships with technical SEO in place: fast load times, mobile-first layouts, clean heading structure, schema markup, metadata and a sitemap submitted to Google Search Console. Rankings also depend on your content, competition and Google Business Profile, so no honest company can guarantee a position — but we give you the foundation, and our SEO content and digital marketing services can take it further.',
      },
      {
        question: 'Do you only work with businesses in Kolkata?',
        answer:
          'No. We are based in Garia, Kolkata, and work with businesses across West Bengal, the rest of India and internationally. The whole process — consultation, design reviews, approvals and handover — runs smoothly over call, email and WhatsApp.',
      },
      {
        question: 'Can you redesign my existing website instead of building a new one?',
        answer:
          'Yes. We audit your current site for speed, mobile experience, SEO and conversion gaps, then rebuild it on a modern foundation with every existing URL redirected correctly, so the rankings you already have carry across.',
      },
      {
        question: 'Do you handle domain, hosting and maintenance?',
        answer:
          'Yes. We set up the domain, hosting and SSL certificate in your name and manage the go-live. Every project includes 30 days of post-launch support, and ongoing maintenance plans are available if you want us to keep your website updated.',
      },
    ],
    ctaHeadline: 'Looking for a Website Developer in Kolkata?',
    ctaText:
      'Book a free consultation and get honest advice, a recommended approach and a fixed written quote for your website — usually within 24 hours.',
    meta: {
      title: 'Website Development Company in Kolkata | Web Total Solution',
      description:
        'Website development company in Kolkata building fast, SEO-ready business websites and online stores. Fixed quotes from ₹15,000. Book a free consultation.',
      keywords: [
        'website development company in Kolkata',
        'web development company in Kolkata',
        'website design company in Kolkata',
        'website developer in Kolkata',
        'website designer in Kolkata',
        'web development agency Kolkata',
        'website development cost in Kolkata',
      ],
    },
    seo: {
      intro: {
        heading: 'Web Design and Development in Kolkata, Done Properly',
        paragraphs: [
          'Web Total Solution is a website development and website design company in Kolkata, based in Garia, that builds websites for businesses that need them to do real work: bring in enquiries, answer customer questions and make a strong first impression before anyone picks up the phone.',
          'We have delivered 35+ websites across 12+ industries, from 5-page company websites for local service businesses to e-commerce stores and custom web applications. Every project is designed from scratch around your customers — never a recycled template — and built with the speed, mobile experience and technical SEO that Google expects.',
          'Whether you need your first website, a redesign of one that has stopped working for you, or an online store, you get one local team handling design, development, content and launch, with a fixed quote and a delivery date agreed in writing.',
        ],
      },
      services: {
        heading: 'Website Development Services in Kolkata',
        intro:
          'Everything your business needs to succeed online, handled by one team. Choose the service that fits, or tell us the goal and we will recommend the right approach.',
        items: [
          {
            title: 'Business Website Development',
            description:
              'Professional, lead-generating websites for service businesses, manufacturers, clinics, consultants and professional firms.',
            href: '/business-website-development',
          },
          {
            title: 'E-Commerce Website Development',
            description:
              'Online stores with secure Razorpay or UPI payments, fast product pages and a checkout built to reduce abandoned carts.',
            href: '/ecommerce-development',
          },
          {
            title: 'Website Redesign',
            description:
              'Rebuild a slow or outdated website on a modern, mobile-first foundation without losing the rankings you already have.',
            href: '/website-redesign',
          },
          {
            title: 'Landing Page Design',
            description:
              'Focused, high-converting pages for Google Ads and Meta campaigns, built to turn paid clicks into enquiries.',
            href: '/services/landing-pages',
          },
          {
            title: 'Custom Web Applications',
            description:
              'Portals, dashboards and SaaS products that replace spreadsheets and manual processes in your business.',
            href: '/services/saas-development',
          },
          {
            title: 'SEO & Digital Marketing',
            description:
              'Search-optimised content and campaigns that bring the right Kolkata customers to your new website.',
            href: '/services/digital-marketing',
          },
        ],
      },
      pricing: {
        heading: 'Website Development Cost in Kolkata',
        intro:
          'Transparent starting prices, so you can plan before we speak. Your exact figure comes as a fixed written quote after a free consultation.',
        note: 'All prices in INR. Every website includes mobile-responsive design, on-page SEO setup and post-launch support.',
      },
      coverage: {
        heading: 'Industries and Areas We Serve Across Kolkata',
        intro:
          'We work with businesses of every size across Kolkata and the wider region, and with clients anywhere in India who prefer to work remotely.',
        industries: [
          'Healthcare & Clinics',
          'Education & Coaching',
          'Real Estate',
          'Legal & Professional Services',
          'Manufacturing & Industrial',
          'Textiles & Export',
          'Retail & E-Commerce',
          'Food & Restaurants',
          'Events & Hospitality',
          'Logistics & Transport',
          'Interior Design',
          'Finance',
        ],
        areas: [
          'Garia',
          'Jadavpur',
          'Tollygunge',
          'Behala',
          'Ballygunge',
          'Park Street',
          'Salt Lake & Sector V',
          'New Town & Rajarhat',
          'Dum Dum',
          'Howrah',
        ],
      },
    },
  },

  /**
   * Delhi local SEO page, backed by the real office in Rohini Sector 19. Owns
   * the "website development company in Delhi" cluster (web design / website
   * developer in Delhi, Rohini and Delhi NCR). Copy is written for Delhi, not
   * a find-and-replace of the Kolkata page — duplicate city pages read as
   * doorway pages to Google.
   */
  'website-development-company-delhi': {
    slug: 'website-development-company-delhi',
    serviceName: 'Website Development in Delhi',
    projectType: 'Business Website',
    eyebrow: 'Web Design & Development · Rohini, Delhi',
    h1: 'Website Development Company in Delhi for Businesses That Want Enquiries',
    subheadline:
      'From our office in Rohini, we design and build fast, SEO-ready websites and online stores for Delhi NCR businesses — with a fixed written quote, a delivery date agreed up front and a team that replies within 24 hours.',
    primaryCta: 'Get Free Website Consultation',
    heroImage: 'https://images.pexels.com/photos/6476257/pexels-photo-6476257.jpeg',
    heroImageAlt: 'Web Total Solution team planning a website for a Delhi business',
    trustBadges: ['Office in Rohini, Delhi', 'Fixed Written Quote', 'SEO Ready', '30 Days Support'],
    benefitsEyebrow: 'Why Web Total Solution',
    benefitsHeading: 'Why Delhi Businesses Work With Web Total Solution',
    benefitsIntro:
      'Delhi has thousands of web designers, and quotes range from a few thousand rupees to several lakhs for what looks like the same website. This is what you get from us, in writing, before you pay anything.',
    benefits: [
      {
        icon: 'headset',
        title: 'A Delhi Office You Can Reach',
        description:
          'We operate from Rohini Sector 19 in North West Delhi. You deal directly with the people designing and building your site — no call-centre sales team, no work passed silently to a subcontractor.',
      },
      {
        icon: 'shield',
        title: 'Quotes You Can Compare',
        description:
          'Every quote lists the pages, features, timeline and what happens after launch, line by line. You can hold it against any other Delhi agency and see exactly what you are paying for.',
      },
      {
        icon: 'search',
        title: 'Built for a Crowded Local Market',
        description:
          'In Delhi you are competing with hundreds of businesses for the same searches. Fast load times, schema markup, clean structure and location pages give your site the technical footing to compete.',
      },
      {
        icon: 'target',
        title: 'Enquiries on WhatsApp and Call',
        description:
          'Delhi customers want to talk before they buy. Every page puts a call, WhatsApp or enquiry button within reach, so interest turns into a conversation while it is still warm.',
      },
      {
        icon: 'cart',
        title: 'Catalogues for Traders and Manufacturers',
        description:
          'Wholesalers, distributors and manufacturers get product catalogues built for enquiries rather than a cart — searchable ranges, spec sheets and a quote request on every product.',
      },
      {
        icon: 'refresh',
        title: 'You Own Everything',
        description:
          'The domain, hosting, content and source code are registered to you. If you ever move on, you take the whole website with you.',
      },
    ],
    portfolioCategories: ['Corporate', 'E-Commerce', 'Landing Page'],
    portfolioHeading: 'Websites We Have Built and Launched',
    portfolioIntro:
      'Live client websites from our team — open them on your phone and judge the speed and design for yourself.',
    faqHeading: 'Website Development in Delhi: FAQs',
    faqIntro:
      'What Delhi business owners usually ask us before choosing a website development company.',
    faqs: [
      {
        question: 'How much does website development cost in Delhi?',
        answer:
          'Our Business Essential websites (up to 5 pages) start at ₹15,000, Business Growth websites (up to 10 pages with a CMS and blog) start at ₹35,000, and e-commerce stores or custom platforms are quoted individually. Prices are the same for Delhi clients as for everyone else. After a free consultation you get a fixed written quote, so the figure does not change once work starts.',
      },
      {
        question: 'Why do website quotes in Delhi vary so much?',
        answer:
          'Low quotes usually mean a pre-made template, shared hosting in the agency’s name, no SEO setup and no support after launch. Very high quotes often carry agency overheads you never see. Compare quotes on the same points: number of pages, custom design or template, who owns the domain and code, what SEO is included, and how long support lasts. We put all of these in writing.',
      },
      {
        question: 'Where is your Delhi office?',
        answer:
          'Our Delhi office is at Dhani Ram Colony, Shiv Chowk, Rohini Sector 19, North West Delhi 110042. Most of the process — consultation, design reviews and approvals — runs over call, WhatsApp and email, so you do not need to travel. If you would prefer to meet in person, message us to arrange a time.',
      },
      {
        question: 'Do you work with businesses in Gurugram, Noida, Ghaziabad and Faridabad?',
        answer:
          'Yes. We work with businesses across Delhi NCR and the rest of India. Location does not change the process, pricing or timeline.',
      },
      {
        question: 'How long does it take to build a website?',
        answer:
          'A landing page usually goes live in 1–2 weeks, a 5–10 page business website in 2–4 weeks, and an online store in 3–6 weeks depending on the size of the catalogue and the integrations. The timeline is confirmed in writing before development begins.',
      },
      {
        question: 'Will my website rank on Google in Delhi?',
        answer:
          'Every site ships with technical SEO in place: fast load times, mobile-first layouts, schema markup, metadata and a sitemap submitted to Google Search Console. In a market as competitive as Delhi, rankings also depend on your content, reviews and Google Business Profile, so no honest company will guarantee a position. We build the foundation, and our SEO content and digital marketing services can take it further.',
      },
      {
        question: 'I run a wholesale or manufacturing business. Do I need an online store?',
        answer:
          'Usually not. Most B2B buyers want to check your range and ask for a price, not pay by card. We build product catalogues with categories, specifications and a quote-request or WhatsApp button on each product, which suits trading and manufacturing businesses far better than a retail checkout.',
      },
      {
        question: 'Can you redesign my existing website?',
        answer:
          'Yes. We audit the current site for speed, mobile experience, SEO and conversion gaps, then rebuild it on a modern foundation with every existing URL redirected, so the rankings you already have carry across.',
      },
      {
        question: 'Do you handle domain, hosting and maintenance?',
        answer:
          'Yes. We set up the domain, hosting and SSL certificate in your name and manage the go-live. Every project includes 30 days of post-launch support, and ongoing maintenance plans are available if you want us to keep the site updated.',
      },
    ],
    ctaHeadline: 'Looking for a Website Developer in Delhi?',
    ctaText:
      'Book a free consultation and get honest advice, a recommended approach and a fixed written quote for your website — usually within 24 hours.',
    meta: {
      title: 'Website Development Company in Delhi | Web Total Solution',
      description:
        'Website development company in Rohini, Delhi building fast, SEO-ready business websites and online stores. Fixed quotes from ₹15,000. Free consultation.',
      keywords: [
        'website development company in Delhi',
        'web development company in Delhi',
        'website design company in Delhi',
        'website developer in Delhi',
        'website designer in Rohini',
        'web design company Delhi NCR',
        'website development cost in Delhi',
      ],
    },
    seo: {
      intro: {
        heading: 'Web Design and Development in Delhi, From Rohini',
        paragraphs: [
          'Web Total Solution is a website development and design company with an office in Rohini Sector 19, North West Delhi. We build websites for Delhi businesses that need them to earn their keep: bring in enquiries, answer the questions customers ask before they call, and look credible next to competitors a few streets away.',
          'Our team has delivered 35+ websites for 12+ industries — company websites for service firms, catalogues for manufacturers, online stores and custom web applications. Each one is designed around the customers it has to win, never a recycled template, and built with the speed and technical SEO Google expects.',
          'Whether you need a first website, a redesign of one that has stopped bringing in work, or an online store, one team handles design, development, content and launch, with the price and delivery date agreed in writing before we start.',
        ],
      },
      services: {
        heading: 'Website Development Services in Delhi',
        intro:
          'Everything your business needs online, handled by one team. Pick the service that fits, or tell us the goal and we will recommend the approach.',
        items: [
          {
            title: 'Business Website Development',
            description:
              'Lead-generating websites for CA firms, lawyers, clinics, consultants, coaching institutes and service businesses.',
            href: '/business-website-development',
          },
          {
            title: 'E-Commerce Website Development',
            description:
              'Online stores with Razorpay or UPI payments, fast product pages and a checkout designed to reduce abandoned carts.',
            href: '/ecommerce-development',
          },
          {
            title: 'Website Redesign',
            description:
              'Rebuild a slow or dated website on a modern, mobile-first foundation without losing the rankings you already have.',
            href: '/website-redesign',
          },
          {
            title: 'Landing Page Design',
            description:
              'Focused pages for Google Ads and Meta campaigns — essential when Delhi ad clicks are this expensive.',
            href: '/services/landing-pages',
          },
          {
            title: 'Custom Web Applications',
            description:
              'Portals, dashboards and internal tools that replace spreadsheets, registers and manual follow-ups.',
            href: '/services/saas-development',
          },
          {
            title: 'SEO & Digital Marketing',
            description:
              'Search-focused content and campaigns that bring customers from across Delhi NCR to your new website.',
            href: '/services/digital-marketing',
          },
        ],
      },
      pricing: {
        heading: 'Website Development Cost in Delhi',
        intro:
          'Starting prices up front, so you can plan before we speak. Your exact figure comes as a fixed written quote after a free consultation.',
        note: 'All prices in INR. Every website includes mobile-responsive design, on-page SEO setup and post-launch support.',
      },
      coverage: {
        heading: 'Industries and Areas We Serve Across Delhi NCR',
        intro:
          'Our Rohini office works with businesses throughout Delhi and the NCR, and with clients anywhere in India who prefer to work remotely.',
        industries: [
          'Wholesale & Trading',
          'Manufacturing & Industrial',
          'Coaching & Education',
          'Healthcare & Clinics',
          'CA & Legal Firms',
          'Real Estate',
          'Fashion & Retail',
          'Export Houses',
          'Food & Restaurants',
          'Interior Design',
          'Logistics & Transport',
          'Events & Hospitality',
        ],
        areas: [
          'Rohini',
          'Pitampura',
          'Shalimar Bagh',
          'Prashant Vihar',
          'Model Town',
          'Netaji Subhash Place',
          'Paschim Vihar',
          'Janakpuri',
          'Karol Bagh',
          'Connaught Place',
          'Gurugram',
          'Noida',
        ],
      },
    },
  },

  /**
   * National technology page. Owns the "Next.js development company in India"
   * cluster (Next.js development services / agency, hire Next.js developers,
   * Next.js website development).
   *
   * Proof rule: only webtotalsolution.com and wtscrm.com are confirmed Next.js
   * builds. The client portfolio is React (Vite), so it is presented as React
   * work — never relabel it as Next.js.
   */
  'nextjs-development-company-india': {
    slug: 'nextjs-development-company-india',
    serviceName: 'Next.js Development',
    projectType: 'SaaS / Web Application',
    eyebrow: 'Next.js · React · TypeScript',
    h1: 'Next.js Development Company in India',
    subheadline:
      'We build fast, SEO-friendly websites, SaaS platforms and web applications on Next.js and React — with a fixed written quote, an agreed delivery date and full ownership of the code.',
    primaryCta: 'Discuss Your Next.js Project',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt: 'Next.js web application dashboard built by Web Total Solution',
    trustBadges: ['Next.js App Router', 'Fixed Written Quote', 'You Own the Code', 'SEO Built In'],
    benefitsEyebrow: 'Why Web Total Solution',
    benefitsHeading: 'Why Hire Web Total Solution for Next.js Development',
    benefitsIntro:
      'Plenty of agencies list Next.js on their website. Here is what you can check about us before you sign anything.',
    benefits: [
      {
        icon: 'trending',
        title: 'We Run Next.js in Production Ourselves',
        description:
          'Our own website and our SaaS product, WTS CRM, are both built on Next.js and live today. We solve the same deployment, caching and SEO problems for ourselves that we solve for clients.',
      },
      {
        icon: 'shield',
        title: 'Fixed Quote, Agreed Deadline',
        description:
          'After scoping you get a written quote and a delivery date before development starts. No open-ended hourly billing and no surprise invoices at handover.',
      },
      {
        icon: 'refresh',
        title: 'Your Code, Your Accounts',
        description:
          'The repository, hosting, domain and database are set up in your name. Any competent React developer can pick the project up later — you are never locked in to us.',
      },
      {
        icon: 'headset',
        title: 'Direct Access to the Developers',
        description:
          'You talk to the people writing the code, on Indian working hours, with a reply within 24 hours — not to an account manager relaying messages.',
      },
      {
        icon: 'search',
        title: 'SEO Is Part of the Build',
        description:
          'Metadata, canonical URLs, schema markup, sitemaps and server-rendered content are set up during development, not bolted on after launch.',
      },
      {
        icon: 'target',
        title: 'Built Around a Business Goal',
        description:
          'Whether the goal is enquiries, sign-ups or fewer manual processes, we plan pages and features around it — so you pay for what moves the number, not for features nobody uses.',
      },
    ],
    portfolioCategories: ['SaaS', 'Corporate', 'E-Commerce'],
    portfolioHeading: 'React Websites We Have Delivered for Clients',
    portfolioIntro:
      'Next.js is built on React, and these are React sites we designed and built for clients. Every one is live — open them and judge the quality for yourself.',
    faqHeading: 'Next.js Development: FAQs',
    faqIntro:
      'Straight answers to what founders and business owners ask before hiring a Next.js development company.',
    faqs: [
      {
        question: 'How much does Next.js development cost in India?',
        answer:
          'A Next.js business website with up to 5 pages starts at ₹15,000, and a website with up to 10 pages, a CMS and a blog starts at ₹35,000. SaaS platforms, web applications and e-commerce builds depend heavily on features, integrations and user roles, so they are scoped and quoted individually. After a free consultation you receive a fixed written quote before any work begins.',
      },
      {
        question: 'How long does a Next.js project take?',
        answer:
          'A Next.js business website typically takes 2–4 weeks once content and approvals are ready. A first version of a SaaS product or web application usually takes 6–12 weeks depending on scope. We confirm the timeline in writing during planning and show you working progress along the way.',
      },
      {
        question: 'Is Next.js the right choice for my project?',
        answer:
          'Next.js is a strong fit when speed, search visibility and room to grow matter — marketing websites that need to rank, SaaS products, dashboards, customer portals and headless e-commerce. If you only need a very simple site that you want to edit yourself with no developer involvement, a website builder or WordPress may suit you better, and we will tell you so during the consultation.',
      },
      {
        question: 'Is Next.js good for SEO?',
        answer:
          'Yes. Next.js renders pages on the server or at build time, so search engines receive complete HTML instead of a blank page waiting for JavaScript. It also has built-in support for metadata, sitemaps, image optimisation and fast loading — the technical factors Google measures. Rankings still depend on your content and competition, so no honest company can guarantee a position, but Next.js gives you a very strong foundation.',
      },
      {
        question: 'Can you migrate my React or WordPress website to Next.js?',
        answer:
          'Yes. We move existing React single-page apps and WordPress sites to Next.js, map every existing URL to its new location with proper redirects, and carry across your metadata and content, so the rankings you already have are preserved while speed and SEO improve.',
      },
      {
        question: 'Do you build SaaS products with Next.js and Supabase?',
        answer:
          'Yes. Next.js with a Postgres backend such as Supabase is a stack we use for SaaS products and internal tools: it gives you authentication, a real relational database, row-level security and file storage without building every piece from scratch. We plan the data model and access rules first, because they are the hardest things to change later.',
      },
      {
        question: 'Will I be able to edit content without a developer?',
        answer:
          'Yes. We connect a headless CMS such as Sanity, or build a simple admin panel, so your team can update pages, blog posts, products and images themselves. The website pulls the new content automatically, without a redeploy.',
      },
      {
        question: 'Where will my Next.js website be hosted, and who owns it?',
        answer:
          'Usually on Vercel, which is built by the team behind Next.js, or on AWS or your own server if you prefer. Either way, the hosting account, domain, database and code repository are created in your name, and you own all of it.',
      },
      {
        question: 'Do you work with clients outside Kolkata?',
        answer:
          'Yes. Our team is based in Kolkata and we work with businesses across India and internationally. Consultation, design reviews, demos and handover all run over video call, email and WhatsApp.',
      },
    ],
    ctaHeadline: 'Planning a Next.js Website or Web App?',
    ctaText:
      'Tell us what you want to build. You will get honest advice on whether Next.js is the right fit, a recommended approach and a fixed written quote — usually within 24 hours.',
    meta: {
      title: 'Next.js Development Company in India | Web Total Solution',
      description:
        'Looking for a Next.js development company in India? Web Total Solution builds fast, SEO-friendly websites, SaaS platforms and web applications using Next.js, React and modern technologies.',
      keywords: [
        'next.js development company india',
        'nextjs development company india',
        'next.js development services india',
        'nextjs development agency india',
        'hire next.js developers india',
        'next.js web development company',
        'next.js website development',
        'react and next.js development company',
      ],
    },
    seo: {
      intro: {
        heading: 'Next.js Development Services in India, From a Team That Ships on It',
        paragraphs: [
          'Web Total Solution is a web development company based in Kolkata that builds websites and web applications for businesses across India and abroad. Next.js is the framework we choose when a project needs to be fast, rank well on Google and keep growing — and it is the framework our own website and our SaaS product run on.',
          'Our Next.js development services cover business websites, SaaS platforms, dashboards, customer portals and headless e-commerce, along with the backend, CMS and third-party integrations each one needs. You get one team handling planning, UI design, development, deployment and support.',
          'Every project starts with the business goal rather than the technology. If Next.js is not the right fit for what you need, we will tell you before you spend anything.',
        ],
      },
      highlights: {
        heading: 'Why Businesses Choose Next.js',
        intro:
          'Next.js is the React framework behind websites for companies such as Nike and Netflix. For a growing business, these are the reasons it matters.',
        items: [
          {
            title: 'Fast by Default',
            description:
              'Pages are rendered on the server or at build time, so visitors get content immediately instead of waiting for JavaScript to load.',
          },
          {
            title: 'Search Engines See Everything',
            description:
              'Google receives complete HTML for every page, unlike client-rendered React apps where content can be missed or indexed late.',
          },
          {
            title: 'One Codebase, Website to App',
            description:
              'Marketing pages, logged-in dashboards and API endpoints can live in one project, so your website and product grow together.',
          },
          {
            title: 'Scales With You',
            description:
              'The same framework serves a 5-page company site and a SaaS product with thousands of users, so growth does not force a rebuild.',
          },
          {
            title: 'Largest Talent Pool',
            description:
              'Next.js is built on React, the most widely used front-end library, so developers are easy to find if you ever bring work in-house.',
          },
          {
            title: 'Host It Anywhere',
            description:
              'Deploy to Vercel, AWS or your own server. You are not tied to a proprietary website builder you can never leave.',
          },
        ],
      },
      services: {
        heading: 'Our Next.js Development Services',
        intro:
          'From a fast company website to a full SaaS product, we handle the front end, back end, content management and integrations as one project.',
        items: [
          {
            title: 'Next.js Business Websites',
            description:
              'Fast, SEO-ready company websites with conversion-focused pages, enquiry forms, WhatsApp integration and analytics set up from day one.',
            href: '/business-website-development',
          },
          {
            title: 'SaaS & Web Application Development',
            description:
              'Subscription products, dashboards, customer portals and internal tools with user accounts, roles, billing and reporting.',
            href: '/services/saas-development',
          },
          {
            title: 'E-Commerce & Headless Commerce',
            description:
              'Fast storefronts with Razorpay, Stripe or UPI checkout, or a Next.js front end on top of Shopify for more design and speed control.',
            href: '/ecommerce-development',
          },
          {
            title: 'Next.js + Supabase Development',
            description:
              'Authentication, a Postgres database, row-level security, file storage and realtime features for SaaS products and internal tools.',
          },
          {
            title: 'Next.js + Sanity CMS Development',
            description:
              'Headless CMS setups your marketing team can edit on their own, with live previews and content that updates without a redeploy.',
          },
          {
            title: 'API & Third-Party Integrations',
            description:
              'Payment gateways, CRMs, email and WhatsApp providers, analytics, AI models and your existing systems, connected securely through server-side APIs.',
          },
        ],
      },
      performance: {
        heading: 'Performance and Core Web Vitals, Built In',
        intro:
          'Speed affects both Google rankings and how many visitors turn into customers. These are the practices we build into every Next.js project.',
        points: [
          {
            title: 'Server Rendering & Static Generation',
            description:
              'Each page is rendered in the way that suits it — static where content rarely changes, refreshed in the background where it does.',
          },
          {
            title: 'Less JavaScript in the Browser',
            description:
              'React Server Components keep data fetching and heavy logic on the server, so phones download and run far less code.',
          },
          {
            title: 'Optimised Images',
            description:
              'Images are resized per device, served as AVIF or WebP and lazy-loaded below the fold, the biggest single win for mobile load time.',
          },
          {
            title: 'No Layout Shift',
            description:
              'Fonts are self-hosted and images have reserved dimensions, so the page does not jump around while it loads.',
          },
          {
            title: 'Code Split by Section',
            description:
              'Sections further down the page load only when needed, keeping the first screen quick even on long pages.',
          },
          {
            title: 'Technical SEO in the Framework',
            description:
              'Metadata, canonical URLs, sitemaps and structured data are generated by the application itself, so they never fall out of date.',
          },
        ],
        tests: [
          {
            label: 'Test this page',
            url: 'https://pagespeed.web.dev/report?url=https%3A%2F%2Fwww.webtotalsolution.com%2Fnextjs-development-company-india',
          },
          {
            label: 'Test wtscrm.com',
            url: 'https://pagespeed.web.dev/report?url=https%3A%2F%2Fwtscrm.com%2F',
          },
        ],
      },
      caseStudies: {
        heading: 'Next.js Projects You Can Open Right Now',
        intro:
          'Two production Next.js builds we designed, developed and still run ourselves. Visit them, click around and test their speed.',
        items: [
          {
            name: 'WTS CRM',
            kind: 'SaaS product',
            description:
              'A CRM and invoicing app for Indian freelancers and agency teams — our own subscription product, live with tiered plans and a free trial.',
            points: [
              'Lead capture, follow-up reminders and a daily action view',
              'Tasks, projects and professional invoices with payment tracking',
              'Private workspaces with user accounts and tiered subscription plans',
            ],
            stack: ['Next.js', 'React', 'CSS Modules'],
            links: [
              { label: 'Visit wtscrm.com', href: 'https://wtscrm.com' },
              { label: 'Product overview', href: '/projects' },
            ],
          },
          {
            name: 'webtotalsolution.com',
            kind: 'Marketing website',
            description:
              'The site you are reading: a content-driven company website with a portfolio, blog and lead capture, all managed from a database rather than hard-coded.',
            points: [
              'App Router with React Server Components and background revalidation',
              'Portfolio and blog served from a Postgres backend, with enquiries captured by a serverless function',
              'Generated sitemap, canonical URLs and JSON-LD structured data on every page',
            ],
            stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Vercel'],
            links: [{ label: 'See our portfolio', href: '/portfolio' }],
          },
        ],
      },
      techStack: {
        heading: 'Our Next.js Technology Stack',
        intro:
          'Proven, well-supported tools chosen for speed, security and long-term maintainability — nothing obscure that only we can work on.',
        groups: [
          { title: 'Framework', items: ['Next.js (App Router)', 'React', 'TypeScript'] },
          { title: 'UI & Styling', items: ['Tailwind CSS', 'Motion', 'Responsive design'] },
          { title: 'Backend & Data', items: ['Node.js', 'PostgreSQL', 'Supabase', 'REST APIs'] },
          { title: 'Content Management', items: ['Sanity', 'Headless CMS', 'Custom admin panels'] },
          { title: 'Payments & Integrations', items: ['Razorpay', 'Stripe', 'Shopify', 'Google Analytics'] },
          { title: 'Hosting & Deployment', items: ['Vercel', 'AWS', 'GitHub'] },
        ],
      },
      pricing: {
        heading: 'Next.js Development Cost in India',
        intro:
          'Starting prices for Next.js websites, so you can plan before we speak. SaaS products and web applications are quoted individually after scoping.',
        note: 'All prices in INR. Every website includes mobile-responsive design, on-page SEO setup and post-launch support.',
      },
    },
  },

  'business-website-development': {
    slug: 'business-website-development',
    serviceName: 'Business Website Development',
    projectType: 'Business Website',
    eyebrow: 'Business Website Development',
    h1: 'Professional Business Websites That Generate More Leads',
    subheadline:
      'We build fast, modern, SEO-optimised websites that help businesses attract customers, build trust, and grow online — designed around your customers, not a template.',
    primaryCta: 'Get Free Website Consultation',
    heroImage: 'https://images.pexels.com/photos/6476257/pexels-photo-6476257.jpeg',
    heroImageAlt: 'Team planning a professional business website design',
    trustBadges: ['Fast Delivery', 'SEO Ready', 'Mobile Responsive', '30 Days Support'],
    benefitsHeading: 'What a Professional Website Does for Your Business',
    benefitsIntro:
      'A business website is not a brochure. Built correctly, it is the hardest-working salesperson on your team — visible every hour, in every city you serve.',
    benefits: [
      {
        icon: 'target',
        title: 'Turns Visitors Into Enquiries',
        description:
          'Every page is structured around a clear next step, so the people who find you actually contact you instead of leaving.',
      },
      {
        icon: 'search',
        title: 'Gets Found on Google',
        description:
          'Clean semantic structure, schema markup and fast load times give your business the technical foundation search rankings depend on.',
      },
      {
        icon: 'shield',
        title: 'Builds Instant Credibility',
        description:
          'Most buyers judge a business within seconds of landing on its website. A premium, professional design makes that first judgement work in your favour.',
      },
      {
        icon: 'gauge',
        title: 'Loads Fast Everywhere',
        description:
          'Optimised images, lazy loading and modern architecture keep your site quick even on average mobile data — where most of your customers are.',
      },
      {
        icon: 'smartphone',
        title: 'Works on Every Device',
        description:
          'Designed mobile-first, then scaled to tablet and desktop, so your business looks equally sharp on a phone in a showroom or a laptop in an office.',
      },
      {
        icon: 'headset',
        title: 'Supported After Launch',
        description:
          'Thirty days of complimentary support after go-live, with maintenance plans available if you want us to keep managing it.',
      },
    ],
    portfolioCategories: ['Corporate', 'Landing Page'],
    portfolioHeading: 'Business Websites We Have Delivered',
    faqs: [
      {
        question: 'What does a professional business website include?',
        answer:
          'A typical business website includes a conversion-focused home page, service or product pages, an about page, a contact page with an enquiry form, WhatsApp integration, mobile-responsive design, technical SEO setup, Google Analytics, an SSL certificate and 30 days of post-launch support. Anything specific to your business is scoped during the consultation.',
      },
      {
        question: 'How much does business website development cost in India?',
        answer:
          'Cost depends on the number of pages, the level of custom design and the features you need. Most professional business websites we deliver fall in the ₹15,000 to ₹50,000 range. We provide a fixed written quote after the free consultation, so you know the exact investment before anything begins.',
      },
      {
        question: 'How long will my business website take?',
        answer:
          'Most business websites go live in 2–4 weeks from the time content and approvals are ready. A single-page site can be delivered in 1–2 weeks. We confirm your timeline in writing during the planning stage.',
      },
      {
        question: 'Do you write the content, or do I need to provide it?',
        answer:
          'Either works. We offer professional SEO copywriting as part of the project, or we can structure and polish content you already have. Most clients prefer we write it, because copy written for search and conversion performs very differently from copy written internally.',
      },
      {
        question: 'Will I be able to update the website myself?',
        answer:
          'Yes, if you want to. We can integrate a content management system so your team can edit text, images and blog posts without touching code. If you would rather not manage it, our maintenance plans cover updates for you.',
      },
    ],
    ctaHeadline: 'Ready to Grow Your Business Online?',
    ctaText:
      'Book a free consultation today and discover how a professional website can help you generate more customers.',
    meta: {
      title: 'Business Website Development Company | Web Total Solution',
      description:
        'Professional business website development that generates leads. Fast, SEO-optimised, mobile-responsive websites built for Indian businesses. Get a free consultation.',
      keywords: [
        'business website development',
        'professional website design company',
        'lead generation website',
        'small business website India',
      ],
    },
  },

  'website-redesign': {
    slug: 'website-redesign',
    serviceName: 'Website Redesign',
    projectType: 'Website Redesign',
    eyebrow: 'Website Redesign Services',
    h1: 'Website Redesign That Turns Traffic Into Customers',
    subheadline:
      'If your website looks dated, loads slowly or brings in visitors but no enquiries, a redesign fixes the cause. We rebuild on a modern, fast, SEO-optimised foundation — without losing the rankings you already have.',
    primaryCta: 'Get Free Website Audit',
    heroImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
    heroImageAlt: 'Designer reviewing a website redesign layout on screen',
    trustBadges: ['Rankings Preserved', 'Speed Optimised', 'Mobile Responsive', '30 Days Support'],
    benefitsHeading: 'Signs Your Website Needs a Redesign',
    benefitsIntro:
      'A redesign is worth the investment when the current site is actively costing you business. These are the patterns we see most often.',
    benefits: [
      {
        icon: 'gauge',
        title: 'It Loads Too Slowly',
        description:
          'Visitors leave sites that take more than a few seconds on mobile. We rebuild with optimised assets and modern architecture so speed stops losing you customers.',
      },
      {
        icon: 'smartphone',
        title: 'It Breaks on Mobile',
        description:
          'Most of your traffic is on a phone. If the layout pinches, overlaps or hides your contact button, that traffic is wasted.',
      },
      {
        icon: 'search',
        title: 'It Does Not Rank',
        description:
          'We audit structure, metadata, schema and content, then rebuild the technical SEO foundation — carefully, so existing rankings carry across.',
      },
      {
        icon: 'target',
        title: 'It Gets Visits, Not Enquiries',
        description:
          'Traffic without conversion is a structure problem. We rebuild the page flow around clear, prominent calls to action.',
      },
      {
        icon: 'shield',
        title: 'It Looks Outdated',
        description:
          'Design age reads as business age. A modern, premium interface repositions you against competitors before a word is read.',
      },
      {
        icon: 'refresh',
        title: 'It Is Hard to Update',
        description:
          'We rebuild on a maintainable stack so adding a page, service or product later takes minutes instead of another developer quote.',
      },
    ],
    portfolioCategories: ['Corporate', 'SaaS'],
    portfolioHeading: 'Websites We Have Rebuilt and Modernised',
    faqs: [
      {
        question: 'Will a redesign hurt my existing Google rankings?',
        answer:
          'Not when it is handled properly. We map every existing URL, set up correct redirects, preserve your content structure and keep metadata intact. Because a redesign also improves speed, mobile experience and technical SEO, rankings typically improve rather than drop.',
      },
      {
        question: 'How much does a website redesign cost?',
        answer:
          'Redesign cost depends on the number of pages, whether content is being rewritten and what new functionality you need. Most redesign projects fall in the ₹15,000 to ₹50,000 range. We start with a free audit of your current site and quote against exactly what needs fixing.',
      },
      {
        question: 'Can you keep my existing content and images?',
        answer:
          'Yes. We can migrate your existing content as-is, restructure it for better readability and search performance, or rewrite it entirely — whichever suits your goals and budget. Images are re-optimised for speed regardless.',
      },
      {
        question: 'Will my website be down during the redesign?',
        answer:
          'No. We build the new site on a separate staging environment and only switch over once you have reviewed and approved it. The changeover itself takes minutes.',
      },
      {
        question: 'How long does a website redesign take?',
        answer:
          'Most redesigns are completed in 2–4 weeks depending on page count and how much content needs rewriting. You will have a confirmed timeline before development starts.',
      },
    ],
    ctaHeadline: 'Ready to Grow Your Business Online?',
    ctaText:
      'Book a free consultation today and discover how a professional website can help you generate more customers.',
    meta: {
      title: 'Website Redesign Services | Web Total Solution',
      description:
        'Professional website redesign services. We rebuild slow, outdated websites into fast, mobile-responsive, SEO-optimised platforms that generate enquiries. Free audit.',
      keywords: [
        'website redesign services',
        'website revamp company',
        'redesign old website',
        'modern website rebuild',
        'website redesign India',
      ],
    },
  },

  'ecommerce-development': {
    slug: 'ecommerce-development',
    serviceName: 'E-Commerce Development',
    projectType: 'E-Commerce Platform',
    eyebrow: 'E-Commerce Development',
    h1: 'E-Commerce Websites Built to Sell, Not Just Display',
    subheadline:
      'We build fast, secure online stores with frictionless checkout, integrated payments and product pages engineered to convert browsers into paying customers.',
    primaryCta: 'Get Free Store Consultation',
    heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop',
    heroImageAlt: 'Online store product page and checkout interface',
    trustBadges: ['Secure Payments', 'SEO Ready', 'Mobile Responsive', '30 Days Support'],
    benefitsHeading: 'What Makes an Online Store Actually Sell',
    benefitsIntro:
      'Most stores lose customers between the product page and the payment screen. We build for the whole journey, not just the catalogue.',
    benefits: [
      {
        icon: 'cart',
        title: 'Frictionless Checkout',
        description:
          'Every extra step costs orders. We build short, clear checkout flows with guest checkout and saved-detail support to reduce cart abandonment.',
      },
      {
        icon: 'shield',
        title: 'Secure Payment Integration',
        description:
          'Razorpay, Stripe, UPI, cards and wallets integrated with SSL and secure handling, so customers trust you enough to complete the purchase.',
      },
      {
        icon: 'smartphone',
        title: 'Mobile-First Shopping',
        description:
          'The majority of Indian online orders happen on a phone. Product browsing, filtering and payment are designed for thumbs first.',
      },
      {
        icon: 'search',
        title: 'Product Pages That Rank',
        description:
          'Structured product schema, optimised titles and fast-loading images help your catalogue show up in Google Shopping and organic search.',
      },
      {
        icon: 'gauge',
        title: 'Speed at Scale',
        description:
          'Whether you list ten products or ten thousand, the store stays fast — because slow catalogue pages quietly kill conversion rates.',
      },
      {
        icon: 'trending',
        title: 'Built to Grow',
        description:
          'Inventory, order management and analytics are set up from day one, so scaling the business does not mean rebuilding the store.',
      },
    ],
    portfolioCategories: ['E-Commerce'],
    portfolioHeading: 'E-Commerce Platforms We Have Built',
    faqs: [
      {
        question: 'How much does e-commerce website development cost?',
        answer:
          'E-commerce projects are quoted on catalogue size, payment and shipping integrations, and how much custom design is involved. Online stores generally start higher than standard business websites because of the additional functionality. We provide a fixed written quote after a free consultation covering your product range and requirements.',
      },
      {
        question: 'Which payment gateways can you integrate?',
        answer:
          'We integrate Razorpay, Stripe, PayU, Cashfree and UPI, along with card, netbanking and wallet options. For international selling we can configure multi-currency checkout. Cash on delivery workflows are also supported.',
      },
      {
        question: 'Can I manage products and orders myself?',
        answer:
          'Yes. Every store ships with an admin dashboard where you can add products, update pricing and stock, manage orders and view sales. We include a handover walkthrough so your team is comfortable running it.',
      },
      {
        question: 'Can you migrate my existing online store?',
        answer:
          'Yes. We migrate products, customer data, order history and URLs from platforms like WooCommerce, Shopify and custom builds, with redirects in place so search rankings and existing links keep working.',
      },
      {
        question: 'How long does an e-commerce build take?',
        answer:
          'A focused store with a moderate catalogue typically takes 3–6 weeks including payment integration and testing. Larger catalogues or custom features extend the timeline, which we confirm before development starts.',
      },
    ],
    ctaHeadline: 'Ready to Start Selling Online?',
    ctaText:
      'Book a free consultation today and discover how a professional online store can help you reach more customers and grow revenue.',
    meta: {
      title: 'E-Commerce Website Development | Web Total Solution',
      description:
        'Custom e-commerce website development with secure payment integration, fast product pages and mobile-first checkout. Built to convert. Free consultation.',
      keywords: [
        'ecommerce website development',
        'online store development company',
        'ecommerce development India',
        'custom online store',
        'ecommerce website design',
      ],
    },
  },
};

export const LANDING_PAGE_SLUGS = Object.keys(LANDING_PAGES);
