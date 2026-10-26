'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Check, MessageCircle, Phone } from 'lucide-react';
import { ADS_PATH, ADS_WHATSAPP } from '../../adsLanding';
import { RECEIPT_KEY } from '../../adsTracking';
import { PHONE_DISPLAY, PHONE_HREF } from '../../siteContent';
import { CampaignHeader, CampaignFooter } from './CampaignChrome';
import styles from './campaign.module.css';

export default function CampaignThankYou() {
  const [receipt, setReceipt] = useState<{ preview: boolean; created: number } | null>(null);
  useEffect(() => {
    try {
      const saved = JSON.parse(sessionStorage.getItem(RECEIPT_KEY) || 'null');
      if (typeof saved?.preview === 'boolean' && typeof saved?.created === 'number' && Date.now() - saved.created < 86_400_000) setReceipt(saved);
    } catch { /* Direct visits do not imply a successful submission. */ }
  }, []);
  // Measurement belongs to the successful POST path. Reloads and direct visits never convert.
  return <div className={styles.page}><CampaignHeader /><section className={`${styles.container} ${styles.thankYou}`}>
    <span className={styles.thankIcon}><Check size={32} /></span><p className={styles.kicker}>{receipt ? 'YOUR NEXT STEP' : 'LET’S DISCUSS YOUR WEBSITE'}</p>
    <h1>{receipt?.preview ? 'Your preview is complete.' : receipt ? 'Thank you. Let’s build something good.' : 'Ready to plan your website?'}</h1>
    <p>{receipt?.preview ? 'This was a test submission. No enquiry was sent and no conversion was recorded.' : receipt ? 'Your enquiry was received. We will contact you within one working day to discuss your requirements and prepare a written quote.' : 'Share your requirements through our website enquiry form. We will help you work out the scope and next steps.'}</p>
    <div className={styles.thankSteps}><h2>What happens next</h2><ol><li>We discuss your business and website requirements.</li><li>We agree the pages, features, content and timeline.</li><li>You receive a written quote with the costs and terms.</li></ol></div>
    <div className={styles.thankActions}><Link className={styles.primary} href={ADS_PATH}>{receipt ? 'Back to the website offer' : 'Request a website quote'}<ArrowUpRight size={18} /></Link><a className={styles.secondary} href={ADS_WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> Chat on WhatsApp</a></div><a className={styles.textLink} href={PHONE_HREF}><Phone size={16} /> {PHONE_DISPLAY}</a>
  </section><CampaignFooter /></div>;
}
