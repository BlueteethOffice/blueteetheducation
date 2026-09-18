import React from 'react';
import Link from 'next/link';
import { ShieldCheck, HeartHandshake, ExternalLink, Mail, Info, FileText } from 'lucide-react';
import { CATEGORIES } from '@/data/categories';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Disclaimer & Mission Box */}
        <div className="bg-slate-800/80 rounded-2xl p-6 sm:p-8 border border-slate-700/60 mb-12 shadow-inner">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start space-x-4">
              <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 shrink-0 mt-1">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Medical & Editorial Disclaimer</h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  Blueteeth Education (<span className="text-teal-400">blueteetheducation.com</span>) is an independent, non-commercial dental knowledge platform. All content is researched from peer-reviewed dental literature, clinical guidelines (ADA, WHO, CDC), and reviewed by dental professionals for educational purposes only. This content is not a substitute for personalized clinical diagnosis, professional examination, or medical treatment.
                </p>
              </div>
            </div>
            <Link
              href="/about#editorial-policy"
              className="inline-flex items-center px-4 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-teal-300 text-xs font-semibold whitespace-nowrap transition-colors shrink-0"
            >
              Read Editorial Standards
            </Link>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-500 to-sky-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-teal-500/20">
                B<span className="text-teal-200 text-xs">e</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Blueteeth<span className="text-teal-400">.Education</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Understand Your Oral Health. Make Informed Dental Decisions. We demystify dentistry with clear, patient-focused, evidence-based guidance.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-teal-400" />
                <span>Editorial Desk: support@blueteeth.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <HeartHandshake className="w-3.5 h-3.5 text-teal-400" />
                <span>Clinical Partner: <a href="https://blueteeth.in" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline inline-flex items-center">Blueteeth Dental Care <ExternalLink className="w-3 h-3 ml-0.5" /></a></span>
              </div>
            </div>
          </div>

          {/* Categories Column 1 */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Core Categories
            </h4>
            <ul className="space-y-2.5 text-sm">
              {CATEGORIES.slice(0, 4).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/${cat.slug}`}
                    className="text-slate-400 hover:text-teal-300 transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Column 2 */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Specialized Topics
            </h4>
            <ul className="space-y-2.5 text-sm">
              {CATEGORIES.slice(4, 8).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/${cat.slug}`}
                    className="text-slate-400 hover:text-teal-300 transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Educational Resources & About */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Resources & About
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/dental-education" className="text-slate-400 hover:text-teal-300 transition-colors">
                  All Educational Articles
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-slate-400 hover:text-teal-300 transition-colors">
                  Patient Guides
                </Link>
              </li>
              <li>
                <Link href="/dental-emergencies" className="text-red-400 hover:text-red-300 transition-colors">
                  Emergency First Aid
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-teal-300 transition-colors">
                  About Blueteeth Education
                </Link>
              </li>
              <li>
                <Link href="/about#medical-review" className="text-slate-400 hover:text-teal-300 transition-colors">
                  Medical Review Process
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-teal-300 transition-colors">
                  Contact & Submit Topic
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Blueteeth Education (blueteetheducation.com). All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/about#editorial-policy" className="hover:text-slate-300 transition-colors">
              Editorial Policy
            </Link>
            <Link href="/about#disclaimer" className="hover:text-slate-300 transition-colors">
              Medical Disclaimer
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Feedback & Questions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
