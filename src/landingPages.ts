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
  /** Service hub linking out to the dedicated service pages. */
  services?: {
    heading: string;
    intro: string;
    items: { title: string; description: string; href: string }[];
  };
  /** Price snapshot built from PRICING_PACKAGES, targeting "cost" queries. */
  pricing?: { heading: string; intro: string; note: string };
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
