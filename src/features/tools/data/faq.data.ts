import { faqItemSchema } from '@/features/tools/schemas/faq.schema';

export const toolsFaqItems = [
  faqItemSchema.parse({
    answer:
      'Absolutely. We use end-to-end encryption for all entries in IDLocker and the Daily Journal. Not even our staff can access your personal notes.',
    question: 'Is my journal data private?',
  }),
  faqItemSchema.parse({
    question: 'Are these tools a replacement for therapy?',
  }),
  faqItemSchema.parse({
    question: 'Can I export my progress reports?',
  }),
  faqItemSchema.parse({
    question: 'Is there a mobile app available?',
  }),
];
