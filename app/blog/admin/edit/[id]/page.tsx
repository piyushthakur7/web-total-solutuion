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
  const [publishStatus, setPublishStatus] = useState<'draft' | 'immediate' | 'schedule'>('draft');
  const [publishDate, setPublishDate] = useState('');
  
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
        // Calculate initial status
        if (!data.published) {
          setPublishStatus('draft');
        } else if (data.publish_date && new Date(data.publish_date) > new Date()) {
          setPublishStatus('schedule');
          // Format date for datetime-local input (YYYY-MM-DDThh:mm)
          const d = new Date(data.publish_date);
          const formatted = new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
          setPublishDate(formatted);
        } else {
          setPublishStatus('immediate');
        }
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

      let finalPublished = false;
      let finalPublishDate = new Date().toISOString();

      if (publishStatus === 'immediate') {
        finalPublished = true;
      } else if (publishStatus === 'schedule') {
        finalPublished = true;
        if (publishDate) {
          finalPublishDate = new Date(publishDate).toISOString();
        }
      }

      // Update blog
      const { error } = await supabase
        .from('blogs')
        .update({
          title,
          slug,
          content,
          author,
          published: finalPublished,
          publish_date: finalPublishDate,
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

          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4 border-t border-slate-100">
            <div className="space-y-1.5 flex-1 max-w-xs">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Publish Status</label>
              <select
                value={publishStatus}
                onChange={(e) => setPublishStatus(e.target.value as any)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
              >
                <option value="draft">Save as Draft</option>
                <option value="immediate">Publish Immediately</option>
                <option value="schedule">Schedule for Later</option>
              </select>
            </div>

            {publishStatus === 'schedule' && (
              <div className="space-y-1.5 flex-1 max-w-xs transition-all animate-in fade-in slide-in-from-top-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Schedule Date & Time</label>
                <input
                  type="datetime-local"
                  required
                  value={publishDate}
                  onChange={(e) => setPublishDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                />
              </div>
            )}
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
