'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { bookingCategoryOptions } from '@/features/therapy/data/booking.data';
import { bookingFormSchema } from '@/features/therapy/schemas/booking.schema';
import type { BookingFormValues } from '@/features/therapy/types/booking.types';
import { YellowButton } from '@/shared/components/neobrutal-button';
import { Card, CardContent } from '@/shared/components/ui/card';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select';
import { Textarea } from '@/shared/components/ui/textarea';

export const BookingSection = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<BookingFormValues>({
    defaultValues: {
      category: '',
      contactNumber: '',
      fullName: '',
      notes: '',
      preferredTime: '',
    },
    resolver: zodResolver(bookingFormSchema),
  });

  return (
    <section className="bg-teal-50 py-24">
      <div className="container mx-auto px-5 sm:px-6">
        <Card className="rounded-3xl bg-white p-10 shadow-xl md:p-14">
          <CardContent className="p-0">
            <div className="mb-12 text-center">
              <h2 className="mb-2 font-display text-4xl font-semibold text-gray-900">
                Ready to begin? We're here.
              </h2>
              <p className="text-gray-500">
                Take the first step towards a healthier mind.
              </p>
            </div>

            {isSubmitSuccessful ? (
              <div className="rounded-xl border border-green-200 bg-green-50 px-6 py-8 text-center">
                <p className="font-display text-lg font-semibold text-green-800">
                  Booking request received!
                </p>
                <p className="text-md mt-1 text-green-700">
                  We&apos;ll reach out to confirm your session shortly.
                </p>
              </div>
            ) : (
              <form
                className="space-y-8"
                noValidate
                onSubmit={(e) => {
                  void handleSubmit(async () => {
                    await Promise.resolve();
                  })(e);
                }}
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label
                      className="text-md font-medium text-gray-700"
                      htmlFor="fullName"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      autoComplete="name"
                      className="h-13 rounded-xl border-gray-200"
                      id="fullName"
                      placeholder="Your name"
                      type="text"
                      {...register('fullName')}
                    />
                    {errors.fullName ? (
                      <p className="text-sm text-red-500" role="alert">
                        {errors.fullName.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      className="text-md font-medium text-gray-700"
                      htmlFor="contactNumber"
                    >
                      Contact Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      autoComplete="tel"
                      className="h-13 rounded-xl border-gray-200"
                      id="contactNumber"
                      placeholder="+91 98765 43210"
                      type="tel"
                      {...register('contactNumber')}
                    />
                    {errors.contactNumber ? (
                      <p className="text-sm text-red-500" role="alert">
                        {errors.contactNumber.message}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label
                      className="text-md font-medium text-gray-700"
                      htmlFor="category"
                    >
                      Preferred Category <span className="text-red-500">*</span>
                    </Label>
                    <Controller
                      control={control}
                      name="category"
                      render={({ field }) => (
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger
                            className="text-md h-13! w-full rounded-xl border-gray-200"
                            id="category"
                          >
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            {bookingCategoryOptions.map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                              >
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.category ? (
                      <p className="text-sm text-red-500" role="alert">
                        {errors.category.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      className="text-md font-medium text-gray-700"
                      htmlFor="preferredTime"
                    >
                      Preferred Time <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      className="h-13 rounded-xl border-gray-200"
                      id="preferredTime"
                      type="datetime-local"
                      {...register('preferredTime')}
                    />
                    {errors.preferredTime ? (
                      <p className="text-sm text-red-500" role="alert">
                        {errors.preferredTime.message}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label
                    className="text-md font-medium text-gray-700"
                    htmlFor="notes"
                  >
                    Anything else we should know?
                  </Label>
                  <Textarea
                    className="min-h-35 rounded-xl border-gray-200 py-3"
                    id="notes"
                    maxLength={500}
                    placeholder="Briefly describe what you'd like to discuss..."
                    {...register('notes')}
                  />
                  {errors.notes ? (
                    <p className="text-sm text-red-500" role="alert">
                      {errors.notes.message}
                    </p>
                  ) : null}
                </div>

                <YellowButton
                  className="w-full"
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? 'Submitting…' : 'Confirm Booking Request'}
                </YellowButton>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
