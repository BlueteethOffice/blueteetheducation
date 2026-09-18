export interface Source {
  title: string;
  url?: string;
  publisher: string;
  year?: string | number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Author {
  name: string;
  role: string;
  credentials?: string;
  avatar?: string;
  bio?: string;
}

export interface Reviewer {
  name: string;
  role: string;
  credentials: string; // e.g. "BDS, MDS - Dental Specialist"
  reviewDate: string;
  affiliation?: string;
}

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

export interface ArticleContentSection {
  id: string;
  heading: string;
  subheading?: string;
  paragraphs: string[];
  callout?: {
    type: 'tip' | 'warning' | 'info' | 'emergency';
    title: string;
    text: string;
  };
  keyPoints?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  quickAnswer?: string;
  category: string;
  categorySlug: string;
  subtopic?: string;
  author: Author;
  reviewer: Reviewer;
  publishedDate: string;
  updatedDate: string;
  featuredImage: string;
  imageAlt: string;
  readingTime: string;
  tags: string[];
  tableOfContents: TableOfContentsItem[];
  sections: ArticleContentSection[];
  faq: FAQ[];
  sources: Source[];
  relatedArticleSlugs: string[];
  clinicalReferral?: {
    treatmentName: string;
    description: string;
    url?: string;
  };
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  color: string;
  bgGradient: string;
  subtopics: string[];
  featuredArticleSlug?: string;
  faqs?: FAQ[];
}

export interface SymptomGuide {
  id: string;
  symptom: string;
  severity: 'low' | 'moderate' | 'urgent' | 'emergency';
  possibleCauses: string[];
  homeCare: string[];
  whenToSeeDentist: string;
  relatedArticleSlug: string;
}
