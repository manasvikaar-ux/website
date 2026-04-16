import { HeroSection } from '@/features/podcasts/components/hero-section';
import { PlayerSection } from '@/features/podcasts/components/player-section';
import { RecentConversationsSection } from '@/features/podcasts/components/recent-conversations-section';
import { TakeawaysSection } from '@/features/podcasts/components/takeaways-section';

export const PodcastsPage = () => (
  <main className="bg-background-cream antialiased">
    <HeroSection />
    <PlayerSection />
    <RecentConversationsSection />
    <TakeawaysSection />
  </main>
);
