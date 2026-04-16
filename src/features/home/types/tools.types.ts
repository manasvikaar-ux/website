import type { z } from 'zod';
import type {
  toolsFeatureItemSchema,
  toolsImageAssetsSchema,
  toolsSectionContentSchema,
} from '@/features/home/schemas/tools.schema';

export type ToolsFeatureItem = z.infer<typeof toolsFeatureItemSchema>;
export type ToolsSectionContent = z.infer<typeof toolsSectionContentSchema>;
export type ToolsImageAssets = z.infer<typeof toolsImageAssetsSchema>;
