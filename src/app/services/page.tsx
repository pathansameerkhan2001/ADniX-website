import React from 'react';
import { Container } from '@/components/ui/Container';
import { ServicesPreview } from '@/components/home/ServicesPreview';

export const metadata = {
  title: 'Our Services | ADNIX Digital Growth & Business Services',
  description: 'Explore our complete suite of digital services: Website development, SEO, Social Media, Google Ads, Branding, and Influencer marketing.',
};

export default function ServicesPage() {
  return (
    <div className="pt-24 bg-ivory-50 min-h-screen">
      <Container size="xl">
        <ServicesPreview />
      </Container>
    </div>
  );
}
