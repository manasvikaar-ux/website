import {
  pricingFeatureIcon,
  pricingPlans,
  pricingSectionContent,
} from '@/features/home/data/pricing.data';
import {
  WhiteButton,
  YellowButton,
} from '@/shared/components/neobrutal-button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';

const FeatureIcon = pricingFeatureIcon;

const PricingCard = ({ plan }: { plan: (typeof pricingPlans)[number] }) => {
  const Icon = plan.icon;
  const priceSuffix = 'priceSuffix' in plan ? plan.priceSuffix : '';
  const isPopular =
    'popular' in plan && (plan as { popular?: boolean }).popular === true;
  const Button = isPopular ? YellowButton : WhiteButton;

  return (
    <Card
      className={`flex flex-col rounded-none border-0 border-b-2 border-gray-900 shadow-none last:border-b-0 md:border-r-2 md:border-b-0 md:last:border-r-0 ${isPopular ? 'bg-background-peach' : 'bg-background-cream'}`}
    >
      <CardHeader className="overflow-hidden p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-900 bg-white">
            <Icon className="text-gray-900" size={20} />
          </div>
          <CardTitle className="font-display text-xl leading-tight font-semibold text-gray-900">
            {plan.name}
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="px-6">
        <div className="flex h-12 items-baseline gap-1">
          <span className="font-display text-3xl font-semibold whitespace-nowrap text-gray-900 md:text-4xl">
            {plan.price}
          </span>
          {priceSuffix === '' ? null : (
            <span className="text-md text-gray-500">{priceSuffix}</span>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex-1 flex-col items-start bg-transparent p-6">
        <p className="mb-4 text-xs font-semibold tracking-wide text-gray-500 uppercase">
          {pricingSectionContent.includedLabel}
        </p>
        <ul className="text-md space-y-3 text-gray-700">
          {plan.features.map((feature) => (
            <li className="flex items-center gap-2" key={feature}>
              <FeatureIcon className="shrink-0 text-gray-900" size={20} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardFooter>
      <div className="mt-auto px-6 pb-6">
        <Button className="w-full">{pricingSectionContent.getStarted}</Button>
      </div>
    </Card>
  );
};

export const PricingSection = () => (
  <section className="relative bg-background-teal py-24">
    <div className="relative container mx-auto px-5 sm:px-6">
      <div className="mb-16 text-center">
        <h3 className="mb-4 font-display text-4xl font-semibold text-gray-900">
          {pricingSectionContent.heading}
        </h3>
        <p className="text-gray-800">{pricingSectionContent.subheading}</p>
      </div>

      <div className="mx-auto grid grid-cols-1 overflow-hidden rounded-xl border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:grid-cols-[1fr_1fr_1fr]">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </div>
  </section>
);
