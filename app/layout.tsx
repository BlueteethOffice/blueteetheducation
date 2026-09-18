import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateOrganizationSchema, generateWebsiteSchema } from '@/lib/seo';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://blueteetheducation.com'),
  title: {
    default: 'Blueteeth Education | Dental Education & Oral Health Knowledge Hub',
    template: '%s | Blueteeth Education',
  },
  description:
    'Understand Your Oral Health. Make Informed Dental Decisions. Clear, practical, evidence-based dental education covering oral hygiene, treatments, pediatric care, and preventive dentistry.',
  keywords: [
    'Dental Education',
    'Oral Health',
    'Preventive Dentistry',
    'How to Brush Teeth',
    'Tooth Sensitivity Causes',
    'Root Canal Treatment',
    'Dental Implants Guide',
    'Bleeding Gums Treatment',
    'Pediatric Dental Care',
    'Cavity Prevention'
  ],
  authors: [{ name: 'Blueteeth Education Editorial Board' }],
  creator: 'Blueteeth Education',
  publisher: 'Blueteeth Education',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Blueteeth Education | Dental Education & Oral Health Knowledge Hub',
    description:
      'Clear, practical dental information to help you understand your teeth, gums, oral hygiene, preventive care, and common dental treatments.',
    url: 'https://blueteetheducation.com',
    siteName: 'Blueteeth Education',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blueteeth Education | Dental Education & Oral Health Knowledge Hub',
    description:
      'Clear, practical dental information to help you understand your teeth, gums, oral hygiene, preventive care, and common dental treatments.',
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
  const orgSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
