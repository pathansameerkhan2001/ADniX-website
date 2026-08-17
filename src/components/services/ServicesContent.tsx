'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Layout,
  ShieldCheck,
  Palette,
  Search,
  Share2,
  Target,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { servicesData } from '@/data/services';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { defaultViewport, fadeUp, smoothEase } from '@/components/motion/variants';

export function ServicesContent() {
  const getIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6' };
    switch (iconName) {
      case 'Layout':
        return <Layout {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'Palette':
        return <Palette {...props} />;
      case 'Search':
        return <Search {...props} />;
      case 'Share2':
        return <Share2 {...props} />;
      case 'Target':
        return <Target {...props} />;
      case 'Users':
        return <Users {...props} />;
      case 'TrendingUp':
      default:
        return <TrendingUp {...props} />;
    }
  };

  // Group services by category
  const categories = [
    {
      id: 'web-tech',
      title: 'Website & Digital Infrastructure',
      badge: 'Foundation',
      description:
        'High-performance websites and proactive technical management built to establish credibility and convert traffic into customers.',
      services: servicesData.filter((s) => s.category === 'web-tech'),
    },
    {
      id: 'branding-creative',
      title: 'Branding & Creative Identity',
      badge: 'Visual Edge',
      description:
        'Distinctive logo design, brand guides, and cohesive marketing collaterals that make your business instantly recognizable.',
      services: servicesData.filter((s) => s.category === 'branding-creative'),
    },
    {
      id: 'search-visibility',
      title: 'Local Search & Google Visibility',
      badge: 'Discovery',
      description:
        'Rank at the top of Google Search and Google Maps when local customers in Kadapa search for your services.',
      services: servicesData.filter((s) => s.category === 'search-visibility'),
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing & Customer Acquisition',
      badge: 'Growth Engine',
      description:
        'Social media management, targeted Google and Meta Ads, and influencer campaigns to drive qualified leads.',
      services: servicesData.filter((s) => s.category === 'digital-marketing' || s.category === 'influencer-growth'),
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
            badge="Full Suite of Services"
            badgeVariant="gold"
            title="Comprehensive Digital Solutions for Modern Businesses"
            subtitle="From your initial website launch to ongoing local SEO, social media, and ad campaigns—we deliver end-to-end digital growth."
          />
        </motion.div>

        {/* Categories Loop */}
        <div className="space-y-16 sm:space-y-24 mt-12">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-24">
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={defaultViewport}
                transition={{ duration: 0.5, ease: smoothEase }}
                className="mb-8"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-ivory-200 text-gold-700 border border-borderGray">
                    {cat.badge}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900">
                  {cat.title}
                </h2>
                <p className="text-sm sm:text-base text-muted max-w-3xl mt-1.5 leading-relaxed">
                  {cat.description}
                </p>
              </motion.div>

              {/* Service Cards (Staggered entrance: 0.08s) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {cat.services.map((service, sIdx) => (
                  <motion.div
                    key={service.id}
                    id={service.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={defaultViewport}
                    transition={{ duration: 0.45, delay: sIdx * 0.08, ease: smoothEase }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="bg-white rounded-3xl border border-borderGray p-6 sm:p-8 shadow-soft-sm hover:shadow-soft-md transition-colors flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Bar with Icon & Popular Tag */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-charcoal-900 text-gold-500 flex items-center justify-center shadow-soft-sm">
                          {getIcon(service.icon)}
                        </div>
                        {service.isPopular && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gold-500/20 text-gold-700 border border-gold-500/40">
                            <Sparkles className="w-3 h-3" />
                            <span>Most Requested</span>
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-charcoal-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed mb-6">
                        {service.fullDescription || service.shortDescription}
                      </p>

                      {/* Benefits checklist */}
                      {service.benefits && service.benefits.length > 0 && (
                        <div className="space-y-2 mb-6">
                          <span className="text-xs font-bold uppercase tracking-wider text-muted-dark block mb-2">
                            Key Advantages:
                          </span>
                          {service.benefits.map((benefit, bIdx) => (
                            <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-900">
                              <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Deliverables tags */}
                      {service.deliverables && service.deliverables.length > 0 && (
                        <div className="pt-4 border-t border-borderGray/60 mb-6">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-muted-dark block mb-2">
                            What We Deliver:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {service.deliverables.map((item, dIdx) => (
                              <span
                                key={dIdx}
                                className="text-xs px-2.5 py-1 rounded-lg bg-ivory-100 border border-borderGray text-charcoal-900 font-medium"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card CTA */}
                    <div className="pt-4 border-t border-borderGray/60">
                      <Button
                        variant="primary"
                        size="md"
                        fullWidth
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        icon={<ArrowRight className="w-4 h-4" />}
                        className="font-semibold shadow-soft-sm"
                      >
                        Inquire About {service.title}
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Category CTA appears */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={defaultViewport}
                transition={{ duration: 0.45, delay: 0.25, ease: smoothEase }}
                className="mt-6 p-4 rounded-2xl bg-ivory-100 border border-borderGray flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-charcoal-900"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold-500" />
                  <span>Looking for a bundled package combining website + SEO + marketing?</span>
                </div>
                <Link
                  href="/packages"
                  className="font-bold text-gold-600 hover:text-charcoal-950 inline-flex items-center gap-1 shrink-0"
                >
                  <span>Explore Growth Bundles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.5, delay: 0.2, ease: smoothEase }}
          className="mt-20 p-8 sm:p-12 rounded-3xl bg-charcoal-950 text-white text-center border border-charcoal-800 shadow-soft-xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Need a Custom Digital Strategy?
            </h3>
            <p className="text-sm text-muted-onDark mb-6 leading-relaxed">
              Book a free 30-minute consultation. We&apos;ll analyze your business and recommend the exact services you need to start seeing results.
            </p>
            <Button
              variant="primary"
              size="lg"
              href="/contact"
              icon={<ArrowRight className="w-4 h-4" />}
              className="font-semibold shadow-glow-gold"
            >
              Get Free Consultation
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
