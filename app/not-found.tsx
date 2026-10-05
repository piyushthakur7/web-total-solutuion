import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The requested page could not be found.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="studio-container flex min-h-[60vh] flex-col justify-center py-20">
      <p className="text-sm font-semibold text-brand-blue">Error 404</p>
      <h1 className="mt-3 max-w-xl font-display text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.06] text-ink">
        This page does not exist
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-graphite">
        The address may be outdated or mistyped. These pages are a good place to pick up again.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-ink">
          Go to the homepage
        </Link>
        <Link href="/work" className="btn btn-line">
          View selected work
        </Link>
        <Link href="/services" className="btn btn-line">
          Browse services
        </Link>
      </div>
    </section>
  );
}
