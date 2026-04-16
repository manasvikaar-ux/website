'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { cn } from '@/shared/lib/utils';

export type MessageSquareIconHandle = {
  startAnimation: () => Promise<void>;
  stopAnimation: () => Promise<void>;
};

type MessageSquareIconProps = {
  size?: number;
} & HTMLAttributes<HTMLButtonElement>;

const ICON_VARIANTS: Variants = {
  animate: {
    rotate: [0, -7, 7, 0],
    scale: 1.05,
    transition: {
      rotate: {
        duration: 0.5,
        ease: 'easeInOut',
      },
      scale: {
        damping: 10,
        stiffness: 400,
        type: 'spring',
      },
    },
  },
  normal: {
    rotate: 0,
    scale: 1,
  },
};

const MessageSquareIcon = forwardRef<
  MessageSquareIconHandle,
  MessageSquareIconProps
>(({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
  const controls = useAnimation();
  const isControlledRef = useRef(false);

  // ✅ safe async wrapper
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
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
      {...props}
    >
      <motion.svg
        animate={controls}
        fill="none"
        height={size}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        variants={ICON_VARIANTS}
        viewBox="0 0 24 24"
        width={size}
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </motion.svg>
    </button>
  );
});

MessageSquareIcon.displayName = 'MessageSquareIcon';

export { MessageSquareIcon };
