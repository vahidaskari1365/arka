"use client";

import { Reveal, MaskLine, Stagger, StaggerItem } from "./Reveal";

const STEPS = [
  {
    n: "۰۱",
    title: "استخراج",
    desc: "بلوک‌های سالم و یکدست از سه معدن اختصاصی در اصفهان و یزد؛ با نقشهٔ رگه پیش از برش.",
  },
  {
    n: "۰۲",
    title: "برش CNC",
    desc: "خطوط برش تمام‌اتوماتیک با تلرانس نیم‌میلی‌متر؛ هر پلاک دقیقاً به اندازهٔ نقشهٔ نما.",
  },
  {
    n: "۰۳",
    title: "پرداخت",
    desc: "صیقل آینه‌ای، هونه، سابِ دوخت یا تیشه‌ای — پرداختِ سطح، به زبانِ معماری پروژه.",
  },
  {
    n: "۰۴",
    title: "نصب تخصصی",
    desc: "تیم نصب نما با اسکوپِ گالوانیزه و سیستم واترجت خشک؛ گارانتی ۱۰ سالهٔ نصب.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-20 md:py-32 bg-coal-2 border-y border-hairline" aria-label="فرآیند کار">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Copy + steps */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-4 text-xs tracking-[0.3em] text-bone-dim mb-10 md:mb-14">
                <span className="text-voltage font-display font-bold">۰۳</span>
                <span className="h-px w-14 bg-hairline" aria-hidden="true" />
                فرآیند
              </div>
            </Reveal>

            <h2 className="font-display font-black tracking-tight leading-[1.12] text-[clamp(2rem,4.8vw,3.8rem)]">
              <MaskLine>از کوه، تا نما</MaskLine>
              <MaskLine delay={0.15}>
                <span className="text-bone-dim">مسیر یک بلوک، تا امضای نهایی</span>
              </MaskLine>
            </h2>

            <Stagger className="mt-12 md:mt-16 divide-y divide-hairline border-t border-b border-hairline">
              {STEPS.map((s) => (
                <StaggerItem key={s.n}>
                  <div className="group flex items-baseline gap-5 md:gap-10 py-7 md:py-9 ps-2 md:ps-4 -ms-2 md:-ms-4 hover:bg-coal-3/60 transition-colors duration-300">
                    <span className="font-display font-black text-xl md:text-2xl text-bone-dim group-hover:text-voltage transition-colors duration-300 w-10 shrink-0">
                      {s.n}
                    </span>
                    <div>
                      <h3 className="font-display font-extrabold text-xl md:text-2xl tracking-tight mb-2 md:mb-3">
                        {s.title}
                      </h3>
                      <p className="max-w-[52ch] text-bone-dim text-sm md:text-base leading-7 md:leading-8">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Sticky visual */}
          <Reveal delay={0.2} className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="relative overflow-hidden aspect-[4/5] max-h-[72dvh]">
                <img
                  src="/images/img-cnc-2.jpg"
                  alt="ماشین CNC در حال برش سنگ در کارگاه آرکا"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover img-treatment hover:scale-105 transition-transform duration-[1.4s]"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-coal/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 right-5 left-5 flex items-center justify-between text-[11px] tracking-widest text-bone-dim">
                  <span className="bg-coal/70 backdrop-blur border border-hairline px-3.5 py-2">
                    خط برش CNC — کارگاه مرکزی
                  </span>
                  <span className="text-voltage font-display font-black text-xl">±۰.۵mm</span>
                </div>
              </div>
              <p className="mt-5 text-xs md:text-sm text-bone-dim leading-7">
                خط تولید آرکا با نظارت مهندسین دانشگاه صنعتی اصفهان تست و
                کالیبره می‌شود؛ خروجی هر شیفت، نمونه‌برداری و ثبت کیفیت می‌گردد.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
