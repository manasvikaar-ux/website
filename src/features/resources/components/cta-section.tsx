import { ctaIcons, resourcesCta } from '@/features/resources/data/cta.data';
import {
  WhiteButton,
  YellowButton,
} from '@/shared/components/neobrutal-button';

const ResourcesCtaIcon = ctaIcons.cta;

export const CtaSection = () => (
  <section className="border-t border-gray-900 bg-background-peach py-20">
    <div className="container mx-auto px-5 text-center">
      <ResourcesCtaIcon
        className="mx-auto mb-4 size-9 text-gray-800"
        size={36}
      />
      <h2 className="mb-4 font-display text-4xl font-semibold text-gray-900 md:text-4xl">
        {resourcesCta.title}
      </h2>
      <p className="mx-auto mb-8 max-w-2xl text-gray-800">
        {resourcesCta.description}
      </p>
      <div className="flex justify-center gap-4">
        <YellowButton>{resourcesCta.primaryLabel}</YellowButton>
        <WhiteButton>{resourcesCta.secondaryLabel}</WhiteButton>
      </div>
    </div>
  </section>
);
