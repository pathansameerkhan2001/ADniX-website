'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { defaultViewport, fadeUp, smoothEase } from '@/components/motion/variants';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessName: '',
    industry: 'Hospital & Clinic',
    service: 'Website Development',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 sm:pt-32 pb-20 sm:pb-28 bg-ivory-50 min-h-screen">
      <Container size="xl">
        {/* Contact Hero */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeUp}
        >
          <SectionHeading
            badge="Get in Touch"
            badgeVariant="gold"
            title="Let's Discuss Your Digital Growth"
            subtitle="Book a free 30-minute digital consultation for your business in Kadapa. No pushy sales pitch—just practical, actionable advice."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8">
          {/* Left Column: Direct Contact Details & Kadapa Promise (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.5, delay: 0.1, ease: smoothEase }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <Card variant="default" padding="lg" className="bg-white border-borderGray shadow-soft-sm">
              <h3 className="text-xl font-bold text-charcoal-900 mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold-500" />
                <span>Direct Contact Details</span>
              </h3>
              <p className="text-sm text-muted mb-6">
                Reach out to us directly via call, WhatsApp, or email. We typically respond within 2 to 4 hours.
              </p>

              <div className="space-y-4">
                {/* Location */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-ivory-50 border border-borderGray">
                  <div className="w-10 h-10 rounded-lg bg-charcoal-900 text-gold-500 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-muted-dark uppercase tracking-wider block mb-0.5">
                      Office Location
                    </span>
                    <p className="text-sm font-semibold text-charcoal-900">
                      {siteConfig.contact.location}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-ivory-50 border border-borderGray hover:border-gold-500 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-charcoal-900 text-gold-500 flex items-center justify-center shrink-0 group-hover:bg-gold-500 group-hover:text-charcoal-950 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-muted-dark uppercase tracking-wider block mb-0.5">
                      Phone Call
                    </span>
                    <p className="text-sm font-semibold text-charcoal-900 font-mono">
                      {siteConfig.contact.phoneDisplay}
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={siteConfig.whatsappQuickMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-ivory-50 border border-borderGray hover:border-[#059669] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#059669] text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-muted-dark uppercase tracking-wider block mb-0.5">
                      WhatsApp Quick Chat
                    </span>
                    <p className="text-sm font-semibold text-charcoal-900">
                      Instant Message on WhatsApp →
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-ivory-50 border border-borderGray hover:border-gold-500 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-charcoal-900 text-gold-500 flex items-center justify-center shrink-0 group-hover:bg-gold-500 group-hover:text-charcoal-950 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-muted-dark uppercase tracking-wider block mb-0.5">
                      Email Us
                    </span>
                    <p className="text-sm font-semibold text-charcoal-900">
                      {siteConfig.contact.email}
                    </p>
                  </div>
                </a>
              </div>
            </Card>

            {/* Operating Hours Card */}
            <div className="p-5 rounded-2xl bg-ivory-200 border border-borderGray flex items-center gap-3.5">
              <Clock className="w-5 h-5 text-gold-600 shrink-0" />
              <div className="text-xs text-charcoal-900">
                <span className="font-bold block">Business Hours:</span>
                Monday to Saturday, 9:30 AM – 7:30 PM IST
              </div>
            </div>
          </motion.div>

          {/* Right Column: Responsive Inquiry Form (7 cols, fades/slides up as one group) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.5, delay: 0.2, ease: smoothEase }}
            className="lg:col-span-7"
          >
            <Card variant="default" padding="lg" className="bg-white border-borderGray shadow-soft-md">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, ease: smoothEase }}
                    className="py-12 px-4 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold-500/20 text-gold-600 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-charcoal-900 mb-2">
                      Consultation Request Received!
                    </h3>
                    <p className="text-sm text-muted max-w-md mx-auto mb-6 leading-relaxed">
                      Thank you, <span className="font-semibold text-charcoal-900">{formData.name}</span>. Our Kadapa digital strategy team will contact you at <span className="font-semibold text-charcoal-900">{formData.phone}</span> shortly.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          businessName: '',
                          industry: 'Hospital & Clinic',
                          service: 'Website Development',
                          message: '',
                        });
                      }}
                    >
                      Submit Another Inquiry
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-5"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-charcoal-900 mb-1">
                        Request a Free Strategy Session
                      </h3>
                      <p className="text-xs sm:text-sm text-muted">
                        Fill out this quick form and we&apos;ll prepare a customized growth roadmap for your business.
                      </p>
                    </div>

                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold text-charcoal-900 uppercase tracking-wider mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Ramesh Reddy"
                          className="w-full h-12 px-4 rounded-xl border border-borderGray bg-ivory-50 text-charcoal-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold text-charcoal-900 uppercase tracking-wider mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full h-12 px-4 rounded-xl border border-borderGray bg-ivory-50 text-charcoal-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all font-mono"
                        />
                      </div>
                    </div>

                    {/* Business Name & Industry */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="businessName" className="block text-xs font-bold text-charcoal-900 uppercase tracking-wider mb-1.5">
                          Business / Organization Name
                        </label>
                        <input
                          type="text"
                          id="businessName"
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          placeholder="e.g. Kadapa Eye Clinic"
                          className="w-full h-12 px-4 rounded-xl border border-borderGray bg-ivory-50 text-charcoal-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="industry" className="block text-xs font-bold text-charcoal-900 uppercase tracking-wider mb-1.5">
                          Your Industry
                        </label>
                        <select
                          id="industry"
                          value={formData.industry}
                          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                          className="w-full h-12 px-4 rounded-xl border border-borderGray bg-ivory-50 text-charcoal-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all"
                        >
                          <option value="Hospitals & Clinics">Hospitals & Clinics</option>
                          <option value="Restaurants & Cafes">Restaurants & Cafes</option>
                          <option value="Schools & Colleges">Schools & Colleges</option>
                          <option value="Retail Stores & Shops">Retail Stores & Shops</option>
                          <option value="Hotels & Resorts">Hotels & Resorts</option>
                          <option value="Real Estate & Builders">Real Estate & Builders</option>
                          <option value="Professional Services">Professional Services</option>
                          <option value="Salons, Gyms & SMBs">Salons, Gyms & Local SMBs</option>
                          <option value="Other">Other Category</option>
                        </select>
                      </div>
                    </div>

                    {/* Primary Service of Interest */}
                    <div>
                      <label htmlFor="service" className="block text-xs font-bold text-charcoal-900 uppercase tracking-wider mb-1.5">
                        Service You Are Looking For
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl border border-borderGray bg-ivory-50 text-charcoal-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all"
                      >
                        <option value="Website Development">01 Website Development</option>
                        <option value="Website Management">02 Website Management</option>
                        <option value="Branding & Creative Design">03 Branding & Creative Design</option>
                        <option value="SEO & Local SEO">04 SEO & Local SEO</option>
                        <option value="Social Media Marketing">05 Social Media Marketing</option>
                        <option value="Digital Advertising">06 Digital Advertising (Google / Meta Ads)</option>
                        <option value="Influencer Marketing">07 Influencer Marketing</option>
                        <option value="Lead Generation">08 Complete Lead Generation Roadmap</option>
                        <option value="All Services Package">All-in-One Growth Package</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-bold text-charcoal-900 uppercase tracking-wider mb-1.5">
                        How Can We Help Your Business?
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your current digital challenges or goals..."
                        className="w-full p-4 rounded-xl border border-borderGray bg-ivory-50 text-charcoal-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        icon={<Send className="w-4 h-4" />}
                        className="min-h-[48px] font-semibold text-base shadow-glow-gold"
                      >
                        Request Free Strategy Session
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
