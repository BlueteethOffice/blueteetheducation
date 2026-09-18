import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import {
  ChevronRight,
  Clock,
  Home,
  ShieldCheck,
  Calendar,
  Share2,
  Bookmark,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Info,
  Tag
} from 'lucide-react';
import { getAllArticles, getArticleBySlug, getRelatedArticles } from '@/lib/articles';
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo';
import TableOfContents from '@/components/TableOfContents';
import MedicalReviewBadge from '@/components/MedicalReviewBadge';
import FAQAccordion from '@/components/FAQAccordion';
import SourcesList from '@/components/SourcesList';
import DentalReferralCard from '@/components/DentalReferralCard';
import ArticleCard from '@/components/ArticleCard';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found | Blueteeth Education',
      description: 'The requested dental health article could not be found.',
    };
  }

  return {
    title: `${article.metaTitle || article.title} | Blueteeth Education`,
    description: article.metaDescription || article.excerpt,
    keywords: article.tags,
    openGraph: {
      title: article.metaTitle || article.title,
      description: article.metaDescription || article.excerpt,
      type: 'article',
      url: `https://blueteetheducation.com/dental-education/${article.slug}`,
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate,
      authors: [article.author.name],
      images: [
        {
          url: article.featuredImage,
          alt: article.imageAlt || article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metaTitle || article.title,
      description: article.metaDescription || article.excerpt,
      images: [article.featuredImage],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article, 3);
  const articleSchema = generateArticleSchema(article);
  const faqSchema = generateFAQSchema(article.faq);
  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: article.category, url: `/${article.categorySlug}` },
    { name: article.title, url: `/dental-education/${article.slug}` },
  ]);

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />

      <article className="min-h-screen pb-20 bg-slate-50">
        {/* Header Hero Area */}
        <header className="bg-white border-b border-slate-200/80 pt-8 pb-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            <nav className="flex items-center space-x-2 text-xs text-slate-500 mb-6 flex-wrap">
              <Link href="/" className="hover:text-teal-700 flex items-center">
                <Home className="w-3.5 h-3.5 mr-1" /> Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              <Link href={`/${article.categorySlug}`} className="hover:text-teal-700">
                {article.category}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              <span className="text-slate-800 font-medium truncate max-w-[200px] sm:max-w-xs">
                {article.title}
              </span>
            </nav>

            {/* Category Tag & Reading Time */}
            <div className="flex items-center space-x-3 text-xs font-semibold mb-4">
              <Link
                href={`/${article.categorySlug}`}
                className="px-3 py-1 rounded-full bg-teal-100 text-teal-800 uppercase tracking-wider text-[11px] border border-teal-200 hover:bg-teal-200 transition-colors"
              >
                {article.category}
              </Link>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 font-medium flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />
                {article.readingTime}
              </span>
            </div>

            {/* H1 Article Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              {article.h1 || article.title}
            </h1>

            {/* Short Excerpt */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {article.excerpt}
            </p>

            {/* Medical Review Credibility Badge */}
            <MedicalReviewBadge
              author={article.author}
              reviewer={article.reviewer}
              publishedDate={article.publishedDate}
              updatedDate={article.updatedDate}
            />
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="relative h-64 sm:h-96 md:h-[450px] w-full rounded-3xl overflow-hidden shadow-md border border-slate-200 bg-slate-100">
            <Image
              src={article.featuredImage}
              alt={article.imageAlt || article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover"
            />
          </div>
          {article.imageAlt && (
            <p className="text-[11px] text-slate-400 text-center mt-2 italic">
              {article.imageAlt}
            </p>
          )}
        </div>

        {/* Main Body Content with Sticky Sidebar TOC */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Table of Contents - Left Column for Desktop */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <TableOfContents items={article.tableOfContents} />

                {/* Quick Info Box */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 space-y-3 shadow-xs">
                  <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center">
                    <ShieldCheck className="w-4 h-4 text-teal-600 mr-1.5" />
                    Clinical Integrity
                  </div>
                  <p>
                    All content is peer-reviewed against current guidelines from the American Dental Association (ADA) and international research.
                  </p>
                  <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-400">
                    Category: <span className="font-semibold text-slate-700">{article.category}</span>
                  </div>
                </div>
              </div>
            </aside>

            {/* Article Content - Right Column */}
            <main className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
              {/* Quick Answer Box (Patient Summary) */}
              {article.quickAnswer && (
                <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-teal-50 border border-teal-200 text-slate-800">
                  <div className="flex items-center space-x-2 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-4 h-4 text-teal-600" />
                    <span>Quick Answer for Patients</span>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-medium">
                    {article.quickAnswer}
                  </p>
                </div>
              )}

              {/* Mobile Table of Contents */}
              <div className="lg:hidden mb-8">
                <TableOfContents items={article.tableOfContents} />
              </div>

              {/* Article Content Sections */}
              <div className="article-prose space-y-8">
                {article.sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                      {section.heading}
                    </h2>

                    {section.subheading && (
                      <h3 className="text-lg font-semibold text-slate-700 mb-3">
                        {section.subheading}
                      </h3>
                    )}

                    {section.paragraphs.map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}

                    {/* Section Callout if present */}
                    {section.callout && (
                      <div
                        className={`my-6 p-4 sm:p-5 rounded-2xl border flex items-start space-x-3 text-xs sm:text-sm leading-relaxed ${
                          section.callout.type === 'warning'
                            ? 'bg-amber-50 border-amber-200 text-amber-900'
                            : section.callout.type === 'emergency'
                            ? 'bg-red-50 border-red-200 text-red-900'
                            : section.callout.type === 'tip'
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                            : 'bg-sky-50 border-sky-200 text-sky-900'
                        }`}
                      >
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        <div>
                          <div className="font-bold mb-1">{section.callout.title}</div>
                          <div>{section.callout.text}</div>
                        </div>
                      </div>
                    )}

                    {/* Section KeyPoints if present */}
                    {section.keyPoints && section.keyPoints.length > 0 && (
                      <div className="my-6 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                          Key Clinical Takeaways:
                        </div>
                        <ul className="space-y-2">
                          {section.keyPoints.map((point, kIdx) => (
                            <li key={kIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Section Comparison Table if present */}
                    {section.table && (
                      <div className="my-6 overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                        <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
                          <thead className="bg-slate-100 text-slate-900 font-bold">
                            <tr>
                              {section.table.headers.map((h, hIdx) => (
                                <th key={hIdx} className="px-4 py-3 sm:px-6">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-150 bg-white">
                            {section.table.rows.map((row, rIdx) => (
                              <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} className="px-4 py-3 sm:px-6 text-slate-700 font-normal">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* Tags Section */}
              <div className="pt-8 mt-8 border-t border-slate-200">
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  <Tag className="w-3.5 h-3.5" />
                  <span>Related Topic Tags:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/search?q=${encodeURIComponent(tag)}`}
                      className="px-3 py-1 rounded-xl bg-slate-100 hover:bg-teal-50 hover:text-teal-700 text-slate-600 text-xs font-medium border border-slate-200 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* FAQs Section */}
              {article.faq && article.faq.length > 0 && (
                <FAQAccordion faqs={article.faq} />
              )}

              {/* Scientific Sources & Citations */}
              {article.sources && article.sources.length > 0 && (
                <SourcesList sources={article.sources} />
              )}

              {/* Discreet Clinical Care Referral */}
              <DentalReferralCard
                treatmentName={article.clinicalReferral?.treatmentName}
                description={article.clinicalReferral?.description}
                url={article.clinicalReferral?.url}
              />
            </main>
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-slate-200">
            <div className="mb-8">
              <div className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-1">
                Continue Learning
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Related Dental Health Guides
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <ArticleCard key={rel.id} article={rel} />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
