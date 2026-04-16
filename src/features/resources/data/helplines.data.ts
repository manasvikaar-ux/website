import { Building2, Cross, UserRound, Venus } from 'lucide-react';
import { helplinesSchema } from '@/features/resources/schemas/helplines.schema';
import { HeartHandshakeIcon as HeartHandshake } from '@/shared/components/ui/heart-handshake';
import { MessageSquareIcon as MessageSquare } from '@/shared/components/ui/message-square';

export const helplines = helplinesSchema.parse([
  {
    actionLabel: 'Call Now',
    actionType: 'call',
    badge: '24/7',
    badgeClassName: 'bg-teal-800 text-white',
    description:
      'Voluntary, professional and confidential care and support to the depressed and the suicidal.',
    icon: HeartHandshake,
    iconClassName: 'text-teal-700',
    number: '91-9820466726',
    title: 'AASRA',
    toneClassName: 'bg-background-teal',
  },
  {
    actionLabel: 'Copy Number',
    actionType: 'copy',
    badge: '24/7',
    badgeClassName: 'bg-orange-800 text-white',
    description:
      'Free psychological counselling and crisis mediation to anyone who is experiencing distress.',
    icon: MessageSquare,
    iconClassName: 'text-orange-700',
    number: '1860 266 2345',
    title: 'Vandrevala Foundation',
    toneClassName: 'bg-background-peach',
  },
  {
    actionLabel: 'Call Now',
    actionType: 'call',
    badge: 'Govt',
    badgeClassName: 'bg-yellow-800 text-white',
    description:
      'Mental health rehabilitation helpline by the Ministry of Social Justice and Empowerment.',
    icon: Cross,
    iconClassName: 'text-yellow-700',
    number: '1800 599 0019',
    title: 'Kiran Helpline',
    toneClassName: 'bg-[#FCD34D]',
  },
  {
    actionLabel: 'Call Now',
    actionType: 'call',
    badge: '24/7',
    badgeClassName: 'bg-gray-800 text-white',
    description:
      'Support for women in distress. A service by the Ministry of Women and Child Development.',
    icon: Venus,
    iconClassName: 'text-pink-700',
    number: '1091',
    title: 'Women Helpline',
    toneClassName: 'bg-pink-100',
  },
  {
    actionLabel: 'Call Now',
    actionType: 'call',
    badge: '24/7',
    badgeClassName: 'bg-gray-800 text-white',
    description:
      'Emergency helpline for children in need of care and protection.',
    icon: UserRound,
    iconClassName: 'text-blue-700',
    number: '1098',
    title: 'Childline India',
    toneClassName: 'bg-blue-100',
  },
  {
    actionLabel: 'Call Now',
    actionType: 'call',
    badge: 'Day',
    badgeClassName: 'bg-gray-800 text-white',
    description:
      'National Helpline for Senior Citizens ensuring a life of dignity for elders.',
    icon: Building2,
    iconClassName: 'text-green-700',
    number: '14567',
    title: 'Elder Line',
    toneClassName: 'bg-green-100',
  },
]);
