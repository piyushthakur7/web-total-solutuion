import { PortfolioItem } from './types';

/**
 * ⚠️ SEED DATA ONLY — NOT RENDERED BY THE SITE.
 *
 * The live portfolio is served from the InsForge `portfolio_projects` table via
 * `src/utils/insforge/portfolio.ts`. This array is the original content that was
 * migrated into that table and is kept solely as the input for
 * `npm run seed:portfolio` (see scripts/seed-portfolio.ts).
 *
 * To add, edit or remove portfolio work, change the database — editing this
 * array has no effect on what visitors see.
 */
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'arommaalfresco',
    title: 'Aromma Alfresco Events',
    category: 'Corporate',
    description: 'An elegant digital presence for premium event management and catering services, highlighting immersive outdoor experiences and beautiful venue spaces.',
    highlight: 'Elegant Experience',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.arommaalfresco.com&screenshot=true&embed=screenshot.url',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    websiteUrl: 'https://www.arommaalfresco.com/',
  },
  {
    id: 'mechverses',
    title: 'Mechverses',
    category: 'Corporate',
    description: 'High-performance engineering portal specializing in immersive 3D simulations, structural analysis, and bespoke mechanical solutions.',
    highlight: 'Immersive 3D Experience',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.mechverses.in&screenshot=true&embed=screenshot.url',
    techStack: ['React', 'Three.js', 'Tailwind CSS', 'Framer Motion'],
    websiteUrl: 'https://www.mechverses.in',
  },
  {
    id: 'srimahalingeshwaraalayamutrust',
    title: 'Sri Mahalingeshwara Alayamu Trust',
    category: 'Corporate',
    description: 'A dignified community portal and secure donation management framework supporting historic temple preservation and local charitable initiatives.',
    highlight: 'Meaningful Connection',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.srimahlingeshwaraalayamutrust.com&screenshot=true&embed=screenshot.url',
    techStack: ['Vite', 'React', 'Tailwind CSS', 'Secure Payments'],
    websiteUrl: 'https://www.srimahlingeshwaraalayamutrust.com',
  },
  {
    id: 'jhorley',
    title: 'J. Horley Portfolio',
    category: 'Landing Page',
    description: 'A pristine, minimalist design showcase and digital creative portfolio featuring fluid layout mechanics and beautiful premium typography.',
    highlight: 'Pristine Aesthetics',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.jhorley.com%2F&screenshot=true&embed=screenshot.url',
    techStack: ['React', 'Vite', 'Motion', 'Tailwind CSS'],
    websiteUrl: 'https://www.jhorley.com/',
  },
  {
    id: 'sproutslegal',
    title: 'Sprouts Legal',
    category: 'Corporate',
    description: 'An approachable, streamlined legal consultation portal designed to simplify corporate structuring, client onboarding, and digital appointment booking.',
    highlight: 'Trust & Clarity',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.sproutslegal.com%2F&screenshot=true&embed=screenshot.url',
    techStack: ['Vite', 'React', 'Tailwind CSS', 'SEO Optimization'],
    websiteUrl: 'https://www.sproutslegal.com/',
  },
  {
    id: 'fawdubai',
    title: 'FAW Dubai',
    category: 'E-Commerce',
    description: 'Automotive commerce solutions, spare parts cataloguing, and premium dealership services portal optimized for the Middle Eastern marketplace.',
    highlight: 'Smooth Navigation',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.fawdubai.com%2F&screenshot=true&embed=screenshot.url',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Responsive Grid'],
    websiteUrl: 'https://www.fawdubai.com/',
  },

  {
    id: 'bmscrubber',
    title: 'BM Scrubber',
    category: 'Corporate',
    description: 'An industrial cleaning machinery and heavy-duty automatic floor scrubber equipment B2B showcase built for high-performance product sourcing.',
    highlight: 'Corporate Authority',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.bmscrubber.com%2F&screenshot=true&embed=screenshot.url',
    techStack: ['React', 'Tailwind CSS', 'Product Catalog'],
    websiteUrl: 'https://www.bmscrubber.com/',
  },
  {
    id: 'medaralabs',
    title: 'Medara Labs',
    category: 'Corporate',
    description: 'Modern bio-tech and clinical diagnostics research portal enabling secure medical reports access and clear, structured patient resources.',
    highlight: 'Reliable Infrastructure',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.medaralabs.com%2F&screenshot=true&embed=screenshot.url',
    techStack: ['Vite', 'React', 'Tailwind CSS', 'API Integration'],
    websiteUrl: 'https://www.medaralabs.com/',
  },
  {
    id: 'fairmountphotography',
    title: 'Fairmount Photography',
    category: 'Landing Page',
    description: 'A visual-first, high-performance portfolio engineered for a premium wedding and commercial photography studio, featuring responsive galleries.',
    highlight: 'Visual Brilliance',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.fairmountphotographys.com%2F&screenshot=true&embed=screenshot.url',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Image Optimization'],
    websiteUrl: 'https://www.fairmountphotographys.com/',
  },

  {
    id: 'bonnyvelvet',
    title: 'Bonny Velvet Textiles',
    category: 'E-Commerce',
    description: 'A sensory-rich e-commerce experience for luxury velvet fabrics and curated designer apparel collections, featuring rich product layouts.',
    highlight: 'Sensory Design',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.bonnyvelvet.com%2F&screenshot=true&embed=screenshot.url',
    techStack: ['Vite', 'React', 'Tailwind CSS', 'Secure Checkout'],
    websiteUrl: 'https://www.bonnyvelvet.com/',
  },
  {
    id: 'modernoffset',
    title: 'Modern Offset Printers',
    category: 'Corporate',
    description: 'A state-of-the-art print and publishing portal designed for high-volume commercial printing orders, quote calculation, and file submission.',
    highlight: 'Streamlined Ordering',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.modernoffset.com%2F&screenshot=true&embed=screenshot.url',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Order Management'],
    websiteUrl: 'https://www.modernoffset.com/',
  },
  {
    id: 'skyfaboverseas',
    title: 'Skyfab Overseas Worldwide',
    category: 'Corporate',
    description: 'International textile exporting distribution network portal facilitating bulk supply chain communication and global custom fabrics sourcing.',
    highlight: 'Global Reach',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.skyfaboverseasworldwide.com%2F&screenshot=true&embed=screenshot.url',
    techStack: ['Vite', 'React', 'Tailwind CSS', 'Global SEO'],
    websiteUrl: 'https://www.skyfaboverseasworldwide.com/',
  },
  {
    id: 'hindustanflowcontrol',
    title: 'Hindustan Flow Control',
    category: 'Corporate',
    description: 'B2B commercial catalog and specification tracker for premium industrial flow valves and mechanical piping systems distribution.',
    highlight: 'Technical Precision',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.hindustanflowcontrol.com%2F&screenshot=true&embed=screenshot.url',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Spec Catalog'],
    websiteUrl: 'https://www.hindustanflowcontrol.com/',
  },
  {
    id: 'fihmonline',
    title: 'FIHM Online Hospitality',
    category: 'SaaS',
    description: 'A state-of-the-art learning management hub and vocational training academy curriculum portal for elite hotel and hospitality studies.',
    highlight: 'Intuitive Flow',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.fihmonline.com%2F&screenshot=true&embed=screenshot.url',
    techStack: ['React', 'Tailwind CSS', 'LMS Navigation', 'Vite'],
    websiteUrl: 'https://www.fihmonline.com/',
  },
  {
    id: 'nexa-crm',
    title: 'Nexa Enterprise SaaS',
    category: 'SaaS',
    description: 'A robust multi-tenant customer relationship platform built on React, Node.js, and PostgreSQL. Tailored for enterprise teams with complex reporting tools.',
    highlight: 'Dynamic Energy',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjKTXS0cB8XWOSdJ6YxiP-hlMr6NnJo-wQGJ9EpAMrrUo1oy95yW1ZPvQZhb_nvapfej8S9s1WAmK8XMUPAXuisiiW-fxNGPtBKPpgQrNvpajih93sS1EbE5SOG5hyomJIZj-lRXFpSEqQg-0vrbtMqovxLVCCFqnt2VGQre2lIXstt3Lt9_1OGeBKhp_CI8ooh2r_qFXJkeXenWsf6CmaEDfw-0D0njMab6yP3J920Bd5cvs6284rRqElezwKeBT_31HDop2QD68',
    techStack: ['React', 'Express', 'Tailwind', 'PostgreSQL'],
  },
  {
    id: 'quantum-ecommerce',
    title: 'Quantum Headless Checkout',
    category: 'E-Commerce',
    description: 'A lightning-fast, high-converting checkout experience integrated with Stripe. Handles dynamic tax calculation and instant mobile pay.',
    highlight: 'Seamless Shopping',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6q9xi8S_kkVSHtPGphrN_161Y-Sz6drSn5H76-zkg8YsTcjfMTKgKaDz9H1elj7OFTmuQixqrMcn5FjcImjfXErCgRneDxXsR6Cy9XY1VusSPszHdNO2XXE-MlIt2B6ZYT6KFikBOOKaBFq4fs_pb_DXo6My-yLjcylYDGFsz8Fd0t0o84KqNJ0Vme9fMY_JZThlEo6lGC_XHkRGzAQW5ciDy5flJst0nVGJIg4HJRWENCp3apYkCOieXlk7Z8nG2QtKdDkdBz4g',
    techStack: ['Vite', 'Stripe API', 'GraphQL', 'Tailwind CSS'],
  },
  {
    id: 'acme-corp-site',
    title: 'ACME Corporate Platform',
    category: 'Corporate',
    description: 'A bespoke marketing platform featuring advanced content management integration, optimal search engine structure, and internationalization support.',
    highlight: 'Performance First',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD81TKGkMosvx34Z-jZE3PqQCWQteA-8q5DTnF-AJsoiNJphdOllXFQFgwR2jdDRe_gn7c3Y9OzbO1b7gjwRwnqiMnkVzv9r0B0fXtrCh7S7UU9A42lyXphKTf9CH4I5X7312Z7oFEkG5JLnrGU8cUgA9idKllyXG3NolRUj6JKXbqsxOomy7yp6p_Q6xKcrUPxlvH5NN611w09KywC9KB3CWpI2u3Lc3-zqr491yuGwYlkeEHpcJ54p36At1W0uGIZYVZIgUM8znM',
    techStack: ['React', 'Headless CMS', 'Vite', 'Tailwind'],
  },
  {
    id: 'vertex-lander',
    title: 'Vertex Analytics Dashboard',
    category: 'Landing Page',
    description: 'A custom, interactive landing page engineered strictly for performance, using visual charts and clean telemetry data to drive software subscriptions.',
    highlight: 'Clean Telemetry',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2qJ_r16K7-NLk-Z1-MimQ5n_YZLq9We_retGapH3bx4dfHkNgzMVFFoJ-9LZ4nSABl2HP0Cot2BWudtgrYfEDuZ2UOIprLiRK3tZVdFY_urOCak2F6sm5ROjfmspQCk0ZdMIpU4ZwvTQ1aigl_cMSRgHLviVGbiLC-Xx2ey9H12UfM85X1O_v1joUdbWz8aEbXdSVlZZVqIXYtOWBtYr-R2ejAd0j_UH4Xfd40IqZREiqei5ScMl5DKwO2jfK5Zn4O2iwGuyStHA',
    techStack: ['Vite', 'D3.js', 'Motion', 'Tailwind CSS'],
  },
];

/**
 * Service copy is written around business outcomes, not technology.
 * The tech stack is still listed, but it appears as supporting proof at the end
 * of the page rather than as the pitch.
 */
export const SERVICES_DATA: Record<string, import('./types').ServiceData> = {
  'landing-pages': {
    slug: 'landing-pages',
    title: 'Landing & Informative Pages',
    subtitle: 'Single Pages Built to Turn Clicks Into Enquiries',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    content: {
      overview: 'A landing page has one job: convince the right visitor to contact you. We design focused, fast-loading pages that present your offer clearly, answer the objections that stop people from enquiring, and put the next step in front of them at exactly the right moment — so the money you spend on ads or SEO actually returns customers.',
      whyChooseUs: 'We start with your customer, not a template. That means understanding who is landing on the page, what they are worried about, and what will make them act. The result is a page that looks premium, loads quickly on mobile data, and is structured so every section moves the visitor closer to picking up the phone. You get clear communication throughout, an agreed delivery date, and a team that is still available after launch.',
      features: [
        'Conversion-focused page structure',
        'Mobile-first responsive design',
        'Built-in SEO and schema markup',
        'Fast load times on mobile data',
        'Enquiry form and WhatsApp integration',
        'Analytics configured from day one',
      ],
      techStack: ['React', 'Next.js', 'Tailwind CSS', 'HTML5', 'JavaScript']
    }
  },
  'saas-development': {
    slug: 'saas-development',
    title: 'Custom Web Applications & SaaS',
    subtitle: 'Software That Removes the Bottleneck in Your Business',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    content: {
      overview: 'When spreadsheets, WhatsApp groups and manual follow-ups start costing you time and orders, custom software pays for itself. We build secure web applications and SaaS platforms that automate the work your team repeats every day — customer portals, booking systems, internal dashboards and subscription products that grow with your business instead of holding it back.',
      whyChooseUs: 'We build to be extended. Adding a new feature six months from now should take days, not a rebuild — so we write clean, well-documented, modular code and hand you full ownership of it. You get an agile process with regular working demos, so you see progress instead of waiting months for a reveal, and post-launch support while your team settles in.',
      features: [
        'Custom workflows built to your process',
        'Secure user accounts and permissions',
        'Reporting and analytics dashboards',
        'Third-party and payment integrations',
        'Built to scale as usage grows',
        'Full source code ownership',
      ],
      techStack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'AWS']
    }
  },
  'content-writing': {
    slug: 'content-writing',
    title: 'Content Writing & SEO Copy',
    subtitle: 'Words That Rank on Google and Persuade Customers',
    heroImage: 'https://images.unsplash.com/photo-1455390582262-044cdead27d8?q=80&w=2346&auto=format&fit=crop',
    content: {
      overview: 'A beautiful website with weak copy still loses the sale. We write content that does two jobs at once: it helps search engines understand what your business offers, and it convinces the person reading it that you are the right choice. Clear, credible, specific — written for the customer you actually want, not for a word count.',
      whyChooseUs: 'We research your industry and your competitors before writing a line, so the content speaks the language your customers use when they search. Everything is structured for readability, optimised around real search intent, and edited to reflect the way your business wants to be seen. You review and approve before anything goes live.',
      features: [
        'SEO-optimised website copy',
        'Service and product page content',
        'Blog articles that target real searches',
        'Clear, credible brand messaging',
        'Keyword and competitor research',
        'Editing and proofreading included',
      ],
      techStack: ['Keyword Research', 'Search Intent Mapping', 'On-Page SEO', 'Editorial Review']
    }
  },
  'ecommerce-development': {
    slug: 'ecommerce-development',
    title: 'E-Commerce Development',
    subtitle: 'Online Stores Built to Sell, Not Just Display',
    heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2370&auto=format&fit=crop',
    content: {
      overview: 'Most online stores lose customers somewhere between the product page and the payment screen. We build stores that close that gap — fast product pages, obvious pricing and delivery information, trusted payment options, and a checkout short enough that people finish it. Whether you sell ten products or ten thousand, the store stays quick and easy to manage.',
      whyChooseUs: 'We handle the full lifecycle: design, product setup, payment and shipping integration, migration from your existing platform, and the launch itself. Your team gets an admin dashboard they can actually use, a walkthrough at handover, and support afterwards. Rankings and existing customer data are carried across carefully so nothing is lost in the move.',
      features: [
        'Secure payment gateway integration',
        'Checkout designed to reduce drop-off',
        'Mobile-first product browsing',
        'Inventory and order management',
        'Product schema for search visibility',
        'Migration from your existing store',
      ],
      techStack: ['React', 'Next.js', 'Razorpay', 'Stripe API', 'Shopify', 'Node.js']
    }
  },
  'app-development': {
    slug: 'app-development',
    title: 'Android & iOS Apps',
    subtitle: 'Put Your Business in Your Customer\'s Pocket',
    heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2340&auto=format&fit=crop',
    content: {
      overview: 'A mobile app earns its place when it makes something meaningfully easier for your customers — reordering, booking, tracking, loyalty. We build apps for Android and iOS that feel fast and natural to use, keep your business one tap away, and give you a direct channel to customers that does not depend on an algorithm.',
      whyChooseUs: 'We build once for both platforms where it makes sense, which means a faster launch and a lower total cost without compromising on how the app feels. We handle design, development, store submission and the updates afterwards, so you are not left managing app store requirements on your own.',
      features: [
        'Android and iOS from one build',
        'Interfaces designed for real use',
        'Push notifications and re-engagement',
        'Integration with your existing systems',
        'App Store and Play Store submission',
        'Ongoing updates and maintenance',
      ],
      techStack: ['React Native', 'Flutter', 'Firebase', 'Node.js', 'REST APIs']
    }
  },
  'digital-marketing': {
    slug: 'digital-marketing',
    title: 'Digital Marketing & SEO',
    subtitle: 'Bring the Right Customers to Your Website',
    heroImage: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2340&auto=format&fit=crop',
    content: {
      overview: 'A professional website only pays back when the right people find it. We build search visibility and run paid campaigns that target customers with genuine buying intent — the ones already searching for what you sell. The measure of success is enquiries and orders, not impressions.',
      whyChooseUs: 'We do not just spend your budget and send a traffic report. We track which keywords and campaigns actually produce enquiries, cut what does not work, and reinvest in what does. You get plain-language reporting that shows what you spent, what came back, and what we are changing next month.',
      features: [
        'Search engine optimisation (SEO)',
        'Google Ads campaign management',
        'Local SEO and Google Business Profile',
        'Conversion rate optimisation',
        'Social media campaign management',
        'Transparent monthly reporting',
      ],
      techStack: ['Google Analytics', 'Google Ads', 'Search Console', 'Meta Ads', 'SEMrush']
    }
  }
};
