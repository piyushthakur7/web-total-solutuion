import { Metadata } from 'next';
import WorkView from '../../src/components/work/WorkView';
import JsonLd, { breadcrumbSchema } from '../../src/components/JsonLd';
import { WORK_CASE_STUDIES } from '../../src/work';

const url = 'https://www.webtotalsolution.com/work';
const title = 'Selected Work — Product, UI/UX & Web Case Studies';
const description =
  'Selected case studies from Web Total Solution: products and websites where strategy, design and engineering came together to solve meaningful business problems.';

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
