import {
  toolsHero,
  toolsHeroHighlights,
} from '@/features/tools/data/hero.data';
import {
  WhiteButton,
  YellowButton,
} from '@/shared/components/neobrutal-button';
import { Card, CardContent } from '@/shared/components/ui/card';

export const HeroSection = () => (
  <section className="relative overflow-hidden bg-background-cream pt-16 pb-20">
    <div className="container mx-auto px-5 text-center sm:px-6">
      <div className="relative z-10 mx-auto">
        <h3 className="mb-6 font-display text-4xl leading-tight font-semibold text-gray-900 md:text-4xl lg:text-4xl">
          {toolsHero.title}
          <br />
          <span className="font-normal text-gray-700">
            {toolsHero.titleEmphasis}
          </span>
        </h3>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-600">
          {toolsHero.description}
        </p>
        <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
          <YellowButton>{toolsHero.primaryCta}</YellowButton>
          <WhiteButton>{toolsHero.secondaryCta}</WhiteButton>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 text-left md:grid-cols-3">
          {toolsHeroHighlights.map((highlight) => (
            <Card
              className="rounded-2xl border border-gray-900 bg-white py-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ring-0"
              key={highlight.title}
            >
              <CardContent className="p-6">
                <div
                  className={`mb-4 flex h-10 w-10 items-center justify-center rounded-full ${highlight.iconClassName}`}
                >
                  <highlight.icon className="size-5" size={20} />
                </div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  {highlight.title}
                </h3>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
);
