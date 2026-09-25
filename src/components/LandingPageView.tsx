import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {
  ArrowRight, Briefcase, Check, CheckCircle2, Clock, ExternalLink, Gauge, Headset, MapPin, RefreshCw,
  Search, ShieldCheck, ShoppingCart, Smartphone, Sparkles, Target, TrendingUp
} from 'lucide-react';
import { LandingPageConfig, LandingBenefit } from '../landingPages';
import { getPortfolioProjectsByCategory } from '../utils/insforge/portfolio';
import { PHONE_DISPLAY, PRICING_PACKAGES, WHATSAPP_URL } from '../siteContent';
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
  const seo = config.seo;

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

      {/* SEO intro — the keyword-bearing copy Google reads first */}
      {seo?.intro && (
        <section className="bg-slate-50 pt-20 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
                  About Us
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {seo.intro.heading}
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-5 text-slate-600 text-sm sm:text-base leading-relaxed">
                {seo.intro.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Technology case — why the framework the page is about is worth choosing */}
      {seo?.highlights && (
        <section className="bg-slate-900 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
              <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
                The Technology
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {seo.highlights.heading}
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {seo.highlights.intro}
              </p>
            </div>

            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {seo.highlights.items.map((item, index) => (
                <li key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-7">
                  <span className="text-sm font-extrabold text-brand-blue tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-bold text-white text-lg leading-tight">{item.title}</h3>
                  <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Service hub — descriptive internal links into each service page */}
      {seo?.services && (
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
              <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
                Our Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {seo.services.heading}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {seo.services.intro}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {seo.services.items.map((service) =>
                service.href ? (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="group bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-brand-blue/20 transition-all duration-300 flex flex-col"
                  >
                    <h3 className="font-bold text-slate-900 text-lg leading-tight group-hover:text-brand-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    <span className="mt-5 inline-flex items-center space-x-1.5 text-xs font-bold text-brand-blue">
                      <span>Learn more</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                ) : (
                  <div
                    key={service.title}
                    className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm flex flex-col"
                  >
                    <h3 className="font-bold text-slate-900 text-lg leading-tight">{service.title}</h3>
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{service.description}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* Performance — practices, plus live tests instead of claimed scores */}
      {seo?.performance && (
        <section className="bg-slate-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              <div className="lg:col-span-4 space-y-5">
                <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
                  Performance
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {seo.performance.heading}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {seo.performance.intro}
                </p>

                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <p className="flex items-center space-x-2 text-sm font-bold text-slate-900">
                    <Gauge className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>Don&apos;t take our word for it</span>
                  </p>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Run Google PageSpeed Insights on our live Next.js builds and see the real
                    numbers for yourself.
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {seo.performance.tests.map((test) => (
                      <li key={test.url}>
                        <a
                          href={test.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 text-sm font-bold text-brand-blue hover:underline"
                        >
                          <span>{test.label}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {seo.performance.points.map((point) => (
                  <div key={point.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                    <h3 className="flex items-start space-x-2.5 font-bold text-slate-900 leading-tight">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span>{point.title}</span>
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Case studies — named builds a visitor can open and verify */}
      {seo?.caseStudies && (
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
              <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
                Proof
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {seo.caseStudies.heading}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {seo.caseStudies.intro}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
              {seo.caseStudies.items.map((study) => (
                <article
                  key={study.name}
                  className="bg-white border border-slate-100 rounded-3xl p-7 sm:p-9 shadow-sm flex flex-col"
                >
                  <span className="self-start text-[11px] uppercase tracking-widest font-extrabold text-brand-blue bg-brand-blue/10 rounded-md px-2.5 py-1">
                    {study.kind}
                  </span>
                  <h3 className="mt-4 text-2xl font-extrabold text-slate-900 tracking-tight">
                    {study.name}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{study.description}</p>

                  <ul className="mt-6 space-y-3 text-sm text-slate-700 flex-grow">
                    {study.points.map((point) => (
                      <li key={point} className="flex items-start space-x-2.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technology used">
                    {study.stack.map((tech) => (
                      <li
                        key={tech}
                        className="text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-full px-3 py-1"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 pt-6 border-t border-slate-100 flex flex-wrap gap-x-6 gap-y-3">
                    {study.links.map((link) =>
                      link.href.startsWith('/') ? (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="inline-flex items-center space-x-1.5 text-sm font-bold text-brand-blue hover:underline"
                        >
                          <span>{link.label}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      ) : (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 text-sm font-bold text-brand-blue hover:underline"
                        >
                          <span>{link.label}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits — the shorter top padding only applies directly under the trust bar */}
      <section className={`bg-slate-50 pb-24 ${seo?.intro || seo?.services || seo?.caseStudies ? 'pt-24' : 'pt-20'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
              {config.benefitsEyebrow ?? 'The Benefits'}
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
                {config.portfolioIntro ??
                  'Real client websites, live right now. Open any of them and judge the quality for yourself.'}
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
                      quality={70}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-sm text-white text-[11px] uppercase tracking-widest font-extrabold px-2.5 py-1 rounded-md">
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

      {/* Technology stack */}
      {seo?.techStack && (
        <section className="bg-slate-900 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
              <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
                Technology
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {seo.techStack.heading}
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {seo.techStack.intro}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {seo.techStack.groups.map((group) => (
                <div key={group.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">{group.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-xs sm:text-sm font-semibold text-slate-200 bg-white/5 border border-white/10 rounded-full px-3 py-1"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Price snapshot — answers "how much" queries on the page itself */}
      {seo?.pricing && (
        <section className="bg-slate-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
              <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
                Pricing
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {seo.pricing.heading}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {seo.pricing.intro}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {PRICING_PACKAGES.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-3xl p-8 border flex flex-col ${
                    pkg.highlight
                      ? 'bg-slate-900 border-slate-900 text-white shadow-xl'
                      : 'bg-white border-slate-100 shadow-sm'
                  }`}
                >
                  <h3 className={`text-xl font-extrabold ${pkg.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {pkg.name}
                  </h3>
                  <p className={`mt-1.5 text-xs leading-relaxed ${pkg.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                    {pkg.audience}
                  </p>
                  <p className="mt-6 flex items-baseline gap-2">
                    {pkg.from === null ? (
                      <span className={`text-3xl font-extrabold ${pkg.highlight ? 'text-white' : 'text-slate-950'}`}>
                        Custom Quote
                      </span>
                    ) : (
                      <>
                        <span className={`text-xs font-bold uppercase tracking-widest ${pkg.highlight ? 'text-slate-500' : 'text-slate-400'}`}>
                          From
                        </span>
                        <span className={`text-3xl font-extrabold ${pkg.highlight ? 'text-white' : 'text-slate-950'}`}>
                          ₹{pkg.from.toLocaleString('en-IN')}
                        </span>
                      </>
                    )}
                  </p>
                  <ul className={`mt-6 pt-6 border-t space-y-3 text-xs flex-grow ${pkg.highlight ? 'border-white/10 text-slate-300' : 'border-slate-100 text-slate-600'}`}>
                    {pkg.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-start space-x-2.5">
                        <Check className={`w-4 h-4 shrink-0 ${pkg.highlight ? 'text-brand-blue' : 'text-emerald-500'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#consultation"
                className="inline-flex items-center justify-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-7 py-4 rounded-xl font-bold tracking-wide shadow-lg shadow-brand-blue/20 transition-all cursor-pointer"
              >
                <span>Get My Fixed Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center space-x-1.5 text-sm font-bold text-brand-blue hover:underline"
              >
                <span>See full website pricing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="mt-6 text-center text-xs text-slate-500">{seo.pricing.note}</p>
          </div>
        </section>
      )}

      {/* Delivery timelines — answers "how long" queries on the page itself */}
      {seo?.timelines && (
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
              <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
                Timelines
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {seo.timelines.heading}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {seo.timelines.intro}
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {seo.timelines.items.map((item) => (
                <li
                  key={item.project}
                  className="bg-slate-50 border border-slate-100 rounded-2xl p-7 flex flex-col"
                >
                  <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-blue">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.duration}</span>
                  </span>
                  <h3 className="mt-3 font-bold text-slate-900 text-lg leading-tight">{item.project}</h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center text-xs text-slate-500">{seo.timelines.note}</p>
          </div>
        </section>
      )}

      {/* Process */}
      <ProcessSection />

      {/* After-launch support — what the client gets once the site is live */}
      {seo?.support && (
        <section className="bg-slate-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
              <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
                After Launch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {seo.support.heading}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {seo.support.intro}
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {seo.support.items.map((item) => (
                <li
                  key={item.title}
                  className="bg-white border border-slate-100 rounded-2xl p-7 shadow-sm flex items-start space-x-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 leading-tight">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Industries and areas served — local relevance signals */}
      {seo?.coverage && (
        <section className="bg-slate-900 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
              <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
                Who We Work With
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {seo.coverage.heading}
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {seo.coverage.intro}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                { title: 'Industries', icon: Briefcase, items: seo.coverage.industries },
                { title: 'Areas We Serve', icon: MapPin, items: seo.coverage.areas },
              ].map((group) => (
                <div key={group.title} className="bg-white/5 border border-white/10 rounded-3xl p-7 sm:p-8">
                  <h3 className="flex items-center space-x-2.5 text-lg font-bold text-white">
                    <group.icon className="w-5 h-5 text-brand-blue shrink-0" />
                    <span>{group.title}</span>
                  </h3>
                  <ul className="mt-5 flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-xs sm:text-sm font-semibold text-slate-200 bg-white/5 border border-white/10 rounded-full px-3.5 py-1.5"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQSection
        faqs={config.faqs}
        heading={config.faqHeading ?? 'Questions, Answered'}
        intro={config.faqIntro ?? 'The things business owners ask us most before starting a project.'}
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
              { href: '/website-development-company-kolkata', label: 'Website Development in Kolkata' },
              { href: '/website-development-company-delhi', label: 'Website Development in Delhi' },
              { href: '/nextjs-development-company-india', label: 'Next.js Development Company' },
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
