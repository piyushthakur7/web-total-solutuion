import { test } from 'node:test';
import assert from 'node:assert/strict';
import { NextRequest } from 'next/server';
import { ADS_PATH, EMPTY_ADS_LEAD, adsLeadMessage, campaignFromSearch, validateAdsLead } from '../src/adsLanding';
import { POST } from '../app/api/website-enquiry/route';

const valid = { ...EMPTY_ADS_LEAD, name: 'Test Business Owner', phone: '+91 98765 43210', email: 'test@example.com' };
const request = (body: object, origin = 'https://example.test') => new NextRequest('https://example.test/api/website-enquiry', {
  method: 'POST', headers: { 'Content-Type': 'application/json', origin }, body: JSON.stringify({ ...valid, startedAt: Date.now() - 5000, ...body }),
});

test('campaign leads require valid contact details without requiring project scoping', () => {
  assert.deepEqual(validateAdsLead(valid), {});
  assert.ok(validateAdsLead({ ...valid, name: '' }).name);
  assert.ok(validateAdsLead({ ...valid, phone: 'call me maybe' }).phone);
  assert.ok(validateAdsLead({ ...valid, phone: '12345' }).phone);
  assert.ok(validateAdsLead({ ...valid, email: 'broken' }).email);
  assert.ok(validateAdsLead({ ...valid, websiteType: 'injected option' }).websiteType);
  assert.ok(validateAdsLead({ ...valid, details: 'x'.repeat(2001) }).details);
  assert.ok(validateAdsLead({ ...valid, website: 'javascript:alert(1)' }).website);
});

test('attribution ignores arbitrary parameters and bounds/control-cleans campaign values', () => {
  assert.deepEqual(campaignFromSearch('?utm_source=google&gclid=abc&email=private@example.com&admin=true'), { utm_source: 'google', gclid: 'abc' });
  assert.equal(campaignFromSearch(`?utm_campaign=${'x'.repeat(500)}`).utm_campaign.length, 200);
  assert.equal(campaignFromSearch('?utm_source=one%0Atwo').utm_source, 'onetwo');
  const summary = adsLeadMessage(valid, { utm_source: 'google' });
  assert.match(summary, /INR 6,999/);
  assert.match(summary, /utm_source: google/);
  assert.doesNotMatch(summary, /\$1,200/);
});

test('endpoint rejects cross-origin, bot, oversized and invalid requests before delivery', async () => {
  assert.equal((await POST(request({}, 'https://other.test'))).status, 403);
  assert.equal((await POST(request({ companyFax: 'spam' }))).status, 400);
  assert.equal((await POST(request({ startedAt: Date.now() }))).status, 400);
  assert.equal((await POST(request({ phone: 'bad' }))).status, 422);
  assert.equal((await POST(request({ details: 'x'.repeat(17_000) }))).status, 413);
});

test('server-controlled preview succeeds without upstream delivery; browser cannot choose mode', async () => {
  const previous = process.env.WEBSITE_ENQUIRY_MODE;
  const originalFetch = globalThis.fetch;
  let delivered = 0;
  globalThis.fetch = async () => { delivered++; throw new Error('Must not be called'); };
  process.env.WEBSITE_ENQUIRY_MODE = 'mock';
  try {
    const response = await POST(request({ preview: false, mode: 'live', email: 'preview@example.com' }));
    const body = await response.json();
    assert.equal(response.status, 200);
    assert.equal(body.ok, true);
    assert.equal(body.preview, true);
    assert.match(body.receipt, /^[\da-f-]{36}$/);
    assert.equal(delivered, 0);
    const normalizedRequest = new NextRequest('http://localhost:3000/api/website-enquiry', {
      method: 'POST', headers: { 'Content-Type': 'application/json', host: '127.0.0.1:3000', origin: 'http://127.0.0.1:3000' },
      body: JSON.stringify({ ...valid, email: 'normalized@example.com', startedAt: Date.now() - 5000 }),
    });
    assert.equal((await POST(normalizedRequest)).status, 200);
  } finally { globalThis.fetch = originalFetch; if (previous === undefined) delete process.env.WEBSITE_ENQUIRY_MODE; else process.env.WEBSITE_ENQUIRY_MODE = previous; }
});

test('live endpoint requires a real acknowledgement and forwards only consented attribution', async () => {
  const previous = process.env.WEBSITE_ENQUIRY_MODE;
  const originalFetch = globalThis.fetch;
  process.env.WEBSITE_ENQUIRY_MODE = 'live';
  const payloads: Record<string, string>[] = [];
  globalThis.fetch = async (_url, init) => {
    payloads.push(JSON.parse(init!.body as string));
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  };
  try {
    const denied = await POST(request({ email: 'denied@example.com', campaignSearch: 'gclid=secret-click&email=private', measurementConsent: false, mode: 'mock' }));
    assert.equal(denied.status, 200);
    assert.equal((await denied.json()).preview, undefined);
    assert.doesNotMatch(payloads[0].message, /gclid|secret-click|email=private/);
    assert.equal(payloads[0].page_url, `https://example.test${ADS_PATH}`);
    const accepted = await POST(request({ email: 'accepted@example.com', campaignSearch: 'utm_source=google&gclid=abc&password=hidden', measurementConsent: true }));
    assert.equal(accepted.status, 200);
    assert.match(payloads[1].message, /gclid: abc/);
    assert.doesNotMatch(payloads[1].message, /password|hidden/);
    globalThis.fetch = async () => new Response(JSON.stringify({ ok: false }), { status: 200 });
    assert.equal((await POST(request({ email: 'fail@example.com' }))).status, 502);
    globalThis.fetch = async () => { throw new Error('Network down'); };
    assert.equal((await POST(request({ email: 'network@example.com' }))).status, 502);
  } finally { globalThis.fetch = originalFetch; if (previous === undefined) delete process.env.WEBSITE_ENQUIRY_MODE; else process.env.WEBSITE_ENQUIRY_MODE = previous; }
});

test('repeat attempts are bounded for the same validated contact', async () => {
  const previous = process.env.WEBSITE_ENQUIRY_MODE;
  process.env.WEBSITE_ENQUIRY_MODE = 'mock';
  try {
    for (let i = 0; i < 4; i++) assert.equal((await POST(request({ email: 'rate-limit@example.com' }))).status, 200);
    assert.equal((await POST(request({ email: 'rate-limit@example.com' }))).status, 429);
  } finally { if (previous === undefined) delete process.env.WEBSITE_ENQUIRY_MODE; else process.env.WEBSITE_ENQUIRY_MODE = previous; }
});
