'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { defaultViewport, smoothEase } from './variants';

export interface ScaleInProps extends HTMLMotionProps<'div'> {
  delay?: number;
  duration?: number;
  initialScale?: number;
  className?: string;
  children: React.ReactNode;
}

export function ScaleIn({
  delay = 0,
  duration = 0.45,
  initialScale = 0.95,
  className = '',
  children,
  ...props
}: ScaleInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={{
        hidden: { opacity: 0, scale: initialScale },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration,
            delay,
            ease: smoothEase,
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
