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
        <div className="text-center py-16 bg-slate-50 border border-dashed border-slate-200 rounded-3xl">
          <p className="text-slate-500 text-sm">No posts published yet. Check back soon.</p>
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
                    <div className="w-full h-full flex items-center justify-center text-slate-300 text-sm">
                      No image
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
