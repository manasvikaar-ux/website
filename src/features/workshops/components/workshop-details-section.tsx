import Image from 'next/image';

const partners = [
  { alt: 'BookMyShow', src: '/assets/partners/bookmyshow.png' },
  { alt: 'Webalar', src: '/assets/partners/webalar.png' },
  { alt: 'Bunaphile', src: '/assets/partners/bunaphile.png' },
];

export const WorkshopDetailsSection = () => (
  <section className="bg-background-cream py-16">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="mt-10 text-center">
        <h3 className="text-center font-display text-4xl font-semibold text-gray-900">
          Partners
        </h3>
        <div className="flex flex-col items-center justify-center gap-12 rounded-xl px-6 py-10 md:flex-row md:gap-20">
          {partners.map((partner) => (
            <Image
              alt={partner.alt}
              className="h-20 object-contain md:h-40"
              height={200}
              key={partner.alt}
              src={partner.src}
              width={300}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);
