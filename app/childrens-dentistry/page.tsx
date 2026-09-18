import { Metadata } from 'next';
import CategoryPageTemplate from '@/components/CategoryPageTemplate';

export const metadata: Metadata = {
  title: "Children's Dentistry & Pediatric Oral Health | Blueteeth Education",
  description: 'Pediatric dental health guide for parents: baby teeth milestones, toddler brushing, age-one dental checkups, sealants, and cavity prevention.',
};

export default function ChildrensDentistryPage() {
  return <CategoryPageTemplate categorySlug="childrens-dentistry" />;
}
