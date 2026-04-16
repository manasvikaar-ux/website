import { z } from 'zod';
import { lucideIconSchema } from '@/shared/schemas/icon';

export const ArtTherapyCardSchema = z.object({
  bullets: z.array(z.string()),
  description: z.string(),
  icon: lucideIconSchema,
  title: z.string(),
  tone: z.enum(['blue', 'orange']),
});

export const ModuleChipSchema = z.object({
  icon: lucideIconSchema,
  label: z.string(),
  toneClassName: z.string(),
});

export const ModuleCardSchema = z.object({
  backgroundClassName: z.string(),
  description: z.string(),
  textClassName: z.string(),
  title: z.string(),
  titleClassName: z.string(),
});

export const ModuleMetaSchema = z.object({
  label: z.string(),
  value: z.string(),
});
