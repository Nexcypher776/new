import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  cta: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface VideoTestimonial {
  id: string;
  clientName: string;
  result: string;
  thumbnail: string;
  videoUrl: string;
}

export interface SalesProof {
  id: string;
  title: string;
  label: string;
  image: string;
  description?: string;
}

export interface NicheProject {
  id: string;
  niche: string;
  category: 'Shopify Dev' | 'Marketing' | 'AI Automation';
  description: string;
  image: string;
}

export interface Lead {
  name: string;
  email: string;
  businessType: string;
  budget: string;
  message?: string;
  source: 'form' | 'ai_assistant';
  createdAt: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  image: string;
  goals: string[];
  solutions: string[];
  results: {
    label: string;
    value: string;
  }[];
}
