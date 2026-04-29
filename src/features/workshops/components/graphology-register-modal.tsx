'use client';

import { useState } from 'react';
import { submitForm } from '@/lib/formsubmit';
import { Button } from '@/shared/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/shared/components/ui/dialog';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';

type FormState = {
  name: string;
  contact: string;
  email: string;
  city: string;
  connected: string;
};

const initialForm: FormState = {
  name: '',
  contact: '',
  email: '',
  city: '',
  connected: '',
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const GraphologyRegisterModal = (props: Props) => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await submitForm(
        { ...form, _subject: 'Graphology Workshop Registration' },
        {
          email:
            process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL || 'manasvikaar@gmail.com',
          subject: 'Graphology Workshop Registration',
          _template: 'table',
        }
      );
      setSubmitted(true);
      setForm(initialForm);
    } finally {
      setSubmitting(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) setSubmitted(false);
    props.onOpenChange(open);
  };

  return (
    <Dialog onOpenChange={handleOpenChange} open={props.open}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-xl font-semibold">
            Register for Handwriting Analysis
          </DialogTitle>
        </DialogHeader>

        {submitted ? (
          <div className="py-6 text-center">
            <p className="text-base font-medium text-gray-800">
              You&apos;re registered!
            </p>
            <p className="mt-1 text-sm text-gray-500">
              We&apos;ll be in touch with details soon.
            </p>
          </div>
        ) : (
          <form className="flex flex-col gap-4 pt-1" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                onChange={handleChange}
                placeholder="Your full name"
                required
                type="text"
                value={form.name}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact">Contact</Label>
              <Input
                id="contact"
                name="contact"
                onChange={handleChange}
                placeholder="Phone number"
                required
                type="tel"
                value={form.contact}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                onChange={handleChange}
                placeholder="you@example.com"
                required
                type="email"
                value={form.email}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                name="city"
                onChange={handleChange}
                placeholder="Your city"
                required
                type="text"
                value={form.city}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="connected">How did you connect with us?</Label>
              <Input
                id="connected"
                name="connected"
                onChange={handleChange}
                placeholder="Instagram, friend, Google..."
                type="text"
                value={form.connected}
              />
            </div>

            <Button
              className="mt-1 h-11 rounded-md border border-black bg-[#0f172a] font-semibold text-white shadow-[4px_4px_0px_0px_rgba(123,211,206,1)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
              disabled={submitting}
              type="submit"
            >
              {submitting ? 'Submitting…' : 'Register Now'}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
