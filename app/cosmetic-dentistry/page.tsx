import { Metadata } from 'next';
import CategoryPageTemplate from '@/components/CategoryPageTemplate';

export const metadata: Metadata = {
  title: 'Cosmetic Dentistry: Whitening, Veneers & Smile Care | Blueteeth Education',
  description: 'Evidence-based insights into safe teeth whitening, porcelain veneers, composite bonding, and aesthetic smile enhancements.',
};

export default function CosmeticDentistryPage() {
  return <CategoryPageTemplate categorySlug="cosmetic-dentistry" />;
}
