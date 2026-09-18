import React from 'react';
import Link from 'next/link';
import { Zap, Phone, AlertTriangle, ArrowRight } from 'lucide-react';

interface EmergencyActionCardProps {
  title?: string;
  summary?: string;
  actionSteps?: string[];
  articleSlug?: string;
}

export default function EmergencyActionCard({
  title = 'Acute Dental Emergency First-Aid',
  summary = 'Severe pain, knocked-out teeth, or sudden trauma require swift action to preserve natural teeth and prevent systemic spread.',
  actionSteps = [
    'Knocked-Out Permanent Tooth: Replant in socket immediately or keep in cold cow milk. Rush to dentist within 60 minutes.',
    'Severe Throbbing Toothache: Rinse with warm salt water. Take anti-inflammatories. Never apply aspirin directly to gums.',
    'Broken or Chipped Tooth: Save tooth fragments in milk. Apply a cold compress to cheek to reduce swelling.',
    'Facial Swelling / Fever: Immediate medical attention required if swelling affects breathing or swallowing.'
  ],
  articleSlug = 'what-to-do-about-a-broken-tooth'
}: EmergencyActionCardProps) {
  return (
    <div className="bg-gradient-to-br from-red-950 via-slate-900 to-red-900 text-white rounded-3xl p-6 sm:p-8 border border-red-700/50 shadow-xl my-8">
      <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-red-400 mb-3">
        <Zap className="w-4 h-4 text-red-400" />
        <span>Urgent Patient Action Protocol</span>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">{summary}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        {actionSteps.map((step, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-red-900/30 border border-red-500/20 text-xs sm:text-sm text-slate-200 flex items-start space-x-3"
          >
            <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
              {idx + 1}
            </span>
            <span className="leading-snug">{step}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-red-900/60 text-xs">
        <div className="flex items-center space-x-2 text-red-300">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <span>If breathing or vision is impaired, proceed immediately to the nearest Emergency Room.</span>
        </div>
        <Link
          href={`/dental-emergencies`}
          className="inline-flex items-center px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs whitespace-nowrap transition-colors"
        >
          View All Emergency Protocols <ArrowRight className="w-3.5 h-3.5 ml-1" />
        </Link>
      </div>
    </div>
  );
}
