import type { z } from 'zod';
import type { comparisonPointSchema } from '@/features/tools/schemas/comparison.schema';

export type ComparisonPoint = z.infer<typeof comparisonPointSchema>;
