import { z } from 'zod';

export const aboutTeamMemberSchema = z.object({
  bio: z.string(),
  imgAlt: z.string(),
  imgSrc: z.string(),
  name: z.string(),
  role: z.string(),
  roleClassName: z.string(),
  shadowColor: z.string(),
});

export const aboutTeamSectionSchema = z.object({
  title: z.string(),
});
