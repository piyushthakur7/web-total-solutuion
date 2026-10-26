'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { initializeMeasurement, measurementConfigured, measurementConsent, setMeasurementConsent, trackCampaignPage, trackContactClick } from '../../adsTracking';
import styles from './campaign.module.css';

export default function CampaignMeasurement() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!measurementConfigured) return;
    setVisible(!measurementConsent());
    initializeMeasurement();
    trackCampaignPage(pathname);
  }, [pathname]);
  useEffect(() => {
    const click = (event: MouseEvent) => {
      const anchor = (event.target as Element)?.closest?.('a');
      if (anchor?.href.startsWith('tel:')) trackContactClick('call');
      if (anchor?.href.startsWith('https://wa.me/')) trackContactClick('whatsapp');
    };
    document.addEventListener('click', click);
    return () => document.removeEventListener('click', click);
  }, []);
  if (!measurementConfigured) return null;
  const choose = (value: 'granted' | 'denied') => {
    setMeasurementConsent(value);
    if (value === 'granted') trackCampaignPage(pathname);
    setVisible(false);
  };
  return (
    <div className={styles.consentArea}>
      {visible ? (
        <section className={styles.consent} aria-label="Measurement preferences">
          <div><strong>Help us understand what works</strong><p>With your permission, Google measures visits and enquiries and links campaign details to your request. Your form works either way. <Link href="/privacy">Privacy policy</Link></p></div>
          <div className={styles.consentActions}><button type="button" onClick={() => choose('denied')}>Decline</button><button type="button" onClick={() => choose('granted')}>Allow measurement</button></div>
        </section>
      ) : <button className={styles.preferences} type="button" onClick={() => setVisible(true)}>Measurement preferences</button>}
    </div>
  );
}
