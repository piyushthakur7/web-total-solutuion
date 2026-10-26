import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque,
  Hanken_Grotesk,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import SiteChrome from "../src/components/SiteChrome";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken",
});

// Display face for headlines; body stays on Hanken Grotesk.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-bricolage",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

const SITE_URL = "https://www.webtotalsolution.com";
const ORG_ID = `${SITE_URL}/#organization`;
const SITE_TITLE =
  "Professional Business Website Development | Web Total Solution";
const SITE_DESCRIPTION =
  "Strategy, design and development for startup websites, landing pages and product interfaces. A founder-led studio in India working with clients worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Web Total Solution",
  title: {
    default: SITE_TITLE,
    template: "%s | Web Total Solution",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "business website development",
    "professional website design",
    "website development company",
    "website development company in India",
    "website redesign services",
    "ecommerce website development",
    "lead generation website",
    "web development agency Kolkata",
    "web development agency Delhi",
    "Web Total Solution",
  ],
  authors: [{ name: "Web Total Solution" }],
  creator: "Web Total Solution",
  publisher: "Web Total Solution",
  category: "Web Development",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  // No og:url here: pages that don't set their own openGraph would otherwise
  // all advertise the homepage URL when shared.
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Web Total Solution",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Web Total Solution — professional business website development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@webtotalindia",
    creator: "@webtotalindia",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/image.png",
    shortcut: "/images/image.png",
    apple: "/images/image.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f8fb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${hanken.variable} ${bricolage.variable} ${jetbrains.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
              "@id": ORG_ID,
              name: "Web Total Solution",
              url: `${SITE_URL}/`,
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/bhaskar_logo_1.png`,
                width: 320,
                height: 320,
              },
              image: `${SITE_URL}/og-image.png`,
              telephone: "+91-6291519364",
              email: "info@webtotalsolution.com",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Pachpota, Garia",
                addressLocality: "Kolkata",
                postalCode: "700152",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 22.4571905,
                longitude: 88.4215653,
              },
              // Every office we operate from; `address` above stays the primary one.
              location: [
                {
                  "@type": "Place",
                  name: "Web Total Solution — Kolkata",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Pachpota, Garia",
                    addressLocality: "Kolkata",
                    addressRegion: "West Bengal",
                    postalCode: "700152",
                    addressCountry: "IN",
                  },
                },
                {
                  "@type": "Place",
                  name: "Web Total Solution — Delhi",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress:
                      "Dhani Ram Colony, Shiv Chowk, Rohini Sector 19",
                    addressLocality: "New Delhi",
                    addressRegion: "Delhi",
                    postalCode: "110042",
                    addressCountry: "IN",
                  },
                },
              ],
              description: SITE_DESCRIPTION,
              areaServed: [
                { "@type": "Country", name: "India" },
                { "@type": "City", name: "Kolkata" },
                { "@type": "City", name: "Delhi" },
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "10:00",
                  closes: "19:00",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Web Development Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Website Development in India",
                      url: "https://www.webtotalsolution.com/website-development-company-india",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Website Development in Kolkata",
                      url: "https://www.webtotalsolution.com/website-development-company-kolkata",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Website Development in Delhi",
                      url: "https://www.webtotalsolution.com/website-development-company-delhi",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Website Development in Mumbai",
                      url: "https://www.webtotalsolution.com/website-development-company-mumbai",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Website Development in Pune",
                      url: "https://www.webtotalsolution.com/website-development-company-pune",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Website Development in Hyderabad",
                      url: "https://www.webtotalsolution.com/website-development-company-hyderabad",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Website Development in Bengaluru",
                      url: "https://www.webtotalsolution.com/website-development-company-bengaluru",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Website Development in Noida",
                      url: "https://www.webtotalsolution.com/website-development-company-noida",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Next.js Development",
                      url: "https://www.webtotalsolution.com/nextjs-development-company-india",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "React Development",
                      url: "https://www.webtotalsolution.com/react-development-company-india",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "SaaS Website Design and Development",
                      url: "https://www.webtotalsolution.com/saas-website-design",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Education Website Development",
                      url: "https://www.webtotalsolution.com/education-website-development",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Business Website Development",
                      url: "https://www.webtotalsolution.com/business-website-development",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Website Redesign",
                      url: "https://www.webtotalsolution.com/website-redesign",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "E-Commerce Development",
                      url: "https://www.webtotalsolution.com/ecommerce-development",
                    },
                  },
                ],
              },
              sameAs: [
                "https://wtscrm.com/",
                "https://www.facebook.com/webtotalsolution",
                "https://www.linkedin.com/company/web-total-solutions/",
                "https://www.instagram.com/webtotalsolution/",
                "https://www.youtube.com/channel/UCNlUYW1RyevmpKY1xUQKatA",
                "https://x.com/webtotalindia",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              name: "Web Total Solution",
              url: `${SITE_URL}/`,
              inLanguage: "en-IN",
              publisher: { "@id": ORG_ID },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-paper">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-6 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
