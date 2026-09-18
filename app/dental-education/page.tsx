'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, BookOpen, Filter, Sparkles, SlidersHorizontal, Tag, RefreshCw } from 'lucide-react';
import { getAllArticles, getAllTags } from '@/lib/articles';
import { CATEGORIES } from '@/data/categories';
import ArticleCard from '@/components/ArticleCard';

export default function DentalEducationDirectoryPage() {
  const allArticles = useMemo(() => getAllArticles(), []);
  const allTags = useMemo(() => getAllTags(), []);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const filteredArticles = useMemo(() => {
    return allArticles.filter((article) => {
      // Category filter
      if (selectedCategory !== 'all' && article.categorySlug !== selectedCategory) {
        return false;
      }

      // Tag filter
      if (selectedTag !== 'all' && !article.tags.some((t) => t.toLowerCase() === selectedTag.toLowerCase())) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = article.title.toLowerCase().includes(q);
        const matchExcerpt = article.excerpt.toLowerCase().includes(q);
        const matchCategory = article.category.toLowerCase().includes(q);
        const matchTags = article.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchTitle && !matchExcerpt && !matchCategory && !matchTags) {
          return false;
        }
      }

      return true;
    });
  }, [allArticles, selectedCategory, selectedTag, searchQuery]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedTag('all');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Dental Education Library</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          All Dental Articles & Guides
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          Browse our complete collection of medically reviewed articles on oral hygiene, dental procedures, pediatric dental health, and preventive care.
        </p>
      </div>

      {/* Interactive Controls & Filters */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-5">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter articles by keyword, condition, or procedure..."
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all"
          />
        </div>

        {/* Category Pills */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
            <span className="flex items-center">
              <Filter className="w-3.5 h-3.5 mr-1" />
              Filter by Category
            </span>
            {(selectedCategory !== 'all' || selectedTag !== 'all' || searchQuery) && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-teal-700 hover:underline flex items-center normal-case font-medium text-xs"
              >
                <RefreshCw className="w-3 h-3 mr-1" /> Reset all filters
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-teal-700 text-white font-semibold shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              All Topics ({allArticles.length})
            </button>
            {CATEGORIES.map((cat) => {
              const count = allArticles.filter((a) => a.categorySlug === cat.slug).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    selectedCategory === cat.slug
                      ? 'bg-teal-700 text-white font-semibold shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Tags Bar */}
        <div className="pt-2 border-t border-slate-100 flex items-center space-x-2 overflow-x-auto text-xs no-scrollbar">
          <span className="text-slate-400 font-semibold uppercase tracking-wider text-[11px] shrink-0 flex items-center">
            <Tag className="w-3 h-3 mr-1" /> Popular Tags:
          </span>
          {allTags.slice(0, 8).map(({ name, count }) => (
            <button
              key={name}
              type="button"
              onClick={() => setSelectedTag(selectedTag === name ? 'all' : name)}
              className={`px-2.5 py-1 rounded-lg whitespace-nowrap transition-colors ${
                selectedTag === name
                  ? 'bg-slate-900 text-white font-semibold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              #{name} <span className="opacity-60 text-[10px]">({count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-sm text-slate-600 border-b border-slate-200 pb-3">
        <div>
          Showing <strong className="text-slate-900">{filteredArticles.length}</strong> of{' '}
          {allArticles.length} educational articles
        </div>
        <div className="text-xs text-slate-400">
          Updated continuously with peer-reviewed literature
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 my-8">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-800">No matching dental articles found</h3>
          <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
            We couldn&apos;t find any articles matching your search criteria. Try clearing some filters or searching for terms like &quot;cavity&quot; or &quot;flossing&quot;.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-4 px-5 py-2 rounded-xl bg-teal-700 text-white text-xs font-semibold hover:bg-teal-800 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}
