import React from 'react';
import { Stethoscope, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

interface DentalReferralCardProps {
  treatmentName?: string;
  description?: string;
  url?: string;
}

export default function DentalReferralCard({
  treatmentName = 'Professional Dental Care & Diagnostics',
  description = 'Need personalized dental advice, comprehensive diagnostic X-rays, or specialized treatment? Consult with our clinical partner team.',
  url = 'https://blueteeth.in',
}: DentalReferralCardProps) {
  return (
    <div className="my-10 bg-gradient-to-br from-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-teal-800/40 relative overflow-hidden">
      {/* Subtle Background glow */}
      <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-900/60 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Need In-Person Clinical Care?</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {treatmentName}
          </h3>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-teal-200/90 pt-1">
            <span className="flex items-center">
              <CheckCircle className="w-3.5 h-3.5 mr-1 text-teal-400" />
              Advanced Digital Diagnostics
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-3.5 h-3.5 mr-1 text-teal-400" />
              Gentle, Patient-Centered Approach
            </span>
          </div>
        </div>

        <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-teal-500/25 transition-all hover:scale-[1.02] text-center"
          >
            <span>Visit Blueteeth Dental Care</span>
            <ExternalLink className="w-4 h-4 ml-1.5" />
          </a>
          <span className="text-[11px] text-slate-400 text-center">
            Clinical Partner Website (blueteeth.in)
          </span>
        </div>
      </div>
    </div>
  );
}
