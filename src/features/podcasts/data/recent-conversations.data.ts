import { Filter } from 'lucide-react';
import { z } from 'zod';
import {
  EpisodeCardSchema,
  RecentConversationIconsSchema,
  RecentConversationsContentSchema,
} from '@/features/podcasts/schemas/recent-conversations.schema';
import { ArrowRightIcon as ArrowRight } from '@/shared/components/ui/arrow-right';
import { PlayIcon as Play } from '@/shared/components/ui/play';
import { SearchIcon as Search } from '@/shared/components/ui/search';
import { SmileIcon as Smile } from '@/shared/components/ui/smile';
import { UsersIcon as Users } from '@/shared/components/ui/users';
import { WindIcon as Wind } from '@/shared/components/ui/wind';

export const recentConversationsContent =
  RecentConversationsContentSchema.parse({
    actionLabel: 'Load More Episodes',
    description: 'Explore our library of over 50+ episodes.',
    title: 'Recent Conversations',
  });

export const recentConversationIcons = RecentConversationIconsSchema.parse({
  filter: Filter,
  listenArrow: ArrowRight,
  play: Play,
  search: Search,
});

export const recentEpisodes = z.array(EpisodeCardSchema).parse([
  {
    description:
      'A conversation with Sameer Kapoor on navigating societal expectations and vulnerability.',
    duration: '38 mins',
    episode: 'Ep 12',
    tags: [
      { label: 'Self Care', tone: 'bg-orange-100 text-orange-700' },
      { label: 'Therapy', tone: 'bg-blue-100 text-blue-700' },
    ],
    title: "Men's Mental Health: Breaking Silence",
    tone: 'bg-[#f9dcc4]/40 text-orange-600',
  },
  {
    description:
      'Strategies for healthy communication and setting boundaries in early relationship stages.',
    duration: '52 mins',
    episode: 'Ep 11',
    tags: [{ label: 'Relationships', tone: 'bg-teal-100 text-teal-700' }],
    title: 'Conflict Resolution in Modern Dating',
    tone: 'bg-background-teal/40 text-teal-600',
  },
  {
    description:
      "How intentional gratitude re-wires the brain's default mode network for positivity.",
    duration: '29 mins',
    episode: 'Ep 10',
    tags: [
      { label: 'Happiness', tone: 'bg-yellow-100 text-yellow-800' },
      { label: 'Neuroscience', tone: 'bg-purple-100 text-purple-700' },
    ],
    title: 'The Habit of Gratitude',
    tone: 'bg-primary/20 text-primary',
  },
]);

export const recentEpisodeToneIcons = [Wind, Users, Smile] as const;
