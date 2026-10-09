"use client";

import { Reveal, MaskLine } from "./Reveal";

export function Quote() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden" aria-label="دیدگاه آرکا">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <span className="font-display font-black text-[26vw] leading-none text-stroke opacity-[0.06] select-none">
          سنگ
        </span>
      </div>

      <div className="relative mx-auto max-w-[1000px] px-5 md:px-10 text-center">
        <Reveal>
          <span aria-hidden="true" className="inline-block font-display font-black text-6xl md:text-7xl text-voltage leading-none mb-6">
            ”
          </span>
        </Reveal>
        <blockquote className="font-display font-extrabold leading-[1.5] md:leading-[1.6] tracking-tight text-[clamp(1.4rem,3.2vw,2.6rem)]">
          <MaskLine>نما، اولین گفت‌وگوی ساختمان با شهر است؛</MaskLine>
          <MaskLine delay={0.15}>
            ما این گفت‌وگو را <span className="text-voltage">با سنگ</span> می‌نویسیم.
          </MaskLine>
        </blockquote>
        <Reveal delay={0.35}>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs md:text-sm text-bone-dim tracking-[0.25em]">
            <span className="h-px w-10 bg-hairline" aria-hidden="true" />
            تیم معماران آرکا استون
            <span className="h-px w-10 bg-hairline" aria-hidden="true" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
