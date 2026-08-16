import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import '@/styles/globals.css';
import { siteConfig } from '@/config/site';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fontDisplay = Inter({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#080808',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'ADNIX | Digital Growth & Business Services in Kadapa',
    template: '%s | ADNIX Digital Growth & Business Services',
  },
  description:
    'ADNIX helps businesses in Kadapa grow online with professional websites, digital marketing, SEO, social media management and complete digital growth solutions.',
  keywords: [
    'Digital marketing Kadapa',
    'Website development Kadapa',
    'Local SEO Kadapa Andhra Pradesh',
    'Social media management Kadapa',
    'Digital growth agency Kadapa',
    'Google Business Profile optimization Kadapa',
    'ADNIX Digital Services',
  ],
  authors: [{ name: 'ADNIX Team', url: siteConfig.url }],
  creator: 'ADNIX Digital Growth & Business Services',
  publisher: 'ADNIX',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    title: 'ADNIX | Digital Growth & Business Services in Kadapa',
    description:
      'ADNIX helps businesses in Kadapa grow online with professional websites, digital marketing, SEO, social media management and complete digital growth solutions.',
    siteName: siteConfig.legalName,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADNIX | Digital Growth & Business Services in Kadapa',
    description:
      'ADNIX helps businesses in Kadapa grow online with professional websites, digital marketing, SEO, social media management and complete digital growth solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontDisplay.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-ivory-50 text-charcoal-900 font-sans antialiased selection:bg-gold-500 selection:text-charcoal-950">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
