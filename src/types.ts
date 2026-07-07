export type ViewType = 'home' | 'services' | 'portfolio' | 'pricing' | 'contact';

export interface ProjectInquiry {
  name: string;
  email: string;
  projectType: string;
  details: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'SaaS' | 'E-Commerce' | 'Corporate' | 'Landing Page';
  description: string;
  metrics: { label: string; value: string };
  imageUrl: string;
  techStack: string[];
  websiteUrl?: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  priceText: string;
  heroImage: string;
  content: {
    overview: string;
    whyChooseUs: string;
    features: string[];
    techStack: string[];
  };
}
