'use client';

import { motion, useAnimation } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { cn } from '@/shared/lib/utils';

export type WavesIconHandle = {
  startAnimation: () => void;
  stopAnimation: () => void;
};

type WavesIconProps = {
  size?: number;
} & HTMLAttributes<HTMLSpanElement>;

const WavesIcon = forwardRef<WavesIconHandle, WavesIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: () => {
          void controls.start('animate');
        },
        stopAnimation: () => {
          void controls.start('normal');
        },
      };
    });

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLSpanElement>) => {
        if (!isControlledRef.current) {
          void controls.start('animate');
        }
        onMouseEnter?.(e);
      },
      [controls, onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLSpanElement>) => {
        if (!isControlledRef.current) {
          void controls.start('normal');
        }
        onMouseLeave?.(e);
      },
      [controls, onMouseLeave]
    );

    return (
      <span
        className={cn(className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <svg
          aria-hidden="true"
          fill="none"
          height={size}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            animate={controls}
            d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1"
            initial={{ pathLength: 1 }}
            variants={{
              animate: {
                pathLength: [0, 1],
                transition: { duration: 0.4, ease: 'linear' },
              },
              normal: { pathLength: 1 },
            }}
          />
          <motion.path
            animate={controls}
            d="M2 12c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1"
            initial={{ pathLength: 1 }}
            variants={{
              animate: {
                pathLength: [0, 1],
                transition: { duration: 0.4, ease: 'linear' },
              },
              normal: { pathLength: 1 },
            }}
          />
          <motion.path
            animate={controls}
            d="M2 18c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1"
            initial={{ pathLength: 1 }}
            variants={{
              animate: {
                pathLength: [0, 1],
                transition: { duration: 0.4, ease: 'linear' },
              },
              normal: { pathLength: 1 },
            }}
          />
        </svg>
      </span>
    );
  }
);

WavesIcon.displayName = 'WavesIcon';

export { WavesIcon };
