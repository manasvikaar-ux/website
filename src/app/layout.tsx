import type { Metadata, Viewport } from 'next';
import { Sora } from 'next/font/google';
import Script from 'next/script';
import { GoogleAnalytics } from '@/shared/components/google-analytics';
import { WebVitals } from '@/shared/components/web-vitals';
import { SiteFooter } from '@/shared/site-footer';
import { SiteHeader } from '@/shared/site-header';
import '@/styles/global.css';

const sora = Sora({ variable: '--font-sans' });

export const metadata: Metadata = {
  title: {
    default: 'Manasvikaar – Mental Health & Wellness',
    template: '%s | Manasvikaar',
  },
  description:
    'Say goodbye to overwhelming stress. Manage your mental health and emotional well-being with comprehensive, guided support.',
  metadataBase: new URL('https://www.manasvikaar.com'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      {
        url: '/shared/logo.png',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/shared/Manasvikaar logo white.png',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  openGraph: {
    title: 'Manasvikaar – Mental Health & Wellness',
    description:
      'Say goodbye to overwhelming stress. Manage your mental health and emotional well-being with comprehensive, guided support.',
    siteName: 'Manasvikaar',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@manasvikaar',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={sora.variable} lang="en">
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className="">
        <GoogleAnalytics />
        <WebVitals />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
