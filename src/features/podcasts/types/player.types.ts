import type { z } from 'zod';
import type {
  PlayerContentSchema,
  PlayerIconsSchema,
  TranscriptActionIconsSchema,
  TranscriptEntrySchema,
} from '@/features/podcasts/schemas/player.schema';

export type TranscriptEntry = z.infer<typeof TranscriptEntrySchema>;
export type PlayerContent = z.infer<typeof PlayerContentSchema>;
export type PlayerIcons = z.infer<typeof PlayerIconsSchema>;
export type TranscriptActionIcons = z.infer<typeof TranscriptActionIconsSchema>;
