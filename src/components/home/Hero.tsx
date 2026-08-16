'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-charcoal-950 text-white">
      {/* Ambient Dark & Gold Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gold-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-48 right-6 w-[450px] h-[450px] bg-gold-600/8 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-white/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Digital Dark Texture */}
      <div
        className="absolute inset-0 bg-dark-pattern opacity-30 pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container size="xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 xl:gap-12">
          {/* LEFT SIDE (~48% on desktop): Headline, Subtext, CTAs & Value Badges */}
          <div className="w-full lg:w-[48%] flex flex-col items-start text-left z-10">
            {/* Small Badge in Charcoal/Gold */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-900/90 border border-gold-500/30 text-gold-400 text-xs sm:text-sm font-semibold mb-6 shadow-soft-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse-subtle" />
              <span>Digital Growth Partner for Local Businesses</span>
            </div>

            {/* Main Headline with Champagne Gold Highlight (Fluid Scaling) */}
            <h1 className="text-[30px] xs:text-[36px] sm:text-5xl lg:text-[50px] xl:text-[54px] font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              Grow Your Business.{' '}
              <span className="text-gold-500 block sm:inline">
                Build Your Digital Presence.
              </span>
            </h1>

            {/* Supporting Text in Soft White */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-muted-onDark leading-relaxed max-w-xl">
              ADNIX helps businesses in Kadapa build professional websites, reach more customers and grow online with smart digital marketing solutions.
            </p>

            {/* Action Buttons: Stack on Mobile, Side-by-side on Desktop */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-7 sm:mt-8 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                href="/contact"
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto text-center font-semibold shadow-glow-gold min-h-[48px]"
              >
                Get Free Consultation
              </Button>

              <Button
                variant="darkOutline"
                size="lg"
                href="/services"
                className="w-full sm:w-auto text-center font-medium min-h-[48px]"
              >
                Explore Our Services
              </Button>
            </div>

            {/* 4 Value Badges in Dark Glass Cards with Gold Checkmarks: Wrap smoothly on all phones */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3.5 mt-7 sm:mt-8 pt-6 border-t border-charcoal-800 text-xs sm:text-sm text-muted-onDark font-medium w-full">
              <div className="flex items-center gap-2 bg-charcoal-900/80 px-3 py-2 rounded-xl border border-charcoal-800 backdrop-blur-sm shadow-soft-sm">
                <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                <span className="text-white font-medium">Local Kadapa Expertise</span>
              </div>

              <div className="flex items-center gap-2 bg-charcoal-900/80 px-3 py-2 rounded-xl border border-charcoal-800 backdrop-blur-sm shadow-soft-sm">
                <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                <span className="text-white font-medium">Complete Digital Solutions</span>
              </div>

              <div className="flex items-center gap-2 bg-charcoal-900/80 px-3 py-2 rounded-xl border border-charcoal-800 backdrop-blur-sm shadow-soft-sm">
                <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                <span className="text-white font-medium">Affordable & Practical</span>
              </div>

              <div className="flex items-center gap-2 bg-charcoal-900/80 px-3 py-2 rounded-xl border border-charcoal-800 backdrop-blur-sm shadow-soft-sm">
                <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                <span className="text-white font-medium">Long-Term Support</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Circular Formation Video Portal (Fluid responsive orb) */}
          <div className="w-full lg:w-[50%] xl:w-[52%] flex items-center justify-center lg:justify-end shrink-0 relative py-4 sm:py-6">
            {/* Ambient Gold Halo Glow */}
            <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-tr from-gold-500/22 via-gold-600/10 to-charcoal-900/40 rounded-full blur-3xl -z-10 transform scale-95" />

            {/* Decorative Orbital Ring */}
            <div
              className="absolute -inset-3.5 sm:-inset-6 rounded-full border border-gold-500/25 border-dashed pointer-events-none animate-[spin_60s_linear_infinite]"
              aria-hidden="true"
            />
            <div
              className="absolute -inset-1 rounded-full border border-gold-400/15 pointer-events-none"
              aria-hidden="true"
            />

            {/* Main Circular Video Container */}
            <div className="relative rounded-full aspect-square w-[270px] xs:w-[300px] sm:w-[360px] md:w-[400px] lg:w-[430px] xl:w-[470px] 2xl:w-[505px] max-w-[88vw] overflow-hidden shadow-glow-gold bg-charcoal-950 border-2 border-gold-500/50 p-1.5 sm:p-2 shrink-0 mx-auto lg:mx-0">
              {/* Inner Clipped Circle */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-charcoal-950 flex items-center justify-center">
                <video
                  src="/videos/adnix-hero.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover object-center scale-[1.12] rounded-full"
                  aria-label="ADNIX Digital Growth Animation"
                />

                {/* Subtle dark vignette overlay to blend with circle edge */}
                <div
                  className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-inset ring-gold-500/30 shadow-[inset_0_0_25px_rgba(8,8,8,0.6)]"
                  aria-hidden="true"
                />

                {/* Floating Gold Status Badge */}
                <div className="absolute bottom-3.5 sm:bottom-4.5 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-charcoal-950/90 backdrop-blur-md border border-gold-500/40 text-gold-400 text-[10px] sm:text-xs font-semibold shadow-soft-md">
                    <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                    <span>ADNIX Digital Growth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
