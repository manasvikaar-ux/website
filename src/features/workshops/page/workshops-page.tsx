import { ArtTherapySection } from '@/features/workshops/components/art-therapy-section';
import { AudienceSection } from '@/features/workshops/components/audience-section';
import { BookingSection } from '@/features/workshops/components/booking-section';
import { FaqSection } from '@/features/workshops/components/faq-section';
import { HeroSection } from '@/features/workshops/components/hero-section';
import { MindfulnessSection } from '@/features/workshops/components/mindfulness-section';
import { SpotlightSection } from '@/features/workshops/components/spotlight-section';
import { UpcomingSection } from '@/features/workshops/components/upcoming-section';
import { WorkshopDetailsSection } from '@/features/workshops/components/workshop-details-section';

export const WorkshopsPage = () => (
  <main className="bg-background-cream antialiased">
    <HeroSection />
    <UpcomingSection />
    <AudienceSection />
    <SpotlightSection />
    <ArtTherapySection />
    <WorkshopDetailsSection />
    <MindfulnessSection />

    <BookingSection />
    <FaqSection />
  </main>
);
