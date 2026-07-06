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
