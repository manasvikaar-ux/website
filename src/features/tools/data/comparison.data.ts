import { comparisonPointSchema } from '@/features/tools/schemas/comparison.schema';
import { CheckIcon as Check } from '@/shared/components/ui/check';

export const comparisonPoints = [
  comparisonPointSchema.parse({
    description:
      'Use tools for consistency and maintenance of good mental hygiene.',
    title: 'Build Daily Habits',
  }),
  comparisonPointSchema.parse({
    description: 'Seek professional help for acute distress or complex trauma.',
    title: 'Crisis Management',
  }),
];

export const toolsComparisonIcon = Check;
