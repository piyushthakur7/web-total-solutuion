import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {
  ArrowRight, CheckCircle2, ExternalLink, Gauge, Headset, RefreshCw, Search,
  ShieldCheck, ShoppingCart, Smartphone, Sparkles, Target, TrendingUp
} from 'lucide-react';
import { LandingPageConfig, LandingBenefit } from '../landingPages';
import { getPortfolioProjectsByCategory } from '../utils/insforge/portfolio';
import { PHONE_DISPLAY, WHATSAPP_URL } from '../siteContent';
import ImageWithPreloader from './ImageWithPreloader';
import LeadForm from './LeadForm';
import WhatsAppIcon from './WhatsAppIcon';
import TrustBar from './TrustBar';

const FAQSection = dynamic(() => import('./FAQSection'));
const Testimonials = dynamic(() => import('./Testimonials'));
const ProcessSection = dynamic(() => import('./ProcessSection'));
const FinalCTA = dynamic(() => import('./FinalCTA'));

const BENEFIT_ICONS: Record<LandingBenefit['icon'], React.ElementType> = {
  target: Target,
  gauge: Gauge,
  search: Search,
  shield: ShieldCheck,
  smartphone: Smartphone,
  trending: TrendingUp,
  cart: ShoppingCart,
  refresh: RefreshCw,
  headset: Headset,
};

/**
 * Renders a complete Google Ads landing page from a LandingPageConfig.
 * Section order follows the standard high-intent flow: promise → proof →
 * benefits → work → process → testimonials → objections → conversion.
 */
export default async function LandingPageView({ config }: { config: LandingPageConfig }) {
  // Loaded from the InsForge `portfolio_projects` table, filtered to the
  // categories relevant to this page. Only live client sites are shown.
  const projects = (await getPortfolioProjectsByCategory(config.portfolioCategories))
    .filter((item) => item.websiteUrl)
    .slice(0, 6);

  return (
    <div className="pb-20 overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-14 lg:pt-20 pb-44 sm:pb-48 bg-slate-900">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blue/10 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-indigo-500/10 rounded-full filter blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
            {/* Message */}
            <div className="lg:col-span-6 space-y-7 text-center lg:text-left lg:pt-6">
              <div className="inline-flex items-center space-x-2 bg-brand-blue/10 border border-brand-blue/25 px-3.5 py-1.5 rounded-full text-brand-blue text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>{config.eyebrow}</span>
              </div>

              <h1 className="text-[2.05rem] leading-[1.13] sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white">
                {config.h1}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {config.subheadline}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5">
                <a
                  href="#consultation"
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white px-7 py-4 rounded-xl font-bold tracking-wide shadow-lg shadow-brand-blue/25 hover:shadow-xl transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>{config.primaryCta}</span>
                  <ArrowRight className="w-5 h-5 shrink-0" />
                </a>
                <Link
                  href="/portfolio"
                  className="bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 px-7 py-4 rounded-xl font-bold tracking-wide backdrop-blur-sm transition-all flex items-center justify-center cursor-pointer"
                >
                  View Portfolio
                </Link>
              </div>

              <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2.5">
                {config.trustBadges.map((badge) => (
                  <li key={badge} className="flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{badge}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-slate-400">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 hover:text-emerald-400 transition-colors font-semibold"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp us</span>
                </a>
                <a href="tel:+916291519364" className="hover:text-white transition-colors font-semibold">
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            {/* Above-the-fold form — the single biggest conversion lever on an ads page */}
            <div className="lg:col-span-6" id="consultation">
              <div className="bg-white rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                <div className="bg-slate-50 border-b border-slate-100 px-6 sm:px-8 py-5 text-center">
                  <h2 className="text-lg font-extrabold text-slate-900">
                    Get Your Free Consultation
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Tell us about your business — we will reply within 24 hours with honest advice
                    and a clear quote.
                  </p>
                </div>
                <div className="p-6 sm:p-8">
                  <LeadForm
                    variant="compact"
                    defaultProjectType={config.projectType}
                    source={`Landing page: /${config.slug}`}
                    submitLabel="Get My Free Quote"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[-2px] left-0 right-0 z-10 pointer-events-none">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-slate-50" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Social proof */}
      <TrustBar className="-mt-28 sm:-mt-24" />

      {/* Benefits */}
      <section className="bg-slate-50 pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
              The Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {config.benefitsHeading}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {config.benefitsIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.benefits.map((benefit) => {
              const Icon = BENEFIT_ICONS[benefit.icon];
              return (
                <div
                  key={benefit.title}
                  className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-brand-blue/20 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-brand-blue/10 text-brand-blue rounded-2xl inline-flex items-center justify-center mb-5 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg leading-tight mb-2.5">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#consultation"
              className="inline-flex items-center justify-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 rounded-xl font-bold tracking-wide shadow-lg shadow-brand-blue/20 transition-all cursor-pointer"
            >
              <span>{config.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      {projects.length > 0 && (
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
              <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
                Recent Work
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {config.portfolioHeading}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Real client websites, live right now. Open any of them and judge the quality for
                yourself.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {projects.map((project) => (
                <a
                  key={project.id}
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-video bg-slate-100 overflow-hidden">
                    <ImageWithPreloader
                      src={project.imageUrl}
                      alt={`${project.title} website built by Web Total Solution`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      width={600}
                      height={400}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest font-extrabold px-2.5 py-1 rounded-md">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-bold text-slate-900 leading-tight">{project.title}</h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed flex-grow line-clamp-3">
                      {project.description}
                    </p>
                    <span className="mt-4 inline-flex items-center space-x-1.5 text-xs font-bold text-brand-blue">
                      <span>Visit live site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/portfolio"
                className="inline-flex items-center space-x-1.5 text-sm font-bold text-brand-blue hover:underline"
              >
                <span>See our full portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <ProcessSection />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQSection
        faqs={config.faqs}
        heading="Questions, Answered"
        intro="The things business owners ask us most before starting a project."
      />

      {/* Contact form */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
                Start the Conversation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Tell Us What Your Business Needs
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Share a few details and we will come back with honest advice, a recommended
                approach, and a fixed written quote — usually within 24 hours.
              </p>

              <ul className="space-y-3.5 pt-2">
                {[
                  'No obligation and no pressure to proceed',
                  'A fixed quote, not an open-ended estimate',
                  'Straight answers even if you do not need a new site',
                ].map((point) => (
                  <li key={point} className="flex items-start space-x-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-px" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-200 space-y-2.5">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2.5 text-sm font-bold text-slate-800 hover:text-emerald-600 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="tel:+916291519364"
                  className="block text-sm font-bold text-slate-800 hover:text-brand-blue transition-colors"
                >
                  Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <LeadForm
                defaultProjectType={config.projectType}
                source={`Landing page footer: /${config.slug}`}
                submitLabel="Send My Requirements"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA headline={config.ctaHeadline} text={config.ctaText} />

      {/* Internal links — helps crawl depth and keeps ad traffic on site */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="border-t border-slate-200 pt-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
            Explore More
          </h2>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {[
              { href: '/business-website-development', label: 'Business Website Development' },
              { href: '/website-redesign', label: 'Website Redesign' },
              { href: '/ecommerce-development', label: 'E-Commerce Development' },
              { href: '/services', label: 'All Services' },
              { href: '/portfolio', label: 'Portfolio' },
              { href: '/pricing', label: 'Pricing' },
              { href: '/blog', label: 'Blog' },
              { href: '/contact', label: 'Contact' },
            ]
              .filter((link) => link.href !== `/${config.slug}`)
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-semibold text-slate-600 hover:text-brand-blue transition-colors"
                >
                  {link.label}
                </Link>
              ))}
          </nav>
        </div>
      </section>
    </div>
  );
}
