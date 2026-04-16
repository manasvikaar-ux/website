'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  toolsFeatureItems,
  toolsSectionContent,
} from '@/features/home/data/tools.data';
import { YellowButton } from '@/shared/components/neobrutal-button';
import { Card, CardContent } from '@/shared/components/ui/card';
import { cn } from '@/shared/lib/utils';

export const ToolsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  const activeItem = toolsFeatureItems[activeIndex];
  if (activeItem === undefined) {
    return null;
  }

  const slideCount = activeItem.slides?.length ?? 0;
  const slides = activeItem.slides ?? [];
  const hasSlides = slideCount > 0;

  const currentSlide = hasSlides ? slides[slideIndex] : null;
  const currentImage = currentSlide
    ? currentSlide.image
    : activeItem.previewImage;

  useEffect(() => {
    setSlideIndex(0);
  }, [activeIndex]);

  useEffect(() => {
    if (!hasSlides) {
      return;
    }

    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slideCount);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [hasSlides, slideCount]);

  return (
    <section className="relative overflow-hidden bg-background-teal py-24">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 container mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="sticky top-24">
            <h2 className="mb-6 font-display text-4xl font-semibold text-gray-900">
              {activeItem.title}
            </h2>

            <p className="mb-8 max-w-2xl text-lg text-gray-800">
              {toolsSectionContent.description}
            </p>

            <Link href={activeItem.ctaHref}>
              <YellowButton className="mb-12">
                {activeItem.ctaLabel}
              </YellowButton>
            </Link>

            {/* IMAGE CARD */}
            <Card className="relative overflow-hidden rounded-2xl border-2 border-gray-900 bg-orange-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
              <Image
                alt={activeItem.previewAlt}
                className="h-[400px] w-full object-cover transition-all duration-500 ease-out"
                height={800}
                src={currentImage}
                width={1200}
              />

              {/* FLOATING INFO CARD */}
              <Card className="absolute right-6 bottom-6 max-w-xs border border-gray-200 bg-white shadow-lg">
                <CardContent className="p-4">
                  <div className="mb-1 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-semibold text-gray-500 uppercase">
                        {currentSlide
                          ? currentSlide.audience
                          : activeItem.cardLabel}
                      </p>

                      <p className="text-sm font-semibold text-gray-900">
                        {currentSlide
                          ? currentSlide.cardTitle
                          : activeItem.title}
                      </p>
                    </div>
                  </div>

                  <p className="text-[11px] text-gray-500">
                    {currentSlide ? currentSlide.cardInfo : activeItem.cardInfo}
                  </p>
                </CardContent>
              </Card>
            </Card>
          </div>

          {/* RIGHT LIST */}
          <div className="space-y-4">
            {toolsFeatureItems.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <Card
                  className={cn(
                    'group cursor-pointer rounded-xl border border-gray-900 bg-background-cream transition-all duration-300',
                    isActive
                      ? '-translate-y-1 border-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'
                      : 'shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                  )}
                  key={item.title}
                  onFocus={() => {
                    setActiveIndex(index);
                  }}
                  onMouseEnter={() => {
                    setActiveIndex(index);
                  }}
                  tabIndex={0}
                >
                  <CardContent className="flex gap-4 px-6 py-4">
                    {/* ICON */}
                    <item.icon
                      className={cn(
                        'h-12 w-12 shrink-0 rounded-md border p-3 transition-transform duration-300 group-hover:scale-110',
                        item.iconClass,
                        isActive && 'scale-110'
                      )}
                      size={24}
                    />

                    <div>
                      <h3 className="mb-1 font-display text-lg font-semibold text-gray-900">
                        {item.title}
                      </h3>

                      <p className="text-mdd leading-relaxed text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
