import { ImageResponse } from 'next/og';
import { WTS_CRM } from '../../src/projects';

/**
 * Product-specific social card. The shared /og-image.png is agency branding,
 * which tells nobody what WTS CRM is when the page is shared.
 */
export const alt = `${WTS_CRM.name} — ${WTS_CRM.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 55%, #0E70A6 100%)',
          padding: '72px',
          color: '#F8FAFC',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              display: 'flex',
              alignSelf: 'flex-start',
              padding: '10px 22px',
              borderRadius: '999px',
              border: '1px solid rgba(248,250,252,0.28)',
              background: 'rgba(248,250,252,0.10)',
              fontSize: '22px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            {WTS_CRM.name}
          </div>
          <div style={{ display: 'flex', fontSize: '54px', fontWeight: 800, lineHeight: 1.1 }}>
            {WTS_CRM.tagline}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '26px',
              lineHeight: 1.4,
              color: 'rgba(248,250,252,0.82)',
              maxWidth: '900px',
            }}
          >
            {WTS_CRM.headline}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', fontSize: '22px', fontWeight: 700, color: 'rgba(248,250,252,0.86)' }}>
            {WTS_CRM.workflow.map((step) => step.label).join('  →  ')}
          </div>
          <div
            style={{
              display: 'flex',
              alignSelf: 'flex-end',
              fontSize: '22px',
              color: 'rgba(248,250,252,0.7)',
            }}
          >
            webtotalsolution.com
          </div>
        </div>
      </div>
    ),
    size,
  );
}
