'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'darkOutline' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  fullWidth = false,
  icon,
  iconPosition = 'right',
  className,
  children,
  onClick,
  disabled,
  type = 'button',
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-xl transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer';

  const variantClasses = {
    primary:
      'bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-semibold shadow-soft-sm hover:shadow-glow-gold',
    secondary:
      'bg-charcoal-900 hover:bg-charcoal-950 text-white shadow-soft-sm border border-charcoal-700/80',
    outline:
      'border border-ivory-400 bg-white hover:bg-ivory-200 text-charcoal-900 shadow-soft-sm',
    darkOutline:
      'border border-white/20 bg-charcoal-900/60 hover:bg-charcoal-800 text-white hover:border-gold-500/80 backdrop-blur-sm',
    ghost:
      'text-charcoal-900 hover:text-gold-600 hover:bg-ivory-200/70',
    whatsapp:
      'bg-[#059669] hover:bg-[#047857] text-white shadow-soft-sm',
  };

  const sizeClasses = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  };

  const combinedClasses = twMerge(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? 'w-full' : '',
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.15 }}
          className={combinedClasses}
          onClick={onClick as any}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} onClick={onClick as any}>
        <motion.span
          className="inline-flex items-center justify-center gap-2 w-full h-full"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.15 }}
        >
          {content}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.15 }}
      className={combinedClasses}
      {...(props as any)}
    >
      {content}
    </motion.button>
  );
}
