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
import { defaultViewport, fadeUp, smoothEase } from '@/components/motion/variants';

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

  // Approved orbital radial coordinates for all 8 industries
  // Angle 0 is at 3 o'clock (Right), -90 is at 12 o'clock (Top)
  const industryPositions: Record<string, { angle: number; shortLabel: string }> = {
    healthcare: { angle: -90, shortLabel: 'Hospitals' },
    restaurants: { angle: -45, shortLabel: 'Restaurants' },
    education: { angle: 0, shortLabel: 'Schools' },
    retail: { angle: 45, shortLabel: 'Retail' },
    'local-businesses': { angle: 90, shortLabel: 'Salons & SMBs' },
    'professional-services': { angle: 135, shortLabel: 'Professional' },
    'real-estate': { angle: 180, shortLabel: 'Real Estate' },
    hospitality: { angle: 225, shortLabel: 'Hotels' },
  };

  // Mobile 4x2 grid display order
  const mobileOrderedIds = [
    'healthcare',
    'restaurants',
    'education',
    'retail',
    'hospitality',
    'real-estate',
    'professional-services',
    'local-businesses',
  ];

  const mobileIndustries = mobileOrderedIds
    .map((id) => industriesData.find((item) => item.id === id))
    .filter(Boolean) as typeof industriesData;

  const radiusDesktop = 142; // px radius for desktop orbit wheel

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-ivory-200 border-b border-borderGray scroll-mt-20">
      <Container size="xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeUp}
        >
          <SectionHeading
            badge="Built for Local Businesses"
            badgeVariant="gold"
            title="Built for Local Businesses"
            subtitle="From local businesses to growing brands, ADNIX helps you build a stronger digital presence and connect with more customers."
          />
        </motion.div>

        {/* Master Rounded Container: Left Orbit, Center Divider, Right Details */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeUp}
          className="bg-white rounded-2xl sm:rounded-3xl border border-borderGray shadow-soft-lg p-5 sm:p-8 lg:p-10 relative overflow-hidden"
        >
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-4 items-center">
            
            {/* LEFT — COMPLETE 8-INDUSTRY ORBITAL ECOSYSTEM */}
            <div className="w-full lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full mb-2 text-center lg:text-left">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gold-700 block">
                  Select Industry Ecosystem:
                </span>
              </div>

              {/* Desktop & Tablet: Orbital Circular Ecosystem (Visible on md & lg screens) */}
              <div className="hidden md:flex relative w-[390px] h-[390px] lg:w-[420px] lg:h-[420px] items-center justify-center my-2">
                {/* Orbital Guide Rings */}
                <div className="absolute w-[284px] h-[284px] rounded-full border border-dashed border-gold-500/30 pointer-events-none" />
                <div className="absolute w-[170px] h-[170px] rounded-full bg-ivory-50/80 border border-borderGray pointer-events-none" />

                {/* Center Core Brand Badge */}
                <div className="absolute z-10 w-24 h-24 rounded-full bg-charcoal-900 border-2 border-gold-500/80 shadow-glow-gold flex flex-col items-center justify-center text-center p-2 pointer-events-none">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400">
                    ADNIX
                  </span>
                  <span className="text-[9px] font-semibold text-white leading-tight mt-0.5">
                    Growth Hub
                  </span>
                </div>

                {/* All 8 Circular Industry Nodes Positioned Stably Around the Orbit */}
                {industriesData.map((item) => {
                  const isSelected = item.id === selectedId;
                  const pos = industryPositions[item.id] || { angle: 0, shortLabel: item.name };
                  const angleRad = (pos.angle * Math.PI) / 180;
                  const x = Math.round(radiusDesktop * Math.cos(angleRad));
                  const y = Math.round(radiusDesktop * Math.sin(angleRad));

                  return (
                    <div
                      key={item.id}
                      style={{
                        position: 'absolute',
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      className="z-20 flex flex-col items-center pointer-events-auto"
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedId(item.id)}
                        className="group flex flex-col items-center text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-full p-1 transition-all"
                        aria-pressed={isSelected}
                        title={item.name}
                      >
                        <motion.div
                          animate={isSelected ? { scale: 1.08 } : { scale: 1 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className={`w-12 h-12 lg:w-13 lg:h-13 rounded-full flex items-center justify-center transition-colors duration-300 shadow-soft-md relative ${
                            isSelected
                              ? 'bg-charcoal-900 border-2 border-gold-500 ring-4 ring-gold-500/25 shadow-glow-gold'
                              : 'bg-white border border-borderGray hover:border-gold-500 hover:bg-ivory-50'
                          }`}
                        >
                          {getIcon(item.icon, isSelected)}

                          {/* Subtle Outer Ripple Ring on Selected */}
                          {isSelected && (
                            <span className="absolute -inset-1.5 rounded-full border border-gold-500/50 animate-pulse-subtle pointer-events-none" />
                          )}
                        </motion.div>

                        {/* Name badge */}
                        <span
                          className={`text-[10px] sm:text-[11px] leading-tight mt-1.5 px-2 py-0.5 rounded-md whitespace-nowrap transition-colors ${
                            isSelected
                              ? 'font-bold text-charcoal-950 bg-gold-400/30'
                              : 'font-medium text-muted-dark bg-white/90 group-hover:text-charcoal-950 border border-borderGray/60'
                          }`}
                        >
                          {pos.shortLabel}
                        </span>
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Mobile View: Responsive 4 × 2 Grid with comfortable touch targets (<768px) */}
              <div className="grid grid-cols-4 md:hidden gap-2 sm:gap-3 w-full my-2">
                {mobileIndustries.map((item) => {
                  const isSelected = item.id === selectedId;
                  const pos = industryPositions[item.id];

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedId(item.id)}
                      className="group flex flex-col items-center text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-2xl p-1.5 transition-all min-h-[48px]"
                      aria-pressed={isSelected}
                    >
                      <div className="relative">
                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-soft-sm relative ${
                            isSelected
                              ? 'bg-charcoal-900 border-2 border-gold-500 ring-4 ring-gold-500/20 shadow-glow-gold'
                              : 'bg-ivory-50 border border-borderGray hover:border-gold-500/60 hover:bg-white'
                          }`}
                        >
                          {getIcon(item.icon, isSelected)}

                          {isSelected && (
                            <span className="absolute -inset-1 rounded-2xl border border-gold-500/40 animate-pulse-subtle pointer-events-none" />
                          )}
                        </div>
                      </div>

                      <span
                        className={`text-[10px] sm:text-[11px] leading-tight mt-1.5 line-clamp-2 transition-colors max-w-[72px] ${
                          isSelected
                            ? 'font-bold text-charcoal-950'
                            : 'font-medium text-muted-dark'
                        }`}
                      >
                        {pos?.shortLabel || item.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CENTER — CONNECTOR CONTROL & DIVIDER */}
            <div className="w-full lg:col-span-1 flex flex-col items-center justify-center relative my-1 lg:my-0">
              {/* Desktop Vertical Connector */}
              <div className="hidden lg:flex flex-col items-center justify-center h-full min-h-[360px] relative w-full">
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
              <div className="flex lg:hidden items-center justify-center w-full relative py-1">
                <div className="h-[1px] bg-borderGray flex-grow" />
                <div className="relative mx-3 z-10">
                  <div className="w-8 h-8 rounded-full bg-charcoal-900 border-2 border-gold-500 flex items-center justify-center shadow-soft-sm text-gold-400">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
                <div className="h-[1px] bg-borderGray flex-grow" />
              </div>
            </div>

            {/* RIGHT — DYNAMIC INDUSTRY DETAILS PANEL */}
            <div className="w-full lg:col-span-6 lg:pl-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndustry.id}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.35, ease: smoothEase }}
                  className="bg-ivory-50/90 rounded-2xl border border-borderGray p-5 sm:p-7 lg:p-8 flex flex-col justify-between shadow-soft-sm w-full"
                >
                  <div>
                    {/* Category Tag */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ivory-200 border border-borderGray text-gold-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
                      <span>INDUSTRY FOCUS</span>
                    </div>

                    {/* Heading */}
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-charcoal-900 tracking-tight mb-2 sm:mb-3">
                      {selectedIndustry.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm lg:text-base text-muted leading-relaxed mb-5 sm:mb-6">
                      {selectedIndustry.description}
                    </p>

                    {/* 3 Concise Benefits with Gold Checkmarks */}
                    <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8 pt-1">
                      {selectedIndustry.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-charcoal-900">
                          <div className="w-5 h-5 rounded-full bg-charcoal-900 text-gold-500 flex items-center justify-center shrink-0 mt-0.5 shadow-soft-sm">
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                          <span className="leading-snug font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA Button */}
                  <div className="pt-4 border-t border-borderGray/70">
                    <Button
                      variant="primary"
                      size="lg"
                      href={`/contact?industry=${selectedIndustry.id}`}
                      icon={<ArrowRight className="w-4 h-4" />}
                      className="w-full sm:w-auto font-semibold shadow-soft-sm min-h-[48px]"
                    >
                      {selectedIndustry.ctaText}
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </motion.div>
      </Container>
    </section>
  );
}
