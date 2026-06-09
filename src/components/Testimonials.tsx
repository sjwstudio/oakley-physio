"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Testimonials({ items }: { items: string[] }) {
  const [index, setIndex] = useState(0);
  const count = items.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count],
  );

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 6500);
    return () => clearInterval(id);
  }, [count]);

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="relative min-h-[320px] overflow-hidden rounded-4xl border border-black/5 bg-white p-8 shadow-sm sm:min-h-[280px] sm:p-12">
        <div className="flex gap-0.5 text-orange" aria-hidden>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>&#9733;</span>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mt-5"
          >
            <p className="text-lg leading-relaxed text-charcoal sm:text-xl">{items[index]}</p>
            <footer className="mt-6 text-sm font-semibold text-orange">
              Verified Patient Review
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => go(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-colors hover:border-orange hover:text-orange"
        >
          &larr;
        </button>
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-7 bg-orange" : "w-2 bg-charcoal/20 hover:bg-charcoal/40"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => go(1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-colors hover:border-orange hover:text-orange"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}
