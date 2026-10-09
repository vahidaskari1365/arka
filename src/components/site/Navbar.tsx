"use client";

import { useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { MenuIcon, CloseIcon, ArrowIcon } from "./Icons";

const LINKS = [
  { href: "#collections", label: "کلکسیون" },
  { href: "#process", label: "فرآیند" },
  { href: "#projects", label: "پروژه‌ها" },
  { href: "#contact", label: "تماس" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-40 transition-colors duration-500 ${
          scrolled
            ? "bg-coal/85 backdrop-blur-md border-b border-hairline"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 h-16 md:h-20 flex items-center justify-between gap-6">
          {/* Brand */}
          <a href="#top" className="flex items-center gap-3 group" aria-label="آرکا استون — خانه">
            <span className="relative grid place-items-center size-9 md:size-10 bg-voltage text-coal">
              <svg viewBox="0 0 24 24" className="size-5 md:size-6" fill="currentColor" aria-hidden="true">
                <path d="M12 3 4 21h3.4l1.5-3.6h6.2L16.6 21H20L12 3zm-1.9 11.6L12 9.8l1.9 4.8h-3.8z" />
              </svg>
            </span>
            <span className="leading-none">
              <span className="block font-display font-black text-base md:text-lg tracking-tight">
                آرکا استون
              </span>
              <span className="block text-[10px] tracking-[0.3em] text-bone-dim font-medium">
                ARKA STONE
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="ناوبری اصلی">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm text-bone-dim hover:text-bone transition-colors duration-300 after:absolute after:-bottom-1.5 after:right-0 after:h-px after:w-0 after:bg-voltage after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2.5 border border-hairline px-5 py-2.5 text-sm font-medium text-bone hover:bg-voltage hover:text-coal hover:border-voltage transition-all duration-300 active:scale-[0.98]"
            >
              درخواست مشاوره
              <ArrowIcon className="size-4" />
            </a>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden grid place-items-center size-11 border border-hairline text-bone"
              aria-label="باز کردن منو"
            >
              <MenuIcon className="size-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 bg-coal flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            <div className="h-16 px-5 flex items-center justify-between border-b border-hairline">
              <span className="font-display font-black">آرکا استون</span>
              <button
                onClick={() => setOpen(false)}
                className="grid place-items-center size-11 border border-hairline"
                aria-label="بستن منو"
              >
                <CloseIcon className="size-5" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-8 gap-2" aria-label="منوی موبایل">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  className="font-display font-black text-4xl py-3 border-b border-hairline flex items-center justify-between text-bone hover:text-voltage transition-colors"
                >
                  {l.label}
                  <span className="text-sm text-bone-dim font-body">0{i + 1}</span>
                </motion.a>
              ))}
            </nav>
            <div className="p-8 text-sm text-bone-dim">
              تهران، جادهٔ مخصوص، شهرک سنگ، سالن ۱۲
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
