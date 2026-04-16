'use client';

import { motion, useAnimation } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { cn } from '@/shared/lib/utils';

export type BatteryWarningIconHandle = {
  startAnimation: () => Promise<void>;
  stopAnimation: () => Promise<void>;
};

type BatteryWarningIconProps = {
  size?: number;
} & HTMLAttributes<HTMLButtonElement>;

const BatteryWarningIcon = forwardRef<
  BatteryWarningIconHandle,
  BatteryWarningIconProps
>(({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
  const controls = useAnimation();
  const isControlledRef = useRef(false);

  const safeStart = useCallback(
    async (variant: 'animate' | 'normal') => {
      try {
        await controls.start(variant);
      } catch (error) {
        console.error(error);
      }
    },
    [controls]
  );

  useImperativeHandle(ref, () => {
    isControlledRef.current = true;

    return {
      startAnimation: async () => {
        await safeStart('animate');
      },
      stopAnimation: async () => {
        await safeStart('normal');
      },
    };
  });

  const handleMouseEnter = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isControlledRef.current) {
        onMouseEnter?.(e);
      } else {
        await safeStart('animate');
      }
    },
    [onMouseEnter, safeStart]
  );

  const handleMouseLeave = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isControlledRef.current) {
        onMouseLeave?.(e);
      } else {
        await safeStart('normal');
      }
    },
    [onMouseLeave, safeStart]
  );

  return (
    <button
      className={cn(className)}
      onMouseEnter={(e) => {
        void handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        void handleMouseLeave(e);
      }}
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
        <path d="M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2" />
        <path d="M22 14v-4" />
        <path d="M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" />

        <motion.g
          animate={controls}
          initial="normal"
          style={{ originX: '50%', originY: '50%' }}
          variants={{
            animate: {
              opacity: [1, 0.4, 1],
              scale: [1, 1.1, 1],
              transition: {
                duration: 0.8,
                ease: 'easeInOut',
                repeat: Number.POSITIVE_INFINITY,
              },
            },
            normal: {
              opacity: 1,
              scale: 1,
            },
          }}
        >
          <path d="M10 17h.01" />
          <path d="M10 7v6" />
        </motion.g>
      </svg>
    </button>
  );
});

BatteryWarningIcon.displayName = 'BatteryWarningIcon';

export { BatteryWarningIcon };
