import { AudienceSection } from '@/features/therapy/components/audience-section';
import { BookingSection } from '@/features/therapy/components/booking-section';
import { FaqSection } from '@/features/therapy/components/faq-section';
import { HeroSection } from '@/features/therapy/components/hero-section';
import { IncludesSection } from '@/features/therapy/components/includes-section';
import { PricingSection } from '@/features/therapy/components/pricing-section';
import { ProcessSection } from '@/features/therapy/components/process-section';

export const TherapyPage = () => (
  <main className="bg-background-cream antialiased">
    <HeroSection />
    <IncludesSection />
    <PricingSection />
    <AudienceSection />
    <ProcessSection />
    <BookingSection />
    <FaqSection />
  </main>
);
