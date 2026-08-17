'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  MessageSquare,
  ArrowUpRight,
} from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { defaultViewport, fadeUp, smoothEase } from '@/components/motion/variants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesList = [
    { label: 'Website Development', href: '/services#website-development' },
    { label: 'Website Management', href: '/services#website-management' },
    { label: 'Social Media Marketing', href: '/services#social-media-marketing' },
    { label: 'SEO & Local SEO', href: '/services#seo-local-seo' },
    { label: 'Digital Advertising', href: '/services#digital-advertising' },
    { label: 'Branding & Creative', href: '/services#branding-creative-design' },
    { label: 'Influencer Marketing', href: '/services#influencer-marketing' },
    { label: 'Lead Generation', href: '/services#lead-generation' },
  ];

  return (
    <footer className="bg-charcoal-950 text-muted-onDark pt-16 pb-12 border-t border-charcoal-800 overflow-hidden relative">
      {/* Subtle background ambient light */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-charcoal-800/80"
        >
          {/* Column 1: Brand & Purpose (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-4" aria-label="ADNIX Home">
                <div className="relative h-11 sm:h-12 w-auto flex items-center">
                  <Image
                    src="/brand/adnix-logo.png"
                    alt="ADNIX - Digital Growth & Business Services"
                    width={220}
                    height={85}
                    className="object-contain h-full w-auto"
                  />
                </div>
              </Link>

              <p className="text-sm text-muted-onDark leading-relaxed max-w-sm mt-2">
                Empowering businesses in Kadapa and across Andhra Pradesh with high-performance websites, local SEO, social media management, and end-to-end digital growth solutions.
              </p>

              {/* Kadapa Focus Badge */}
              <div className="inline-flex items-center gap-2 mt-5 px-3.5 py-1.5 rounded-full bg-charcoal-900 border border-charcoal-800 text-xs text-gold-400 font-medium">
                <MapPin className="w-3.5 h-3.5 text-gold-500" />
                <span>Dedicated Digital Partner for Kadapa Businesses</span>
              </div>
            </div>

            {/* Social Channels in Gold Hover */}
            <div className="mt-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-onDark block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ADNIX on Instagram"
                  className="w-9 h-9 rounded-lg bg-charcoal-900 hover:bg-gold-500 text-muted-onDark hover:text-charcoal-950 flex items-center justify-center transition-all duration-200"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ADNIX on Facebook"
                  className="w-9 h-9 rounded-lg bg-charcoal-900 hover:bg-gold-500 text-muted-onDark hover:text-charcoal-950 flex items-center justify-center transition-all duration-200"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ADNIX on LinkedIn"
                  className="w-9 h-9 rounded-lg bg-charcoal-900 hover:bg-gold-500 text-muted-onDark hover:text-charcoal-950 flex items-center justify-center transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ADNIX on YouTube"
                  className="w-9 h-9 rounded-lg bg-charcoal-900 hover:bg-gold-500 text-muted-onDark hover:text-charcoal-950 flex items-center justify-center transition-all duration-200"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with ADNIX on WhatsApp"
                  className="w-9 h-9 rounded-lg bg-charcoal-900 hover:bg-gold-500 text-muted-onDark hover:text-charcoal-950 flex items-center justify-center transition-all duration-200"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Services (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {servicesList.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-onDark hover:text-gold-400 hover:translate-x-1 transition-all inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-gold-500" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-onDark hover:text-gold-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-1" />
                <span className="text-muted-onDark">
                  {siteConfig.contact.location}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="text-muted-onDark hover:text-gold-400 transition-colors font-mono text-xs sm:text-sm"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-muted-onDark hover:text-gold-400 transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-gold-500 shrink-0" />
                <span className="text-muted-onDark font-mono text-xs sm:text-sm">
                  adnix.in
                </span>
              </li>
            </ul>

            <div className="mt-5 p-3.5 rounded-xl bg-charcoal-900 border border-charcoal-800">
              <p className="text-xs text-muted-onDark">
                <span className="text-gold-400 font-semibold block mb-0.5">● Ready to talk?</span>
                Free 30-minute digital strategy consultation for Kadapa businesses.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar: Copyright and credits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={defaultViewport}
          transition={{ duration: 0.5, delay: 0.2, ease: smoothEase }}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted"
        >
          <p>
            © {currentYear} {siteConfig.legalName}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-1.5 text-muted">
            <span>Built with precision for businesses in</span>
            <span className="text-white font-medium">Kadapa, AP</span>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}
