import { Metadata } from 'next';
import CategoryPageTemplate from '@/components/CategoryPageTemplate';

export const metadata: Metadata = {
  title: 'Oral Hygiene Guides & Daily Dental Care | Blueteeth Education',
  description: 'Evidence-based guides on brushing techniques, flossing, mouthwashes, tongue cleaning, and effective plaque control for a healthy smile.',
};

export default function OralHygienePage() {
  return <CategoryPageTemplate categorySlug="oral-hygiene" />;
}
