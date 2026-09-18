'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Activity, ArrowRight, AlertCircle, CheckCircle, ShieldAlert, Sparkles, ChevronRight } from 'lucide-react';
import { SYMPTOM_GUIDES } from '@/data/articles';

export default function InteractiveSymptomFinder() {
  const [selectedId, setSelectedId] = useState<string>(SYMPTOM_GUIDES[0].id);

  const selectedGuide = SYMPTOM_GUIDES.find((g) => g.id === selectedId) || SYMPTOM_GUIDES[0];

  const severityBadge = (severity: string) => {
    switch (severity) {
      case 'emergency':
      case 'urgent':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-800 border border-red-200">
            <ShieldAlert className="w-3 h-3 mr-1 text-red-600" />
            Urgent Dental Care
          </span>
        );
      case 'moderate':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200">
            <AlertCircle className="w-3 h-3 mr-1 text-amber-600" />
            Needs Clinical Evaluation
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-100 text-teal-800 border border-teal-200">
            <CheckCircle className="w-3 h-3 mr-1 text-teal-600" />
            Home Care & Routine Check
          </span>
        );
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10">
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-bold uppercase tracking-wider mb-3">
          <Activity className="w-3.5 h-3.5" />
          <span>Interactive Dental Symptom Guide</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          What are you experiencing right now?
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
          Select your primary oral symptom below to see potential clinical causes, evidence-based home care steps, and when to seek dental care.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Symptoms Selector (Left) */}
        <div className="lg:col-span-5 space-y-2">
          {SYMPTOM_GUIDES.map((guide) => {
            const isSelected = guide.id === selectedId;
            return (
              <button
                key={guide.id}
                type="button"
                onClick={() => setSelectedId(guide.id)}
                className={`w-full text-left p-4 rounded-2xl transition-all duration-200 flex items-center justify-between border ${
                  isSelected
                    ? 'bg-teal-700 text-white shadow-md border-teal-700'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200/80'
                }`}
              >
                <div className="font-semibold text-sm leading-snug pr-2">
                  {guide.symptom}
                </div>
                <ChevronRight
                  className={`w-5 h-5 shrink-0 transition-transform ${
                    isSelected ? 'translate-x-1 text-teal-200' : 'text-slate-400'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card (Right) */}
        <div className="lg:col-span-7 bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Clinical Overview
              </span>
              {severityBadge(selectedGuide.severity)}
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-4">
              {selectedGuide.symptom}
            </h3>

            {/* Possible Causes */}
            <div className="mb-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Common Causes:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedGuide.possibleCauses.map((cause, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-medium shadow-xs"
                  >
                    {cause}
                  </span>
                ))}
              </div>
            </div>

            {/* Home Care */}
            <div className="mb-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Immediate Home Care Tips:
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                {selectedGuide.homeCare.map((tip, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* When to see dentist */}
            <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200/80 text-xs sm:text-sm text-teal-900">
              <span className="font-bold">When to see a dentist: </span>
              {selectedGuide.whenToSeeDentist}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              In-depth clinical guide available
            </span>
            <Link
              href={`/dental-education/${selectedGuide.relatedArticleSlug}`}
              className="inline-flex items-center px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
            >
              Read Full Guide <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
