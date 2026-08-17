'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ivory-50/95 backdrop-blur-md shadow-soft-sm border-b border-borderGray h-[68px] sm:h-[76px] lg:h-[80px]'
          : 'bg-ivory-50/90 backdrop-blur-sm border-b border-borderGray/70 h-[72px] sm:h-[80px] lg:h-[84px]'
      } flex items-center pt-safe`}
    >
      <Container size="xl" className="h-full">
        <nav className="h-full flex items-center justify-between" aria-label="Main Navigation">
          {/* Brand Logo: Proportional 130–150px on mobile, larger on desktop */}
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

          {/* Desktop Navigation Links (Visible only on desktop screens >= 1024px) */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {siteConfig.navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 xl:px-4 py-2 text-[16px] xl:text-[17px] font-semibold rounded-xl transition-all relative ${
                    isActive
                      ? 'text-charcoal-950 font-bold bg-ivory-200/90'
                      : 'text-charcoal-800 hover:text-charcoal-950 hover:bg-ivory-200/60'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 xl:left-4 xl:right-4 h-[3px] bg-gold-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Actions: Desktop CTA + Mobile Toggle Button */}
          <div className="flex items-center gap-3">
            {/* Desktop Consultation CTA in Champagne Gold */}
            <div className="hidden sm:flex items-center gap-2">
              <Button
                variant="primary"
                size="md"
                href="/contact"
                icon={<ArrowRight className="w-4 h-4" />}
                className="font-semibold shadow-soft-sm px-5 py-2.5 text-[15px]"
              >
                Get Free Consultation
              </Button>
            </div>

            {/* Mobile Menu Toggle Button: Hamburger (☰) by default, transforms to (X) when open */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-charcoal-900 hover:text-gold-600 hover:bg-ivory-200 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="lg:hidden fixed inset-x-0 top-[68px] sm:top-[76px] bottom-0 bg-ivory-50/98 backdrop-blur-xl border-b border-borderGray shadow-soft-xl px-4 py-6 overflow-y-auto pb-safe transition-all duration-300 animate-in slide-in-from-top-2 z-50"
        >
          <Container size="sm">
            <div className="flex flex-col space-y-1.5">
              {siteConfig.navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 min-h-[48px] rounded-xl text-[16px] font-semibold transition-colors ${
                      isActive
                        ? 'bg-ivory-200 text-charcoal-950 shadow-soft-sm'
                        : 'text-charcoal-800 hover:bg-ivory-100 hover:text-charcoal-950'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-gold-500" />}
                  </Link>
                );
              })}

              <div className="pt-5 mt-3 border-t border-borderGray flex flex-col gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="min-h-[48px] font-semibold"
                >
                  Get Free Consultation
                </Button>

                <Button
                  variant="whatsapp"
                  size="lg"
                  fullWidth
                  href={siteConfig.whatsappQuickMessage()}
                  external
                  icon={<MessageSquare className="w-4 h-4" />}
                  className="min-h-[48px] font-semibold"
                >
                  WhatsApp Quick Chat
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}


