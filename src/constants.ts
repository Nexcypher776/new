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
    thumbnail: 'https://vumbnail.com/1111080035.jpg',
    videoUrl: 'https://vimeo.com/1111080035'
  },
  {
    id: '2',
    clientName: 'James Robot',
    result: 'Conversion Rate Doubled',
    thumbnail: 'https://vumbnail.com/1110647582.jpg',
    videoUrl: 'https://vimeo.com/1110647582'
  }
];

export const SALES_VIDEO_PROOFS: VideoTestimonial[] = [
  {
    id: '4',
    clientName: 'Client Proof 1',
    result: 'Massive Growth',
    thumbnail: 'https://img.youtube.com/vi/y8368bBGgpY/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=y8368bBGgpY'
  },
  {
    id: '5',
    clientName: 'Client Proof 2',
    result: 'Sales Scaled',
    thumbnail: 'https://img.youtube.com/vi/OxZj9cUzWVs/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=OxZj9cUzWVs'
  },
  {
    id: '6',
    clientName: 'Client Proof 3',
    result: 'Store Optimization',
    thumbnail: 'https://img.youtube.com/vi/69i5JIwcJMY/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=69i5JIwcJMY'
  },
  {
    id: '7',
    clientName: 'Client Proof 4',
    result: 'Record Revenue',
    thumbnail: 'https://img.youtube.com/vi/S1c1LC3Osow/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=S1c1LC3Osow'
  },
  {
    id: '8',
    clientName: 'Client Proof 5',
    result: 'AI Automation Success',
    thumbnail: 'https://img.youtube.com/vi/zrAq35KPyTM/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=zrAq35KPyTM'
  },
  {
    id: '9',
    clientName: 'Client Proof 6',
    result: 'High-Converting Store',
    thumbnail: 'https://img.youtube.com/vi/75fGFBGlfWA/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=75fGFBGlfWA'
  },
  {
    id: '10',
    clientName: 'Client Proof 7',
    result: 'Incredible ROAS',
    thumbnail: 'https://img.youtube.com/vi/_1hrbBRmao8/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=_1hrbBRmao8'
  },
  {
    id: '11',
    clientName: 'Client Proof 8',
    result: 'Conversion Rate Skyrocketed',
    thumbnail: 'https://img.youtube.com/vi/4NBIcn4oEt8/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=4NBIcn4oEt8'
  },
  {
    id: '12',
    clientName: 'Client Proof 9',
    result: 'Shorts Growth',
    thumbnail: 'https://img.youtube.com/vi/n0R18yoOfGU/hqdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/n0R18yoOfGU'
  },
  {
    id: '13',
    clientName: 'Client Proof 10',
    result: 'Sales Scaled',
    thumbnail: 'https://img.youtube.com/vi/pn0oiLvQrR0/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/shorts/pn0oiLvQrR0'
  },
  {
    id: '14',
    clientName: 'Client Proof 11',
    result: 'High Conversions',
    thumbnail: 'https://img.youtube.com/vi/EHBhSkxBjuQ/hqdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/EHBhSkxBjuQ'
  },
  {
    id: '15',
    clientName: 'Client Proof 12',
    result: 'Epic ROAS',
    thumbnail: 'https://img.youtube.com/vi/PmHyw85xEbY/hqdefault.jpg',
    videoUrl: 'https://youtu.be/PmHyw85xEbY'
  },
  {
    id: '16',
    clientName: 'Client Proof 13',
    result: 'Revenue Surge',
    thumbnail: 'https://img.youtube.com/vi/lbF_lyBoM6Y/hqdefault.jpg',
    videoUrl: 'https://youtu.be/lbF_lyBoM6Y'
  },
  {
    id: '17',
    clientName: 'Client Proof 14',
    result: 'Brand Expansion',
    thumbnail: 'https://img.youtube.com/vi/Ru_WM3jt5A8/hqdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/Ru_WM3jt5A8'
  },
  {
    id: '18',
    clientName: 'Client Proof 15',
    result: 'Record Profits',
    thumbnail: 'https://img.youtube.com/vi/Zx4z2bgeYeE/hqdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/Zx4z2bgeYeE'
  },
  {
    id: '19',
    clientName: 'Client Proof 16',
    result: 'Unmatched Scale',
    thumbnail: 'https://img.youtube.com/vi/kYxoee_38IQ/hqdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/kYxoee_38IQ'
  },
  {
    id: '20',
    clientName: 'Client Proof 17',
    result: 'Crazy Metrics',
    thumbnail: 'https://img.youtube.com/vi/IkgclcT4_7E/hqdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/IkgclcT4_7E'
  },
  {
    id: '21',
    clientName: 'Client Proof 18',
    result: 'Global Expansion',
    thumbnail: 'https://img.youtube.com/vi/-JOPzvZk6Pg/hqdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/-JOPzvZk6Pg'
  },
  {
    id: '22',
    clientName: 'Client Proof 19',
    result: 'Massive Output',
    thumbnail: 'https://img.youtube.com/vi/q9aEd-tEeGo/hqdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/q9aEd-tEeGo'
  },
  {
    id: '23',
    clientName: 'Client Proof 20',
    result: 'Consistent Sales',
    thumbnail: 'https://img.youtube.com/vi/chA_udI5M2U/hqdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/chA_udI5M2U'
  },
  {
    id: '24',
    clientName: 'Client Proof 21',
    result: 'Rapid Growth',
    thumbnail: 'https://img.youtube.com/vi/HmEPYr0pKJY/hqdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/HmEPYr0pKJY'
  },
  {
    id: '25',
    clientName: 'Client Proof 22',
    result: 'Peak Performance',
    thumbnail: 'https://img.youtube.com/vi/S6BEq7Jruok/hqdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/S6BEq7Jruok'
  }
];

export const SALES_PROOFS: SalesProof[] = [
  {
    id: '1',
    title: '$12,450 Revenue in 30 Days',
    label: 'Shopify Sales',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=75&w=800',
    description: 'Complete store overhaul and marketing strategy.'
  },
  {
    id: '2',
    title: '4.2x ROAS on TikTok Ads',
    label: 'ROAS 4.2x',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=75&w=800',
    description: 'Aggressive scaling with creative ad content.'
  },
  {
    id: '3',
    title: '$8,200 in First 14 Days',
    label: 'Google Ads Result',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=75&w=800',
    description: 'Targeted search campaigns for high-intent buyers.'
  }
];

export const BEAUTY_IMAGES = [
  "https://kommodo.ai/i/4Fo50lycWFsPkGqN2Qp4",
  "https://kommodo.ai/i/rHRSDBx5OY6RlbTMwXX9",
  "https://kommodo.ai/i/WJrC7qv9PTEach7hKnUK",
  "https://kommodo.ai/i/KHTBsFEmnvxvbKRqptTU",
  "https://kommodo.ai/i/ttjAsv6XpnTdiKzaTG50",
  "https://kommodo.ai/i/ZP9eA75UGJoxZSy7ikvg",
  "https://kommodo.ai/i/vk1s8AOE3fuZitf7sHPi",
  "https://kommodo.ai/i/GJDPWgWcXtyJYBGH7fXP",
  "https://kommodo.ai/i/rPqJeG3J3CtkncBK9FJQ",
  "https://kommodo.ai/i/LZnKKDFO97LPaBbQe336"
];

export const NICHE_PROJECTS: NicheProject[] = [
  {
    id: 'pet',
    niche: 'Pet Store',
    category: 'Shopify Dev',
    description: 'High-converting pet store with winning products.',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=75&w=800'
  },
  {
    id: 'fashion',
    niche: 'Fashion',
    category: 'Marketing',
    description: 'Premium apparel brand with seamless UX.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=75&w=800'
  },
  {
    id: 'tech',
    niche: 'Tech & Gadgets',
    category: 'AI Automation',
    description: 'Futuristic electronics store with AI support.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=75&w=800'
  },
  {
    id: 'home',
    niche: 'Home Decor',
    category: 'Shopify Dev',
    description: 'Elegant interior design shop with high AOV.',
    image: 'https://images.unsplash.com/photo-1513519247388-4e282a142d62?auto=format&fit=crop&q=75&w=800'
  },
  {
    id: 'fitness',
    niche: 'Fitness / Gym',
    category: 'Marketing',
    description: 'Performance-driven supplement and gear store.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=75&w=800'
  },
  {
    id: 'beauty',
    niche: 'Beauty / Skincare',
    category: 'AI Automation',
    description: 'Clean aesthetic skincare brand with subscription model.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=75&w=800'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'pet-empire',
    title: 'Scaling a Pet Brand from $0 to $50k/Month',
    client: 'Pet Empire',
    category: 'Shopify Dev & Marketing',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=75&w=1000',
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
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=75&w=1000',
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
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=75&w=1000',
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
    answer: "Absolutely! We have a strong presence on Fiverr with hundreds of 5-star reviews. You can find our profile here: https://www.fiverr.com/nexcypher_uk"
  }
];
