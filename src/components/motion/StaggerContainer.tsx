'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { staggerContainer, defaultViewport } from './variants';

export interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  children: React.ReactNode;
}

export function StaggerContainer({
  staggerDelay = 0.08,
  delayChildren = 0,
  className = '',
  children,
  ...props
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={staggerContainer(staggerDelay, delayChildren)}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
