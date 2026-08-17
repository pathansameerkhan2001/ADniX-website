'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import {
  mobileDrawerVariants,
  mobileDrawerItemVariants,
  mobileDrawerCtaVariants,
} from '@/components/motion/variants';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open & handle ESC key
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-ivory-50/95 backdrop-blur-md shadow-soft-sm border-b border-borderGray h-[68px] sm:h-[72px] md:h-[76px] lg:h-[80px]'
            : 'bg-ivory-50/90 backdrop-blur-sm border-b border-borderGray/70 h-[68px] sm:h-[72px] md:h-[76px] lg:h-[80px]'
        } flex items-center pt-safe`}
      >
        <Container size="xl" className="h-full">
          <nav className="h-full flex items-center justify-between" aria-label="Main Navigation">
            {/* Brand Logo: Left aligned */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="flex items-center"
            >
              <Link
                href="/"
                className="flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg p-0 transition-opacity hover:opacity-95"
                aria-label="ADNIX Home"
              >
                <div className="relative flex items-center w-[130px] sm:w-[145px] md:w-[155px] lg:w-[175px] h-auto">
                  <Image
                    src="/brand/adnix-logo.png"
                    alt="ADNIX - Digital Growth & Business Services"
                    width={280}
                    height={109}
                    priority
                    className="w-full h-auto object-contain block"
                  />
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation Links (Visible on screens >= 768px) */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
              className="hidden md:flex items-center space-x-1 lg:space-x-1.5 xl:space-x-2"
            >
              {siteConfig.navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 lg:px-3.5 xl:px-4 py-2 text-[15px] lg:text-[16px] xl:text-[17px] font-semibold rounded-xl transition-all relative ${
                      isActive
                        ? 'text-charcoal-950 font-bold bg-ivory-200/90'
                        : 'text-charcoal-800 hover:text-charcoal-950 hover:bg-ivory-200/60'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        transition={{ type: 'spring', damping: 30, stiffness: 350 }}
                        className="absolute bottom-0 left-3.5 right-3.5 lg:left-4 lg:right-4 h-[3px] bg-gold-500 rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </motion.div>

            {/* Right Actions: Desktop CTA (>=768px) + Mobile Toggle Button (<768px) */}
            <div className="flex items-center gap-3">
              {/* Desktop Consultation CTA in Champagne Gold (Hidden on mobile <768px) */}
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.15, ease: 'easeOut' }}
                className="hidden md:flex items-center gap-2"
              >
                <Button
                  variant="primary"
                  size="md"
                  href="/contact"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="font-semibold shadow-soft-sm px-4 lg:px-5 py-2.5 text-[14px] lg:text-[15px]"
                >
                  Get Free Consultation
                </Button>
              </motion.div>

              {/* Mobile Menu Toggle Button (<768px): Hamburger (☰) by default, transforms to (X) when open */}
              <button
                type="button"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="md:hidden p-2.5 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-xl bg-ivory-100 hover:bg-ivory-200 text-charcoal-950 border border-borderGray focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation-drawer"
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-charcoal-950 stroke-[2.4]" />
                ) : (
                  <Menu className="w-6 h-6 text-charcoal-950 stroke-[2.4]" />
                )}
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {/* Mobile Navigation Drawer: Sibling to header so position:fixed is never trapped by header containment */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileDrawerVariants}
            className="md:hidden fixed top-[68px] sm:top-[72px] left-0 right-0 bottom-0 z-40 bg-ivory-50/98 backdrop-blur-2xl border-t border-borderGray/80 shadow-soft-xl overflow-y-auto pb-safe flex flex-col"
          >
            <div className="px-5 py-6 sm:px-6 sm:py-8 flex flex-col flex-grow justify-between max-w-lg mx-auto w-full">
              {/* Vertical Menu Column with Strict Specifications */}
              <div className="flex flex-col space-y-2.5 sm:space-y-3">
                {siteConfig.navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div key={item.href} variants={mobileDrawerItemVariants}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center justify-between min-h-[52px] px-5 sm:px-6 rounded-2xl text-[18px] font-semibold leading-[1.2] text-left transition-all ${
                          isActive
                            ? 'bg-ivory-200 text-charcoal-950 shadow-soft-sm font-bold border-l-4 border-gold-500'
                            : 'text-charcoal-800 hover:bg-ivory-100 hover:text-charcoal-950 bg-white border border-borderGray/70 shadow-soft-sm'
                        }`}
                      >
                        <span className="truncate">{item.label}</span>
                        {isActive ? (
                          <span className="w-2.5 h-2.5 rounded-full bg-gold-500 shrink-0" />
                        ) : (
                          <ArrowRight className="w-4 h-4 text-muted/60 shrink-0" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile CTA Area (Below navigation links with clear top margin) */}
              <motion.div
                variants={mobileDrawerCtaVariants}
                className="mt-6 pt-5 border-t border-borderGray/80 flex flex-col gap-3"
              >
                {/* 100% width, min-height 52px Champagne Gold Button */}
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  icon={<ArrowRight className="w-5 h-5" />}
                  className="min-h-[52px] font-semibold text-[16px] px-6 shadow-glow-gold"
                >
                  Get Free Consultation
                </Button>

                {/* WhatsApp Quick Chat */}
                <Button
                  variant="whatsapp"
                  size="lg"
                  fullWidth
                  href={siteConfig.whatsappQuickMessage()}
                  external
                  icon={<MessageSquare className="w-5 h-5" />}
                  className="min-h-[50px] font-semibold text-[15px] px-6"
                >
                  WhatsApp Quick Chat
                </Button>

                <p className="text-[11px] text-center text-muted mt-1">
                  ADNIX • Digital Growth Partner in Kadapa, AP
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
