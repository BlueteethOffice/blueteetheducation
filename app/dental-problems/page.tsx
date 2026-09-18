import { Metadata } from 'next';
import CategoryPageTemplate from '@/components/CategoryPageTemplate';

export const metadata: Metadata = {
  title: 'Dental Problems: Symptoms, Causes & Relief | Blueteeth Education',
  description: 'Understand common dental problems: toothaches, tooth sensitivity, cavities, bleeding gums, gum disease, and cracked teeth with clinical advice.',
};

export default function DentalProblemsPage() {
  return <CategoryPageTemplate categorySlug="dental-problems" />;
}
