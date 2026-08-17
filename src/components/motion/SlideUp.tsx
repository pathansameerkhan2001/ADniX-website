'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { defaultViewport, smoothEase } from './variants';

export interface SlideUpProps extends HTMLMotionProps<'div'> {
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  children: React.ReactNode;
}

export function SlideUp({
  delay = 0,
  duration = 0.5,
  distance = 24,
  className = '',
  children,
  ...props
}: SlideUpProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={{
        hidden: { opacity: 0, y: distance },
        visible: {
          opacity: 1,
          y: 0,
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
