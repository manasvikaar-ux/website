import { FaqSection } from '@/features/corporate/components/faq-section';
import { FormatsSection } from '@/features/corporate/components/formats-section';
import { HeroSection } from '@/features/corporate/components/hero-section';
import { OutcomesSection } from '@/features/corporate/components/outcomes-section';
import { ProgramsSection } from '@/features/corporate/components/programs-section';
import { QuoteSection } from '@/features/corporate/components/quote-section';
import { WhySection } from '@/features/corporate/components/why-section';

export const CorporatePage = () => (
  <main className="bg-background-cream antialiased">
    <HeroSection />
    <WhySection />
    <OutcomesSection />
    <ProgramsSection />
    <FormatsSection />
    <QuoteSection />
    <FaqSection />
  </main>
);
