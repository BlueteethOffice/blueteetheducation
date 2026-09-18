import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ShieldCheck,
  BookOpen,
  Award,
  Users,
  CheckCircle2,
  FileText,
  AlertCircle,
  ExternalLink,
  Scale
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us & Medical Editorial Standards | Blueteeth Education',
  description: 'Learn about Blueteeth Education, our medical review process, evidence-based editorial guidelines, and commitment to trustworthy oral health education.',
};

export default function AboutPage() {
  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      {/* Hero */}
      <section className="bg-white border-b border-slate-200/80 pt-12 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>About Blueteeth Education</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Understand Your Oral Health. Make Informed Dental Decisions.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Blueteeth Education (<strong>blueteetheducation.com</strong>) is an independent, evidence-based oral health educational platform dedicated to helping patients and general readers navigate modern dentistry with clarity and confidence.
          </p>
        </div>
      </section>

      {/* Mission & Purpose */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="text-xs font-bold uppercase tracking-wider text-teal-700">
            Our Primary Purpose
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Why Dental Education Matters
          </h2>
          <div className="space-y-4 text-slate-700 text-base leading-relaxed">
            <p>
              Oral health is an integral cornerstone of general human health and systemic well-being. Chronic periodontal infections, untreated dental cavities, and preventable tooth loss affect billions of individuals worldwide, often because patients lack access to simple, trustworthy, and non-intimidating dental information.
            </p>
            <p>
              Many health blogs either oversimplify complex biological conditions or use fear-based marketing to promote unproven products and procedures. <strong>Blueteeth Education</strong> was built to provide an authoritative, patient-friendly alternative: clear explanations of tooth anatomy, step-by-step guidance on hygiene habits, realistic timelines of dental treatments, and actionable advice on when to see a qualified dentist.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Policy & Medical Review Process */}
      <section id="editorial-policy" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-1">
              Clinical Integrity
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Our Medical Review & Editorial Policy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="font-bold text-slate-900 text-base">Evidence-Based Research</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Articles are drafted from peer-reviewed scientific studies, Cochrane systematic reviews, and consensus guidelines from bodies like the ADA, WHO, and AAPD.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-base">Clinician Medical Review</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every guide is reviewed and scrutinized by dental specialists (Periodontists, Endodontists, Pedodontists, Prosthodontists) for clinical accuracy and patient safety.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-base">Continuous Updates</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We monitor developments in dental materials, diagnostics, and preventive techniques, routinely updating our library to reflect current standards of care.
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-100 text-sm text-slate-700">
            <h4 className="font-bold text-slate-900">Our Core Writing Principles:</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span><strong>No Unsupported Claims:</strong> We do not endorse untested home remedies, abrasive whitening fads, or unscientific claims.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span><strong>Patient Empowerment:</strong> We explain the &quot;why&quot; behind every dental recommendation, helping patients have informed dialogues with their personal dentists.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span><strong>Transparent References:</strong> Every article includes direct citations to clinical trials, textbooks, and professional association guidelines.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Official Medical Disclaimer */}
      <section id="disclaimer" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-50 rounded-3xl p-8 border border-amber-200 text-amber-950 space-y-4">
          <div className="flex items-center space-x-2 text-amber-800 font-bold uppercase tracking-wider text-xs">
            <AlertCircle className="w-4 h-4" />
            <span>Official Medical Disclaimer</span>
          </div>
          <h3 className="text-xl font-bold text-amber-950">
            Educational Purpose & Non-Diagnostic Notice
          </h3>
          <p className="text-sm leading-relaxed text-amber-900">
            The information provided on Blueteeth Education (<strong>blueteetheducation.com</strong>) is published strictly for general informational and educational purposes. It does not constitute formal medical or dental advice, diagnosis, or treatment planning.
          </p>
          <p className="text-sm leading-relaxed text-amber-900">
            Always seek the advice of a qualified dentist, physician, or other registered healthcare provider with any questions you may have regarding a dental condition, oral trauma, or treatment decision. Never disregard professional medical advice or delay seeking clinical examination because of something you have read on this website.
          </p>
        </div>
      </section>

      {/* Clinical Affiliation Notice */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-teal-400">
            Clinical Partnership
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Relationship with Blueteeth Dental Care
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            While Blueteeth Education operates as an independent educational resource, we collaborate with practicing clinicians from <strong>Blueteeth Dental Care (<a href="https://blueteeth.in" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">blueteeth.in</a>)</strong> to ensure our content reflects real-world clinical experience and ethical patient management protocols.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center text-xs font-semibold text-teal-300 hover:text-teal-200 underline"
            >
              Have questions about our editorial board? Contact us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
