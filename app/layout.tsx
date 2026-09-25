import type { Metadata, Viewport } from 'next';
import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import MobileCTABar from '../src/components/MobileCTABar';

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hanken',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
});

const SITE_URL = 'https://www.webtotalsolution.com';
const ORG_ID = `${SITE_URL}/#organization`;
const SITE_TITLE = 'Professional Business Website Development | Web Total Solution';
const SITE_DESCRIPTION =
  'We build fast, modern, SEO-optimised business websites that help companies attract customers, build trust and generate more leads. Get a free consultation.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: 'Web Total Solution',
  title: {
    default: SITE_TITLE,
    template: '%s | Web Total Solution',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'business website development',
    'professional website design',
    'website development company',
    'website redesign services',
    'ecommerce website development',
    'lead generation website',
    'web development agency Kolkata',
    'Web Total Solution',
  ],
  authors: [{ name: 'Web Total Solution' }],
  creator: 'Web Total Solution',
  publisher: 'Web Total Solution',
  category: 'Web Development',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  // No og:url here: pages that don't set their own openGraph would otherwise
  // all advertise the homepage URL when shared.
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Web Total Solution',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Web Total Solution — professional business website development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@webtotalindia',
    creator: '@webtotalindia',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/image.png',
    shortcut: '/images/image.png',
    apple: '/images/image.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#0E70A6',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
              "@id": ORG_ID,
              "name": "Web Total Solution",
              "url": `${SITE_URL}/`,
              "logo": {
                "@type": "ImageObject",
                "url": `${SITE_URL}/bhaskar_logo_1.png`,
                "width": 320,
                "height": 320
              },
              "image": `${SITE_URL}/og-image.png`,
              "telephone": "+91-6291519364",
              "email": "info@webtotalsolution.com",
              "priceRange": "₹₹",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Pachpota, Garia",
                "addressLocality": "Kolkata",
                "postalCode": "700152",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 22.4571905,
                "longitude": 88.4215653
              },
              "description": SITE_DESCRIPTION,
              "areaServed": [
                { "@type": "Country", "name": "India" },
                { "@type": "City", "name": "Kolkata" }
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "10:00",
                  "closes": "19:00"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web Development Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Business Website Development",
                      "url": "https://www.webtotalsolution.com/business-website-development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Website Redesign",
                      "url": "https://www.webtotalsolution.com/website-redesign"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "E-Commerce Development",
                      "url": "https://www.webtotalsolution.com/ecommerce-development"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://wtscrm.com/",
                "https://www.facebook.com/webtotalsolution",
                "https://www.linkedin.com/company/web-total-solutions/",
                "https://www.instagram.com/webtotalsolution/",
                "https://www.youtube.com/channel/UCNlUYW1RyevmpKY1xUQKatA",
                "https://x.com/webtotalindia"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              "name": "Web Total Solution",
              "url": `${SITE_URL}/`,
              "inLanguage": "en-IN",
              "publisher": { "@id": ORG_ID }
            })
          }}
        />
      </head>
      <body className={`${hanken.variable} ${jetbrains.variable} min-h-screen flex flex-col bg-white`}>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />

          {/* Spacer so the sticky mobile bar never covers footer content */}
          <div className="h-20 md:hidden" aria-hidden="true" />

          {/* Persistent mobile action bar (phone-only) */}
          <MobileCTABar />

          {/* Floating WhatsApp Button — desktop only; mobile uses the action bar */}
          <a
            href="https://wa.me/916291519364"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#1ebd5a] hover:scale-110 transition-all duration-300 items-center justify-center"
            aria-label="Chat with us on WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
          </a>
      </body>
    </html>
  );
}
