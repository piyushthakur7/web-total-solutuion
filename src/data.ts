import { PortfolioItem } from './types';

export const CLIENT_LOGOS = [
  { name: 'ACME Corp', icon: 'corporate_fare' },
  { name: 'Nexa', icon: 'hexagon' },
  { name: 'Quantum Solutions', icon: 'insights' },
  { name: 'Vertex', icon: 'circle' },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'arommaalfresco',
    title: 'Aromma Alfresco Events',
    category: 'Corporate',
    description: 'An elegant digital presence for premium event management and catering services, highlighting immersive outdoor experiences and beautiful venue spaces.',
    metrics: { label: 'Client Inquiries', value: '+45%' },
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.arommaalfresco.com&screenshot=true&embed=screenshot.url',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    websiteUrl: 'https://www.arommaalfresco.com/',
  },
  {
    id: 'mechverses',
    title: 'Mechverses',
    category: 'Corporate',
    description: 'High-performance engineering portal specializing in immersive 3D simulations, structural analysis, and bespoke mechanical solutions.',
    metrics: { label: 'Interactive Dwell Time', value: '+54%' },
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.mechverses.in&screenshot=true&embed=screenshot.url',
    techStack: ['React', 'Three.js', 'Tailwind CSS', 'Framer Motion'],
    websiteUrl: 'https://www.mechverses.in',
  },
  {
    id: 'srimahalingeshwaraalayamutrust',
    title: 'Sri Mahalingeshwara Alayamu Trust',
    category: 'Corporate',
    description: 'A dignified community portal and secure donation management framework supporting historic temple preservation and local charitable initiatives.',
    metrics: { label: 'Outreach & Contributions', value: '+145%' },
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.srimahlingeshwaraalayamutrust.com&screenshot=true&embed=screenshot.url',
    techStack: ['Vite', 'React', 'Tailwind CSS', 'Secure Payments'],
    websiteUrl: 'https://www.srimahlingeshwaraalayamutrust.com',
  },
  {
    id: 'jhorley',
    title: 'J. Horley Portfolio',
    category: 'Landing Page',
    description: 'A pristine, minimalist design showcase and digital creative portfolio featuring fluid layout mechanics and beautiful premium typography.',
    metrics: { label: 'Consultation Inquiries', value: '+38%' },
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.jhorley.com%2F&screenshot=true&embed=screenshot.url',
    techStack: ['React', 'Vite', 'Motion', 'Tailwind CSS'],
    websiteUrl: 'https://www.jhorley.com/',
  },
  {
    id: 'sproutslegal',
    title: 'Sprouts Legal',
    category: 'Corporate',
    description: 'An approachable, streamlined legal consultation portal designed to simplify corporate structuring, client onboarding, and digital appointment booking.',
    metrics: { label: 'Onboarding Overhead', value: '-42%' },
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.sproutslegal.com%2F&screenshot=true&embed=screenshot.url',
    techStack: ['Vite', 'React', 'Tailwind CSS', 'SEO Optimization'],
    websiteUrl: 'https://www.sproutslegal.com/',
  },
  {
    id: 'fawdubai',
    title: 'FAW Dubai',
    category: 'E-Commerce',
    description: 'Automotive commerce solutions, spare parts cataloguing, and premium dealership services portal optimized for the Middle Eastern marketplace.',
    metrics: { label: 'Catalog Discoverability', value: '+88%' },
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.fawdubai.com%2F&screenshot=true&embed=screenshot.url',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Responsive Grid'],
    websiteUrl: 'https://www.fawdubai.com/',
  },

  {
    id: 'bmscrubber',
    title: 'BM Scrubber',
    category: 'Corporate',
    description: 'An industrial cleaning machinery and heavy-duty automatic floor scrubber equipment B2B showcase built for high-performance product sourcing.',
    metrics: { label: 'B2B Procurement Leads', value: '+92%' },
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.bmscrubber.com%2F&screenshot=true&embed=screenshot.url',
    techStack: ['React', 'Tailwind CSS', 'Product Catalog'],
    websiteUrl: 'https://www.bmscrubber.com/',
  },
  {
    id: 'medaralabs',
    title: 'Medara Labs',
    category: 'Corporate',
    description: 'Modern bio-tech and clinical diagnostics research portal enabling secure medical reports access and clear, structured patient resources.',
    metrics: { label: 'Report Portal Uptime', value: '99.9%' },
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.medaralabs.com%2F&screenshot=true&embed=screenshot.url',
    techStack: ['Vite', 'React', 'Tailwind CSS', 'API Integration'],
    websiteUrl: 'https://www.medaralabs.com/',
  },
  {
    id: 'fairmountphotography',
    title: 'Fairmount Photography',
    category: 'Landing Page',
    description: 'A visual-first, high-performance portfolio engineered for a premium wedding and commercial photography studio, featuring responsive galleries.',
    metrics: { label: 'Media Load Efficiency', value: '+40%' },
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.fairmountphotographys.com%2F&screenshot=true&embed=screenshot.url',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Image Optimization'],
    websiteUrl: 'https://www.fairmountphotographys.com/',
  },

  {
    id: 'bonnyvelvet',
    title: 'Bonny Velvet Textiles',
    category: 'E-Commerce',
    description: 'A sensory-rich e-commerce experience for luxury velvet fabrics and curated designer apparel collections, featuring rich product layouts.',
    metrics: { label: 'Mobile Engagement', value: '+72%' },
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.bonnyvelvet.com%2F&screenshot=true&embed=screenshot.url',
    techStack: ['Vite', 'React', 'Tailwind CSS', 'Secure Checkout'],
    websiteUrl: 'https://www.bonnyvelvet.com/',
  },
  {
    id: 'modernoffset',
    title: 'Modern Offset Printers',
    category: 'Corporate',
    description: 'A state-of-the-art print and publishing portal designed for high-volume commercial printing orders, quote calculation, and file submission.',
    metrics: { label: 'Inquiry Efficiency', value: '+65%' },
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.modernoffset.com%2F&screenshot=true&embed=screenshot.url',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Order Management'],
    websiteUrl: 'https://www.modernoffset.com/',
  },
  {
    id: 'skyfaboverseas',
    title: 'Skyfab Overseas Worldwide',
    category: 'Corporate',
    description: 'International textile exporting distribution network portal facilitating bulk supply chain communication and global custom fabrics sourcing.',
    metrics: { label: 'International Leads', value: '+130%' },
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.skyfaboverseasworldwide.com%2F&screenshot=true&embed=screenshot.url',
    techStack: ['Vite', 'React', 'Tailwind CSS', 'Global SEO'],
    websiteUrl: 'https://www.skyfaboverseasworldwide.com/',
  },
  {
    id: 'hindustanflowcontrol',
    title: 'Hindustan Flow Control',
    category: 'Corporate',
    description: 'B2B commercial catalog and specification tracker for premium industrial flow valves and mechanical piping systems distribution.',
    metrics: { label: 'Technical Spec Views', value: '+150%' },
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.hindustanflowcontrol.com%2F&screenshot=true&embed=screenshot.url',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Spec Catalog'],
    websiteUrl: 'https://www.hindustanflowcontrol.com/',
  },
  {
    id: 'fihmonline',
    title: 'FIHM Online Hospitality',
    category: 'SaaS',
    description: 'A state-of-the-art learning management hub and vocational training academy curriculum portal for elite hotel and hospitality studies.',
    metrics: { label: 'Direct Student Intake', value: '+195%' },
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.fihmonline.com%2F&screenshot=true&embed=screenshot.url',
    techStack: ['React', 'Tailwind CSS', 'LMS Navigation', 'Vite'],
    websiteUrl: 'https://www.fihmonline.com/',
  },
  {
    id: 'nexa-crm',
    title: 'Nexa Enterprise SaaS',
    category: 'SaaS',
    description: 'A robust multi-tenant customer relationship platform built on React, Node.js, and PostgreSQL. Tailored for enterprise teams with complex reporting tools.',
    metrics: { label: 'Active User Growth', value: '+140%' },
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjKTXS0cB8XWOSdJ6YxiP-hlMr6NnJo-wQGJ9EpAMrrUo1oy95yW1ZPvQZhb_nvapfej8S9s1WAmK8XMUPAXuisiiW-fxNGPtBKPpgQrNvpajih93sS1EbE5SOG5hyomJIZj-lRXFpSEqQg-0vrbtMqovxLVCCFqnt2VGQre2lIXstt3Lt9_1OGeBKhp_CI8ooh2r_qFXJkeXenWsf6CmaEDfw-0D0njMab6yP3J920Bd5cvs6284rRqElezwKeBT_31HDop2QD68',
    techStack: ['React', 'Express', 'Tailwind', 'PostgreSQL'],
  },
  {
    id: 'quantum-ecommerce',
    title: 'Quantum Headless Checkout',
    category: 'E-Commerce',
    description: 'A lightning-fast, high-converting checkout experience integrated with Stripe. Handles dynamic tax calculation and instant mobile pay.',
    metrics: { label: 'Conversion Lift', value: '+42%' },
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6q9xi8S_kkVSHtPGphrN_161Y-Sz6drSn5H76-zkg8YsTcjfMTKgKaDz9H1elj7OFTmuQixqrMcn5FjcImjfXErCgRneDxXsR6Cy9XY1VusSPszHdNO2XXE-MlIt2B6ZYT6KFikBOOKaBFq4fs_pb_DXo6My-yLjcylYDGFsz8Fd0t0o84KqNJ0Vme9fMY_JZThlEo6lGC_XHkRGzAQW5ciDy5flJst0nVGJIg4HJRWENCp3apYkCOieXlk7Z8nG2QtKdDkdBz4g',
    techStack: ['Vite', 'Stripe API', 'GraphQL', 'Tailwind CSS'],
  },
  {
    id: 'acme-corp-site',
    title: 'ACME Corporate Platform',
    category: 'Corporate',
    description: 'A bespoke marketing platform featuring advanced content management integration, optimal search engine structure, and internationalization support.',
    metrics: { label: 'Lighthouse Score', value: '98/100' },
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD81TKGkMosvx34Z-jZE3PqQCWQteA-8q5DTnF-AJsoiNJphdOllXFQFgwR2jdDRe_gn7c3Y9OzbO1b7gjwRwnqiMnkVzv9r0B0fXtrCh7S7UU9A42lyXphKTf9CH4I5X7312Z7oFEkG5JLnrGU8cUgA9idKllyXG3NolRUj6JKXbqsxOomy7yp6p_Q6xKcrUPxlvH5NN611w09KywC9KB3CWpI2u3Lc3-zqr491yuGwYlkeEHpcJ54p36At1W0uGIZYVZIgUM8znM',
    techStack: ['React', 'Headless CMS', 'Vite', 'Tailwind'],
  },
  {
    id: 'vertex-lander',
    title: 'Vertex Analytics Dashboard',
    category: 'Landing Page',
    description: 'A custom, interactive landing page engineered strictly for performance, using visual charts and clean telemetry data to drive software subscriptions.',
    metrics: { label: 'Bounce Rate Reduction', value: '-35%' },
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2qJ_r16K7-NLk-Z1-MimQ5n_YZLq9We_retGapH3bx4dfHkNgzMVFFoJ-9LZ4nSABl2HP0Cot2BWudtgrYfEDuZ2UOIprLiRK3tZVdFY_urOCak2F6sm5ROjfmspQCk0ZdMIpU4ZwvTQ1aigl_cMSRgHLviVGbiLC-Xx2ey9H12UfM85X1O_v1joUdbWz8aEbXdSVlZZVqIXYtOWBtYr-R2ejAd0j_UH4Xfd40IqZREiqei5ScMl5DKwO2jfK5Zn4O2iwGuyStHA',
    techStack: ['Vite', 'D3.js', 'Motion', 'Tailwind CSS'],
  },
];

export const SERVICES_DATA: Record<string, import('./types').ServiceData> = {
  'landing-pages': {
    slug: 'landing-pages',
    title: 'Landing & Informative Pages',
    subtitle: 'High-Converting Single Page Solutions',
    priceText: 'Starting from ₹7,999',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    content: {
      overview: 'We build high-performance, single-page informative websites specifically designed for your business. Our team of experts designs simple to navigate and mobile-compatible landing pages to help you receive more customers.',
      whyChooseUs: 'Our responsive designs work perfectly on any device without any problem, allowing you to reach more customers. We provide affordable, quality services with clear communication and guaranteed delivery. Our courteous customer support team is always ready to help.',
      features: ['Custom Website Development', 'Responsive Layouts', 'SEO & Mobile Friendly', 'Fast Load Time', 'Secure Solutions'],
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS']
    }
  },
  'saas-development': {
    slug: 'saas-development',
    title: 'Full SaaS Development',
    subtitle: 'Scalable Software as a Service Platforms',
    priceText: 'Custom Price',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    content: {
      overview: 'Comprehensive web application development tailored to your enterprise. From authentication and routing to complex data modeling, we build robust SaaS platforms that scale securely.',
      whyChooseUs: 'We write clean, well-commented and reusable code that makes your web app a very easy platform to amend any new functionality in the later phase. We utilize cutting-edge technologies like Node.js and React.',
      features: ['Agile Project Management', 'User-Centric Design', 'Comprehensive Web Application Development', 'Post-Development Support', 'Secure Architecture'],
      techStack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'AWS']
    }
  },
  'content-writing': {
    slug: 'content-writing',
    title: 'Content Writing',
    subtitle: 'Engaging, SEO-Optimized Copywriting',
    priceText: 'Starting from ₹1,000',
    heroImage: 'https://images.unsplash.com/photo-1455390582262-044cdead27d8?q=80&w=2346&auto=format&fit=crop',
    content: {
      overview: 'High-quality content is the foundation of any digital strategy. We provide well-researched, engaging, and SEO-optimized content that resonates with your audience and drives conversions.',
      whyChooseUs: 'Our dedicated team of writers understands your industry nuances and crafts compelling narratives. We ensure all content aligns with your brand voice and is meticulously proofread and edited.',
      features: ['SEO-Optimized Articles', 'Website Copywriting', 'Blog Post Creation', 'Product Descriptions', 'Engaging Social Media Content'],
      techStack: ['Grammarly', 'Hemingway', 'Ahrefs', 'SurferSEO', 'Google Docs']
    }
  },
  'ecommerce-development': {
    slug: 'ecommerce-development',
    title: 'E-commerce Development',
    subtitle: 'High-Converting Online Stores',
    priceText: 'Starting from ₹12,999',
    heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2370&auto=format&fit=crop',
    content: {
      overview: 'We develop secure, scalable, and responsive e-commerce sites for online retailers. Whether you are selling a few products or thousands, we build platforms that drive sales and provide a seamless checkout experience.',
      whyChooseUs: 'From customized theme development to complex integrations, we handle the entire e-commerce lifecycle. Our solutions include secure payment gateways, inventory management, and fast-loading product pages.',
      features: ['E-Commerce Theme Customization', 'Responsive E-Commerce Sites', 'Secure Payment Gateways', 'E-Commerce Migration', 'Cart Optimization'],
      techStack: ['Shopify', 'React', 'Next.js', 'Stripe API', 'Tailwind CSS', 'Node.js']
    }
  },
  'app-development': {
    slug: 'app-development',
    title: 'Android & iOS Apps',
    subtitle: 'Native and Cross-Platform Mobile Solutions',
    priceText: 'Custom Price',
    heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2340&auto=format&fit=crop',
    content: {
      overview: 'Transform your business with cutting-edge mobile applications. We build highly intuitive and performant apps for both Android and iOS platforms, ensuring a flawless user experience.',
      whyChooseUs: 'Our team uses the latest frameworks like React Native and Flutter to deliver high-quality apps efficiently. We handle everything from UI/UX design to App Store deployment and ongoing maintenance.',
      features: ['Cross-Platform Development', 'Native App Performance', 'Intuitive Mobile UI/UX', 'API Integration', 'App Store Optimization'],
      techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Node.js']
    }
  },
  'digital-marketing': {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    subtitle: 'Data-Driven Growth Strategies',
    priceText: 'Custom Price',
    heroImage: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2340&auto=format&fit=crop',
    content: {
      overview: 'Maximize your online visibility and drive targeted traffic with our comprehensive digital marketing services. From SEO to paid campaigns, we engineer strategies that deliver measurable ROI.',
      whyChooseUs: 'We don\'t just run ads; we analyze data, optimize conversion funnels, and continuously refine our approach. Our transparent reporting keeps you informed every step of the way.',
      features: ['Search Engine Optimization (SEO)', 'Pay-Per-Click Advertising (PPC)', 'Social Media Management', 'Conversion Rate Optimization', 'Analytics & Reporting'],
      techStack: ['Google Analytics', 'Google Ads', 'Facebook Ads', 'Ahrefs', 'SEMrush', 'HubSpot']
    }
  }
};
