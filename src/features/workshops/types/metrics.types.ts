import type { z } from 'zod';
import type { MetricItemSchema } from '@/features/workshops/schemas/metrics.schema';

export type MetricItem = z.infer<typeof MetricItemSchema>;
