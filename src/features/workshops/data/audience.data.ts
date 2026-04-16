import { AudienceCardItemSchema } from '@/features/workshops/schemas/audience.schema';

export const audienceCards = [
  AudienceCardItemSchema.parse({
    description:
      'A safe, playful space where children learn to name their feelings, express themselves freely, and build emotional habits that stay with them for life.',
    iconSrc: '/workshops/kid.png',
    title: 'Kids & Teens',
  }),
  AudienceCardItemSchema.parse({
    description:
      "Practical, reflective experiences to help you slow down, process what's been weighing on you, and move forward with more clarity and ease.",
    iconSrc: '/workshops/adult.png',
    title: 'Adults',
  }),
  AudienceCardItemSchema.parse({
    description:
      "Workshops that go beyond productivity — building teams that communicate better, support each other, and don't leave people behind.",
    iconSrc: '/workshops/cooperate.png',
    title: 'Corporate Groups',
  }),
];
