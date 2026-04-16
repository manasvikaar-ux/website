import { Globe } from 'lucide-react';
import { z } from 'zod';
import {
  aboutValueItemSchema,
  aboutValuesSectionSchema,
} from '@/features/about/schemas/values.schema';
import { HeartIcon as Heart } from '@/shared/components/ui/heart';
import { WrenchIcon as Wrench } from '@/shared/components/ui/wrench';

export const aboutValues = z.array(aboutValueItemSchema).parse([
  {
    description:
      'Empathy comes before everything. Every tool we build, every session we design, every word we write, it all begins with the question: does this make a real person feel more seen?',
    icon: Heart,
    title: 'Human-Centered',
  },
  {
    description:
      'We believe in action as much as understanding. Our workshops, prompts, and tools are built for the real texture of daily life, not just insight, but change.',
    icon: Wrench,
    title: 'Practical Support',
  },
  {
    description:
      'Mental wellness cannot be a luxury available only to those who can afford it. We work actively to keep our services reachable, in price, in language, and in approach.',
    icon: Globe,
    title: 'Accessible to All',
  },
]);

export const aboutValuesSection = aboutValuesSectionSchema.parse({
  description:
    'The principles that guide every interaction, feature, and partnership at Manasvikaar.',
  title: 'Our Core Values',
});
