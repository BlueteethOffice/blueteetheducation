import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { Article } from '@/data/types';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  if (featured) {
    return (
      <div className="group relative bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-teal-300/80 transition-all duration-300 overflow-hidden flex flex-col md:flex-row">
        {/* Image */}
        <div className="relative md:w-1/2 h-64 md:h-auto min-h-[260px] overflow-hidden bg-slate-100">
          <Image
            src={article.featuredImage}
            alt={article.imageAlt || article.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-slate-900/80 backdrop-blur-md text-teal-300 rounded-full border border-teal-500/30">
              {article.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 md:w-1/2 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-3 text-xs text-slate-500 mb-3">
              <span className="flex items-center text-teal-700 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 mr-1 text-teal-600" />
                Medically Reviewed
              </span>
              <span>•</span>
              <span className="flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1" />
                {article.readingTime}
              </span>
            </div>

            <Link href={`/dental-education/${article.slug}`}>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                {article.title}
              </h3>
            </Link>

            <p className="text-slate-600 text-sm mt-3 leading-relaxed line-clamp-3">
              {article.excerpt}
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
            <div className="text-xs text-slate-500">
              Updated {new Date(article.updatedDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </div>
            <Link
              href={`/dental-education/${article.slug}`}
              className="inline-flex items-center text-sm font-semibold text-teal-700 group-hover:text-teal-800"
            >
              Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-teal-300 transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Thumbnail */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <Image
          src={article.featuredImage}
          alt={article.imageAlt || article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider bg-slate-900/80 backdrop-blur-md text-teal-300 rounded-full border border-teal-500/30">
            {article.category}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-2 text-xs text-slate-500 mb-2">
            <span className="flex items-center text-teal-700 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 mr-1 text-teal-600" />
              Reviewed
            </span>
            <span>•</span>
            <span className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1" />
              {article.readingTime}
            </span>
          </div>

          <Link href={`/dental-education/${article.slug}`}>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug line-clamp-2">
              {article.title}
            </h3>
          </Link>

          <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
        </div>

        <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="text-[11px] text-slate-400">
            {article.subtopic || article.category}
          </div>
          <Link
            href={`/dental-education/${article.slug}`}
            className="inline-flex items-center text-xs font-semibold text-teal-700 group-hover:text-teal-800"
          >
            Read <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
