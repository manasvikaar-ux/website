import Image from 'next/image';
import { aboutHero } from '@/features/about/data/hero.data';
import { YellowButton } from '@/shared/components/neobrutal-button';

export const HeroSection = () => (
  <section className="relative overflow-hidden bg-background-cream pt-20 pb-24">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="relative z-10">
          <h1 className="mb-6 font-display text-4xl leading-tight font-semibold text-gray-900 md:text-4xl lg:text-4xl">
            {aboutHero.title}{' '}
            <span className="font-normal text-gray-700">
              {aboutHero.titleEmphasis}
            </span>
          </h1>
          <p className="mb-10 max-w-lg text-lg text-gray-600">
            {aboutHero.description}
          </p>
          <YellowButton>{aboutHero.cta}</YellowButton>
        </div>
        <div className="relative">
          <div
            className="relative z-10 overflow-hidden rounded-2xl border-2 border-gray-900 bg-orange-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            style={{ height: 500 }}
          >
            <Image
              alt={aboutHero.imgAlt}
              className="h-full w-full object-cover opacity-90 mix-blend-multiply"
              height={500}
              src={aboutHero.imgSrc}
              width={700}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);
