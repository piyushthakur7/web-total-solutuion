'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { createAuthActions } from '@insforge/sdk/ssr';
import { createInsForgeServerClient } from '../../../src/utils/insforge/server';
import { isCurrentUserSiteAdmin } from '../../../src/utils/insforge/adminSession';

/**
 * Auth and blog mutations run on the server so the refresh token stays in an
 * httpOnly cookie and every write passes through the caller's own session
 * (which is what the `site_admins` RLS policies check).
 */

// --- Auth -------------------------------------------------------------------

export async function signIn(email: string, password: string) {
  const auth = createAuthActions({ cookies: await cookies() });
  const { data, error } = await auth.signInWithPassword({ email, password });

  if (error || !data?.user) {
    return { ok: false as const, error: error?.message ?? 'Sign in failed.' };
  }

  // Being able to sign in is not the same as being allowed to publish.
  if (!(await isCurrentUserSiteAdmin())) {
    await auth.signOut();
    return { ok: false as const, error: 'This account does not have publishing access.' };
  }

  return { ok: true as const };
}

export async function signOut() {
  const auth = createAuthActions({ cookies: await cookies() });
  await auth.signOut();
  return { ok: true as const };
}

// --- Blog CRUD --------------------------------------------------------------

export interface BlogInput {
  id?: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  author?: string;
  imageUrl?: string;
  publishStatus: 'draft' | 'immediate' | 'schedule';
  /** Local datetime string from the form; only used when scheduling. */
  publishDate?: string;
}

function resolvePublishing(input: BlogInput) {
  if (input.publishStatus === 'schedule' && input.publishDate) {
    return { published: true, publish_date: new Date(input.publishDate).toISOString() };
  }
  if (input.publishStatus === 'immediate') {
    return { published: true, publish_date: new Date().toISOString() };
  }
  return { published: false, publish_date: new Date().toISOString() };
}

export async function saveBlog(input: BlogInput) {
  if (!(await isCurrentUserSiteAdmin())) {
    return { ok: false as const, error: 'You do not have publishing access.' };
  }

  const insforge = await createInsForgeServerClient();
  const { published, publish_date } = resolvePublishing(input);

  const row = {
    title: input.title.trim(),
    slug: input.slug.trim(),
    content: input.content,
    excerpt: input.excerpt?.trim() || null,
    author: input.author?.trim() || null,
    image_url: input.imageUrl?.trim() || null,
    published,
    publish_date,
  };

  const { error } = input.id
    ? await insforge.database.from('blogs').update(row).eq('id', input.id)
    : await insforge.database.from('blogs').insert([row]);

  if (error) {
    return { ok: false as const, error: error.message ?? 'Could not save the post.' };
  }

  revalidatePath('/blog');
  revalidatePath(`/blog/${row.slug}`);
  revalidatePath('/blog/admin');

  return { ok: true as const };
}

export async function deleteBlog(id: string) {
  if (!(await isCurrentUserSiteAdmin())) {
    return { ok: false as const, error: 'You do not have publishing access.' };
  }

  const insforge = await createInsForgeServerClient();
  const { error } = await insforge.database.from('blogs').delete().eq('id', id);

  if (error) {
    return { ok: false as const, error: error.message ?? 'Could not delete the post.' };
  }

  revalidatePath('/blog');
  revalidatePath('/blog/admin');
  return { ok: true as const };
}

export async function toggleBlogPublished(id: string, published: boolean) {
  if (!(await isCurrentUserSiteAdmin())) {
    return { ok: false as const, error: 'You do not have publishing access.' };
  }

  const insforge = await createInsForgeServerClient();
  const { error } = await insforge.database
    .from('blogs')
    .update({ published })
    .eq('id', id);

  if (error) {
    return { ok: false as const, error: error.message ?? 'Could not update the post.' };
  }

  revalidatePath('/blog');
  revalidatePath('/blog/admin');
  return { ok: true as const };
}
