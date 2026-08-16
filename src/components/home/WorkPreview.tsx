import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export function WorkPreview() {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <section className="py-20 sm:py-28 bg-ivory-50 border-b border-borderGray scroll-mt-20">
      <Container size="xl">
        <SectionHeading
          badge="Featured Portfolio"
          badgeVariant="gold"
          title="Our Work"
          subtitle="Explore websites, branding and digital experiences crafted to help local businesses establish credibility and attract customers."
        />

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              variant="default"
              hoverEffect
              padding="none"
              className="flex flex-col justify-between border-borderGray group overflow-hidden bg-white shadow-soft-sm hover:shadow-soft-xl"
            >
              {/* Card Visual Header in Deep Black + Gold Accents */}
              <div className="h-48 sm:h-52 bg-charcoal-950 p-5 flex flex-col justify-between relative overflow-hidden text-white border-b border-charcoal-800">
                {/* Visual Ambient Light */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-xl pointer-events-none" />

                {/* Top Badge: Category & Demo Showcase Tag */}
                <div className="flex items-center justify-between z-10">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md text-white border border-white/15">
                    {project.category}
                  </span>
                  {project.isDemo && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-gold-500/20 text-gold-400 border border-gold-500/30">
                      Demo Showcase
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

                {/* Bottom Bar: Tags in Olive Gold */}
                <div className="flex items-center gap-1.5 z-10">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
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
                      {project.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-charcoal-900">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* View Details Link */}
                <div className="pt-4 border-t border-borderGray/60 mt-auto">
                  <Link
                    href={`/our-work#${project.id}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gold-600 group-hover:text-charcoal-900 group-hover:translate-x-1 transition-all"
                  >
                    <span>Explore Project Architecture</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Work CTA */}
        <div className="mt-12 text-center">
          <Button
            variant="secondary"
            size="lg"
            href="/our-work"
            icon={<ArrowRight className="w-4 h-4" />}
            className="font-medium"
          >
            View All Work & Case Studies
          </Button>
        </div>
      </Container>
    </section>
  );
}
