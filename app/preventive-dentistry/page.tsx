import { Metadata } from 'next';
import CategoryPageTemplate from '@/components/CategoryPageTemplate';

export const metadata: Metadata = {
  title: 'Preventive Dentistry: Checkups, Fluoride & Care | Blueteeth Education',
  description: 'Proactive dental care strategies: dental checkups, professional cleanings, fluoride therapies, dental X-rays, and cavity prevention.',
};

export default function PreventiveDentistryPage() {
  return <CategoryPageTemplate categorySlug="preventive-dentistry" />;
}
