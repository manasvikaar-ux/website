import { Bolt } from 'lucide-react';
import { TakeawaysContentSchema } from '@/features/podcasts/schemas/takeaways.schema';

export const takeawaysContent = TakeawaysContentSchema.parse({
  actionSteps: [
    'Use a dual-tracking app for mood and cycle.',
    "Schedule 'low-energy' days during luteal phases.",
    'Consult with an Endocrinologist and a Therapist.',
  ],
  coreInsight:
    "Reproductive health isn't just physical. Hormonal cycles directly affect serotonin and dopamine availability, meaning mental health care must be cyclical, not linear.",
  coreTitle: 'The Core Insight',
  icon: Bolt,
  stepsTitle: 'Actionable Steps',
  title: 'Key Takeaways (TL;DR)',
});
