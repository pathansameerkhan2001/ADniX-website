export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  icon: string;
  category: 'web-tech' | 'digital-marketing' | 'search-visibility' | 'branding-creative' | 'influencer-growth';
  categoryLabel: string;
  benefits?: string[];
  deliverables?: string[];
  isPopular?: boolean;
}

export interface IndustryItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  highlight?: string;
  benefits: string[];
  ctaText: string;
  growthStatsSample?: string;
}

export interface PackageFeature {
  name: string;
  included: boolean;
  notes?: string;
}

export interface PackageTier {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  tagline: string;
  idealFor: string;
  startingPrice: string;
  pricePeriod?: string;
  features: string[];
  detailedFeatures?: {
    category: string;
    items: string[];
  }[];
  ctaText: string;
  ctaHref: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  tagline: string;
  description: string;
  duration?: string;
  deliverables: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Websites' | 'Branding' | 'Social Media' | 'Marketing';
  industry: string;
  shortDescription: string;
  fullDescription?: string;
  image: string;
  tags: string[];
  isDemo: boolean;
  highlights?: string[];
  liveUrl?: string;
}

export interface WhyUsPillar {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
  accentBadge: string;
}
