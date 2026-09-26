import { PortfolioItem } from './types';

/**
 * The portfolio, as bundled with the site.
 *
 * Normally the live portfolio is served from the InsForge `portfolio_projects`
 * table via `src/utils/insforge/portfolio.ts`, and this array is the seed input
 * for `npm run seed:portfolio` (see scripts/seed-portfolio.ts).
 *
 * It is ALSO the offline fallback: if the backend is unreachable or returns no
 * published rows, the site renders this list instead of an empty page. Every
 * screenshot is committed to `public/portfolio/`, so the portfolio keeps
 * working with no backend at all.
 *
 * Every entry below is a real, live client site. Do not add speculative or
 * example work here — it is customer-facing.
 *
 * When you add work in the admin, add it here too (or re-export) so the
 * fallback stays in step.
 */
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'atozfacility',
    title: 'AtoZ Facility Management',
    category: 'Corporate',
    description: 'Hospital staffing and manpower services site for a Barnala, Punjab firm supplying verified nursing, ward, housekeeping and security staff to hospitals and institutions since 2010.',
    highlight: 'Trust-First Staffing',
    imageUrl: '/portfolio/atozfacility.webp',
    techStack: ['Next.js', 'React', 'Lead Capture', 'Local SEO'],
    websiteUrl: 'https://www.atozfacility.com/',
  },
  {
    id: 'jfmgroup',
    title: 'JFM Group',
    category: 'Corporate',
    description: 'Security and facility management company site for a Kolkata group offering guards, housekeeping, manpower, nursing and sanitation services across West Bengal since 2008.',
    highlight: 'Services Under One Roof',
    imageUrl: '/portfolio/jfmgroup.webp',
    techStack: ['Next.js', 'React', 'Quote Requests', 'Local SEO'],
    websiteUrl: 'https://jfmgroup.in/',
  },
  {
    id: 'kavitakabira',
    title: 'Kavita Kabira Wellness Clinic',
    category: 'Corporate',
    description: 'A calm, editorial site for a Gurgaon psychologist offering psychotherapy, counselling, wellness coaching and transformational workshops, in person and online.',
    highlight: 'Warm & Reassuring',
    imageUrl: '/portfolio/kavitakabira.webp',
    techStack: ['Next.js', 'React', 'Appointment Booking', 'SEO Optimization'],
    websiteUrl: 'https://www.kavitakabira.com/',
  },
  {
    id: 'rentzora',
    title: 'Rentzora',
    category: 'E-Commerce',
    description: 'An online rental marketplace for bridal, temple and fine jewellery from verified owners across India, with video-confirmed condition, refundable deposits and insured delivery.',
    highlight: 'Rental Marketplace',
    imageUrl: '/portfolio/rentzora.webp',
    techStack: ['Next.js', 'React', 'Marketplace Listings', 'Owner Onboarding'],
    websiteUrl: 'https://www.rentzora.in/',
  },
  {
    id: 'mastermocks',
    title: 'Master Mocks',
    category: 'SaaS',
    description: 'A performance-based mock test platform for Banking and Insurance exams, with exam-level mocks, detailed solutions and cashback rewards for top performers.',
    highlight: 'Rewarded Practice',
    imageUrl: '/portfolio/mastermocks.webp',
    techStack: ['Next.js', 'React', 'Razorpay', 'Mock Test Engine'],
    websiteUrl: 'https://www.mastermocks.in/',
  },
  {
    id: 'omoora',
    title: 'Omoora Art & Design Studio',
    category: 'Corporate',
    description: 'Site for a Gurugram art academy running since 2010, covering art classes for kids and adults, mandala art, a fine-arts diploma, energy healing and tarot guidance.',
    highlight: 'A Creative Awakening',
    imageUrl: '/portfolio/omoora.webp',
    techStack: ['Next.js', 'React', 'Demo Booking', 'Local SEO'],
    websiteUrl: 'https://www.omoora.in/',
  },
  {
    id: 'theselvedge',
    title: 'The Selvedge',
    category: 'Corporate',
    description: 'A premium B2B denim manufacturing showcase for private labelling, OEM production and bespoke made-to-measure denim for global brands.',
    highlight: 'Crafted Denim',
    imageUrl: '/portfolio/theselvedge.webp',
    techStack: ['Next.js', 'React', 'B2B Enquiries', 'Product Showcase'],
    websiteUrl: 'https://www.theselvedge.co.in/',
  },
  {
    id: 'groomore',
    title: 'Gromore Investment',
    category: 'Corporate',
    description: 'A goal-first investment site helping families across India plan for retirement, education and long-term goals with written, goal-linked investment schemes.',
    highlight: 'Goal-Led Clarity',
    imageUrl: '/portfolio/groomore.webp',
    techStack: ['Next.js', 'React', 'Consultation Booking', 'SEO Optimization'],
    websiteUrl: 'https://www.groomore.in/',
  },
  {
    id: 'laikenengineering',
    title: 'Laiken Engineering Company',
    category: 'Corporate',
    description: 'Industrial component supplier site for motion cables, drag chains, Siemens PLCs and Siemens and Yaskawa AC drives, built around sending a specification and getting a written quote.',
    highlight: 'Spec-to-Quote Flow',
    imageUrl: '/portfolio/laikenengineering.webp',
    techStack: ['Next.js', 'React', 'Product Catalog', 'Quote Requests'],
    websiteUrl: 'https://laikenengineering.com/',
  },
  {
    id: 'saanshikaethnics',
    title: 'Saanshika Ethnics',
    category: 'E-Commerce',
    description: 'An online store for kurtis, co-ord sets, suits, sarees and dupattas in block prints, chanderi and handloom cotton, made and dispatched from Amritsar.',
    highlight: 'Festive Storefront',
    imageUrl: '/portfolio/saanshikaethnics.webp',
    techStack: ['Next.js', 'React', 'Online Store', 'Wishlist & Cart'],
    websiteUrl: 'https://www.saanshikaethnics.com/',
  },
  {
    id: 'mechverses',
    title: 'Mechverses',
    category: 'Corporate',
    description: 'High-performance engineering portal specializing in immersive 3D simulations, structural analysis, and bespoke mechanical solutions.',
    highlight: 'Immersive 3D Experience',
    imageUrl: '/portfolio/mechverses.webp',
    techStack: ['React', 'Three.js', 'Tailwind CSS', 'Framer Motion'],
    websiteUrl: 'https://www.mechverses.in',
  },
  {
    id: 'arommaalfresco',
    title: 'Aromma Alfresco Events',
    category: 'Corporate',
    description: 'An elegant digital presence for premium event management and catering services, highlighting immersive outdoor experiences and beautiful venue spaces.',
    highlight: 'Elegant Experience',
    imageUrl: '/portfolio/arommaalfresco.webp',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    websiteUrl: 'https://www.arommaalfresco.com/',
  },
  {
    id: 'srimahalingeshwaraalayamutrust',
    title: 'Sri Mahalingeshwara Alayamu Trust',
    category: 'Corporate',
    description: 'A dignified community portal and secure donation management framework supporting historic temple preservation and local charitable initiatives.',
    highlight: 'Meaningful Connection',
    imageUrl: '/portfolio/srimahalingeshwaraalayamutrust.webp',
    techStack: ['Vite', 'React', 'Tailwind CSS', 'Secure Payments'],
    websiteUrl: 'https://www.srimahlingeshwaraalayamutrust.com',
  },
  {
    id: 'jhorley',
    title: 'J. Horley Portfolio',
    category: 'Landing Page',
    description: 'A pristine, minimalist design showcase and digital creative portfolio featuring fluid layout mechanics and beautiful premium typography.',
    highlight: 'Pristine Aesthetics',
    imageUrl: '/portfolio/jhorley.webp',
    techStack: ['React', 'Vite', 'Motion', 'Tailwind CSS'],
    websiteUrl: 'https://www.jhorley.com/',
  },
  {
    id: 'sproutslegal',
    title: 'Sprouts Legal',
    category: 'Corporate',
    description: 'An approachable, streamlined legal consultation portal designed to simplify corporate structuring, client onboarding, and digital appointment booking.',
    highlight: 'Trust & Clarity',
    imageUrl: '/portfolio/sproutslegal.webp',
    techStack: ['Vite', 'React', 'Tailwind CSS', 'SEO Optimization'],
    websiteUrl: 'https://www.sproutslegal.com/',
  },
  {
    id: 'fawdubai',
    title: 'FAW Dubai',
    category: 'E-Commerce',
    description: 'Automotive commerce solutions, spare parts cataloguing, and premium dealership services portal optimized for the Middle Eastern marketplace.',
    highlight: 'Smooth Navigation',
    imageUrl: '/portfolio/fawdubai.webp',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Responsive Grid'],
    websiteUrl: 'https://www.fawdubai.com/',
  },
  {
    id: 'kashmirsinthantop',
    title: 'Kashmir Sinthan Top Tour & Travel',
    category: 'Corporate',
    description: 'A fast, lightweight site for a government-registered Kashmir tour operator in Daksum, covering Sinthan Top, Dal Lake, Pahalgam, Gulmarg, Sonamarg and Gurez Valley itineraries.',
    highlight: 'Local & Fast',
    imageUrl: '/portfolio/kashmirsinthantop.webp',
    techStack: ['HTML5', 'CSS3', 'WhatsApp Booking', 'Performance Optimization'],
    websiteUrl: 'https://www.kashmirsinthantoptourandtravels.com/',
  },
  {
    id: 'bmscrubber',
    title: 'BM Scrubber',
    category: 'Corporate',
    description: 'An industrial cleaning machinery and heavy-duty automatic floor scrubber equipment B2B showcase built for high-performance product sourcing.',
    highlight: 'Corporate Authority',
    imageUrl: '/portfolio/bmscrubber.webp',
    techStack: ['React', 'Tailwind CSS', 'Product Catalog'],
    websiteUrl: 'https://www.bmscrubber.com/',
  },
  {
    id: 'medaralabs',
    title: 'Medara Labs',
    category: 'Corporate',
    description: 'Modern bio-tech and clinical diagnostics research portal enabling secure medical reports access and clear, structured patient resources.',
    highlight: 'Reliable Infrastructure',
    imageUrl: '/portfolio/medaralabs.webp',
    techStack: ['Vite', 'React', 'Tailwind CSS', 'API Integration'],
    websiteUrl: 'https://www.medaralabs.com/',
  },
  {
    id: 'fairmountphotography',
    title: 'Fairmount Photography',
    category: 'Landing Page',
    description: 'A visual-first, high-performance portfolio engineered for a premium wedding and commercial photography studio, featuring responsive galleries.',
    highlight: 'Visual Brilliance',
    imageUrl: '/portfolio/fairmountphotography.webp',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Image Optimization'],
    websiteUrl: 'https://www.fairmountphotographys.com/',
  },
  {
    id: 'modernoffset',
    title: 'Modern Offset Printers',
    category: 'Corporate',
    description: 'A state-of-the-art print and publishing portal designed for high-volume commercial printing orders, quote calculation, and file submission.',
    highlight: 'Streamlined Ordering',
    imageUrl: '/portfolio/modernoffset.webp',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Order Management'],
    websiteUrl: 'https://www.modernoffset.com/',
  },
  {
    id: 'skyfaboverseas',
    title: 'Skyfab Overseas Worldwide',
    category: 'Corporate',
    description: 'International textile exporting distribution network portal facilitating bulk supply chain communication and global custom fabrics sourcing.',
    highlight: 'Global Reach',
    imageUrl: '/portfolio/skyfaboverseas.webp',
    techStack: ['Vite', 'React', 'Tailwind CSS', 'Global SEO'],
    websiteUrl: 'https://www.skyfaboverseasworldwide.com/',
  },
  {
    id: 'hindustanflowcontrol',
    title: 'Hindustan Flow Control',
    category: 'Corporate',
    description: 'B2B commercial catalog and specification tracker for premium industrial flow valves and mechanical piping systems distribution.',
    highlight: 'Technical Precision',
    imageUrl: '/portfolio/hindustanflowcontrol.webp',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Spec Catalog'],
    websiteUrl: 'https://www.hindustanflowcontrol.com/',
  },
  {
    id: 'fihmonline',
    title: 'FIHM Online Hospitality',
    category: 'SaaS',
    description: 'A state-of-the-art learning management hub and vocational training academy curriculum portal for elite hotel and hospitality studies.',
    highlight: 'Intuitive Flow',
    imageUrl: '/portfolio/fihmonline.webp',
    techStack: ['React', 'Tailwind CSS', 'LMS Navigation', 'Vite'],
    websiteUrl: 'https://www.fihmonline.com/',
  },
  {
    id: 'spellzee',
    title: 'Spellzee',
    category: 'Corporate',
    description: 'Site for an IITM-incubated phonics and language learning platform running live classes that build reading, writing and speaking skills for children aged 4 to 14.',
    highlight: 'Playful Learning',
    imageUrl: '/portfolio/spellzee.webp',
    techStack: ['WordPress', 'Elementor', 'Demo Booking', 'SEO Optimization'],
    websiteUrl: 'https://spellzee.in/',
  },
  {
    id: 'adarshgyanniketan',
    title: 'Adarsh Gyan Niketan',
    category: 'Corporate',
    description: 'A school website for a co-educational primary and middle school in Shahpur, Bhojpur, Bihar, running since 1998, covering academics, admissions, faculty, facilities and gallery.',
    highlight: 'Admissions Open',
    imageUrl: '/portfolio/adarshgyanniketan.webp',
    techStack: ['Next.js', 'React', 'Admissions Enquiries', 'Local SEO'],
    websiteUrl: 'https://www.adarshgyanniketan.com/',
  },
  {
    id: 'southdelhiflats',
    title: 'South Delhi Flats & Floors',
    category: 'Corporate',
    description: 'A luxury real estate site for builder floors, apartments and independent houses in Defence Colony, Greater Kailash, Panchsheel Park and other prime South Delhi neighbourhoods.',
    highlight: 'Luxury Listings',
    imageUrl: '/portfolio/southdelhiflats.webp',
    techStack: ['Vite', 'React', 'Property Listings', 'Local SEO'],
    websiteUrl: 'https://www.southdelhiflats.com/',
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
