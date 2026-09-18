import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { BookOpen, Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import { getAllArticles } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';
import InteractiveSymptomFinder from '@/components/InteractiveSymptomFinder';

export const metadata: Metadata = {
  title: 'Patient Dental Guides & Step-by-Step Walkthroughs | Blueteeth Education',
  description: 'In-depth patient dental guides on brushing techniques, tooth sensitivity, root canals, dental implants, pediatric care, and cavity prevention.',
};

export default function GuidesPage() {
  const allArticles = getAllArticles();

  const coreGuides = [
    {
      title: 'Complete Oral Hygiene Mastery Guide',
      desc: 'Master the 2x2 brushing rule, the Modified Bass technique, and daily interdental flossing to stop plaque and gingivitis.',
      slugs: ['how-to-brush-your-teeth', 'how-often-should-you-floss', 'dental-plaque-vs-tartar']
    },
    {
      title: 'Preventive & Cavity Control Guide',
      desc: 'Understand demineralization, dietary acid attack frequencies, fluoride protection, and the role of sealants.',
      slugs: ['how-to-prevent-cavities', 'how-often-should-you-visit-a-dentist', 'tooth-decay-causes-symptoms-prevention']
    },
    {
      title: 'Restorative & Clinical Procedures Guide',
      desc: 'Clear explanations of modern root canal therapy, crown materials (zirconia vs E-max), fillings, and dental implants.',
      slugs: ['root-canal-treatment-guide', 'dental-crowns-explained', 'dental-implants-guide', 'dental-fillings-explained']
    },
    {
      title: 'Pediatric Oral Health Parent Guide',
      desc: 'Everything parents need to know: infant gum care, age-one dental visits, primary tooth preservation, and kids brushing.',
      slugs: ['childrens-oral-hygiene-guide', 'when-should-a-child-first-visit-a-dentist', 'baby-teeth-why-they-matter']
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      {/* Header */}
      <section className="bg-white border-b border-slate-200/80 pt-12 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curated Patient Guides</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Step-by-Step Dental Guides
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Curated collections of peer-reviewed dental knowledge organized into practical learning paths for patients and families.
          </p>
        </div>
      </section>

      {/* Curated Guides Tracks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {coreGuides.map((guide, idx) => {
          const matchedArticles = guide.slugs
            .map((slug) => allArticles.find((a) => a.slug === slug))
            .filter((a): a is NonNullable<typeof a> => a !== undefined);

          return (
            <div key={idx} className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
              <div className="max-w-2xl">
                <div className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-1">
                  Learning Track #{idx + 1}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {guide.title}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
                  {guide.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {matchedArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Interactive Symptom Explorer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveSymptomFinder />
      </section>
    </div>
  );
}
