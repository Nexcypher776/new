import { ShoppingBag, Megaphone, Bot, Mail, TrendingUp, Zap } from 'lucide-react';
import { Service, PricingTier, Testimonial, VideoTestimonial, SalesProof, NicheProject, CaseStudy } from './types';

export const LOGO_URL = "https://imglink.cc/cdn/BjEmiX6yMd.png";

export const SERVICES: Service[] = [
  {
    id: 'shopify-dev',
    title: 'Shopify Development',
    description: 'High-converting, premium Shopify stores tailored to your brand.',
    icon: 'ShoppingBag',
    benefits: ['Custom Theme Design', 'Mobile Optimization', 'App Integration'],
    cta: 'Build My Store'
  },
  {
    id: 'marketing',
    title: 'Shopify Marketing',
    description: 'Data-driven marketing strategies to scale your sales rapidly.',
    icon: 'Megaphone',
    benefits: ['Google & FB Ads', 'TikTok Ads Strategy', 'SEO Optimization'],
    cta: 'Scale My Sales'
  },
  {
    id: 'ai-agents',
    title: 'AI Agent Development',
    description: 'Automate your business with intelligent calling and texting agents.',
    icon: 'Bot',
    benefits: ['24/7 Customer Support', 'Lead Qualification', 'Automated Outreach'],
    cta: 'Automate Now'
  }
];

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: '1',
    clientName: 'Camila Labad',
    result: 'Brand Authority Boosted',
    thumbnail: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800',
    videoUrl: 'https://vimeo.com/1111080035'
  },
  {
    id: '2',
    clientName: 'James Robot',
    result: 'Conversion Rate Doubled',
    thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800',
    videoUrl: 'https://vimeo.com/1110647582'
  },
  {
    id: '3',
    clientName: 'Sarah Jenkins',
    result: 'ROAS increased by 3.5x',
    thumbnail: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800',
    videoUrl: 'https://vimeo.com/1110647582'
  }
];

export const SALES_PROOFS: SalesProof[] = [
  {
    id: '1',
    title: '$12,450 Revenue in 30 Days',
    label: 'Shopify Sales',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
    description: 'Complete store overhaul and marketing strategy.'
  },
  {
    id: '2',
    title: '4.2x ROAS on TikTok Ads',
    label: 'ROAS 4.2x',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
    description: 'Aggressive scaling with creative ad content.'
  },
  {
    id: '3',
    title: '$8,200 in First 14 Days',
    label: 'Google Ads Result',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800',
    description: 'Targeted search campaigns for high-intent buyers.'
  }
];

export const NICHE_PROJECTS: NicheProject[] = [
  {
    id: 'pet',
    niche: 'Pet Store',
    category: 'Shopify Dev',
    description: 'High-converting pet store with winning products.',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800'
  },
  {
    id: 'fashion',
    niche: 'Fashion',
    category: 'Marketing',
    description: 'Premium apparel brand with seamless UX.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800'
  },
  {
    id: 'tech',
    niche: 'Tech & Gadgets',
    category: 'AI Automation',
    description: 'Futuristic electronics store with AI support.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800'
  },
  {
    id: 'home',
    niche: 'Home Decor',
    category: 'Shopify Dev',
    description: 'Elegant interior design shop with high AOV.',
    image: 'https://images.unsplash.com/photo-1513519247388-4e282a142d62?q=80&w=800'
  },
  {
    id: 'fitness',
    niche: 'Fitness / Gym',
    category: 'Marketing',
    description: 'Performance-driven supplement and gear store.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800'
  },
  {
    id: 'beauty',
    niche: 'Beauty / Skincare',
    category: 'AI Automation',
    description: 'Clean aesthetic skincare brand with subscription model.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'pet-empire',
    title: 'Scaling a Pet Brand from $0 to $50k/Month',
    client: 'Pet Empire',
    category: 'Shopify Dev & Marketing',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1200',
    goals: [
      'Launch a premium Shopify store',
      'Establish a consistent brand identity',
      'Achieve $10k revenue in the first month'
    ],
    solutions: [
      'Custom Shopify 2.0 theme development',
      'High-converting product page optimization',
      'Multi-channel ad strategy (FB, TikTok, Google)'
    ],
    results: [
      { label: 'Monthly Revenue', value: '$52,000+' },
      { label: 'Conversion Rate', value: '4.8%' },
      { label: 'ROAS', value: '3.8x' }
    ]
  },
  {
    id: 'glow-skincare',
    title: 'Automating Customer Support for a Beauty Giant',
    client: 'Glow Skincare',
    category: 'AI Automation',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200',
    goals: [
      'Reduce support response time',
      'Automate lead qualification',
      'Lower operational costs'
    ],
    solutions: [
      'Custom AI Voice Agent for phone support',
      'Intelligent SMS follow-up system',
      'Integration with Shopify order data'
    ],
    results: [
      { label: 'Support Automated', value: '85%' },
      { label: 'Response Time', value: '< 1 min' },
      { label: 'Cost Savings', value: '60%' }
    ]
  },
  {
    id: 'urban-threads',
    title: '300% Increase in ROAS for Fashion Brand',
    client: 'Urban Threads',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200',
    goals: [
      'Improve ad creative performance',
      'Scale spend while maintaining ROAS',
      'Expand to international markets'
    ],
    solutions: [
      'UGC-focused ad creative strategy',
      'Advanced retargeting funnels',
      'Localization for EU markets'
    ],
    results: [
      { label: 'ROAS', value: '4.5x' },
      { label: 'New Customers', value: '12,000+' },
      { label: 'Market Reach', value: '15 Countries' }
    ]
  }
];

export const PRICING: PricingTier[] = [
  {
    name: 'Starter',
    price: '$997',
    period: 'project',
    description: 'Perfect for new brands looking to launch professionally.',
    features: [
      'Premium Shopify Setup',
      '5 Core Pages',
      'Essential App Setup',
      'Basic SEO',
      '14 Days Support'
    ]
  },
  {
    name: 'Growth',
    price: '$2,497',
    period: 'project',
    popular: true,
    description: 'For established businesses ready to scale aggressively.',
    features: [
      'Custom UI/UX Design',
      'Advanced Marketing Setup',
      'AI Chatbot Integration',
      'Conversion Rate Optimization',
      '30 Days Support'
    ],
    recommended: true
  },
  {
    name: 'Premium',
    price: 'Custom',
    period: 'project',
    description: 'Full-service enterprise solutions for market leaders.',
    features: [
      'Full AI Agent Ecosystem',
      'Omnichannel Marketing',
      'Custom App Development',
      'Dedicated Account Manager',
      'Priority 24/7 Support'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah J.',
    role: 'E-commerce Founder',
    content: 'Nexcypher transformed our store. Our conversion rate jumped by 40% in the first month!',
    rating: 5
  },
  {
    name: 'Michael R.',
    role: 'Dropshipping Expert',
    content: 'The AI agents they built for us handle 90% of our customer queries. Absolute game changer.',
    rating: 5
  },
  {
    name: 'David L.',
    role: 'Marketing Director',
    content: 'Best Shopify agency we have worked with. Their attention to detail is unmatched.',
    rating: 5
  }
];

export const FAQS = [
  {
    question: "How long does a typical Shopify project take?",
    answer: "Most premium store setups take between 2-4 weeks depending on the complexity and custom features required."
  },
  {
    question: "Do you offer ongoing marketing management?",
    answer: "Yes, we provide monthly management for Google Ads, Meta Ads, and TikTok Ads to ensure consistent ROAS."
  },
  {
    question: "What are AI calling agents?",
    answer: "AI calling agents are intelligent systems that can place or receive phone calls, handle inquiries, and book appointments just like a human assistant."
  },
  {
    question: "Can I hire you directly on Fiverr?",
    answer: "Absolutely! We have a strong presence on Fiverr with hundreds of 5-star reviews. You can find our profile here: https://www.fiverr.com/nexcypher_us"
  }
];
