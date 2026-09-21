import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The requested page could not be found.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[65vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-sm font-extrabold uppercase tracking-widest text-brand-blue">404 error</p>
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
        This page does not exist
      </h1>
      <p className="mt-5 max-w-xl text-slate-600">
        The address may be outdated or mistyped. Use the links below to return to a working page.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-xl bg-brand-blue px-6 py-3 font-bold text-white transition-colors hover:bg-brand-blue/90"
        >
          Go to homepage
        </Link>
        <Link
          href="/services"
          className="rounded-xl border border-slate-200 px-6 py-3 font-bold text-slate-800 transition-colors hover:bg-slate-50"
        >
          Browse services
        </Link>
      </div>
    </section>
  );
}
