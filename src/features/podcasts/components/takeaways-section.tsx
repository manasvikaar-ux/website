import { takeawaysContent } from '@/features/podcasts/data/takeaways.data';

const TakeawayIcon = takeawaysContent.icon;

export const TakeawaysSection = () => (
  <section className="bg-background-teal/10 py-24">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="rounded-md border border-background-teal/20 bg-white p-12 shadow-sm">
        <div className="mb-8 flex items-center">
          <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary">
            <TakeawayIcon className="size-5 text-gray-900" />
          </div>
          <h3 className="font-display text-4xl font-semibold">
            {takeawaysContent.title}
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h4 className="font-semibold text-teal-700">
              {takeawaysContent.coreTitle}
            </h4>
            <p className="text-sm leading-relaxed text-gray-600">
              {takeawaysContent.coreInsight}
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-teal-700">
              {takeawaysContent.stepsTitle}
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              {takeawaysContent.actionSteps.map((step) => (
                <li className="flex items-center gap-2" key={step}>
                  <span className="h-1.5 w-1.5 rounded-md bg-primary" />
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);
