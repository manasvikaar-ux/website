import Link from 'next/link';
import { workshopsHero } from '@/features/workshops/data/hero.data';
import { YellowButton } from '@/shared/components/neobrutal-button';

export const HeroSection = () => (
  <section className="bg-background-cream pt-30 pb-30">
    <div className="container mx-auto px-5 text-center sm:px-6">
      {/* <div className="mb-5 inline-flex items-center rounded-full border border-teal-200 bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-900">
        {workshopsHero.badge}
      </div> */}
      <h3 className="mx-auto mb-6 max-w-lg font-display text-4xl leading-tight font-semibold text-gray-900 md:text-4xl">
        {workshopsHero.title}
        <br />
        {/* {workshopsHero.titleLineTwo} */}
      </h3>
      <p className="text-md mx-auto mb-10 max-w-2xl leading-relaxed text-gray-600">
        {workshopsHero.description}
      </p>
      <Link href="#upcoming">
        <YellowButton>{workshopsHero.cta}</YellowButton>
      </Link>
    </div>
  </section>
);
