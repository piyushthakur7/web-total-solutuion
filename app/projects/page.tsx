import { Metadata } from 'next';
import ProjectsView from '../../src/components/ProjectsView';
import JsonLd, { breadcrumbSchema, faqSchema } from '../../src/components/JsonLd';
import { PROJECTS, PROJECT_PAGE_FAQS, PROJECT_PAGE_FEATURES, WTS_CRM } from '../../src/projects';

const url = 'https://www.webtotalsolution.com/projects';

// Absolute so the product name leads the SERP snippet instead of being pushed
// past the truncation point by the site-wide title template.
const TITLE = 'WTS CRM — Leads, Quotations & Invoicing for Indian Service Businesses';
const DESCRIPTION =
  'WTS CRM connects leads, follow-ups, quotations, projects, GST invoices and payments for Indian service businesses. Plans from ₹499/month. Free 3-day trial.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: WTS_CRM.keywords,
  alternates: { canonical: url },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url,
    siteName: 'Web Total Solution',
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Projects() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: 'https://www.webtotalsolution.com/' },
            { name: 'Products', url },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Products by Web Total Solution',
            description: DESCRIPTION,
            url,
            inLanguage: 'en-IN',
            isPartOf: {
              '@type': 'WebSite',
              name: 'Web Total Solution',
              url: 'https://www.webtotalsolution.com/',
            },
          },
          ...PROJECTS.map((project) => ({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: project.name,
            alternateName: project.headline,
            applicationCategory: 'BusinessApplication',
            applicationSubCategory: 'CRM',
            description: project.positioning,
            // The product's canonical home is its own domain; this page is the
            // publisher's write-up of it, which is what mainEntityOfPage says.
            url: project.siteUrl ?? url,
            mainEntityOfPage: url,
            sameAs: project.siteUrl ? [project.siteUrl] : undefined,
            operatingSystem: 'Web',
            inLanguage: 'en-IN',
            featureList: PROJECT_PAGE_FEATURES.map((feature) => feature.title),
            audience: {
              '@type': 'BusinessAudience',
              name: 'Indian service businesses and agency teams',
            },
            areaServed: { '@type': 'Country', name: 'India' },
            publisher: {
              '@type': 'Organization',
              name: 'Web Total Solution',
              url: 'https://www.webtotalsolution.com/',
            },
            // The free trial is displayed on the page but is not a paid
            // subscription offer. No aggregateRating is emitted without reviews.
            offers: project.plans.filter((plan) => !plan.isTrial).map((plan) => ({
              '@type': 'Offer',
              name: plan.name,
              price: plan.price.replace(/[^0-9.]/g, ''),
              priceCurrency: 'INR',
              category: 'subscription',
              availability: 'https://schema.org/InStock',
              url: project.siteUrl ?? url,
            })),
          })),
          // FAQ answers are rendered visibly on the page, which is what Google
          // requires for FAQ rich results.
          faqSchema(PROJECT_PAGE_FAQS),
        ]}
      />
      <ProjectsView />
    </>
  );
}
