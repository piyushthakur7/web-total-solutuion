"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '../../../../../src/utils/supabase/client';
import { ArrowLeft, Save, Image as ImageIcon, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function EditBlog({ params }: { params: { id: string } }) {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [published, setPublished] = useState(false);
  
  const [imageUrl, setImageUrl] = useState<string>('');
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const fetchBlog = async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', params.id)
        .single();

      if (data && !error) {
        setTitle(data.title);
        setSlug(data.slug);
        setContent(data.content);
        setAuthor(data.author || '');
        setPublished(data.published);
        setImageUrl(data.image_url || '');
      } else {
        alert('Blog not found or error loading.');
        router.push('/blog/admin');
      }
      setLoading(false);
    };

    fetchBlog();
  }, [params.id, supabase, router]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      let final_image_url = imageUrl || null;

      // Update blog
      const { error } = await supabase
        .from('blogs')
        .update({
          title,
          slug,
          content,
          author,
          published,
          image_url: final_image_url
        })
        .eq('id', params.id);

      if (error) throw error;

      router.push('/blog/admin');
      router.refresh();
    } catch (error: any) {
      alert(`Error saving blog: ${error.message}`);
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-brand-blue" />
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Link href="/blog/admin" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-brand-blue mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
      </Link>
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Edit Post</h1>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5 md:col-span-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Title *</label>
              <input
                type="text"
                required
                value={title}
                onChange={handleTitleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">URL Slug *</label>
              <input
                type="text"
                required
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Author</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Cover Image URL</label>
            <input
              type="text"
              value={imageUrl}
              onChange={handleImageUrlChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
              placeholder="https://images.pexels.com/..."
            />
            {imageUrl && (
              <div className="mt-4 rounded-xl overflow-hidden border border-slate-200 aspect-[21/9] relative">
                 <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Content (HTML or Text) *</label>
            <textarea
              required
              rows={15}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue font-mono"
            />
          </div>

          <div className="flex items-center space-x-3 pt-4 border-t border-slate-100">
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
              <span className="ml-3 text-sm font-medium text-slate-700">Published</span>
            </label>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-3 rounded-xl text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all flex items-center space-x-2 disabled:opacity-50"
          >
            {saving ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            <span>{saving ? 'Saving...' : 'Update Post'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
