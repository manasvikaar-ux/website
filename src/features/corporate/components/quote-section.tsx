'use client';

import { useState } from 'react';
import { submitForm } from '@/lib/formsubmit';
import { YellowButton } from '@/shared/components/neobrutal-button';
import { Card, CardContent } from '@/shared/components/ui/card';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { Textarea } from '@/shared/components/ui/textarea';

const currentStages = [
  'Studying Psychology (Class XI / XII)',
  'Undergraduate Student',
  'Postgraduate Student',
  'Recently Graduated',
  'Early Career Professional',
];

const preferredFormats = [
  'Online via Google Meet',
  'In Person — New Alipore',
  'At My Place',
];

export const QuoteSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      await submitForm(data, {
        email:
          process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL || 'manasvikaar@gmail.com',
        _subject: 'New Coaching Inquiry - Quote Request',
      });
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="bg-background-teal py-28">
        <div className="container mx-auto px-5 sm:px-6">
          <Card className="rounded-xl border border-gray-900 bg-white p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:p-14">
            <CardContent className="p-0">
              <div className="rounded-xl border border-green-200 bg-green-50 px-6 py-8 text-center">
                <p className="font-display text-lg font-semibold text-green-800">
                  Thank You!
                </p>
                <p className="text-md mt-1 text-green-700">
                  We&apos;ve received your inquiry and will reach out shortly.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-background-teal py-28">
      <div className="container mx-auto px-5 sm:px-6">
        <Card className="rounded-xl border border-gray-900 bg-white p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:p-14">
          <CardContent className="p-0">
            <div className="mb-12 text-center">
              <h3 className="mb-2 font-display text-4xl font-semibold text-gray-900">
                Begin Your Journey
              </h3>
              <p className="text-gray-500">
                Let&apos;s find the right path for you.
              </p>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-1.5">
                  <Label
                    className="text-md font-medium text-gray-700"
                    htmlFor="coach-name"
                  >
                    Your Name
                  </Label>
                  <Input
                    className="h-13 rounded-xl border-gray-200"
                    id="coach-name"
                    name="name"
                    placeholder="What should we call you?"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    className="text-md font-medium text-gray-700"
                    htmlFor="coach-email"
                  >
                    Email Address
                  </Label>
                  <Input
                    className="h-13 rounded-xl border-gray-200"
                    id="coach-email"
                    name="email"
                    placeholder="We will reach out here"
                    required
                    type="email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-1.5">
                  <Label
                    className="text-md font-medium text-gray-700"
                    htmlFor="coach-phone"
                  >
                    Phone Number
                  </Label>
                  <Input
                    className="h-13 rounded-xl border-gray-200"
                    id="coach-phone"
                    name="phone"
                    placeholder="In case we need to speak directly"
                    required
                    type="tel"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    className="text-md font-medium text-gray-700"
                    htmlFor="coach-stage"
                  >
                    Current Stage
                  </Label>
                  <select
                    className="text-md h-13 w-full rounded-xl border border-gray-200 bg-white text-gray-900"
                    id="coach-stage"
                    name="currentStage"
                    required
                  >
                    <option value="">Select your current stage</option>
                    {currentStages.map((stage) => (
                      <option key={stage} value={stage}>
                        {stage}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label
                  className="text-md font-medium text-gray-700"
                  htmlFor="coach-format"
                >
                  Preferred Format
                </Label>
                <select
                  className="text-md h-13 w-full rounded-xl border border-gray-200 bg-white text-gray-900"
                  id="coach-format"
                  name="preferredFormat"
                  required
                >
                  <option value="">Select your preference</option>
                  {preferredFormats.map((format) => (
                    <option key={format} value={format}>
                      {format}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <Label
                  className="text-md font-medium text-gray-700"
                  htmlFor="coach-message"
                >
                  What are you hoping to work on?
                </Label>
                <Textarea
                  className="h-32 rounded-xl border-gray-200 py-3"
                  id="coach-message"
                  name="message"
                  placeholder="Share as much or as little as you would like — this helps us understand where you are and how we can support you best."
                />
              </div>

              {error && (
                <p className="text-sm text-red-500" role="alert">
                  {error}
                </p>
              )}

              <YellowButton
                className="w-full"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? 'Sending...' : 'Begin Your Journey'}
              </YellowButton>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
