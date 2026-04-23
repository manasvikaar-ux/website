import { z } from 'zod';
import {
  aboutTeamMemberSchema,
  aboutTeamSectionSchema,
} from '@/features/about/schemas/team.schema';

export const aboutTeam = z.array(aboutTeamMemberSchema).parse([
  {
    bio: 'Driven by a belief that healing is a human right, not a privilege. Built Manasvikaar to be the space they once wished existed',
    imgAlt: 'Moitree Sarkar',
    imgSrc: '/about/team/moitree.webp',
    name: 'Moitree Sarkar',
    role: 'Founder',
    roleClassName: 'text-primary',
    shadowColor: 'bg-yellow-200',
  },
  {
    bio: 'A licensed psychologist with a background in trauma-informed care and expressive therapies. Guides the therapeutic approach across all programmes.',
    imgAlt: 'Lead Therapist Name',
    imgSrc: '/about/team/ankush.webp',
    name: 'Anksuh Hazra',
    role: 'Technical Head',
    roleClassName: 'text-blue-500',
    shadowColor: 'bg-blue-200',
  },
]);

export const aboutTeamSection = aboutTeamSectionSchema.parse({
  title: 'Meet the Minds Behind Manasvikaar',
});
