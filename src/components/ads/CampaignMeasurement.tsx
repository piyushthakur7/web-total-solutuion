'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { initializeTagManager, measurementConsent, setMeasurementConsent, trackCampaignPage, trackContactClick } from '../../adsTracking';
import styles from './campaign.module.css';

export default function CampaignMeasurement({ pathname, campaign }: { pathname: string; campaign: boolean }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(!measurementConsent());
    initializeTagManager();
    if (campaign) trackCampaignPage(pathname);
  }, [pathname, campaign]);
  useEffect(() => {
    if (!campaign) return;
    const click = (event: MouseEvent) => {
      const anchor = (event.target as Element)?.closest?.('a');
      if (anchor?.href.startsWith('tel:')) trackContactClick('call');
      if (anchor?.href.startsWith('https://wa.me/')) trackContactClick('whatsapp');
    };
    document.addEventListener('click', click);
    return () => document.removeEventListener('click', click);
  }, [campaign]);
  const choose = (value: 'granted' | 'denied') => {
    setMeasurementConsent(value);
    if (value === 'granted' && campaign) trackCampaignPage(pathname);
    setVisible(false);
  };
  return (
    <div className={styles.consentArea}>
      {visible ? (
        <section className={styles.consent} aria-label="Measurement preferences">
          <div><strong>Help us understand what works</strong><p>With your permission, we use Google tags to measure site visits and campaign enquiries. You can use the site either way. <Link href="/privacy">Privacy policy</Link></p></div>
          <div className={styles.consentActions}><button type="button" onClick={() => choose('denied')}>Decline</button><button type="button" onClick={() => choose('granted')}>Allow measurement</button></div>
        </section>
      ) : <button className={styles.preferences} type="button" onClick={() => setVisible(true)}>Measurement preferences</button>}
    </div>
  );
}
