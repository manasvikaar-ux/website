import Image from 'next/image';
import { ApplyModal } from '@/features/corporate/components/apply-modal';
import {
  corporateHeroAvatars,
  corporateHeroContent,
  corporateHeroVisuals,
} from '@/features/corporate/data/hero.data';
import {
  WhiteButton,
  YellowButton,
} from '@/shared/components/neobrutal-button';
import { TrendingUpIcon as TrendingUp } from '@/shared/components/ui/trending-up';

export const HeroSection = () => (
  <section className="relative overflow-hidden bg-background-cream pt-20 pb-24">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="relative z-10">
          <h3 className="mb-6 font-display text-5xl leading-tight font-semibold text-gray-900 md:text-6xl lg:text-4xl">
            {corporateHeroContent.title}
          </h3>
          <p className="mb-10 max-w-lg text-lg leading-relaxed text-gray-600">
            {corporateHeroContent.description}
          </p>
          <div className="mb-16 flex flex-col gap-4 sm:flex-row">
            <ApplyModal>
              <YellowButton>{corporateHeroContent.ctaPrimary}</YellowButton>
            </ApplyModal>
            <WhiteButton>{corporateHeroContent.ctaSecondary}</WhiteButton>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium text-gray-600">
            <div className="flex -space-x-3">
              {corporateHeroAvatars.map((avatar) => (
                <div
                  className="h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-gray-200"
                  key={avatar.src}
                >
                  <Image
                    alt={avatar.alt}
                    className="h-full w-full object-cover"
                    height={40}
                    src={avatar.src}
                    width={40}
                  />
                </div>
              ))}
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gray-100 text-xs font-semibold text-gray-600">
                {corporateHeroContent.trustPlus}
              </div>
            </div>
            <span>{corporateHeroContent.trustLabel}</span>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 overflow-hidden rounded-2xl border-2 border-gray-900 bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image
              alt="Corporate team meeting effectively"
              className="h-[450px] w-full rounded-xl object-cover contrast-125 grayscale"
              height={900}
              src={corporateHeroVisuals.heroImage}
              width={900}
            />
            <div className="absolute right-10 bottom-10 left-10 rounded-xl border border-gray-900 bg-background-cream p-4 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="rounded-full border border-gray-900 bg-yellow-100 p-3">
                  <TrendingUp className="text-yellow-700" size={20} />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    {corporateHeroContent.statLabel}
                  </p>
                  <p className="text-sm text-gray-600">
                    {corporateHeroContent.statSubtext}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 -z-10 h-40 w-40 rounded-full bg-background-teal opacity-50 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 -z-10 h-40 w-40 rounded-full bg-background-peach opacity-50 blur-3xl" />
        </div>
      </div>
    </div>
  </section>
);
