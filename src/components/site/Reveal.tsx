"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Standard scroll-into-view reveal. */
export function Reveal({
  children,
  delay = 0,
  y = 44,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Masked line reveal — text slides up from behind an overflow mask.
 * IMPORTANT: whileInView lives on the (untransformed) mask element, not on
 * the translated child. IntersectionObserver clips through `overflow:hidden`
 * ancestors, so observing the translated child itself would never fire.
 */
export function MaskLine({
  children,
  delay = 0,
  className,
  innerClassName,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <motion.span
      className={`block overflow-hidden ${className ?? ""}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.99 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.001, delayChildren: delay } },
      }}
    >
      <motion.span
        className={`block will-change-transform ${innerClassName ?? ""}`}
        variants={{
          hidden: { y: "115%" },
          show: { y: "0%", transition: { duration: 1, ease: EASE } },
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

/** Stagger container — pair with <StaggerItem/>. */
export function Stagger({
  children,
  className,
  gap = 0.12,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.85, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
