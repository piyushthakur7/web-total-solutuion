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
  highlight: string;
  imageUrl: string;
  techStack: string[];
  websiteUrl?: string;
}
