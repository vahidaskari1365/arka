const ITEMS = [
  "تراورتن",
  "مرمریت",
  "گرانیت",
  "کوارتزیت",
  "آنیکس",
  "تراورتنِ موج‌دار",
  "سنگِ ماشین",
  "کریستال",
];

/** Infinite yellow marquee strip — slight rotation for editorial energy. */
export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div dir="ltr" className="relative -rotate-[0.6deg] scale-[1.02] my-10 md:my-16" aria-hidden="true">
      <div className="bg-voltage text-coal overflow-hidden border-y-2 border-coal">
        <div
          dir="ltr"
          className="flex w-max animate-marquee py-3.5 md:py-5"
        >
          {row.map((item, i) => (
            <span
              key={i}
              dir="rtl"
              className="flex items-center gap-6 md:gap-10 px-6 md:px-10 whitespace-nowrap shrink-0"
            >
              <span className="font-display font-black text-lg md:text-2xl tracking-tight">
                {item}
              </span>
              <svg viewBox="0 0 24 24" className="size-3.5 md:size-4 shrink-0" fill="currentColor">
                <path d="M12 2 14.09 8.26 20 9.27 16 14.14 17.18 21 12 17.77 6.82 21 8 14.14 4 9.27 9.91 8.26z" />
              </svg>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
