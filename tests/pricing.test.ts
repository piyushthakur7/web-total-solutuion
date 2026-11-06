import { test } from 'node:test';
import assert from 'node:assert/strict';
import { NextRequest } from 'next/server';
import { resolvePricingMarket, formatPackagePrice, packageAmount, budgetRanges, localizeWebsiteContent } from '../src/pricing';
import { WEBSITE_PACKAGES, HOME_FAQS, SUPPORT_DETAIL } from '../src/siteContent';
import { EMPTY_LEAD, buildLeadPayload, mailtoFallback } from '../src/lead';
import { EMPTY_ADS_LEAD, validateAdsLead, adsLeadMessage } from '../src/adsLanding';
import { POST } from '../app/api/website-enquiry/route';

test('country detection defaults overseas and unknown visitors to international pricing', () => {
  assert.equal(resolvePricingMarket('IN'), 'india');
  assert.equal(resolvePricingMarket(' in '), 'india');
  for (const country of ['US', 'GB', 'AE', 'XX', 'T1', '', null, undefined]) {
    assert.equal(resolvePricingMarket(country), 'international');
  }
  assert.equal(resolvePricingMarket('US', 'india'), 'india');
  assert.equal(resolvePricingMarket('IN', 'international'), 'international');
  assert.equal(resolvePricingMarket('IN', 'invalid'), 'india');
});

test('independent Indian package prices coexist with unchanged international prices', () => {
  assert.deepEqual(WEBSITE_PACKAGES.map((pkg) => packageAmount(pkg, 'india')), [24999, 49999, 99999]);
  assert.deepEqual(WEBSITE_PACKAGES.map((pkg) => formatPackagePrice(pkg, 'india')), ['₹24,999', '₹49,999', '₹99,999']);
  assert.deepEqual(WEBSITE_PACKAGES.map((pkg) => formatPackagePrice(pkg, 'international')), ['$1,200', '$2,500', '$5,000']);
  assert.ok(budgetRanges('india').includes('₹99,999 – ₹2,00,000'));
});

test('regional FAQ copy leaves monthly care prices and shared source content intact', () => {
  const original = JSON.stringify(HOME_FAQS);
  const india = localizeWebsiteContent(HOME_FAQS, 'india');
  assert.match(JSON.stringify(india), /₹24,999/);
  assert.doesNotMatch(JSON.stringify(india), /\$1,200|\$2,500|\$5,000/);
  assert.equal(localizeWebsiteContent(SUPPORT_DETAIL, 'india'), SUPPORT_DETAIL);
  assert.equal(JSON.stringify(HOME_FAQS), original);
  assert.deepEqual(localizeWebsiteContent(HOME_FAQS, 'international'), HOME_FAQS);
  assert.equal(localizeWebsiteContent('$12,000 and $49/month USD', 'india'), '$12,000 and $49/month USD');
});

test('lead payload and email fallback preserve the price and region seen by an Indian visitor', () => {
  const fields = { ...EMPTY_LEAD, name: 'Test', email: 'test@example.com', packageSlug: 'startup-growth-site', budget: budgetRanges('india')[1] };
  const payload = buildLeadPayload(fields, { key: 'test', pageUrl: 'https://example.test/contact', market: 'india' });
  assert.match(payload.message, /Startup Growth Site \(from ₹49,999 INR\)/);
  assert.match(payload.message, /India \(INR\)/);
  assert.doesNotMatch(payload.message, /\$2,500/);
  assert.match(decodeURIComponent(mailtoFallback('test@example.com', fields, 'Contact', 'india')), /₹49,999 INR/);
});

test('campaign validation and summary use the same regional budget list', () => {
  const fields = { ...EMPTY_ADS_LEAD, name: 'Test', email: 'test@example.com', phone: '+91 98765 43210', budget: budgetRanges('india')[1] };
  assert.deepEqual(validateAdsLead(fields, 'india'), {});
  assert.ok(validateAdsLead(fields, 'international').budget);
  assert.match(adsLeadMessage(fields, {}, 'india'), /starting at ₹24,999 INR/);
});

test('campaign endpoint validates region from country or saved preference before delivery', async () => {
  const previous = process.env.WEBSITE_ENQUIRY_MODE;
  const originalFetch = globalThis.fetch;
  const messages: string[] = [];
  process.env.WEBSITE_ENQUIRY_MODE = 'live';
  globalThis.fetch = async (_url, init) => {
    messages.push(JSON.parse(init!.body as string).message);
    return new Response(JSON.stringify({ ok: true }));
  };
  try {
    for (const [country, cookie, market] of [
      ['IN', '', 'india'], ['US', 'wts_pricing_market=india', 'india'],
      ['IN', 'wts_pricing_market=international', 'international'], ['US', '', 'international'],
    ] as const) {
      const request = new NextRequest('https://example.test/api/website-enquiry', {
        method: 'POST', headers: { 'content-type': 'application/json', 'x-vercel-ip-country': country, cookie },
        body: JSON.stringify({ ...EMPTY_ADS_LEAD, name: 'Test', email: `${messages.length}@example.test`, phone: '+91 98765 43210',
          budget: budgetRanges(market)[1], startedAt: Date.now() - 5000 }),
      });
      assert.equal((await POST(request)).status, 200);
      assert.ok(messages.at(-1)!.includes(market === 'india' ? '₹24,999 INR' : '$1,200 USD'));
    }
  } finally {
    globalThis.fetch = originalFetch;
    if (previous === undefined) delete process.env.WEBSITE_ENQUIRY_MODE;
    else process.env.WEBSITE_ENQUIRY_MODE = previous;
  }
});
