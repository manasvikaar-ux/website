import { BriefcaseBusiness, PenLine, Podcast, Toolbox } from 'lucide-react';
import {
  toolsFeatureItemSchema,
  toolsSectionContentSchema,
} from '@/features/home/schemas/tools.schema';
import { UsersIcon as Users } from '@/shared/components/ui/users';

export const toolsFeatureItems = [
  toolsFeatureItemSchema.parse({
    cardLabel: 'Upcoming Workshop',
    ctaHref: '/workshops',
    ctaLabel: 'Go to Workshops',
    description:
      'Interactive sessions using art therapy, journaling, and handwriting analysis to deepen self-awareness and emotional expression.',
    icon: Toolbox,
    iconClass: 'bg-[#AAD7D0]  text-black',
    previewAlt:
      'Small group workshop session with participants creating together',
    previewImage: '/assets/tools/workshops.png',
    slides: [
      {
        audience: 'For Kids 📍',
        cardInfo: '4th April 2026, at Bunaphile Roasters, Kolkata',
        cardTitle: 'Play Pause & Heal',
        image: '/assets/tools/workshops.png',
      },
      {
        audience: 'For Adults 📍',
        cardInfo: '30th August 2025, at Cafe Mueller by Art Cafe, Kolkata',
        cardTitle: 'Play Pause & Heal',
        image: '/assets/tools/workshops-adults-1.png',
      },
      {
        audience: 'For Adults 📍',
        cardInfo: '9th November 2025, at Bunaphile Roasters, Kolkata',
        cardTitle: 'Play Pause & Heal',
        image: '/assets/tools/workshops-adults-2.png',
      },
    ],
    title: 'Workshops',
  }),
  toolsFeatureItemSchema.parse({
    cardInfo: 'Book a Consultation',
    cardLabel: 'Book Session',
    ctaHref: '/therapy',
    ctaLabel: 'Book Session',
    description:
      "Safe, confidential sessions with licensed professionals to navigate emotions, relationships, and life's hardest chapters.",
    icon: Users,
    iconClass: 'bg-[#AAD7D0]  text-black',
    previewAlt:
      'Supportive 1-on-1 therapy conversation between professional and client',
    previewImage: '/assets/tools/therapy.png',
    title: 'Individual, Couple & Group Therapy',
  }),
  toolsFeatureItemSchema.parse({
    cardLabel: 'Coaching',
    ctaHref: '/coaching',
    ctaLabel: 'Explore Coaching',
    description:
      'For those pursuing a deeper understanding of psychology — structured learning experiences that build emotional intelligence, sharpen self-awareness, and bring mental health concepts to life.',
    icon: BriefcaseBusiness,
    iconClass: 'bg-[#AAD7D0]  text-black',
    previewAlt:
      'Wellness facilitator leading a corporate mental health session',
    previewImage: '/assets/tools/coaching.png',
    title: 'Coaching',
  }),
  toolsFeatureItemSchema.parse({
    cardLabel: 'Journaling',
    ctaHref: '/tools',
    ctaLabel: 'Start Journaling',
    description:
      'Guided prompts to help you reflect on your thoughts, track your moods, and build emotional clarity over time.',
    icon: PenLine,
    iconClass: 'bg-[#AAD7D0]  text-black',
    previewAlt:
      'Minimal botanical illustration representing reflective journaling',
    previewImage: '/assets/tools/journaling.png',
    title: 'Journaling & Gratitude',
  }),
  toolsFeatureItemSchema.parse({
    cardLabel: 'Latest Episode',
    ctaHref: '/podcasts',
    ctaLabel: 'Listen Now',
    description:
      'Honest, thoughtful conversations on mental health, identity, and growth, to learn, reflect, and feel less alone.',
    icon: Podcast,
    iconClass: 'bg-[#AAD7D0]  text-black',
    previewAlt:
      'Friends supporting each other outdoors after a heartfelt conversation',
    previewImage: '/assets/tools/podcast.png',
    title: 'Podcast and Blogs',
  }),
];

export const toolsSectionContent = toolsSectionContentSchema.parse({
  description:
    'Manasvikaar is not just a therapy platform. It is a community, a place where your emotions are not edited, labelled, or rushed. Through therapy, creative workshops, journaling tools, and honest conversations, we help you build a relationship with your own inner world. One session, one breath, one word at a time.',
  heading: 'We Got You Covered',
});
