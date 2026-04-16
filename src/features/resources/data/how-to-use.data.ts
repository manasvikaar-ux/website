import { Hospital, Mail, Phone } from 'lucide-react';
import { howToUseStepsSchema } from '@/features/resources/schemas/how-to-use.schema';

export const howToUseSteps = howToUseStepsSchema.parse([
  {
    description:
      "Call a helpline or emergency number. If you are nervous, you don't have to give your name immediately.",
    icon: Phone,
    iconClassName: 'bg-yellow-100 text-yellow-700',
    title: '1. Contact',
  },
  {
    description:
      'Share what you are feeling. Trained professionals are there to listen without judgment and guide you.',
    icon: Mail,
    iconClassName: 'bg-blue-100 text-blue-700',
    title: '2. Speak',
  },
  {
    description:
      'Based on the advice, seek professional help at a nearby facility or book a consultation for long-term care.',
    icon: Hospital,
    iconClassName: 'bg-green-100 text-green-700',
    title: '3. Follow Up',
  },
]);
