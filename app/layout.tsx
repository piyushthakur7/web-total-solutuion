import type { Metadata } from 'next';
import './globals.css';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

export const metadata: Metadata = {
  title: 'Web Total Solution',
  description: 'Building High-Performance Websites That Grow Your Business',
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
              "@type": "LocalBusiness",
              "name": "Web Total Solution",
              "image": "https://www.webtotalsolution.com/_next/image?url=%2Flogo_new.png&w=384&q=75",
              "@id": "https://www.webtotalsolution.com/",
              "url": "https://www.webtotalsolution.com/",
              "telephone": "+91 6291 519 364",
              "priceRange": "₹",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Srikhanda, Garia, Kolkata, Rajpur Sonarpur, West Bengal",
                "addressLocality": "Kolkata",
                "postalCode": "700150",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 22.4571905,
                "longitude": 88.4215653
              },
              "sameAs": "https://www.facebook.com/webtotalsolution" 
            })
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
