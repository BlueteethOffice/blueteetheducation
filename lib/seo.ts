import { Article, FAQ } from '@/data/types';

export const SITE_URL = 'https://blueteetheducation.com';
export const SITE_NAME = 'Blueteeth Education';

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'Blueteeth Education',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: 'Independent Dental Education & Oral Health Knowledge Resource providing evidence-based patient dental guidance.',
    sameAs: [
      'https://blueteeth.in'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'editorial and patient education inquiries',
      email: 'support@blueteeth.in',
      availableLanguage: ['English']
    }
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Blueteeth Education',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`
    }))
  };
}

export function generateArticleSchema(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': ['MedicalWebPage', 'Article'],
    headline: article.h1 || article.title,
    name: article.title,
    description: article.metaDescription || article.excerpt,
    url: `${SITE_URL}/dental-education/${article.slug}`,
    image: article.featuredImage,
    datePublished: article.publishedDate,
    dateModified: article.updatedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/dental-education/${article.slug}`
    },
    author: {
      '@type': 'Organization',
      name: article.author.name,
      roleName: article.author.role
    },
    reviewedBy: {
      '@type': 'MedicalOrganization',
      name: article.reviewer.name,
      description: `${article.reviewer.role} (${article.reviewer.credentials})`
    },
    publisher: {
      '@type': 'MedicalOrganization',
      name: 'Blueteeth Education',
      url: SITE_URL
    },
    medicalAudience: {
      '@type': 'MedicalAudience',
      audienceType: 'Patients and General Public'
    },
    about: {
      '@type': 'MedicalCondition',
      name: article.category
    },
    citation: article.sources.map((s) => `${s.title}, ${s.publisher} (${s.year || ''})`)
  };
}

export function generateFAQSchema(faqs: FAQ[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}
