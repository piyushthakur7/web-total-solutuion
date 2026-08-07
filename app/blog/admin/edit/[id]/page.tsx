import { notFound, redirect } from 'next/navigation';
import { createInsForgeServerClient } from '../../../../../src/utils/insforge/server';
import { getAdminSession } from '../../../../../src/utils/insforge/adminSession';
import BlogEditor, { BlogEditorInitial } from '../../BlogEditor';
import type { BlogRow } from '../../../../../src/utils/insforge/blogs';

export const dynamic = 'force-dynamic';

/** Formats an ISO timestamp for a `datetime-local` input in the viewer's zone. */
function toLocalInputValue(iso: string) {
  const date = new Date(iso);
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
}

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  if (!(await getAdminSession())) {
    redirect('/blog/admin/login');
  }

  const { id } = await params;
  const insforge = await createInsForgeServerClient();

  const { data, error } = await insforge.database
    .from('blogs')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error || !data) {
    notFound();
  }

  const blog = data as BlogRow;
  const scheduled = blog.published && new Date(blog.publish_date) > new Date();

  const initial: BlogEditorInitial = {
    id: blog.id,
    title: blog.title,
    slug: blog.slug,
    content: blog.content,
    excerpt: blog.excerpt ?? '',
    author: blog.author ?? '',
    imageUrl: blog.image_url ?? '',
    publishStatus: !blog.published ? 'draft' : scheduled ? 'schedule' : 'immediate',
    publishDate: scheduled ? toLocalInputValue(blog.publish_date) : '',
  };

  return <BlogEditor initial={initial} heading="Edit Post" submitLabel="Update Post" />;
}
