import { z } from 'zod';
import {
  aboutTeamMemberSchema,
  aboutTeamSectionSchema,
} from '@/features/about/schemas/team.schema';

export const aboutTeam = z.array(aboutTeamMemberSchema).parse([
  {
    bio: 'Driven by a belief that healing is a human right, not a privilege. Built Manasvikaar to be the space they once wished existed.',
    imgAlt: 'Moitree Sarkar',
    imgSrc: '/about/team/member1.png',
    name: 'Moitree Sarkar',
    role: 'Founder',
    roleClassName: 'text-primary',
    shadowColor: 'bg-yellow-200',
  },
  {
    bio: 'A licensed psychologist with a background in trauma-informed care and expressive therapies. Guides the therapeutic approach across all programmes.',
    imgAlt: 'Lead Therapist Name',
    imgSrc: '/about/team/member2.png',
    name: 'Lead Therapist Name',
    role: 'Head of Clinical Services',
    roleClassName: 'text-blue-500',
    shadowColor: 'bg-blue-200',
  },
  {
    bio: 'Workshops Creates the spaces where people stop being alone with their feelings. Specialises in group facilitation, art therapy, and outreach.',
    imgAlt: 'Community Lead Name',
    imgSrc: '/about/team/member3.png',
    name: 'Community Lead Name',
    role: 'Head of Community',
    roleClassName: 'text-green-600',
    shadowColor: 'bg-green-200',
  },
]);

export const aboutTeamSection = aboutTeamSectionSchema.parse({
  title: 'Meet the Minds Behind Manasvikaar',
});
