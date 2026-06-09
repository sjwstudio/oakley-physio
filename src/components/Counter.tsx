"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

export default function Counter({ value, suffix = "", duration = 1600 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const start = () => {
      if (started.current) return;
      started.current = true;

      const steps = 40;
      const stepTime = Math.max(Math.round(duration / steps), 20);
      const increment = value / steps;
      let current = 0;

      const id = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplay(value);
          clearInterval(id);
        } else {
          setDisplay(Math.round(current));
        }
      }, stepTime);
    };

    if (typeof IntersectionObserver === "undefined") {
      start();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            start();
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
