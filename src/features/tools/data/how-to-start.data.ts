import { stepItemSchema } from '@/features/tools/schemas/how-to-start.schema';

export const toolStartSteps = [
  stepItemSchema.parse({
    description:
      'Select the tool that resonates with your current feeling or goal.',
    emoji: '👆',
    title: '1. Pick a Tool',
  }),
  stepItemSchema.parse({
    description: 'Commit to a few minutes each day to build a lasting habit.',
    emoji: '✍️',
    title: '2. Use Regularly',
  }),
  stepItemSchema.parse({
    description:
      "If self-help isn't enough, easily transition to professional therapy.",
    emoji: '🤝',
    title: '3. Seek Help',
  }),
];
