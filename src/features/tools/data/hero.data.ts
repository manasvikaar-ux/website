import {
  heroContentSchema,
  heroHighlightSchema,
} from '@/features/tools/schemas/hero.schema';
import { BrainIcon as Brain } from '@/shared/components/ui/brain';
import { LockIcon as Lock } from '@/shared/components/ui/lock';
import { TrendingUpIcon as TrendingUp } from '@/shared/components/ui/trending-up';

export const toolsHero = heroContentSchema.parse({
  badge: 'New: AI-Powered Journaling',
  description:
    'Take charge of your mental well-being with our suite of self-guided tools. From tracking your mood to securing your personal thoughts, we provide the digital sanctuary you need to thrive independently.',
  primaryCta: 'Coming Soon',
  secondaryCta: 'Coming Soon',
  title: 'Empower Your',
  titleEmphasis: 'Self-Care Journey.',
});

export const toolsHeroHighlights = [
  heroHighlightSchema.parse({
    description: 'Understand your inner patterns with daily prompts.',
    icon: Brain,
    iconClassName: 'bg-blue-100 text-blue-600',
    title: 'Self-Reflection',
  }),
  heroHighlightSchema.parse({
    description: 'Visualize your emotional progress over time.',
    icon: TrendingUp,
    iconClassName: 'bg-green-100 text-green-600',
    title: 'Growth Tracking',
  }),
  heroHighlightSchema.parse({
    description: 'Your thoughts are encrypted and solely yours.',
    icon: Lock,
    iconClassName: 'bg-purple-100 text-purple-600',
    title: 'Private & Secure',
  }),
];
