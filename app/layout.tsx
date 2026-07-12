import type { Metadata } from 'next';
import { Hanken_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Preloader from '../src/components/Preloader';
import LenisProvider from '../src/components/LenisProvider';

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hanken',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.webtotalsolution.com'),
  title: {
    default: 'Web Total Solution | High-Performance Websites & Digital Services',
    template: '%s | Web Total Solution',
  },
  description: 'Web Total Solution builds high-performance websites, scalable SaaS applications, and e-commerce platforms that drive growth and conversions for modern businesses.',
  keywords: ['web development', 'SaaS development', 'e-commerce', 'digital marketing', 'mobile apps', 'Web Total Solution', 'Kolkata', 'software agency'],
  authors: [{ name: 'Web Total Solution' }],
  creator: 'Web Total Solution',
  publisher: 'Web Total Solution',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.webtotalsolution.com',
    siteName: 'Web Total Solution',
    title: 'Web Total Solution | High-Performance Websites & Digital Services',
    description: 'We build high-performance websites, scalable SaaS applications, and e-commerce platforms that drive growth.',
    images: [
      {
        url: '/logo_new.png',
        width: 1200,
        height: 630,
        alt: 'Web Total Solution Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Total Solution | High-Performance Websites & Digital Services',
    description: 'We build high-performance websites, scalable SaaS applications, and e-commerce platforms that drive growth.',
    images: ['/logo_new.png'],
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
  alternates: {
    canonical: 'https://www.webtotalsolution.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
              "name": "Web Total Solution",
              "image": "https://www.webtotalsolution.com/_next/image?url=%2Flogo_new.png&w=384&q=75",
              "@id": "https://www.webtotalsolution.com/",
              "url": "https://www.webtotalsolution.com/",
              "telephone": "+91 6291 519 364",
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
              "sameAs": [
                "https://www.facebook.com/webtotalsolution",
                "https://www.linkedin.com/company/web-total-solution"
              ]
            })
          }}
        />
      </head>
      <body className={`${hanken.variable} ${inter.variable} ${jetbrains.variable} min-h-screen flex flex-col bg-white`}>
        <LenisProvider>
          <Preloader />
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          
          {/* Floating WhatsApp Button */}
          <a
            href="https://wa.me/916291519364"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#1ebd5a] hover:scale-110 transition-all duration-300 flex items-center justify-center"
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
        </LenisProvider>
      </body>
    </html>
  );
}
