"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '../../../src/utils/supabase/client';
import { Plus, Edit2, Trash2, ExternalLink, RefreshCw } from 'lucide-react';

type Blog = {
  id: string;
  created_at: string;
  title: string;
  slug: string;
  published: boolean;
};

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  const fetchBlogs = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('blogs')
      .select('id, created_at, title, slug, published')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setBlogs(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id: string, title: string) => {
    if (confirm(`Are you sure you want to delete "${title}"? This cannot be undone.`)) {
      await supabase.from('blogs').delete().eq('id', id);
      fetchBlogs();
    }
  };

  const handleTogglePublish = async (id: string, currentStatus: boolean) => {
    await supabase.from('blogs').update({ published: !currentStatus }).eq('id', id);
    fetchBlogs();
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Manage Posts</h1>
          <p className="text-slate-500 text-sm mt-1">Create, edit, and publish your blog articles.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button 
            onClick={fetchBlogs}
            className="p-2 text-slate-500 hover:text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            title="Refresh"
          >
            <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin text-brand-blue' : ''}`} />
          </button>
          <Link
            href="/blog/admin/create"
            className="bg-brand-blue hover:bg-brand-blue/90 text-white px-4 py-2 rounded-lg text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>New Post</span>
          </Link>
        </div>
      </div>

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
              {loading && blogs.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-slate-500">Loading posts...</td>
                </tr>
              ) : blogs.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-slate-500">No blog posts found. Create your first one!</td>
                </tr>
              ) : (
                blogs.map((blog) => (
                  <tr key={blog.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4 pl-6">
                      <div className="font-semibold text-slate-900">{blog.title}</div>
                      <div className="text-xs text-slate-500 mt-0.5">/{blog.slug}</div>
                    </td>
                    <td className="p-4">
                      <button 
                        onClick={() => handleTogglePublish(blog.id, blog.published)}
                        className={`px-2.5 py-1 text-xs font-semibold rounded-full border transition-colors ${
                          blog.published 
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100' 
                            : 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100'
                        }`}
                      >
                        {blog.published ? 'Published' : 'Draft'}
                      </button>
                    </td>
                    <td className="p-4 text-sm text-slate-500">
                      {new Date(blog.created_at).toLocaleDateString()}
                    </td>
                    <td className="p-4 pr-6 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Link 
                          href={`/blog/${blog.slug}`} 
                          target="_blank"
                          className="p-2 text-slate-400 hover:text-brand-blue hover:bg-brand-blue/10 rounded-lg transition-colors"
                          title="View Live"
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
                          onClick={() => handleDelete(blog.id, blog.title)}
                          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
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
