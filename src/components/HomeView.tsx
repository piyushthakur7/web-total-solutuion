import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { getPortfolioProjects } from '../utils/insforge/portfolio';
import {
  GOOGLE_RATING,
  GOOGLE_REVIEWS_URL,
  INTERNATIONAL_PAGE_PATH,
  STARTUP_PACKAGES,
} from '../siteContent';
import { WORK_CASE_STUDIES } from '../work';
import WireframeReveal from './WireframeReveal';

const FAQSection = dynamic(() => import('./FAQSection'));
const Testimonials = dynamic(() => import('./Testimonials'));
const ProcessSection = dynamic(() => import('./ProcessSection'));
const FinalCTA = dynamic(() => import('./FinalCTA'));

/** What the studio does on a project. */
const CAPABILITIES = [
  {
    title: 'Strategy',
    description:
      'Conversion research, positioning and page structure, settled before a single screen is designed.',
    covers: 'Research, messaging, wireframes',
  },
  {
    title: 'UI/UX design',
    description:
      'Interface design drawn for your product and brand. No templates and no recycled layouts.',
    covers: 'UX flows, UI design, design system',
  },
  {
    title: 'Engineering',
    description:
      'Next.js builds with a CMS and third-party integrations, tuned for Core Web Vitals.',
    covers: 'Next.js, CMS, API integrations',
  },
  {
    title: 'Launch and growth',
    description:
      'SEO foundation, analytics and conversion tracking set up from day one, with support after go-live.',
    covers: 'SEO, analytics, support',
  },
];

/** Case studies with a real screenshot; our own SaaS leads for a startup audience. */
const WORK = WORK_CASE_STUDIES.flatMap((study) =>
  study.visual.type === 'screenshot' ? [{ ...study, shot: study.visual }] : []
).sort((a, b) => Number(b.slug === 'wts-crm') - Number(a.slug === 'wts-crm'));

/** The hero compares a wireframe with this shipped page. */
const HERO_STUDY = WORK[0];

const textLink =
  'font-semibold text-ink underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-ink';

export default async function HomeView() {
  // Client names come from the portfolio table, so the homepage stays in sync
  // whenever work is added or removed in the backend.
  const projects = await getPortfolioProjects();

  return (
    <div className="overflow-x-hidden bg-paper text-ink">
      {/* 1. Hero */}
      <section>
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8 lg:pt-20">
          <h1 className="max-w-6xl font-display text-hero">
            The website your startup raises, hires and sells on.
          </h1>

          <div className="mt-8 grid gap-7 lg:mt-12 lg:grid-cols-12 lg:items-end lg:gap-8">
            <p className="max-w-xl text-lg leading-relaxed text-graphite sm:text-xl lg:col-span-7">
              Strategy, UI/UX and high-performance Next.js development, from first wireframe to
              production launch.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
              <Link href="/contact" className="btn btn-ink">
                Book a strategy call
              </Link>
              <Link href="/work" className="btn btn-line">
                See the work
              </Link>
            </div>
          </div>

          {HERO_STUDY && (
            <div className="mt-12 sm:mt-16">
              <WireframeReveal
                src={HERO_STUDY.shot.src}
                alt={HERO_STUDY.shot.alt}
                siteLabel={HERO_STUDY.websiteLabel}
              />
            </div>
          )}

          {/* Figures match TRUST_STATS in siteContent — update both together. */}
          <p className="mt-12 max-w-3xl text-lg leading-relaxed text-ink sm:mt-16 sm:text-xl">
            More than 100 websites delivered across 30 industries, with a reply to every new
            enquiry within 24 hours.{' '}
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className={textLink}>
              Rated {GOOGLE_RATING} out of 5 on Google
            </a>
            .
          </p>
        </div>
      </section>

      {/* 2. Recent work */}
      <section className="border-t border-ink/15 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl font-display text-display">
              Products and platforms, live in production.
            </h2>
            <Link href="/work" className={`${textLink} self-start md:self-auto`}>
              All case studies
            </Link>
          </div>

          <div className="mt-10 grid gap-x-8 gap-y-12 md:mt-14 md:grid-cols-2 md:gap-y-16">
            {WORK.map((study) => (
              <Link key={study.slug} href={`/work/${study.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-ink/15 bg-white">
                  <Image
                    src={study.shot.src}
                    alt={study.shot.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-6">
                  <h3 className="font-display text-3xl sm:text-4xl">{study.name}</h3>
                  <p className="shrink-0 text-sm text-graphite">{study.category}</p>
                </div>
                <p className="mt-2 max-w-md text-base leading-relaxed text-graphite">
                  {study.headline}
                </p>
                <p className="mt-3 text-[15px] font-semibold underline decoration-ink/30 underline-offset-4 group-hover:decoration-ink">
                  Read the case study
                </p>
              </Link>
            ))}
          </div>

          {projects.length > 0 && (
            <p className="mt-16 max-w-5xl border-t border-ink/15 pt-8 text-base leading-relaxed text-graphite sm:mt-20">
              <span className="font-semibold text-ink">Also built for </span>
              {projects.map((project) => project.title).join(', ')}.
            </p>
          )}
        </div>
      </section>

      {/* 3. What we do */}
      <section className="bg-deep py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
            <h2 className="font-display text-display lg:col-span-7">
              One team, from positioning to production.
            </h2>
            <p className="max-w-md text-base leading-relaxed text-white/75 lg:col-span-5 lg:justify-self-end">
              Built for startups that care about conversion, not just aesthetics. The people who
              plan your pages are the people who design and ship them.
            </p>
          </div>

          <dl className="mt-12 grid gap-x-8 gap-y-10 border-t border-white/25 pt-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {CAPABILITIES.map((item) => (
              <div key={item.title}>
                <dt className="font-display text-3xl">{item.title}</dt>
                <dd className="mt-3 text-base leading-relaxed text-white/75">{item.description}</dd>
                <dd className="mt-4 text-sm text-brand-sky">{item.covers}</dd>
              </div>
            ))}
          </dl>

          <Link href="/services" className="btn btn-line-dark mt-12">
            Explore services
          </Link>
        </div>
      </section>

      {/* 4. Engagements — summary of /pricing */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl font-display text-display">
            Three ways to work together, each with a fixed written quote.
          </h2>

          <ul className="mt-10 border-t border-ink/15 sm:mt-14">
            {STARTUP_PACKAGES.map((pkg) => (
              <li key={pkg.name} className="border-b border-ink/15">
                <Link
                  href="/pricing"
                  className="group grid gap-2 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:py-8"
                >
                  <h3 className="font-display text-3xl decoration-2 underline-offset-4 group-hover:underline sm:col-span-5 sm:text-4xl">
                    {pkg.name}
                  </h3>
                  <p className="text-base leading-relaxed text-graphite sm:col-span-5">
                    {pkg.audience}
                  </p>
                  <p className="text-base font-semibold sm:col-span-2 sm:text-right">
                    From ${pkg.from.toLocaleString('en-US')}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-base text-graphite">
            Law firm in the US, UK or UAE?{' '}
            <Link href={INTERNATIONAL_PAGE_PATH} className={textLink}>
              See our law-firm websites
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 5. Process */}
      <ProcessSection
        heading="From first call to launch, in five steps."
        intro="You always know what is happening, what is next and what it costs. No surprises between the first call and go-live."
        ctaLabel="Book a discovery call"
      />

      {/* 6. Proof */}
      <Testimonials heading="Proof you can check yourself." />

      {/* 7. FAQ */}
      <FAQSection heading="Questions founders ask first." />

      {/* 8. Final CTA */}
      <div className="bg-white pb-16 sm:pb-24">
        <FinalCTA
          headline="Have a launch date? Let's work backwards from it."
          text="Tell us what you are building. You get a written scope, timeline and fixed quote before any work begins."
        />
      </div>
    </div>
  );
}
