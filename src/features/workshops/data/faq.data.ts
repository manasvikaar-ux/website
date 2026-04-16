import { FaqItemSchema } from '@/features/workshops/schemas/faq.schema';

export const workshopsFaqItems = [
  FaqItemSchema.parse({
    answer:
      'No prior experience is needed. All sessions are beginner-friendly and guided by trained facilitators.',
    question: 'Do I need prior experience for Art Therapy?',
  }),
  FaqItemSchema.parse({
    answer:
      'Most workshops run between 90 to 180 minutes depending on the format and depth.',
    question: 'What materials do I need for online sessions?',
  }),
  FaqItemSchema.parse({
    answer:
      'Yes, we offer private and team workshops. Use the custom workshop request option below.',
    question: 'Can I book a private workshop for my team?',
  }),
];
