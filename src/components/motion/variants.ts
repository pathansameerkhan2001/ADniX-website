import { Variants, Transition } from 'framer-motion';

// Standard ease curves
export const smoothEase = [0.25, 0.1, 0.25, 1];
export const springTransition: Transition = {
  type: 'spring',
  damping: 28,
  stiffness: 260,
};

// Viewport configuration for scroll reveals
export const defaultViewport = {
  once: true,
  amount: 0.15,
  margin: '0px 0px -50px 0px',
};

// Fade In variant
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.45, ease: smoothEase },
  },
};

// Fade Up variant
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: smoothEase },
  },
};

// Fade Down variant
export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: smoothEase },
  },
};

// Slide in Left
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: smoothEase },
  },
};

// Slide in Right
export const slideRight: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: smoothEase },
  },
};

// Scale In variant
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: smoothEase },
  },
};

// Hero Video entrance (subtle scale & opacity, no continuous movement)
export const heroVideoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay: 0.35, ease: smoothEase },
  },
};

// Stagger Container
export const staggerContainer = (
  staggerDelay = 0.08,
  delayChildren = 0
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: delayChildren,
    },
  },
});

// Stagger Item variant
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: smoothEase },
  },
};

// Mobile Navigation Drawer Variants
export const mobileDrawerVariants: Variants = {
  closed: {
    x: '100%',
    opacity: 0,
    transition: {
      type: 'spring',
      damping: 32,
      stiffness: 300,
      when: 'afterChildren',
    },
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 28,
      stiffness: 260,
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

// Mobile Drawer Item Variants
export const mobileDrawerItemVariants: Variants = {
  closed: {
    opacity: 0,
    x: 20,
    transition: { duration: 0.15 },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: smoothEase },
  },
};

// Mobile Drawer CTA Container Variants
export const mobileDrawerCtaVariants: Variants = {
  closed: {
    opacity: 0,
    y: 16,
    transition: { duration: 0.15 },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.3, ease: smoothEase },
  },
};

// Button Interaction Variants
export const buttonHoverVariants = {
  hover: { scale: 1.02, transition: { duration: 0.15, ease: 'easeInOut' } },
  tap: { scale: 0.98, transition: { duration: 0.1, ease: 'easeInOut' } },
};

// Card Hover Variants
export const cardHoverVariants: Variants = {
  initial: { y: 0 },
  hover: {
    y: -4,
    transition: { duration: 0.25, ease: smoothEase },
  },
};
