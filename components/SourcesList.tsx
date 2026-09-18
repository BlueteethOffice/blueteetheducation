import React from 'react';
import { BookOpenCheck, ExternalLink } from 'lucide-react';
import { Source } from '@/data/types';

interface SourcesListProps {
  sources: Source[];
}

export default function SourcesList({ sources }: SourcesListProps) {
  if (!sources || sources.length === 0) return null;

  return (
    <section id="references-sources" className="my-10 pt-8 border-t border-slate-200">
      <div className="flex items-center space-x-2 text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">
        <BookOpenCheck className="w-4 h-4 text-teal-600" />
        <span>Evidence & Scientific Literature</span>
      </div>
      <h2 className="text-xl font-bold text-slate-900 mb-4">Scientific References & Sources</h2>
      <p className="text-xs text-slate-500 mb-4">
        Our content is strictly synthesized from peer-reviewed dental literature, clinical practice guidelines, and leading academic institutions.
      </p>

      <ol className="space-y-3 list-decimal list-inside text-xs sm:text-sm text-slate-600">
        {sources.map((source, index) => (
          <li key={index} className="pl-1 leading-relaxed">
            <span className="font-semibold text-slate-800">{source.title}</span>
            <span className="text-slate-500">
              {' — '}
              <span className="italic">{source.publisher}</span>
              {source.year ? ` (${source.year})` : ''}
            </span>
            {source.url && (
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-teal-700 hover:underline ml-1.5"
              >
                <span>View Study</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
