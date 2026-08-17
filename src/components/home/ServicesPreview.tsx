import React from 'react';
import Link from 'next/link';
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
} from 'lucide-react';
import { servicesData } from '@/data/services';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export function ServicesPreview() {
  const getIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 sm:w-6 sm:h-6' };
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

  const stageTags = [
    'Build',
    'Manage',
    'Brand',
    'Optimize',
    'Promote',
    'Advertise',
    'Influence',
    'Generate Leads',
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-ivory-50 border-b border-borderGray scroll-mt-20 relative overflow-hidden">
      <Container size="xl">
        <SectionHeading
          badge="End-to-End Growth Timeline"
          badgeVariant="gold"
          title="Everything You Need to Grow Online"
          subtitle="From building your custom digital infrastructure to scaling customer acquisition, our 8-step connected services roadmap drives continuous business results."
        />

        {/* Narrative Flow Banner: Build → Manage → Brand → Optimize → Promote → Advertise → Influence → Generate Leads */}
        <div className="hidden lg:flex items-center justify-between bg-white rounded-2xl border border-borderGray px-6 py-3.5 mb-14 shadow-soft-sm">
          {stageTags.map((tag, idx) => (
            <React.Fragment key={tag}>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-charcoal-900 text-gold-400 text-[10px] font-mono font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal-900">
                  {tag}
                </span>
              </div>
              {idx < stageTags.length - 1 && (
                <div className="w-8 h-[1px] bg-gold-500/40" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CONNECTED SEQUENTIAL SERVICES ROADMAP */}
        {/* Desktop: 2-Row Sequential Connected Grid with Connecting Lines */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {servicesData.map((service, idx) => {
            const stepNum = String(idx + 1).padStart(2, '0');
            const stage = stageTags[idx];

            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl border border-borderGray p-6 flex flex-col justify-between transition-all duration-300 hover:border-gold-500/70 hover:shadow-soft-lg"
              >
                <div>
                  {/* Top Node Header: Number + Icon + Action Stage Tag */}
                  <div className="flex items-center justify-between mb-5">
                    {/* Circular Icon Node with Champagne Gold Outline */}
                    <div className="w-12 h-12 rounded-2xl bg-charcoal-900 text-gold-500 border border-gold-500/40 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-charcoal-950 transition-colors duration-300 shadow-soft-sm">
                      {getIcon(service.icon)}
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-xl font-mono font-black text-gold-600/80 group-hover:text-gold-500 transition-colors">
                        {stepNum}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted px-2 py-0.5 rounded bg-ivory-100 border border-borderGray">
                        {stage}
                      </span>
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-lg font-bold text-charcoal-900 group-hover:text-gold-600 transition-colors mb-2">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="pt-4 border-t border-borderGray/60 mt-auto">
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gold-600 group-hover:text-charcoal-950 group-hover:translate-x-1 transition-all"
                  >
                    <span>Explore Deliverables</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View: Connected Vertical Sequential Timeline */}
        <div className="md:hidden relative pl-5 sm:pl-6 space-y-5 sm:space-y-6 border-l-2 border-dashed border-gold-500/40 ml-3.5 sm:ml-4 my-6">
          {servicesData.map((service, idx) => {
            const stage = stageTags[idx];

            return (
              <div
                key={service.id}
                className="relative bg-white rounded-2xl border border-borderGray p-4 sm:p-5 shadow-soft-sm"
              >
                {/* Connecting Node on the Left Line */}
                <div className="absolute -left-[31px] sm:-left-[35px] top-5 w-6 h-6 rounded-full bg-charcoal-900 border-2 border-gold-500 text-gold-400 text-[10px] font-mono font-bold flex items-center justify-center shadow-soft-sm">
                  {idx + 1}
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-charcoal-900 text-gold-500 flex items-center justify-center">
                      {getIcon(service.icon)}
                    </div>
                    <span className="text-base font-bold text-charcoal-900">
                      {service.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-700 bg-ivory-200 px-2 py-0.5 rounded border border-borderGray">
                    {stage}
                  </span>
                </div>

                <p className="text-xs text-muted leading-relaxed mb-4">
                  {service.shortDescription}
                </p>

                <div className="pt-3 border-t border-borderGray/60">
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-600"
                  >
                    <span>View Details & Timeline</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Explore All CTA */}
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            href="/services"
            icon={<ArrowRight className="w-4 h-4" />}
            className="border-borderGray text-charcoal-900 hover:bg-ivory-200 font-medium"
          >
            Explore All 8 Services & Specifications
          </Button>
        </div>
      </Container>
    </section>
  );
}

