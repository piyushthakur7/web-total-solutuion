import { WEBSITE_PACKAGES, type WebsitePackage, formatUsd } from './siteContent';

export type PricingMarket = 'india' | 'international';
export const PRICING_MARKET_COOKIE = 'wts_pricing_market';

/** A saved selection takes priority over IP location. Unknown countries use USD. */
export function resolvePricingMarket(country?: string | null, preference?: string | null): PricingMarket {
  if (preference === 'india' || preference === 'international') return preference;
  return country?.trim().toUpperCase() === 'IN' ? 'india' : 'international';
}

export function pricingCurrency(market: PricingMarket) {
  return market === 'india' ? 'INR' : 'USD';
}

export function packageAmount(pkg: WebsitePackage, market: PricingMarket) {
  return market === 'india' ? pkg.fromInr : pkg.from;
}

export function formatPackagePrice(pkg: WebsitePackage, market: PricingMarket) {
  return market === 'india' ? `₹${pkg.fromInr.toLocaleString('en-IN')}` : formatUsd(pkg.from);
}

export function budgetRanges(market: PricingMarket): string[] {
  const prices = WEBSITE_PACKAGES.map((pkg) => formatPackagePrice(pkg, market));
  const upper = market === 'india' ? '₹2,00,000' : '$10,000';
  return [`Under ${prices[0]}`, `${prices[0]} – ${prices[1]}`, `${prices[1]} – ${prices[2]}`,
    `${prices[2]} – ${upper}`, `Above ${upper}`, 'Not sure yet'];
}

/** Localize existing website-package prose; care-plan and CRM prices stay intact. */
export function localizePricingText(text: string, market: PricingMarket): string {
  if (market !== 'india') return text;
  let result = text;
  for (const pkg of WEBSITE_PACKAGES) {
    const usd = formatUsd(pkg.from).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    result = result.replace(new RegExp(`${usd}(?!\\d|,\\d)(?: USD)?`, 'g'), (match) =>
      `${formatPackagePrice(pkg, market)}${match.endsWith(' USD') ? ' INR' : ''}`);
  }
  return result
    .replace(/starting prices in USD/gi, 'starting prices in INR')
    .replace(/starting price in USD/g, 'starting price in INR')
    .replace(/Published USD starting prices/g, 'Published INR starting prices')
    .replace(/all in USD/g, 'all in INR')
    .replace(/quote in USD/g, 'quote in INR')
    .replace(/Quoted and paid in USD/g, 'Quoted and paid in INR');
}

/** Plain content objects only; never mutates the shared international content. */
export function localizeWebsiteContent<T>(value: T, market: PricingMarket): T {
  if (typeof value === 'string') return localizePricingText(value, market) as T;
  if (Array.isArray(value)) return value.map((item) => localizeWebsiteContent(item, market)) as T;
  if (value && typeof value === 'object') return Object.fromEntries(
    Object.entries(value).map(([key, item]) => [key, localizeWebsiteContent(item, market)]),
  ) as T;
  return value;
}
