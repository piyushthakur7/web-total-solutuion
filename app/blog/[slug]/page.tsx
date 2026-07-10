import React from 'react';
import { createClient } from '../../../src/utils/supabase/server';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const revalidate = 60;

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Blog System Pending Configuration</h1>
        <p className="text-slate-600 max-w-lg mx-auto mb-8">
          The blog feature has been built but is waiting for database configuration.
        </p>
        <Link href="/blog" className="text-brand-blue font-semibold hover:underline">
          Return to Blog
        </Link>
      </div>
    );
  }

  const supabase = await createClient();
  const { data: blog, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', params.slug)
    .eq('published', true)
    .single();

  if (error || !blog) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-brand-blue hover:underline mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to all posts
      </Link>
      
      <div className="mb-10 space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {blog.title}
        </h1>
        <div className="flex items-center space-x-6 text-sm text-slate-500 border-b border-slate-100 pb-6">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-brand-blue" />
            <span>{new Date(blog.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          {blog.author && (
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-brand-blue" />
              <span className="font-medium text-slate-700">{blog.author}</span>
            </div>
          )}
        </div>
      </div>

      {blog.image_url && (
        <div className="mb-12 rounded-3xl overflow-hidden bg-slate-100 aspect-video shadow-sm">
          <img 
            src={blog.image_url} 
            alt={blog.title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Basic content rendering. If using a rich text editor, this might need styling classes (like prose) */}
      <article className="prose prose-slate prose-lg max-w-none hover:prose-a:text-brand-blue">
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </article>
    </div>
  );
}
