"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, MaskLine, Stagger, StaggerItem } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { ArrowIcon, CheckIcon, PhoneIcon } from "./Icons";

type Status = "idle" | "error" | "sent";

export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    if (name.trim().length < 2) {
      setStatus("error");
      setError("نام و نام خانوادگی را کامل وارد کنید.");
      return;
    }
    if (!/^0?9\d{9}$/.test(phone.replace(/[\s-]/g, ""))) {
      setStatus("error");
      setError("شمارهٔ موبایل معتبر نیست — مثال: ۰۹۱۲۳۴۵۶۷۸۹");
      return;
    }
    setStatus("sent");
  }

  const inputCls =
    "w-full bg-coal-2 border border-hairline px-4 md:px-5 py-3.5 md:py-4 text-sm md:text-base text-bone placeholder:text-bone-dim/60 transition-colors duration-300";

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-coal-2 border-t border-hairline" aria-label="تماس و مشاوره">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 grid lg:grid-cols-12 gap-14 lg:gap-20">
        {/* Copy */}
        <div className="lg:col-span-6">
          <Reveal>
            <div className="flex items-center gap-4 text-xs tracking-[0.3em] text-bone-dim mb-10 md:mb-14">
              <span className="text-voltage font-display font-bold">۰۵</span>
              <span className="h-px w-14 bg-hairline" aria-hidden="true" />
              تماس
            </div>
          </Reveal>

          <h2 className="font-display font-black tracking-tight leading-[1.14] text-[clamp(2rem,4.8vw,3.8rem)]">
            <MaskLine>پروژهٔ بعدی شما،</MaskLine>
            <MaskLine delay={0.15}>
              <span className="text-voltage">شاهکار بعدی ماست.</span>
            </MaskLine>
          </h2>

          <Reveal delay={0.3} className="mt-7 md:mt-9">
            <p className="max-w-[50ch] text-bone-dim leading-8 md:leading-9 text-[15px] md:text-base">
              فرم را پر کنید؛ کارشناسان آرکا در کمتر از ۲۴ ساعت کاری با شما
              تماس می‌گیرند و نمونهٔ سنگ مناسب پروژه را برای بازدید حضوری
              هماهنگ می‌کنند. مشاورهٔ اولیه و نمونه‌برداری، رایگان است.
            </p>
          </Reveal>

          <Reveal delay={0.4} className="mt-9 md:mt-12">
            <a
              href="tel:+982144556677"
              className="group inline-flex items-center gap-4 border border-hairline px-6 py-4 hover:border-voltage transition-colors duration-300"
            >
              <span className="grid place-items-center size-11 bg-voltage text-coal shrink-0">
                <PhoneIcon className="size-5" />
              </span>
              <span className="text-start">
                <span className="block text-[11px] tracking-widest text-bone-dim">
                  تماس مستقیم با اتلیه
                </span>
                <span className="block font-display font-bold text-base md:text-lg tracking-wide" dir="ltr">
                  ۰۲۱ ۴۴۵۵ ۶۶۷۷
                </span>
              </span>
            </a>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={0.2} className="lg:col-span-6">
          <div className="relative border border-hairline bg-coal p-6 md:p-10">
            <span aria-hidden="true" className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-voltage" />
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="py-14 md:py-20 text-center"
                  role="status"
                >
                  <span className="mx-auto grid place-items-center size-16 bg-voltage text-coal mb-6">
                    <CheckIcon className="size-8" />
                  </span>
                  <h3 className="font-display font-black text-2xl md:text-3xl mb-3">
                    درخواست شما ثبت شد
                  </h3>
                  <p className="text-bone-dim text-sm md:text-base leading-8 max-w-[40ch] mx-auto">
                    {name} عزیز، به خانوادهٔ آرکا خوش آمدید. کارشناس ما تا
                    ۲۴ ساعت آینده با شمارهٔ شما تماس می‌گیرد.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={submit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -16 }}
                  noValidate
                >
                  <Stagger gap={0.08}>
                    <StaggerItem>
                      <label htmlFor="c-name" className="block text-xs tracking-[0.2em] text-bone-dim mb-2.5">
                        نام و نام خانوادگی *
                      </label>
                      <input
                        id="c-name"
                        type="text"
                        value={name}
                        onChange={(e) => { setName(e.target.value); if (status === "error") setStatus("idle"); }}
                        placeholder="مثلاً: سارا محمدی"
                        className={inputCls}
                        autoComplete="name"
                      />
                    </StaggerItem>

                    <StaggerItem className="mt-5">
                      <label htmlFor="c-phone" className="block text-xs tracking-[0.2em] text-bone-dim mb-2.5">
                        شمارهٔ موبایل *
                      </label>
                      <input
                        id="c-phone"
                        type="tel"
                        dir="ltr"
                        value={phone}
                        onChange={(e) => { setPhone(e.target.value); if (status === "error") setStatus("idle"); }}
                        placeholder="0912 345 6789"
                        className={`${inputCls} text-left`}
                        autoComplete="tel"
                      />
                    </StaggerItem>

                    <StaggerItem className="mt-5">
                      <label htmlFor="c-msg" className="block text-xs tracking-[0.2em] text-bone-dim mb-2.5">
                        توضیح پروژه (اختیاری)
                      </label>
                      <textarea
                        id="c-msg"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="متراژ تقریبی نما، نوع ساختمان، سبک معماری…"
                        className={`${inputCls} resize-none leading-7`}
                      />
                    </StaggerItem>

                    <StaggerItem className="mt-7">
                      {status === "error" && (
                        <p role="alert" className="mb-4 text-sm text-red-400 border border-red-400/30 bg-red-400/10 px-4 py-3">
                          {error}
                        </p>
                      )}
                      <Magnetic strength={0.18}>
                        <button
                          type="submit"
                          className="group w-full inline-flex items-center justify-center gap-3 bg-voltage text-coal font-display font-extrabold text-base md:text-lg px-8 py-4 hover:bg-bone transition-colors duration-300 active:scale-[0.98]"
                        >
                          درخواست مشاورهٔ رایگان
                          <ArrowIcon className="size-5 transition-transform duration-300 group-hover:-translate-x-1" />
                        </button>
                      </Magnetic>
                    </StaggerItem>
                  </Stagger>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
