'use client';

import { therapyHeroContent } from '@/features/therapy/data/hero.data';
import { YellowButton } from '@/shared/components/neobrutal-button';
import { openCalendlyPopup } from '@/shared/lib/calendly';

export const HeroSection = () => (
  <section className="relative overflow-hidden bg-background-cream pt-30 pb-30">
    <div className="container mx-auto text-center sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h3 className="mb-6 font-display text-4xl leading-tight font-semibold text-gray-900 md:text-4xl">
          {therapyHeroContent.title} <br />
        </h3>
        <p className="mb-10 text-lg leading-relaxed text-gray-600">
          {therapyHeroContent.description}
        </p>
        <YellowButton
          onClick={() => {
            openCalendlyPopup('https://calendly.com/manasvikaar/30min');
          }}
        >
          {therapyHeroContent.buttonLabel}
        </YellowButton>
      </div>
    </div>
  </section>
);
