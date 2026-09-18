'use client';

import React, { useEffect, useState } from 'react';
import { TableOfContentsItem } from '@/data/types';
import { ListFilter } from 'lucide-react';

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (!items || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0% -60% 0%',
        threshold: 0.1,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items || items.length === 0) return null;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; // offset for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(id);
    }
  };

  return (
    <nav className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80">
      <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-700 pb-3 border-b border-slate-200 mb-3">
        <ListFilter className="w-4 h-4 text-teal-600" />
        <span>Table of Contents</span>
      </div>
      <ul className="space-y-2 text-xs sm:text-sm">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li
              key={item.id}
              className={`${item.level === 3 ? 'pl-4' : ''}`}
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`block py-1 px-2 rounded-lg transition-all duration-150 leading-snug ${
                  isActive
                    ? 'bg-teal-100/70 text-teal-900 font-semibold border-l-2 border-teal-600 pl-2.5'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
