import {
  pricingCheckIcon,
  therapyPricingPlans,
} from '@/features/therapy/data/pricing.data';
import {
  WhiteButton,
  YellowButton,
} from '@/shared/components/neobrutal-button';
import { Badge } from '@/shared/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/shared/components/ui/card';

const PricingCheckIcon = pricingCheckIcon;

export const PricingSection = () => (
  <section className="bg-background-cream py-24">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="mb-16 text-center">
        <h2 className="mb-4 font-display text-4xl font-semibold text-gray-900">
          Transparent Pricing
        </h2>
        <p className="text-gray-600">
          Choose the plan that best fits your journey.
        </p>
      </div>
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
        {therapyPricingPlans.map((plan) => (
          <Card
            className={[
              'flex h-full flex-col rounded-2xl border p-8 transition-shadow hover:shadow-xl',
              plan.highlighted === true
                ? 'relative border-2 border-primary/50 bg-orange-50 shadow-lg md:-translate-y-4'
                : 'border-gray-200 bg-white',
            ].join(' ')}
            key={plan.title}
          >
            {plan.highlighted === true ? (
              <Badge className="absolute top-0 right-0 h-auto rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl bg-primary px-3 py-1 text-xs font-semibold">
                MOST POPULAR
              </Badge>
            ) : null}
            <CardHeader className="mb-4 gap-0 p-0">
              <h3 className="font-display text-2xl font-semibold text-gray-900">
                {plan.title}
              </h3>
              <p className="text-md mt-2 text-gray-500">{plan.description}</p>
            </CardHeader>
            <CardContent className="mb-6 p-0">
              <span className="font-display text-4xl font-semibold text-gray-900">
                {plan.price}
              </span>
              <span className="text-md ml-1 text-gray-500">
                {plan.interval}
              </span>
            </CardContent>
            <CardContent className="mb-8 flex-grow space-y-4 p-0">
              <div>
                <p className="text-md mb-2 font-semibold text-gray-900">
                  Session Summary
                </p>
                <p className="text-md text-gray-600">{plan.sessionSummary}</p>
              </div>
              <div>
                <p className="text-md mb-2 font-semibold text-gray-900">
                  Key Benefits
                </p>
                <ul className="text-md space-y-2 text-gray-600">
                  {plan.keyBenefits.map((benefit) => (
                    <li className="flex items-center gap-2" key={benefit}>
                      <PricingCheckIcon />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter className="border-t-0 bg-transparent p-0 pb-8">
              {plan.highlighted === true ? (
                <YellowButton className="w-full">Book Now</YellowButton>
              ) : (
                <WhiteButton className="w-full">Book Now</WhiteButton>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
