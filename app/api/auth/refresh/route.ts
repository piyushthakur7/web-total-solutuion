import { createRefreshAuthRouter } from '@insforge/sdk/ssr';

/**
 * Browser clients call this when their short-lived access token expires.
 * The refresh token stays httpOnly and server-owned.
 */
export const { POST } = createRefreshAuthRouter();
