import { helplines } from '@/features/resources/data/helplines.data';
import { WhiteButton } from '@/shared/components/neobrutal-button';

export const HelplinesSection = () => (
  <section className="bg-background-cream py-20">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="mb-12 flex items-center gap-4">
        <h2 className="font-display text-4xl font-semibold">
          Helplines & Support
        </h2>
        <div className="h-px flex-grow bg-gray-300" />
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {helplines.map((item) => (
          <div
            className={`${item.toneClassName} flex h-full flex-col rounded-xl border border-gray-900 p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-200 hover:-translate-y-1`}
            key={item.title}
          >
            <div className="mb-4 flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-900 bg-white">
                <item.icon
                  className={`size-5 ${item.iconClassName}`}
                  size={20}
                />
              </div>
              <span
                className={`${item.badgeClassName} rounded px-2 py-1 text-[10px] font-semibold tracking-wider uppercase`}
              >
                {item.badge}
              </span>
            </div>
            <h3 className="mb-2 font-display text-xl font-semibold">
              {item.title}
            </h3>
            <p className="mb-6 flex-grow text-sm text-gray-800">
              {item.description}
            </p>
            <div className="mt-auto">
              <div className="mb-4 font-mono text-2xl font-semibold text-gray-900">
                {item.number}
              </div>
              <WhiteButton className="w-full">
                {item.actionType === 'copy' ? 'Copy Number' : 'Call Now'}
              </WhiteButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
