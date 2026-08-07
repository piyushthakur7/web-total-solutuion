"use client";

import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Edit2, ExternalLink, Trash2 } from 'lucide-react';
import { deleteBlog, toggleBlogPublished } from './actions';

export interface AdminBlogRow {
  id: string;
  created_at: string;
  publish_date: string;
  title: string;
  slug: string;
  published: boolean;
}

export default function BlogTable({ blogs }: { blogs: AdminBlogRow[] }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const run = (action: () => Promise<{ ok: boolean; error?: string }>) => {
    setError(null);
    startTransition(async () => {
      const result = await action();
      if (!result.ok) {
        setError(result.error ?? 'Something went wrong.');
        return;
      }
      router.refresh();
    });
  };

  const isScheduled = (blog: AdminBlogRow) =>
    blog.published && new Date(blog.publish_date) > new Date();

  return (
    <div className="space-y-4">
      {error && (
        <div role="alert" className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-sm">
          {error}
        </div>
      )}

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-semibold">
                <th className="p-4 pl-6">Title</th>
                <th className="p-4">Status</th>
                <th className="p-4">Date</th>
                <th className="p-4 text-right pr-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-slate-500 text-sm">
                    No blog posts yet. Create your first one.
                  </td>
                </tr>
              ) : (
                blogs.map((blog) => (
                  <tr key={blog.id} className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors">
                    <td className="p-4 pl-6">
                      <div className="font-semibold text-slate-900">{blog.title}</div>
                      <div className="text-xs text-slate-500 mt-0.5">/{blog.slug}</div>
                    </td>
                    <td className="p-4">
                      <button
                        type="button"
                        disabled={isPending}
                        onClick={() => run(() => toggleBlogPublished(blog.id, !blog.published))}
                        className={`px-2.5 py-1 text-xs font-semibold rounded-full border transition-colors disabled:opacity-50 ${
                          blog.published
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
                            : 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100'
                        }`}
                      >
                        {blog.published ? (isScheduled(blog) ? 'Scheduled' : 'Published') : 'Draft'}
                      </button>
                    </td>
                    <td className="p-4 text-sm text-slate-500">
                      {new Date(blog.publish_date || blog.created_at).toLocaleDateString('en-IN')}
                    </td>
                    <td className="p-4 pr-6 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Link
                          href={`/blog/${blog.slug}`}
                          target="_blank"
                          className="p-2 text-slate-400 hover:text-brand-blue hover:bg-brand-blue/10 rounded-lg transition-colors"
                          title="View live"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                        <Link
                          href={`/blog/admin/edit/${blog.id}`}
                          className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Link>
                        <button
                          type="button"
                          disabled={isPending}
                          onClick={() => {
                            if (confirm(`Delete "${blog.title}"? This cannot be undone.`)) {
                              run(() => deleteBlog(blog.id));
                            }
                          }}
                          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
