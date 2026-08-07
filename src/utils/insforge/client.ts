"use client";

import { createBrowserClient } from '@insforge/sdk/ssr';

/**
 * Browser-side InsForge client for Client Components.
 *
 * Reads the `insforge_access_token` cookie and refreshes through
 * `/api/auth/refresh` when it expires. Auth *mutations* (sign in / sign out)
 * do not run here — they go through the server actions in `src/app/authActions`
 * so the refresh token stays httpOnly.
 */
export const insforge = createBrowserClient();

export function createClient() {
  return insforge;
}
