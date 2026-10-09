"use client";

import { Reveal } from "./Reveal";
import { PinIcon, PhoneIcon, MailIcon, ClockIcon, InstagramIcon, LinkedinIcon } from "./Icons";

const NAV = [
  { href: "#collections", label: "کلکسیون" },
  { href: "#process", label: "فرآیند" },
  { href: "#projects", label: "پروژه‌ها" },
  { href: "#manifesto", label: "دربارهٔ ما" },
  { href: "#contact", label: "تماس" },
];

const COLLECTIONS = ["تراورتن", "مرمریت", "گرانیت", "کوارتزیت", "آنیکس"];

export function Footer() {
  return (
    <footer className="mt-auto relative border-t border-hairline bg-coal" aria-label="پاورقی">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 pt-16 md:pt-20 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="grid place-items-center size-10 bg-voltage text-coal">
                <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
                  <path d="M12 3 4 21h3.4l1.5-3.6h6.2L16.6 21H20L12 3zm-1.9 11.6L12 9.8l1.9 4.8h-3.8z" />
                </svg>
              </span>
              <span className="leading-none">
                <span className="block font-display font-black text-lg">آرکا استون</span>
                <span className="block text-[10px] tracking-[0.3em] text-bone-dim mt-1">ARKA STONE</span>
              </span>
            </div>
            <p className="max-w-[42ch] text-sm leading-7 text-bone-dim">
              اتلیهٔ مهندسی سنگ نما؛ از استخراج تا نصب. عضو انجمن صنفی
              سنگ‌بران ایران و دارندهٔ نشان کیفیت نمای ماندگار.
            </p>
            <div className="flex items-center gap-3 mt-7">
              <a href="#top" aria-label="اینستاگرام آرکا استون" className="grid place-items-center size-11 border border-hairline text-bone-dim hover:text-coal hover:bg-voltage hover:border-voltage transition-all duration-300">
                <InstagramIcon className="size-5" />
              </a>
              <a href="#top" aria-label="لینکدین آرکا استون" className="grid place-items-center size-11 border border-hairline text-bone-dim hover:text-coal hover:bg-voltage hover:border-voltage transition-all duration-300">
                <LinkedinIcon className="size-5" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-2">
            <h3 className="text-xs tracking-[0.3em] text-bone-dim mb-6">دسترسی</h3>
            <ul className="space-y-4">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-bone hover:text-voltage transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div className="md:col-span-2">
            <h3 className="text-xs tracking-[0.3em] text-bone-dim mb-6">کلکسیون‌ها</h3>
            <ul className="space-y-4">
              {COLLECTIONS.map((c) => (
                <li key={c}>
                  <a href="#collections" className="text-sm text-bone hover:text-voltage transition-colors">
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-4">
            <h3 className="text-xs tracking-[0.3em] text-bone-dim mb-6">ارتباط</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3.5">
                <PinIcon className="size-5 text-voltage shrink-0 mt-0.5" />
                <span className="text-bone-dim leading-7">
                  تهران، جادهٔ مخصوص، شهرک سنگ، سالن ۱۲
                  <br />
                  کارگاه: اصفهان، جادهٔ نجف‌آباد، سنگبری‌های مرکزی
                </span>
              </li>
              <li className="flex items-center gap-3.5">
                <PhoneIcon className="size-5 text-voltage shrink-0" />
                <a href="tel:+982144556677" dir="ltr" className="text-bone hover:text-voltage transition-colors tracking-wide">
                  ۰۲۱ ۴۴۵۵ ۶۶۷۷
                </a>
              </li>
              <li className="flex items-center gap-3.5">
                <MailIcon className="size-5 text-voltage shrink-0" />
                <a href="mailto:hello@arkastone.ir" className="text-bone hover:text-voltage transition-colors" dir="ltr">
                  hello@arkastone.ir
                </a>
              </li>
              <li className="flex items-center gap-3.5">
                <ClockIcon className="size-5 text-voltage shrink-0" />
                <span className="text-bone-dim">شنبه تا پنجشنبه — ۹ صبح تا ۶ عصر</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Big watermark */}
        <Reveal className="mt-16 md:mt-20 overflow-hidden" y={30}>
          <div
            aria-hidden="true"
            className="font-display font-black text-center leading-[0.85] select-none text-stroke text-[clamp(3.5rem,13vw,11rem)] tracking-tight"
          >
            ARKA STONE
          </div>
        </Reveal>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-hairline flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] md:text-xs text-bone-dim tracking-wider">
          <span>© ۱۴۰۴ آرکا استون — تمامی حقوق محفوظ است.</span>
          <span>
            طراحی و توسعه با <span className="text-voltage">عشق به سنگ</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
