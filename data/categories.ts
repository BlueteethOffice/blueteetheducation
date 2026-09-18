import { Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'oral-hygiene',
    slug: 'oral-hygiene',
    name: 'Oral Hygiene',
    shortDescription: 'Master the daily habits, tools, and techniques for a clean, healthy mouth.',
    fullDescription: 'Comprehensive, evidence-based guides on daily oral hygiene practices including brushing techniques, flossing methods, antimicrobial mouthwashes, tongue cleaning, and effective plaque control.',
    iconName: 'Sparkles',
    color: 'teal',
    bgGradient: 'from-teal-500/10 to-emerald-500/10',
    subtopics: [
      'Brushing Techniques',
      'Flossing & Interdental Cleaning',
      'Mouthwashes & Rinses',
      'Tongue Cleaning',
      'Plaque & Tartar Control',
      'Bad Breath (Halitosis)',
      'Toothbrushes & Toothpastes'
    ],
    featuredArticleSlug: 'how-to-brush-your-teeth'
  },
  {
    id: 'dental-problems',
    slug: 'dental-problems',
    name: 'Dental Problems',
    shortDescription: 'Understand symptoms, root causes, and effective clinical solutions for common dental ailments.',
    fullDescription: 'In-depth clinical educational resources covering common oral disorders from early enamel demineralization and dentin sensitivity to gingivitis, periodontitis, toothaches, and tooth fractures.',
    iconName: 'AlertCircle',
    color: 'rose',
    bgGradient: 'from-rose-500/10 to-amber-500/10',
    subtopics: [
      'Toothache & Pain',
      'Tooth Sensitivity',
      'Cavities & Tooth Decay',
      'Bleeding & Swollen Gums',
      'Gingivitis & Periodontitis',
      'Broken & Chipped Teeth',
      'Loose Teeth'
    ],
    featuredArticleSlug: 'what-causes-tooth-sensitivity'
  },
  {
    id: 'preventive-dentistry',
    slug: 'preventive-dentistry',
    name: 'Preventive Dentistry',
    shortDescription: 'Proactive dental care strategies to protect your teeth and gums for life.',
    fullDescription: 'Learn how routine dental examinations, professional ultrasonic scaling, topical fluoride treatments, pit and fissure sealants, and diet counseling prevent complex oral diseases before they start.',
    iconName: 'ShieldCheck',
    color: 'sky',
    bgGradient: 'from-sky-500/10 to-blue-500/10',
    subtopics: [
      'Routine Dental Checkups',
      'Professional Scaling & Polishing',
      'Fluoride Therapies',
      'Dental X-rays & Diagnostics',
      'Diet & Enamel Protection',
      'Gum Health Preservation'
    ],
    featuredArticleSlug: 'how-to-prevent-cavities'
  },
  {
    id: 'dental-treatments',
    slug: 'dental-treatments',
    name: 'Dental Treatments',
    shortDescription: 'Clear, reassuring explanations of clinical procedures and what to expect.',
    fullDescription: 'Demystifying dental procedures with step-by-step clinical walkthroughs of root canal therapy, tooth restorations, crown preparations, extractions, and pain management protocols.',
    iconName: 'Stethoscope',
    color: 'indigo',
    bgGradient: 'from-indigo-500/10 to-violet-500/10',
    subtopics: [
      'Root Canal Therapy',
      'Tooth Fillings & Bonding',
      'Dental Crowns & Bridges',
      'Tooth Extractions',
      'Deep Cleaning (Scaling & Root Planing)',
      'Local Anesthesia & Comfort'
    ],
    featuredArticleSlug: 'root-canal-treatment-guide'
  },
  {
    id: 'childrens-dentistry',
    slug: 'childrens-dentistry',
    name: "Children's Dentistry",
    shortDescription: 'Nurturing healthy smiles from the first baby tooth through the teenage years.',
    fullDescription: 'Pediatric dental education for parents covering primary tooth eruption, teething relief, age-appropriate brushing habits, first dental visits, cavity prevention in toddlers, and dental sealants.',
    iconName: 'Smile',
    color: 'amber',
    bgGradient: 'from-amber-500/10 to-orange-500/10',
    subtopics: [
      'Baby Teeth & Teething',
      'Kids Brushing & Flossing',
      'First Dental Checkup (Age One)',
      'Childhood Cavities (ECC)',
      'Pediatric Dental Sealants',
      'Diet & Habit Breaking (Thumb Sucking)'
    ],
    featuredArticleSlug: 'childrens-oral-hygiene-guide'
  },
  {
    id: 'cosmetic-dentistry',
    slug: 'cosmetic-dentistry',
    name: 'Cosmetic Dentistry',
    shortDescription: 'Evidence-based insights into safe teeth whitening and aesthetic smile enhancements.',
    fullDescription: 'Understand the science, longevity, safety parameters, and realistic expectations of aesthetic dental procedures including professional whitening, porcelain veneers, and composite bonding.',
    iconName: 'Sparkle',
    color: 'purple',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
    subtopics: [
      'Professional Teeth Whitening',
      'Porcelain Veneers',
      'Composite Bonding',
      'Smile Makeovers',
      'Enamel Microabrasion'
    ],
    featuredArticleSlug: 'teeth-whitening-guide'
  },
  {
    id: 'restorative-dentistry',
    slug: 'restorative-dentistry',
    name: 'Restorative Dentistry',
    shortDescription: 'Advanced options for replacing missing teeth and rebuilding damaged bite function.',
    fullDescription: 'Detailed guides on restoring broken, worn, or missing teeth with modern biocompatible solutions: dental implants, ceramic crowns, fixed bridges, and precision dentures.',
    iconName: 'Layers',
    color: 'emerald',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
    subtopics: [
      'Dental Implants',
      'Ceramic Crowns & Onlays',
      'Fixed Dental Bridges',
      'Full & Partial Dentures',
      'Full Mouth Rehabilitation'
    ],
    featuredArticleSlug: 'dental-implants-guide'
  },
  {
    id: 'dental-emergencies',
    slug: 'dental-emergencies',
    name: 'Dental Emergencies',
    shortDescription: 'Immediate, step-by-step first-aid protocols for acute dental injuries and severe pain.',
    fullDescription: 'Critical first-aid instructions for dental emergencies: knocked-out (avulsed) permanent teeth, broken crowns, severe throbbing toothaches, soft tissue lacerations, and facial swelling.',
    iconName: 'Zap',
    color: 'red',
    bgGradient: 'from-red-500/10 to-rose-500/10',
    subtopics: [
      'Severe Toothache First Aid',
      'Knocked-Out Tooth (Avulsion)',
      'Broken & Fractured Teeth',
      'Facial Swelling & Abscess',
      'Dislodged Crowns or Fillings',
      'When to Seek ER vs Dentist'
    ],
    featuredArticleSlug: 'what-to-do-about-a-broken-tooth'
  }
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
