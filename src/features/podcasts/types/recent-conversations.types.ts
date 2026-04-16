import type { z } from 'zod';
import type {
  EpisodeCardSchema,
  EpisodeTagSchema,
  RecentConversationIconsSchema,
  RecentConversationsContentSchema,
} from '@/features/podcasts/schemas/recent-conversations.schema';

export type EpisodeTag = z.infer<typeof EpisodeTagSchema>;
export type EpisodeCard = z.infer<typeof EpisodeCardSchema>;
export type RecentConversationsContent = z.infer<
  typeof RecentConversationsContentSchema
>;
export type RecentConversationIcons = z.infer<
  typeof RecentConversationIconsSchema
>;
