'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { cn } from '@/shared/lib/utils';

export type MessageCircleIconHandle = {
  startAnimation: () => Promise<void>;
  stopAnimation: () => Promise<void>;
};

type MessageCircleIconProps = {
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

const MessageCircleIcon = forwardRef<
  MessageCircleIconHandle,
  MessageCircleIconProps
>(({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
  const controls = useAnimation();
  const isControlledRef = useRef(false);

  // ✅ fix: no empty function + no .catch
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        variants={ICON_VARIANTS}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </motion.svg>
    </button>
  );
});

MessageCircleIcon.displayName = 'MessageCircleIcon';

export { MessageCircleIcon };
