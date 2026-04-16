import { howToUseSteps } from '@/features/resources/data/how-to-use.data';

export const HowToUseSection = () => (
  <section className="relative overflow-hidden bg-background-teal py-20">
    <div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    />
    <div className="relative z-10 container mx-auto px-5 sm:px-6">
      <div className="mb-16 text-center">
        <h2 className="mb-4 font-display text-4xl font-semibold">
          How to Use These Resources
        </h2>
        <p className="mx-auto max-w-2xl text-gray-800">
          Whether you are seeking help for yourself or a friend, taking the
          first step is courageous.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {howToUseSteps.map((step) => (
          <div
            className="rounded-xl border border-gray-900 bg-background-cream p-8 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            key={step.title}
          >
            <div
              className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gray-900 ${step.iconClassName}`}
            >
              <step.icon className="size-8" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
