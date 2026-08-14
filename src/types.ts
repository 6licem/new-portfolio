export interface PortfolioItem {
  id: string;
  title: string;
  clientCategory: 'Coaching' | 'Agency' | 'E-Commerce' | 'Local Service' | 'SaaS';
  summary: string;
  metric: string;
  metricLabel: string;
  image: string;
  pagesIncluded: string[];
  features: string[];
  deliverables: string[];
  ghlFeaturesUsed: string[];
  clientName: string;
  clientRole: string;
  testimonialExcerpt: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  iconName: string;
  popularFor: string;
  timelineEstimate: string;
  image?: string;
  resultsMetrics?: Array<{ label: string; value: string; subtext?: string }>;
  caseStudy?: {
    client: string;
    industry: string;
    outcome: string;
    metric: string;
    highlight: string;
  };
  subServices?: Array<{
    name: string;
    desc: string;
  }>;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  metric: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FunnelPackageSelection {
  baseType: string;
  addons: string[];
  estimatedTimeline: string;
  estimatedPriceRange: string;
}
