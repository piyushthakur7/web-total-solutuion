import React from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Plus } from 'lucide-react';
import { createInsForgeServerClient } from '../../../src/utils/insforge/server';
import { getAdminSession } from '../../../src/utils/insforge/adminSession';
import BlogTable, { AdminBlogRow } from './BlogTable';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  if (!(await getAdminSession())) {
    redirect('/blog/admin/login');
  }

  const insforge = await createInsForgeServerClient();
  const { data, error } = await insforge.database
    .from('blogs')
    .select('id, created_at, publish_date, title, slug, published')
    .order('created_at', { ascending: false });

  const blogs = (data ?? []) as AdminBlogRow[];

  return (
    <div className="p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Manage Posts</h1>
          <p className="text-slate-500 text-sm mt-1">
            Create, edit and publish your blog articles.
          </p>
        </div>
        <Link
          href="/blog/admin/create"
          className="bg-brand-blue hover:bg-brand-blue/90 text-white px-4 py-2.5 rounded-lg text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all flex items-center justify-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>New Post</span>
        </Link>
      </div>

      {error ? (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-2xl p-6 text-sm">
          Could not load posts: {error.message ?? 'unknown error'}
        </div>
      ) : (
        <BlogTable blogs={blogs} />
      )}
    </div>
  );
}
