// Centralized route chunk importers so React.lazy and hover/focus prefetching share identical chunks.
export const routeImporters = {
  '/about': () => import('../pages/About'),
  '/services': () => import('../pages/Services'),
  '/ai-calling-agents': () => import('../pages/AiCallingAgents'),
  '/shopify-marketing': () => import('../pages/ShopifyMarketing'),
  '/shopify-growth': () => import('../pages/ShopifyGrowth'),
  '/portfolio': () => import('../pages/Portfolio'),
  '/sales-video-proof': () => import('../pages/SalesVideoProof'),
  '/results': () => import('../pages/Results'),
  '/pricing': () => import('../pages/Pricing'),
  '/contact': () => import('../pages/Contact'),
  '/thank-you': () => import('../pages/ThankYou'),
  '/terms': () => import('../pages/Terms'),
  '/privacy': () => import('../pages/Privacy'),
  '/start-here': () => import('../pages/StartHere'),
  '/case-studies': () => import('../pages/CaseStudies'),
  '/process': () => import('../pages/Process'),
  '/faq': () => import('../pages/FAQ'),
  '/reviews': () => import('../pages/Reviews'),
  '/book-call': () => import('../pages/BookCall'),
  '/blog': () => import('../pages/Blog'),
  '/cookie-policy': () => import('../pages/CookiePolicy'),
  '/disclaimer': () => import('../pages/Disclaimer'),
  '/refund-policy': () => import('../pages/RefundPolicy'),
  '/ai-demo': () => import('../pages/AiDemo'),
  '/ai-features': () => import('../pages/AiFeatures'),
  '/store-audit': () => import('../pages/StoreAudit'),
  '/niche-research': () => import('../pages/NicheResearch'),
  '/store-design-gallery': () => import('../pages/StoreDesignGallery'),
  '/industries': () => import('../pages/Industries'),
} as const;

export type PrefetchableRoute = keyof typeof routeImporters;

const prefetched = new Set<string>();

export function prefetchRoute(path: string): void {
  if (prefetched.has(path)) return;
  const loader = routeImporters[path as PrefetchableRoute];
  if (!loader) return;
  prefetched.add(path);
  loader().catch(() => {
    prefetched.delete(path);
  });
}
