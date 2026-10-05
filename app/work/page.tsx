import { Metadata } from 'next';
import WorkView from '../../src/components/work/WorkView';
import JsonLd, { breadcrumbSchema } from '../../src/components/JsonLd';
import { WORK_CASE_STUDIES } from '../../src/work';

const url = 'https://www.webtotalsolution.com/work';

// The list of other live client sites is served from InsForge; re-check every 5 minutes.
export const revalidate = 300;
const title = 'Selected Work — Product, UI/UX & Web Case Studies';
const description =
  'Case studies from Web Total Solution: our own product, WTS CRM, and three client websites, each with the design decisions explained and the delivered scope listed.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url,
    siteName: 'Web Total Solution',
    title: `${title} | Web Total Solution`,
    description,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Web Total Solution selected work' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | Web Total Solution`,
    description,
    images: ['/og-image.png'],
  },
};

export default function Work() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: 'https://www.webtotalsolution.com/' },
            { name: 'Work', url },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Selected Work — Web Total Solution',
            url,
            hasPart: WORK_CASE_STUDIES.map((study) => ({
              '@type': 'CreativeWork',
              name: study.name,
              description: study.summary,
              url: `${url}/${study.slug}`,
            })),
          },
        ]}
      />
      <WorkView />
    </>
  );
}
