import { z } from 'zod';
import { lucideIconSchema } from '@/shared/schemas/icon';

export const TranscriptEntrySchema = z.object({
  quote: z.boolean().optional(),
  speaker: z.string(),
  text: z.string(),
  timestamp: z.string(),
});

export const PlayerContentSchema = z.object({
  episodeTitle: z.string(),
  host: z.string(),
  speed: z.string(),
  timeCurrent: z.string(),
  timeTotal: z.string(),
});

export const PlayerIconsSchema = z.object({
  favorite: lucideIconSchema,
  forward: lucideIconSchema,
  pause: lucideIconSchema,
  replay: lucideIconSchema,
  share: lucideIconSchema,
  visualizer: lucideIconSchema,
  volume: lucideIconSchema,
});

export const TranscriptActionIconsSchema = z.object({
  bookmark: lucideIconSchema,
  download: lucideIconSchema,
});
