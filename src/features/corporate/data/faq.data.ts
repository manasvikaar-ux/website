import type { CorporateFaqItem } from '@/features/corporate/types/faq.types';

export const corporateFaqContent = {
  ctaButton: 'Book a Discovery Call',
  ctaDescription:
    "Let's discuss how Manasvikaar can bring positive change to your organization.",
  ctaTitle: 'Ready to transform your workplace?',
  description: 'Common questions about our corporate engagements.',
  title: 'Coaching FAQs',
} as const;

export const corporateFaqItems: CorporateFaqItem[] = [
  {
    answer:
      "Absolutely. We perform a preliminary assessment to understand your team's specific needs and tailor the content accordingly.",
    question: 'Can we customize the workshop topics?',
  },
  { question: 'Do you offer certification for participants?' },
  { question: 'What is the typical duration of a session?' },
];
