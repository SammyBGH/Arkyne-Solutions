import { useEffect, useState, useRef } from 'react';

/**
 * Custom hook for intersection observer
 * @param {Object} options - Intersection observer options
 * @returns {Array} - [ref, isIntersecting]
 */
export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options, hasIntersected]);

  return [ref, isIntersecting, hasIntersected];
};

/**
 * Hook for multiple intersection observers
 * @param {Array} elements - Array of element refs
 * @param {Object} options - Intersection observer options
 * @returns {Array} - Array of intersection states
 */
export const useMultipleIntersectionObserver = (elements, options = {}) => {
  const [intersections, setIntersections] = useState({});

  useEffect(() => {
    const observers = elements.map((element, index) => {
      if (!element.current) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIntersections(prev => ({
            ...prev,
            [index]: entry.isIntersecting
          }));
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
          ...options
        }
      );

      observer.observe(element.current);
      return observer;
    });

    return () => {
      observers.forEach(observer => {
        if (observer) observer.disconnect();
      });
    };
  }, [elements, options]);

  return intersections;
};

