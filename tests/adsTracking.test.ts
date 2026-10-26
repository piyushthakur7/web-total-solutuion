import { test } from 'node:test';
import assert from 'node:assert/strict';

test('measurement waits for consent, protects conversion receipts and never sends personal URL parameters', async () => {
  const env = { ads: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID, label: process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL, ga: process.env.NEXT_PUBLIC_GA4_ID };
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID = 'AW-123456789';
  process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL = 'test-label';
  process.env.NEXT_PUBLIC_GA4_ID = 'G-TEST123';
  const store = () => { const data = new Map<string, string>(); return { getItem: (k: string) => data.get(k) ?? null, setItem: (k: string, v: string) => { data.set(k, v); }, removeItem: (k: string) => { data.delete(k); } }; };
  const previous = { window: globalThis.window, document: globalThis.document, localStorage: globalThis.localStorage, sessionStorage: globalThis.sessionStorage };
  const scripts: unknown[] = [];
  Object.assign(globalThis, {
    window: { location: { origin: 'https://example.test', pathname: '/website-design-development', search: '?utm_source=google&gclid=click123&email=private@example.com' } },
    document: { title: 'Campaign', referrer: 'https://example.test/contact?email=private', head: { appendChild: (script: unknown) => scripts.push(script) }, createElement: () => ({}) },
    localStorage: store(), sessionStorage: store(),
  });
  try {
    const tracking = await import('../src/adsTracking');
    tracking.initializeMeasurement();
    tracking.trackSuccessfulEnquiry('not-consented');
    assert.equal(scripts.length, 0);
    assert.equal(window.dataLayer, undefined);
    assert.equal(tracking.campaignSearch(), '');
    tracking.setMeasurementConsent('granted');
    tracking.initializeMeasurement();
    assert.equal(scripts.length, 1);
    assert.match(tracking.campaignSearch(), /gclid=click123/);
    assert.doesNotMatch(tracking.campaignSearch(), /email|private/);
    tracking.trackSuccessfulEnquiry('same-receipt');
    tracking.trackSuccessfulEnquiry('same-receipt');
    const commands = (window.dataLayer as unknown[]).map((entry) => Array.from(entry as ArrayLike<unknown>));
    assert.equal(commands.filter((entry) => entry[1] === 'conversion').length, 1);
    assert.equal(commands.filter((entry) => entry[1] === 'generate_lead').length, 1);
    assert.doesNotMatch(JSON.stringify(commands), /private@example|email=private/);
    const conversion = commands.find((entry) => entry[1] === 'conversion')![2] as Record<string, string>;
    assert.equal(conversion.transaction_id, 'same-receipt');
    assert.equal(conversion.send_to, 'AW-123456789/test-label');
    tracking.trackContactClick('whatsapp');
    const before = window.dataLayer!.length;
    tracking.setMeasurementConsent('denied');
    tracking.trackSuccessfulEnquiry('denied-receipt');
    tracking.trackContactClick('call');
    assert.equal(window.dataLayer!.length, before + 1); // Only the consent update.
    assert.equal(tracking.campaignSearch(), '');
    assert.equal(sessionStorage.getItem('wts-campaign-attribution-v1'), null);
  } finally {
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) delete (globalThis as Record<string, unknown>)[key];
      else Object.defineProperty(globalThis, key, { value, configurable: true, writable: true });
    }
    for (const [key, value] of Object.entries({ NEXT_PUBLIC_GOOGLE_ADS_ID: env.ads, NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL: env.label, NEXT_PUBLIC_GA4_ID: env.ga })) {
      if (value === undefined) delete process.env[key]; else process.env[key] = value;
    }
  }
});
