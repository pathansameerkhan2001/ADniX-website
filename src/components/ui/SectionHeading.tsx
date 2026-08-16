import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: 'gold' | 'charcoal' | 'ivory';
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  isDark?: boolean;
}

export function SectionHeading({
  badge,
  badgeVariant = 'gold',
  title,
  subtitle,
  align = 'center',
  className,
  titleClassName,
  subtitleClassName,
  isDark = false,
}: SectionHeadingProps) {
  const badgeClasses = {
    gold: 'bg-gold-500/10 text-gold-600 border-gold-500/30',
    charcoal: 'bg-charcoal-900/5 text-charcoal-900 border-charcoal-900/15',
    ivory: 'bg-white text-muted-dark border-borderGray',
  };

  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={twMerge('flex flex-col mb-12 sm:mb-16', alignClasses[align], className)}>
      {badge && (
        <span
          className={twMerge(
            'inline-flex items-center px-3.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border mb-3.5 select-none',
            badgeClasses[badgeVariant]
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={twMerge(
          'text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight',
          isDark ? 'text-white' : 'text-charcoal-900',
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={twMerge(
            'mt-3.5 text-base sm:text-lg max-w-2xl leading-relaxed',
            isDark ? 'text-muted-onDark' : 'text-muted',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
