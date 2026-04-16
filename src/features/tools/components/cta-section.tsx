import { toolsCtaActions } from '@/features/tools/data/cta.data';
import {
  WhiteButton,
  YellowButton,
} from '@/shared/components/neobrutal-button';
import { Button } from '@/shared/components/ui/button';

export const CtaSection = () => (
  <section className="relative bg-[#FAF5FF] py-20">
    <div className="relative z-10 container mx-auto px-5 text-center sm:px-6">
      <h2 className="mb-8 font-display text-4xl font-semibold text-gray-900">
        Ready to take the next step?
      </h2>
      <div className="flex flex-col justify-center gap-6 md:flex-row">
        {toolsCtaActions.map((action) => {
          const Icon = action.icon;
          if (action.tone === 'white') {
            return (
              <WhiteButton className="gap-2" key={action.tone}>
                <Icon className="size-4" size={16} />
                {action.label}
              </WhiteButton>
            );
          }

          if (action.tone === 'yellow') {
            return (
              <YellowButton className="gap-2" key={action.tone}>
                <Icon className="size-4" size={16} />
                {action.label}
              </YellowButton>
            );
          }

          return (
            <Button
              className="h-14 gap-2 rounded-md border border-black bg-background-teal px-8 font-semibold text-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              key={action.tone}
            >
              <Icon className="size-4" size={16} />
              {action.label}
            </Button>
          );
        })}
      </div>
    </div>
    <div className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-white/20 to-transparent" />
  </section>
);
