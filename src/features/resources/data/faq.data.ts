import { faqItemsSchema } from '@/features/resources/schemas/faq.schema';

export const resourcesFaqItems = faqItemsSchema.parse([
  {
    answer:
      'Yes, most helplines listed here are strictly confidential. You can often choose to remain anonymous.',
    question: 'Is my call confidential?',
  },
  {
    answer:
      'Most government and NGO-run helplines are toll-free or charge standard call rates.',
    question: 'Do I have to pay to call these numbers?',
  },
  {
    answer:
      'If a line is busy, please try another number from the list immediately or call 112 for emergencies.',
    question: 'What if the line is busy?',
  },
]);
