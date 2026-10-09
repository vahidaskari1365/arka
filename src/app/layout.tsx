import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "آرکا استون — اتلیهٔ مهندسی سنگِ نمای ساختمان",
  description:
    "سنگ نمای لاکچری؛ تراورتن، مرمریت، گرانیت و کوارتزیت. از استخراج از معدن تا نصب نهایی — بیست‌وپنج سال میراث در نماهای ماندگار ایران.",
  keywords: [
    "سنگ نما",
    "تراورتن",
    "مرمریت",
    "گرانیت",
    "نمای ساختمان",
    "سنگ لاکچری",
    "آرکا استون",
  ],
  authors: [{ name: "ARKA STONE" }],
  openGraph: {
    title: "آرکا استون — سنگ، روحِ نماست",
    description:
      "اتلیهٔ مهندسی سنگ نما؛ از قلب معادن ایران تا نمای ساختمان شما.",
    siteName: "ARKA STONE",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#131312",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="antialiased bg-coal text-bone font-body">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
