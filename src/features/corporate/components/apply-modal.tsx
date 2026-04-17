'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { ApplyFormValues } from '@/features/corporate/schemas/apply.schema';
import { applyFormSchema } from '@/features/corporate/schemas/apply.schema';
import { submitForm } from '@/lib/formsubmit';
import { YellowButton } from '@/shared/components/neobrutal-button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/ui/dialog';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';

export const ApplyModal = ({ children }: { children: React.ReactElement }) => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ApplyFormValues>({
    defaultValues: {
      educationStatus: '',
      email: '',
      fullName: '',
      phone: '',
    },
    resolver: zodResolver(applyFormSchema),
  });

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      setTimeout(() => reset(), 200);
    }
  };

  const onSubmit = async (data: ApplyFormValues) => {
    try {
      await submitForm(data, {
        email:
          process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL || 'manasvikaar@gmail.com',
        _subject: 'New Coaching Program Application',
      });
      reset();
      setOpen(false);
    } catch {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <Dialog onOpenChange={handleOpenChange} open={open}>
      <DialogTrigger render={children} />
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-semibold">
            Apply Now
          </DialogTitle>
          <DialogDescription>
            Submit your details to apply for our coaching program.
          </DialogDescription>
        </DialogHeader>

        <form
          className="space-y-6 pt-4"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                className="rounded-xl border-gray-200"
                id="fullName"
                placeholder="Your name"
                {...register('fullName')}
              />
              {errors.fullName ? (
                <p className="text-sm text-red-500" role="alert">
                  {errors.fullName.message}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                className="rounded-xl border-gray-200"
                id="email"
                placeholder="you@example.com"
                type="email"
                {...register('email')}
              />
              {errors.email ? (
                <p className="text-sm text-red-500" role="alert">
                  {errors.email.message}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                className="rounded-xl border-gray-200"
                id="phone"
                placeholder="+91 98765 43210"
                type="tel"
                {...register('phone')}
              />
              {errors.phone ? (
                <p className="text-sm text-red-500" role="alert">
                  {errors.phone.message}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="educationStatus">Current Education Status</Label>
              <Input
                className="rounded-xl border-gray-200"
                id="educationStatus"
                placeholder="e.g. Undergraduate, Graduate, Working Professional"
                {...register('educationStatus')}
              />
              {errors.educationStatus ? (
                <p className="text-sm text-red-500" role="alert">
                  {errors.educationStatus.message}
                </p>
              ) : null}
            </div>
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
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </YellowButton>
        </form>
      </DialogContent>
    </Dialog>
  );
};
