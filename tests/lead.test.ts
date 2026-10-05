import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  EMPTY_LEAD,
  PROJECT_TYPES,
  buildLeadMessage,
  buildLeadPayload,
  contactHref,
  parseLeadPrefill,
  validateLead,
} from '../src/lead';
import { WEBSITE_PACKAGES } from '../src/siteContent';
import { SERVICES_DATA } from '../src/services';
import { LANDING_PAGES } from '../src/landingPages';

const valid = { ...EMPTY_LEAD, name: 'Asha Rao', email: 'asha@example.com' };

test('name and email are required; phone is optional', () => {
  assert.deepEqual(validateLead(valid), {});
  assert.ok(validateLead({ ...valid, name: '  ' }).name);
  assert.ok(validateLead({ ...valid, email: '' }).email);
  assert.equal(validateLead({ ...valid, phone: '' }).phone, undefined);
});

test('email and phone formats are checked', () => {
  assert.ok(validateLead({ ...valid, email: 'asha@example' }).email);
  assert.ok(validateLead({ ...valid, email: 'not an email' }).email);
  assert.ok(validateLead({ ...valid, phone: '12' }).phone);
  assert.deepEqual(validateLead({ ...valid, phone: '+44 20 7946 0958' }), {});
});

test('payload keeps the capture-lead shape and sends an empty phone when omitted', () => {
  const payload = buildLeadPayload(valid, { key: 'k', source: 'Contact page', pageUrl: 'https://example.test/contact' });
  assert.deepEqual(Object.keys(payload).sort(), ['email', 'key', 'message', 'name', 'page_url', 'phone', 'source']);
  assert.equal(payload.phone, '');
  assert.equal(payload.email, 'asha@example.com');
  assert.ok(!payload.message.includes('Phone'));
});

test('message carries the package and its price without inventing a budget', () => {
  const message = buildLeadMessage({ ...valid, packageSlug: 'startup-growth-site' }, 'Pricing');
  assert.ok(message.includes('Package: Startup Growth Site (from $2,500 USD)'));
  assert.ok(!message.includes('Budget range'));
});

test('a package link pre-selects that package and its project type, not a budget', () => {
  for (const pkg of WEBSITE_PACKAGES) {
    const href = contactHref({ package: pkg.slug });
    const prefill = parseLeadPrefill(href.split('?')[1]);
    assert.equal(prefill.packageSlug, pkg.slug);
    assert.equal(prefill.projectType, pkg.projectType);
    assert.equal(prefill.budget, undefined);
  }
});

test('unknown query values are ignored and free text is capped', () => {
  const prefill = parseLeadPrefill(`package=free-site&type=Hacking&details=${'x'.repeat(2000)}`);
  assert.equal(prefill.packageSlug, undefined);
  assert.equal(prefill.projectType, undefined);
  assert.equal(prefill.details?.length, 600);
  assert.equal(contactHref({ package: 'free-site' }), '/contact');
});

test('approved package starting prices are unchanged', () => {
  assert.deepEqual(
    WEBSITE_PACKAGES.map((pkg) => [pkg.name, pkg.from]),
    [
      ['Landing Page Sprint', 1200],
      ['Startup Growth Site', 2500],
      ['Custom Product Website', 5000],
    ],
  );
});

test('every page that opens the form uses a project type and package the form knows', () => {
  const types = PROJECT_TYPES as readonly string[];
  const slugs = WEBSITE_PACKAGES.map((pkg) => pkg.slug);
  for (const pkg of WEBSITE_PACKAGES) assert.ok(types.includes(pkg.projectType), pkg.name);
  for (const page of [...Object.values(SERVICES_DATA), ...Object.values(LANDING_PAGES)]) {
    assert.ok(types.includes(page.projectType), page.slug);
    if (page.package) assert.ok(slugs.includes(page.package), page.slug);
  }
});
