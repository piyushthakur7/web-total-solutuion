import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '../src/components/StudioPrimitives';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The requested page could not be found.',
  robots: { index: false, follow: false },
};

const linkClass =
  'inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4';

export default function NotFound() {
  return (
    <PageIntro
      compact
      label="Error 404"
      title="This page does not exist"
      description="The address may be outdated or mistyped. These pages are a good place to pick up again."
    >
      <Link href="/" className="btn btn-paper">
        Go to the homepage
      </Link>
      <Link href="/work" className={linkClass}>
        View selected work
      </Link>
      <Link href="/services" className={linkClass}>
        Browse services
      </Link>
    </PageIntro>
  );
}
