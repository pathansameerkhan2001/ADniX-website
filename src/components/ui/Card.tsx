import React from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'beige' | 'bordered' | 'dark';
  hoverEffect?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

export function Card({
  variant = 'default',
  hoverEffect = false,
  padding = 'md',
  className,
  children,
  ...props
}: CardProps) {
  const variantClasses = {
    default: 'bg-white border border-borderGray shadow-soft-sm',
    elevated: 'bg-white border border-ivory-300 shadow-soft-md',
    beige: 'bg-ivory-200 border border-borderGray shadow-soft-sm',
    bordered: 'bg-ivory-50 border border-borderGray',
    dark: 'bg-charcoal-950 text-white border border-charcoal-800 shadow-soft-xl',
  };

  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4 sm:p-5',
    md: 'p-6 sm:p-7',
    lg: 'p-7 sm:p-9',
    xl: 'p-8 sm:p-12',
  };

  const hoverClasses = hoverEffect
    ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg hover:border-gold-500/50'
    : '';

  return (
    <div
      className={twMerge(
        'rounded-2xl relative overflow-hidden',
        variantClasses[variant],
        paddingClasses[padding],
        hoverClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
