import { z } from 'zod';
import { lucideIconSchema } from '@/shared/schemas/icon';

export const EpisodeTagSchema = z.object({
  label: z.string(),
  tone: z.string(),
});

export const EpisodeCardSchema = z.object({
  description: z.string(),
  duration: z.string(),
  episode: z.string(),
  tags: z.array(EpisodeTagSchema),
  title: z.string(),
  tone: z.string(),
});

export const RecentConversationsContentSchema = z.object({
  actionLabel: z.string(),
  description: z.string(),
  title: z.string(),
});

export const RecentConversationIconsSchema = z.object({
  filter: lucideIconSchema,
  listenArrow: lucideIconSchema,
  play: lucideIconSchema,
  search: lucideIconSchema,
});
