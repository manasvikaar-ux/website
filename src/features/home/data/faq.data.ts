import {
  faqItemSchema,
  faqSectionContentSchema,
} from '@/features/home/schemas/faq.schema';

export const faqItems = [
  faqItemSchema.parse({
    answer:
      "If you're new to therapy or exploring support for the first time, the Student or Professional tier is a great place to start. Not sure? Reach out and we'll have a short, no-pressure conversation to help you figure it out together.",
    question: 'How do I know which therapy tier is right for me?',
  }),
  faqItemSchema.parse({
    answer:
      "Absolutely. Workshops are a wonderful entry point. They're group-based, creative, and low-pressure, perfect if you're curious but not yet ready for one-on-one sessions.",
    question: "Are workshops suitable if I've never tried therapy before?",
  }),
  faqItemSchema.parse({
    answer:
      "Yes. We ask for at least 24 hours' notice for rescheduling. Life happens and we're flexible. Just reach out and we'll find a time that works.",
    question: 'Can I cancel or reschedule a session?',
  }),
  faqItemSchema.parse({
    answer:
      'Completely. Everything shared in sessions is strictly confidential. We follow all ethical and legal standards for mental health privacy in India. Your story is yours.',
    question: 'Is my information kept private?',
  }),
  faqItemSchema.parse({
    answer:
      'Yes. Our therapists and facilitators can conduct sessions in Bengali, Hindi, and English, whichever language feels most natural to you.',
    question: 'Do you offer support in Bengali or Hindi?',
  }),
];

export const faqSectionContent = faqSectionContentSchema.parse({
  heading: 'Frequently Asked Questions',
  subheading:
    "Welcome to our FAQ section, where you'll find answers to all your burning questions!",
});
