import { ARTICLES } from '@/data/articles';
import { Article } from '@/data/types';

export function getAllArticles(): Article[] {
  return ARTICLES;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return ARTICLES.filter((article) => article.categorySlug === categorySlug);
}

export function getArticlesByTag(tag: string): Article[] {
  const normalized = tag.toLowerCase().trim();
  return ARTICLES.filter((article) =>
    article.tags.some((t) => t.toLowerCase() === normalized)
  );
}

export function getRelatedArticles(article: Article, limit: number = 3): Article[] {
  if (article.relatedArticleSlugs && article.relatedArticleSlugs.length > 0) {
    const matched = article.relatedArticleSlugs
      .map((slug) => getArticleBySlug(slug))
      .filter((a): a is Article => a !== undefined);
    if (matched.length >= limit) return matched.slice(0, limit);
  }

  // Fallback to same category
  const sameCategory = ARTICLES.filter(
    (a) => a.slug !== article.slug && a.categorySlug === article.categorySlug
  );
  return sameCategory.slice(0, limit);
}

export function searchArticles(query: string): Article[] {
  if (!query || query.trim() === '') return [];
  const q = query.toLowerCase().trim();
  const words = q.split(/\s+/).filter(Boolean);

  return ARTICLES.filter((article) => {
    const titleMatch = article.title.toLowerCase().includes(q);
    const excerptMatch = article.excerpt.toLowerCase().includes(q);
    const categoryMatch = article.category.toLowerCase().includes(q);
    const subtopicMatch = article.subtopic?.toLowerCase().includes(q);
    const tagsMatch = article.tags.some((t) => t.toLowerCase().includes(q));
    const quickAnswerMatch = article.quickAnswer?.toLowerCase().includes(q);

    // Multi-word matching in sections
    const sectionMatch = article.sections.some((sec) =>
      sec.heading.toLowerCase().includes(q) ||
      sec.paragraphs.some((p) => p.toLowerCase().includes(q))
    );

    // Score based on word hits
    const wordHits = words.some(
      (w) =>
        article.title.toLowerCase().includes(w) ||
        article.category.toLowerCase().includes(w) ||
        article.tags.some((t) => t.toLowerCase().includes(w))
    );

    return titleMatch || excerptMatch || categoryMatch || subtopicMatch || tagsMatch || quickAnswerMatch || sectionMatch || wordHits;
  });
}

export function getFeaturedArticles(): Article[] {
  // Select top featured guides across oral hygiene, dental problems, preventive, and treatments
  const featuredSlugs = [
    'how-to-brush-your-teeth',
    'what-causes-tooth-sensitivity',
    'how-to-prevent-cavities',
    'root-canal-treatment-guide',
    'dental-implants-guide',
    'childrens-oral-hygiene-guide'
  ];

  return featuredSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is Article => a !== undefined);
}

export function getAllTags(): { name: string; count: number }[] {
  const tagMap = new Map<string, number>();
  ARTICLES.forEach((article) => {
    article.tags.forEach((tag) => {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    });
  });

  return Array.from(tagMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}
