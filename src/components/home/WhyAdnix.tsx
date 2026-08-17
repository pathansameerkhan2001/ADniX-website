'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Layers, Coins, Headphones, CheckCircle2 } from 'lucide-react';
import { whyUsData } from '@/data/whyUs';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { defaultViewport, fadeUp, smoothEase } from '@/components/motion/variants';

export function WhyAdnix() {
  const getIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6' };
    switch (iconName) {
      case 'MapPin':
        return <MapPin {...props} />;
      case 'Layers':
        return <Layers {...props} />;
      case 'Coins':
        return <Coins {...props} />;
      case 'Headphones':
      default:
        return <Headphones {...props} />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-borderGray scroll-mt-20">
      <Container size="xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeUp}
        >
          <SectionHeading
            badge="The ADNIX Advantage"
            badgeVariant="gold"
            title="Why Choose ADNIX?"
            subtitle="We bridge the gap between complex digital technology and practical local business results. Here is why businesses partner with us."
          />
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {whyUsData.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={defaultViewport}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: smoothEase }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card
                variant="default"
                padding="lg"
                className="border-borderGray bg-ivory-50 hover:bg-white transition-all duration-300 shadow-soft-sm hover:shadow-soft-md h-full"
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    {/* Top Header with Icon & Accent Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-charcoal-900 text-gold-500 flex items-center justify-center shadow-soft-sm">
                        {getIcon(pillar.icon)}
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-ivory-200 text-gold-700 border border-borderGray">
                        {pillar.accentBadge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-charcoal-900 mb-2.5">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-muted leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Checklist details */}
                  <div className="pt-4 border-t border-borderGray/60 space-y-2.5">
                    {pillar.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal-900">
                        <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
