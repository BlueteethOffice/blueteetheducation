'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, X, ArrowRight, BookOpen, Clock, ChevronRight } from 'lucide-react';
import { searchArticles } from '@/lib/articles';
import { Article } from '@/data/types';
import { CATEGORIES } from '@/data/categories';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Article[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
      setSelectedCategory('all');
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length > 1) {
      let matched = searchArticles(query);
      if (selectedCategory !== 'all') {
        matched = matched.filter((a) => a.categorySlug === selectedCategory);
      }
      setResults(matched);
    } else {
      setResults([]);
    }
  }, [query, selectedCategory]);

  if (!isOpen) return null;

  const handleFullSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onClose();
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm p-4 sm:p-6 md:p-20 flex justify-center animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[85vh] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <form onSubmit={handleFullSearchSubmit} className="relative flex items-center border-b border-slate-200 px-4 py-3 sm:py-4">
          <Search className="w-5 h-5 text-teal-600 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search dental topics, symptoms, treatments (e.g. root canal, sensitivity, flossing)..."
            className="w-full text-slate-800 placeholder-slate-400 text-base sm:text-lg bg-transparent border-0 focus:outline-none focus:ring-0"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 text-xs font-medium"
          >
            Esc
          </button>
        </form>

        {/* Category Filters Bar */}
        <div className="flex items-center space-x-2 px-4 py-2.5 bg-slate-50 border-b border-slate-150 overflow-x-auto text-xs no-scrollbar">
          <span className="text-slate-400 font-medium shrink-0">Filter:</span>
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-2.5 py-1 rounded-full whitespace-nowrap transition-colors ${
              selectedCategory === 'all'
                ? 'bg-teal-700 text-white font-medium'
                : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
            }`}
          >
            All Categories
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-2.5 py-1 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === cat.slug
                  ? 'bg-teal-700 text-white font-medium'
                  : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Results Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {query.trim().length === 0 ? (
            <div className="py-6 px-2 text-center">
              <p className="text-sm font-medium text-slate-700 mb-3">Popular Dental Searches</p>
              <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
                {['Tooth sensitivity', 'How to brush properly', 'Root canal procedure', 'Prevent cavities', 'Bleeding gums', 'Dental implants', 'Baby teeth care'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setQuery(item)}
                    className="px-3 py-1.5 text-xs rounded-lg bg-slate-100 hover:bg-teal-50 hover:text-teal-700 text-slate-700 transition-colors border border-slate-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-1">
                Articles Found ({results.length})
              </div>
              {results.slice(0, 6).map((article) => (
                <Link
                  key={article.id}
                  href={`/dental-education/${article.slug}`}
                  onClick={onClose}
                  className="block p-3 rounded-xl hover:bg-teal-50/60 border border-transparent hover:border-teal-200/60 transition-all group"
                >
                  <div className="flex items-center space-x-2 text-xs font-semibold text-teal-700 mb-1">
                    <span>{article.category}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500 font-normal flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readingTime}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                    {article.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center text-slate-500 text-sm">
              <p>No educational articles found for &ldquo;<span className="font-semibold text-slate-700">{query}</span>&rdquo;</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for broader terms like &quot;decay&quot;, &quot;floss&quot;, or &quot;cleaning&quot;.</p>
            </div>
          )}
        </div>

        {/* Footer View All Bar */}
        {query.trim().length > 0 && (
          <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-500">
              Press Enter for full search results page
            </span>
            <button
              type="button"
              onClick={handleFullSearchSubmit}
              className="inline-flex items-center text-teal-700 font-semibold hover:underline"
            >
              See all results <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
