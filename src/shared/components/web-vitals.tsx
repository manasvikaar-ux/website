'use client';

import { useReportWebVitals } from 'next/web-vitals';

/**
 * Reports Core Web Vitals (LCP, FID, CLS, FCP, TTFB) to Google Analytics.
 * @returns null — renders nothing.
 */
export function WebVitals() {
  useReportWebVitals((metric) => {
    const { name, delta, id, rating } = metric;

    if (typeof window.gtag === 'function') {
      window.gtag('event', name, {
        value: Math.round(name === 'CLS' ? delta * 1000 : delta),
        event_label: id,
        metric_rating: rating,
        non_interaction: true,
      });
    }
  });

  return null;
}
