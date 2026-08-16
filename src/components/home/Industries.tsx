'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Stethoscope,
  UtensilsCrossed,
  GraduationCap,
  ShoppingBag,
  Hotel,
  Building2,
  Briefcase,
  Sparkles,
  ArrowRight,
  Check,
  ChevronRight,
  ChevronDown,
} from 'lucide-react';
import { industriesData } from '@/data/industries';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export function Industries() {
  const [selectedId, setSelectedId] = useState<string>(industriesData[0].id);

  const getIcon = (iconName: string, isSelected: boolean) => {
    const props = {
      className: `w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${
        isSelected ? 'text-gold-500' : 'text-charcoal-900 group-hover:text-gold-600'
      }`,
    };
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope {...props} />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed {...props} />;
      case 'GraduationCap':
        return <GraduationCap {...props} />;
      case 'ShoppingBag':
        return <ShoppingBag {...props} />;
      case 'Hotel':
        return <Hotel {...props} />;
      case 'Building2':
        return <Building2 {...props} />;
      case 'Briefcase':
        return <Briefcase {...props} />;
      case 'Sparkles':
      default:
        return <Sparkles {...props} />;
    }
  };

  const selectedIndustry =
    industriesData.find((item) => item.id === selectedId) || industriesData[0];

  // Angles for 8 orbital positions (in degrees, starting from top -90deg)
  const angles = [-90, -45, 0, 45, 90, 135, 180, 225];
  const radiusDesktop = 145; // radius in px for desktop orbit wheel

  return (
    <section className="py-20 sm:py-28 bg-ivory-200 border-b border-borderGray scroll-mt-20">
      <Container size="xl">
        <SectionHeading
          badge="Built for Local Businesses"
          badgeVariant="gold"
          title="Built for Local Businesses"
          subtitle="From local businesses to growing brands, ADNIX helps you build a stronger digital presence and connect with more customers."
        />

        {/* Master Rounded Horizontal Container */}
        <div className="bg-white rounded-3xl border border-borderGray shadow-soft-lg p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
            
            {/* LEFT — CIRCULAR INDUSTRY ECOSYSTEM (48% on desktop = 6 cols out of 12) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full mb-3 text-center lg:text-left">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold-700 block">
                  Select Industry Ecosystem:
                </span>
              </div>

              {/* Desktop & Tablet: Orbital Circular Path */}
              <div className="hidden sm:flex relative w-[360px] h-[360px] md:w-[390px] md:h-[390px] items-center justify-center my-2">
                {/* Orbital Guide Rings */}
                <div className="absolute w-[290px] h-[290px] rounded-full border border-dashed border-gold-500/30 pointer-events-none" />
                <div className="absolute w-[180px] h-[180px] rounded-full bg-ivory-50/80 border border-borderGray pointer-events-none" />

                {/* Center Core Brand Badge */}
                <div className="absolute z-10 w-24 h-24 rounded-full bg-charcoal-900 border-2 border-gold-500/80 shadow-glow-gold flex flex-col items-center justify-center text-center p-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400">
                    ADNIX
                  </span>
                  <span className="text-[9px] font-semibold text-white leading-tight mt-0.5">
                    Growth Hub
                  </span>
                </div>

                {/* 8 Circular Industry Nodes around circular path */}
                {industriesData.map((item, idx) => {
                  const isSelected = item.id === selectedId;
                  const angleRad = (angles[idx] * Math.PI) / 180;
                  const x = Math.round(radiusDesktop * Math.cos(angleRad));
                  const y = Math.round(radiusDesktop * Math.sin(angleRad));

                  return (
                    <div
                      key={item.id}
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                      }}
                      className="absolute z-20 flex flex-col items-center"
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedId(item.id)}
                        className="group flex flex-col items-center text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-full p-0.5 transition-all"
                        aria-pressed={isSelected}
                        title={item.name}
                      >
                        <motion.div
                          animate={
                            isSelected
                              ? { scale: [1, 1.08, 1] }
                              : { scale: 1 }
                          }
                          transition={{ duration: 0.3 }}
                          className={`w-12 h-12 md:w-13 md:h-13 rounded-full flex items-center justify-center transition-all duration-300 shadow-soft-md relative ${
                            isSelected
                              ? 'bg-charcoal-900 border-2 border-gold-500 ring-4 ring-gold-500/25 shadow-glow-gold'
                              : 'bg-white border border-borderGray hover:border-gold-500 hover:bg-ivory-50'
                          }`}
                        >
                          {getIcon(item.icon, isSelected)}

                          {/* Subtle Outer Ripple Ring */}
                          {isSelected && (
                            <span className="absolute -inset-1.5 rounded-full border border-gold-500/50 animate-pulse-subtle pointer-events-none" />
                          )}
                        </motion.div>

                        {/* Name badge */}
                        <span
                          className={`text-[10px] sm:text-[11px] leading-tight mt-1.5 px-1.5 py-0.5 rounded-md max-w-[76px] truncate transition-colors ${
                            isSelected
                              ? 'font-bold text-charcoal-950 bg-gold-400/30'
                              : 'font-medium text-muted-dark bg-white/90 group-hover:text-charcoal-950 border border-borderGray/60'
                          }`}
                        >
                          {item.name.split('&')[0]}
                        </span>
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Mobile View: Compact Circular Grid (4 × 2) */}
              <div className="grid grid-cols-4 sm:hidden gap-1.5 xs:gap-2.5 w-full my-2">
                {industriesData.map((item) => {
                  const isSelected = item.id === selectedId;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedId(item.id)}
                      className="group flex flex-col items-center text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-2xl p-1 transition-all min-h-[48px]"
                      aria-pressed={isSelected}
                    >
                      <div className="relative">
                        <div
                          className={`w-11 h-11 xs:w-12 xs:h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-soft-sm relative ${
                            isSelected
                              ? 'bg-charcoal-900 border-2 border-gold-500 ring-4 ring-gold-500/20 shadow-glow-gold'
                              : 'bg-ivory-50 border border-borderGray hover:border-gold-500/60 hover:bg-white'
                          }`}
                        >
                          {getIcon(item.icon, isSelected)}

                          {isSelected && (
                            <span className="absolute -inset-1 rounded-full border border-gold-500/40 animate-pulse-subtle pointer-events-none" />
                          )}
                        </div>
                      </div>

                      <span
                        className={`text-[9px] xs:text-[10px] leading-tight mt-1 line-clamp-2 transition-colors max-w-[70px] ${
                          isSelected
                            ? 'font-bold text-charcoal-950'
                            : 'font-medium text-muted-dark'
                        }`}
                      >
                        {item.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CENTER — ANIMATED CONNECTOR CONTROL & DIVIDER (1 col) */}
            <div className="lg:col-span-1 flex flex-col items-center justify-center relative my-2 lg:my-0">
              {/* Desktop Vertical Connector with slow pulsing gold arrow */}
              <div className="hidden lg:flex flex-col items-center justify-center h-full min-h-[340px] relative w-full">
                <div className="w-[1px] bg-borderGray flex-grow" />

                {/* Animated Center Circle */}
                <div className="relative my-4 z-10">
                  <span className="absolute -inset-2 rounded-full bg-gold-500/20 animate-ping opacity-30 pointer-events-none" />
                  <div className="w-10 h-10 rounded-full bg-charcoal-900 border-2 border-gold-500 flex items-center justify-center shadow-glow-gold text-gold-400">
                    <ChevronRight className="w-5 h-5 animate-pulse" />
                  </div>
                </div>

                <div className="w-[1px] bg-borderGray flex-grow" />
              </div>

              {/* Mobile Horizontal Connector */}
              <div className="flex lg:hidden items-center justify-center w-full relative py-2">
                <div className="h-[1px] bg-borderGray flex-grow" />
                <div className="relative mx-3 z-10">
                  <div className="w-8 h-8 rounded-full bg-charcoal-900 border-2 border-gold-500 flex items-center justify-center shadow-soft-sm text-gold-400">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
                <div className="h-[1px] bg-borderGray flex-grow" />
              </div>
            </div>

            {/* RIGHT — DYNAMIC INDUSTRY DETAILS PANEL (6 cols out of 12) */}
            <div className="lg:col-span-6 lg:pl-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndustry.id}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="bg-ivory-50/80 rounded-2xl border border-borderGray p-6 sm:p-8 flex flex-col justify-between shadow-soft-sm"
                >
                  <div>
                    {/* Small Category Label in Gold */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ivory-200 border border-borderGray text-gold-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4">
                      <span>INDUSTRY FOCUS</span>
                    </div>

                    {/* Heading */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900 tracking-tight mb-3">
                      {selectedIndustry.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-muted leading-relaxed mb-6">
                      {selectedIndustry.description}
                    </p>

                    {/* 3 Concise Benefits with Gold Checkmarks */}
                    <div className="space-y-3 mb-8 pt-2">
                      {selectedIndustry.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-charcoal-900">
                          <div className="w-5 h-5 rounded-full bg-charcoal-900 text-gold-500 flex items-center justify-center shrink-0 mt-0.5 shadow-soft-sm">
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                          <span className="leading-snug font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic CTA Button */}
                  <div className="pt-4 border-t border-borderGray/70">
                    <Button
                      variant="primary"
                      size="lg"
                      href={`/contact?industry=${selectedIndustry.id}`}
                      icon={<ArrowRight className="w-4 h-4" />}
                      className="w-full sm:w-auto font-semibold shadow-soft-sm"
                    >
                      {selectedIndustry.ctaText}
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
