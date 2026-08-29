import { useEffect, useRef } from "react";

export function useReveal(visibleClass) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add(visibleClass);
        }),
      { threshold: 0.12 },
    );
    const els = ref.current?.querySelectorAll("[data-reveal]");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [visibleClass]);
  return ref;
}
