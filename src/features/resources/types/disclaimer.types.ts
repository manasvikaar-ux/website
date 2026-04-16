import type { z } from 'zod';
import type { resourcesDisclaimerSchema } from '@/features/resources/schemas/disclaimer.schema';

export type ResourcesDisclaimer = z.infer<typeof resourcesDisclaimerSchema>;
