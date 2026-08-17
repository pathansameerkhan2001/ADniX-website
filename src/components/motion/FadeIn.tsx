'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { fadeIn, defaultViewport } from './variants';

export interface FadeInProps extends HTMLMotionProps<'div'> {
  delay?: number;
  duration?: number;
  className?: string;
  children: React.ReactNode;
}

export function FadeIn({
  delay = 0,
  duration = 0.45,
  className = '',
  children,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration,
            delay,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
