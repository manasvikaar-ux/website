import {
  workshopBenefitItemSchema,
  workshopsSectionContentSchema,
} from '@/features/home/schemas/workshops.schema';

export const workshopBenefitItems = [
  workshopBenefitItemSchema.parse({
    background: '#FCD34D',
    description:
      'Uncover personality patterns and emotional states through the science of graphology.',
    fullWidth: true,
    title: 'Handwriting Analysis',
  }),
  workshopBenefitItemSchema.parse({
    background: 'var(--background-teal)',
    description:
      'Practical, evidence-backed tools to help you manage pressure before it becomes burnout.',
    title: 'Stress Management',
  }),
  workshopBenefitItemSchema.parse({
    background: '#FCD34D',
    description:
      "A quiet, expressive space for emotions that words alone can't hold.",
    title: 'Art Therapy',
  }),
  workshopBenefitItemSchema.parse({
    background: 'var(--background-teal)',
    description:
      'Guided writing prompts to help you reflect, reconnect, and rediscover clarity.',
    title: 'Journaling',
  }),
];

export const workshopsSectionContent = workshopsSectionContentSchema.parse({
  description:
    'Our workshops are not classrooms. They are spaces where something shifts. Through guided creative experiences, you learn to notice your emotions, name them, and move through them, without judgment and without pressure.',
  heading: 'Explore Healing Through Workshops',
});
