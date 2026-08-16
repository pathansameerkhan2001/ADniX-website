import { PackageTier } from '@/types';

export const packagesData: PackageTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    badge: 'Essential Presence',
    tagline: 'For local businesses taking their first step online.',
    idealFor: 'Local shops, small clinics, individual consultants, and emerging businesses.',
    startingPrice: 'Starting From ₹9,999',
    pricePeriod: 'one-time setup',
    isPopular: false,
    features: [
      'Custom 4–5 Page Business Website',
      '100% Mobile & Tablet Responsive',
      'One-Tap WhatsApp & Direct Call Integration',
      'Google Maps Location Setup',
      'Basic On-Page SEO & Meta Tags',
      'Secure SSL Certificate & Fast Hosting Setup',
      'Interactive Contact / Inquiry Form',
      '30 Days Free Technical Support',
    ],
    detailedFeatures: [
      {
        category: 'Website & Design',
        items: [
          '4–5 Clean Structured Pages (Home, About, Services, Contact)',
          'Modern mobile-first responsive layout',
          'Fast loading under 2 seconds',
          'Photo gallery & service showcase',
        ],
      },
      {
        category: 'Local Search & Integration',
        items: [
          'Google Maps embed & pin verification guidance',
          'Direct click-to-WhatsApp button',
          'Standard SEO title & meta description setup',
        ],
      },
      {
        category: 'Support & Maintenance',
        items: [
          '1 Month Free Technical Support',
          'Domain & DNS configuration assistance',
          'Staff training on managing inquiries',
        ],
      },
    ],
    ctaText: 'Get Started with Starter',
    ctaHref: '/contact?package=starter',
  },
  {
    id: 'growth',
    name: 'Growth',
    badge: 'Most Popular for Local Growth',
    tagline: 'For established businesses ready to attract more local customers consistently.',
    idealFor: 'Hospitals, restaurants, schools, retail showrooms, and real estate agencies.',
    startingPrice: 'Starting From ₹19,999',
    pricePeriod: 'setup + monthly growth',
    isPopular: true,
    features: [
      'Everything in Starter Package',
      'Up to 8–10 Custom Pages with Dynamic Content',
      'Google Business Profile (Maps) #1 Page Optimization',
      'Social Media Management (12 Custom Posts / Month)',
      'Local Keyword Targeting in Kadapa & AP',
      'Branded Social Media Creatives & Stories',
      'Lead Capture Funnel with WhatsApp Alerts',
      'Monthly Performance & Keyword Ranking Report',
      'Priority Support via Dedicated WhatsApp Channel',
    ],
    detailedFeatures: [
      {
        category: 'Advanced Website Features',
        items: [
          'Up to 10 High-Converting Pages',
          'Interactive Booking or Lead Capture Funnel',
          'Speed & Core Web Vitals Optimization',
          'Custom Brand Colors & Typography',
        ],
      },
      {
        category: 'Search & Visibility',
        items: [
          'Google Business Profile Full Optimization',
          'Local Citations & Directory Listings',
          'Targeting 10–15 Local Search Keywords',
          'Customer Review Strategy Guidance',
        ],
      },
      {
        category: 'Social Media & Content',
        items: [
          '12 Branded Social Creatives / Month (Instagram/Facebook)',
          'Monthly Content Calendar & Caption Copywriting',
          'Local engagement strategies & hashtags',
        ],
      },
      {
        category: 'Ongoing Management',
        items: [
          'Monthly Content Updates & Security Backups',
          'Monthly Lead & Traffic Analytics Report',
          'Dedicated Account Manager via WhatsApp',
        ],
      },
    ],
    ctaText: 'Choose Growth Package',
    ctaHref: '/contact?package=growth',
  },
  {
    id: 'business-pro',
    name: 'Business Pro',
    badge: 'Complete Digital Domination',
    tagline: 'Complete 360° digital growth partner for market leaders.',
    idealFor: 'Multi-branch hospitals, premium colleges, real estate builders, and top regional brands.',
    startingPrice: 'Starting From ₹34,999',
    pricePeriod: 'custom monthly retainer',
    isPopular: false,
    features: [
      'Full Custom Web Application or Advanced Portal',
      'End-to-End Social Media Management & Reels Production',
      'Aggressive Local & Regional SEO Domination',
      'Google Search & Meta Ads Campaign Setup & Management',
      'Influencer Collaboration & Regional Creator Reach',
      'High-Converting Landing Pages for Special Offers',
      'Automated Lead Routing to Sales Team',
      'Complete Brand Stationery & Marketing Materials',
      'Weekly Growth Meetings & 24/7 Priority Support',
    ],
    detailedFeatures: [
      {
        category: 'Enterprise Web & Funnels',
        items: [
          'Unlimited or Custom Architecture Portal',
          'Multiple Campaign Landing Pages',
          'CRM / Google Sheets Lead Auto-Sync',
          'Advanced Event Tracking & Heatmaps',
        ],
      },
      {
        category: 'Paid Ads & Lead Generation',
        items: [
          'Google Search Ads Management (High Intent)',
          'Meta (Instagram & Facebook) Retargeting Ads',
          'A/B Creative & Copy Testing',
          'Continuous Cost-Per-Lead (CPL) Optimization',
        ],
      },
      {
        category: 'Brand, Content & Influencers',
        items: [
          '20+ Branded Creatives + Reels / Month',
          'Regional Influencer Sourcing & Briefing',
          'Complete Brand Identity Collateral Kit',
        ],
      },
      {
        category: 'Dedicated Executive Partnership',
        items: [
          'Bi-Weekly Strategic Growth Video Calls',
          'Real-time Lead Dashboard',
          'Dedicated Senior Strategist',
        ],
      },
    ],
    ctaText: 'Request Custom Growth Plan',
    ctaHref: '/contact?package=business-pro',
  },
];
