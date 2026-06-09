"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { img, nav, site } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.07)]" : "border-b border-black/5"
      }`}
    >
      <div className="container-x flex h-[76px] items-center justify-between">
        <Link href="/" aria-label="Oakley Physio home" className="flex items-center">
          <Image
            src={img.logo}
            alt="Oakley Physio"
            width={190}
            height={38}
            unoptimized
            priority
            style={{ objectFit: "contain" }}
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 text-sm font-medium transition-colors ${
                  active ? "text-orange" : "text-charcoal hover:text-orange"
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-orange"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link href="/appointments" className="btn-primary !py-2.5 !px-5">
            Book an Appointment
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-charcoal lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <motion.span
              className="absolute left-0 block h-0.5 w-5 rounded bg-charcoal"
              animate={open ? { rotate: 45, top: 7 } : { rotate: 0, top: 0 }}
              style={{ top: 0 }}
            />
            <motion.span
              className="absolute left-0 top-[7px] block h-0.5 w-5 rounded bg-charcoal"
              animate={open ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="absolute left-0 block h-0.5 w-5 rounded bg-charcoal"
              animate={open ? { rotate: -45, top: 7 } : { rotate: 0, top: 14 }}
              style={{ top: 14 }}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-black/5 bg-white lg:hidden"
          >
            <nav className="container-x flex flex-col gap-1 py-5">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={item.href}
                    className={`block rounded-xl px-4 py-3 text-base font-medium ${
                      isActive(item.href)
                        ? "bg-orange/10 text-orange"
                        : "text-charcoal"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Link href="/appointments" className="btn-primary mt-3 w-full">
                Book an Appointment
              </Link>
              <a href={site.phoneHref} className="btn-outline-dark mt-2 w-full">
                {site.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
