import React, { Suspense, useEffect, useRef, useState } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  minHeight?: string;
  rootMargin?: string;
  className?: string;
}

/**
 * Defers mounting heavy below-the-fold lazy chunks until the user scrolls near
 * them, while holding a height-matched placeholder to prevent layout shift.
 */
export const LazySection: React.FC<LazySectionProps> = ({
  children,
  minHeight = '420px',
  rootMargin = '320px 0px',
  className = '',
}) => {
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (shouldRender) return;
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setShouldRender(true);
      return;
    }

    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldRender, rootMargin]);

  const placeholder = (
    <div
      style={{ minHeight }}
      className="w-full bg-background"
      aria-hidden="true"
    />
  );

  return (
    <div ref={containerRef} className={className}>
      {shouldRender ? (
        <Suspense fallback={placeholder}>{children}</Suspense>
      ) : (
        placeholder
      )}
    </div>
  );
};
