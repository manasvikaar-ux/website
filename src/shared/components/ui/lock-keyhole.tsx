'use client';

import { motion, useAnimation } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { cn } from '@/shared/lib/utils';

export type LockKeyholeIconHandle = {
  startAnimation: () => Promise<void>;
  stopAnimation: () => Promise<void>;
};

type LockKeyholeIconProps = {
  size?: number;
} & HTMLAttributes<HTMLButtonElement>;

const LockKeyholeIcon = forwardRef<LockKeyholeIconHandle, LockKeyholeIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
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
        <motion.svg
          animate={controls}
          fill="none"
          height={size}
          initial="normal"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          transition={{
            duration: 1,
            ease: [0.4, 0, 0.2, 1],
          }}
          variants={{
            animate: {
              rotate: [-3, 1, -2, 0],
              scale: [0.95, 1.05, 0.98, 1],
            },
            normal: {
              rotate: 0,
              scale: 1,
            },
          }}
          viewBox="0 0 24 24"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="16" r="1" />
          <rect height="12" rx="2" width="18" x="3" y="10" />

          <motion.path
            animate={controls}
            d="M7 10V7a5 5 0 0 1 10 0v3"
            initial="normal"
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
            }}
            variants={{
              animate: {
                pathLength: 0.7,
              },
              normal: {
                pathLength: 1,
              },
            }}
          />
        </motion.svg>
      </button>
    );
  }
);

LockKeyholeIcon.displayName = 'LockKeyholeIcon';

export { LockKeyholeIcon };
