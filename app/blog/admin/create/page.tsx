import { redirect } from 'next/navigation';
import { getAdminSession } from '../../../../src/utils/insforge/adminSession';
import BlogEditor from '../BlogEditor';

export const dynamic = 'force-dynamic';

export default async function CreateBlogPage() {
  if (!(await getAdminSession())) {
    redirect('/blog/admin/login');
  }

  return <BlogEditor heading="Create New Post" submitLabel="Save Post" />;
}
