import type { z } from 'zod';
import type { emergencySupportInfoSchema } from '@/features/therapy/schemas/emergency-support.schema';

export type EmergencySupportInfo = z.infer<typeof emergencySupportInfoSchema>;
