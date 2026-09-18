'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Search, Filter, BookOpen, Clock, ArrowRight, Sparkles, X, Tag } from 'lucide-react';
import { searchArticles, getAllArticles } from '@/lib/articles';
import { Article } from '@/data/types';
import { CATEGORIES } from '@/data/categories';
import ArticleCard from '@/components/ArticleCard';

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get('q') || '';

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [results, setResults] = useState<Article[]>([]);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    if (query.trim()) {
      let matched = searchArticles(query);
      if (selectedCategory !== 'all') {
        matched = matched.filter((a) => a.categorySlug === selectedCategory);
      }
      setResults(matched);
    } else {
      // If no query, show all or filtered by category
      let all = getAllArticles();
      if (selectedCategory !== 'all') {
        all = all.filter((a) => a.categorySlug === selectedCategory);
      }
      setResults(all);
    }
  }, [query, selectedCategory]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
          <Search className="w-3.5 h-3.5" />
          <span>Dental Search Engine</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Search Dental Knowledge
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600">
          Find educational guides by title, category, symptom, procedure, or keywords.
        </p>
      </div>

      {/* Search Input Box */}
      <div className="max-w-3xl mx-auto">
        <form
          onSubmit={handleFormSubmit}
          className="relative flex items-center bg-white rounded-3xl shadow-lg border border-slate-200 p-2 sm:p-3 focus-within:border-teal-500 focus-within:ring-4 focus-within:ring-teal-500/10 transition-all"
        >
          <Search className="w-6 h-6 text-teal-600 ml-3 mr-2 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search dental topics..."
            className="w-full text-slate-800 placeholder-slate-400 text-base sm:text-lg bg-transparent border-0 focus:outline-none focus:ring-0"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                router.push('/search');
              }}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="submit"
            className="px-6 py-3 rounded-2xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-md transition-colors shrink-0"
          >
            Search
          </button>
        </form>

        {/* Category Pills */}
        <div className="mt-4 flex items-center space-x-2 overflow-x-auto pb-2 text-xs no-scrollbar">
          <span className="text-slate-400 font-semibold shrink-0">Category:</span>
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-colors ${
              selectedCategory === 'all'
                ? 'bg-teal-700 text-white font-bold'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            All Categories
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === cat.slug
                  ? 'bg-teal-700 text-white font-bold'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3 text-sm text-slate-600">
        <div>
          {query ? (
            <span>
              Found <strong className="text-slate-900">{results.length}</strong> results for &ldquo;
              <strong className="text-teal-700">{query}</strong>&rdquo;
            </span>
          ) : (
            <span>Showing all <strong className="text-slate-900">{results.length}</strong> educational articles</span>
          )}
        </div>
        {selectedCategory !== 'all' && (
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
            Filtered by: {CATEGORIES.find((c) => c.slug === selectedCategory)?.name}
          </span>
        )}
      </div>

      {/* Results Grid */}
      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-xl mx-auto space-y-4">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-xl font-bold text-slate-900">No matching dental articles found</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            We couldn&apos;t find any articles matching &ldquo;{query}&rdquo;. Check your spelling or browse our popular categories.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-2">
            {['Brushing', 'Tooth Sensitivity', 'Flossing', 'Cavities', 'Root Canal', 'Implants'].map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => {
                  setQuery(term);
                  router.push(`/search?q=${encodeURIComponent(term)}`);
                }}
                className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-medium hover:bg-teal-50 hover:text-teal-700 transition-colors border border-slate-200"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-20 text-center text-slate-500">
          Loading dental search...
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
