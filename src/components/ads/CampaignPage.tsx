import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Check, CheckCheck, Code2, Gauge, Globe2, Layers3, LayoutTemplate, MessageCircle, MonitorSmartphone, MousePointer2, Phone, Search, ShieldCheck } from 'lucide-react';
import { ADS_CTA, ADS_FAQS, ADS_WHATSAPP, ADS_WEBSITE_TYPES } from '../../adsLanding';
import { EMAIL, PHONE_DISPLAY, PHONE_HREF, STUDIO_STATS } from '../../siteContent';
import { WORK_CASE_STUDIES } from '../../work';
import CampaignForm from './CampaignForm';
import WhatsAppIcon from '../WhatsAppIcon';
import Logo from '../Logo';
import styles from './campaign.module.css';

const features = [
  { icon: LayoutTemplate, title: 'A professional first impression', text: 'Clear layouts that introduce your business and make your services easy to understand.' },
  { icon: MonitorSmartphone, title: 'Made for every screen', text: 'A responsive experience for customers on a phone, tablet or desktop.' },
  { icon: Search, title: 'A search-friendly foundation', text: 'Page titles, headings and a sensible structure to help search engines read your website.' },
  { icon: MessageCircle, title: 'One tap to WhatsApp', text: 'Give visitors a direct way to start a conversation with your business.' },
  { icon: Gauge, title: 'Built to load efficiently', text: 'Optimised images and considered code that keep the experience moving.' },
  { icon: MousePointer2, title: 'An easier way to enquire', text: 'Clear calls to action and contact forms that connect visitors with your team.' },
];
const process = [
  ['Tell us what you need', 'A conversation about your business, audience and website requirements.'],
  ['Agree the plan & quote', 'Pages, features, costs and the schedule, set out in writing.'],
  ['Review your design', 'See the proposed design and approve it before development.'],
  ['Build, test & refine', 'We develop the website and check layouts, links and forms.'],
  ['Launch with support', 'Go live, receive the handover and begin your agreed support period.'],
];
const proof = WORK_CASE_STUDIES.filter((work) => ['medara-labs', 'mechverses', 'faw-dubai'].includes(work.slug));

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

function QuoteButton({ label = ADS_CTA, className = '' }: { label?: string; className?: string }) {
  return <a href="#quote" className={`${styles.primary} ${className}`}>{label}<ArrowUpRight size={18} aria-hidden="true" /></a>;
}

export default function CampaignPage({ preview }: { preview: boolean }) {
  return <div className={styles.page}>
    <CampaignHeader />
    <section className={styles.hero} aria-labelledby="campaign-title"><div className={`${styles.container} ${styles.heroGrid}`}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}><span /> YOUR BUSINESS. READY FOR WHAT’S NEXT.</p>
        <h1 id="campaign-title">Professional Website Design & Development <span>for Your Business.</span></h1>
        <p className={styles.heroDescription}>Get a modern, mobile-friendly website that showcases your services, builds credibility and helps potential customers connect with your business.</p>
        <div className={styles.offer}><div><span>STARTER WEBSITE PACKAGE</span><p>Starting at <strong>₹6,999<span>*</span></strong></p></div><span className={styles.offerMark} aria-hidden="true"><Globe2 size={28} /></span></div>
        <div className={styles.heroActions}><QuoteButton /><a className={styles.secondary} href={ADS_WHATSAPP} target="_blank" rel="noopener noreferrer"><WhatsAppIcon className="size-5" /> WhatsApp Us</a></div>
        <p className={styles.offerNote}>*Final scope, taxes and third-party costs confirmed in your written quote.</p>
        <div className={styles.heroReassurance}><span><Check size={15} /> Free consultation</span><span><Check size={15} /> Written quote first</span><span><Check size={15} /> You own your website</span></div>
      </div>
      <div className={styles.heroVisual}>
        <div className={styles.visualHeading}><span><i /> A REAL PROJECT, BUILT BY OUR STUDIO</span><Code2 size={17} /></div>
        <div className={styles.desktopMockup}><div className={styles.browserBar}><span><i /><i /><i /></span><span>medaralabs.com</span><ShieldCheck size={12} /></div><Image src="/work/medara-labs/home.webp" alt="Desktop view of the Medara Labs website designed by Web Total Solution" width={1440} height={1000} sizes="(max-width: 760px) 94vw, 48vw" priority className={styles.desktopImage} /></div>
        <div className={styles.phoneMockup}><span className={styles.phoneSpeaker} /><Image src="/work/medara-labs/mobile-home.webp" alt="The same Medara Labs website adapted for mobile" width={390} height={844} sizes="(max-width: 760px) 120px, 150px" priority className={styles.phoneImage} /></div>
        <div className={styles.visualLabel}><span><MonitorSmartphone size={21} /></span><div><strong>Looks good. Works everywhere.</strong><p>Desktop, tablet & mobile.</p></div></div>
        <p className={styles.visualCaption}>Medara Labs · Business website · Shown as a portfolio example; scope varies by project.</p>
      </div>
    </div></section>

    <section className={styles.trust} aria-label="About our studio"><div className={styles.container}><p>A small studio.<br /><strong>A proven body of work.</strong></p>{STUDIO_STATS.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}<a href="#work">See the work <ArrowDown size={17} /></a></div></section>

    <section className={`${styles.section} ${styles.container}`} aria-labelledby="features-title"><div className={styles.sectionHeading}><div><p className={styles.kicker}>BUILT AROUND YOUR BUSINESS</p><h2 id="features-title">Everything your business<br className={styles.desktopBreak} /> needs to go online.</h2></div><p>A website should do more than look good. It should help the right people understand your business and take the next step.</p></div>
      <div className={styles.featureGrid}>{features.map(({ icon: Icon, title, text }, i) => <article className={styles.feature} key={title}><div className={styles.featureTop}><Icon size={23} strokeWidth={1.5} aria-hidden="true" /><span>0{i + 1}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div><p className={styles.scopeNote}>Features are available according to your agreed scope. Your written quote confirms exactly what is included.</p>
    </section>

    <section className={styles.industries}><div className={styles.container}><div><p className={styles.kicker}>A WEBSITE THAT FITS</p><h2>Website solutions<br />for every business.</h2><p>From your first business website to a custom build, we start with what your customers need.</p></div><ul>{ADS_WEBSITE_TYPES.map((type, i) => <li key={type}><span className={styles.industryNumber}>0{i + 1}</span>{type}<ArrowUpRight size={16} aria-hidden="true" /></li>)}</ul></div></section>

    <section id="work" className={`${styles.section} ${styles.container}`} aria-labelledby="work-title"><div className={styles.sectionHeading}><div><p className={styles.kicker}>REAL BUSINESSES. REAL WEBSITES.</p><h2 id="work-title">Explore our website<br />design work.</h2></div><p>A few projects from our studio. Open the live websites and see the work for yourself.</p></div><div className={styles.workGrid}>{proof.map((work) => <a href={work.websiteUrl} target="_blank" rel="noopener noreferrer" className={styles.workCard} key={work.slug}><div className={styles.workImage}><Image src={work.cover.src} alt={work.cover.alt} width={1440} height={1000} sizes="(max-width: 760px) 90vw, 32vw" loading="lazy" /></div><div className={styles.workInfo}><div><p>{work.category}</p><h3>{work.name}</h3></div><ArrowUpRight size={22} aria-hidden="true" /></div><p className={styles.workSummary}>{work.summary}</p><span className={styles.liveLink}>Visit {work.websiteLabel} <ArrowUpRight size={14} /></span></a>)}</div><p className={styles.scopeNote}>Portfolio examples illustrate our wider work. They are not a representation of the ₹6,999 package scope.</p></section>

    <section className={styles.pricing} aria-labelledby="pricing-title"><div className={styles.container}><div className={styles.sectionHeading}><div><p className={styles.kicker}>START WITH A CLEAR QUOTE</p><h2 id="pricing-title">Affordable website packages<br />for your business.</h2></div><p>Know what you’re getting before the project begins. No vague “everything included” promises.</p></div><div className={styles.pricingGrid}>
      <article className={styles.starter}><p className={styles.packageTag}>YOUR FIRST STEP ONLINE</p><h3>Starter Website</h3><p className={styles.packageIntro}>For a business that needs a clear, professional place on the web.</p><p className={styles.price}><span>Starting at</span>₹6,999<span>INR · final quote after scope review</span></p><QuoteButton /><p className={styles.pricingSmall}>Your requirements decide the final scope and price.</p><div className={styles.packageFeatures}><p><CheckCheck size={17} /> Business website requirements review</p><p><CheckCheck size={17} /> Written scope and cost breakdown</p><p><CheckCheck size={17} /> Design approval before development</p></div></article>
      <article className={styles.customPackage}><Layers3 size={29} strokeWidth={1.5} aria-hidden="true" /><h3>Need something more?</h3><p>Online stores, bookings, advanced integrations or a fully custom website. We’ll work out a scope that fits.</p><ul><li><Check size={16} /> E-commerce & online payments</li><li><Check size={16} /> Custom features & integrations</li><li><Check size={16} /> Larger sites & website redesigns</li></ul><QuoteButton label="Get My Website Quote" className={styles.customButton} /><span>Priced separately, based on your requirements.</span></article>
    </div><div className={styles.terms}><div><ShieldCheck size={22} /><h3>What your written quote will confirm</h3><p>The starting price is an invitation to scope your project. These details are agreed before you commit.</p></div><dl><div><dt>Pages & features</dt><dd>Exact page count, included features and content responsibilities.</dd></div><div><dt>Revisions & delivery</dt><dd>Number of revision rounds and the delivery estimate.</dd></div><div><dt>Domain & hosting</dt><dd>Provider charges, account ownership and renewal costs itemised separately.</dd></div><div><dt>Support, taxes & recurring costs</dt><dd>Support period, applicable taxes and any ongoing fees stated in writing.</dd></div></dl></div></div></section>

    <section className={`${styles.section} ${styles.container}`} aria-labelledby="partner-title"><div className={styles.partner}><div><p className={styles.kicker}>A PARTNER, FROM START TO LAUNCH</p><h2 id="partner-title">A website partner focused<br />on your business goals.</h2><p>We work through the requirements with you, show the design before we build, and keep the next step clear.</p><a href="#quote" className={styles.textLink}>Tell us about your business <ArrowUpRight size={17} /></a></div><div className={styles.commitments}>{[['Built for your requirements', 'A scope based on your services, audience and goals.'], ['Clear communication', 'Direct discussions and shared previews throughout the project.'], ['Your website, your ownership', 'Domain, hosting account, content and delivered source code belong to you.'], ['Support agreed up front', 'Know the support period and ongoing options before work begins.']].map(([title, text]) => <div key={title}><Check size={18} /><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div>
      <div className={styles.processHeading}><p className={styles.kicker}>NO GUESSWORK ABOUT WHAT’S NEXT</p><h2>From idea to website launch.</h2></div><ol className={styles.process}>{process.map(([title, text], i) => <li key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
    </section>

    <section id="quote" className={styles.quote} aria-labelledby="quote-title"><div className={`${styles.container} ${styles.quoteGrid}`}><div className={styles.quoteCopy}><p className={styles.kicker}>LET’S TALK ABOUT YOUR WEBSITE</p><h2 id="quote-title">Let’s build your<br />business website.</h2><p>Tell us about your business and requirements. Our team will contact you to discuss the next steps.</p><ol><li><span>01</span>Share a few details about your project.</li><li><span>02</span>Hear from us within one working day.</li><li><span>03</span>Get a clear scope and a written quote.</li></ol><div className={styles.quoteContact}><p>Prefer a conversation?</p><a href={PHONE_HREF}><Phone size={17} /> {PHONE_DISPLAY}</a><a href={ADS_WHATSAPP} target="_blank" rel="noopener noreferrer"><WhatsAppIcon className="size-5" /> Chat on WhatsApp <ArrowUpRight size={16} /></a></div></div><div className={styles.formCard}><p className={styles.formKicker}>YOUR NEXT STEP STARTS HERE</p><h3>Tell us what you have in mind.</h3><CampaignForm preview={preview} /></div></div></section>

    <section className={`${styles.section} ${styles.container} ${styles.faq}`} aria-labelledby="faq-title"><div><p className={styles.kicker}>A FEW THINGS YOU MIGHT BE WONDERING</p><h2 id="faq-title">Good questions.<br />Clear answers.</h2><p>Still have a question? <a href={ADS_WHATSAPP} target="_blank" rel="noopener noreferrer">Let’s talk.</a></p></div><div className={styles.faqRows}>{ADS_FAQS.map((faq) => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></section>

    <section className={styles.finalCta}><div className={styles.container}><p className={styles.kicker}>YOUR NEXT CHAPTER STARTS ONLINE</p><h2>Ready to take your<br />business online?</h2><p>Let’s turn your requirements into a website plan.</p><div><QuoteButton /><a className={styles.secondary} href={ADS_WHATSAPP} target="_blank" rel="noopener noreferrer"><WhatsAppIcon className="size-5" /> Chat on WhatsApp</a><a className={styles.callNow} href={PHONE_HREF}><Phone size={16} /> Call now</a></div></div></section>
    <CampaignFooter />
    <div className={styles.mobileBar}><a href={PHONE_HREF} aria-label="Call Web Total Solution"><Phone size={19} /> Call</a><a href={ADS_WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Enquire on WhatsApp"><WhatsAppIcon className="size-5" /> WhatsApp</a><QuoteButton /></div>
  </div>;
}
