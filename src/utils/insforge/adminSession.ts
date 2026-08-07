import { createInsForgeServerClient } from './server';

/**
 * Server-side admin-session helpers.
 *
 * Kept out of the `'use server'` actions file on purpose: these are plain
 * server functions, not Server Actions, so they are not exposed as callable
 * endpoints to the browser.
 *
 * Membership in `site_admins` is the single source of truth for who may publish.
 * RLS enforces it at the database level as well — these checks exist so the UI
 * can fail early with a clear message instead of a silent empty result.
 */

export async function getCurrentUser() {
  const insforge = await createInsForgeServerClient();
  const { data, error } = await insforge.auth.getCurrentUser();
  if (error) return null;
  return data?.user ?? null;
}

export async function isCurrentUserSiteAdmin() {
  const insforge = await createInsForgeServerClient();

  const { data: userData } = await insforge.auth.getCurrentUser();
  if (!userData?.user) return false;

  // RLS on site_admins only exposes the caller's own row, so a non-empty
  // result means "this user is an admin".
  const { data, error } = await insforge.database
    .from('site_admins')
    .select('user_id')
    .limit(1);

  if (error) return false;
  return Array.isArray(data) && data.length > 0;
}

/** Returns the admin's session details, or null when not signed in as an admin. */
export async function getAdminSession() {
  const insforge = await createInsForgeServerClient();
  const { data: userData } = await insforge.auth.getCurrentUser();
  const user = userData?.user;

  if (!user) return null;
  if (!(await isCurrentUserSiteAdmin())) return null;

  return { email: user.email ?? '' };
}
