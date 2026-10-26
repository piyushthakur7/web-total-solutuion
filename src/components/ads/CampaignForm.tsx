'use client';

import { useId, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowUpRight, LockKeyhole } from 'lucide-react';
import { ADS_BUDGETS, ADS_CTA, ADS_PATH, ADS_TIMELINES, ADS_WEBSITE_TYPES, AdsErrors, AdsLead, EMPTY_ADS_LEAD, validateAdsLead } from '../../adsLanding';
import { RECEIPT_KEY, campaignSearch, measurementConsent, trackSuccessfulEnquiry } from '../../adsTracking';
import { EMAIL, PHONE_HREF } from '../../siteContent';
import styles from './campaign.module.css';

export default function CampaignForm({ preview }: { preview: boolean }) {
  const id = useId();
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const startedAt = useRef(Date.now());
  const busy = useRef(false);
  const [fields, setFields] = useState<AdsLead>({ ...EMPTY_ADS_LEAD });
  const [errors, setErrors] = useState<AdsErrors>({});
  const [sending, setSending] = useState(false);
  const [failure, setFailure] = useState('');
  const [success, setSuccess] = useState<'preview' | 'live' | null>(null);
  const [trap, setTrap] = useState('');

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (busy.current || success) return;
    const found = validateAdsLead(fields);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) { formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus(); return; }
    busy.current = true;
    setSending(true);
    setFailure('');
    try {
      const response = await fetch('/api/website-enquiry', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, companyFax: trap, startedAt: startedAt.current, campaignSearch: campaignSearch(), measurementConsent: measurementConsent() === 'granted' }),
        signal: AbortSignal.timeout(18_000),
      });
      const body = await response.json();
      if (!response.ok || body.ok !== true || typeof body.receipt !== 'string') {
        setErrors(body.errors || {});
        throw new Error(body.error || 'Your enquiry could not be delivered. Please try again.');
      }
      setSuccess(body.preview ? 'preview' : 'live');
      if (!body.preview) trackSuccessfulEnquiry(body.receipt);
      try {
        sessionStorage.setItem(RECEIPT_KEY, JSON.stringify({ preview: Boolean(body.preview), created: Date.now() }));
        router.push(`${ADS_PATH}/thank-you`);
      } catch { /* Inline confirmation remains visible if browser storage is disabled. */ }
    } catch (error) {
      setFailure(error instanceof Error && error.name !== 'TimeoutError' && error.name !== 'AbortError' ? error.message : 'We could not confirm delivery. Your details are still here. Please retry or call us.');
    } finally { busy.current = false; setSending(false); }
  };

  const input = (name: keyof AdsLead, label: string, options: { required?: boolean; type?: string; autoComplete?: string; placeholder?: string; maxLength?: number } = {}) => (
    <div className={styles.field}>
      <label htmlFor={`${id}-${name}`}>{label}{!options.required && <span> (optional)</span>}</label>
      <input id={`${id}-${name}`} name={name} type={options.type || 'text'} autoComplete={options.autoComplete} placeholder={options.placeholder} maxLength={options.maxLength || 240} required={options.required} value={fields[name]} aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `${id}-${name}-error` : undefined} onChange={(event) => { setFields((f) => ({ ...f, [name]: event.target.value })); setErrors((e) => ({ ...e, [name]: undefined })); }} />
      {errors[name] && <p className={styles.error} id={`${id}-${name}-error`}>{errors[name]}</p>}
    </div>
  );
  const select = (name: keyof AdsLead, label: string, values: readonly string[]) => (
    <div className={styles.field}><label htmlFor={`${id}-${name}`}>{label}<span> (optional)</span></label>
      <select id={`${id}-${name}`} name={name} value={fields[name]} aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `${id}-${name}-error` : undefined} onChange={(event) => setFields((f) => ({ ...f, [name]: event.target.value }))}><option value="">Select an option</option>{values.map((value) => <option key={value}>{value}</option>)}</select>
      {errors[name] && <p className={styles.error} id={`${id}-${name}-error`}>{errors[name]}</p>}
    </div>
  );
  if (success) return <div className={styles.formSuccess} role="status"><h3>{success === 'preview' ? 'Preview complete' : 'Your enquiry is on its way.'}</h3><p>{success === 'preview' ? 'This was a test. No enquiry was sent and no conversion was recorded.' : 'Thank you. We will contact you within one working day to discuss your website and prepare a written quote.'}</p><Link href={`${ADS_PATH}/thank-you`}>See next steps <ArrowUpRight size={16} /></Link></div>;

  return <form ref={formRef} className={styles.form} noValidate onSubmit={submit}>
    {preview && <p className={styles.previewNotice}>Preview mode. No enquiry or conversion will be sent.</p>}
    <div className={styles.formGrid}>
      {input('name', 'Full name', { required: true, autoComplete: 'name', placeholder: 'Your name', maxLength: 120 })}
      {input('phone', 'Phone number', { required: true, type: 'tel', autoComplete: 'tel', placeholder: '+91', maxLength: 30 })}
      {input('email', 'Email address', { required: true, type: 'email', autoComplete: 'email', placeholder: 'you@company.com', maxLength: 254 })}
      {input('business', 'Business name', { autoComplete: 'organization', placeholder: 'Your business' })}
    </div>
    <details className={styles.projectDetails}><summary>Add project details <span>Optional · helps us prepare your quote</span></summary><div className={styles.formGrid}>
      {input('businessType', 'Business type', { placeholder: 'e.g. Interior design studio' })}
      {input('website', 'Current website', { type: 'url', placeholder: 'https://yourwebsite.com', autoComplete: 'url' })}
      {select('websiteType', 'Website type required', ADS_WEBSITE_TYPES)}
      {select('budget', 'Approximate budget', ADS_BUDGETS)}
      {select('timeline', 'Expected timeline', ADS_TIMELINES)}
      <div className={styles.field}><label htmlFor={`${id}-details`}>Anything else?<span> (optional)</span></label><textarea id={`${id}-details`} name="details" rows={3} maxLength={2000} value={fields.details} onChange={(e) => setFields((f) => ({ ...f, details: e.target.value }))} placeholder="What should your website help your business do?" /></div>
    </div></details>
    <div className={styles.honeypot} aria-hidden="true"><label htmlFor={`${id}-fax`}>Company fax</label><input id={`${id}-fax`} name="companyFax" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} /></div>
    <p className={styles.formPrivacy}><LockKeyhole size={14} aria-hidden="true" /><span>We use your details to discuss your project and prepare a quote. <Link href="/privacy">Privacy policy</Link>.</span></p>
    {failure && <div role="alert" className={styles.failure}><p>{failure}</p><p>You can also <a href={PHONE_HREF}>call us</a> or <a href={`mailto:${EMAIL}`}>email your requirements</a>.</p></div>}
    <button disabled={sending} className={styles.primary} type="submit">{sending ? 'Sending your request…' : ADS_CTA}<ArrowUpRight size={18} aria-hidden="true" /></button>
    <p className={styles.formFootnote}>Free consultation. No obligation to proceed.</p>
  </form>;
}
