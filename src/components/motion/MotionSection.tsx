'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { fadeUp, defaultViewport } from './variants';

export interface MotionSectionProps extends HTMLMotionProps<'section'> {
  delay?: number;
  className?: string;
  id?: string;
  children: React.ReactNode;
}

export function MotionSection({
  delay = 0,
  className = '',
  id,
  children,
  ...props
}: MotionSectionProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeUp}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}
