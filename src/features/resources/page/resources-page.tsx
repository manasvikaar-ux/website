import { FacilitiesSection } from '@/features/resources/components/facilities-section';
import { FaqSection } from '@/features/resources/components/faq-section';
import { HelplinesSection } from '@/features/resources/components/helplines-section';
import { HeroSection } from '@/features/resources/components/hero-section';
import { HowToUseSection } from '@/features/resources/components/how-to-use-section';
import { ImmediateEmergencySection } from '@/features/resources/components/immediate-emergency-section';

export const ResourcesPage = () => (
  <main className="bg-background-cream antialiased">
    <HeroSection />
    <ImmediateEmergencySection />
    <HelplinesSection />
    <FacilitiesSection />
    <HowToUseSection />
    <FaqSection />
  </main>
);
