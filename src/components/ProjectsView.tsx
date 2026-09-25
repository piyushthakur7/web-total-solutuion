import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  Clock,
  ExternalLink,
  FileText,
  Globe,
  Info,
  ListChecks,
  Lock,
  MessageSquare,
  Rocket,
  Users,
  Wallet,
  Check,
} from 'lucide-react';
import { PROJECTS, ProjectData, ProjectIcon } from '../projects';

/** Data files stay serialisable, so icons are referenced by name. */
const ICONS: Record<ProjectIcon, React.ElementType> = {
  users: Users,
  bell: Bell,
  listChecks: ListChecks,
  fileText: FileText,
  lock: Lock,
  clock: Clock,
  messageSquare: MessageSquare,
  wallet: Wallet,
};

function ProductSection({ project }: { project: ProjectData }) {
  const howItWorksId = `${project.slug}-how-it-works`;

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Product header */}
      <header className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">
        <div className="p-8 sm:p-12 space-y-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center space-x-2 bg-brand-blue/10 border border-brand-blue/20 px-3 py-1.5 rounded-full text-brand-blue text-[11px] font-extrabold uppercase tracking-widest">
              <Rocket className="w-3.5 h-3.5" />
              <span>{project.kicker}</span>
            </span>
            <span className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-full text-amber-800 text-[11px] font-bold tracking-wide">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span>{project.status}</span>
            </span>
            {project.siteUrl && (
              /* Followed link — no nofollow — so crawlers reach wtscrm.com from
                 here. `noreferrer` is deliberately omitted: it would strip the
                 Referer header and hide this traffic from wtscrm.com analytics. */
              <a
                href={project.siteUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center space-x-1.5 text-[11px] font-bold text-slate-600 hover:text-brand-blue transition-colors cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{project.siteLabel}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          <div className="space-y-4 max-w-3xl">
            {/* The descriptive half of the heading says what the product is in
                the words people actually search for. */}
            <h2 className="space-y-2">
              <span className="block text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                {project.name}
              </span>
              <span className="block text-lg sm:text-xl font-bold text-slate-700 leading-snug">
                {project.headline}
              </span>
            </h2>
            <p className="text-xl sm:text-2xl font-bold text-brand-blue leading-snug">
              {project.tagline}
            </p>
            <p className="text-slate-700 text-base leading-relaxed">{project.positioning}</p>
            <p className="text-slate-600 text-sm leading-relaxed">{project.supportingCopy}</p>
          </div>

          {/* CTAs — the trial link only appears once the signup flow is live. */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              {project.trialUrl ? (
                <a
                  href={project.trialUrl}
                  target="_blank"
                  rel="noopener"
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold tracking-wide px-6 py-3.5 rounded-xl shadow-sm hover:shadow transition-all inline-flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>{project.primaryCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <Link
                  href="/contact"
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold tracking-wide px-6 py-3.5 rounded-xl shadow-sm hover:shadow transition-all inline-flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>{project.preLaunchCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
              <a
                href={`#${howItWorksId}`}
                className="bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold tracking-wide px-6 py-3.5 rounded-xl border border-slate-100 transition-all inline-flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>{project.secondaryCta}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs font-semibold text-slate-600">{project.reassurance}</p>
            {!project.trialUrl && <p className="text-xs text-slate-500">{project.preLaunchNote}</p>}
          </div>
        </div>

        {/* Who it is for */}
        <div className="bg-slate-50/70 border-t border-slate-100 px-8 sm:px-12 py-8 space-y-4">
          <h3 className="text-xs font-extrabold text-slate-600 uppercase tracking-widest">
            {project.audienceHeading}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {project.audience.map((who) => (
              <li
                key={who}
                className="text-xs font-semibold text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-lg"
              >
                {who}
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Feature grid */}
      <section className="space-y-8">
        <h3 className="text-2xl font-bold text-slate-950 tracking-tight">{project.featuresHeading}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.features.map((feature) => {
            const Icon = ICONS[feature.icon];
            return (
              <div
                key={feature.title}
                className="bg-white border border-slate-100 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </span>
                <h4 className="text-base font-bold text-slate-900">{feature.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Workflow: Lead to follow-up to invoice to payment */}
      <section id={howItWorksId} className="scroll-mt-24 space-y-8">
        <div className="space-y-3 max-w-2xl">
          <h3 className="text-2xl font-bold text-slate-950 tracking-tight">{project.workflowHeading}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{project.workflowIntro}</p>
        </div>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {project.workflow.map((step, index) => (
            <li
              key={step.label}
              className="relative bg-white border border-slate-100 rounded-2xl p-6 space-y-3 shadow-sm"
            >
              <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">
                Step {index + 1}
              </span>
              <p className="text-lg font-extrabold text-slate-950">{step.label}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
              {/* Connector between steps on wide screens only. */}
              {index < project.workflow.length - 1 && (
                <ArrowRight
                  className="hidden lg:block absolute top-1/2 -right-3 w-5 h-5 text-slate-300 -translate-y-1/2"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* Pricing */}
      <section className="space-y-8">
        <div className="space-y-3 max-w-2xl">
          <h3 className="text-2xl font-bold text-slate-950 tracking-tight">{project.pricingHeading}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{project.pricingNote}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {project.plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white border rounded-3xl p-7 shadow-sm flex flex-col gap-4 ${
                plan.badge ? 'border-brand-blue/40 ring-1 ring-brand-blue/20' : 'border-slate-100'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-lg font-extrabold text-slate-950">{plan.name}</h4>
                {plan.badge && (
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-blue bg-brand-blue/10 border border-brand-blue/20 px-2.5 py-1 rounded-full">
                    {plan.badge}
                  </span>
                )}
              </div>
              <p className="flex items-baseline space-x-2">
                <span className="text-4xl font-extrabold text-slate-950 tracking-tight">{plan.price}</span>
                <span className="text-sm font-semibold text-slate-600">{plan.cadence}</span>
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">{plan.bestFor}</p>
              <ul className="space-y-2 border-t border-slate-100 pt-4 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.note && (
                <p className="text-xs font-semibold text-slate-500 pt-2 border-t border-slate-100">
                  {plan.note}
                </p>
              )}
              {project.trialUrl ? (
                <a
                  href={project.trialUrl}
                  target="_blank"
                  rel="noopener"
                  className={`font-bold tracking-wide px-5 py-3 rounded-xl transition-all inline-flex items-center justify-center space-x-2 cursor-pointer ${
                    plan.badge
                      ? 'bg-brand-blue hover:bg-brand-blue/90 text-white shadow-sm hover:shadow'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-950 border border-slate-200'
                  }`}
                >
                  <span>Choose {plan.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <Link
                  href="/contact"
                  className="bg-slate-50 hover:bg-slate-100 text-slate-950 border border-slate-200 font-bold tracking-wide px-5 py-3 rounded-xl transition-all inline-flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Choose {plan.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <p className="text-xs text-slate-600 flex items-start space-x-2 bg-slate-50 border border-slate-100 rounded-2xl p-4 flex-1">
            <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" aria-hidden="true" />
            <span>{project.trialNote}</span>
          </p>
          {project.siteUrl && (
            <a
              href={project.siteUrl}
              target="_blank"
              rel="noopener"
              className="text-sm font-bold text-brand-blue hover:underline inline-flex items-center space-x-1.5 cursor-pointer shrink-0"
            >
              <span>See full pricing on {project.siteLabel}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </section>

      {/* FAQ — visible answers, also emitted as FAQPage structured data. */}
      <section className="space-y-8">
        <h3 className="text-2xl font-bold text-slate-950 tracking-tight">{project.faqHeading}</h3>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.faqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-white border border-slate-100 rounded-2xl p-6 space-y-2 shadow-sm"
            >
              <dt className="text-base font-bold text-slate-900">{faq.question}</dt>
              <dd className="text-sm text-slate-600 leading-relaxed">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Honest scope limits */}
      <section className="bg-slate-50/70 border border-slate-100 rounded-3xl p-8 space-y-4">
        <h3 className="text-lg font-bold text-slate-950">{project.notForHeading}</h3>
        <ul className="space-y-2">
          {project.notFor.map((item) => (
            <li key={item} className="text-sm text-slate-600 flex items-start space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-2" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

/**
 * /projects — the products Web Total Solution builds and runs itself, as
 * opposed to /portfolio, which is client work.
 */
export default function ProjectsView() {
  return (
    <div className="space-y-16 pb-20 overflow-x-hidden">
      {/* Hero */}
      <section className="text-center pt-16 space-y-4 max-w-3xl mx-auto px-4">
        <div className="inline-flex items-center space-x-2 bg-brand-blue/10 border border-brand-blue/20 px-3 py-1 rounded-full text-brand-blue text-xs font-semibold uppercase tracking-wider">
          <Rocket className="w-3.5 h-3.5" />
          <span>Our Products</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Software We Build for Indian Solo Businesses
        </h1>
        <p className="text-slate-600 text-base max-w-xl mx-auto">
          Alongside client projects, we build and run our own products — starting with a CRM and
          invoicing workspace for freelancers and solo agency owners who do the selling and the
          delivery themselves.
        </p>
      </section>

      {PROJECTS.map((project) => (
        <ProductSection key={project.slug} project={project} />
      ))}

      {/* Closing CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50/60 border border-slate-100 rounded-3xl p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold text-slate-950">
            Want a product like this for your business?
          </h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            We design and build custom platforms — dashboards, internal tools, customer portals and
            billing workflows — on the same stack we use for our own products.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="bg-brand-blue hover:bg-brand-blue/95 text-white font-bold tracking-wide px-6 py-3.5 rounded-xl shadow-sm hover:shadow transition-all inline-flex items-center space-x-2 cursor-pointer"
            >
              <span>Talk to us about your build</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
