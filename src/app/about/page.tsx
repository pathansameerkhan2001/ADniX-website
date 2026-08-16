import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'About Us | ADNIX Digital Growth & Business Services',
  description: 'Learn about ADNIX, your trusted digital growth partner for local businesses in Kadapa and Andhra Pradesh.',
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-ivory-50 min-h-screen">
      <Container size="lg">
        <SectionHeading
          badge="Who We Are"
          badgeVariant="gold"
          title="Empowering Local Businesses to Win in the Digital Age"
          subtitle="ADNIX is a dedicated digital growth agency based in Kadapa, helping clinics, restaurants, schools, retail shops, and local enterprises build their complete digital presence."
        />
        <div className="bg-white p-8 rounded-3xl border border-borderGray shadow-soft-sm text-center max-w-2xl mx-auto">
          <p className="text-muted leading-relaxed mb-6">
            Detailed About Us page will be expanded in the upcoming phase with complete mission, vision, and differentiators.
          </p>
          <Button variant="primary" href="/contact" icon={<ArrowRight className="w-4 h-4" />}>
            Get in Touch
          </Button>
        </div>
      </Container>
    </div>
  );
}
