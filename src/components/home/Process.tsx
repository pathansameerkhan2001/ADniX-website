import React from 'react';
import { processData } from '@/data/process';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';

export function Process() {
  return (
    <section className="py-20 sm:py-28 bg-ivory-200 border-b border-borderGray relative overflow-hidden scroll-mt-20">
      <Container size="xl">
        <SectionHeading
          badge="Structured Roadmap"
          badgeVariant="gold"
          title="From Idea to Growth"
          subtitle="A clear, transparent 5-step roadmap ensuring your digital presence is built efficiently, launched flawlessly, and scaled continuously."
        />

        {/* 5-Step Process Timeline: Horizontal on Desktop, Vertical on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 relative">
          {processData.map((step) => (
            <Card
              key={step.stepNumber}
              variant="default"
              hoverEffect
              padding="md"
              className="flex flex-col justify-between border-borderGray bg-white relative shadow-soft-sm hover:shadow-soft-md"
            >
              <div>
                {/* Step Number Top Banner in Champagne Gold */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl sm:text-4xl font-black text-gold-500 font-mono tracking-tighter">
                    {step.stepNumber}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-ivory-200 text-charcoal-900 border border-borderGray">
                    {step.duration}
                  </span>
                </div>

                {/* Step Title & Tagline */}
                <h3 className="text-lg font-bold text-charcoal-900 mb-1">
                  {step.title}
                </h3>
                <span className="text-xs font-semibold text-gold-600 block mb-3">
                  {step.tagline}
                </span>

                {/* Description */}
                <p className="text-xs sm:text-sm text-muted leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Key Deliverables Pill */}
              <div className="pt-3 border-t border-borderGray/60">
                <span className="text-[11px] font-bold text-muted-dark uppercase tracking-wider block mb-1.5">
                  Deliverables:
                </span>
                <ul className="space-y-1">
                  {step.deliverables.map((item, idx) => (
                    <li key={idx} className="text-[11px] text-charcoal-900 flex items-start gap-1">
                      <span className="text-gold-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
