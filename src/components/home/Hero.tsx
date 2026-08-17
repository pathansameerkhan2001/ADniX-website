'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { smoothEase, heroVideoVariants } from '@/components/motion/variants';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Gracefully ignore autoplay prevention by browser policy without console errors
        });
      }
    }
  }, []);

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-36 lg:pt-40 pb-16 sm:pb-20 md:pb-24 lg:pb-28 overflow-hidden bg-charcoal-950 text-white">
      {/* Ambient Dark & Gold Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[850px] max-w-full h-[450px] bg-gold-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-48 right-6 w-[450px] max-w-full h-[450px] bg-gold-600/8 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] max-w-full h-[350px] bg-white/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Digital Dark Texture */}
      <div
        className="absolute inset-0 bg-dark-pattern opacity-30 pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container size="xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 xl:gap-12">
          {/* CONTENT COLUMN: Headline, Subtext, CTAs & Value Badges */}
          <div className="w-full lg:w-[48%] flex flex-col items-start text-left z-10">
            {/* 1. Small Badge in Charcoal/Gold */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: smoothEase }}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-charcoal-900/90 border border-gold-500/30 text-gold-400 text-xs sm:text-sm font-semibold mb-5 sm:mb-6 shadow-soft-sm backdrop-blur-sm max-w-full"
            >
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse-subtle shrink-0" />
              <span className="truncate">Digital Growth Partner for Local Businesses</span>
            </motion.div>

            {/* 2. Main Headline with Responsive clamp() Typography (34–44px on mobile, 44–54px on desktop) */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: smoothEase }}
              className="text-[clamp(32px,7.5vw,44px)] lg:text-[clamp(44px,3.8vw,54px)] font-extrabold tracking-tight text-white leading-[1.1] sm:leading-[1.12] text-balance"
            >
              Grow Your Business.{' '}
              <span className="text-gold-500 block sm:inline">
                Build Your Digital Presence.
              </span>
            </motion.h1>

            {/* 3. Supporting Text in Soft White */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3, ease: smoothEase }}
              className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-muted-onDark leading-relaxed max-w-xl"
            >
              ADNIX helps businesses in Kadapa build professional websites, reach more customers and grow online with smart digital marketing solutions.
            </motion.p>

            {/* 4. Action Buttons: Stacked full-width on mobile, side-by-side on desktop */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto">
              {/* Primary CTA */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: smoothEase }}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="primary"
                  size="lg"
                  href="/contact"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto text-center font-semibold shadow-glow-gold min-h-[48px]"
                >
                  Get Free Consultation
                </Button>
              </motion.div>

              {/* Secondary CTA */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.48, ease: smoothEase }}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="darkOutline"
                  size="lg"
                  href="/services"
                  className="w-full sm:w-auto text-center font-medium min-h-[48px]"
                >
                  Explore Our Services
                </Button>
              </motion.div>
            </div>

            {/* 5. Benefit Badges: 1-column stacked cards on mobile (<640px), multi-col on tablet/desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.55, ease: smoothEase }}
              className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap items-stretch gap-2.5 sm:gap-3 mt-6 sm:mt-8 pt-6 border-t border-charcoal-800 text-xs sm:text-sm text-muted-onDark font-medium w-full"
            >
              <div className="w-full sm:w-auto flex items-center gap-2.5 bg-charcoal-900/80 px-3.5 py-2.5 rounded-xl border border-charcoal-800 backdrop-blur-sm shadow-soft-sm">
                <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                <span className="text-white font-medium">Local Kadapa Expertise</span>
              </div>

              <div className="w-full sm:w-auto flex items-center gap-2.5 bg-charcoal-900/80 px-3.5 py-2.5 rounded-xl border border-charcoal-800 backdrop-blur-sm shadow-soft-sm">
                <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                <span className="text-white font-medium">Complete Digital Solutions</span>
              </div>

              <div className="w-full sm:w-auto flex items-center gap-2.5 bg-charcoal-900/80 px-3.5 py-2.5 rounded-xl border border-charcoal-800 backdrop-blur-sm shadow-soft-sm">
                <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                <span className="text-white font-medium">Affordable & Practical</span>
              </div>

              <div className="w-full sm:w-auto flex items-center gap-2.5 bg-charcoal-900/80 px-3.5 py-2.5 rounded-xl border border-charcoal-800 backdrop-blur-sm shadow-soft-sm">
                <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                <span className="text-white font-medium">Long-Term Support</span>
              </div>
            </motion.div>
          </div>

          {/* 6. HERO VIDEO: Below benefits on mobile (16:9 framed video), circular formation orb on desktop */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroVideoVariants}
            className="w-full lg:w-[50%] xl:w-[52%] flex items-center justify-center lg:justify-end shrink-0 relative pt-4 lg:pt-0"
          >
            {/* Ambient Gold Halo Glow */}
            <div className="absolute -inset-4 sm:-inset-6 lg:-inset-8 bg-gradient-to-tr from-gold-500/22 via-gold-600/10 to-charcoal-900/40 rounded-3xl lg:rounded-full blur-2xl lg:blur-3xl -z-10 transform scale-95" />

            {/* Desktop Decorative Orbital Rings (Shown only on lg screens) */}
            <div
              className="hidden lg:block absolute -inset-3.5 sm:-inset-6 rounded-full border border-gold-500/25 border-dashed pointer-events-none animate-[spin_60s_linear_infinite]"
              aria-hidden="true"
            />
            <div
              className="hidden lg:block absolute -inset-1 rounded-full border border-gold-400/15 pointer-events-none"
              aria-hidden="true"
            />

            {/* Responsive Video Container: 16:9 framed box on mobile/tablet, circular formation orb on desktop */}
            <div className="relative w-full max-w-lg lg:max-w-none aspect-video lg:aspect-square lg:w-[430px] xl:w-[470px] 2xl:w-[505px] rounded-2xl sm:rounded-3xl lg:rounded-full overflow-hidden shadow-glow-gold bg-charcoal-950 border-2 border-gold-500/50 p-1.5 sm:p-2 shrink-0 mx-auto lg:mx-0">
              {/* Inner Clipped Container */}
              <div className="relative w-full h-full rounded-xl sm:rounded-2xl lg:rounded-full overflow-hidden bg-charcoal-950 flex items-center justify-center">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover object-center rounded-xl sm:rounded-2xl lg:rounded-full"
                  aria-label="ADNIX Digital Growth Animation"
                >
                  <source src="/videos/adnix-hero.mp4" type="video/mp4" />
                </video>

                {/* Subtle dark vignette overlay */}
                <div
                  className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-full pointer-events-none ring-1 ring-inset ring-gold-500/30 shadow-[inset_0_0_25px_rgba(8,8,8,0.6)]"
                  aria-hidden="true"
                />

                {/* Floating Gold Status Badge */}
                <div className="absolute bottom-3 sm:bottom-4.5 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-charcoal-950/90 backdrop-blur-md border border-gold-500/40 text-gold-400 text-[10px] sm:text-xs font-semibold shadow-soft-md">
                    <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                    <span>ADNIX Digital Growth</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
