import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { getPortfolioProjects } from '../utils/insforge/portfolio';
import { GOOGLE_RATING, GOOGLE_REVIEWS_URL, HERO_TRUST_BADGES, WHATSAPP_URL } from '../siteContent';
import TrustBar from './TrustBar';
import WhatsAppIcon from './WhatsAppIcon';
import {
  Shield, PieChart, ArrowRight, CheckCircle2,
  Sparkles, ChevronRight, Monitor, TrendingUp, PenTool, Layout
} from 'lucide-react';

const FAQSection = dynamic(() => import('./FAQSection'));
const IndustriesAndTech = dynamic(() => import('./IndustriesAndTech'));
const WhyNeedWebsite = dynamic(() => import('./WhyNeedWebsite'));
const ComparisonSection = dynamic(() => import('./ComparisonSection'));
const Testimonials = dynamic(() => import('./Testimonials'));
const ProcessSection = dynamic(() => import('./ProcessSection'));
const FinalCTA = dynamic(() => import('./FinalCTA'));

/** Outcome-led service cards — what the client gets, not what we build it with. */
const QUICK_SERVICES = [
  {
    title: 'Business Websites',
    icon: <Layout className="w-6 h-6 text-white" />,
    link: '/business-website-development',
    desc: 'Win trust in the first five seconds and turn visitors into enquiries.',
  },
  {
    title: 'Website Redesign',
    icon: <Monitor className="w-6 h-6 text-white" />,
    link: '/website-redesign',
    desc: 'Rebuild a slow or dated site into a platform that actually converts.',
  },
  {
    title: 'Online Stores',
    icon: <PieChart className="w-6 h-6 text-white" />,
    link: '/ecommerce-development',
    desc: 'Sell online with secure payments and a checkout built to complete.',
  },
  {
    title: 'Content & Copy',
    icon: <PenTool className="w-6 h-6 text-white" />,
    link: '/services/content-writing',
    desc: 'Words that rank on Google and persuade the customer to act.',
  },
  {
    title: 'Care & Support',
    icon: <Shield className="w-6 h-6 text-white" />,
    link: '/services/landing-pages',
    desc: 'Keep your website fast, secure and current without lifting a finger.',
  },
  {
    title: 'Growth Marketing',
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    link: '/services/digital-marketing',
    desc: 'Bring qualified customers to the website you have invested in.',
  },
];

export default async function HomeView() {
  // Client names in the trust marquee come from the portfolio table, so the
  // homepage stays in sync whenever work is added or removed in the backend.
  const projects = await getPortfolioProjects();

  return (
    <div className="pb-20 overflow-x-hidden">
      {/* 1. Hero */}
      <section className="relative pt-14 lg:pt-20 pb-44 sm:pb-48 bg-slate-900">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blue/10 rounded-full filter blur-3xl -z-0 pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-indigo-500/10 rounded-full filter blur-2xl -z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left: message + CTAs */}
            <div className="lg:col-span-6 space-y-7 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-brand-blue/10 border border-brand-blue/25 px-3.5 py-1.5 rounded-full text-brand-blue text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>Premium Web Development Agency · Kolkata</span>
              </div>

              <h1 className="text-[2.1rem] leading-[1.12] sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight text-white">
                Professional Business Websites That{' '}
                <span className="text-brand-blue">Generate More Leads</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                We build fast, modern, SEO-optimised websites that help businesses attract customers,
                build trust, and grow online.
              </p>

              {/* Primary + secondary CTA */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-1">
                <Link
                  href="/contact"
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white px-7 py-4 rounded-xl font-bold tracking-wide shadow-lg shadow-brand-blue/25 hover:shadow-xl transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Get Free Website Consultation</span>
                  <ArrowRight className="w-5 h-5 shrink-0" />
                </Link>
                <Link
                  href="/portfolio"
                  className="bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 px-7 py-4 rounded-xl font-bold tracking-wide backdrop-blur-sm transition-all flex items-center justify-center cursor-pointer"
                >
                  View Portfolio
                </Link>
              </div>

              {/* Trust badges directly under the CTA */}
              <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2.5 pt-1">
                {HERO_TRUST_BADGES.map((badge) => (
                  <li
                    key={badge}
                    className="flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{badge}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-1 flex items-center justify-center lg:justify-start">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm font-semibold text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Prefer to chat? Message us on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right: visual + Google rating proof */}
            <div className="lg:col-span-6 relative mt-4 lg:mt-0">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View our Google Reviews"
                className="absolute -top-7 -right-2 sm:-top-8 sm:-right-6 md:-right-8 bg-white p-3.5 sm:p-4 rounded-2xl shadow-2xl flex items-center space-x-3 hover:-translate-y-2 transition-all duration-300 z-20 border border-slate-100 group"
              >
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-1.5">
                    <span className="text-lg font-extrabold text-slate-900 leading-none">{GOOGLE_RATING}</span>
                    <div className="flex text-yellow-400 text-[14px]" aria-hidden="true">
                      ★★★★<span className="text-yellow-400/50">★</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1 group-hover:text-blue-600 transition-colors">
                    Google Reviews
                  </span>
                </div>
              </a>

              <div className="border-8 border-white bg-white rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/6476257/pexels-photo-6476257.jpeg"
                  alt="Web Total Solution team planning a professional business website"
                  className="w-full h-auto object-cover max-h-[460px]"
                  width={800}
                  height={500}
                  referrerPolicy="no-referrer"
                  priority
                  quality={65}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-[-2px] left-0 right-0 z-10 pointer-events-none">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-slate-50" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* 2. Social proof — placed immediately after the hero */}
      <TrustBar className="-mt-28 sm:-mt-24" />

      {/* 3. What we do (outcome-framed) */}
      <section className="bg-slate-50 pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Websites Built Around Business Results
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Whatever you need built, the brief is the same: more visibility, more trust, and more
              customers reaching out to you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {QUICK_SERVICES.map((service) => (
              <Link
                key={service.title}
                href={service.link}
                className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 flex flex-col hover:-translate-y-1.5 hover:shadow-xl hover:border-brand-blue/20 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-brand-blue transition-colors duration-300 shrink-0">
                  {service.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2 leading-tight text-lg">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-grow">
                  {service.desc}
                </p>
                <span className="text-brand-blue text-xs font-bold uppercase tracking-wide flex items-center">
                  Learn More
                  <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Client marquee */}
      {projects.length > 0 && (
        <section className="bg-white py-10 border-y border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Trusted by growing businesses across India and overseas
            </p>
          </div>
          <div className="relative flex overflow-hidden w-full group">
            <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
              {[...projects, ...projects].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors mx-8 md:mx-12 opacity-70 hover:opacity-100 shrink-0">
                  <div className="w-5 h-5 rounded bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold shrink-0" aria-hidden="true">★</div>
                  <span className="text-sm font-semibold tracking-wider font-mono">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Why a website matters */}
      <WhyNeedWebsite />

      {/* 6. Why choose us — agency vs freelancer */}
      <ComparisonSection />

      {/* 7. Industries & technologies */}
      <IndustriesAndTech />

      {/* 8. Services in detail */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-4">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
                Our Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Everything Your Business Needs Online
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                From your first professional website to a full online store, we handle design,
                development, content and search visibility as one project. Based in Kolkata?
                See our{' '}
                <Link
                  href="/website-development-company-kolkata"
                  className="font-semibold text-brand-blue hover:underline"
                >
                  website development services in Kolkata
                </Link>
                .
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center space-x-1.5 text-brand-blue font-bold text-sm hover:underline cursor-pointer shrink-0"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: '🏢',
                title: 'Business Websites',
                href: '/business-website-development',
                copy: 'We create high-performance websites that increase customer trust, improve online visibility, and generate more business inquiries — so the people searching for what you do choose you instead of a competitor.',
                points: ['Custom design built around your brand', 'Structured to convert visitors into enquiries'],
              },
              {
                emoji: '🔄',
                title: 'Website Redesign',
                href: '/website-redesign',
                copy: 'If your current website is slow, dated or invisible on Google, we rebuild it into a fast, modern platform that reflects the quality of your business — without losing the rankings you already have.',
                points: ['Speed and mobile experience rebuilt', 'Existing search rankings preserved'],
              },
              {
                emoji: '🛒',
                title: 'E-Commerce Stores',
                href: '/ecommerce-development',
                copy: 'We build online stores that make buying effortless — secure payments, a checkout that does not lose customers, and product pages that show up in search when people are ready to purchase.',
                points: ['Secure payment gateway integration', 'Checkout engineered to reduce drop-off'],
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <span className="text-3xl" aria-hidden="true">{service.emoji}</span>
                  <h3 className="text-xl font-bold text-slate-950">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.copy}</p>
                  <ul className="space-y-2.5 text-xs text-slate-600 pt-3 border-t border-slate-100">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-px" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={service.href}
                  className="mt-8 inline-flex items-center space-x-1 text-xs font-bold text-slate-800 hover:text-brand-blue group cursor-pointer"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8b. Our own product — internal link into /projects with descriptive
           anchor text, so the new page is reachable from the strongest page on
           the site rather than only from the nav. */}
      <section className="bg-slate-50 py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="space-y-4 flex-1">
              <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
                We Build Our Own Software Too
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                WTS CRM — a simple CRM and invoicing workspace for Indian freelancers
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                Leads, follow-up reminders, client projects, invoices and payment tracking in one
                private workspace — built for solo operators who lose enquiries in WhatsApp and
                spreadsheets. Live now at{' '}
                <a
                  href="https://wtscrm.com"
                  target="_blank"
                  rel="noopener"
                  className="font-bold text-brand-blue hover:underline"
                >
                  wtscrm.com
                </a>
                .
              </p>
            </div>
            <Link
              href="/projects"
              className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold tracking-wide px-6 py-3.5 rounded-xl shadow-sm hover:shadow transition-all inline-flex items-center justify-center space-x-2 cursor-pointer shrink-0"
            >
              <span>See WTS CRM</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Process */}
      <ProcessSection />

      {/* 10. Testimonials */}
      <Testimonials />

      {/* 11. FAQ */}
      <FAQSection />

      {/* 12. Final CTA */}
      <FinalCTA />
    </div>
  );
}
