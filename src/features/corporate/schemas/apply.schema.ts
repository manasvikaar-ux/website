import { z } from 'zod';

export const applyFormSchema = z.object({
  educationStatus: z
    .string()
    .min(1, { message: 'Education status is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  fullName: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' }),
  phone: z
    .string()
    .min(10, { message: 'Phone number must be at least 10 characters' }),
});

export type ApplyFormValues = z.infer<typeof applyFormSchema>;
