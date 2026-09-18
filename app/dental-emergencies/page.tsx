import { Metadata } from 'next';
import CategoryPageTemplate from '@/components/CategoryPageTemplate';

export const metadata: Metadata = {
  title: 'Dental Emergencies: Immediate First Aid & Care | Blueteeth Education',
  description: 'Urgent first-aid protocols for severe toothaches, knocked-out teeth, broken crowns, dental trauma, and facial swelling before seeing a dentist.',
};

export default function DentalEmergenciesPage() {
  return <CategoryPageTemplate categorySlug="dental-emergencies" />;
}
