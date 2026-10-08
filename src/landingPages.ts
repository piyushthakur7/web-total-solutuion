/**
 * Service, location and technology pages rendered by <LandingPageView />.
 *
 * Every page uses the same order — hero, evidence, intro, sections, quote
 * guidance, FAQ, enquiry form — but the content is written per page. City
 * pages are not find-and-replace copies of each other: duplicate city pages
 * read as doorway pages to a search engine and to a visitor.
 *
 * Pricing rule: these pages do not publish INR price cards. The current
 * published prices are the USD starting prices in WEBSITE_PACKAGES; a domestic
 * project is quoted in writing after a scope review. Do not add a rupee figure
 * here unless the business supplies a current, separately scoped offer.
 */

import { Faq, SUPPORT_DETAIL } from './siteContent';
import { ProjectType } from './lead';
import { HERO_IMAGES } from './stockImages';
import { Evidence } from './components/EvidenceBlock';

export interface LandingSection {
  heading: string;
  intro?: string;
  /** `list` is a two-column list of titled points; `links` are internal links. */
  items: { title: string; description: string; href?: string }[];
  /** Small-print under the section. */
  note?: string;
}

export interface LandingPageConfig {
  slug: string;
  /** Short name used for the breadcrumb and Service schema. */
  serviceName: string;
  /** Enquiry form pre-selection so the enquiry arrives tagged with intent. */
  projectType: ProjectType;
  /** Hero backdrop. */
  heroImage: { src: string; alt: string };
  /** Package slug, when the page maps to one. */
  package?: string;
  label: string;
  h1: string;
  lead: string;
  /** Key facts under the hero copy. */
  facts: { label: string; value: string }[];
  evidence: Evidence;
  intro: { heading: string; paragraphs: string[] };
  sections: LandingSection[];
  /** Grouped short terms, e.g. technologies or areas served. */
  groups?: { heading: string; intro?: string; items: { title: string; values: string[] }[] };
  quote: { heading: string; paragraphs: string[] };
  faqHeading: string;
  faqs: Faq[];
  meta: { title: string; description: string; keywords: string[] };
}

const DOMESTIC_QUOTE = [
  'We do not publish a fixed rupee price list, because a five-page company site and a product catalogue are different amounts of work. You receive a written quote in INR after a scope review, with the pages, features, timeline and payment milestones listed.',
  'The deliverables decide the price, not where you are based. Our published starting prices for startup website packages are in USD and are on the pricing page.',
];

const RANKING_FAQ: Faq = {
  question: 'Will my website rank on Google?',
  answer:
    'Every site we build has the technical foundation in place: fast pages, mobile-first layouts, clean heading structure, metadata, structured data and a sitemap submitted to Search Console. Rankings also depend on your content, competition and reviews, so we do not guarantee a position.',
};

const SUPPORT_FAQ: Faq = { question: 'What support is included after launch?', answer: SUPPORT_DETAIL };

export const LANDING_PAGES: Record<string, LandingPageConfig> = {
  /**
   * Primary local SEO page. Owns the "website development company in Kolkata"
   * cluster. Other pages should link here with that anchor text rather than
   * target those phrases themselves.
   */
  'website-development-company-kolkata': {
    slug: 'website-development-company-kolkata',
    heroImage: HERO_IMAGES.studio,
    serviceName: 'Website Development in Kolkata',
    projectType: 'Business Website',
    label: 'Kolkata',
    h1: 'Website development company in Kolkata',
    lead: 'A founder-led web studio based in Garia. We design and build websites for Kolkata businesses, with the scope and price agreed in writing before work starts.',
    facts: [
      { label: 'Office', value: 'Pachpota, Garia, Kolkata 700152' },
      { label: 'Pricing', value: 'Written quote in INR after scope review' },
      { label: 'Design', value: 'Approved before development' },
      { label: 'Support', value: '30 days after launch' },
    ],
    evidence: {
      heading: 'A Kolkata business we built for',
      body: 'JFM Group is a Kolkata security and facility management company. Its website presents the group’s services across West Bengal and takes quote requests. AtoZ Facility Management is a similar services site, built for a staffing firm in Punjab.',
      portfolioIds: ['jfmgroup', 'atozfacility'],
    },
    intro: {
      heading: 'Web design and development, from Garia',
      paragraphs: [
        'Web Total Solution is a website development and design studio in Kolkata. We build websites that have a job to do: explain what a business offers, answer the questions customers ask first and make it easy to get in touch.',
        'You deal with the person leading the work. The studio is run by its founder, Piyush Thakur, who handles discovery, design decisions and development.',
      ],
    },
    sections: [
      {
        heading: 'What we build for Kolkata businesses',
        items: [
          {
            title: 'Business websites',
            description: 'Company and service websites with clear pages for what you offer and a direct enquiry route.',
            href: '/business-website-development',
          },
          {
            title: 'Online stores and catalogues',
            description: 'Stores with online payment, or product catalogues where buyers enquire.',
            href: '/ecommerce-development',
          },
          {
            title: 'Website redesign',
            description: 'A new structure and design for a site that no longer fits the business, with existing URLs carried across.',
            href: '/website-redesign',
          },
          {
            title: 'Landing pages',
            description: 'One focused page for a campaign or a single offer.',
            href: '/services/landing-pages',
          },
        ],
      },
      {
        heading: 'How a local project runs',
        items: [
          {
            title: 'A first conversation',
            description: 'The first conversation is a call or a WhatsApp chat, in your working hours.',
          },
          {
            title: 'Scope and quote in writing',
            description: 'Pages, features, content responsibilities, timeline and price are listed before any work begins.',
          },
          {
            title: 'Review on your own phone',
            description: 'Design and build are shared as preview links, so you check them on the devices your customers use.',
          },
          {
            title: 'Accounts in your name',
            description: 'Domain, hosting and source code belong to you and are handed over at launch.',
          },
        ],
      },
    ],
    groups: {
      heading: 'Areas we work with',
      intro: 'Based in Garia, working with businesses across the city and remotely elsewhere in India.',
      items: [
        {
          title: 'Kolkata',
          values: ['Garia', 'Jadavpur', 'Tollygunge', 'Behala', 'Ballygunge', 'Park Street', 'Salt Lake and Sector V', 'New Town and Rajarhat', 'Dum Dum', 'Howrah'],
        },
      ],
    },
    quote: { heading: 'Website development cost in Kolkata', paragraphs: DOMESTIC_QUOTE },
    faqHeading: 'Website development in Kolkata: questions',
    faqs: [
      {
        question: 'How much does website development cost in Kolkata?',
        answer:
          'It depends on the number of pages, how much custom design is involved and the features you need. We do not publish a fixed rupee price list. After a scope review you receive a written quote in INR, so you know the full cost before work begins.',
      },
      {
        question: 'How long does it take to build a website?',
        answer:
          'The timeline is agreed after the scope review and written into the quote. It depends on the number of pages and on how quickly content and approvals come back.',
      },
      {
        question: 'How do I choose a website development company in Kolkata?',
        answer:
          'Ask to see live websites, not screenshots, and open them on your phone. Ask for the scope and price in writing. Confirm that the domain, hosting and source code will be in your name, and check what support is included after launch.',
      },
      {
        question: 'Do you only work with businesses in Kolkata?',
        answer:
          'No. We are based in Garia and also have an office in Delhi. We work with businesses across India and with clients abroad, with reviews and approvals handled on shared preview links.',
      },
      RANKING_FAQ,
      SUPPORT_FAQ,
    ],
    meta: {
      title: 'Website Development Company in Kolkata | Web Total Solution',
      description:
        'Website development company in Garia, Kolkata. Business websites, online stores and redesigns, with scope and price agreed in writing. Request a project quote.',
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
  },

  /**
   * Delhi local SEO page, backed by the real office in Rohini Sector 19.
   * Written for Delhi, not adapted from the Kolkata page.
   */
  'website-development-company-delhi': {
    slug: 'website-development-company-delhi',
    heroImage: HERO_IMAGES.studio,
    serviceName: 'Website Development in Delhi',
    projectType: 'Business Website',
    label: 'Delhi NCR',
    h1: 'Website development company in Delhi',
    lead: 'From our office in Rohini, we design and build websites, catalogues and online stores for Delhi NCR businesses, with a written quote you can compare line by line.',
    facts: [
      { label: 'Office', value: 'Rohini Sector 19, Delhi 110042' },
      { label: 'Pricing', value: 'Written quote in INR after scope review' },
      { label: 'Design', value: 'Approved before development' },
      { label: 'Support', value: '30 days after launch' },
    ],
    evidence: {
      heading: 'Delhi NCR businesses we built for',
      body: 'South Delhi Flats & Floors is a property site for builder floors and apartments in South Delhi neighbourhoods. Omoora Art & Design Studio is a Gurugram art academy whose site covers its classes and takes demo bookings.',
      portfolioIds: ['southdelhiflats', 'omoora'],
    },
    intro: {
      heading: 'Web design and development in Delhi, from Rohini',
      paragraphs: [
        'Web Total Solution has an office in Rohini Sector 19, North West Delhi. We build websites for Delhi businesses that need them to earn their keep: answer what customers ask before they call, and look credible next to a competitor a few streets away.',
        'Quotes for a website in Delhi vary enormously for what looks like the same thing. Ours lists the pages, features, timeline and support, so you can hold it against any other quote and see what you are paying for.',
      ],
    },
    sections: [
      {
        heading: 'What Delhi businesses ask us for',
        items: [
          {
            title: 'Websites for service firms',
            description: 'For consultants, clinics, coaching institutes and professional firms that win work through enquiries.',
            href: '/business-website-development',
          },
          {
            title: 'Catalogues for traders and manufacturers',
            description: 'Most trade buyers want to check a range and ask for a price, not pay by card. We build searchable catalogues with an enquiry on each product.',
            href: '/work/mechverses',
          },
          {
            title: 'Online stores',
            description: 'Stores with online payment for brands selling direct.',
            href: '/ecommerce-development',
          },
          {
            title: 'Website redesign',
            description: 'A new structure and design for a dated site, with existing URLs carried across.',
            href: '/website-redesign',
          },
        ],
      },
      {
        heading: 'Comparing website quotes in Delhi',
        intro: 'Ask every company the same five questions, including us.',
        items: [
          { title: 'Is the design custom or a template?', description: 'Both are legitimate, but they are not the same amount of work or the same price.' },
          { title: 'Who owns the domain and code?', description: 'They should be registered to your business, not held in the agency’s account.' },
          { title: 'What exactly is included?', description: 'A page count, a feature list and who supplies the content.' },
          { title: 'What search setup is done?', description: 'Metadata, sitemap and Search Console at minimum.' },
          { title: 'How long does support last?', description: 'And what it covers. Ours is 30 days of fixes, small content changes and technical help.' },
        ],
      },
    ],
    groups: {
      heading: 'Areas we work with',
      intro: 'From the Rohini office, across Delhi and the NCR.',
      items: [
        {
          title: 'Delhi NCR',
          values: ['Rohini', 'Pitampura', 'Shalimar Bagh', 'Model Town', 'Netaji Subhash Place', 'Paschim Vihar', 'Janakpuri', 'Karol Bagh', 'Connaught Place', 'Gurugram', 'Noida'],
        },
      ],
    },
    quote: { heading: 'Website development cost in Delhi', paragraphs: DOMESTIC_QUOTE },
    faqHeading: 'Website development in Delhi: questions',
    faqs: [
      {
        question: 'How much does website development cost in Delhi?',
        answer:
          'It depends on the pages, the level of custom design and the features. We do not publish a fixed rupee price list. After a scope review you receive a written quote in INR listing everything included, and the figure does not change unless the scope does.',
      },
      {
        question: 'Why do website quotes in Delhi vary so much?',
        answer:
          'Low quotes often mean a pre-made template, hosting in the agency’s name and no support after launch. High quotes can carry overheads you never see. Compare on the same points: pages, custom design or template, who owns the domain and code, what search setup is included and how long support lasts.',
      },
      {
        question: 'Where is your Delhi office?',
        answer:
          'Dhani Ram Colony, Shiv Chowk, Rohini Sector 19, North West Delhi 110042. Most of the process runs over call, WhatsApp and email, so you do not need to travel. If you would prefer to meet, message us to arrange a time.',
      },
      {
        question: 'I run a wholesale or manufacturing business. Do I need an online store?',
        answer:
          'Usually not. A product catalogue with categories, specifications and an enquiry or WhatsApp button on each product suits trading and manufacturing businesses better than a retail checkout.',
      },
      RANKING_FAQ,
      SUPPORT_FAQ,
    ],
    meta: {
      title: 'Website Development Company in Delhi | Web Total Solution',
      description:
        'Website development company in Rohini, Delhi. Business websites, product catalogues and online stores, with a written quote you can compare. Request a project quote.',
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
  },

  /** National commercial page. Business-led; the stack is the Next.js page's job. */
  'website-development-company-india': {
    slug: 'website-development-company-india',
    heroImage: HERO_IMAGES.work,
    serviceName: 'Website Development in India',
    projectType: 'Business Website',
    label: 'India',
    h1: 'Website development company in India',
    lead: 'A founder-led studio with offices in Kolkata and Delhi. We design and build websites, online stores and web applications for companies across India and for clients abroad.',
    facts: [
      { label: 'Offices', value: 'Kolkata and Delhi' },
      { label: 'Pricing', value: 'Written quote after scope review' },
      { label: 'Ownership', value: 'Domain, hosting and code in your name' },
      { label: 'Support', value: '30 days after launch' },
    ],
    evidence: {
      heading: 'Work you can open and check',
      body: 'Medara Labs is a business website for a pharmaceutical marketing and distribution company, organised around its product range and quality standards. The case study explains the decisions behind it, and the work page lists every live client site with a link.',
      study: 'medara-labs',
    },
    intro: {
      heading: 'What working with us looks like',
      paragraphs: [
        'Hiring a web development company is a trust decision. You are handing over the first impression of your business and a real budget. So the terms are written down before you pay anything: scope, price, timeline, ownership and support.',
        'The studio is founder-led. In five years of web development it has delivered more than 100 websites across more than 30 industries, and the person you brief is the person leading the work.',
      ],
    },
    sections: [
      {
        heading: 'Web development services',
        items: [
          { title: 'Business and startup websites', description: 'Marketing websites that explain an offer and lead to an enquiry.', href: '/business-website-development' },
          { title: 'Online stores', description: 'Category, product, cart and checkout flows with payment integration.', href: '/ecommerce-development' },
          { title: 'Website redesign', description: 'A new structure and design, with content and URLs carried across.', href: '/website-redesign' },
          { title: 'Landing pages', description: 'One page for one audience, offer and action.', href: '/services/landing-pages' },
          { title: 'Product interfaces and web applications', description: 'SaaS products, dashboards and portals, scoped separately from websites.', href: '/services/saas-development' },
          { title: 'Next.js development', description: 'The framework this site and our own product run on.', href: '/nextjs-development-company-india' },
        ],
      },
      {
        heading: 'What a typical website project includes',
        items: [
          { title: 'Planning', description: 'Page structure and messaging, agreed before design.' },
          { title: 'Custom design', description: 'Designed for your business and approved by you before development.' },
          { title: 'Responsive build', description: 'Mobile-first pages with forms and the integrations in the scope.' },
          { title: 'Search setup', description: 'Metadata, structured data, sitemap, analytics and Search Console.' },
          { title: 'Launch in your accounts', description: 'Domain, hosting and SSL set up in your name, with the code handed over.' },
          { title: 'Support', description: '30 days of fixes, small content changes and technical help.' },
        ],
        note: 'Copywriting, e-commerce, a CMS and third-party integrations are added where the scope calls for them.',
      },
    ],
    groups: {
      heading: 'Where our clients are',
      items: [
        { title: 'Offices', values: ['Kolkata', 'Delhi'] },
        { title: 'Remote', values: ['Across India', 'International clients, quoted in USD'] },
      ],
    },
    quote: { heading: 'Website development cost in India', paragraphs: DOMESTIC_QUOTE },
    faqHeading: 'Website development in India: questions',
    faqs: [
      {
        question: 'How much does website development cost in India?',
        answer:
          'It depends on the number of pages, the custom design involved and the features. Domestic projects are quoted in INR in writing after a scope review. Our published starting prices for startup website packages are in USD, from $1,200.',
        link: { label: 'See the packages', href: '/pricing' },
      },
      {
        question: 'How long does it take to develop a website?',
        answer:
          'The timeline is agreed after the scope review and written into the quote. It runs from the point content and approvals are ready.',
      },
      {
        question: 'Do you build custom websites or use templates?',
        answer:
          'Custom. Each website is designed around the business and what the site needs to achieve. You approve the design before development begins.',
      },
      {
        question: 'Can you work with my business if I am not in Kolkata or Delhi?',
        answer:
          'Yes. Consultation, design reviews, approvals and handover all run over call, WhatsApp, email and shared preview links.',
      },
      {
        question: 'Which technologies do you use?',
        answer:
          'Most websites and applications are built with Next.js and React, which are widely supported, so another developer can work on your site later. Content management and integrations are chosen per project and listed in the quote.',
      },
      RANKING_FAQ,
      SUPPORT_FAQ,
    ],
    meta: {
      title: 'Website Development Company in India | Web Total Solution',
      description:
        'Website development company in India with offices in Kolkata and Delhi. Custom business websites, online stores and web apps, with scope and price in writing.',
      keywords: [
        'website development company in india',
        'web development company india',
        'website development agency india',
        'web development services india',
        'professional website development company',
        'custom website development company india',
        'business website development company india',
      ],
    },
  },

  /**
   * National technology page.
   *
   * Proof rule: only webtotalsolution.com and wtscrm.com are confirmed Next.js
   * builds. The client portfolio is React, so it is presented as React work —
   * never relabel it as Next.js.
   */
  'nextjs-development-company-india': {
    slug: 'nextjs-development-company-india',
    heroImage: HERO_IMAGES.code,
    serviceName: 'Next.js Development',
    projectType: 'SaaS / Web Application',
    label: 'Next.js, React, TypeScript',
    h1: 'Next.js development company in India',
    lead: 'We build marketing websites and web applications on Next.js and React, and we run two Next.js projects of our own in production.',
    facts: [
      { label: 'In production', value: 'wtscrm.com and this website' },
      { label: 'Stack', value: 'Next.js App Router, React, TypeScript' },
      { label: 'Ownership', value: 'Repository and hosting in your accounts' },
      { label: 'Pricing', value: 'Written quote after scope review' },
    ],
    evidence: {
      heading: 'Two Next.js builds you can open now',
      body: 'WTS CRM is our own subscription product, built with Next.js and React. The site you are reading is the second: a Next.js App Router site with its portfolio and blog served from a Postgres backend. Both are designed, built and run by us.',
      study: 'wts-crm',
      points: [
        { title: 'App Router and Server Components', text: 'This site renders on the server and revalidates content in the background.' },
        { title: 'Content from a database', text: 'Portfolio and blog entries are stored in Postgres, not hard-coded, and enquiries go to a serverless function.' },
        { title: 'Generated SEO files', text: 'Sitemap, canonical URLs and JSON-LD structured data are produced by the application.' },
        { title: 'Client work is React', text: 'Our client websites are React builds. We say so instead of relabelling them as Next.js.' },
      ],
    },
    intro: {
      heading: 'Why we use Next.js, and when we would not',
      paragraphs: [
        'Next.js renders pages on the server or at build time, so visitors and search engines receive complete HTML. Marketing pages, logged-in screens and API routes can live in one project, which suits a product whose website and application should feel like one thing.',
        'A framework does not guarantee rankings or conversions. Those depend on content, competition and the offer. And if you need a very simple site that you will edit yourself with no developer, a website builder may serve you better. We will say so during the scope review.',
      ],
    },
    sections: [
      {
        heading: 'What we build with it',
        items: [
          { title: 'Marketing websites', description: 'Fast, content-driven sites with a CMS where scoped.', href: '/business-website-development' },
          { title: 'SaaS products and web applications', description: 'Accounts, roles, dashboards and billing flows.', href: '/services/saas-development' },
          { title: 'Landing pages', description: 'Focused pages with forms and analytics.', href: '/services/landing-pages' },
          { title: 'Migrations', description: 'Moving a React single-page app or an older site to Next.js, with existing URLs mapped and redirected.' },
        ],
      },
      {
        heading: 'Maintainability and handover',
        intro: 'A project is only finished when someone else could take it over.',
        items: [
          { title: 'Standard tools', description: 'React and TypeScript are widely used, so another developer can pick the project up.' },
          { title: 'Your accounts', description: 'The repository, hosting and database are created in your name.' },
          { title: 'Typed code', description: 'TypeScript catches a class of mistakes before they reach production.' },
          { title: 'Handover notes', description: 'How to run, deploy and update the project, written down at handover.' },
          { title: 'Performance practices', description: 'Sized images, reserved dimensions to avoid layout shift, and code loaded only where it is needed.' },
          { title: 'Measured, not promised', description: 'Test this page or wtscrm.com in PageSpeed Insights and see current numbers for yourself.' },
        ],
      },
    ],
    groups: {
      heading: 'The stack on our own projects',
      items: [
        { title: 'Framework', values: ['Next.js (App Router)', 'React', 'TypeScript'] },
        { title: 'Styling', values: ['Tailwind CSS', 'CSS Modules', 'Motion'] },
        { title: 'Data', values: ['PostgreSQL', 'Serverless functions'] },
      ],
    },
    quote: {
      heading: 'Next.js project cost',
      paragraphs: [
        'A marketing website on Next.js is covered by our website packages, with starting prices in USD on the pricing page. Domestic projects are quoted in INR after a scope review.',
        'Applications and SaaS products are quoted after discovery, from the list of flows, roles and integrations. Hosting is billed by the provider to your own account.',
      ],
    },
    faqHeading: 'Next.js development: questions',
    faqs: [
      {
        question: 'Is Next.js the right choice for my project?',
        answer:
          'It is a strong fit when speed, search visibility and room to grow matter: marketing websites, SaaS products, dashboards and portals. For a very simple site you want to edit with no developer involved, a website builder may suit you better.',
      },
      {
        question: 'Is Next.js good for SEO?',
        answer:
          'It gives a sound technical base, because pages arrive as complete HTML with metadata and sitemaps generated by the application. It does not guarantee rankings, which depend on your content and competition.',
      },
      {
        question: 'Can you migrate my React or WordPress website to Next.js?',
        answer:
          'Yes, where the scope includes it. Existing URLs are mapped to their new locations with redirects, and metadata and content are carried across.',
      },
      {
        question: 'Will I be able to edit content without a developer?',
        answer:
          'If a CMS is in the scope, yes. The quote names the content types your team will be able to edit.',
      },
      {
        question: 'Where will it be hosted, and who owns it?',
        answer:
          'On the hosting platform agreed in the scope. The hosting account, domain, database and code repository are created in your name.',
      },
      SUPPORT_FAQ,
    ],
    meta: {
      title: 'Next.js Development Company in India | Web Total Solution',
      description:
        'Next.js development company in India. Marketing websites, SaaS products and web applications on Next.js and React, from the studio that builds and runs WTS CRM.',
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
  },

  'business-website-development': {
    slug: 'business-website-development',
    heroImage: HERO_IMAGES.services,
    serviceName: 'Business Website Development',
    projectType: 'Startup Marketing Website',
    package: 'startup-growth-site',
    label: 'Marketing websites',
    h1: 'Business and startup website development',
    lead: 'A multi-page marketing website that explains what you offer, shows why you are credible and leads visitors to one next step.',
    facts: [
      { label: 'Package', value: 'Startup Growth Site, from $2,500 USD' },
      { label: 'Revisions', value: '3 rounds' },
      { label: 'Timeline', value: 'Agreed after scope review' },
      { label: 'Support', value: '30 days after launch' },
    ],
    evidence: {
      heading: 'A business website, explained',
      body: 'Medara Labs markets and distributes medicines. Its website had two questions to answer, what the company supplies and whether it can be trusted on quality, so both sit one click from the home page.',
      study: 'medara-labs',
      points: [
        { title: 'Two first actions', text: 'The opening screen offers the product portfolio and quality assurance, before the company story.' },
        { title: 'Products by category', text: 'The range is filtered by what each product treats, which is how the trade discusses it.' },
        { title: 'Quality as its own page', text: 'Compliance is a navigation item with a checklist, not a slogan on the About page.' },
        { title: 'Enquiry in the header', text: 'The enquiry button stays in the navigation on every page.' },
      ],
    },
    intro: {
      heading: 'What a marketing website has to do',
      paragraphs: [
        'A visitor decides quickly whether a site is for them. The first screen has to say who you serve and what you offer, and every page after it should answer the next question and offer a way to act.',
        'That is a structure problem before it is a design problem, which is why the page list and messaging are agreed before anything is styled.',
      ],
    },
    sections: [
      {
        heading: 'What you receive',
        items: [
          { title: 'Site structure and messaging', description: 'A page list and what each page must say, agreed first.' },
          { title: 'Wireframes', description: 'The layout of each page template before visual design.' },
          { title: 'Approved UI', description: 'A custom interface on desktop and mobile, signed off before development.' },
          { title: 'Responsive build', description: 'Next.js pages with forms and the integrations in the scope.' },
          { title: 'CMS, where scoped', description: 'A blog or editable pages, with each content type named in the quote.' },
          { title: 'QA, launch and handover', description: 'Testing, go-live in your accounts, analytics and a handover.' },
        ],
      },
      {
        heading: 'More business websites we have built',
        intro: 'Live client sites on their own domains.',
        items: [
          { title: 'Laiken Engineering Company', description: 'Industrial component supplier, built around sending a specification and getting a quote.', href: 'https://laikenengineering.com/' },
          { title: 'Gromore Investment', description: 'Investment planning for families, organised by goal.', href: 'https://www.groomore.in/' },
          { title: 'The Selvedge', description: 'B2B denim manufacturing for private-label brands.', href: 'https://www.theselvedge.co.in/' },
          { title: 'Kavita Kabira Wellness Clinic', description: 'A psychologist’s practice with appointment booking.', href: 'https://www.kavitakabira.com/' },
        ],
      },
    ],
    quote: {
      heading: 'Scope and quote',
      paragraphs: [
        'The Startup Growth Site starts at $2,500 USD. The quote depends on the number of page templates, CMS content types, copywriting, migration from an existing site and integrations.',
        'Indian businesses are quoted in INR after a scope review. The timeline is agreed at the same time and written into the quote.',
      ],
    },
    faqHeading: 'Business websites: questions',
    faqs: [
      {
        question: 'What does a business website include?',
        answer:
          'Typically a home page, service or product pages, an about page and a contact page with an enquiry form, built responsively with search setup and analytics. The exact page list is agreed in the written scope.',
      },
      {
        question: 'Do you write the content, or do I provide it?',
        answer:
          'Either. We can structure and edit content you supply, or copywriting can be added to the scope as its own line.',
      },
      {
        question: 'Will I be able to update the website myself?',
        answer:
          'If a CMS is in the scope, yes. The quote names what your team will be able to edit without a developer.',
      },
      {
        question: 'How long will it take?',
        answer:
          'The timeline is agreed after the scope review. It depends on the number of pages and on when content and approvals are ready.',
      },
      SUPPORT_FAQ,
    ],
    meta: {
      title: 'Business Website Development Company | Web Total Solution',
      description:
        'Business and startup website development: messaging, design and a responsive build with CMS where scoped. Startup Growth Site from $2,500 USD.',
      keywords: [
        'business website development',
        'professional website design company',
        'startup website development',
        'lead generation website',
        'small business website India',
      ],
    },
  },

  'website-redesign': {
    slug: 'website-redesign',
    heroImage: HERO_IMAGES.planning,
    serviceName: 'Website Redesign',
    projectType: 'Website Redesign',
    label: 'Website redesign',
    h1: 'Website redesign services',
    lead: 'A new structure, design and build for a website that no longer fits the business, with your content and URLs carried across carefully.',
    facts: [
      { label: 'Starts with', value: 'A review of the current site' },
      { label: 'Pricing', value: 'Written quote after scope review' },
      { label: 'Launch', value: 'Built on a preview, switched after approval' },
      { label: 'Support', value: '30 days after launch' },
    ],
    evidence: {
      heading: 'About the examples on this page',
      body: 'We do not have before-and-after captures that a client has approved for publication, so we are not presenting any project here as a redesign. The case studies show the standard of design and build a redesign would reach. Mechverses is one of them.',
      study: 'mechverses',
    },
    intro: {
      heading: 'When a redesign is worth doing',
      paragraphs: [
        'A redesign earns its cost when the current site is working against you: it is slow on a phone, hard to update, or built for a version of the business that no longer exists.',
        'It is not always the answer. Sometimes the structure is sound and the copy is the problem. The review at the start is there to tell the difference before you spend on a rebuild.',
      ],
    },
    sections: [
      {
        heading: 'Signs the current site is the problem',
        items: [
          { title: 'It is slow on mobile', description: 'Heavy images and old code make pages load slowly on a phone connection.' },
          { title: 'The layout breaks on small screens', description: 'Text overlaps, buttons are hard to tap or the contact route disappears.' },
          { title: 'Visitors come but do not enquire', description: 'The pages do not lead anywhere, or lead to too many places.' },
          { title: 'Updating it needs a developer', description: 'Adding a page or changing a price means another quote.' },
        ],
      },
      {
        heading: 'How a redesign runs',
        items: [
          { title: 'Review', description: 'Pages, URLs, content and what currently brings in traffic or enquiries.' },
          { title: 'New structure', description: 'What stays, what merges and what is rewritten, agreed before design.' },
          { title: 'Design', description: 'A new interface, approved before development.' },
          { title: 'Rebuild on a preview', description: 'The new site is built separately while the current one stays live.' },
          { title: 'Content and URL preservation', description: 'Existing content is migrated and every old URL is mapped to its new location with a redirect.' },
          { title: 'Launch checks', description: 'Redirects, forms, metadata, analytics and mobile layouts are tested before and after the switch.' },
        ],
        note: 'Redirects protect existing links and search visibility as far as a rebuild can. A redesign does not guarantee higher rankings.',
      },
    ],
    quote: {
      heading: 'Scope and quote',
      paragraphs: [
        'A redesign is quoted after the review, because the cost depends on the number of pages, how much content is rewritten and what is being migrated.',
        'For a startup marketing site, the Startup Growth Site package from $2,500 USD is the usual reference point. Indian businesses are quoted in INR.',
      ],
    },
    faqHeading: 'Website redesign: questions',
    faqs: [
      {
        question: 'Will a redesign hurt my existing Google rankings?',
        answer:
          'Handled carefully, it should not. We map every existing URL, set up redirects and carry across content and metadata. Any rebuild carries some risk, and we do not guarantee that rankings rise.',
      },
      {
        question: 'Can you keep my existing content and images?',
        answer:
          'Yes. Content can be migrated as it is, restructured or rewritten, whichever the scope says. Images are resized for speed either way.',
      },
      {
        question: 'Will my website be down during the redesign?',
        answer:
          'No. The new site is built on a separate preview and the switch happens only after you approve it.',
      },
      {
        question: 'How much does a website redesign cost?',
        answer:
          'It is quoted in writing after a review of the current site, based on the page count, content work and migration involved.',
      },
      SUPPORT_FAQ,
    ],
    meta: {
      title: 'Website Redesign Services | Web Total Solution',
      description:
        'Website redesign services: a review of your current site, new structure and design, and a rebuild with content and URLs preserved. Request a project quote.',
      keywords: [
        'website redesign services',
        'website revamp company',
        'redesign old website',
        'modern website rebuild',
        'website redesign India',
      ],
    },
  },

  /**
   * Long-standing e-commerce page. Shares its facts with the newer
   * /services/ecommerce-development page but answers different questions:
   * this one is about choosing and running a store, that one about the build.
   */
  'ecommerce-development': {
    slug: 'ecommerce-development',
    heroImage: HERO_IMAGES.commerce,
    serviceName: 'E-Commerce Development',
    projectType: 'E-Commerce Platform',
    label: 'Online stores',
    h1: 'E-commerce website development',
    lead: 'Online stores and product catalogues for businesses selling in India, with payments, shipping and catalogue management scoped before the build starts.',
    facts: [
      { label: 'Examples', value: 'Saanshika Ethnics, Rentzora' },
      { label: 'Pricing', value: 'Written quote after scope review' },
      { label: 'Accounts', value: 'Gateway and store in your name' },
      { label: 'Support', value: '30 days after launch' },
    ],
    evidence: {
      heading: 'Two stores that are live today',
      body: 'Saanshika Ethnics sells kurtis, suits and sarees online from Amritsar. Rentzora is a rental marketplace for bridal and fine jewellery listed by individual owners. They are different models, and each needed its own product and checkout logic.',
      portfolioIds: ['saanshikaethnics', 'rentzora'],
      note: 'We do not publish sales or conversion figures for client stores.',
    },
    intro: {
      heading: 'Store, catalogue or marketplace?',
      paragraphs: [
        'The first decision is the model, and it changes everything after it. A store takes payment online. A catalogue shows the range and takes enquiries, which suits trade and high-value products. A marketplace lists products from several sellers and needs rules for onboarding and payouts.',
        'We ask which one fits how you actually sell before recommending anything, because a checkout nobody uses is wasted budget.',
      ],
    },
    sections: [
      {
        heading: 'What has to be decided before the build',
        items: [
          { title: 'Catalogue', description: 'How many products, how they vary and who keeps them up to date.' },
          { title: 'Payments', description: 'Which gateway, which methods and whether cash on delivery is offered.' },
          { title: 'Shipping and returns', description: 'How rates are calculated and what the customer is told before paying.' },
          { title: 'Orders', description: 'Who sees a new order, how it is fulfilled and how stock is updated.' },
        ],
      },
      {
        heading: 'Related pages',
        items: [
          { title: 'How we build a store', description: 'Category, product, cart and checkout flows, in detail.', href: '/services/ecommerce-development' },
          { title: 'A catalogue with enquiries', description: 'The Mechverses case study: machinery listings with search and condition labels.', href: '/work/mechverses' },
        ],
      },
    ],
    quote: {
      heading: 'Scope and quote',
      paragraphs: [
        'Stores are quoted individually, after a scope review. The price depends on catalogue size, product types, payment and shipping integrations, and any migration from an existing store.',
        'Gateway fees, shipping accounts and platform subscriptions are paid to those providers and listed in the quote.',
      ],
    },
    faqHeading: 'E-commerce development: questions',
    faqs: [
      {
        question: 'How much does e-commerce website development cost?',
        answer:
          'It is quoted in writing after a scope review, based on the catalogue, integrations and design work involved. Stores cost more than a standard business website because there is more to build and test.',
      },
      {
        question: 'Which payment gateways can you integrate?',
        answer:
          'The gateway is chosen during the scope review, based on where you sell and the methods your customers use, and it is set up in your own account.',
      },
      {
        question: 'Can I manage products and orders myself?',
        answer:
          'Yes. Catalogue and order management is part of the scope, with a handover walkthrough so your team can run it.',
      },
      {
        question: 'Can you migrate my existing online store?',
        answer:
          'Where the scope includes it. Products, images and URLs are mapped across, with redirects so existing links keep working.',
      },
      SUPPORT_FAQ,
    ],
    meta: {
      title: 'E-Commerce Website Development | Web Total Solution',
      description:
        'E-commerce website development for stores, catalogues and marketplaces, with payments, shipping and catalogue management scoped before the build.',
      keywords: [
        'ecommerce website development',
        'online store development company',
        'ecommerce development India',
        'custom online store',
        'ecommerce website design',
      ],
    },
  },

  /**
   * Remote-served city pages. We have no office in Mumbai, Pune, Hyderabad or
   * Bengaluru and the copy says so; Noida is served from the Delhi office.
   * Each page is written around that market's typical sites and only shows
   * work that genuinely fits it. Do not claim a local address, a named local
   * client or in-person availability here unless the business supplies one.
   */
  'website-development-company-mumbai': {
    slug: 'website-development-company-mumbai',
    heroImage: HERO_IMAGES.work,
    serviceName: 'Website Development in Mumbai',
    projectType: 'Business Website',
    label: 'Mumbai',
    h1: 'Website development company for Mumbai businesses',
    lead: 'A founder-led studio with offices in Kolkata and Delhi, building websites for Mumbai firms remotely. Design and build are reviewed on shared previews, and the scope and price are written down before work starts.',
    facts: [
      { label: 'Studio', value: 'Offices in Kolkata and Delhi' },
      { label: 'Working with Mumbai', value: 'Remote: calls, WhatsApp and shared previews' },
      { label: 'Pricing', value: 'Written quote in INR after scope review' },
      { label: 'Support', value: '30 days after launch' },
    ],
    evidence: {
      heading: 'Work of the kind Mumbai businesses commission',
      body: 'Gromore Investment is an investment site organised around goals such as retirement and education. The Selvedge is a B2B showcase for a denim manufacturer working with brands on private labels and OEM production. Both are live, and the work page lists every client site with a link.',
      portfolioIds: ['groomore', 'theselvedge'],
    },
    intro: {
      heading: 'A website that holds up in a crowded market',
      paragraphs: [
        'Mumbai buyers compare quickly. Someone who finds a finance, legal, trading or design firm on their phone is judging whether it looks established, so the first screen has to say what you do and for whom, and the next one has to show it is real.',
        'We are not in Mumbai, and we do not pretend otherwise. Discovery is a call or a WhatsApp chat in your working hours, and every design and build is shared as a preview link you can open on the phone your customers use. Nobody needs to travel.',
      ],
    },
    sections: [
      {
        heading: 'What Mumbai businesses commonly ask for',
        items: [
          {
            title: 'Websites for professional and financial firms',
            description: 'Advisers, consultancies, law and accounting practices, where clear credentials and an obvious enquiry route matter more than effects.',
            href: '/business-website-development',
          },
          {
            title: 'Catalogues for traders, exporters and manufacturers',
            description: 'Product ranges with specifications and an enquiry on each item, for buyers who ask for a quote rather than pay by card.',
            href: '/work/mechverses',
          },
          {
            title: 'Online stores for brands selling direct',
            description: 'Category, product, cart and checkout with payment integration, for fashion, jewellery and lifestyle brands.',
            href: '/ecommerce-development',
          },
          {
            title: 'Redesigns of an ageing site',
            description: 'A new structure and design, with existing URLs mapped so search visibility is not thrown away.',
            href: '/website-redesign',
          },
        ],
      },
      {
        heading: 'Working with a studio in another city',
        intro: 'Most of a website project never needed a meeting room.',
        items: [
          { title: 'Calls in your hours', description: 'We are available Monday to Saturday, 10:00 AM to 7:00 PM IST.' },
          { title: 'Previews instead of site visits', description: 'You review pages on a live link, on your own devices, and send comments in one place.' },
          { title: 'Content agreed up front', description: 'The quote says who writes and supplies the copy, photos and logos, which is where most delays begin.' },
          { title: 'Accounts in your name', description: 'The domain, hosting and source code are registered to your business and handed over at launch.' },
        ],
      },
    ],
    groups: {
      heading: 'Parts of Mumbai we work with',
      intro: 'Remote delivery, so location does not limit who we can work with.',
      items: [
        {
          title: 'Mumbai',
          values: ['Andheri', 'Bandra', 'Bandra Kurla Complex', 'Lower Parel', 'Powai', 'Fort and Nariman Point', 'Borivali', 'Goregaon', 'Chembur', 'Worli'],
        },
        { title: 'Wider region', values: ['Navi Mumbai', 'Thane', 'Vashi'] },
      ],
    },
    quote: { heading: 'Website development cost in Mumbai', paragraphs: DOMESTIC_QUOTE },
    faqHeading: 'Website development for Mumbai businesses: questions',
    faqs: [
      {
        question: 'Do you have an office in Mumbai?',
        answer:
          'No. Our offices are in Garia, Kolkata and Rohini, Delhi. We work with Mumbai businesses remotely, using calls, WhatsApp and shared preview links.',
      },
      {
        question: 'How much does website development cost in Mumbai?',
        answer:
          'It depends on the pages, the level of custom design and the features. We do not publish a fixed rupee price list. After a scope review you receive a written quote in INR, so you know the full cost before work begins.',
      },
      {
        question: 'Can a studio outside Mumbai understand my market?',
        answer:
          'The brief comes from you, and the discovery call is where we test it: who the customer is, what they ask first and what they compare you with. We look at your competitors’ sites with you before design starts.',
      },
      {
        question: 'Can you redesign my existing website?',
        answer:
          'Yes. We keep the pages that earn traffic, map existing URLs to their new locations with redirects, and rebuild structure and design around what the business needs the site to do now.',
        link: { label: 'About website redesign', href: '/website-redesign' },
      },
      RANKING_FAQ,
      SUPPORT_FAQ,
    ],
    meta: {
      title: 'Website Development Company in Mumbai | Web Total Solution',
      description:
        'Website development for Mumbai businesses: business sites, catalogues, online stores and redesigns, built remotely with a written quote in INR. Request a project quote.',
      keywords: [
        'website development company in Mumbai',
        'web development company in Mumbai',
        'website design company in Mumbai',
        'website developer in Mumbai',
        'web design agency Mumbai',
        'website development cost in Mumbai',
      ],
    },
  },

  'website-development-company-pune': {
    slug: 'website-development-company-pune',
    heroImage: HERO_IMAGES.studio,
    serviceName: 'Website Development in Pune',
    projectType: 'Business Website',
    label: 'Pune',
    h1: 'Website development company for Pune businesses',
    lead: 'Websites for Pune manufacturers, IT firms, institutes and startups, built remotely by a founder-led studio in Kolkata and Delhi. You get the pages, features and price in writing first.',
    facts: [
      { label: 'Studio', value: 'Offices in Kolkata and Delhi' },
      { label: 'Working with Pune', value: 'Remote: calls, WhatsApp and shared previews' },
      { label: 'Pricing', value: 'Written quote in INR after scope review' },
      { label: 'Support', value: '30 days after launch' },
    ],
    evidence: {
      heading: 'Work of the kind Pune companies commission',
      body: 'Laiken Engineering Company is an industrial supplier site built around sending a specification and getting a written quote. Hindustan Flow Control is a commercial catalogue for industrial flow valves and piping systems. Both are live, and the work page lists every client site with a link.',
      portfolioIds: ['laikenengineering', 'hindustanflowcontrol'],
    },
    intro: {
      heading: 'For a city of engineers, institutes and exporters',
      paragraphs: [
        'Pune’s businesses are often technical and sell to people who check details. A component maker, a software services firm or a coaching institute is judged on how clearly the site explains what it does, with specifications, credentials or syllabus easy to find.',
        'We build for that reader. We work with Pune businesses from Kolkata and Delhi, over calls and shared previews, and the person who briefs us is the person leading the work.',
      ],
    },
    sections: [
      {
        heading: 'What Pune businesses ask us for',
        items: [
          {
            title: 'Specification-led catalogues for manufacturers',
            description: 'Searchable product ranges with technical details and an enquiry on each item, for buyers who need a datasheet and a quote.',
            href: '/work/mechverses',
          },
          {
            title: 'Websites for IT and services companies',
            description: 'Service pages, process and credentials, with a form that sends the enquiry to the right person.',
            href: '/business-website-development',
          },
          {
            title: 'Sites for institutes and training providers',
            description: 'Courses, fees, faculty and admissions enquiries, organised so a parent or student finds the answer quickly.',
            href: '/services/landing-pages',
          },
          {
            title: 'Products and web applications',
            description: 'Dashboards, portals and SaaS products, scoped separately from marketing websites.',
            href: '/services/saas-development',
          },
        ],
      },
      {
        heading: 'What we need from you to start',
        intro: 'A short brief is enough; the scope review fills in the rest.',
        items: [
          { title: 'Who the buyer is', description: 'An OEM purchaser, a parent, a founder or a procurement team each need a different first screen.' },
          { title: 'What you want them to do', description: 'Request a quote, book a demo, apply or call. One main action per page.' },
          { title: 'What you already have', description: 'Catalogues, brochures, photos and an existing site, which we reuse where they are good.' },
          { title: 'Who approves', description: 'One decision maker on your side keeps the schedule moving.' },
        ],
      },
    ],
    groups: {
      heading: 'Parts of Pune we work with',
      intro: 'Remote delivery, so any address works.',
      items: [
        {
          title: 'Pune',
          values: ['Kothrud', 'Baner', 'Aundh', 'Hinjewadi', 'Wakad', 'Kharadi', 'Viman Nagar', 'Hadapsar', 'Shivajinagar', 'Pimpri-Chinchwad', 'Chakan'],
        },
      ],
    },
    quote: { heading: 'Website development cost in Pune', paragraphs: DOMESTIC_QUOTE },
    faqHeading: 'Website development for Pune businesses: questions',
    faqs: [
      {
        question: 'Do you have an office in Pune?',
        answer:
          'No. Our offices are in Garia, Kolkata and Rohini, Delhi. We work with Pune businesses remotely, over calls, WhatsApp and shared preview links.',
      },
      {
        question: 'How much does website development cost in Pune?',
        answer:
          'It depends on the pages, the custom design and the features. We do not publish a fixed rupee price list. After a scope review you receive a written quote in INR listing what is included.',
      },
      {
        question: 'I manufacture components. Do I need an online store?',
        answer:
          'Usually not. Industrial buyers want to check a specification and request a price, so a catalogue with categories, technical details and an enquiry on each product suits better than a retail checkout.',
      },
      {
        question: 'Can you build a product for my startup, not only a website?',
        answer:
          'Yes. Web applications and SaaS products are scoped separately after discovery, from the flows, roles and integrations they need. A marketing site can be built first so the product has somewhere to launch.',
        link: { label: 'SaaS development', href: '/services/saas-development' },
      },
      RANKING_FAQ,
      SUPPORT_FAQ,
    ],
    meta: {
      title: 'Website Development Company in Pune | Web Total Solution',
      description:
        'Website development for Pune manufacturers, IT firms, institutes and startups: business sites, catalogues and web apps with a written quote in INR. Request a quote.',
      keywords: [
        'website development company in Pune',
        'web development company in Pune',
        'website design company in Pune',
        'website developer in Pune',
        'web design agency Pune',
        'website development cost in Pune',
      ],
    },
  },

  'website-development-company-hyderabad': {
    slug: 'website-development-company-hyderabad',
    heroImage: HERO_IMAGES.work,
    serviceName: 'Website Development in Hyderabad',
    projectType: 'Business Website',
    label: 'Hyderabad',
    h1: 'Website development company for Hyderabad businesses',
    lead: 'Websites for Hyderabad’s pharma, healthcare, IT and property businesses, built remotely by a founder-led studio in Kolkata and Delhi, with a written scope and quote before work begins.',
    facts: [
      { label: 'Studio', value: 'Offices in Kolkata and Delhi' },
      { label: 'Working with Hyderabad', value: 'Remote: calls, WhatsApp and shared previews' },
      { label: 'Pricing', value: 'Written quote in INR after scope review' },
      { label: 'Support', value: '30 days after launch' },
    ],
    evidence: {
      heading: 'A pharma website we built',
      body: 'Medara Labs is a pharmaceutical marketing and distribution company. Its website is organised around the product range, filtered by what each product treats, with quality standards on a page of their own. It is the closest example to what a Hyderabad life-sciences company would need, and the case study explains the decisions.',
      study: 'medara-labs',
    },
    intro: {
      heading: 'For pharma, healthcare and technology companies',
      paragraphs: [
        'Hyderabad’s businesses range from pharmaceutical manufacturers and distributors to hospitals, software companies and property developers. In several of those, the website is read by someone cautious: a distributor checking credentials, a patient checking a clinic, a buyer checking a builder.',
        'So the content has to be exact before it is attractive. We plan the pages and the claims with you, write nothing the business cannot stand behind and build for a quick, clear read on a phone. We do this remotely from Kolkata and Delhi.',
      ],
    },
    sections: [
      {
        heading: 'What Hyderabad businesses ask us for',
        items: [
          {
            title: 'Pharma and healthcare websites',
            description: 'Product ranges, quality and certification pages and a clear enquiry route for distributors and partners.',
            href: '/work/medara-labs',
          },
          {
            title: 'Websites for IT and consulting firms',
            description: 'Services, delivery approach and credentials written for the buyer’s evaluation, not for show.',
            href: '/business-website-development',
          },
          {
            title: 'Real estate and property sites',
            description: 'Listings and project pages with enquiry forms. Our South Delhi Flats & Floors site is an example of the format.',
            href: '/work',
          },
          {
            title: 'Redesigns',
            description: 'A new structure and design for a dated site, with existing URLs mapped so search traffic carries across.',
            href: '/website-redesign',
          },
        ],
      },
      {
        heading: 'How we handle regulated or sensitive content',
        intro: 'Some industries cannot say whatever marketing would like.',
        items: [
          { title: 'You supply the claims', description: 'Product, treatment and certification statements come from you. We structure and present them, and do not invent them.' },
          { title: 'Approval before publishing', description: 'Content is signed off on a preview link before it goes live.' },
          { title: 'Plain language', description: 'Pages are written so a distributor, patient or buyer finds the answer without decoding jargon.' },
          { title: 'Enquiries you can act on', description: 'Forms capture what you need to reply, and you choose where they are delivered.' },
        ],
      },
    ],
    groups: {
      heading: 'Parts of Hyderabad we work with',
      intro: 'Remote delivery, so any address works.',
      items: [
        {
          title: 'Hyderabad',
          values: ['HITEC City', 'Gachibowli', 'Madhapur', 'Kondapur', 'Banjara Hills', 'Jubilee Hills', 'Begumpet', 'Secunderabad', 'Kukatpally', 'Uppal'],
        },
      ],
    },
    quote: { heading: 'Website development cost in Hyderabad', paragraphs: DOMESTIC_QUOTE },
    faqHeading: 'Website development for Hyderabad businesses: questions',
    faqs: [
      {
        question: 'Do you have an office in Hyderabad?',
        answer:
          'No. Our offices are in Garia, Kolkata and Rohini, Delhi. We work with Hyderabad businesses remotely, over calls, WhatsApp and shared preview links.',
      },
      {
        question: 'How much does website development cost in Hyderabad?',
        answer:
          'It depends on the number of pages, the custom design and the features. We do not publish a fixed rupee price list. After a scope review you receive a written quote in INR, so you know the full cost before work begins.',
      },
      {
        question: 'Have you built a website for a pharmaceutical company?',
        answer:
          'Yes. Medara Labs, a pharmaceutical marketing and distribution company, is live and has a case study on this site. It is built around the product range and quality standards.',
        link: { label: 'Read the Medara Labs case study', href: '/work/medara-labs' },
      },
      {
        question: 'Can you build a website for a hospital or clinic?',
        answer:
          'Yes. We have built a site for a wellness clinic covering its services and workshops. Medical and treatment claims on a site come from the practice and are approved by you before publishing.',
        link: { label: 'See our selected work', href: '/work' },
      },
      RANKING_FAQ,
      SUPPORT_FAQ,
    ],
    meta: {
      title: 'Website Development Company in Hyderabad | Web Total Solution',
      description:
        'Website development for Hyderabad pharma, healthcare, IT and property businesses, built remotely with a written quote in INR. See our pharma case study and request a quote.',
      keywords: [
        'website development company in Hyderabad',
        'web development company in Hyderabad',
        'website design company in Hyderabad',
        'website developer in Hyderabad',
        'web design agency Hyderabad',
        'website development cost in Hyderabad',
      ],
    },
  },

  'website-development-company-bengaluru': {
    slug: 'website-development-company-bengaluru',
    heroImage: HERO_IMAGES.work,
    serviceName: 'Website Development in Bengaluru',
    projectType: 'Startup Marketing Website',
    label: 'Bengaluru',
    h1: 'Website development company for Bengaluru startups and businesses',
    lead: 'Marketing websites, landing pages and product interfaces for Bengaluru (Bangalore) startups and growing companies, designed and built by a founder-led studio working remotely from Kolkata and Delhi.',
    facts: [
      { label: 'Studio', value: 'Offices in Kolkata and Delhi' },
      { label: 'Working with Bengaluru', value: 'Remote: calls, WhatsApp and shared previews' },
      { label: 'Startup packages', value: 'Published USD starting prices' },
      { label: 'Support', value: '30 days after launch' },
    ],
    evidence: {
      heading: 'A product we designed and built ourselves',
      body: 'WTS CRM is our own subscription product, a CRM whose dashboard opens on what is due today rather than on totals. The case study walks through its dashboard, lead and quotation flows, which is the kind of product work founders ask us about.',
      study: 'wts-crm',
    },
    intro: {
      heading: 'For founders who need to launch and then keep shipping',
      paragraphs: [
        'A startup usually needs two things at once: a marketing site that explains the product to a buyer or investor in under a minute, and a product interface that does not look like a different company built it. We design and build both, so the website and the product feel like one thing.',
        'The studio is founder-led, so the person you brief is the person leading the work. We are in Kolkata and Delhi and work with Bengaluru teams remotely, over calls and shared previews.',
      ],
    },
    sections: [
      {
        heading: 'What Bengaluru teams ask us for',
        items: [
          {
            title: 'Startup marketing websites',
            description: 'A clear story, a pricing or demo route and a fast, mobile-first build, scoped under our published startup packages.',
            href: '/pricing',
          },
          {
            title: 'Landing pages for a launch or a campaign',
            description: 'One page for one audience, offer and action, with forms and analytics in place.',
            href: '/services/landing-pages',
          },
          {
            title: 'SaaS products and dashboards',
            description: 'Accounts, roles, dashboards and billing flows, quoted after discovery.',
            href: '/services/saas-development',
          },
          {
            title: 'Next.js builds',
            description: 'The framework this site and WTS CRM run on, with the repository and hosting created in your accounts.',
            href: '/nextjs-development-company-india',
          },
        ],
      },
      {
        heading: 'How a startup project differs from a local business project',
        items: [
          { title: 'Messaging before pixels', description: 'We settle who the site is for and what it must make them do before design starts.' },
          { title: 'Built to be changed', description: 'Typed code in standard tools and handover notes, so your own engineers can take over later.' },
          { title: 'Product and site in step', description: 'Shared type and components mean a signed-in screen does not feel foreign to the marketing site.' },
          { title: 'Your accounts from day one', description: 'The repository, hosting and database are created in your name, not ours.' },
        ],
      },
    ],
    groups: {
      heading: 'Parts of Bengaluru we work with',
      intro: 'Remote delivery, so any address works.',
      items: [
        {
          title: 'Bengaluru',
          values: ['Koramangala', 'Indiranagar', 'HSR Layout', 'Whitefield', 'Bellandur', 'Marathahalli', 'Electronic City', 'Jayanagar', 'MG Road', 'Hebbal'],
        },
      ],
    },
    quote: {
      heading: 'Website development cost in Bengaluru',
      paragraphs: [
        'Our published starting prices for startup websites are in USD, on the pricing page, so you can compare packages before talking to anyone. A starting price covers a defined scope; features, integrations and content work above it are quoted in writing.',
        'If you would rather have an INR quote, say so in the enquiry and we will provide one after a scope review. Product and SaaS builds are scoped after discovery.',
      ],
    },
    faqHeading: 'Website development for Bengaluru startups: questions',
    faqs: [
      {
        question: 'Do you have an office in Bengaluru?',
        answer:
          'No. Our offices are in Garia, Kolkata and Rohini, Delhi. We work with Bengaluru teams remotely, over calls, WhatsApp and shared preview links.',
      },
      {
        question: 'How much does a startup website cost?',
        answer:
          'Our published starting prices for startup website packages are in USD, from $1,200, with the inclusions listed on the pricing page. What moves a quote above the starting price is stated for each package. You can ask for an INR quote if you prefer.',
        link: { label: 'See the packages', href: '/pricing' },
      },
      {
        question: 'Can you build the product as well as the marketing site?',
        answer:
          'Yes. Web applications and SaaS products are scoped separately after discovery. We run WTS CRM, our own subscription product, so we know what building and operating one involves.',
        link: { label: 'Read the WTS CRM case study', href: '/work/wts-crm' },
      },
      {
        question: 'Will my engineers be able to take the code over?',
        answer:
          'That is the aim. We use React and TypeScript, create the repository and hosting in your accounts and write handover notes on running, deploying and updating the project.',
      },
      RANKING_FAQ,
      SUPPORT_FAQ,
    ],
    meta: {
      title: 'Website Development Company in Bengaluru | Web Total Solution',
      description:
        'Website development for Bengaluru (Bangalore) startups and businesses: marketing sites, landing pages and SaaS interfaces, with published startup packages. Request a quote.',
      keywords: [
        'website development company in Bengaluru',
        'website development company in Bangalore',
        'web development company in Bangalore',
        'startup website development Bangalore',
        'website design company in Bangalore',
        'website developer in Bangalore',
      ],
    },
  },

  'website-development-company-noida': {
    slug: 'website-development-company-noida',
    heroImage: HERO_IMAGES.studio,
    serviceName: 'Website Development in Noida',
    projectType: 'Business Website',
    label: 'Noida',
    h1: 'Website development company for Noida businesses',
    lead: 'Websites, catalogues and online stores for Noida and Greater Noida businesses, from our Delhi office in Rohini and over shared previews. The pages, features, timeline and price are agreed in writing.',
    facts: [
      { label: 'Nearest office', value: 'Rohini Sector 19, Delhi 110042' },
      { label: 'Working with Noida', value: 'Calls, WhatsApp and shared previews' },
      { label: 'Pricing', value: 'Written quote in INR after scope review' },
      { label: 'Support', value: '30 days after launch' },
    ],
    evidence: {
      heading: 'Delhi NCR sites we built',
      body: 'Omoora Art & Design Studio is a Gurugram art academy whose site covers its classes and takes demo bookings. Kavita Kabira Wellness Clinic is a calm site for a Gurgaon psychologist, in person and online. Both are live, and the work page lists every client site with a link.',
      portfolioIds: ['omoora', 'kavitakabira'],
    },
    intro: {
      heading: 'Web design and development for Noida and Greater Noida',
      paragraphs: [
        'Noida’s businesses are varied: software and BPO firms, electronics and other manufacturers, media houses, coaching institutes and property developers. They share one problem, which is that a competitor is a short drive away and a buyer will compare both websites before calling either.',
        'Our Delhi office is in Rohini, and we serve the wider NCR from it. Most of a project runs over call, WhatsApp and shared previews; if you would prefer to meet, message us to arrange a time.',
      ],
    },
    sections: [
      {
        heading: 'What Noida businesses ask us for',
        items: [
          {
            title: 'Websites for service and IT firms',
            description: 'Service pages, delivery approach and credentials, with an enquiry route that reaches the right person.',
            href: '/business-website-development',
          },
          {
            title: 'Catalogues for manufacturers and exporters',
            description: 'Product ranges with specifications and an enquiry on each, for buyers who request a quote.',
            href: '/work/mechverses',
          },
          {
            title: 'Online stores',
            description: 'Stores with online payment for brands selling direct.',
            href: '/ecommerce-development',
          },
          {
            title: 'Institute and training sites',
            description: 'Courses, fees, batches and admissions enquiries, organised for a student or parent on a phone.',
            href: '/services/landing-pages',
          },
        ],
      },
      {
        heading: 'Before you sign with any web company in Noida',
        intro: 'Five questions to put to every quote, including ours.',
        items: [
          { title: 'Is the design custom or a template?', description: 'Both are legitimate, but they are different amounts of work and different prices.' },
          { title: 'Who owns the domain and code?', description: 'They should be registered to your business, not held in the agency’s account.' },
          { title: 'What is in scope?', description: 'A page count, a feature list and who supplies the content.' },
          { title: 'What search setup is done?', description: 'Metadata, sitemap and Search Console at minimum.' },
          { title: 'How long does support last?', description: 'And what it covers. Ours is 30 days of fixes, small content changes and technical help.' },
        ],
      },
    ],
    groups: {
      heading: 'Parts of Noida and nearby areas we work with',
      intro: 'Served from our Delhi office and over shared previews.',
      items: [
        {
          title: 'Noida',
          values: ['Sector 62', 'Sector 18', 'Sector 63', 'Sector 125', 'Sector 135', 'Sector 16 Film City', 'Noida Expressway', 'Noida Extension'],
        },
        { title: 'Nearby', values: ['Greater Noida', 'Ghaziabad', 'Indirapuram'] },
      ],
    },
    quote: { heading: 'Website development cost in Noida', paragraphs: DOMESTIC_QUOTE },
    faqHeading: 'Website development in Noida: questions',
    faqs: [
      {
        question: 'Do you have an office in Noida?',
        answer:
          'No. Our Delhi office is at Dhani Ram Colony, Shiv Chowk, Rohini Sector 19, North West Delhi 110042, and we also have an office in Garia, Kolkata. We work with Noida businesses over call, WhatsApp and shared previews.',
      },
      {
        question: 'How much does website development cost in Noida?',
        answer:
          'It depends on the pages, the custom design and the features. We do not publish a fixed rupee price list. After a scope review you receive a written quote in INR listing everything included, and the figure does not change unless the scope does.',
      },
      {
        question: 'I run a manufacturing or export business. Do I need an online store?',
        answer:
          'Usually not. A product catalogue with categories, specifications and an enquiry or WhatsApp button on each product suits trading and manufacturing businesses better than a retail checkout.',
      },
      {
        question: 'Can you redesign my existing website?',
        answer:
          'Yes. We keep the pages that earn traffic, map the old URLs to the new ones with redirects, and rebuild the structure and design around what the business needs the site to do now.',
        link: { label: 'About website redesign', href: '/website-redesign' },
      },
      RANKING_FAQ,
      SUPPORT_FAQ,
    ],
    meta: {
      title: 'Website Development Company in Noida | Web Total Solution',
      description:
        'Website development for Noida and Greater Noida businesses: business sites, catalogues and online stores with a written quote in INR. Request a project quote.',
      keywords: [
        'website development company in Noida',
        'web development company in Noida',
        'website design company in Noida',
        'website developer in Noida',
        'web design agency Noida',
        'website development cost in Noida',
      ],
    },
  },
};

export const LANDING_PAGE_SLUGS = Object.keys(LANDING_PAGES);
