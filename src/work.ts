/**
 * Selected work — the four case studies shown on /work and /work/[slug].
 *
 * Rules for this file:
 * - Every statement must be something the business can stand behind. No
 *   invented metrics, results, timelines, client research or testimonials.
 * - `situation` and `decisions` on client projects are written from the
 *   shipped website: they describe what the design does and why that suits the
 *   business, not what a client brief said. The page labels them that way.
 * - `delivered` lists deliverables. They are never presented as results.
 * - Optional fields that are not known yet stay undefined; their section is
 *   simply not rendered. What is still missing is listed in `contentNeeded`,
 *   which is shown on the page in development only, never in production.
 */

export interface WorkImage {
  src: string;
  alt: string;
  /** Explains the choice visible in the screen, not just which page it is. */
  caption: string;
}

export interface WorkDecision {
  title: string;
  body: string;
  /** The screen that shows the decision. */
  image?: WorkImage;
}

export interface WorkCaseStudy {
  slug: string;
  name: string;
  /** True for products Web Total Solution builds and runs itself. */
  ownProduct: boolean;
  /** Who the work was for, as shown in the hero facts. */
  client: string;
  /** Short sector label shown on cards. */
  category: string;
  /** What kind of thing was built, in a few words. */
  projectType: string;
  /** Specific project statement used as the case study H1. */
  statement: string;
  /** Card summary on /work and the homepage: business, assignment, scope. */
  summary: string;
  cover: WorkImage;
  websiteUrl: string;
  websiteLabel: string;
  sector: string;
  /** Our contribution. */
  role: string;
  scope: string[];
  /** Only set when the real timeline is known. */
  timeline?: string;
  /** Starting situation and constraints. */
  situation: string[];
  decisions: WorkDecision[];
  /** Phone screens, shown side by side. */
  mobile?: { intro: string; images: WorkImage[] };
  engineering: string[];
  technology: string[];
  delivered: string[];
  /** Only ever a real, attributable client quote. */
  testimonial?: { quote: string; name: string; role: string };
  /** Noted under the gallery when images are not the thing itself. */
  imageNote?: string;
  /** Missing real-world content. Shown in development builds only. */
  contentNeeded: string[];
  meta: { title: string; description: string };
}

const CLIENT_ENGINEERING =
  'Design and development were done together in the studio, so the approved design is what went into production rather than an approximation of it.';

export const WORK_CASE_STUDIES: WorkCaseStudy[] = [
  {
    slug: 'wts-crm',
    name: 'WTS CRM',
    ownProduct: true,
    client: 'Web Total Solution (own product)',
    category: 'SaaS product',
    projectType: 'Web application',
    statement: 'A CRM that follows one enquiry all the way to a paid invoice',
    summary:
      'Our own subscription product for Indian service businesses. We designed, built and run it: product scope, UX, interface and engineering.',
    cover: {
      src: '/work/wts-crm/home.webp',
      alt: 'wtscrm.com home page with a preview of the WTS CRM dashboard',
      caption: 'wtscrm.com, with the dashboard preview under the headline.',
    },
    websiteUrl: 'https://wtscrm.com',
    websiteLabel: 'wtscrm.com',
    sector: 'B2B software, CRM',
    role: 'Product scope, UX, interface design and engineering',
    scope: ['Web application', 'Marketing website', 'Subscription plans and trial'],
    situation: [
      'WTS CRM is built and run by Web Total Solution. It is our own product, not a client commission.',
      'A small service business usually tracks enquiries in WhatsApp and a spreadsheet. The enquiry, the follow-up, the quotation, the project and the invoice each live somewhere different, and the next action depends on somebody remembering it.',
      'The product had to connect that whole path without growing into a large sales CRM, and it had to suit one person working alone as well as a team sharing a workspace.',
    ],
    decisions: [
      {
        title: 'The dashboard opens on what is due, not on totals',
        body: 'The first screen answers one question: what needs attention today. Open leads carry a count of those with nothing booked, follow-ups and tasks show how many are overdue, and a reminder bar leads straight to the list. Interest level is split into hot, warm and cold so the next call is easy to choose.',
        image: {
          src: '/work/wts-crm/dashboard.webp',
          alt: 'WTS CRM dashboard preview showing open leads, follow-ups due, open tasks, pipeline value and a follow-up reminder',
          caption:
            'Each figure carries its exception: “2 with nothing booked”, “3 overdue”. Preview from wtscrm.com, using demo data.',
        },
      },
      {
        title: 'Moving a lead books the next follow-up',
        body: 'Every call, message or meeting records an outcome and sets the next action, and moving a lead to a new stage books a follow-up with it. Due and overdue work then appears on the dashboard and the calendar, so the system carries the memory instead of the person.',
        image: {
          src: '/work/wts-crm/follow-ups.webp',
          alt: 'WTS CRM follow-ups panel showing follow-ups due today, one overdue, an automatically booked follow-up and an opened quotation',
          caption:
            'A stage change books the follow-up automatically. The same panel reports an opened quotation and a part-paid invoice. Preview from wtscrm.com, using demo data.',
        },
      },
      {
        title: 'Quotation, invoice and payment stay on one record',
        body: 'An accepted quotation converts to a GST invoice, and full or part payments are recorded against it with the balance always visible. Projects keep their tasks, notes and invoices connected, so the question “has this client paid?” has one place to look.',
      },
      {
        title: 'One product for a solo owner and for a team',
        body: 'Workspaces are private. Owner, admin and member roles with record assignment let an agency share one workspace, while a solo plan gives one owner the same workflow. Quotations, GST invoicing and payments depend on the plan, and the pricing page says so plainly.',
        image: {
          src: '/work/wts-crm/pricing.webp',
          alt: 'WTS CRM pricing page with Trial, Starter, Solo, Team and Agency plans',
          caption:
            'Plans in rupees with a free 3-day trial. These are WTS CRM subscription prices and are separate from website project pricing.',
        },
      },
    ],
    mobile: {
      intro: 'The public site on a phone.',
      images: [
        {
          src: '/work/wts-crm/mobile-home.webp',
          alt: 'wtscrm.com home page on a phone',
          caption: 'Home page: headline, trial action and plan price in the first screen.',
        },
        {
          src: '/work/wts-crm/mobile-features.webp',
          alt: 'wtscrm.com features page on a phone',
          caption: 'Features page: the workflow in one sentence before the detail.',
        },
      ],
    },
    engineering: [
      'The application is built with Next.js and React, and styled with CSS Modules.',
      'Workspace data is separated at the database level, with user accounts and owner, admin and member roles. Subscriptions run on tiered plans with a free trial.',
      'Running the product ourselves means we handle its deployment, billing and support, which is the same work a client product needs after launch.',
    ],
    technology: ['Next.js', 'React', 'CSS Modules'],
    delivered: [
      'A subscription web application, live at wtscrm.com',
      'One connected workflow: lead, follow-up, quotation, project, invoice, payment',
      'Solo and team workspaces with owner, admin and member roles',
      'Tiered plans with a free 3-day trial',
    ],
    imageNote:
      'The screens on this page are taken from the public wtscrm.com website, which previews the application with demo data. They are not captures from inside a customer workspace.',
    contentNeeded: [
      'In-app screenshots with sanitised data: dashboard, pipeline, follow-ups, quotation and invoice. Current images are marketing-site previews.',
      'Project timeline, if it should be published.',
      'Adoption or usage figures, only if real figures can be shared.',
    ],
    meta: {
      title: 'WTS CRM Case Study',
      description:
        'How Web Total Solution designed and built its own product, WTS CRM: one workflow from new enquiry to paid invoice, for solo owners and agency teams.',
    },
  },
  {
    slug: 'faw-dubai',
    name: 'FAW Dubai',
    ownProduct: false,
    client: 'Frozen Apple Weddings',
    category: 'Wedding design brand',
    projectType: 'Brand website',
    statement: 'A photography-led website for a luxury wedding design company',
    summary:
      'Brand website for Frozen Apple Weddings, a wedding design company presenting its work to clients in Dubai. We designed and built the front end.',
    cover: {
      src: '/work/faw-dubai/home.webp',
      alt: 'Frozen Apple Weddings home page with a full-screen wedding photograph and Book Consultation button',
      caption: 'The home page opens on a full-screen photograph with the consultation action over it.',
    },
    websiteUrl: 'https://www.fawdubai.com/',
    websiteLabel: 'fawdubai.com',
    sector: 'Weddings and events',
    role: 'Website design and front-end development',
    scope: ['Home', 'Services', 'Case study', 'Dubai', 'Contact and consultation'],
    situation: [
      'FAW Dubai is the website of Frozen Apple Weddings, a wedding design company. A couple choosing a wedding designer is judging taste first, so the site has to show the work before it explains anything.',
      'It also has to carry two different messages: what the company does for a wedding, and what it offers in Dubai specifically. Both need to end at the same place, a consultation.',
    ],
    decisions: [
      {
        title: 'Photography carries the first screen',
        body: 'The home page gives the whole viewport to one wedding photograph. The headline sits over it in a serif with a gold italic second line, and the interface around it is kept to a thin navigation bar, so nothing competes with the image.',
        image: {
          src: '/work/faw-dubai/case-study.webp',
          alt: 'Frozen Apple Weddings featured case study page with a wedding photo gallery',
          caption:
            'The case study page follows the same rule: a short introduction, then the photographs at mixed sizes on black.',
        },
      },
      {
        title: 'Black and gold, with one accent held back',
        body: 'The palette is black, white and a single gold. Gold is reserved for labels and for the booking actions, which makes “Book now” the only coloured control in the navigation on every page.',
        image: {
          src: '/work/faw-dubai/services.webp',
          alt: 'Frozen Apple Weddings services page with four service cards on a black background',
          caption:
            'Services are four plain cards. Each is a title and one sentence, so the page reads in a few seconds.',
        },
      },
      {
        title: 'Two routes that end at a consultation',
        body: 'Services and the Dubai page are separate items in the navigation because they answer different questions. Each leads to the same consultation booking, which is also available from the header and from the opening screen.',
        image: {
          src: '/work/faw-dubai/dubai.webp',
          alt: 'Frozen Apple Weddings Dubai page describing its venue network',
          caption:
            'The Dubai page states the venue offer in one paragraph and two figures supplied by the client.',
        },
      },
    ],
    mobile: {
      intro: 'On a phone the photograph still leads, and the cards stack into a single column.',
      images: [
        {
          src: '/work/faw-dubai/mobile-home.webp',
          alt: 'Frozen Apple Weddings home page on a phone',
          caption: 'Home: the photograph and booking action fill the first screen.',
        },
        {
          src: '/work/faw-dubai/mobile-services.webp',
          alt: 'Frozen Apple Weddings services page on a phone',
          caption: 'Services: one card per row at a comfortable reading size.',
        },
      ],
    },
    engineering: [
      CLIENT_ENGINEERING,
      'The site is a React front end with responsive layouts for each page, and the photography is sized for the screen it is shown on.',
    ],
    technology: ['React', 'Tailwind CSS'],
    delivered: [
      'A brand website, live at fawdubai.com',
      'Home, services, case study, Dubai and contact pages',
      'Consultation booking reachable from the header and the opening screen',
      'Desktop and mobile layouts',
    ],
    contentNeeded: [
      'The client’s own account of the brief and what the site needed to change.',
      'Project timeline.',
      'Confirmation of the technology list and of how consultation requests are delivered.',
      'Any enquiry or booking figures the client is willing to share.',
      'A client testimonial.',
    ],
    meta: {
      title: 'FAW Dubai Case Study',
      description:
        'How Web Total Solution designed and built the FAW Dubai website for Frozen Apple Weddings, a luxury wedding design company: photography first, with a direct route to consultation.',
    },
  },
  {
    slug: 'mechverses',
    name: 'Mechverses',
    ownProduct: false,
    client: 'Mechverses',
    category: 'Industrial machinery',
    projectType: 'Catalogue website',
    statement: 'A machinery catalogue that starts with the buyer’s search',
    summary:
      'Website for a company trading second-hand machinery for the ceramic industry. We designed and built the front end around finding a machine and asking about it.',
    cover: {
      src: '/work/mechverses/home.webp',
      alt: 'Mechverses home page with a machinery search field under the headline',
      caption: 'The home page puts a machinery search directly under the headline.',
    },
    websiteUrl: 'https://www.mechverses.in',
    websiteLabel: 'mechverses.in',
    sector: 'Industrial machinery for ceramics',
    role: 'Website design and front-end development',
    scope: ['Home with search', 'Inventory listing', 'Expertise', 'About', 'Contact'],
    situation: [
      'Mechverses sells verified second-hand machinery to ceramic manufacturers: polishing lines, kilns and presses. A buyer arrives knowing the type of machine they need and wants to know whether it is in stock and in what condition.',
      'These are high-value purchases agreed by conversation. The website’s job is to show the inventory credibly and get the buyer to make contact, not to take payment.',
    ],
    decisions: [
      {
        title: 'Search is the first thing on the page',
        body: 'The home page leads with one search field whose placeholder names the categories buyers use: polishing, kilns, presses. The navigation is three items and a contact button, so the route to the inventory is never more than one step.',
      },
      {
        title: 'Condition is shown on every machine',
        body: 'Each listing carries a condition label over its photograph, such as Refurbished, Good or Excellent. With used machinery that is the first thing a buyer checks, so it sits where the eye lands rather than inside a description.',
        image: {
          src: '/work/mechverses/inventory.webp',
          alt: 'Mechverses inventory page listing machines with condition labels',
          caption:
            'Inventory cards show the client’s own photographs with a condition label in the corner of each.',
        },
      },
      {
        title: 'An industrial visual hierarchy',
        body: 'Headlines are set in a condensed bold face on dark graphite with a single orange accent. Orange is used for the search button, the contact button and one word in each page title, which keeps the actions easy to find against heavy photography.',
        image: {
          src: '/work/mechverses/expertise.webp',
          alt: 'Mechverses expertise page with service cards',
          caption:
            'The expertise page explains what the company does beyond listing machines: plant solutions, sourcing and installation.',
        },
      },
    ],
    mobile: {
      intro: 'The inventory on a phone keeps one machine per row, with its condition label.',
      images: [
        {
          src: '/work/mechverses/mobile-home.webp',
          alt: 'Mechverses home page on a phone',
          caption: 'Home: headline and search field in the first screen.',
        },
        {
          src: '/work/mechverses/mobile-inventory.webp',
          alt: 'Mechverses inventory page on a phone',
          caption: 'Inventory: search stays in the header next to the menu.',
        },
      ],
    },
    engineering: [
      CLIENT_ENGINEERING,
      'The site is a React front end. Enquiries go through the contact route; the site does not take orders or payments online.',
    ],
    technology: ['React', 'Tailwind CSS'],
    delivered: [
      'A catalogue website, live at mechverses.in',
      'A home page built around searching the machinery inventory',
      'Inventory listings with photographs and condition labels',
      'Expertise, about and contact pages, on desktop and mobile',
    ],
    contentNeeded: [
      'The client’s own account of the brief.',
      'Project timeline.',
      'How the inventory is managed (CMS, admin panel or code) and who built that part, so the back-end scope can be stated precisely.',
      'Confirmation of the technology list. The older portfolio record listed Three.js and Framer Motion, which could not be confirmed against the live site and has been removed.',
      'A sharp desktop capture of the About page. The existing file (public/work/mechverses/about.webp) is blurred and is no longer shown.',
      'Any enquiry figures the client is willing to share, and a testimonial.',
    ],
    meta: {
      title: 'Mechverses Case Study',
      description:
        'How Web Total Solution designed and built the Mechverses website: a search-led catalogue of verified second-hand machinery for the ceramic industry.',
    },
  },
  {
    slug: 'medara-labs',
    name: 'Medara Labs',
    ownProduct: false,
    client: 'Medara Labs',
    category: 'Pharmaceuticals',
    projectType: 'Business website',
    statement: 'A business website that puts products and quality ahead of everything else',
    summary:
      'Business website for a pharmaceutical marketing and distribution company. We designed and built the front end around its product range, quality standards and enquiries.',
    cover: {
      src: '/work/medara-labs/home.webp',
      alt: 'Medara Labs home page with Our Portfolio and Quality Assurance buttons',
      caption: 'The home page offers two actions: the product portfolio and quality assurance.',
    },
    websiteUrl: 'https://www.medaralabs.com/',
    websiteLabel: 'medaralabs.com',
    sector: 'Pharmaceuticals',
    role: 'Website design and front-end development',
    scope: ['Home', 'About', 'Product portfolio', 'Quality', 'Contact and enquiry'],
    situation: [
      'Medara Labs markets and distributes medicines across India, working with WHO-GMP certified manufacturing partners. The people reading its website are checking two things: what the company supplies, and whether it can be trusted on quality.',
      'A pharmaceutical site can easily hide both behind stock imagery and mission statements. The structure here is deliberately short so that neither takes more than one click.',
    ],
    decisions: [
      {
        title: 'Two first actions: products and quality',
        body: 'The opening screen offers “Our Portfolio” and “Quality Assurance” as its two buttons. Those are the two questions a distributor or doctor arrives with, so they are answered before the company introduction.',
      },
      {
        title: 'Products are filtered by what they treat',
        body: 'The product portfolio is organised by therapeutic category, which is how the range is discussed in the trade. Each card shows the pack, the category, the dosage form, regulatory status and manufacturing standard, with an enquiry button on the product itself.',
        image: {
          src: '/work/medara-labs/products.webp',
          alt: 'Medara Labs product portfolio page with therapeutic category filters and product cards',
          caption:
            'Category filters sit above the grid. Each card labels the therapeutic category and the dosage form on the pack image.',
        },
      },
      {
        title: 'Quality has its own page, written as a checklist',
        body: 'Quality and compliance is a top-level navigation item, not a paragraph on the About page. It states the manufacturing standard first and lists the checks beneath it, so a reader can verify a claim instead of taking a slogan on trust.',
        image: {
          src: '/work/medara-labs/quality.webp',
          alt: 'Medara Labs quality and compliance page',
          caption:
            'The quality page leads with the WHO-GMP manufacturing-partner statement, then lists the verification steps.',
        },
      },
      {
        title: 'The enquiry route never leaves the header',
        body: 'An “Inquiry” button stays in the navigation on every page, and the phone number and email sit in a bar above it. The company introduction on the home page supports that with the facts a new contact needs.',
        image: {
          src: '/work/medara-labs/home-intro.webp',
          alt: 'Medara Labs home page company introduction section',
          caption:
            'The introduction states what the company does in one paragraph. The figures shown are the client’s own.',
        },
      },
    ],
    mobile: {
      intro: 'On a phone the category filters become a horizontal row and each product keeps its own enquiry button.',
      images: [
        {
          src: '/work/medara-labs/mobile-home.webp',
          alt: 'Medara Labs home page on a phone',
          caption: 'Home: both first actions stay visible without scrolling.',
        },
        {
          src: '/work/medara-labs/mobile-products.webp',
          alt: 'Medara Labs product portfolio on a phone',
          caption: 'Products: regulatory status and manufacturing standard sit above “Inquire Now”.',
        },
      ],
    },
    engineering: [
      CLIENT_ENGINEERING,
      'The site is a React front end with a filterable product grid and responsive layouts for each page.',
    ],
    technology: ['React', 'Tailwind CSS'],
    delivered: [
      'A business website, live at medaralabs.com',
      'A product portfolio filtered by therapeutic category',
      'A dedicated quality and compliance page',
      'An enquiry route in the header of every page',
    ],
    contentNeeded: [
      'The client’s own account of the brief.',
      'Project timeline.',
      'How product data is managed and where enquiries are delivered, so the scope can be stated precisely.',
      'Confirmation of the technology list.',
      'Any enquiry figures the client is willing to share, and a testimonial.',
    ],
    meta: {
      title: 'Medara Labs Case Study',
      description:
        'How Web Total Solution designed and built the Medara Labs website: a pharmaceutical company presented through its product range, quality standards and a direct enquiry route.',
    },
  },
];

export const WORK_SLUGS = WORK_CASE_STUDIES.map((study) => study.slug);

export function getWorkCaseStudy(slug: string) {
  return WORK_CASE_STUDIES.find((study) => study.slug === slug);
}

/** The study after this one, wrapping round to the first. */
export function getNextWorkCaseStudy(slug: string) {
  const index = WORK_CASE_STUDIES.findIndex((study) => study.slug === slug);
  return WORK_CASE_STUDIES[(index + 1) % WORK_CASE_STUDIES.length];
}
