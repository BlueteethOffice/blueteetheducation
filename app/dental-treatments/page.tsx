import { Metadata } from 'next';
import CategoryPageTemplate from '@/components/CategoryPageTemplate';

export const metadata: Metadata = {
  title: 'Dental Treatments & Procedures Explained | Blueteeth Education',
  description: 'Clear, patient-friendly explanations of dental procedures: root canal therapy, tooth fillings, dental crowns, tooth extractions, and pain management.',
};

export default function DentalTreatmentsPage() {
  return <CategoryPageTemplate categorySlug="dental-treatments" />;
}
