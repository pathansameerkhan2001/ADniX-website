import { ProcessStep } from '@/types';

export const processData: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Discover',
    tagline: 'Understand Your Goals',
    description: 'We sit down with you to understand your business model, target local customers, current pain points, and specific growth objectives.',
    duration: 'Day 1–2',
    deliverables: ['Business Discovery Session', 'Competitor & Keyword Review', 'Clear Scope & Timeline'],
  },
  {
    stepNumber: '02',
    title: 'Plan',
    tagline: 'Tailored Strategy',
    description: 'We formulate a clear roadmap choosing the most cost-effective digital channels (website wireframes, content themes, ad angles, and local SEO plan).',
    duration: 'Day 3–5',
    deliverables: ['Sitemap & Wireframes', 'Content & Creative Strategy', 'Channel Roadmap'],
  },
  {
    stepNumber: '03',
    title: 'Build',
    tagline: 'Design & Development',
    description: 'Our team crafts your custom website, designs branded visuals, sets up tracking pixels, and writes persuasive customer-centric copy.',
    duration: 'Week 2–3',
    deliverables: ['Modern Responsive Website', 'Branded Graphic Assets', 'WhatsApp & Lead Forms Setup'],
  },
  {
    stepNumber: '04',
    title: 'Launch',
    tagline: 'Go-Live & Optimize',
    description: 'We thoroughly test across all mobile screens, connect your custom domain, optimize Core Web Vitals, verify Google Maps, and publish live.',
    duration: 'Week 3–4',
    deliverables: ['Domain & SSL Launch', 'Google Search Console Verification', 'Speed & Security Checks'],
  },
  {
    stepNumber: '05',
    title: 'Grow',
    tagline: 'Scale & Support',
    description: 'We continuously monitor site health, run targeted campaigns, publish fresh content, and refine strategies to generate steady leads.',
    duration: 'Ongoing',
    deliverables: ['Monthly Performance Reviews', 'Continuous Local SEO', 'Dedicated Growth Support'],
  },
];
