'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { cn } from '@/shared/lib/utils';

export type SmileIconHandle = {
  startAnimation: () => Promise<void>;
  stopAnimation: () => Promise<void>;
};

type SmileIconProps = {
  size?: number;
} & HTMLAttributes<HTMLSpanElement>;

const SmileIcon = forwardRef<SmileIconHandle, SmileIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    // ✅ shared safe async runner
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
      async (e: React.MouseEvent<HTMLSpanElement>) => {
        if (!isControlledRef.current) {
          await safeStart('animate');
        }
        onMouseEnter?.(e);
      },
      [onMouseEnter, safeStart]
    );

    const handleMouseLeave = useCallback(
      async (e: React.MouseEvent<HTMLSpanElement>) => {
        if (!isControlledRef.current) {
          await safeStart('normal');
        }
        onMouseLeave?.(e);
      },
      [onMouseLeave, safeStart]
    );

    const faceVariants: Variants = {
      animate: {
        rotate: [0, -3, 3, 0],
        scale: [1, 1.15, 1.05, 1.1],
        strokeWidth: [2, 2.5, 2.5, 2.5],
        transition: {
          duration: 0.8,
          ease: 'easeInOut',
          times: [0, 0.3, 0.6, 1],
        },
      },
      normal: {
        rotate: 0,
        scale: 1,
        strokeWidth: 2,
        transition: { duration: 0.3, ease: 'easeOut' },
      },
    };

    const mouthVariants: Variants = {
      animate: {
        d: 'M7 13.5s2.5 3.5 5 3.5 5-3.5 5-3.5',
        pathLength: [0.3, 1, 1],
        pathOffset: [0, 0, 0],
        strokeWidth: 2.5,
        transition: {
          d: { duration: 0.4, ease: 'easeOut' },
          delay: 0.1,
          pathLength: {
            duration: 0.5,
            ease: 'easeInOut',
            times: [0, 0.5, 1],
          },
        },
      },
      normal: {
        d: 'M8 14s1.5 2 4 2 4-2 4-2',
        pathLength: 1,
        pathOffset: 0,
        strokeWidth: 2,
        transition: { duration: 0.3, ease: 'easeOut' },
      },
    };

    const eyeVariants: Variants = {
      animate: {
        opacity: [1, 1, 1, 1],
        scale: [1, 1.5, 0.8, 1.2],
        transition: {
          duration: 0.5,
          ease: 'easeInOut',
          times: [0, 0.3, 0.6, 1],
        },
      },
      normal: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3, ease: 'easeOut' },
      },
    };

    return (
      <span
        className={cn(className)}
        onMouseEnter={(e) => handleMouseEnter(e)}
        onMouseLeave={(e) => handleMouseLeave(e)}
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
          variants={faceVariants}
          viewBox="0 0 24 24"
          width={size}
        >
          <motion.circle cx="12" cy="12" r="10" />

          <motion.path
            animate={controls}
            d="M8 14s1.5 2 4 2 4-2 4-2"
            initial="normal"
            variants={mouthVariants}
          />

          <motion.line
            animate={controls}
            initial="normal"
            variants={eyeVariants}
            x1="9"
            x2="9.01"
            y1="9"
            y2="9"
          />

          <motion.line
            animate={controls}
            initial="normal"
            variants={eyeVariants}
            x1="15"
            x2="15.01"
            y1="9"
            y2="9"
          />
        </motion.svg>
      </span>
    );
  }
);

SmileIcon.displayName = 'SmileIcon';

export { SmileIcon };
