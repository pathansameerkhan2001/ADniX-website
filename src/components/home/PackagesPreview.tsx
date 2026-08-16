import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { packagesData } from '@/data/packages';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export function PackagesPreview() {
  return (
    <section className="py-20 sm:py-28 bg-ivory-200 border-b border-borderGray relative scroll-mt-20">
      <Container size="xl">
        <SectionHeading
          badge="Transparent Pricing"
          badgeVariant="gold"
          title="Simple Plans for Every Stage"
          subtitle="Choose the right digital growth package for your business needs. Transparent structures with zero hidden surprises."
        />

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packagesData.map((pkg) => {
            const isFeatured = pkg.isPopular;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-charcoal-900 text-white shadow-soft-xl border-2 border-gold-500 ring-4 ring-gold-500/10 lg:-translate-y-2'
                    : 'bg-white text-charcoal-900 border border-borderGray shadow-soft-md'
                } p-6 sm:p-8`}
              >
                {/* Popular Badge Top */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold-500 text-charcoal-950 text-xs font-bold uppercase tracking-wider shadow-soft-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Recommended</span>
                  </div>
                )}

                <div>
                  {/* Tier Title & Tagline */}
                  <div className="mb-4">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider block mb-1 ${
                        isFeatured ? 'text-gold-400' : 'text-gold-600'
                      }`}
                    >
                      {pkg.badge || 'Plan Tier'}
                    </span>
                    <h3 className="text-2xl font-bold">{pkg.name}</h3>
                    <p
                      className={`text-xs sm:text-sm mt-1.5 leading-relaxed ${
                        isFeatured ? 'text-muted-onDark' : 'text-muted'
                      }`}
                    >
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Pricing Box */}
                  <div
                    className={`p-4 rounded-2xl mb-6 ${
                      isFeatured
                        ? 'bg-charcoal-950 border border-charcoal-800'
                        : 'bg-ivory-50 border border-borderGray'
                    }`}
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                        {pkg.startingPrice}
                      </span>
                    </div>
                    {pkg.pricePeriod && (
                      <span
                        className={`text-[11px] block mt-0.5 ${
                          isFeatured ? 'text-muted-onDark' : 'text-muted'
                        }`}
                      >
                        *{pkg.pricePeriod} (Customizable as per business requirements)
                      </span>
                    )}
                  </div>

                  {/* Ideal For Note */}
                  <div className="mb-6">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider block mb-1 ${
                        isFeatured ? 'text-muted-onDark' : 'text-muted-dark'
                      }`}
                    >
                      Best suited for:
                    </span>
                    <p
                      className={`text-xs leading-relaxed ${
                        isFeatured ? 'text-muted-onDark' : 'text-charcoal-900'
                      }`}
                    >
                      {pkg.idealFor}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider block ${
                        isFeatured ? 'text-white' : 'text-charcoal-900'
                      }`}
                    >
                      What&apos;s Included:
                    </span>
                    {pkg.features.slice(0, 6).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isFeatured
                              ? 'bg-gold-500/20 text-gold-400'
                              : 'bg-ivory-200 text-gold-700'
                          }`}
                        >
                          <Check className="w-3 h-3" />
                        </div>
                        <span className={isFeatured ? 'text-muted-onDark' : 'text-charcoal-900'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Button */}
                <div>
                  <Button
                    variant={isFeatured ? 'primary' : 'outline'}
                    size="md"
                    fullWidth
                    href={pkg.ctaHref}
                    icon={<ArrowRight className="w-4 h-4" />}
                    className={
                      isFeatured
                        ? 'font-semibold shadow-soft-sm'
                        : 'border-borderGray hover:border-charcoal-900 font-semibold text-charcoal-900'
                    }
                  >
                    {pkg.ctaText}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Packages CTA */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            href="/packages"
            icon={<ArrowRight className="w-4 h-4" />}
            className="border-borderGray text-charcoal-900 hover:bg-white font-medium"
          >
            View Full Feature Comparison Table
          </Button>

          <span className="text-xs text-muted">
            Need a custom enterprise setup? We tailor plans for multi-location businesses.
          </span>
        </div>
      </Container>
    </section>
  );
}
