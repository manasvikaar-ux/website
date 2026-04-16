import { NotebookPen, PenSquare } from 'lucide-react';
import {
  journalingFeatureIconSchema,
  toolkitCardSchema,
} from '@/features/tools/schemas/toolkit.schema';
import { FlameIcon as Flame } from '@/shared/components/ui/flame';
import { LockKeyholeIcon as LockKeyhole } from '@/shared/components/ui/lock-keyhole';
import { SmileIcon as Smile } from '@/shared/components/ui/smile';
import { SparklesIcon as Sparkles } from '@/shared/components/ui/sparkles';

export const toolkitCards = [
  toolkitCardSchema.parse({
    accentClassName: 'bg-green-100 text-green-800 border-green-200',
    buttonLabel: 'Coming Soon',
    buttonTone: 'primary',
    description:
      'Unload your thoughts with structured guidance. Our intelligent prompts adapt to your mood, helping you process emotions effectively.',
    icon: NotebookPen,
    iconClassName: 'text-green-600',
    title: 'Daily Journaling',
  }),
  toolkitCardSchema.parse({
    accentClassName: 'bg-orange-100 text-orange-600 border-orange-200',
    buttonLabel: 'Coming Soon',
    buttonTone: 'secondary',
    description:
      'Track emotional patterns over time. Simply tap the emoji that best represents your current state.',
    icon: Smile,
    iconClassName: 'text-orange-600',
    title: 'Emotional Checker',
  }),
  toolkitCardSchema.parse({
    accentClassName: 'bg-purple-100 text-purple-600 border-purple-200',
    buttonLabel: 'Coming Soon',
    buttonTone: 'tertiary',
    description:
      'A secure vault for your personal notes and milestones. Military-grade encryption ensures your privacy.',
    icon: LockKeyhole,
    iconClassName: 'text-purple-600',
    title: 'IDLocker',
  }),
];

export const journalingFeatureIcons = [
  journalingFeatureIconSchema.parse({
    icon: PenSquare,
    label: 'Guided Prompts',
  }),
  journalingFeatureIconSchema.parse({ icon: Flame, label: 'Daily Streaks' }),
];

export const toolsFeatureSuggestIcon = Sparkles;
