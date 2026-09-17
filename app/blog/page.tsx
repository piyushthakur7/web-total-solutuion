import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { getPublishedBlogs } from '../../src/utils/insforge/blogs';

export const metadata: Metadata = {
  title: 'Blog & Insights',
  description:
    'Practical insights on business websites, SEO, e-commerce and digital marketing from the Web Total Solution team.',
  alternates: {
    canonical: 'https://www.webtotalsolution.com/blog',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.webtotalsolution.com/blog',
    siteName: 'Web Total Solution',
    title: 'Blog & Insights | Web Total Solution',
    description:
      'Practical insights on business websites, SEO, e-commerce and digital marketing from the Web Total Solution team.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Web Total Solution blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog & Insights | Web Total Solution',
    description:
      'Practical insights on business websites, SEO, e-commerce and digital marketing from the Web Total Solution team.',
    images: ['/og-image.png'],
  },
};

export const revalidate = 60;

function excerptFor(blog: { excerpt: string | null; title: string }) {
  if (blog.excerpt) return blog.excerpt;
  return `Read “${blog.title}” on the Web Total Solution blog.`;
}

export default async function BlogPage() {
  const blogs = await getPublishedBlogs();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
          Insights & Updates
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
          Our Latest Thoughts
        </h1>
        <p className="text-slate-600 text-sm">
          Insights, strategies and updates from the Web Total Solution design and engineering team.
        </p>
      </div>

      {blogs.length === 0 ? (
        /* Nothing published yet. Rather than show a bare "no posts" line, point
           the visitor at the pages that can actually answer their question. */
        <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Our first articles are being written
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed max-w-xl mx-auto">
            We are putting together practical guides on what a business website should cost, how to
            rank locally in search, and what to fix first on an existing site. In the meantime, the
            answers most business owners are looking for are already on the site.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-left">
            {[
              {
                href: '/pricing',
                title: 'What it costs',
                copy: 'Package ranges and a scope estimator you can use right now.',
              },
              {
                href: '/portfolio',
                title: 'Work we have delivered',
                copy: 'Live client websites you can open and judge for yourself.',
              },
              {
                href: '/contact',
                title: 'Ask us directly',
                copy: 'A free consultation and a written quote within 24 hours.',
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="bg-white border border-slate-100 rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all group"
              >
                <span className="block text-sm font-bold text-slate-900 mb-1.5">{card.title}</span>
                <span className="block text-xs text-slate-600 leading-relaxed mb-3">{card.copy}</span>
                <span className="inline-flex items-center text-xs font-bold text-brand-blue">
                  Open
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.slug}`} className="group cursor-pointer">
              <article className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                  {blog.image_url ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={blog.image_url}
                      alt={blog.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    /* No cover image on the post — show a branded panel rather
                       than an empty grey box with "No image" written in it. */
                    <div className="w-full h-full bg-gradient-to-br from-slate-900 to-brand-blue flex items-center justify-center px-6">
                      <span className="text-white/90 text-xs font-extrabold uppercase tracking-[0.2em] text-center">
                        Web Total Solution
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center space-x-4 text-xs text-slate-500 mb-3">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>
                        {new Date(blog.publish_date || blog.created_at).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </span>
                    {blog.author && (
                      <span className="flex items-center space-x-1">
                        <User className="w-3.5 h-3.5" />
                        <span>{blog.author}</span>
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-blue transition-colors line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-grow">
                    {excerptFor(blog)}
                  </p>
                  <span className="flex items-center text-brand-blue font-semibold text-sm">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
