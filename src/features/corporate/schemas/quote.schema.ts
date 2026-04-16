import { z } from 'zod';

export const corporateQuoteContentSchema = z.object({
  messageLabel: z.string(),
  messagePlaceholder: z.string(),
  requirementLabel: z.string(),
  requirementPlaceholder: z.string(),
  submitLabel: z.string(),
  subtitle: z.string(),
  teamSizeLabel: z.string(),
  teamSizePlaceholder: z.string(),
  title: z.string(),
});
