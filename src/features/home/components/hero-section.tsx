'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  heroContent,
  heroImageAssets,
  heroStats,
} from '@/features/home/data/hero.data';
import {
  WhiteButton,
  YellowButton,
} from '@/shared/components/neobrutal-button';
import { openCalendlyPopup } from '@/shared/lib/calendly';

export const HeroSection = () => (
  <section className="bg-background-cream pt-16 pb-24">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
        <div>
          <h3 className="mt-15 font-display text-4xl font-semibold md:text-6xl lg:text-6xl xl:text-[3.4rem]">
            <span className="block">{heroContent.titleLineOne}</span>
            <span className="block font-semibold text-[#4e7a32] lg:whitespace-nowrap">
              {heroContent.titleLineTwo}
            </span>
          </h3>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-gray-600">
            {heroContent.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <YellowButton
              onClick={() => {
                openCalendlyPopup('https://calendly.com/manasvikaar/30min');
              }}
            >
              {heroContent.primaryCta}
            </YellowButton>
            <Link href="/workshops">
              <WhiteButton>{heroContent.secondaryCta}</WhiteButton>
            </Link>
          </div>
          <div className="mt-10 h-px w-full bg-gray-200" />
          <div className="mt-10 grid grid-cols-2 gap-6 border-gray-300 md:grid-cols-2">
            {heroStats.map((stat) => (
              <div className="flex items-start gap-3" key={stat.label}>
                <p className="w-16 shrink-0 font-display text-2xl font-semibold text-gray-900">
                  {stat.value}
                </p>
                <div className="w-px self-stretch bg-gray-300" />
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="overflow-hidden rounded-2xl border-2 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:p-10 lg:p-10">
            <Image
              alt="Mental Health and Inner Peace Illustration"
              className="block h-auto w-full rounded-md object-contain"
              height={1000}
              src={heroImageAssets.heroImage}
              width={900}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);
