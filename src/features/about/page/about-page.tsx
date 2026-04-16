import { CtaSection } from '@/features/about/components/cta-section';
import { HeroSection } from '@/features/about/components/hero-section';
import { StatsSection } from '@/features/about/components/stats-section';
import { StorySection } from '@/features/about/components/story-section';
import { TeamSection } from '@/features/about/components/team-section';
import { ValuesSection } from '@/features/about/components/values-section';

export const AboutPage = () => (
  <main className="bg-background-cream antialiased">
    <HeroSection />
    <StatsSection />
    <StorySection />
    <ValuesSection />
    <TeamSection />
    <CtaSection />
  </main>
);
