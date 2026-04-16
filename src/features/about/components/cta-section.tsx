import { aboutCta } from '@/features/about/data/cta.data';
import { footerSocialItems } from '@/shared/data/footer';

export const CtaSection = () => (
  <section className="border-t border-gray-900 bg-background-peach py-24">
    <div className="container mx-auto px-5 text-center">
      <h2 className="mb-6 font-display text-4xl font-semibold text-gray-900 md:text-4xl">
        {aboutCta.title}
      </h2>
      <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-800">
        {aboutCta.description}
      </p>
      <div className="flex justify-center space-x-4">
        {footerSocialItems.map((social) => {
          const Icon = social.icon;
          return (
            <a
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-900 bg-white text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
              href={social.href}
              key={social.id}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon className="size-5" size={20} />
            </a>
          );
        })}
      </div>
    </div>
  </section>
);
