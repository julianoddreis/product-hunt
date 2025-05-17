import { type RefObject, useCallback, useEffect, useState } from "react";

export function useIntersectionObserver(elementRef: RefObject<HTMLDivElement | null>) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observerCallback = useCallback<IntersectionObserverCallback>(([entry]) => {
    setIsIntersecting(entry.isIntersecting);
  }, []);

  useEffect(() => {
    if (elementRef.current === null) {
      return;
    }

    const target = elementRef.current;

    const observer = new IntersectionObserver(observerCallback, {
      threshold: [0],
    });

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [elementRef, observerCallback]);

  return { isIntersecting };
}
