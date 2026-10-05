import { HERO_IMAGES } from "../../src/stockImages";
import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import {
  BlogListItem,
  blogByline,
  formatBlogDate,
  getPublishedBlogs,
} from "../../src/utils/insforge/blogs";
import {
  PageIntro,
  SectionHeading,
  TextLink,
} from "../../src/components/StudioPrimitives";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Practical notes on websites, messaging, performance and conversion paths from Web Total Solution.",
  alternates: {
    canonical: "https://www.webtotalsolution.com/blog",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.webtotalsolution.com/blog",
    siteName: "Web Total Solution",
    title: "Blog & Insights | Web Total Solution",
    description:
      "Practical notes on websites, messaging, performance and conversion paths from Web Total Solution.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Web Total Solution blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Insights | Web Total Solution",
    description:
      "Practical notes on websites, messaging, performance and conversion paths from Web Total Solution.",
    images: ["/og-image.png"],
  },
};

export const revalidate = 60;

function excerptFor(blog: { excerpt: string | null; title: string }) {
  if (blog.excerpt) return blog.excerpt;
  return `Read “${blog.title}” on the Web Total Solution blog.`;
}

function Meta({ blog }: { blog: BlogListItem }) {
  return (
    <p className="text-sm text-graphite">
      <time dateTime={blog.publish_date || blog.created_at}>
        {formatBlogDate(blog.publish_date || blog.created_at)}
      </time>
      <span aria-hidden="true">, </span>
      <span>by {blogByline(blog.author).name}</span>
    </p>
  );
}

function Cover({ blog, priority }: { blog: BlogListItem; priority?: boolean }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] border border-ink/10 bg-deep">
      {blog.image_url && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={blog.image_url}
          alt=""
          width={1200}
          height={750}
          loading={priority ? "eager" : "lazy"}
          className="size-full object-cover"
        />
      )}
    </div>
  );
}

const elsewhere = [
  {
    href: "/work",
    title: "Case studies",
    copy: "Four projects with the design decisions explained.",
  },
  {
    href: "/pricing",
    title: "Pricing",
    copy: "Starting prices and what changes a quote.",
  },
  {
    href: "/services",
    title: "Services",
    copy: "Who each service is for and what you receive.",
  },
];

export default async function BlogPage() {
  const blogs = await getPublishedBlogs();
  const [lead, ...rest] = blogs;

  return (
    <div className="bg-paper pb-16 text-ink sm:pb-24">
      <PageIntro
        compact
        label="Insights"
        image={HERO_IMAGES.studio}
        title="Notes on building websites that explain things clearly"
        description="We publish when we have something useful to say, so this is a short list."
      />
      <div className="studio-container pt-10 sm:pt-14">
        {!lead ? (
          <SectionHeading
            heading="Nothing published yet"
            intro="The first article is being written. In the meantime, the pages below answer the questions we are asked most."
          />
        ) : (
          <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
            <Link
              href={`/blog/${lead.slug}`}
              className="block lg:col-span-7"
              tabIndex={-1}
              aria-hidden="true"
            >
              <Cover blog={lead} priority />
            </Link>
            <div className="lg:col-span-5">
              <Meta blog={lead} />
              <h2 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1]">
                <Link
                  href={`/blog/${lead.slug}`}
                  className="underline-offset-4 hover:underline"
                >
                  {lead.title}
                </Link>
              </h2>
              <p className="mt-4 max-w-[54ch] text-[16px] leading-relaxed text-graphite">
                {excerptFor(lead)}
              </p>
              <Link
                href={`/blog/${lead.slug}`}
                className="text-link mt-5 inline-flex min-h-11 items-center gap-2 text-sm"
              >
                Read the article
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
        )}

        {rest.length > 0 && (
          <ul className="mt-14 grid gap-x-8 gap-y-12 border-t border-ink/15 pt-12 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((blog) => (
              <li key={blog.id}>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="block"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <Cover blog={blog} />
                </Link>
                <div className="mt-4">
                  <Meta blog={blog} />
                </div>
                <h2 className="mt-2 font-display text-2xl leading-tight">
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="underline-offset-4 hover:underline"
                  >
                    {blog.title}
                  </Link>
                </h2>
                <p className="mt-2 line-clamp-3 text-[15px] leading-relaxed text-graphite">
                  {excerptFor(blog)}
                </p>
              </li>
            ))}
          </ul>
        )}

        <section className="mt-16 border-t border-ink/15 pt-10 sm:mt-20">
          <SectionHeading heading="Elsewhere on the site" />
          <ul className="mt-6 grid gap-x-10 md:grid-cols-3">
            {elsewhere.map((item) => (
              <li key={item.href} className="border-t border-ink/15 py-4">
                <TextLink href={item.href}>{item.title}</TextLink>
                <p className="mt-1 text-[15px] leading-relaxed text-graphite">
                  {item.copy}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
