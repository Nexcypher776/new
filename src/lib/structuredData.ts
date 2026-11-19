export interface JsonLdNode {
  '@type': string | string[];
  '@id'?: string;
  [key: string]: unknown;
}

export interface JsonLdGraph {
  '@context': 'https://schema.org';
  '@graph': JsonLdNode[];
}

const SITE_URL = 'https://nexcypher.us';
const BUSINESS_ID = `${SITE_URL}/#localbusiness`;
const OG_IMAGE_URL = `${SITE_URL}/og-image.jpg`;
const LOGO_URL = `${SITE_URL}/favicon-32x32.png`;
const PRICE_VALID_UNTIL = '2026-12-31';

/**
 * Schema.org LocalBusiness structured data for Nexcypher.
 * Reflects verified agency details, London headquarters, global service areas,
 * and client review ratings.
 */
export const LOCAL_BUSINESS_SCHEMA: JsonLdNode = {
  '@type': 'LocalBusiness',
  '@id': BUSINESS_ID,
  name: 'Nexcypher',
  alternateName: 'Nexcypher Shopify & AI Agency',
  description:
    'High-converting Shopify 2.0 store development, conversion rate optimization, Klaviyo lifecycle automation, and autonomous AI voice calling agents engineered for scaling e-commerce brands.',
  url: SITE_URL,
  logo: LOGO_URL,
  image: OG_IMAGE_URL,
  email: 'nexucipher@gmail.com',
  telephone: '+44 7465 616990',
  priceRange: '$$$',
  currenciesAccepted: 'USD, GBP, EUR',
  paymentAccepted: 'Credit Card, Bank Transfer, Fiverr Escrow',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'London',
    addressRegion: 'Greater London',
    addressCountry: 'GB',
  },
  areaServed: [
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'AdministrativeArea', name: 'Worldwide' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+44 7465 616990',
      email: 'nexucipher@gmail.com',
      contactType: 'sales',
      availableLanguage: ['English'],
    },
  ],
  sameAs: ['https://www.fiverr.com/nexcypher_uk'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '1000',
    bestRating: '5',
    worstRating: '1',
  },
};

/**
 * Schema.org Product structured data for Nexcypher's core Shopify 2.0
 * and Autonomous AI Voice Agent productized service packages.
 */
export const PRODUCT_SCHEMAS: JsonLdNode[] = [
  {
    '@type': 'Product',
    '@id': `${SITE_URL}/pricing#product-starter-shopify`,
    name: 'Nexcypher Starter Shopify 2.0 Store Package',
    sku: 'NEX-SHOPIFY-STARTER',
    category: 'Shopify E-Commerce Development',
    description:
      'Complete conversion-ready Shopify 2.0 storefront featuring 5 core pages, essential app setup, technical SEO foundation, and 14 days of dedicated post-launch support.',
    image: OG_IMAGE_URL,
    brand: {
      '@type': 'Brand',
      name: 'Nexcypher',
    },
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}/pricing`,
      priceCurrency: 'USD',
      price: '997',
      priceValidUntil: PRICE_VALID_UNTIL,
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@id': BUSINESS_ID,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '380',
      bestRating: '5',
      worstRating: '1',
    },
  },
  {
    '@type': 'Product',
    '@id': `${SITE_URL}/pricing#product-growth-shopify-ai`,
    name: 'Nexcypher Growth Shopify 2.0 & AI Package',
    sku: 'NEX-SHOPIFY-GROWTH',
    category: 'Shopify Plus & Conversion Rate Optimization',
    description:
      'Bespoke Shopify 2.0 UI/UX store architecture with advanced Klaviyo email marketing flows, AI chatbot integration, speed & CRO engineering, and 30 days of priority support.',
    image: OG_IMAGE_URL,
    brand: {
      '@type': 'Brand',
      name: 'Nexcypher',
    },
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}/pricing`,
      priceCurrency: 'USD',
      price: '2497',
      priceValidUntil: PRICE_VALID_UNTIL,
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@id': BUSINESS_ID,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '470',
      bestRating: '5',
      worstRating: '1',
    },
  },
  {
    '@type': 'Product',
    '@id': `${SITE_URL}/ai-calling-agents#product-ai-voice-agent`,
    name: 'Nexcypher Autonomous AI Voice Calling Agent & Enterprise Suite',
    sku: 'NEX-AI-VOICE-ENTERPRISE',
    category: 'AI Voice Automation & Enterprise E-Commerce',
    description:
      '24/7 human-like autonomous AI voice calling agent and custom Shopify Plus engineering for automated inbound customer support, order tracking, abandoned cart recovery, and outbound lead qualification.',
    image: OG_IMAGE_URL,
    brand: {
      '@type': 'Brand',
      name: 'Nexcypher',
    },
    offers: {
      '@type': 'AggregateOffer',
      url: `${SITE_URL}/ai-calling-agents`,
      priceCurrency: 'USD',
      lowPrice: '2497',
      highPrice: '12500',
      offerCount: '3',
      availability: 'https://schema.org/InStock',
      seller: {
        '@id': BUSINESS_ID,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
  },
];

/**
 * Builds the combined LocalBusiness + Product JSON-LD @graph payload for sub-pages.
 * Associates the active sub-page canonical URL with the LocalBusiness entity.
 */
export function getSubPageStructuredData(pathname: string): JsonLdGraph {
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const cleanPath =
    normalizedPath.length > 1 && normalizedPath.endsWith('/')
      ? normalizedPath.slice(0, -1)
      : normalizedPath;
  const pageUrl = `${SITE_URL}${cleanPath}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...LOCAL_BUSINESS_SCHEMA,
        mainEntityOfPage: pageUrl,
      },
      ...PRODUCT_SCHEMAS,
    ],
  };
}
