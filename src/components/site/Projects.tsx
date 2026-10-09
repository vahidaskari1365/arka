"use client";

import { Reveal, MaskLine, Stagger, StaggerItem } from "./Reveal";
import { ArrowUpLeftIcon } from "./Icons";

const PROJECTS = [
  {
    img: "/images/img-villa-1.jpg",
    alt: "ویلای لاکچری با نمای سنگ تراورتن کرم",
    title: "ویلاسارای زعفرانیه",
    meta: "تراورتن موج‌دار — ۲۴۰۰ متر مربع",
    year: "۱۴۰۳",
    cls: "md:col-span-4",
    ratio: "aspect-[3/4]",
  },
  {
    img: "/images/img-villa-3.jpg",
    alt: "خانهٔ شهری با نمای سنگ در نور شب",
    title: "اقامتگاه کویر",
    meta: "مرمریت تیشه‌ای — ۱۹۰۰ متر مربع",
    year: "۱۴۰۲",
    cls: "md:col-span-4 md:translate-y-12",
    ratio: "aspect-[3/4]",
  },
  {
    img: "/images/facade-wide.jpg",
    alt: "نمای پهن ساختمان مدرن با سنگ طبیعی",
    title: "برج مسکونی مروارید",
    meta: "گرانیت جلا — ۵۸۰۰ متر مربع",
    year: "۱۴۰۱",
    cls: "md:col-span-4",
    ratio: "aspect-[3/4]",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-32" aria-label="پروژه‌های منتخب">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <div className="flex items-center gap-4 text-xs tracking-[0.3em] text-bone-dim mb-10 md:mb-14">
            <span className="text-voltage font-display font-bold">۰۴</span>
            <span className="h-px w-14 bg-hairline" aria-hidden="true" />
            پروژه‌های منتخب
          </div>
        </Reveal>

        <div className="flex flex-wrap items-end justify-between gap-6 mb-12 md:mb-24">
          <h2 className="font-display font-black tracking-tight leading-[1.1] text-[clamp(2.2rem,5.5vw,4.5rem)]">
            <MaskLine>نماهایی که</MaskLine>
            <MaskLine delay={0.15}>
              <span className="text-stroke-voltage">شهر می‌شناسد</span>
            </MaskLine>
          </h2>
          <Reveal delay={0.3}>
            <p className="max-w-[36ch] text-bone-dim leading-8 text-sm md:text-base">
              از زعفرانیه تا کیش؛ گزیده‌ای از پروژه‌هایی که سنگِ آرکا، امضایشان
              را زده‌اند.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 md:pb-12">
          {PROJECTS.map((p) => (
            <StaggerItem key={p.title} className={`group ${p.cls}`}>
              <a href="#contact" className="block" aria-label={`پروژه ${p.title}`}>
                <div className={`relative overflow-hidden ${p.ratio}`}>
                  <img
                    src={p.img}
                    alt={p.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover img-treatment transition-transform duration-[1.5s] ease-out group-hover:scale-[1.08]"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-coal/85 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-coal/70 backdrop-blur border border-hairline px-3 py-1.5 text-[11px] tracking-widest text-bone-dim">
                    {p.year}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute top-4 right-4 grid place-items-center size-11 bg-voltage text-coal opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"
                  >
                    <ArrowUpLeftIcon className="size-5" />
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <h3 className="font-display font-extrabold text-xl md:text-2xl tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-[11px] md:text-xs tracking-[0.2em] text-bone-dim">
                      {p.meta}
                    </p>
                  </div>
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
