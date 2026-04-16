import type { z } from 'zod';
import type {
  aboutTeamMemberSchema,
  aboutTeamSectionSchema,
} from '@/features/about/schemas/team.schema';

export type AboutTeamMember = z.infer<typeof aboutTeamMemberSchema>;
export type AboutTeamSection = z.infer<typeof aboutTeamSectionSchema>;
