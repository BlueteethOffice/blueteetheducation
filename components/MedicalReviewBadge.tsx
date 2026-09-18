import React from 'react';
import Link from 'next/link';
import { ShieldCheck, UserCheck, Calendar, Info, CheckCircle2 } from 'lucide-react';
import { Author, Reviewer } from '@/data/types';

interface MedicalReviewBadgeProps {
  author: Author;
  reviewer: Reviewer;
  publishedDate: string;
  updatedDate: string;
}

export default function MedicalReviewBadge({
  author,
  reviewer,
  publishedDate,
  updatedDate,
}: MedicalReviewBadgeProps) {
  return (
    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 my-6 text-xs sm:text-sm text-slate-700">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Reviewer Info */}
        <div className="flex items-start space-x-3">
          <div className="p-2 rounded-xl bg-teal-100 text-teal-700 shrink-0 mt-0.5">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-teal-700 flex items-center">
              <span>Medically Reviewed By</span>
              <CheckCircle2 className="w-3.5 h-3.5 ml-1 text-teal-600" />
            </div>
            <div className="font-bold text-slate-900 mt-0.5">{reviewer.name}</div>
            <div className="text-slate-500 text-xs">{reviewer.credentials}</div>
            <div className="text-slate-400 text-[11px] mt-0.5">
              Reviewed: {reviewer.reviewDate} {reviewer.affiliation ? `• ${reviewer.affiliation}` : ''}
            </div>
          </div>
        </div>

        {/* Author & Update Info */}
        <div className="flex items-start space-x-3 border-t sm:border-t-0 sm:border-l border-slate-200 pt-3 sm:pt-0 sm:pl-4">
          <div className="p-2 rounded-xl bg-slate-200/70 text-slate-700 shrink-0 mt-0.5">
            <UserCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Written & Researched By
            </div>
            <div className="font-bold text-slate-900 mt-0.5">{author.name}</div>
            <div className="text-slate-500 text-xs">{author.role}</div>
            <div className="flex items-center space-x-1.5 text-slate-400 text-[11px] mt-0.5">
              <Calendar className="w-3 h-3" />
              <span>Last Updated: {new Date(updatedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Quick Disclaimer */}
      <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center">
          <Info className="w-3.5 h-3.5 mr-1 text-slate-400" />
          Reviewed for clinical accuracy and alignment with current dental guidelines.
        </span>
        <Link href="/about#editorial-policy" className="text-teal-700 font-medium hover:underline ml-2 shrink-0">
          Editorial Policy
        </Link>
      </div>
    </div>
  );
}
