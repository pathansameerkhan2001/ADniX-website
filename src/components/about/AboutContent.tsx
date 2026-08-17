'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Compass,
  Award,
  Users,
  ShieldCheck,
  Zap,
  ArrowRight,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { defaultViewport, fadeUp, smoothEase } from '@/components/motion/variants';

export function AboutContent() {
  const differentiators = [
    {
      icon: <MapPin className="w-6 h-6 text-gold-500" />,
      title: 'Local Kadapa Roots',
      description:
        'We understand local customer behavior, regional search intent, and the specific growth hurdles faced by businesses across Rayalaseema.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold-500" />,
      title: 'Transparent & Accountable',
      description:
        'Clear deliverables, fixed upfront pricing, and zero jargon. You always know what is being built, why, and how it impacts your business.',
    },
    {
      icon: <Zap className="w-6 h-6 text-gold-500" />,
      title: 'Full-Stack Execution',
      description:
        'From high-speed modern websites to Google Maps SEO, social media management, and ad campaigns—everything is handled seamlessly under one roof.',
    },
    {
      icon: <Users className="w-6 h-6 text-gold-500" />,
      title: 'Long-Term Growth Partner',
      description:
        'We don’t just deliver and vanish. We provide ongoing website management, regular updates, security monitoring, and marketing guidance.',
    },
  ];

  return (
    <div className="pt-28 sm:pt-32 pb-20 sm:pb-28 bg-ivory-50 min-h-screen">
      <Container size="xl">
        {/* 1. Page Hero & Who We Are */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeUp}
        >
          <SectionHeading
            badge="Who We Are"
            badgeVariant="gold"
            title="Empowering Local Businesses to Win in the Digital Age"
            subtitle="ADNIX is a dedicated digital growth agency based in Kadapa, helping hospitals, clinics, restaurants, schools, retail shops, and local enterprises build their complete digital presence."
          />
        </motion.div>

        {/* 2. Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12 mb-16">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.5, delay: 0.1, ease: smoothEase }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="h-full"
          >
            <Card
              variant="default"
              padding="lg"
              className="bg-white border-borderGray shadow-soft-sm hover:shadow-soft-md h-full flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-charcoal-900 text-gold-500 flex items-center justify-center mb-5 shadow-soft-sm">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gold-600 block mb-2">
                  Our Mission
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 mb-3">
                  Practical Digital Growth for Every Business
                </h3>
                <p className="text-sm sm:text-base text-muted leading-relaxed mb-6">
                  To provide local business owners in Kadapa and Andhra Pradesh with world-class digital solutions—from fast responsive websites to targeted lead generation—at accessible, transparent prices that deliver real return on investment.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-borderGray/60 text-xs sm:text-sm text-charcoal-900">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>High-speed websites built for conversions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Local search visibility to attract nearby buyers</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.5, delay: 0.2, ease: smoothEase }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="h-full"
          >
            <Card
              variant="default"
              padding="lg"
              className="bg-charcoal-900 text-white border-charcoal-800 shadow-soft-md hover:shadow-soft-xl h-full flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gold-500 text-charcoal-950 flex items-center justify-center mb-5 shadow-glow-gold">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gold-400 block mb-2">
                  Our Vision
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Kadapa’s Foremost Digital Partner
                </h3>
                <p className="text-sm sm:text-base text-muted-onDark leading-relaxed mb-6">
                  To become the most trusted digital transformation partner for regional enterprises across South India, bridging traditional business strengths with modern digital technology.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-charcoal-800 text-xs sm:text-sm text-muted-onDark">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Empowering 500+ local brands with digital excellence</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Pioneering measurable ROI and lasting client relationships</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* 3. What Sets Us Apart */}
        <div className="my-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeUp}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory-200 border border-borderGray text-gold-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5 text-gold-600" />
              <span>The ADNIX Edge</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900">
              What Sets Us Apart
            </h2>
            <p className="text-sm text-muted mt-2">
              Why business owners across Kadapa choose ADNIX over generic national agencies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((diff, idx) => (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={defaultViewport}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: smoothEase }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white p-6 rounded-2xl border border-borderGray shadow-soft-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-charcoal-900 flex items-center justify-center mb-4 shadow-soft-sm">
                    {diff.icon}
                  </div>
                  <h3 className="text-base font-bold text-charcoal-900 mb-2">
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4. Bottom Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.5, delay: 0.2, ease: smoothEase }}
          className="bg-charcoal-950 rounded-3xl p-8 sm:p-12 text-center text-white border border-charcoal-800 shadow-soft-xl mt-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Ready to Partner With Us?
            </h3>
            <p className="text-sm sm:text-base text-muted-onDark mb-6 leading-relaxed">
              Let&apos;s discuss how we can build a strong digital foundation and bring more customers to your business in Kadapa.
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
