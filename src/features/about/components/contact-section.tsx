'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { contactFormSchema } from '@/features/about/schemas/contact.schema';
import type { ContactFormValues } from '@/features/about/types/contact.types';
import { submitForm } from '@/lib/formsubmit';
import { YellowButton } from '@/shared/components/neobrutal-button';
import { Card, CardContent } from '@/shared/components/ui/card';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { Textarea } from '@/shared/components/ui/textarea';

export const ContactSection = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues: { city: '', email: '', message: '', name: '', phone: '' },
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await submitForm(data, {
        email:
          process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL || 'manasvikaar@gmail.com',
        _subject: 'New Contact Message – Manasvikaar',
      });
      setIsSuccess(true);
      reset();
    } catch {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="bg-background-teal py-28" id="contact">
      <div className="container mx-auto px-5 sm:px-6">
        <Card className="rounded-xl border border-gray-900 bg-white p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:p-14">
          <CardContent className="p-0">
            <div className="mb-12 text-center">
              <h3 className="mb-2 font-display text-4xl font-semibold text-gray-900">
                Get in Touch
              </h3>
              <p className="text-gray-500">
                Have a question or just want to reach out? We&apos;d love to
                hear from you.
              </p>
            </div>

            {isSuccess ? (
              <div className="rounded-xl border border-green-200 bg-green-50 px-6 py-8 text-center">
                <p className="font-display text-lg font-semibold text-green-800">
                  Message sent!
                </p>
                <p className="text-md mt-1 text-green-700">
                  We&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                className="space-y-8"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label
                      className="text-md font-medium text-gray-700"
                      htmlFor="contact-name"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      autoComplete="name"
                      className="h-13 rounded-xl border-gray-200"
                      id="contact-name"
                      placeholder="Jane Doe"
                      type="text"
                      {...register('name')}
                    />
                    {errors.name ? (
                      <p className="text-sm text-red-500" role="alert">
                        {errors.name.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      className="text-md font-medium text-gray-700"
                      htmlFor="contact-email"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      autoComplete="email"
                      className="h-13 rounded-xl border-gray-200"
                      id="contact-email"
                      placeholder="jane@example.com"
                      type="email"
                      {...register('email')}
                    />
                    {errors.email ? (
                      <p className="text-sm text-red-500" role="alert">
                        {errors.email.message}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label
                      className="text-md font-medium text-gray-700"
                      htmlFor="contact-phone"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      autoComplete="tel"
                      className="h-13 rounded-xl border-gray-200"
                      id="contact-phone"
                      placeholder="+91 99999 12347"
                      type="tel"
                      {...register('phone')}
                    />
                    {errors.phone ? (
                      <p className="text-sm text-red-500" role="alert">
                        {errors.phone.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      className="text-md font-medium text-gray-700"
                      htmlFor="contact-city"
                    >
                      City <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      autoComplete="address-level2"
                      className="h-13 rounded-xl border-gray-200"
                      id="contact-city"
                      placeholder="Mumbai"
                      type="text"
                      {...register('city')}
                    />
                    {errors.city ? (
                      <p className="text-sm text-red-500" role="alert">
                        {errors.city.message}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label
                    className="text-md font-medium text-gray-700"
                    htmlFor="contact-message"
                  >
                    Message <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    className="min-h-35 rounded-xl border-gray-200 py-3"
                    id="contact-message"
                    maxLength={1000}
                    placeholder="How can we help you?"
                    {...register('message')}
                  />
                  {errors.message ? (
                    <p className="text-sm text-red-500" role="alert">
                      {errors.message.message}
                    </p>
                  ) : null}
                </div>

                {error ? (
                  <p className="text-sm text-red-500" role="alert">
                    {error}
                  </p>
                ) : null}

                <YellowButton
                  className="w-full"
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? 'Sending…' : 'Send Message'}
                </YellowButton>
              </form>
            )}

            <p className="mt-6 text-center text-xs text-gray-500">
              By reaching out, you agree to our Terms of Service &amp; Privacy
              Policy.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
