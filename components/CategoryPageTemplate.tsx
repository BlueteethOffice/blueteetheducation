import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import {
  Sparkles,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Home,
  ChevronRight
} from 'lucide-react';
import { getCategoryBySlug } from '@/data/categories';
import { getArticlesByCategory } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';
import DentalReferralCard from '@/components/DentalReferralCard';
import EmergencyActionCard from '@/components/EmergencyActionCard';
import { generateBreadcrumbSchema } from '@/lib/seo';

interface CategoryPageTemplateProps {
  categorySlug: string;
}

export default function CategoryPageTemplate({ categorySlug }: CategoryPageTemplateProps) {
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const articles = getArticlesByCategory(categorySlug);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: category.name, url: `/${category.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="space-y-12 sm:space-y-16 pb-20">
        {/* Category Hero Header */}
        <section className="bg-white border-b border-slate-200/80 pt-10 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-xs text-slate-500 mb-6">
              <Link href="/" className="hover:text-teal-700 flex items-center">
                <Home className="w-3.5 h-3.5 mr-1" /> Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              <span className="text-slate-800 font-medium">{category.name}</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                <span>Dental Category Hub</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                {category.name}
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {category.fullDescription}
              </p>

              {/* Subtopic Chips */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Core Subtopics Covered:
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.subtopics.map((sub, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-xl bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Card if category is dental-emergencies */}
        {categorySlug === 'dental-emergencies' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <EmergencyActionCard />
          </div>
        )}

        {/* Articles List Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Educational Articles ({articles.length})
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Medically reviewed guides published under {category.name}
              </p>
            </div>
            <Link
              href="/dental-education"
              className="text-xs sm:text-sm font-semibold text-teal-700 hover:underline"
            >
              View All Topics →
            </Link>
          </div>

          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-10 text-center border border-slate-200">
              <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <h3 className="text-base font-bold text-slate-800">Articles Coming Soon</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Our clinical editorial board is currently preparing peer-reviewed articles for this subcategory.
              </p>
            </div>
          )}
        </section>

        {/* Category Clinical Referral */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DentalReferralCard
            treatmentName={`Need In-Person Care for ${category.name}?`}
            description={`Have questions about symptoms, checkups, or specialized procedures in ${category.name.toLowerCase()}? Consult with the clinical team at Blueteeth Dental Care.`}
          />
        </div>
      </div>
    </>
  );
}
