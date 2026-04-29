import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/podcasts/',
    },
    sitemap: 'https://www.manasvikaar.com/sitemap.xml',
  };
}
