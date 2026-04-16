import { z } from 'zod';
import {
  aboutTeamMemberSchema,
  aboutTeamSectionSchema,
} from '@/features/about/schemas/team.schema';

export const aboutTeam = z.array(aboutTeamMemberSchema).parse([
  {
    bio: 'Driven by a belief that healing is a human right, not a privilege. Built Manasvikaar to be the space they once wished existed.',
    imgAlt: 'Moitree Sarkar',
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBu-SO88M8F9rVfb1CO8rzolRSfP56E9nIOY_XGkOSeigNdrHfY146QlqF0DqHTGjM0ZUv67zvGtukd43kypsOSViZcVpxzlX5DDQ-6hcqLGK26WXuI7Xp8rza31Tra2b8GIUY31xfprFyP94E4rHqdu0dgstlOsOdjTACNnS-PdughMjewUweFa4O_XWTM--6My5zIXSvl68KYr7UAcr1bTy77ksuSK-HJJjlWF0NRjk--uDnRz_DuMtMdJefaQ7ht4jSyvIYCjJ4',
    name: 'Moitree Sarkar',
    role: 'Founder',
    roleClassName: 'text-primary',
    shadowColor: 'bg-yellow-200',
  },
  {
    bio: 'A licensed psychologist with a background in trauma-informed care and expressive therapies. Guides the therapeutic approach across all programmes.',
    imgAlt: 'Lead Therapist Name',
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDDnKbCsAtWGHpCsb9W-aXU9sKqI3Wx7EQ63DYh14di61rVYgTyEbz47Z7kiaPEo17lqkmPd-BrV4cFyt3Kf2gj9OoNx5FrnJEs6DiJ1Fdrixa8R3HNPPNpBlR1T6zjFeo5CwGkJK5AHEyJs0KGD1cJv1go5Px1MHC3gPX7rdGOFwuo4OHpVb8Drlw9NT81tjH30ky5IaEaCAhkzZy1hgsfEd27Z-tYEYjQ__uJBQkBGs7gcOPM2T0_Bmd7E9c1ceiGxNiLIswHWwo',
    name: 'Lead Therapist Name',
    role: 'Head of Clinical Services',
    roleClassName: 'text-blue-500',
    shadowColor: 'bg-blue-200',
  },
  {
    bio: 'Workshops Creates the spaces where people stop being alone with their feelings. Specialises in group facilitation, art therapy, and outreach.',
    imgAlt: 'Community Lead Name',
    imgSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBKcr3z_OLQIu7wVulyNzk8frxvoAvSEf-hDjqCt59_3x-fRvgop-qqRhm1k8FC-tM5VOqA6hE8u-GBkPjChdpoyCUhdQPPYKexQaxiFLckMlBaiXjFc4AfSDdzLFBYC4GP6EulAL3NYJZXfrFHf5wRQPa7OkMaXzUvafGiQLSdnx_C6BDfb_vYsObL4Pn-7uB4bHfw8F0DNOlAs9lOaLykgRW-Gi0tJ1tapjcJgi6vlwk0ZgFROSARjn9yKIESM-jt3kfTO2O4-is',
    name: 'Community Lead Name',
    role: 'Head of Community',
    roleClassName: 'text-green-600',
    shadowColor: 'bg-green-200',
  },
]);

export const aboutTeamSection = aboutTeamSectionSchema.parse({
  title: 'Meet the Minds Behind Manasvikaar',
});
