'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import { packagesData } from '@/data/packages';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { defaultViewport, fadeUp, smoothEase } from '@/components/motion/variants';

export function PackagesContent() {
  const comparisonFeatures = [
    {
      feature: 'Website Scope',
      starter: '4–5 Custom Pages',
      growth: '8–10 Custom Pages',
      scale: 'Unlimited / Custom CMS',
    },
    {
      feature: 'Mobile Responsiveness',
      starter: 'Yes (100% Mobile Ready)',
      growth: 'Yes (Advanced Touch UX)',
      scale: 'Yes (App-like Web App)',
    },
    {
      feature: 'WhatsApp Integration',
      starter: 'Direct Chat Button',
      growth: 'Lead Capture + Instant Alerts',
      scale: 'Automated CRM / Bot Workflow',
    },
    {
      feature: 'Local Google SEO',
      starter: 'Basic Meta & Map Embed',
      growth: '#1 Page Google Maps Optimization',
      scale: 'Aggressive Multi-Keyword SEO',
    },
    {
      feature: 'Social Media Posts',
      starter: 'Setup only',
      growth: '12 Branded Creatives/mo',
      scale: '20+ Posts + Video Reels',
    },
    {
      feature: 'Ad Campaigns (Google/Meta)',
      starter: 'Optional Add-on',
      growth: 'Setup + Budget Advisory',
      scale: 'Full Monthly Campaign Management',
    },
    {
      feature: 'Technical Support',
      starter: '30 Days Free',
      growth: 'Ongoing Dedicated WhatsApp',
      scale: 'Priority 24/7 SLA Support',
    },
  ];

  return (
    <div className="pt-28 sm:pt-32 pb-20 sm:pb-28 bg-ivory-50 min-h-screen">
      <Container size="xl">
        {/* Page Hero */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeUp}
        >
          <SectionHeading
            badge="Transparent Pricing"
            badgeVariant="gold"
            title="Simple, High-Value Plans for Every Business Stage"
            subtitle="Transparent pricing built for Kadapa and Andhra Pradesh businesses. Zero hidden maintenance costs, clear timelines, and measurable deliverables."
          />
        </motion.div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mt-12 mb-20">
          {packagesData.map((pkg, idx) => {
            const isFeatured = pkg.isPopular;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: isFeatured ? 32 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={defaultViewport}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: smoothEase }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`relative rounded-3xl transition-colors duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-charcoal-900 text-white shadow-soft-xl border-2 border-gold-500 ring-4 ring-gold-500/10 lg:-translate-y-2'
                    : 'bg-white text-charcoal-900 border border-borderGray shadow-soft-md'
                } p-6 sm:p-8`}
              >
                {/* Popular Badge Top */}
                {isFeatured && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={defaultViewport}
                    transition={{ delay: 0.35, duration: 0.3, ease: smoothEase }}
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold-500 text-charcoal-950 text-xs font-bold uppercase tracking-wider shadow-soft-md flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Recommended</span>
                  </motion.div>
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
                    {pkg.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
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
              </motion.div>
            );
          })}
        </div>

        {/* Feature Comparison Table */}
        <div className="my-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeUp}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900">
              Detailed Feature Comparison
            </h2>
            <p className="text-sm text-muted mt-2">
              Compare package specifications side-by-side to select the ideal plan for your growth goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.5, ease: smoothEase }}
            className="bg-white rounded-3xl border border-borderGray shadow-soft-sm overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-ivory-100 border-b border-borderGray text-charcoal-900">
                    <th className="py-4 px-6 font-bold">Key Capability</th>
                    <th className="py-4 px-6 font-bold">Starter Plan</th>
                    <th className="py-4 px-6 font-bold text-gold-600 bg-gold-500/10">Growth Plan (Recommended)</th>
                    <th className="py-4 px-6 font-bold">Scale Plan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-borderGray">
                  {comparisonFeatures.map((row, idx) => (
                    <tr key={idx} className="hover:bg-ivory-50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-charcoal-900">{row.feature}</td>
                      <td className="py-4 px-6 text-muted-dark">{row.starter}</td>
                      <td className="py-4 px-6 text-charcoal-950 font-medium bg-gold-500/5">{row.growth}</td>
                      <td className="py-4 px-6 text-muted-dark">{row.scale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* Custom Plan / Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.5, delay: 0.15, ease: smoothEase }}
          className="mt-16 bg-ivory-200 rounded-3xl p-8 sm:p-10 border border-borderGray flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-gold-700 block mb-1">
              Custom Enterprise Setup
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 mb-2">
              Have Multi-Location or Specialized Requirements?
            </h3>
            <p className="text-xs sm:text-sm text-muted max-w-xl">
              We design tailor-made packages for hospitals with multiple branches, educational institutions, franchise chains, and high-volume local brands.
            </p>
          </div>
          <Button
            variant="primary"
            size="lg"
            href="/contact?package=custom"
            icon={<ArrowRight className="w-4 h-4" />}
            className="font-semibold shrink-0"
          >
            Request Custom Quote
          </Button>
        </motion.div>
      </Container>
    </div>
  );
}
