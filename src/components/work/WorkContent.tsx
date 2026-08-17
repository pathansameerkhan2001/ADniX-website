'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { defaultViewport, fadeUp, smoothEase } from '@/components/motion/variants';

export function WorkContent() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Websites', 'Branding', 'Marketing', 'Social Media'];

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

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
            badge="Case Studies & Prototypes"
            badgeVariant="gold"
            title="Work Crafted for Real Business Impact"
            subtitle="Explore high-converting websites, distinctive brand identities, and targeted digital growth concepts tailored for local businesses in Kadapa and Rayalaseema."
          />
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 my-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
                  isActive
                    ? 'text-charcoal-950 font-bold'
                    : 'text-charcoal-800 hover:text-charcoal-950 bg-white border border-borderGray hover:bg-ivory-200/60 shadow-soft-sm'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeFilterPill"
                    transition={{ type: 'spring', damping: 26, stiffness: 320 }}
                    className="absolute inset-0 rounded-full bg-gold-500 shadow-glow-gold -z-10"
                  />
                )}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: smoothEase }}
                whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.25 } }}
                className="h-full"
              >
                <Card
                  variant="default"
                  padding="none"
                  className="flex flex-col justify-between border-borderGray group overflow-hidden bg-white shadow-soft-sm hover:shadow-soft-xl h-full"
                >
                  {/* Card Visual Header in Deep Black + Gold Accents */}
                  <div className="h-48 sm:h-52 bg-charcoal-950 p-5 flex flex-col justify-between relative overflow-hidden text-white border-b border-charcoal-800">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-xl pointer-events-none" />

                    {/* Top Badge */}
                    <div className="flex items-center justify-between z-10">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md text-white border border-white/15">
                        {project.category}
                      </span>
                      {project.isDemo && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-gold-500/20 text-gold-400 border border-gold-500/30 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>Concept Demo</span>
                        </span>
                      )}
                    </div>

                    {/* Center Visual Content */}
                    <div className="z-10 text-left">
                      <span className="text-xs text-gold-400 font-medium block">
                        {project.industry}
                      </span>
                      <h4 className="text-lg font-bold text-white group-hover:text-gold-400 transition-colors line-clamp-1">
                        {project.title}
                      </h4>
                    </div>

                    {/* Bottom Bar: Tags */}
                    <div className="flex items-center gap-1.5 z-10 flex-wrap">
                      {project.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-charcoal-900 text-gold-400 border border-gold-700/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow bg-white">
                    <div>
                      <p className="text-sm text-muted leading-relaxed mb-4">
                        {project.shortDescription}
                      </p>

                      {/* Feature Highlights */}
                      {project.highlights && (
                        <div className="space-y-1.5 mb-5">
                          {project.highlights.map((item, hIdx) => (
                            <div key={hIdx} className="flex items-center gap-2 text-xs text-charcoal-900">
                              <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                              <span className="line-clamp-1">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Inquire CTA */}
                    <div className="pt-4 border-t border-borderGray/60 mt-auto">
                      <Button
                        variant="primary"
                        size="sm"
                        fullWidth
                        href={`/contact?project=${encodeURIComponent(project.title)}`}
                        icon={<ArrowRight className="w-4 h-4" />}
                        className="font-semibold text-xs py-2.5"
                      >
                        Inquire for Similar Project
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Custom Build CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.5, delay: 0.2, ease: smoothEase }}
          className="mt-20 p-8 sm:p-12 rounded-3xl bg-charcoal-950 text-white text-center border border-charcoal-800 shadow-soft-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Want a High-Performance Digital Presence for Your Business?
            </h3>
            <p className="text-sm text-muted-onDark mb-6 leading-relaxed">
              We build customized websites, optimize local search rankings, and manage social media campaigns specifically engineered to attract local customers in Kadapa.
            </p>
            <Button
              variant="primary"
              size="lg"
              href="/contact"
              icon={<ArrowRight className="w-4 h-4" />}
              className="font-semibold shadow-glow-gold"
            >
              Start Your Project Today
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
