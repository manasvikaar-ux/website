import type { CorporateOutcomeItem } from '@/features/corporate/types/outcomes.types';
import { HeartHandshakeIcon as HeartHandshake } from '@/shared/components/ui/heart-handshake';
import { MessageCircleIcon as MessageCircle } from '@/shared/components/ui/message-circle';
import { UsersIcon as Users } from '@/shared/components/ui/users';

export const corporateOutcomes: CorporateOutcomeItem[] = [
  {
    description:
      "Tell us where you are in your journey and what you're hoping to grow into.",
    icon: MessageCircle,
    iconClassName: 'bg-green-50 border-green-100 text-green-600',
    title: 'Apply',
  },
  {
    description:
      "We understand your background, your goals, and design a path that fits where you're headed.",
    icon: HeartHandshake,
    iconClassName: 'bg-orange-50 border-orange-100 text-orange-600',
    title: 'Get Oriented',
  },
  {
    description:
      'Structured sessions that go beyond theory — focused on who you are becoming as a practitioner.',
    icon: Users,
    iconClassName: 'bg-blue-50 border-blue-100 text-blue-600',
    title: 'Begin Coaching',
  },
];
