import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { Button } from '@/shared/components/ui/button';
import { cn } from '@/shared/lib/utils';

const neobrutalBaseVariants = cva(
  'rounded-md border border-black font-semibold text-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] active:shadow-none',
  {
    defaultVariants: {
      size: 'md',
    },
    variants: {
      size: {
        md: 'h-14 px-8 text-[1.05rem]',
        sm: 'h-12 px-5 text-sm',
      },
    },
  }
);

type SharedButtonProps = Omit<React.ComponentProps<typeof Button>, 'size'> &
  VariantProps<typeof neobrutalBaseVariants>;

export const YellowButton = ({
  className,
  size,
  ...props
}: SharedButtonProps) => (
  <Button
    className={cn(
      neobrutalBaseVariants({ size }),
      'bg-primary hover:bg-[#fbbf24]',
      className
    )}
    {...props}
  />
);

export const DarkButton = ({
  className,
  size,
  ...props
}: SharedButtonProps) => (
  <Button
    className={cn(
      neobrutalBaseVariants({ size }),
      'bg-gray-900 text-white hover:bg-gray-800',
      className
    )}
    {...props}
  />
);

export const WhiteButton = ({
  className,
  size,
  ...props
}: SharedButtonProps) => (
  <Button
    className={cn(
      neobrutalBaseVariants({ size }),
      'bg-[#f9f5f1] hover:bg-[#f1ece8]',
      className
    )}
    {...props}
  />
);
