'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import MobileCTABar from './MobileCTABar';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_URL } from '../siteContent';
import { ADS_PATH } from '../adsLanding';

/** Paid campaign pages provide their own focused header, footer and contact bar. */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const campaign = pathname === ADS_PATH || pathname.startsWith(`${ADS_PATH}/`);
  return <>
    {!campaign && <Header />}
    <main id="main-content" tabIndex={-1} className="flex-grow outline-none">{children}</main>
    {!campaign && <>
      <Footer />
      <div className="h-[calc(5rem+env(safe-area-inset-bottom))] lg:hidden" aria-hidden="true" />
      <MobileCTABar />
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hidden lg:flex fixed bottom-6 right-6 z-40 bg-paper text-ink p-3.5 border border-ink/15 rounded-full shadow-lg hover:bg-marker transition-colors duration-200 items-center justify-center" aria-label="Chat with us on WhatsApp"><WhatsAppIcon className="size-5" /></a>
    </>}
  </>;
}
