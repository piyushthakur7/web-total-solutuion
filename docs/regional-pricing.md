# Regional website pricing

Website packages have independent starting prices in `src/siteContent.ts`:

| Package | India (INR) | International (USD) |
| --- | ---: | ---: |
| Landing Page Sprint | 9,999 | 1,200 |
| Startup Growth Site | 49,999 | 2,500 |
| Custom Product Website | 99,999 | 5,000 |

Website Care Plans and Custom Management retain their published USD prices for all regions. WTS CRM subscription prices are separate and unchanged.

## Detection and overrides

`src/pricing.server.ts` reads the hosting provider's `x-vercel-ip-country` (Vercel) or `cf-ipcountry` (Cloudflare) request header. `IN` selects India; other or missing country codes select International. No location permission or third-party browser geolocation request is used.

The India / International selector on the pricing page, campaign page and site footer saves `wts_pricing_market` for one year. A valid saved choice overrides country detection. Changing the selection reloads the page so content, metadata and forms use the same region.

Pages render per request through Next.js request APIs, rather than sharing a globally cached regional HTML page. Any additional reverse proxy or CDN must preserve that behavior and forward the correct country header. Automatic detection requires one of these headers from the production host; with another host, configure its trusted country header in `getPricingMarket` and the enquiry endpoint. On localhost, use the selector or simulated request headers.

## Validation

Run `npm run typecheck`, `npm test`, and `npm run build` (`npm.cmd` in PowerShell when script execution is disabled).

Check `/pricing`, `/contact`, a service page, a location page and `/website-design-development` with `x-vercel-ip-country: IN` and `US`. Also check an India cookie with a US header and an International cookie with an India header. The selected prices must match the enquiry summaries and metadata. Enquiry tests mock delivery; they do not send real customer messages.
