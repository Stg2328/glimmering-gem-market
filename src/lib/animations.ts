
import { useEffect, useState, useRef } from 'react';

// Hook to animate elements when they come into view
export function useInView(options = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, { rootMargin: '0px 0px -100px 0px', threshold: 0.1, ...options });
    
    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
      return () => {
        observer.unobserve(currentRef);
      };
    }
  }, [options]);
  
  return { ref, isInView };
}

// Staggered animation for child elements
export const staggeredAnimationClass = (index: number, baseClass: string) => {
  const delay = Math.min(index * 100, 500);
  return `${baseClass} animate-delay-${delay}`;
};

// Hook to handle image loading with blur effect
export function useImageLoad() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  
  return { isLoaded, handleImageLoad };
}
