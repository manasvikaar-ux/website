import { FaqSection } from '@/features/home/components/faq-section';
import { HeroSection } from '@/features/home/components/hero-section';
import { PartnersSection } from '@/features/home/components/partners-section';
import { PricingSection } from '@/features/home/components/pricing-section';
// import { Pricing4 } from "@/features/home/components/pricing4";
import { TestimonialsSection } from '@/features/home/components/testimonials-section';
import { ToolsSection } from '@/features/home/components/tools-section';
import { WorkshopsSection } from '@/features/home/components/workshops-section';

export const HomePage = () => (
  <main className="bg-background-cream antialiased selection:bg-background-teal selection:text-white">
    <HeroSection />
    <ToolsSection />
    <PartnersSection />
    <WorkshopsSection />
    <TestimonialsSection />
    <PricingSection />
    {/* <Pricing4 /> */}
    <FaqSection />
  </main>
);
