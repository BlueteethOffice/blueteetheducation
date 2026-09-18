import { Metadata } from 'next';
import CategoryPageTemplate from '@/components/CategoryPageTemplate';

export const metadata: Metadata = {
  title: 'Restorative Dentistry: Implants, Crowns & Bridges | Blueteeth Education',
  description: 'Learn how modern dental implants, ceramic crowns, fixed bridges, and dentures rebuild missing teeth, chew function, and jawbone health.',
};

export default function RestorativeDentistryPage() {
  return <CategoryPageTemplate categorySlug="restorative-dentistry" />;
}
