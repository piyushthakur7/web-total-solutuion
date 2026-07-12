"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '../../../../src/utils/supabase/client';
import { ArrowLeft, Save, Image as ImageIcon, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function CreateBlog() {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [publishStatus, setPublishStatus] = useState<'draft' | 'immediate' | 'schedule'>('draft');
  const [publishDate, setPublishDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [saving, setSaving] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    // Auto-generate slug
    setSlug(newTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
  };

  // Handle image url change
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

      // Insert blog
      const { error } = await supabase.from('blogs').insert({
        title,
        slug,
        content,
        author,
        published: finalPublished,
        publish_date: finalPublishDate,
        image_url: final_image_url
      });

      if (error) throw error;

      router.push('/blog/admin');
      router.refresh();
    } catch (error: any) {
      alert(`Error saving blog: ${error.message}`);
      setSaving(false);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Link href="/blog/admin" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-brand-blue mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
      </Link>
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Create New Post</h1>
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
                placeholder="The Future of Web Development"
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
                placeholder="John Doe"
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
              placeholder="<p>Start writing your blog post here...</p>"
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
            <span>{saving ? 'Saving...' : 'Save Post'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
