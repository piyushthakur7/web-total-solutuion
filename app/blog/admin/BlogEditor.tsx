"use client";

import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Loader2, Save } from 'lucide-react';
import { saveBlog, type BlogInput } from './actions';
import RichTextEditor from './RichTextEditor';
import { cleanHtml } from './htmlClean';
import { htmlToPlainText, toArticleHtml } from '../../../src/utils/richText';

export interface BlogEditorInitial {
  id?: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  imageUrl: string;
  publishStatus: 'draft' | 'immediate' | 'schedule';
  publishDate: string;
}

const EMPTY: BlogEditorInitial = {
  title: '',
  slug: '',
  content: '',
  excerpt: '',
  author: '',
  imageUrl: '',
  publishStatus: 'draft',
  publishDate: '',
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export default function BlogEditor({
  initial = EMPTY,
  heading,
  submitLabel,
}: {
  initial?: BlogEditorInitial;
  heading: string;
  submitLabel: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState<BlogEditorInitial>(initial);
  // Only auto-derive the slug for new posts — changing it on an existing post
  // would break its published URL.
  const [autoSlug, setAutoSlug] = useState(!initial.id);

  const update = <K extends keyof BlogEditorInitial>(key: K, value: BlogEditorInitial[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleTitleChange = (value: string) => {
    setForm((prev) => ({
      ...prev,
      title: value,
      slug: autoSlug ? slugify(value) : prev.slug,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // The editable surface is not a form control, so it cannot carry `required`.
    // Normalising first also means a body pasted as plain text is stored as
    // markup rather than as a wall of text.
    const content = cleanHtml(toArticleHtml(form.content));

    if (!htmlToPlainText(content)) {
      setError('The post needs some content before it can be saved.');
      return;
    }

    const payload: BlogInput = {
      id: form.id,
      title: form.title,
      slug: form.slug,
      content,
      excerpt: form.excerpt,
      author: form.author,
      imageUrl: form.imageUrl,
      publishStatus: form.publishStatus,
      publishDate: form.publishDate,
    };

    startTransition(async () => {
      const result = await saveBlog(payload);
      if (!result.ok) {
        setError(result.error);
        return;
      }
      router.push('/blog/admin');
      router.refresh();
    });
  };

  const fieldClass =
    'w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue';
  const labelClass = 'text-xs font-bold text-slate-700 uppercase tracking-wide';

  return (
    <div className="p-6 sm:p-8 max-w-4xl mx-auto">
      <Link
        href="/blog/admin"
        className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-brand-blue mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
      </Link>

      <h1 className="text-2xl font-bold text-slate-900 mb-8">{heading}</h1>

      {error && (
        <div role="alert" className="mb-6 bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5 md:col-span-2">
              <label htmlFor="blog-title" className={labelClass}>Title *</label>
              <input
                id="blog-title"
                type="text"
                required
                value={form.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className={fieldClass}
                placeholder="How a professional website brings in more customers"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="blog-slug" className={labelClass}>URL Slug *</label>
              <input
                id="blog-slug"
                type="text"
                required
                value={form.slug}
                onChange={(e) => {
                  setAutoSlug(false);
                  update('slug', slugify(e.target.value));
                }}
                className={`${fieldClass} bg-slate-50`}
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="blog-author" className={labelClass}>Author</label>
              <input
                id="blog-author"
                type="text"
                value={form.author}
                onChange={(e) => update('author', e.target.value)}
                className={fieldClass}
                placeholder="Web Total Solution"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="blog-excerpt" className={labelClass}>
              Excerpt <span className="text-slate-400 normal-case font-medium">(used as the meta description)</span>
            </label>
            <textarea
              id="blog-excerpt"
              rows={2}
              maxLength={200}
              value={form.excerpt}
              onChange={(e) => update('excerpt', e.target.value)}
              className={`${fieldClass} resize-none`}
              placeholder="A one or two sentence summary for search results and social shares."
            />
            <p className="text-[11px] text-slate-400">{form.excerpt.length}/200 characters</p>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="blog-image" className={labelClass}>Cover Image URL</label>
            <input
              id="blog-image"
              type="url"
              value={form.imageUrl}
              onChange={(e) => update('imageUrl', e.target.value)}
              className={fieldClass}
              placeholder="https://images.pexels.com/..."
            />
            {form.imageUrl && (
              <div className="mt-4 rounded-xl overflow-hidden border border-slate-200 aspect-[21/9]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={form.imageUrl} alt="Cover preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          <div className="space-y-1.5">
            <span className={labelClass}>Content *</span>
            <p className="text-[11px] text-slate-400 pb-1">
              Paste straight from Word or Google Docs — bold, headings, lists and links are kept.
            </p>
            <RichTextEditor
              value={form.content}
              onChange={(html) => update('content', html)}
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end gap-4 pt-4 border-t border-slate-100">
            <div className="space-y-1.5 flex-1 max-w-xs">
              <label htmlFor="blog-status" className={labelClass}>Publish Status</label>
              <select
                id="blog-status"
                value={form.publishStatus}
                onChange={(e) => update('publishStatus', e.target.value as BlogEditorInitial['publishStatus'])}
                className={`${fieldClass} py-2.5`}
              >
                <option value="draft">Save as Draft</option>
                <option value="immediate">Publish Immediately</option>
                <option value="schedule">Schedule for Later</option>
              </select>
            </div>

            {form.publishStatus === 'schedule' && (
              <div className="space-y-1.5 flex-1 max-w-xs">
                <label htmlFor="blog-date" className={labelClass}>Schedule Date & Time</label>
                <input
                  id="blog-date"
                  type="datetime-local"
                  required
                  value={form.publishDate}
                  onChange={(e) => update('publishDate', e.target.value)}
                  className={`${fieldClass} py-2.5`}
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isPending}
            className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-3 rounded-xl text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all flex items-center space-x-2 disabled:opacity-50"
          >
            {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            <span>{isPending ? 'Saving…' : submitLabel}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
