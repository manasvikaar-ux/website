import { Camera, Mail } from 'lucide-react';
import { MessageCircleIcon as MessageCircle } from '@/shared/components/ui/message-circle';
import { SendIcon as Send } from '@/shared/components/ui/send';

export const footerLinkGroups = [
  {
    links: [
      { href: '/therapy', label: 'Therapy' },
      { href: '/workshops', label: 'Workshops' },
      { href: '/coaching', label: 'Coaching' },
      { href: '/tools', label: 'Tools' },
      { href: '/podcasts', label: 'Podcasts' },
      { href: '/resources', label: 'Resources' },
      { href: '/about', label: 'About' },
    ],
    title: 'Quick Links',
  },
  {
    links: [
      { href: '/workshops#kolkata', label: 'Workshops in Kolkata' },
      { href: '/workshops#virtual', label: 'Virtual Workshops' },
    ],
    title: 'Solutions',
  },
  {
    links: [
      { href: '/terms', label: 'Terms & Conditions' },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/about', label: 'Contact Us' },
    ],
    title: 'legal',
  },
] as const;

export const footerSocialItems = [
  { href: 'https://instagram.com/manasvikaar', icon: Camera, id: 'instagram' },
  { href: 'mailto:manasvikaar@gmail.com', icon: Mail, id: 'email' },
  { href: 'https://wa.me/918050072071', icon: MessageCircle, id: 'whatsapp' },
  { href: 'https://t.me/manasvikaar', icon: Send, id: 'telegram' },
] as const;
