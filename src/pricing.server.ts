import { cache } from 'react';
import { cookies, headers } from 'next/headers';
import { PRICING_MARKET_COOKIE, resolvePricingMarket } from './pricing';

/** Hosting must supply its country header; no browser location permission needed. */
export const getPricingMarket = cache(async () => {
  const [requestHeaders, requestCookies] = await Promise.all([headers(), cookies()]);
  const country = requestHeaders.get('x-vercel-ip-country') || requestHeaders.get('cf-ipcountry');
  return resolvePricingMarket(country, requestCookies.get(PRICING_MARKET_COOKIE)?.value);
});
