export const siteConfig = {
  name: 'ADNIX',
  legalName: 'ADNIX Digital Growth & Business Services',
  tagline: 'Digital Growth & Business Services',
  positioning: 'Digital Growth Partner for Local Businesses',
  description:
    'ADNIX helps businesses in Kadapa and across Andhra Pradesh build professional websites, reach more customers, and grow online with smart digital marketing, SEO, branding, and management solutions.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://adnix.in',
  ogImage: 'https://adnix.in/og-image.png',
  contact: {
    email: 'hello@adnix.in',
    phoneDisplay: '+91 98765 43210',
    phoneRaw: '+919876543210',
    whatsappNumber: '919876543210',
    location: 'Kadapa, Andhra Pradesh, India',
    address: {
      city: 'Kadapa',
      state: 'Andhra Pradesh',
      country: 'India',
      pincode: '516001',
    },
    workingHours: 'Monday – Saturday: 9:30 AM – 7:00 PM IST',
  },
  social: {
    instagram: 'https://instagram.com/adnix.in',
    facebook: 'https://facebook.com/adnix.in',
    linkedin: 'https://linkedin.com/company/adnix',
    youtube: 'https://youtube.com/@adnix',
    whatsapp: 'https://wa.me/919876543210',
  },
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Packages', href: '/packages' },
    { label: 'Our Work', href: '/our-work' },
    { label: 'Contact Us', href: '/contact' },
  ],
  whatsappQuickMessage: (serviceName?: string) => {
    const text = serviceName
      ? `Hi ADNIX team, I would like to inquire about ${serviceName} for my business in Kadapa.`
      : `Hi ADNIX team, I want to discuss a digital growth plan for my business in Kadapa.`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
  },
};
