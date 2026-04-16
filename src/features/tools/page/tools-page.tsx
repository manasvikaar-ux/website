import { ComparisonSection } from '@/features/tools/components/comparison-section';
import { CtaSection } from '@/features/tools/components/cta-section';
import { FaqSection } from '@/features/tools/components/faq-section';
import { HeroSection } from '@/features/tools/components/hero-section';
import { HowToStartSection } from '@/features/tools/components/how-to-start-section';
import { ToolkitSection } from '@/features/tools/components/toolkit-section';

export const ToolsPage = () => (
  <main className="bg-background-cream antialiased">
    <HeroSection />
    <ComparisonSection />
    <ToolkitSection />
    <HowToStartSection />
    <FaqSection />
    <CtaSection />
  </main>
);
