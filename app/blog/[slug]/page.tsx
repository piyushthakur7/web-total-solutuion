import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  blogByline,
  formatBlogDate,
  getBlogBySlug,
  wasRevised,
} from "../../../src/utils/insforge/blogs";
import JsonLd, { breadcrumbSchema } from "../../../src/components/JsonLd";
import FinalCTA from "../../../src/components/FinalCTA";
import {
  PageIntro,
  TextLink,
} from "../../../src/components/StudioPrimitives";
import { HERO_IMAGES } from "../../../src/stockImages";
import { htmlToPlainText, toArticleHtml } from "../../../src/utils/richText";

export const revalidate = 60;

function plainExcerpt(blog: { excerpt: string | null; content: string }) {
  if (blog.excerpt) return blog.excerpt.slice(0, 160);
  return htmlToPlainText(blog.content).slice(0, 160);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return { title: "Post Not Found" };
  }

  const description = plainExcerpt(blog);
  const url = `https://www.webtotalsolution.com/blog/${slug}`;
  const byline = blogByline(blog.author);

  return {
    title: blog.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: blog.title,
      description,
      url,
      siteName: "Web Total Solution",
      locale: "en_IN",
      type: "article",
      publishedTime: blog.publish_date,
      modifiedTime: blog.updated_at,
      authors: [byline.name],
      images: blog.image_url
        ? [{ url: blog.image_url, alt: blog.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description,
      images: blog.image_url ? [blog.image_url] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const url = `https://www.webtotalsolution.com/blog/${slug}`;
  const byline = blogByline(blog.author);

  return (
    <div className="bg-paper pb-16 text-ink sm:pb-24">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.title,
            description: plainExcerpt(blog),
            datePublished: blog.publish_date,
            dateModified: blog.updated_at,
            mainEntityOfPage: url,
            image: blog.image_url ?? undefined,
            author: {
              "@type": byline.isPerson ? "Person" : "Organization",
              name: byline.name,
            },
            publisher: {
              "@type": "Organization",
              name: "Web Total Solution",
              url: "https://www.webtotalsolution.com/",
            },
          },
          breadcrumbSchema([
            { name: "Home", url: "https://www.webtotalsolution.com/" },
            { name: "Blog", url: "https://www.webtotalsolution.com/blog" },
            { name: blog.title, url },
          ]),
        ]}
      />

      <PageIntro
        compact
        label="Insights"
        title={blog.title}
        description={
          <>
            <time dateTime={blog.publish_date}>
              Published {formatBlogDate(blog.publish_date || blog.created_at)}
            </time>
            {wasRevised(blog) && (
              <>
                <span aria-hidden="true">. </span>
                <time dateTime={blog.updated_at}>
                  Updated {formatBlogDate(blog.updated_at)}
                </time>
              </>
            )}
            <span aria-hidden="true">. </span>
            By {byline.name}
          </>
        }
        image={HERO_IMAGES.studio}
      >
        <Link
          href="/blog"
          className="inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4"
        >
          All insights
        </Link>
      </PageIntro>

      <article className="studio-container pt-10 sm:pt-14">
        {blog.image_url && (
          <div className="aspect-video max-w-[980px] overflow-hidden rounded-[20px] border border-ink/10 bg-deep">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={blog.image_url}
              alt=""
              width={1280}
              height={720}
              className="size-full object-cover"
            />
          </div>
        )}

        <div
          className="long-form mt-10"
          dangerouslySetInnerHTML={{ __html: toArticleHtml(blog.content) }}
        />

        <aside className="mt-12 max-w-[68ch] border-t border-ink/15 pt-6">
          <p className="text-sm font-semibold">Related</p>
          <div className="mt-1 flex flex-wrap gap-x-7 gap-y-1">
            <TextLink href="/business-website-development">
              Marketing website service
            </TextLink>
            <TextLink href="/work">Case studies</TextLink>
          </div>
        </aside>
      </article>

      <div className="mt-14 sm:mt-20">
        <FinalCTA
          headline="Working on a website like this?"
          text="Tell us what the site needs to explain and who it is for. You will get the scope, price and timeline in writing."
        />
      </div>
    </div>
  );
}
