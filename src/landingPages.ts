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

export interface LandingPageConfig {
  slug: string;
  /** Contact form pre-selection so the enquiry arrives tagged with intent. */
  projectType: string;
  eyebrow: string;
  h1: string;
  subheadline: string;
  primaryCta: string;
  heroImage: string;
  heroImageAlt: string;
  trustBadges: string[];
  benefitsHeading: string;
  benefitsIntro: string;
  benefits: LandingBenefit[];
  /** Portfolio categories to feature on this page. */
  portfolioCategories: PortfolioItem['category'][];
  portfolioHeading: string;
  faqs: { question: string; answer: string }[];
  ctaHeadline: string;
  ctaText: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const LANDING_PAGES: Record<string, LandingPageConfig> = {
  'business-website-development': {
    slug: 'business-website-development',
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
        'website development company in Kolkata',
        'lead generation website',
        'small business website India',
      ],
    },
  },

  'website-redesign': {
    slug: 'website-redesign',
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
