'use client';

import { motion, useAnimation } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { cn } from '@/shared/lib/utils';

export type EyeIconHandle = {
  startAnimation: () => void;
  stopAnimation: () => void;
};

type EyeIconProps = {
  size?: number;
} & HTMLAttributes<HTMLButtonElement>;

const EyeIcon = forwardRef<EyeIconHandle, EyeIconProps>(
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
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (isControlledRef.current) {
          onMouseEnter?.(e);
        } else {
          void controls.start('animate');
        }
      },
      [controls, onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (isControlledRef.current) {
          onMouseLeave?.(e);
        } else {
          void controls.start('normal');
        }
      },
      [controls, onMouseLeave]
    );

    return (
      <button
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
            d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
            style={{ originY: '50%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            variants={{
              animate: { opacity: [1, 0.3, 1], scaleY: [1, 0.1, 1] },
              normal: { opacity: 1, scaleY: 1 },
            }}
          />
          <motion.circle
            animate={controls}
            cx="12"
            cy="12"
            r="3"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            variants={{
              animate: { opacity: [1, 0.3, 1], scale: [1, 0.3, 1] },
              normal: { opacity: 1, scale: 1 },
            }}
          />
        </svg>
      </button>
    );
  }
);

EyeIcon.displayName = 'EyeIcon';

export { EyeIcon };
