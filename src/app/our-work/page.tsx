import React from 'react';
import { Container } from '@/components/ui/Container';
import { WorkPreview } from '@/components/home/WorkPreview';

export const metadata = {
  title: 'Our Work & Case Studies | ADNIX Digital Growth & Business Services',
  description: 'Explore our portfolio of websites, branding, and digital marketing concepts for local businesses.',
};

export default function OurWorkPage() {
  return (
    <div className="pt-24 bg-ivory-50 min-h-screen">
      <Container size="xl">
        <WorkPreview />
      </Container>
    </div>
  );
}
