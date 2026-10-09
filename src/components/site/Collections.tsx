"use client";

import { Reveal, MaskLine, Stagger, StaggerItem } from "./Reveal";
import { ArrowUpLeftIcon, PlusIcon } from "./Icons";

const STONES = [
  {
    n: "۰۱",
    name: "تراورتن",
    tag: "لایه‌های گرمِ کویر",
    desc: "حفره‌دار، موج‌دار، کرم تا شکلاتی؛ گزینهٔ همیشگی نماهای کلاسیک و مدرن ایران.",
    img: "/images/img-tt-1.jpg",
    alt: "بافت طبیعی سنگ تراورتن کرم",
    span: "md:col-span-7",
    ratio: "aspect-[4/3]",
  },
  {
    n: "۰۲",
    name: "مرمریت",
    tag: "ابریشمِ زیرزمین",
    desc: "رگه‌های ابریشمی و پولیش آینه‌ای؛ سنگی برای لابی‌ها و نماهایی که باید بدرخشند.",
    img: "/images/img-carrara-2.jpg",
    alt: "سنگ مرمریت سفید با رگه‌های خاکستری",
    span: "md:col-span-5 md:mt-24",
    ratio: "aspect-[3/4]",
  },
  {
    n: "۰۳",
    name: "گرانیت",
    tag: "استخوانِ ساختمان",
    desc: "مقاومت افسانه‌ای در برابر بارانِ اسیدی و آفتاب؛ انتخاب نماهای پرتردد شهری.",
    img: "/images/img-slabs-1.jpg",
    alt: "صفحات سنگ گرانیت و مرمریت در سنگبری",
    span: "md:col-span-5 md:-mt-12",
    ratio: "aspect-[3/4]",
  },
  {
    n: "۰۴",
    name: "کوارتزیت",
    tag: "شیشه‌ای از جنس کوه",
    desc: "درخشش مات و متالیک؛ کمیاب، متفاوت و ساخته‌شده برای نماهای آینده‌نگر.",
    img: "/images/img-carrara-3.jpg",
    alt: "کاشی‌های سنگ مرمریت سفید کارارا",
    span: "md:col-span-7 md:mt-10",
    ratio: "aspect-[4/3]",
  },
];

export function Collections() {
  return (
    <section id="collections" className="relative py-20 md:py-32" aria-label="کلکسیون سنگ‌ها">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <div className="flex items-center gap-4 text-xs tracking-[0.3em] text-bone-dim mb-10 md:mb-14">
            <span className="text-voltage font-display font-bold">۰۲</span>
            <span className="h-px w-14 bg-hairline" aria-hidden="true" />
            کلکسیون
          </div>
        </Reveal>

        <div className="flex flex-wrap items-end justify-between gap-6 mb-12 md:mb-20">
          <h2 className="font-display font-black tracking-tight leading-[1.1] text-[clamp(2.2rem,5.5vw,4.5rem)]">
            <MaskLine>چهار روایت</MaskLine>
            <MaskLine delay={0.15}>
              <span className="text-stroke">از جنس خاک و آتش</span>
            </MaskLine>
          </h2>
          <Reveal delay={0.3}>
            <p className="max-w-[38ch] text-bone-dim leading-8 text-sm md:text-base">
              هر خانوادهٔ سنگ، شخصیت متفاوتی دارد؛ ما کارشناسی می‌کنیم تا
              شخصیتِ نما با روحِ پروژه یکی باشد.
            </p>
          </Reveal>
        </div>

        {/* Asymmetric editorial grid */}
        <Stagger className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-14 md:gap-y-8">
          {STONES.map((s) => (
            <StaggerItem key={s.n} className={`group ${s.span}`}>
              <a href="#contact" className="block" aria-label={`سفارش سنگ ${s.name}`}>
                <div className={`relative overflow-hidden ${s.ratio}`}>
                  <img
                    src={s.img}
                    alt={s.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover img-treatment transition-transform duration-[1.4s] ease-out group-hover:scale-[1.07]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-coal/85 via-coal/10 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"
                  />
                  {/* index */}
                  <span className="absolute top-4 right-4 font-display font-black text-voltage text-lg md:text-xl" aria-hidden="true">
                    {s.n}
                  </span>
                  {/* hover plus */}
                  <span
                    aria-hidden="true"
                    className="absolute top-4 left-4 grid place-items-center size-10 border border-bone/25 text-bone bg-coal/40 backdrop-blur-sm opacity-0 -rotate-45 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-500"
                  >
                    <PlusIcon className="size-4" />
                  </span>
                  {/* bottom copy */}
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                    <p className="text-[11px] md:text-xs tracking-[0.25em] text-voltage mb-2">
                      {s.tag}
                    </p>
                    <h3 className="font-display font-black text-2xl md:text-4xl tracking-tight">
                      {s.name}
                    </h3>
                    <p className="mt-2 max-w-[46ch] text-xs md:text-sm text-bone-dim leading-6 md:leading-7 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      {s.desc}
                    </p>
                  </div>
                  {/* yellow underline sweep */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 right-0 h-1 w-0 bg-voltage group-hover:w-full transition-all duration-700 ease-out"
                  />
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-14 md:mt-20">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-sm md:text-base font-medium text-bone hover:text-voltage transition-colors"
          >
            <span className="grid place-items-center size-11 border border-hairline group-hover:border-voltage group-hover:bg-voltage group-hover:text-coal transition-all duration-300">
              <ArrowUpLeftIcon className="size-4" />
            </span>
            درخواست کاتالوگ کامل ۸۰+ نوع سنگ
          </a>
        </Reveal>
      </div>
    </section>
  );
}
