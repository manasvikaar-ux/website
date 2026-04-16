'use client';

import { Check, Diamond, Flower2 } from 'lucide-react';
import type { ComponentType } from 'react';
import { useState } from 'react';
import { Badge } from '@/shared/components/ui/badge';
import { Separator } from '@/shared/components/ui/separator';
import { SparklesIcon } from '@/shared/components/ui/sparkles';
import { cn } from '@/shared/lib/utils';
import { YellowButton } from '../../../shared/components/neobrutal-button';
import { pricingSectionContent } from '../data/pricing.data';

type PricingPlan = {
  badge: string;
  buttonText: string;
  features: string[];
  icon?: ComponentType<{ className?: string }>;
  isPopular?: boolean;
  name: string;
  price: string;
  yearlyPrice?: string;
};

type Pricing4Props = {
  className?: string;
  description?: string;
  plans?: PricingPlan[];
  title?: string;
};

const Pricing4 = ({
  title = 'Pricing',
  description = 'Check out our affordable pricing plans.',
  plans = [
    {
      badge: 'Free',
      buttonText: 'Get Started',
      features: [
        '45 minute confidential session',
        'Support for academic stress, emotional concerns, and personal challenges',
        'Conversations around relationships, self-esteem, and career confusion',
        'Flexible scheduling around your timetable',
      ],
      icon: Flower2,
      name: 'Students',
      price: '₹ 750',
    },
    {
      badge: 'Pro',
      buttonText: 'Purchase',
      features: [
        '60-minute video or in-person session',
        'Individual or couples counselling',
        'Unlimited chat support between sessions',
        'Personalised worksheet access',
      ],
      icon: SparklesIcon,
      name: 'Working Professionals & Couples',
      price: '₹ 1499 - 2000',
    },
    {
      badge: 'Elite',
      buttonText: 'Purchase',
      features: [
        '90-minute deep-dive sessions',
        'Priority scheduling with senior therapists',
        'Option to include family members',
        'Crisis intervention support available',
      ],
      icon: Diamond,
      isPopular: true,
      name: 'HNIs',
      price: '₹ 2500 onwards',
    },
  ],
  className,
}: Pricing4Props) => {
  const [isAnnually, _setIsAnnually] = useState(false);

  return (
    <section className={cn('py-32', className)}>
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-4xl font-semibold text-gray-900">
            {pricingSectionContent.heading}
          </h2>
          <p className="text-gray-800">{pricingSectionContent.subheading}</p>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-semibold lg:text-6xl">{title}</h2>

          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <p className="max-w-3xl text-muted-foreground lg:text-xl">
              {description}
            </p>
          </div>

          <div className="flex w-full flex-col gap-6 md:flex-row">
            {plans.map((plan) => {
              const Icon = plan.icon;

              return (
                <div
                  className={`flex w-full flex-col rounded-lg border p-6 ${
                    plan.isPopular === true ? 'bg-muted' : ''
                  }`}
                  key={plan.name}
                >
                  <div className="mb-6 flex items-center justify-between">
                    <Badge className="uppercase">{plan.badge}</Badge>
                    {Icon !== undefined && (
                      <Icon className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>

                  <h3 className="font-mono text-4xl lg:text-5xl">
                    {isAnnually ? (plan.yearlyPrice ?? plan.price) : plan.price}
                  </h3>

                  <p className="text-muted-foreground">
                    {isAnnually ? 'Per year' : 'Per session'}
                  </p>

                  <Separator className="my-6" />

                  <div className="flex h-full flex-col justify-between gap-10">
                    <ul className="space-y-4 text-muted-foreground">
                      {plan.features.map((feature) => (
                        <li className="flex items-center gap-2" key={feature}>
                          <Check className="h-4 w-4 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <YellowButton className="w-full">
                      {plan.buttonText}
                    </YellowButton>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing4 };
