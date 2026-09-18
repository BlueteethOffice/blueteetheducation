'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, ChevronDown, BookOpen, ShieldCheck, Stethoscope, Sparkles, AlertCircle, Smile, Layers, Zap } from 'lucide-react';
import { CATEGORIES } from '@/data/categories';
import SearchModal from '@/components/SearchModal';

const categoryIcons: Record<string, React.ReactNode> = {
  'oral-hygiene': <Sparkles className="w-4 h-4 text-teal-600" />,
  'dental-problems': <AlertCircle className="w-4 h-4 text-rose-500" />,
  'preventive-dentistry': <ShieldCheck className="w-4 h-4 text-sky-600" />,
  'dental-treatments': <Stethoscope className="w-4 h-4 text-indigo-600" />,
  'childrens-dentistry': <Smile className="w-4 h-4 text-amber-500" />,
  'cosmetic-dentistry': <Sparkles className="w-4 h-4 text-purple-500" />,
  'restorative-dentistry': <Layers className="w-4 h-4 text-emerald-600" />,
  'dental-emergencies': <Zap className="w-4 h-4 text-red-500" />,
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isTopicsOpen, setIsTopicsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut for search (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsTopicsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Clinical Disclaimer Notice */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 text-center border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-teal-900/60 text-teal-300 border border-teal-700/50">
            Medical Education
          </span>
          <span className="hidden sm:inline">
            Evidence-based oral health education. Not a substitute for personalized clinical diagnosis.
          </span>
          <span className="sm:hidden">
            Evidence-based dental education.
          </span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80'
            : 'bg-white border-b border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-700 to-sky-600 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
                <span className="font-bold text-xl tracking-tighter">B</span>
                <span className="font-light text-teal-200 text-sm">e</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 leading-none">
                  Blueteeth<span className="text-teal-600 font-semibold">.Education</span>
                </span>
                <span className="text-[11px] font-medium text-slate-500 tracking-wide uppercase mt-0.5">
                  Oral Health Knowledge Hub
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <Link
                href="/dental-education"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === '/dental-education'
                    ? 'text-teal-700 bg-teal-50 font-semibold'
                    : 'text-slate-700 hover:text-teal-600 hover:bg-slate-50'
                }`}
              >
                All Articles
              </Link>

              {/* Topics Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsTopicsOpen(!isTopicsOpen)}
                  onMouseEnter={() => setIsTopicsOpen(true)}
                  className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-50 transition-colors"
                  aria-expanded={isTopicsOpen}
                >
                  <span>Topics</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isTopicsOpen ? 'rotate-180' : ''}`} />
                </button>

                {isTopicsOpen && (
                  <div
                    onMouseLeave={() => setIsTopicsOpen(false)}
                    className="absolute left-0 mt-1 w-80 bg-white rounded-2xl shadow-xl border border-slate-150 p-3 grid grid-cols-1 gap-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  >
                    <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                      Dental Categories
                    </div>
                    {CATEGORIES.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/${cat.slug}`}
                        className="flex items-center space-x-3 px-3 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-50 hover:text-teal-700 transition-colors group"
                      >
                        <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-teal-50 transition-colors">
                          {categoryIcons[cat.slug] || <BookOpen className="w-4 h-4 text-teal-600" />}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-slate-900 group-hover:text-teal-700">{cat.name}</div>
                          <div className="text-[11px] text-slate-400 line-clamp-1">{cat.shortDescription}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/guides"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === '/guides'
                    ? 'text-teal-700 bg-teal-50 font-semibold'
                    : 'text-slate-700 hover:text-teal-600 hover:bg-slate-50'
                }`}
              >
                Guides
              </Link>

              <Link
                href="/about"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === '/about'
                    ? 'text-teal-700 bg-teal-50 font-semibold'
                    : 'text-slate-700 hover:text-teal-600 hover:bg-slate-50'
                }`}
              >
                About & Editorial
              </Link>

              <Link
                href="/contact"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === '/contact'
                    ? 'text-teal-700 bg-teal-50 font-semibold'
                    : 'text-slate-700 hover:text-teal-600 hover:bg-slate-50'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Actions: Search Button & Mobile Toggle */}
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center space-x-2 px-3.5 py-2 rounded-full bg-slate-100/80 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200/60 transition-all text-sm group"
                aria-label="Search dental topics"
              >
                <Search className="w-4 h-4 text-slate-500 group-hover:text-teal-600" />
                <span className="hidden sm:inline text-slate-500 font-normal">Search dental topics...</span>
                <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white text-slate-400 border border-slate-200 rounded">
                  Ctrl K
                </kbd>
              </button>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 max-h-[80vh] overflow-y-auto shadow-xl">
            <div className="font-semibold text-xs text-slate-400 uppercase tracking-wider px-2">Navigation</div>
            <div className="grid grid-cols-1 gap-1">
              <Link
                href="/dental-education"
                className="px-3 py-2 rounded-lg text-base font-medium text-slate-800 hover:bg-teal-50 hover:text-teal-700"
              >
                All Dental Articles
              </Link>
              <Link
                href="/guides"
                className="px-3 py-2 rounded-lg text-base font-medium text-slate-800 hover:bg-teal-50 hover:text-teal-700"
              >
                Patient Guides
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 rounded-lg text-base font-medium text-slate-800 hover:bg-teal-50 hover:text-teal-700"
              >
                About & Editorial Standards
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 rounded-lg text-base font-medium text-slate-800 hover:bg-teal-50 hover:text-teal-700"
              >
                Contact & Question Desk
              </Link>
            </div>

            <div className="border-t border-slate-100 pt-3">
              <div className="font-semibold text-xs text-slate-400 uppercase tracking-wider px-2 mb-2">
                Browse by Category
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/${cat.slug}`}
                    className="flex items-center space-x-2.5 px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-teal-700"
                  >
                    <span>{categoryIcons[cat.slug] || <BookOpen className="w-4 h-4 text-teal-600" />}</span>
                    <span className="font-medium">{cat.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Instant Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
