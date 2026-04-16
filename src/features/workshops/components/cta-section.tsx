import Image from 'next/image';
import { workshopsCta } from '@/features/workshops/data/cta.data';
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent } from '@/shared/components/ui/card';

export const CtaSection = () => (
  <section className="bg-background-cream pb-16">
    <div className="container mx-auto max-w-6xl sm:px-6">
      <Card className="relative min-h-[360px] overflow-hidden rounded-xl border border-gray-900 bg-background-peach px-6 py-14 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:px-8 sm:py-16">
        <CardContent className="p-0">
          <div className="pointer-events-none absolute top-2 right-2 z-0 md:top-4 md:right-4">
            <Image
              alt="Decorative pencil icon"
              className="h-24 w-24 opacity-[0.12] md:h-36 md:w-36 md:opacity-[0.16]"
              height={171}
              src="/workshops/pencil.png"
              width={171}
            />
          </div>
          <div className="relative z-10 md:pr-20">
            <h3 className="mb-3 font-display text-4xl font-semibold text-gray-900">
              {workshopsCta.title}
            </h3>
            <p className="mx-auto mb-7 max-w-xl text-sm text-gray-700">
              {workshopsCta.description}
            </p>
            <Button className="h-14 rounded-md border border-black bg-[#1f2937] px-8 font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition-all hover:bg-[#111827]">
              {workshopsCta.buttonLabel}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);
