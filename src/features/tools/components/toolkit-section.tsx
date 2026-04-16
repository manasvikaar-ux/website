import {
  journalingFeatureIcons,
  toolkitCards,
  toolsFeatureSuggestIcon,
} from '@/features/tools/data/toolkit.data';
import {
  WhiteButton,
  YellowButton,
} from '@/shared/components/neobrutal-button';
import { Badge } from '@/shared/components/ui/badge';
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent } from '@/shared/components/ui/card';

const ToolsFeatureSuggestIcon = toolsFeatureSuggestIcon;

const ToolkitCardButton = ({
  buttonLabel,
  buttonTone,
}: {
  buttonLabel: string;
  buttonTone: string;
}) => {
  if (buttonTone === 'primary') {
    return null;
  }
  if (buttonTone === 'secondary') {
    return <WhiteButton className="w-full">{buttonLabel}</WhiteButton>;
  }
  return (
    <Button className="h-14 w-full rounded-md border border-gray-900 bg-purple-50 px-8 text-[1.05rem] font-semibold text-purple-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-purple-100 hover:shadow-none">
      {buttonLabel}
    </Button>
  );
};

export const ToolkitSection = () => (
  <section className="bg-background-cream py-24">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="mb-16 text-center">
        <h2 className="mb-4 font-display text-4xl font-semibold text-gray-900">
          Your Toolkit for Wellness
        </h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          Explore our curated selection of tools designed to help you navigate
          life&apos;s ups and downs.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Daily Journaling - wide card */}
        <Card className="flex-row overflow-hidden rounded-2xl border border-gray-900 bg-white py-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ring-0 lg:col-span-2">
          <CardContent className="relative flex flex-1 flex-col p-8">
            <div className="pattern-grid pointer-events-none absolute inset-0 opacity-10" />
            <div className="relative z-10 flex flex-1 flex-col">
              <h3 className="mb-4 font-display text-3xl font-semibold text-gray-900">
                {toolkitCards[0]?.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-gray-600">
                {toolkitCards[0]?.description}
              </p>
              <div className="mb-8 flex gap-4 text-sm font-medium text-gray-700">
                {journalingFeatureIcons.map((item) => (
                  <span className="flex items-center gap-1" key={item.label}>
                    <item.icon className="size-4" size={16} />
                    {item.label}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <YellowButton className="w-fit">
                  {toolkitCards[0]?.buttonLabel}
                </YellowButton>
              </div>
            </div>
          </CardContent>
          <div className="relative flex w-full items-center justify-center overflow-hidden border-gray-900 bg-green-50 p-8 md:w-2/5 md:border-l">
            <div className="w-full max-w-[200px] rotate-3 rounded-lg border border-gray-200 bg-white p-4 shadow-lg transition-transform duration-300 hover:rotate-0">
              <div className="mb-2 h-2 w-1/3 rounded bg-gray-200" />
              <div className="mb-1 h-2 w-full rounded bg-gray-100" />
              <div className="mb-1 h-2 w-full rounded bg-gray-100" />
              <div className="h-2 w-2/3 rounded bg-gray-100" />
            </div>
            <div className="absolute top-12 w-full max-w-[200px] -rotate-6 rounded-lg border border-gray-200 bg-white p-4 shadow-lg transition-transform duration-300 hover:rotate-0">
              <div className="mb-2 flex items-center justify-between">
                <div className="h-2 w-1/4 rounded bg-gray-300" />
                <div className="h-1.5 w-1.5 rounded-full bg-gray-400" />
              </div>
              <div className="flex h-16 items-center justify-center rounded border border-dashed border-gray-300 bg-gray-50 text-center text-xs text-gray-400">
                How do you feel today?
              </div>
            </div>
          </div>
        </Card>

        {/* Smaller cards */}
        {toolkitCards.slice(1).map((card) => (
          <Card
            className="relative overflow-hidden rounded-2xl border border-gray-900 bg-white py-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ring-0"
            key={card.title}
          >
            <CardContent className="flex h-full flex-col p-8">
              <div
                className={`mb-6 flex h-12 w-12 items-center justify-center rounded-full border ${card.accentClassName}`}
              >
                <card.icon
                  className={`size-5 ${card.iconClassName}`}
                  size={20}
                />
              </div>
              <h3 className="mb-3 font-display text-3xl font-semibold text-gray-900">
                {card.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-gray-600">
                {card.description}
              </p>
              {card.title === 'Emotional Checker' ? (
                <div className="mb-8 flex justify-between px-2">
                  {['😄', '🙂', '😐', '😔', '😫'].map((emoji) => (
                    <span
                      className="cursor-pointer text-2xl grayscale transition-all hover:scale-125 hover:grayscale-0"
                      key={emoji}
                    >
                      {emoji}
                    </span>
                  ))}
                </div>
              ) : null}
              {card.title === 'IDLocker' ? (
                <div className="mb-8 flex gap-2">
                  <Badge className="rounded border-purple-100 bg-purple-50 px-2 py-1 text-xs text-purple-700">
                    AES-256
                  </Badge>
                  <Badge className="rounded border-purple-100 bg-purple-50 px-2 py-1 text-xs text-purple-700">
                    Biometric
                  </Badge>
                </div>
              ) : null}
              <div className="mt-auto">
                <ToolkitCardButton
                  buttonLabel={card.buttonLabel}
                  buttonTone={card.buttonTone}
                />
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Need something else - wide card */}
        <Card className="flex-row overflow-hidden rounded-2xl border border-gray-900 bg-white py-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ring-0 lg:col-span-2">
          <CardContent className="relative flex flex-1 flex-col p-8">
            <div className="pattern-grid pointer-events-none absolute inset-0 opacity-10" />
            <div className="relative z-10 flex flex-1 flex-col">
              <h3 className="mb-4 font-display text-3xl font-semibold text-gray-900">
                Need something else?
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-gray-600">
                We are constantly adding new tools based on community feedback.
                Tell us what you need and we&apos;ll build it.
              </p>
              <div className="mb-8 flex gap-4 text-sm font-medium text-gray-700">
                <span className="flex items-center gap-1">
                  <ToolsFeatureSuggestIcon className="size-4" size={16} />
                  Community Driven
                </span>
                <span className="flex items-center gap-1">
                  <ToolsFeatureSuggestIcon className="size-4" size={16} />
                  Regular Updates
                </span>
              </div>
              <div className="mt-auto">
                <WhiteButton className="w-fit">Coming Soon</WhiteButton>
              </div>
            </div>
          </CardContent>
          <div className="relative flex w-full items-center justify-center overflow-hidden border-gray-900 bg-background-peach p-8 md:w-2/5 md:border-l">
            <div className="flex flex-col gap-3">
              <div className="w-48 rotate-2 rounded-lg border border-gray-200 bg-white p-4 shadow-lg transition-transform duration-300 hover:rotate-0">
                <div className="mb-2 h-2 w-1/3 rounded bg-gray-200" />
                <div className="mb-1 h-2 w-full rounded bg-gray-100" />
                <div className="h-2 w-2/3 rounded bg-gray-100" />
              </div>
              <div className="w-48 -rotate-2 rounded-lg border border-gray-200 bg-white p-4 shadow-lg transition-transform duration-300 hover:rotate-0">
                <div className="flex h-12 items-center justify-center rounded border border-dashed border-gray-300 bg-gray-50 text-center text-xs text-gray-400">
                  Your idea here...
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
);
