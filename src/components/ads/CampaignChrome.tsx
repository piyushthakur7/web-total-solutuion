import Link from 'next/link';
import { Phone } from 'lucide-react';
import { ADS_WHATSAPP } from '../../adsLanding';
import { EMAIL, PHONE_DISPLAY, PHONE_HREF } from '../../siteContent';
import WhatsAppIcon from '../WhatsAppIcon';
import Logo from '../Logo';
import styles from './campaign.module.css';

export function CampaignHeader() {
  return <header className={styles.header}><div className={styles.container}>
    <a href="#" aria-label="Web Total Solution, top of page"><Logo size="sm" /></a>
    <div className={styles.headerActions}><a className={styles.headerPhone} href={PHONE_HREF}><Phone size={15} aria-hidden="true" /><span>{PHONE_DISPLAY}</span></a><a className={styles.headerWhatsapp} href={ADS_WHATSAPP} target="_blank" rel="noopener noreferrer"><WhatsAppIcon className="size-4" /><span>WhatsApp us</span></a></div>
  </div></header>;
}

export function CampaignFooter() {
  return <footer className={styles.footer}><div className={styles.container}>
    <div className={styles.footerTop}><Logo size="sm" /><p>Thoughtful websites. Clear next steps.</p><div><a href={PHONE_HREF}>{PHONE_DISPLAY}</a><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div></div>
    <div className={styles.footerBottom}><p>© {new Date().getFullYear()} Web Total Solution</p><div><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms & Conditions</Link></div></div>
  </div></footer>;
}
