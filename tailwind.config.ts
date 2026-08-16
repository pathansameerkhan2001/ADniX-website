import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#080808', // Deep Black (Hero/Footer)
          900: '#111111', // Near Black / Primary Dark
          800: '#1a1a1a',
          700: '#282828',
          600: '#3a3a3a',
        },
        ivory: {
          50: '#FAF8F3',  // Main background
          100: '#F6F3EB',
          200: '#F1E9DC', // Warm Beige (Cards / alternate sections)
          300: '#E5DCce',
          400: '#DDD8CE', // Border Gray
        },
        gold: {
          400: '#E8C77B', // Soft Gold (Hover)
          500: '#D9A441', // Champagne Gold (Primary accent)
          600: '#C4902F',
          700: '#756B3E', // Olive Gold (Supporting accent / tags)
          800: '#5C5430',
        },
        muted: {
          DEFAULT: '#77736C', // Muted Gray
          light: '#9E9A92',
          dark: '#58554F',
          onDark: '#B9B5AD', // Light text on dark bg
        },
        borderGray: '#DDD8CE',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 1px 3px 0 rgba(17, 17, 17, 0.04), 0 1px 2px -1px rgba(17, 17, 17, 0.04)',
        'soft-md': '0 4px 16px -2px rgba(17, 17, 17, 0.06), 0 2px 6px -2px rgba(17, 17, 17, 0.04)',
        'soft-lg': '0 12px 32px -4px rgba(17, 17, 17, 0.08), 0 4px 12px -2px rgba(17, 17, 17, 0.03)',
        'soft-xl': '0 20px 48px -6px rgba(8, 8, 8, 0.16), 0 8px 20px -4px rgba(8, 8, 8, 0.08)',
        'glow-gold': '0 0 35px -8px rgba(217, 164, 65, 0.35)',
        'glow-dark': '0 20px 50px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(217, 164, 65, 0.15)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
