import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { getBlogBySlug } from '../../../src/utils/insforge/blogs';
import JsonLd, { breadcrumbSchema } from '../../../src/components/JsonLd';

export const revalidate = 60;

function plainExcerpt(blog: { excerpt: string | null; content: string }) {
  if (blog.excerpt) return blog.excerpt.slice(0, 160);
  return blog.content.replace(/<[^>]+>/g, '').slice(0, 160);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return { title: 'Post Not Found' };
  }

  const description = plainExcerpt(blog);
  const url = `https://www.webtotalsolution.com/blog/${slug}`;

  return {
    title: blog.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: blog.title,
      description,
      url,
      siteName: 'Web Total Solution',
      locale: 'en_IN',
      type: 'article',
      publishedTime: blog.publish_date,
      modifiedTime: blog.updated_at,
      authors: blog.author ? [blog.author] : undefined,
      images: blog.image_url ? [{ url: blog.image_url, alt: blog.title }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description,
      images: blog.image_url ? [blog.image_url] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const url = `https://www.webtotalsolution.com/blog/${slug}`;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: blog.title,
            description: plainExcerpt(blog),
            datePublished: blog.publish_date,
            dateModified: blog.updated_at,
            mainEntityOfPage: url,
            image: blog.image_url ?? undefined,
            author: {
              '@type': blog.author ? 'Person' : 'Organization',
              name: blog.author || 'Web Total Solution',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Web Total Solution',
              url: 'https://www.webtotalsolution.com/',
            },
          },
          breadcrumbSchema([
            { name: 'Home', url: 'https://www.webtotalsolution.com/' },
            { name: 'Blog', url: 'https://www.webtotalsolution.com/blog' },
            { name: blog.title, url },
          ]),
        ]}
      />

      <Link
        href="/blog"
        className="inline-flex items-center text-sm font-semibold text-brand-blue hover:underline mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to all posts
      </Link>

      <div className="mb-10 space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {blog.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 border-b border-slate-100 pb-6">
          <span className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-brand-blue" />
            <span>
              {new Date(blog.publish_date || blog.created_at).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </span>
          {blog.author && (
            <span className="flex items-center space-x-2">
              <User className="w-4 h-4 text-brand-blue" />
              <span className="font-medium text-slate-700">{blog.author}</span>
            </span>
          )}
        </div>
      </div>

      {blog.image_url && (
        <div className="mb-12 rounded-3xl overflow-hidden bg-slate-100 aspect-video shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={blog.image_url} alt={blog.title} className="w-full h-full object-cover" />
        </div>
      )}

      <article className="prose prose-slate prose-lg max-w-none hover:prose-a:text-brand-blue">
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </article>

      <div className="mt-16 pt-8 border-t border-slate-200 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Need a website that brings in customers?</h2>
        <p className="text-slate-600 text-sm max-w-lg mx-auto">
          Book a free consultation and we will tell you exactly what your business needs online.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-brand-blue hover:bg-brand-blue/90 text-white px-7 py-3.5 rounded-xl font-bold tracking-wide shadow-md transition-all"
        >
          Get Free Consultation
        </Link>
      </div>
    </div>
  );
}
