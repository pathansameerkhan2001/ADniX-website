import React from 'react';
import { Hero } from '@/components/home/Hero';
import { Industries } from '@/components/home/Industries';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { WhyAdnix } from '@/components/home/WhyAdnix';
import { Process } from '@/components/home/Process';
import { WorkPreview } from '@/components/home/WorkPreview';
import { PackagesPreview } from '@/components/home/PackagesPreview';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Built for Local Businesses */}
      <Industries />

      {/* 3. Everything You Need to Grow Online (Services) */}
      <ServicesPreview />

      {/* 4. Why Businesses Choose ADNIX */}
      <WhyAdnix />

      {/* 5. From Idea to Growth (5-Step Process) */}
      <Process />

      {/* 6. Work That Speaks for Us (Our Work Preview) */}
      <WorkPreview />

      {/* 7. Simple Plans for Every Stage (Packages Preview) */}
      <PackagesPreview />

      {/* 8. Final Conversion CTA */}
      <FinalCTA />
    </>
  );
}
