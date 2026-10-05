/**
 * Service detail pages rendered by <ServiceDetailView /> at /services/[slug].
 *
 * Each page follows the same order — evidence, fit, deliverables, scope, FAQ —
 * but the content is written per service. Evidence must be real: a case study
 * from src/work.ts, a live client site from the portfolio, or an honest
 * statement that there is nothing public to show yet. Never fill the gap with
 * stock imagery or invented results.
 */

import { Faq, SUPPORT_DETAIL } from './siteContent';
import { ProjectType } from './lead';
import { HERO_IMAGES } from './stockImages';

export interface ServiceEvidence {
  heading: string;
  body: string;
  /** Slug of a case study in src/work.ts. */
  study?: string;
  /** Ids of live client sites in the portfolio. */
  portfolioIds?: string[];
  /** Annotated decisions visible in the evidence. */
  points?: { title: string; text: string }[];
  /** Shown when the evidence needs qualifying. */
  note?: string;
}

export interface ServiceData {
  slug: string;
  /** Page H1 and Service schema name. */
  title: string;
  /** Short name used in navigation and enquiry context. */
  shortName: string;
  /** Marks services outside the studio's main offer. */
  secondary: boolean;
  lead: string;
  metaDescription: string;
  projectType: ProjectType;
  /** Hero backdrop. */
  heroImage: { src: string; alt: string };
  /** Package slug this service maps to, when one applies. */
  package?: string;
  evidence: ServiceEvidence;
  fit: { heading: string; items: string[] };
  deliverables: { heading: string; items: { title: string; description: string }[] };
  scope: { heading: string; paragraphs: string[] };
  faqs: Faq[];
}

export const SERVICES_DATA: Record<string, ServiceData> = {
  'landing-pages': {
    slug: 'landing-pages',
    title: 'Landing page design and development',
    shortName: 'Landing pages',
    secondary: false,
    lead: 'One page for one audience, one offer and one action: a demo request, a trial sign-up or a waitlist place. We work out the message first, then design and build the page around it.',
    metaDescription:
      'Landing page strategy, design and Next.js development for startups. One audience, one offer, one action. Landing Page Sprint from $1,200 USD.',
    projectType: 'Landing Page',
    heroImage: HERO_IMAGES.planning,
    package: 'landing-page-sprint',
    evidence: {
      heading: 'A page we built to do this job',
      body: 'The wtscrm.com home page is a landing page for our own product. It has to tell a small-business owner what the CRM does and get them to start a trial, so it is a fair example of how we structure one.',
      study: 'wts-crm',
      points: [
        {
          title: 'The headline is the outcome',
          text: '“Never lose a lead again” names the result the visitor wants. The sentence under it says how, in the order the product works.',
        },
        {
          title: 'One primary action, repeated',
          text: '“Start free trial” appears in the navigation and under the headline. The secondary action is for people who already have an account.',
        },
        {
          title: 'The objection is answered next to the button',
          text: 'Trial length, “no card required” and the starting plan price sit directly under the action, where the hesitation happens.',
        },
        {
          title: 'The product is shown, not described',
          text: 'A preview of the dashboard follows the headline, so the claim is checked against the interface straight away.',
        },
      ],
    },
    fit: {
      heading: 'When a landing page is the right project',
      items: [
        'You are launching a product or feature and need one place to send people',
        'You are running a campaign and the home page says too many things',
        'You want to test an offer or collect a waitlist before building more',
        'You have a page already, and visitors read it without acting',
      ],
    },
    deliverables: {
      heading: 'What you receive',
      items: [
        {
          title: 'Message hierarchy',
          description: 'Audience, offer, the objections to answer and the order to answer them in, agreed before design.',
        },
        {
          title: 'Wireframe',
          description: 'The page structure section by section, so you approve what it says before how it looks.',
        },
        {
          title: 'Designed page',
          description: 'A custom interface on desktop and mobile, approved before development.',
        },
        {
          title: 'Built and connected',
          description: 'A responsive Next.js page with its form, basic on-page SEO and analytics set up.',
        },
      ],
    },
    scope: {
      heading: 'Scope and quote',
      paragraphs: [
        'The Landing Page Sprint starts at $1,200 USD for one page with two revision rounds. Copywriting, extra pages, custom illustration and integrations beyond a form are quoted as additions.',
        'The timeline is agreed after the scope review. It mostly depends on how quickly the message and content are settled.',
      ],
    },
    faqs: [
      {
        question: 'Do you write the copy?',
        answer:
          'We structure the message and can edit copy you supply. Full copywriting can be added to the scope and is quoted as its own line.',
      },
      {
        question: 'Can the page connect to our CRM or email tool?',
        answer:
          'Usually, yes. Tell us which tool you use and the integration is scoped and listed in the quote. Subscription fees for the tool itself are paid to its provider.',
      },
      {
        question: 'Will a landing page improve our conversion rate?',
        answer:
          'A clearer page gives visitors a better chance of acting, but the result also depends on the offer, the traffic and the price. We do not promise a conversion figure. Analytics are set up so you can measure what happens.',
      },
      { question: 'What support is included?', answer: SUPPORT_DETAIL },
    ],
  },

  'saas-development': {
    slug: 'saas-development',
    title: 'Product interfaces and web applications',
    shortName: 'Product UI and web apps',
    secondary: false,
    lead: 'Design and engineering for SaaS products, dashboards and customer portals. This is application work and is scoped separately from a marketing website.',
    metaDescription:
      'Product UX, interface design and Next.js engineering for SaaS products, dashboards and portals, from the studio that builds and runs WTS CRM.',
    projectType: 'SaaS / Web Application',
    heroImage: HERO_IMAGES.code,
    evidence: {
      heading: 'We build and run a SaaS product ourselves',
      body: 'WTS CRM is our own subscription product: a CRM for Indian service businesses that follows an enquiry to a paid invoice. We scoped it, designed its interface, engineered it and keep it running. The case study explains the interface decisions.',
      study: 'wts-crm',
      points: [
        {
          title: 'Scope held to one workflow',
          text: 'Lead, follow-up, quotation, project, invoice, payment. Features outside that path were left out of the first version.',
        },
        {
          title: 'Roles and permissions',
          text: 'Owner, admin and member roles with record assignment, with workspace data separated at the database level.',
        },
        {
          title: 'Plans and trial',
          text: 'Tiered subscription plans with a free trial, and features tied to the selected plan.',
        },
      ],
      note: 'WTS CRM is our own product, not a client commission. We do not publish its user or revenue figures.',
    },
    fit: {
      heading: 'Projects this suits',
      items: [
        'A first version of a SaaS product with a defined core workflow',
        'A dashboard or portal that replaces spreadsheets and manual follow-ups',
        'An existing product whose interface needs redesigning screen by screen',
        'A marketing site and product that should feel like one thing',
      ],
    },
    deliverables: {
      heading: 'How a product project is structured',
      items: [
        {
          title: 'Discovery',
          description: 'Users, roles, the core workflow and what the first version leaves out. Ends in a written scope.',
        },
        {
          title: 'UX and data model',
          description: 'Screen flows and the data they depend on, agreed before visual design, because these are the hardest things to change later.',
        },
        {
          title: 'Interface design',
          description: 'Designed screens for the agreed flows, including empty, loading and error states.',
        },
        {
          title: 'Engineering',
          description: 'Next.js and React on a Postgres backend, with authentication, roles and the integrations in the scope.',
        },
        {
          title: 'Testing and handover',
          description: 'Working previews during the build, testing against the agreed flows, then deployment, documentation and code handover.',
        },
      ],
    },
    scope: {
      heading: 'Scope and quote',
      paragraphs: [
        'Application work is not covered by the website packages. The Custom Product Website, from $5,000 USD, is a product marketing website and does not include a production application.',
        'A product is quoted after discovery, from the list of flows, roles and integrations. The quote states what the first version includes and what is deferred.',
      ],
    },
    faqs: [
      {
        question: 'Can you build our marketing site and the product together?',
        answer:
          'Yes, but they are scoped as two pieces of work with their own deliverables, so the website is not held up by the application.',
      },
      {
        question: 'Which technologies do you use?',
        answer:
          'Next.js, React and TypeScript on a Postgres backend. That is what our own product and this website run on. Anything else is discussed during discovery.',
      },
      {
        question: 'Who owns the code?',
        answer:
          'You do. The repository, hosting and database are set up in your accounts and handed over with documentation.',
      },
      {
        question: 'Do you take on existing codebases?',
        answer:
          'Sometimes. We review the code first and tell you whether we are the right fit before quoting.',
      },
    ],
  },

  'content-writing': {
    slug: 'content-writing',
    title: 'Website copy and content writing',
    shortName: 'Content writing',
    secondary: true,
    lead: 'Messaging and page copy for websites we design and build, and editing for copy you already have. Offered as a defined addition to a website project.',
    metaDescription:
      'Website messaging, page copy, editing and search-focused articles, offered alongside website projects by Web Total Solution.',
    projectType: 'Content Writing',
    heroImage: HERO_IMAGES.planning,
    evidence: {
      heading: 'What our writing looks like',
      body: 'The copy on this website, including the case studies, is written in the studio. The case studies are the clearest sample: each one states what the business does, what was built and why, without unsupported claims.',
      study: 'medara-labs',
      note: 'We do not currently publish client copywriting samples. If you need to see more before deciding, ask and we will write a short sample section for your own page.',
    },
    fit: {
      heading: 'When to add writing to a project',
      items: [
        'The product is easier to demonstrate than to explain, and the page has to explain it',
        'Existing copy is accurate but long, internal or hard to scan',
        'Several people have written different pages and the voice does not match',
        'You want articles that answer the questions customers actually ask',
      ],
    },
    deliverables: {
      heading: 'Writing outputs',
      items: [
        {
          title: 'Messaging',
          description: 'Who the site is for, what it must say first and the claims it can support. One page, agreed before any copy is written.',
        },
        {
          title: 'Page copy',
          description: 'Headlines, body copy, calls to action and microcopy for the agreed pages, written into the wireframe.',
        },
        {
          title: 'Editing',
          description: 'Tightening and restructuring copy you supply, keeping your facts and terminology.',
        },
        {
          title: 'Search-focused articles, where scoped',
          description: 'Articles planned around specific questions, written to be useful first. No keyword stuffing.',
        },
        {
          title: 'Approval',
          description: 'You review and approve every page before it is published. Facts and figures come from you and are not invented.',
        },
      ],
    },
    scope: {
      heading: 'Scope and quote',
      paragraphs: [
        'Writing is quoted by the page or article and listed as its own line in the website quote. It is not automatically included in a package.',
        'Search rankings depend on competition and many factors outside the copy, so we do not promise positions.',
      ],
    },
    faqs: [
      {
        question: 'Can you write for a technical product?',
        answer:
          'Yes, with your input. We interview the person who knows the product and you check every technical statement before it is published.',
      },
      {
        question: 'Do you offer writing without a website project?',
        answer:
          'Occasionally, for editing or a small set of pages. Tell us what you need and we will say whether it is a fit.',
      },
      {
        question: 'How many revisions are included?',
        answer: 'Revision rounds for copy are stated in the quote, alongside the pages covered.',
      },
    ],
  },

  'ecommerce-development': {
    slug: 'ecommerce-development',
    title: 'E-commerce website development',
    shortName: 'E-commerce',
    secondary: true,
    lead: 'Online stores designed around the path from category to product to cart to checkout, with the catalogue, payment and shipping setup scoped up front.',
    metaDescription:
      'Online store design and development: category, product, cart and checkout flows, payment integration and catalogue management, scoped and quoted per project.',
    projectType: 'E-Commerce Platform',
    heroImage: HERO_IMAGES.commerce,
    evidence: {
      heading: 'Stores we have built',
      body: 'Two live examples. Saanshika Ethnics is an online clothing store with category browsing, wishlist and cart. Rentzora is a rental marketplace for jewellery with listings from individual owners. Open either on your phone and go through the browsing flow.',
      portfolioIds: ['saanshikaethnics', 'rentzora'],
      note: 'We do not publish sales or conversion figures for client stores.',
    },
    fit: {
      heading: 'Projects this suits',
      items: [
        'A brand selling its own products directly for the first time',
        'A catalogue business where buyers enquire instead of paying online',
        'A store on a generic theme that no longer fits the product range',
        'A marketplace or rental model that a standard store template does not cover',
      ],
    },
    deliverables: {
      heading: 'The flows we design and build',
      items: [
        {
          title: 'Category and search',
          description: 'How shoppers narrow the range: categories, filters and sorting that match how the products differ.',
        },
        {
          title: 'Product page',
          description: 'Images, variants, price, delivery and returns information, placed where the buying decision is made.',
        },
        {
          title: 'Cart and checkout',
          description: 'A short path from cart to payment, with costs shown before the final step.',
        },
        {
          title: 'Payments and shipping',
          description: 'Integration with the payment gateway and shipping method you choose, set up in your own accounts.',
        },
        {
          title: 'Catalogue management',
          description: 'A way for your team to add products, change prices and stock, and see orders, with a handover walkthrough.',
        },
      ],
    },
    scope: {
      heading: 'Scope and quote',
      paragraphs: [
        'Stores are quoted individually. The quote depends on catalogue size, the number of product types, the payment and shipping integrations and whether existing products and URLs need migrating.',
        'Gateway fees, shipping accounts and platform subscriptions are paid to those providers and listed in the quote.',
      ],
    },
    faqs: [
      {
        question: 'Which platform do you build stores on?',
        answer:
          'It depends on the catalogue and how you want to manage it. We recommend an approach during the scope review and explain the trade-offs, including running costs.',
      },
      {
        question: 'Can you move an existing store?',
        answer:
          'Yes, where the scope includes it: products, images and URLs are mapped across and redirects are set up so existing links keep working.',
      },
      {
        question: 'We sell to businesses and do not take payment online. Is that still e-commerce?',
        answer:
          'That is a catalogue with enquiries, and it is often the better fit for trade and industrial products. The Mechverses case study shows one.',
        link: { label: 'Read the Mechverses case study', href: '/work/mechverses' },
      },
      { question: 'What support is included?', answer: SUPPORT_DETAIL },
    ],
  },

  'app-development': {
    slug: 'app-development',
    title: 'Mobile app discovery and development',
    shortName: 'App development',
    secondary: true,
    lead: 'We take on mobile app projects selectively, starting with a discovery phase to decide whether a native app, or a responsive web app, is the right thing to build.',
    metaDescription:
      'Mobile app discovery, scoping and development from Web Total Solution, including an honest assessment of whether a responsive web app would serve you better.',
    projectType: 'Mobile App',
    heroImage: HERO_IMAGES.code,
    evidence: {
      heading: 'What we can show',
      body: 'Our published work is web-based: websites and a web application. We do not have a public mobile app case study to show you, and we would rather say so than imply otherwise. The closest evidence of product work is WTS CRM, a web application we designed, built and run.',
      study: 'wts-crm',
      note: 'If you need a studio with a long list of App Store releases, we are probably not the right choice. If you need the product thinking done properly first, we may be.',
    },
    fit: {
      heading: 'Where we are a reasonable fit',
      items: [
        'You are not yet sure the product needs to be a native app',
        'The app is a companion to a web product or an existing system',
        'You want the first version scoped tightly before committing a large budget',
      ],
    },
    deliverables: {
      heading: 'How an app project starts',
      items: [
        {
          title: 'Discovery',
          description: 'Users, the core task, what needs the phone’s hardware and what does not. Ends with a recommendation: native, cross-platform or responsive web app.',
        },
        {
          title: 'Scope and platforms',
          description: 'The screens and flows in the first version, which platforms it targets and what is deferred, in writing.',
        },
        {
          title: 'Design',
          description: 'Interface design for the agreed flows, approved before development.',
        },
        {
          title: 'Development and release',
          description: 'Build, testing on real devices and store submission, as defined in the scope.',
        },
      ],
    },
    scope: {
      heading: 'Scope and quote',
      paragraphs: [
        'App projects are quoted after discovery, never from a package price. The platforms supported and the approach are confirmed in that scope.',
        'Store developer accounts and any third-party services are registered in your name and paid to those providers.',
      ],
    },
    faqs: [
      {
        question: 'Do we need an app, or would a website do?',
        answer:
          'Often a responsive web app does the job at lower cost and without store approval. An app earns its place when it needs offline use, notifications or device features. Discovery answers this for your case.',
      },
      {
        question: 'Do you build for both Android and iOS?',
        answer:
          'The platforms are decided in discovery and written into the scope. We will tell you plainly if a project is outside what we can deliver well.',
      },
      {
        question: 'Who owns the app and the store listing?',
        answer: 'You do. The code, the developer accounts and the store listings are in your name.',
      },
    ],
  },

  'digital-marketing': {
    slug: 'digital-marketing',
    title: 'SEO and digital marketing',
    shortName: 'Digital marketing',
    secondary: true,
    lead: 'Search and campaign work for websites we have built: technical SEO, local search setup and paid campaign management, with plain reporting. A defined secondary service, not a growth guarantee.',
    metaDescription:
      'Technical SEO, local search setup, campaign management and plain monthly reporting from Web Total Solution, offered for websites we build.',
    projectType: 'Digital Marketing & SEO',
    heroImage: HERO_IMAGES.work,
    evidence: {
      heading: 'What we can show',
      body: 'We do not publish traffic, ranking or revenue figures for client campaigns, so there is no results chart on this page. What you can check is the technical foundation: this website and the sites on our work page are built with the metadata, sitemaps and structured data described below.',
      note: 'If a client agrees to share measured results, they will be published here with the period and the source.',
    },
    fit: {
      heading: 'When it is worth adding',
      items: [
        'A new website needs its search setup done properly at launch',
        'A local business wants its Google Business Profile and site to agree',
        'You are about to spend on ads and want the landing pages and tracking in place first',
      ],
    },
    deliverables: {
      heading: 'What the service covers',
      items: [
        {
          title: 'Technical SEO',
          description: 'Metadata, heading structure, sitemap, canonical URLs, structured data and Search Console setup.',
        },
        {
          title: 'Local search',
          description: 'Google Business Profile setup and consistent name, address and phone details across the site.',
        },
        {
          title: 'Campaign management, where scoped',
          description: 'Google Ads or Meta campaigns run from your own ad accounts, with landing pages matched to each campaign.',
        },
        {
          title: 'Reporting',
          description: 'A monthly summary in plain language: what was spent, what was measured and what changes next.',
        },
      ],
    },
    scope: {
      heading: 'Scope and quote',
      paragraphs: [
        'Technical SEO setup is part of every website we build. Ongoing SEO and campaign management are separate monthly engagements, quoted after we know the market and the budget.',
        'Ad spend is paid directly to the platform from your account. We do not guarantee rankings, traffic or revenue.',
      ],
    },
    faqs: [
      {
        question: 'Can you guarantee first-page rankings?',
        answer:
          'No, and nobody honestly can. Rankings depend on competition, content and factors outside anyone’s control. We can make sure the site is technically sound and measured.',
      },
      {
        question: 'Do you work on websites you did not build?',
        answer:
          'Sometimes, after a review of the site. If the foundation needs rebuilding first, we will say so.',
      },
      {
        question: 'Who owns the ad accounts and data?',
        answer: 'You do. Campaigns run in your accounts, and you keep access and history if we stop working together.',
      },
    ],
  },
};
