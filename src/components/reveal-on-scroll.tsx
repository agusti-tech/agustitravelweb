"use client";

import { useEffect, useRef, type ReactNode, createElement } from "react";
import { cn } from "@/lib/utils";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  as?: string;
};

const delayClass: Record<number, string> = {
  0: "",
  1: "reveal-delay-1",
  2: "reveal-delay-2",
  3: "reveal-delay-3",
  4: "reveal-delay-4",
};

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    { ref, className: cn("reveal", delayClass[delay], className) },
    children,
  );
}
