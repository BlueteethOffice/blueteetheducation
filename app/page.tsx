import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  AlertCircle,
  Stethoscope,
  Smile,
  Layers,
  Zap,
  CheckCircle,
  HelpCircle,
  FileCheck2,
  Users,
  Compass
} from 'lucide-react';
import { CATEGORIES } from '@/data/categories';
import { getFeaturedArticles, getAllArticles } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';
import InteractiveSymptomFinder from '@/components/InteractiveSymptomFinder';
import EmergencyActionCard from '@/components/EmergencyActionCard';

const categoryIcons: Record<string, React.ReactNode> = {
  'oral-hygiene': <Sparkles className="w-6 h-6 text-teal-600" />,
  'dental-problems': <AlertCircle className="w-6 h-6 text-rose-500" />,
  'preventive-dentistry': <ShieldCheck className="w-6 h-6 text-sky-600" />,
  'dental-treatments': <Stethoscope className="w-6 h-6 text-indigo-600" />,
  'childrens-dentistry': <Smile className="w-6 h-6 text-amber-500" />,
  'cosmetic-dentistry': <Sparkles className="w-6 h-6 text-purple-500" />,
  'restorative-dentistry': <Layers className="w-6 h-6 text-emerald-600" />,
  'dental-emergencies': <Zap className="w-6 h-6 text-red-500" />,
};

export default function HomePage() {
  const featuredArticles = getFeaturedArticles();
  const allArticles = getAllArticles();

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/70 via-white to-slate-50 pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-slate-200/70">
        {/* Subtle decorative background circles */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-teal-200/30 to-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs sm:text-sm font-bold tracking-wider uppercase border border-teal-200 shadow-xs mb-6">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span>DENTAL EDUCATION</span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-[1.15]">
            Better Knowledge for Better Oral Health
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Clear, practical dental information to help you understand your teeth, gums, oral hygiene, preventive care, and common dental treatments.
          </p>

          {/* Prominent Search Bar */}
          <div className="mt-8 max-w-2xl mx-auto">
            <form
              action="/search"
              method="GET"
              className="relative flex items-center bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-200/80 p-2 sm:p-2.5 focus-within:border-teal-500 focus-within:ring-4 focus-within:ring-teal-500/10 transition-all"
            >
              <Search className="w-5 h-5 text-slate-400 ml-3 mr-2 shrink-0" />
              <input
                type="text"
                name="q"
                placeholder="Search dental topics (e.g. root canal, sensitivity, flossing, implants)..."
                className="w-full text-slate-800 placeholder-slate-400 text-sm sm:text-base bg-transparent border-0 focus:outline-none focus:ring-0"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm shadow-md transition-colors shrink-0"
              >
                Search
              </button>
            </form>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500">
              <span className="font-medium text-slate-600">Quick Searches:</span>
              <Link href="/search?q=brushing" className="hover:text-teal-700 underline">Proper Brushing</Link>
              <span>•</span>
              <Link href="/search?q=sensitivity" className="hover:text-teal-700 underline">Tooth Sensitivity</Link>
              <span>•</span>
              <Link href="/search?q=root+canal" className="hover:text-teal-700 underline">Root Canal</Link>
              <span>•</span>
              <Link href="/search?q=cavities" className="hover:text-teal-700 underline">Cavity Prevention</Link>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/guides"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm sm:text-base shadow-lg shadow-teal-700/20 transition-all hover:scale-[1.02]"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Explore Dental Guides
            </Link>
            <a
              href="#topics"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border border-slate-300 shadow-xs transition-colors"
            >
              <Compass className="w-4 h-4 mr-2 text-slate-500" />
              Browse Dental Topics
            </a>
          </div>

          {/* Credibility Trust Bar */}
          <div className="mt-12 pt-8 border-t border-slate-200/80 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="flex items-center space-x-2.5">
              <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0" />
              <div>
                <div className="text-xs font-bold text-slate-900">Medically Reviewed</div>
                <div className="text-[11px] text-slate-500">By Dental Professionals</div>
              </div>
            </div>
            <div className="flex items-center space-x-2.5">
              <FileCheck2 className="w-5 h-5 text-teal-600 shrink-0" />
              <div>
                <div className="text-xs font-bold text-slate-900">Evidence-Based</div>
                <div className="text-[11px] text-slate-500">ADA & Peer-Reviewed Sources</div>
              </div>
            </div>
            <div className="flex items-center space-x-2.5">
              <Users className="w-5 h-5 text-teal-600 shrink-0" />
              <div>
                <div className="text-xs font-bold text-slate-900">Patient-Centered</div>
                <div className="text-[11px] text-slate-500">Clear & Jargon-Free</div>
              </div>
            </div>
            <div className="flex items-center space-x-2.5">
              <CheckCircle className="w-5 h-5 text-teal-600 shrink-0" />
              <div>
                <div className="text-xs font-bold text-slate-900">Independent Hub</div>
                <div className="text-[11px] text-slate-500">Educational Integrity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CATEGORIES GRID */}
      <section id="topics" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">
            Comprehensive Knowledge
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Explore Dental Topics by Category
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Select a dental domain below to access evidence-based guides, procedure explanations, and preventive protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/${cat.slug}`}
              className="group bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-100 group-hover:bg-teal-50 flex items-center justify-center mb-5 transition-colors">
                  {categoryIcons[cat.slug] || <BookOpen className="w-6 h-6 text-teal-600" />}
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {cat.name}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed line-clamp-2">
                  {cat.shortDescription}
                </p>

                {/* Subtopic pills */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {cat.subtopics.slice(0, 3).map((sub, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 text-[11px] font-medium border border-slate-150"
                    >
                      {sub}
                    </span>
                  ))}
                  {cat.subtopics.length > 3 && (
                    <span className="px-1.5 py-0.5 text-slate-400 text-[11px]">
                      +{cat.subtopics.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-4 mt-4 flex items-center text-xs font-semibold text-teal-700 group-hover:text-teal-800">
                <span>View Category Guides</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. FEATURED EDUCATIONAL ARTICLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">
              Clinically Verified
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Essential Dental Education Guides
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
              Foundational articles covering brushing mechanics, sensitivity relief, cavity prevention, and modern treatments.
            </p>
          </div>
          <Link
            href="/dental-education"
            className="inline-flex items-center text-sm font-bold text-teal-700 hover:text-teal-800 hover:underline"
          >
            Browse All {allArticles.length} Articles <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Lead Featured Article */}
        {featuredArticles[0] && (
          <div className="mb-8">
            <ArticleCard article={featuredArticles[0]} featured={true} />
          </div>
        )}

        {/* Grid of Remaining Featured Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.slice(1, 4).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* 4. INTERACTIVE PATIENT SYMPTOM EXPLORER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveSymptomFinder />
      </section>

      {/* 5. EMERGENCY FIRST-AID HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EmergencyActionCard />
      </section>

      {/* 6. EDITORIAL STANDARDS & WHY TRUST US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-900/80 border border-teal-500/40 text-teal-300 text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Our Editorial Commitment</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-6">
              Why Patients & Clinicians Trust Blueteeth Education
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Dental health advice on the internet is often saturated with unsupported marketing claims, unscientific DIY remedies, and aggressive commercial pitches.
              </p>
              <p>
                <strong>Blueteeth Education</strong> was created to be different: an independent, reliable oral health library built entirely around rigorous clinical evidence, peer-reviewed medical journals, and professional dental standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-800">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-sm">No Unsupported Claims</div>
                  <div className="text-xs text-slate-400 mt-0.5">Every recommendation is backed by published consensus guidelines.</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-sm">Clear Medical Disclaimers</div>
                  <div className="text-xs text-slate-400 mt-0.5">Transparent boundaries between general education and clinical diagnosis.</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center space-x-4">
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-colors"
              >
                Learn About Our Editorial Process <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
