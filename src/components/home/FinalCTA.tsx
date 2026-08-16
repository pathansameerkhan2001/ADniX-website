import React from 'react';
import { ArrowRight, MessageSquare, CheckCircle2, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 bg-charcoal-950 text-white relative overflow-hidden scroll-mt-20">
      {/* Ambient Gold Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-600/8 rounded-full blur-3xl pointer-events-none" />

      <Container size="xl">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Local Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-900 border border-gold-500/30 text-gold-400 text-xs font-semibold mb-6">
            <MapPin className="w-3.5 h-3.5 text-gold-500" />
            <span>Let&apos;s Discuss Your Growth in Kadapa</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Grow Your Business?
          </h2>

          {/* Supporting text in #B9B5AD */}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-onDark leading-relaxed max-w-2xl mx-auto">
            Let&apos;s build a digital presence that helps your business get noticed, trusted and chosen.
          </p>

          {/* Value checklist */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 text-xs sm:text-sm text-muted-onDark">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
              <span>Free 30-min strategy session</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
              <span>No pushy sales pitch</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
              <span>Clear, actionable roadmap</span>
            </div>
          </div>

          {/* Dual CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button
              variant="primary"
              size="lg"
              href="/contact"
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto font-semibold px-8"
            >
              Get Free Consultation
            </Button>

            <Button
              variant="darkOutline"
              size="lg"
              href={siteConfig.whatsappQuickMessage()}
              external
              icon={<MessageSquare className="w-4 h-4" />}
              className="w-full sm:w-auto font-semibold px-8"
            >
              Talk to Us on WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
