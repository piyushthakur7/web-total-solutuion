import { campaignFromSearch } from './adsLanding';

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window { dataLayer?: unknown[]; gtag?: Gtag; }
}
const CONSENT_KEY = 'wts-campaign-consent-v1';
const ATTRIBUTION_KEY = 'wts-campaign-attribution-v1';
export const RECEIPT_KEY = 'wts-website-enquiry-receipt';
const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || '';
const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL || '';
const gaId = process.env.NEXT_PUBLIC_GA4_ID || '';
const validAds = /^AW-\d+$/.test(adsId);
const validGa = /^G-[A-Z0-9]+$/.test(gaId);
export const measurementConfigured = validAds || validGa;
let initialized = false;
let memoryConsent: 'granted' | 'denied' | null = null;
const reported = new Set<string>();

export function measurementConsent() {
  if (typeof window === 'undefined') return null;
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    return value === 'granted' || value === 'denied' ? value : memoryConsent;
  } catch { return memoryConsent; }
}

export function setMeasurementConsent(choice: 'granted' | 'denied') {
  memoryConsent = choice;
  try { localStorage.setItem(CONSENT_KEY, choice); } catch { /* Form remains usable without storage. */ }
  if (choice === 'denied') {
    window.gtag?.('consent', 'update', { ad_storage: 'denied', analytics_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    try { sessionStorage.removeItem(ATTRIBUTION_KEY); } catch { /* Storage may be disabled. */ }
    return;
  }
  initializeMeasurement();
}

export function campaignSearch() {
  if (measurementConsent() !== 'granted') return '';
  const current = campaignFromSearch(window.location.search);
  if (Object.keys(current).length) {
    const search = new URLSearchParams(current).toString();
    try { sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify({ search, expires: Date.now() + 30 * 60_000 })); } catch { /* Use current URL. */ }
    return search;
  }
  try {
    const saved = JSON.parse(sessionStorage.getItem(ATTRIBUTION_KEY) || 'null');
    if (saved?.expires > Date.now() && typeof saved.search === 'string') {
      return new URLSearchParams(campaignFromSearch(saved.search)).toString();
    }
  } catch { /* Ignore unavailable or invalid storage. */ }
  return '';
}

export function initializeMeasurement() {
  if (measurementConsent() !== 'granted' || !measurementConfigured) return;
  if (initialized) {
    window.gtag?.('consent', 'update', { ad_storage: 'granted', analytics_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'denied' });
    return;
  }
  initialized = true;
  window.dataLayer = window.dataLayer || [];
  // gtag expects an Arguments object in dataLayer.
  window.gtag = window.gtag || function () { window.dataLayer!.push(arguments); };
  window.gtag('consent', 'default', { ad_storage: 'denied', analytics_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
  window.gtag('consent', 'update', { ad_storage: 'granted', analytics_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'denied' });
  window.gtag('js', new Date());
  // Never let arbitrary URL query parameters become default event metadata.
  const attribution = campaignSearch();
  const safeLocation = `${window.location.origin}${window.location.pathname}${attribution ? `?${attribution}` : ''}`;
  let safeReferrer = '';
  try { const referrer = new URL(document.referrer); safeReferrer = `${referrer.origin}${referrer.pathname}`; } catch { /* No referrer. */ }
  window.gtag('set', { page_location: safeLocation, page_referrer: safeReferrer });
  if (validAds) window.gtag('config', adsId, { send_page_view: false });
  if (validGa) window.gtag('config', gaId, { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false });
  const script = document.createElement('script');
  script.id = 'wts-google-campaign-tag';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${validAds ? adsId : gaId}`;
  document.head.appendChild(script);
  campaignSearch();
}

export function trackCampaignPage(pathname: string) {
  if (measurementConsent() !== 'granted' || !measurementConfigured) return;
  initializeMeasurement();
  window.gtag?.('set', { page_location: `${window.location.origin}${pathname}` });
  if (validGa) window.gtag?.('event', 'page_view', { send_to: gaId, page_location: `${window.location.origin}${pathname}`, page_title: document.title });
}

/** Called only after a live server acknowledgement, never on the thank-you page. */
export function trackSuccessfulEnquiry(receipt: string) {
  if (measurementConsent() !== 'granted' || !measurementConfigured || reported.has(receipt)) return;
  try {
    if (sessionStorage.getItem(`wts-conversion-${receipt}`)) return;
    sessionStorage.setItem(`wts-conversion-${receipt}`, '1');
  } catch { /* The in-memory guard still handles repeats. */ }
  reported.add(receipt);
  initializeMeasurement();
  // No price/value: an enquiry is not a sale. No contact details go to Google.
  if (validGa) window.gtag?.('event', 'generate_lead', { send_to: gaId, event_id: receipt, lead_source: 'website_campaign' });
  if (validAds && /^[\w-]+$/.test(label)) window.gtag?.('event', 'conversion', { send_to: `${adsId}/${label}`, transaction_id: receipt });
}

/** These are interest signals; configure them as secondary actions in reporting. */
export function trackContactClick(kind: 'call' | 'whatsapp') {
  if (measurementConsent() !== 'granted' || !validGa) return;
  initializeMeasurement();
  window.gtag?.('event', `${kind}_click`, { send_to: gaId, lead_source: 'website_campaign' });
}
