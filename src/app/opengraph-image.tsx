import { ImageResponse } from 'next/og';

export const alt = 'Manasvikaar – Mental Health & Wellness';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#5FBFB3',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
          }}
        >
          <div
            style={{
              fontSize: '80px',
              fontWeight: '700',
              color: '#ffffff',
              letterSpacing: '-2px',
              textAlign: 'center',
            }}
          >
            Manasvikaar
          </div>
          <div
            style={{
              fontSize: '32px',
              color: 'rgba(255,255,255,0.85)',
              textAlign: 'center',
              maxWidth: '800px',
              lineHeight: '1.4',
            }}
          >
            Mental Health &amp; Wellness Support
          </div>
          <div
            style={{
              marginTop: '16px',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '100px',
              padding: '12px 32px',
              fontSize: '22px',
              color: '#ffffff',
            }}
          >
            www.manasvikaar.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
