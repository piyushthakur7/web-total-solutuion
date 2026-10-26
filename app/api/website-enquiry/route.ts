import { NextRequest, NextResponse } from 'next/server';
import { AdsLead, EMPTY_ADS_LEAD, adsLeadMessage, campaignFromSearch, validateAdsLead, ADS_PATH } from '../../../src/adsLanding';
import { LEAD_CAPTURE_KEY, LEAD_CAPTURE_URL } from '../../../src/siteContent';

export const runtime = 'nodejs';
// Best-effort, per-instance protection; provider-side limits remain necessary at scale.
const attempts = new Map<string, { count: number; expires: number }>();

export async function POST(request: NextRequest) {
  const reply = (body: object, status = 200) => NextResponse.json(body, { status, headers: { 'Cache-Control': 'no-store' } });
  const origin = request.headers.get('origin');
  if (origin && origin !== request.nextUrl.origin) return reply({ error: 'Please submit from this website.' }, 403);
  if (!request.headers.get('content-type')?.includes('application/json')) return reply({ error: 'Invalid request format.' }, 415);
  // Limit the actual stream, including requests without a Content-Length header.
  let body: Record<string, unknown>;
  try {
    const reader = request.body?.getReader();
    if (!reader) return reply({ error: 'Please complete the form.' }, 400);
    let bytes = 0;
    const chunks: Uint8Array[] = [];
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > 16_384) { await reader.cancel(); return reply({ error: 'The enquiry is too long.' }, 413); }
      chunks.push(value);
    }
    body = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    if (!body || Array.isArray(body) || typeof body !== 'object') throw new Error('Invalid body');
  } catch { return reply({ error: 'Please complete the form and try again.' }, 400); }

  if (body.companyFax) return reply({ error: 'The enquiry could not be verified. Please call or use WhatsApp.' }, 400);
  const started = Number(body.startedAt);
  if (!Number.isFinite(started) || Date.now() - started < 1200 || Date.now() - started > 86_400_000) {
    return reply({ error: 'Please take a moment to review your details, then try again.' }, 400);
  }
  const fields = Object.fromEntries(Object.keys(EMPTY_ADS_LEAD).map((key) => [key, typeof body[key] === 'string' ? (body[key] as string).trim() : ''])) as unknown as AdsLead;
  const errors = validateAdsLead(fields);
  if (Object.keys(errors).length) return reply({ error: 'Please check the highlighted fields.', errors }, 422);

  const now = Date.now();
  for (const [key, value] of attempts) if (value.expires < now) attempts.delete(key);
  // Phone and email are validated above. No PII is logged or returned to the browser.
  const identifier = `${fields.phone.replace(/\D/g, '')}:${fields.email.toLowerCase()}`;
  const limit = attempts.get(identifier) ?? { count: 0, expires: now + 600_000 };
  if (limit.count >= 4 || attempts.size > 10_000) return reply({ error: 'Too many attempts. Please wait a few minutes, or call us.' }, 429);
  limit.count++;
  attempts.set(identifier, limit);

  const mode = process.env.WEBSITE_ENQUIRY_MODE || (process.env.NODE_ENV === 'production' ? 'live' : 'mock');
  // A browser flag can never activate mock mode on a live endpoint.
  if (mode === 'mock-fail') return reply({ error: 'Preview: simulated delivery failure. Your details have been kept so you can retry.', preview: true }, 503);
  if (mode === 'mock') return reply({ ok: true, preview: true, receipt: crypto.randomUUID() });
  if (mode !== 'live') return reply({ error: 'Enquiries are temporarily unavailable. Please call or use WhatsApp.' }, 503);

  // Reuse the site's existing capture-lead contract, with server-only overrides.
  const captureUrl = process.env.WEBSITE_LEAD_CAPTURE_URL || LEAD_CAPTURE_URL;
  const captureKey = process.env.WEBSITE_LEAD_CAPTURE_KEY || LEAD_CAPTURE_KEY;
  // Campaign attribution is forwarded only when the visitor opted in.
  const campaign = body.measurementConsent === true && typeof body.campaignSearch === 'string'
    ? campaignFromSearch(body.campaignSearch) : {};
  try {
    const response = await fetch(captureUrl, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: fields.name, phone: fields.phone, email: fields.email,
        message: adsLeadMessage(fields, campaign), key: captureKey,
        source: 'Google Ads website landing page',
        page_url: `${request.nextUrl.origin}${ADS_PATH}`,
      }),
      signal: AbortSignal.timeout(12_000), cache: 'no-store',
    });
    const result = await response.json().catch(() => null);
    if (!response.ok || result?.ok !== true) throw new Error('Capture rejected');
    return reply({ ok: true, receipt: crypto.randomUUID() });
  } catch {
    return reply({ error: 'We could not confirm delivery. Your details are still here. Please retry, call us or send a WhatsApp message.' }, 502);
  }
}
