import type { Metadata, Viewport } from 'next';
import { Sora } from 'next/font/google';
import Script from 'next/script';
import { SiteFooter } from '@/shared/site-footer';
import { SiteHeader } from '@/shared/site-header';
import '@/styles/global.css';

const sora = Sora({ variable: '--font-sans' });

export const metadata: Metadata = {
  description:
    'Say goodbye to overwhelming stress. Manage your mental health and emotional well-being with comprehensive, guided support.',
  title: 'Manasvikaar - Mental Health & Wellness',
  icons: [
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    { rel: 'icon', url: '/favicon.ico' },
  ],
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
