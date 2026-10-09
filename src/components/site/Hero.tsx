"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MaskLine } from "./Reveal";
import { ArrowIcon } from "./Icons";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100dvh] flex flex-col overflow-hidden"
      aria-label="معرفی آرکا استون"
    >
      {/* background hairline grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to left, var(--color-hairline) 1px, transparent 1px)",
          backgroundSize: "25% 100%",
        }}
      />

      <div className="relative flex-1 mx-auto w-full max-w-[1400px] px-5 md:px-10 pt-28 md:pt-36 pb-16 md:pb-20 grid lg:grid-cols-12 gap-10 items-center">
        {/* ——— Copy ——— */}
        <motion.div style={{ y: textY }} className="lg:col-span-7 relative z-10">
          <MaskLine delay={0.35}>
            <span className="inline-flex items-center gap-3 text-xs md:text-sm tracking-[0.25em] text-bone-dim mb-6 md:mb-9">
              <span className="size-1.5 bg-voltage animate-pulse-soft" aria-hidden="true" />
              اتلیهٔ مهندسی سنگِ نما — از ۱۳۷۹
            </span>
          </MaskLine>

          <h1 className="font-display font-black leading-[1.04] tracking-tight text-[clamp(2.9rem,8.5vw,7.5rem)]">
            <MaskLine delay={0.45}>سنگ، روحِ نماست؛</MaskLine>
            <MaskLine delay={0.6}>
              <span className="text-stroke-voltage">ما آن را حک می‌کنیم.</span>
            </MaskLine>
          </h1>

          <MaskLine delay={0.8} className="mt-7 md:mt-10">
            <p className="max-w-[58ch] text-bone-dim leading-8 md:leading-9 text-[15px] md:text-lg">
              از قلب معادن تراورتنِ ایران تا آخرین اسکوپِ نصب — آرکا، سنگِ نما را
              نه به‌عنوان مصالح، بلکه به‌عنوان امضای یک اثر معماری مهندسی
              می‌کند. هر بلوک، یک بار در جهان بریده می‌شود.
            </p>
          </MaskLine>

          <MaskLine delay={0.95} className="mt-9 md:mt-12">
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <a
                href="#collections"
                className="group inline-flex items-center gap-3 bg-voltage text-coal font-display font-extrabold text-sm md:text-base px-7 md:px-9 py-4 hover:bg-bone transition-colors duration-300 active:scale-[0.98]"
              >
                مشاهدهٔ کلکسیون
                <ArrowIcon className="size-5 transition-transform duration-300 group-hover:-translate-x-1" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-3 border border-hairline px-7 md:px-9 py-4 font-medium text-sm md:text-base text-bone hover:border-voltage hover:text-voltage transition-colors duration-300 active:scale-[0.98]"
              >
                پروژه‌های ما
              </a>
            </div>
          </MaskLine>
        </motion.div>

        {/* ——— Visual ——— */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.5, ease: EASE }}
          className="lg:col-span-5 relative"
        >
          <div className="relative overflow-hidden aspect-[3/4] max-h-[70dvh] w-full lg:ms-auto lg:max-w-[420px]">
            <motion.img
              src="/images/img-bm-1.jpg"
              alt="سطح مرمریت سیاه با رگه‌های طلایی — کلکسیون آرکا استون"
              style={{ y: imgY }}
              className="absolute inset-0 h-[115%] w-full object-cover img-treatment animate-kenburns"
              fetchPriority="high"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-coal/60 via-transparent to-coal/20"
            />
            {/* corner ticks */}
            <span aria-hidden="true" className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-voltage" />
            <span aria-hidden="true" className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-voltage" />
            {/* floating tag */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: EASE }}
              className="absolute bottom-5 right-5 left-5 flex items-end justify-between"
            >
              <div className="bg-coal/70 backdrop-blur-md border border-hairline px-4 py-3">
                <p className="text-[11px] tracking-[0.2em] text-bone-dim">کلکسیون شمارهٔ ۰۷</p>
                <p className="font-display font-bold text-sm md:text-base mt-1">
                  مرمریتِ رگه‌طلایی
                </p>
              </div>
              <span className="text-voltage font-display font-black text-2xl md:text-3xl">۰۷</span>
            </motion.div>
          </div>

          {/* vertical caption */}
          <span
            aria-hidden="true"
            className="vertical-text hidden lg:block absolute top-1/2 -translate-y-1/2 -left-12 text-[10px] text-bone-dim/70 uppercase"
          >
            ARKA STONE — FACADE ATELIER
          </span>
        </motion.div>
      </div>

      {/* bottom meta bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="relative border-t border-hairline"
      >
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-4 md:py-5 flex items-center justify-between text-[11px] md:text-xs text-bone-dim tracking-widest">
          <span>اصفهان · تهران · شیراز</span>
          <span className="hidden md:inline">N 32.6546° — E 51.6680°</span>
          <a href="#manifesto" className="flex items-center gap-2 hover:text-voltage transition-colors" aria-label="اسکرول به پایین">
            اسکرول کنید
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <ArrowIcon className="size-4 rotate-[-90deg]" />
            </motion.span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
