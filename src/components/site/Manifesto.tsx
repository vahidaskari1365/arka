"use client";

import { Reveal, Stagger, StaggerItem, MaskLine } from "./Reveal";

const STATS = [
  { value: "۲۵+", label: "سال میراث سنگی" },
  { value: "۱۲۰۰+", label: "پروژهٔ نمای اجراشده" },
  { value: "۸۰+", label: "تنوع سنگِ منتخب" },
  { value: "۳", label: "معدن اختصاصی" },
];

export function Manifesto() {
  return (
    <section id="manifesto" className="relative py-20 md:py-32" aria-label="دربارهٔ آرکا">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        {/* Section index */}
        <Reveal>
          <div className="flex items-center gap-4 text-xs tracking-[0.3em] text-bone-dim mb-10 md:mb-16">
            <span className="text-voltage font-display font-bold">۰۱</span>
            <span className="h-px w-14 bg-hairline" aria-hidden="true" />
            مانیفست
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-display font-extrabold leading-[1.25] tracking-tight text-[clamp(1.7rem,3.6vw,3.2rem)]">
              <MaskLine>
                ما باور داریم نمایِ ساختمان،
              </MaskLine>
              <MaskLine delay={0.12}>
                <span className="text-voltage">نخستین گفت‌وگوی آن با شهر</span>
              </MaskLine>
              <MaskLine delay={0.24}>
                است — و این گفت‌وگو باید ماندگار باشد.
              </MaskLine>
            </h2>

            <Reveal delay={0.35} className="mt-8 md:mt-10">
              <p className="max-w-[62ch] text-bone-dim leading-8 md:leading-9 text-[15px] md:text-base">
                آرکا از یک سنگ‌بری کوچک در اصفهان آغاز شد؛ امروز با سه معدن
                اختصاصی، کارگاه CNC تمام‌اتوماتیک و تیم نصب تخصصی نما، همراه
                معماران ایران است. هر پروژه برای ما یک قرارداد نیست — یک اثر
                امضاشده است. به همین دلیل، هر بلوک قبل از برش با نور، آب و
                دستِ استادکار سنجیده می‌شود و رگه‌هایش، جهتِ چیدمان نما را
                تعیین می‌کنند.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.25} className="lg:col-span-5">
            <div className="relative">
              <div className="overflow-hidden">
                <img
                  src="/images/hero-facade.jpg"
                  alt="نمای نزدیک سنگ‌کاری ساختمان در حال اجرا"
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover img-treatment hover:scale-105 transition-transform duration-[1.2s]"
                />
              </div>
              <span aria-hidden="true" className="absolute -bottom-4 -right-4 hidden md:block w-24 h-24 border-b-2 border-r-2 border-voltage" />
              <div className="absolute top-4 right-4 bg-coal/75 backdrop-blur px-3.5 py-2 text-[11px] tracking-widest text-bone-dim border border-hairline">
                کارگاه سنگبری آرکا — اصفهان
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats — editorial, no cards */}
        <Stagger className="mt-16 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-y-10 border-t border-hairline">
          {STATS.map((s) => (
            <StaggerItem key={s.label} className="pt-8 md:pt-10 border-b lg:border-b-0 border-hairline lg:border-b-0">
              <div className="lg:border-l lg:border-hairline lg:first:border-l-0 lg:ps-0 px-1 lg:px-8 lg:first:ps-1">
                <div className="font-display font-black text-4xl md:text-6xl tracking-tight text-bone">
                  {s.value}
                </div>
                <div className="mt-2 text-xs md:text-sm text-bone-dim">{s.label}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
