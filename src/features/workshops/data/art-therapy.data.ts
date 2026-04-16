import { BookOpen } from 'lucide-react';
import {
  ArtTherapyCardSchema,
  ModuleCardSchema,
  ModuleMetaSchema,
} from '@/features/workshops/schemas/art-therapy.schema';
import { PenToolIcon as PenTool } from '@/shared/components/ui/pen-tool';

export const artTherapyCards = [
  ArtTherapyCardSchema.parse({
    bullets: [
      'Build confidence in self-expression',
      'Improve focus and calm',
      'Explore emotions without needing the right words',
    ],
    description:
      'A gentle, imaginative space where children use art and movement to explore big feelings in safe, manageable ways.',
    icon: BookOpen,
    title: 'For Kids',
    tone: 'blue',
  }),
  ArtTherapyCardSchema.parse({
    bullets: [
      'Release emotional stress through creative process',
      "Uncover what's been sitting quietly beneath the surface",
      'Find stillness through the act of making',
    ],
    description:
      "Guided visual experiences that help you access what words sometimes can't reach",
    icon: PenTool,
    title: 'For Adults',
    tone: 'orange',
  }),
];

export const moduleCards = [
  ModuleCardSchema.parse({
    backgroundClassName: 'bg-primary border-primary/50',
    description:
      'Guided techniques to understand triggers and develop healthy coping strategies.',
    textClassName: 'text-gray-800',
    title: 'Anger Management',
    titleClassName: 'text-gray-900',
  }),
  ModuleCardSchema.parse({
    backgroundClassName: 'bg-background-teal border-teal-200',
    description:
      'Breathing exercises, grounding techniques, and journaling prompts to ease anxiety.',
    textClassName: 'text-teal-900',
    title: 'Anxiety Relief',
    titleClassName: 'text-teal-900',
  }),
  ModuleCardSchema.parse({
    backgroundClassName: 'bg-white border-gray-200',
    description:
      'Present-moment awareness practices to cultivate calm and mental clarity.',
    textClassName: 'text-gray-600',
    title: 'Mindfulness',
    titleClassName: 'text-gray-900',
  }),
  ModuleCardSchema.parse({
    backgroundClassName: 'bg-orange-100 border-orange-200',
    description:
      'Creative visualization and collage exercises to clarify your goals and dreams.',
    textClassName: 'text-orange-800',
    title: 'Vision Board',
    titleClassName: 'text-orange-900',
  }),
  ModuleCardSchema.parse({
    backgroundClassName: 'bg-blue-100 border-blue-200',
    description:
      'Affirmation journaling and intention-setting practices for personal transformation.',
    textClassName: 'text-blue-800',
    title: 'Manifestation',
    titleClassName: 'text-blue-900',
  }),
];

export const moduleMeta = [
  ModuleMetaSchema.parse({ label: 'Duration', value: '60-90 min sessions' }),
  ModuleMetaSchema.parse({
    label: 'Format',
    value: 'Individual or Group',
  }),
  ModuleMetaSchema.parse({
    label: 'Platform',
    value: 'Zoom / Google Meet',
  }),
  ModuleMetaSchema.parse({ label: 'Materials', value: 'PDFs Provided' }),
];
