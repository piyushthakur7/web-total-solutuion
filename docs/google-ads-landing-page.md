# Website design campaign landing page

Route: `/website-design-development`  
Confirmation: `/website-design-development/thank-you`  
Server endpoint: `POST /api/website-enquiry`

The campaign uses its own header, footer and mobile action bar. The main website retains its existing navigation, pricing and forms. The campaign is intentionally `noindex` and excluded from the organic sitemap.

## Offer details needed before paid traffic

The brief supplies a ₹6,999 starting price but does not confirm a page count, revision allowance, delivery estimate, domain/hosting inclusion, support period, tax treatment or recurring costs. The page discloses that those terms are set in the written quote, and portfolio examples show wider studio work rather than the starting package. Replace the provisional wording in `CampaignPage.tsx` and `ADS_FAQS` in `src/adsLanding.ts` with the confirmed offer before launching ads. Do not copy the main site's USD package inclusions into this offer.

## Lead delivery

The server reuses the site's existing `capture-lead` URL and function-scoped identifier from `src/siteContent.ts`. That integration currently points to a different InsForge host from the content/auth backend in AGENTS.md. It is preserved deliberately; confirm the intended recipient inbox/CRM before campaign launch. Optional `WEBSITE_LEAD_CAPTURE_URL` and `WEBSITE_LEAD_CAPTURE_KEY` server environment variables override that integration. Never commit credentials.

The request sends the established `name`, `phone`, `email`, `message`, `key`, `source`, `page_url` contract. Optional business details and consented campaign values are in `message`. Only a successful upstream HTTP response with `{ "ok": true }` produces a live acknowledgement. Failures preserve the form. Upstream timeout is 12 seconds. The actual request stream is limited to 16 KiB; same-origin checks, server validation, a honeypot, a minimum elapsed time and a bounded per-instance attempt limit reduce basic spam. For high-volume campaigns, enforce distributed rate limiting and bot checks at the hosting/provider edge; the in-memory limit does not coordinate across instances.

Development defaults to mock delivery. Use `WEBSITE_ENQUIRY_MODE=mock-fail` to exercise delivery failures, and `mock` for preview production builds. The preview mode is set on the server; a browser cannot switch live delivery to mock. No preview submission generates a lead conversion. Production defaults to live; verify your deployment environment explicitly.

## Measurement setup

Supply these **before building** the production deployment:

```dotenv
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-123456789
NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL=YOUR_ACTUAL_ACTION_LABEL
NEXT_PUBLIC_GA4_ID=G-YOURACTUALID
```

The values above are illustrative; use the account's actual IDs. Leave unused variables empty. No Google tag loads if no valid ID is configured, or until the visitor permits measurement. The preference control permits later withdrawal. Ad personalization stays denied. No name, email, phone or project details enter measurement events. Attribution is allowlisted and forwarded only with consent, using a 30-minute session window. Declining clears locally stored attribution.

Google Ads `conversion` fires only in the form's successful **live** acknowledgement path, with the server's unique receipt as `transaction_id`. It does not fire from the submit button, an error, a honeypot rejection, a mock, a direct thank-you visit or a thank-you reload. A per-session guard also suppresses repeated reporting of the same receipt. GA4 receives `generate_lead` when configured; do not additionally import that GA4 event as another primary Google Ads conversion if using the direct Ads action. An enquiry has no assumed sale value.

GA4 `call_click` and `whatsapp_click` measure clicks only. Configure them as secondary actions, rather than qualified-lead or sale conversions. In Google Ads select **Count: One** for the lead action. Use Tag Assistant to check consent and verify the actual conversion destination; code checks cannot confirm account-side configuration.

References: [Google consent setup](https://developers.google.com/tag-platform/security/guides/consent), [conversion measurement](https://developers.google.com/tag-platform/devguides/conversions), [duplicate conversion protection](https://support.google.com/google-ads/answer/6386790).

## Launch checks

- Confirm the package terms, current price and portfolio permissions with the business owner.
- Configure and rebuild with the actual tracking IDs; verify accepted and declined consent, including withdrawal.
- In preview, check empty/invalid inputs, server validation, successful redirect, failure/retry, and direct/reloaded confirmation pages.
- On mobile, tablet and desktop, check layout, all quote anchors, legal links, live portfolio links, phone and WhatsApp destinations.
- With live mode and the campaign manager aware, send one clearly labelled test enquiry and verify its arrival and follow-up in the recipient inbox/CRM.
- Verify one Google Ads conversion in Tag Assistant after that acknowledged live submission. Check that failed submissions, mocks, direct thank-you visits and reloads produce none.
- Keep campaign activation separate from code deployment. This implementation does not create or spend on an ads campaign.
