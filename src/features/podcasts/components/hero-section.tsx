import {
  featuredEpisode,
  featuredEpisodeIcons,
  podcastsHeroContent,
} from '@/features/podcasts/data/hero.data';
import {
  WhiteButton,
  YellowButton,
} from '@/shared/components/neobrutal-button';
import { Card, CardContent } from '@/shared/components/ui/card';
import { PlayIcon } from '@/shared/components/ui/play';

const FeaturedMicIcon = featuredEpisodeIcons.mic;
const FeaturedClockIcon = featuredEpisodeIcons.clock;
const FeaturedCalendarIcon = featuredEpisodeIcons.calendar;

export const HeroSection = () => (
  <section className="bg-background-cream py-16">
    <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-5 sm:px-6 lg:grid-cols-2">
      <div>
        <h3 className="mb-6 font-display text-4xl leading-tight font-semibold text-gray-900 md:text-4xl">
          {podcastsHeroContent.title}
          <br />
          <span className="font-normal text-gray-500">
            {podcastsHeroContent.titleEmphasis}
          </span>
        </h3>
        <p className="mb-8 max-w-lg text-lg leading-relaxed text-gray-600">
          {podcastsHeroContent.description}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <YellowButton className="rounded-md">
            <PlayIcon size={16} />
            {podcastsHeroContent.ctaPrimary}
          </YellowButton>
          <WhiteButton className="rounded-md">
            {podcastsHeroContent.ctaSecondary}
          </WhiteButton>
        </div>
      </div>
      <div className="group relative">
        <div className="absolute -inset-4 rounded-[3rem] bg-background-teal/20 blur-xl transition-all group-hover:bg-background-teal/30" />
        <Card className="relative rounded-3xl border-gray-100 bg-white py-0 shadow-xl ring-0">
          <CardContent className="p-6">
            <div className="flex items-center space-x-6">
              <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl bg-background-peach">
                <FeaturedMicIcon
                  className="size-12 text-orange-400"
                  size={48}
                />
              </div>
              <div>
                <h3 className="mb-2 text-3xl font-semibold text-gray-900">
                  {featuredEpisode.title}
                </h3>
                <p className="text-md mb-4 text-gray-500">
                  {featuredEpisode.summary}
                </p>
                <div className="flex items-center space-x-4 text-xs text-gray-400">
                  <span className="flex items-center">
                    <FeaturedClockIcon className="mr-1 size-3.5" size={14} />
                    {featuredEpisode.duration}
                  </span>
                  <span className="flex items-center">
                    <FeaturedCalendarIcon className="mr-1 size-3.5" size={14} />
                    {featuredEpisode.date}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);
