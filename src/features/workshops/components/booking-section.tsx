'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import {
  bookingForm,
  bookingNoteIcon,
} from '@/features/workshops/data/booking.data';
import { workshopBookingFormSchema } from '@/features/workshops/schemas/booking.schema';
import type { WorkshopBookingFormValues } from '@/features/workshops/types/booking.types';
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

const BookingNoteIcon = bookingNoteIcon;

export const BookingSection = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<WorkshopBookingFormValues>({
    defaultValues: {
      ageGroup: '',
      email: '',
      fullName: '',
      phone: '',
      workshop: '',
    },
    resolver: zodResolver(workshopBookingFormSchema),
  });

  return (
    <section className="bg-background-teal py-28">
      <div className="container mx-auto px-5 sm:px-6">
        <Card className="rounded-xl border border-gray-900 bg-white p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:p-14">
          <CardContent className="p-0">
            <div className="mb-12 text-center">
              <h3 className="mb-2 font-display text-4xl font-semibold text-gray-900">
                Book Your Spot
              </h3>
              <p className="text-gray-500">
                Fill out the form below to register for a workshop.
              </p>
            </div>

            {isSubmitSuccessful ? (
              <div className="rounded-xl border border-green-200 bg-green-50 px-6 py-8 text-center">
                <p className="font-display text-lg font-semibold text-green-800">
                  Booking request received!
                </p>
                <p className="text-md mt-1 text-green-700">
                  We&apos;ll reach out to confirm your spot shortly.
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
                      placeholder="Jane Doe"
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
                      htmlFor="email"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      autoComplete="email"
                      className="h-13 rounded-xl border-gray-200"
                      id="email"
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
                      htmlFor="phone"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      autoComplete="tel"
                      className="h-13 rounded-xl border-gray-200"
                      id="phone"
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
                      htmlFor="ageGroup"
                    >
                      Age Group <span className="text-red-500">*</span>
                    </Label>
                    <Controller
                      control={control}
                      name="ageGroup"
                      render={({ field }) => (
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger
                            className="text-md h-13! w-full rounded-xl border-gray-200"
                            id="ageGroup"
                          >
                            <SelectValue placeholder="Select age group" />
                          </SelectTrigger>
                          <SelectContent>
                            {bookingForm.ageGroups.map((group) => (
                              <SelectItem key={group} value={group}>
                                {group}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.ageGroup ? (
                      <p className="text-sm text-red-500" role="alert">
                        {errors.ageGroup.message}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label
                    className="text-md font-medium text-gray-700"
                    htmlFor="workshop"
                  >
                    Select Workshop <span className="text-red-500">*</span>
                  </Label>
                  <Controller
                    control={control}
                    name="workshop"
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger
                          className="text-md h-13! w-full rounded-xl border-gray-200"
                          id="workshop"
                        >
                          <SelectValue placeholder="Select a workshop" />
                        </SelectTrigger>
                        <SelectContent>
                          {bookingForm.workshops.map((ws) => (
                            <SelectItem key={ws} value={ws}>
                              {ws}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.workshop ? (
                    <p className="text-sm text-red-500" role="alert">
                      {errors.workshop.message}
                    </p>
                  ) : null}
                </div>

                <YellowButton
                  className="w-full"
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? 'Submitting…' : 'Confirm Booking'}
                </YellowButton>
              </form>
            )}

            <p className="mt-6 text-center text-xs text-gray-500">
              <BookingNoteIcon className="mr-1 inline size-3" size={12} />
              By booking, you agree to our Terms of Service &amp; Privacy
              Policy.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
