import {
  corporatePartnerLogos,
  corporatePartnersContent,
} from '@/features/corporate/data/partners.data';

const marqueeItems = [...corporatePartnerLogos, ...corporatePartnerLogos];

export const PartnersSection = () => (
  <section className="border-y border-gray-200 bg-white py-20">
    <div className="container mx-auto text-center">
      <h3 className="mb-3 font-display text-4xl font-semibold text-gray-900">
        {corporatePartnersContent.title}
      </h3>
      <p className="mx-auto mb-12 max-w-2xl text-gray-600">
        {corporatePartnersContent.description}
      </p>

      {/* Infinite scroll marquee */}
      <div className="group relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-white to-transparent" />

        <div className="flex animate-marquee items-center gap-16 group-hover:paused">
          {marqueeItems.map((logo) => (
            <div
              className="flex h-20 shrink-0 items-center justify-center px-8"
              key={logo.name}
            >
              <span
                className={`text-2xl font-semibold whitespace-nowrap text-gray-400 transition-colors duration-300 hover:text-gray-900 ${logo.className}`}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
