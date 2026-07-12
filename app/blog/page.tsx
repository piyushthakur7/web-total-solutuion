import React from 'react';
import Link from 'next/link';
import { createClient } from '../../src/utils/supabase/server';
import { Calendar, User, ArrowRight } from 'lucide-react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Insights | Web Total Solution',
  description: 'Read the latest insights, tutorials, and news about web development, SaaS, e-commerce, and digital marketing.',
  alternates: {
    canonical: 'https://www.webtotalsolution.com/blog',
  },
};

export const revalidate = 60; // Revalidate every minute

export default async function BlogPage() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Blog System Pending Configuration</h1>
        <p className="text-slate-600 max-w-lg mx-auto">
          The blog feature has been built but is waiting for database configuration. Please set your <code>NEXT_PUBLIC_SUPABASE_URL</code> and <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> in the <code>.env.local</code> file to enable this feature.
        </p>
      </div>
    );
  }

  const supabase = await createClient();
  const { data: blogs, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('published', true)
    .lte('publish_date', new Date().toISOString())
    .order('publish_date', { ascending: false });

  if (error) {
    console.error("Supabase Error fetching blogs:", error);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">Insights & Updates</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
          Our Latest Thoughts
        </h1>
        <p className="text-slate-600 text-sm">
          Discover insights, strategies, and updates from the Web Total Solution engineering and design team.
        </p>
      </div>

      {error ? (
        <div className="text-center py-12 text-red-500">
          <p>Failed to load blogs. Please configure your database connection.</p>
        </div>
      ) : !blogs || blogs.length === 0 ? (
        <div className="text-center py-12 text-slate-500">
          <p>No blogs published yet. Check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.slug}`} className="group cursor-pointer">
              <article className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                  {blog.image_url ? (
                    <img 
                      src={blog.image_url} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                      No Image
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center space-x-4 text-xs text-slate-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{new Date(blog.publish_date || blog.created_at).toLocaleDateString()}</span>
                    </div>
                    {blog.author && (
                      <div className="flex items-center space-x-1">
                        <User className="w-3.5 h-3.5" />
                        <span>{blog.author}</span>
                      </div>
                    )}
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-blue transition-colors line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-grow">
                    {/* Crude extraction of text if html is saved, or just show text if markdown */}
                    {blog.content.replace(/<[^>]+>/g, '').substring(0, 150)}...
                  </p>
                  <div className="flex items-center text-brand-blue font-semibold text-sm">
                    Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
