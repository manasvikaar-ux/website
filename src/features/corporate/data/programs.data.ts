import { AlertCircle, Handshake, ShieldCheck, Zap } from 'lucide-react';
import type { CorporateProgramItem } from '@/features/corporate/types/programs.types';
import { FlameIcon as Flame } from '@/shared/components/ui/flame';

export const corporateProgramsContent = {
  description:
    'Grounded in the official psychology curriculum, and brought to life with depth, context, and care.',
  title: 'What will you explore',
} as const;

export const corporatePrograms: CorporateProgramItem[] = [
  {
    description:
      'Where did psychology begin, and what does it actually study? From defining behaviour to understanding the major schools of thought — Behaviourism, Psychoanalysis, Gestalt, and beyond',
    icon: AlertCircle,
    iconClassName: 'bg-white/50 border-black/10 text-gray-900',
    title: 'The Subject of Psychology',
    toneClassName: 'bg-primary',
  },
  {
    description:
      'How do psychologists know what they know? Learn the science behind observation, experimentation, case studies, surveys, and how data is ethically collected and interpreted.',
    icon: Handshake,
    iconClassName: 'bg-white/50 border-black/10 text-gray-900',
    title: 'Methods of Enquiry',
    toneClassName: 'bg-background-teal',
  },
  {
    description:
      'How do we experience the world around us? Explore how the mind selects, organises, and makes sense of sensory information — and where it goes wrong.',
    icon: ShieldCheck,
    iconClassName: 'bg-green-100 border-black/10 text-green-700',
    title: 'Attention, Sensation & Perception',
    toneClassName: 'bg-white',
  },
  {
    description:
      'From classical conditioning to how memories are formed, stored, and forgotten — understand the mechanisms that shape how we take in and hold onto experience',
    icon: Zap,
    iconClassName: 'bg-orange-100 border-black/10 text-orange-700',
    title: 'Learning & Memory',
    toneClassName: 'bg-white',
  },
  {
    description:
      'How do we solve problems, make decisions, and think creatively? Explore the architecture of thought and what gets in the way of clear reasoning..',
    icon: Flame,
    iconClassName: 'bg-white/50 border-black/10 text-gray-900',
    title: 'Thinking, Reasoning & Creativity ',
    toneClassName: 'bg-primary',
    wide: true,
  },
  {
    description:
      "What drives human behaviour? From Maslow's hierarchy to the biology of emotion — understand what moves people and why.",
    icon: Flame,
    iconClassName: 'bg-orange-100 border-black/10 text-orange-700',
    title: 'Motivation & Emotion',
    toneClassName: 'bg-white',
  },
  {
    description:
      'How do we grow — physically, cognitively, and emotionally — from infancy through adulthood? Explore the key stages and what shapes them.',
    icon: ShieldCheck,
    iconClassName: 'bg-white/50 border-black/10 text-gray-900',
    title: 'Human Development Across the Lifespan',
    toneClassName: 'bg-background-teal',
  },
  {
    description:
      'What makes each person unique? Study the major theories of personality, the concept of self, emotional intelligence, and how individual differences are understood and assessed.',
    icon: Zap,
    iconClassName: 'bg-green-100 border-black/10 text-green-700',
    title: 'Personality, Self & Individual Differences',
    toneClassName: 'bg-white',
  },
  {
    description:
      'Understand the nature of stress, how it affects the mind and body, and the strategies — both effective and ineffective — that people use to cope.',
    icon: AlertCircle,
    iconClassName: 'bg-white/50 border-black/10 text-gray-900',
    title: 'Stress & Meeting Life Challenges',
    toneClassName: 'bg-primary',
  },
  {
    description:
      'From anxiety and depression to schizophrenia — learn to recognise, understand, and contextualise the major psychological disorders with clinical accuracy and human sensitivity.',
    icon: Handshake,
    iconClassName: 'bg-orange-100 border-black/10 text-orange-700',
    title: 'Psychological Disorders',
    toneClassName: 'bg-white',
  },
  {
    description:
      'An introduction to psychotherapy — behavioural, cognitive, humanistic, and alternative approaches — and what the process of healing actually looks like in practice.',
    icon: ShieldCheck,
    iconClassName: 'bg-white/50 border-black/10 text-gray-900',
    title: 'Therapeutic Approaches',
    toneClassName: 'bg-background-teal',
  },
  {
    description:
      'How do people influence each other? Explore attitudes, prejudice, conformity, obedience, and the group dynamics — including the Indian social context.',
    icon: Zap,
    iconClassName: 'bg-green-100 border-black/10 text-green-700',
    title: 'Social Behaviour, Attitudes & Group Processes',
    toneClassName: 'bg-white',
    wide: true,
  },
];
