import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CaseStudyView from '../../../src/components/work/CaseStudyView';
import JsonLd, { breadcrumbSchema } from '../../../src/components/JsonLd';
import { WORK_SLUGS, getWorkCaseStudy } from '../../../src/work';

const BASE_URL = 'https://www.webtotalsolution.com';

// Only the case studies in src/work.ts exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return WORK_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getWorkCaseStudy(slug);
  if (!study) return {};

  const url = `${BASE_URL}/work/${study.slug}`;
  const ogTitle = `${study.meta.title} | Web Total Solution`;
  // Use the project screenshot where one exists; otherwise the site default.
  const image =
    study.visual.type === 'screenshot'
      ? { url: study.visual.src, width: 1280, height: 800, alt: study.visual.alt }
      : { url: '/og-image.png', width: 1200, height: 630, alt: `${study.name} case study` };

  return {
    title: study.meta.title,
    description: study.meta.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url,
      siteName: 'Web Total Solution',
      title: ogTitle,
      description: study.meta.description,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: study.meta.description,
      images: [image.url],
    },
  };
}

export default async function WorkCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getWorkCaseStudy(slug);
  if (!study) notFound();

  const url = `${BASE_URL}/work/${study.slug}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Work', url: `${BASE_URL}/work` },
            { name: study.name, url },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: `${study.name} case study`,
            headline: study.positioning,
            description: study.meta.description,
            url,
            about: study.websiteUrl,
            creator: { '@id': `${BASE_URL}/#organization` },
          },
        ]}
      />
      <CaseStudyView study={study} />
    </>
  );
}
