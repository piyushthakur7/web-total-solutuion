import { cookies } from 'next/headers';
import { createClient as createBaseClient } from '@insforge/sdk';
import { createServerClient } from '@insforge/sdk/ssr';

export const INSFORGE_URL = process.env.NEXT_PUBLIC_INSFORGE_URL ?? '';
export const INSFORGE_ANON_KEY = process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY ?? '';

/** True when the backend connection is configured. Pages degrade gracefully otherwise. */
export const isInsForgeConfigured = Boolean(INSFORGE_URL && INSFORGE_ANON_KEY);

/**
 * Request-scoped client for Server Components, Route Handlers and Server
 * Actions. Carries the signed-in user's access token, so RLS applies.
 */
export async function createInsForgeServerClient() {
  return createServerClient({
    cookies: await cookies(),
  });
}

/**
 * Anonymous client for public content (blog listings, portfolio) rendered
 * without a user session.
 *
 * Deliberately avoids `cookies()` so these reads stay statically renderable and
 * cacheable — reading cookies would opt every calling page into dynamic
 * rendering. Only anon-visible rows are returned, which is exactly what the
 * public pages need.
 */
export function createInsForgePublicClient() {
  return createBaseClient({
    baseUrl: INSFORGE_URL,
    anonKey: INSFORGE_ANON_KEY,
  });
}
