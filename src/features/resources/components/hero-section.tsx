import { resourcesHero } from '@/features/resources/data/hero.data';

export const HeroSection = () => (
  <section className="bg-background-cream pt-16 pb-12">
    <div className="container mx-auto px-5 text-center sm:px-6">
      <h1 className="mb-6 font-display text-4xl leading-tight font-semibold text-gray-900 md:text-4xl lg:text-4xl">
        {resourcesHero.title}
        <br />
        <span className="font-normal text-gray-700">
          {resourcesHero.titleEmphasis}
        </span>
      </h1>
      <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-600">
        {resourcesHero.description}
      </p>
    </div>
  </section>
);
