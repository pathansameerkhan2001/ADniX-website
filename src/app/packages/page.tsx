import React from 'react';
import { Container } from '@/components/ui/Container';
import { PackagesPreview } from '@/components/home/PackagesPreview';

export const metadata = {
  title: 'Packages & Plans | ADNIX Digital Growth & Business Services',
  description: 'Affordable, transparent digital growth packages for local businesses in Kadapa.',
};

export default function PackagesPage() {
  return (
    <div className="pt-24 bg-ivory-50 min-h-screen">
      <Container size="xl">
        <PackagesPreview />
      </Container>
    </div>
  );
}
