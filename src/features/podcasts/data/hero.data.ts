import { Clock3 } from 'lucide-react';
import {
  FeaturedEpisodeIconsSchema,
  FeaturedEpisodeMetaSchema,
  HeroContentSchema,
} from '@/features/podcasts/schemas/hero.schema';
import { CalendarDaysIcon as CalendarDays } from '@/shared/components/ui/calendar-days';
import { MicIcon as Mic } from '@/shared/components/ui/mic';

export const podcastsHeroContent = HeroContentSchema.parse({
  badge: 'Featured Wellness Talk',
  ctaPrimary: 'Latest Episode',
  ctaSecondary: 'Browse Archive',
  description:
    'Deep dives into mental wellness, emotional intelligence, and stories of resilience with leading experts and survivors.',
  title: 'Conversations on',
  titleEmphasis: 'Healing',
});

export const featuredEpisode = FeaturedEpisodeMetaSchema.parse({
  date: 'Oct 12, 2023',
  duration: '42 mins',
  summary:
    'Understanding how our brain processes trauma and how to build lasting coping mechanisms.',
  title: 'The Science of Resilience',
});

export const featuredEpisodeIcons = FeaturedEpisodeIconsSchema.parse({
  calendar: CalendarDays,
  clock: Clock3,
  mic: Mic,
});
