"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Manifesto } from "@/components/site/Manifesto";
import { Collections } from "@/components/site/Collections";
import { Process } from "@/components/site/Process";
import { Projects } from "@/components/site/Projects";
import { Quote } from "@/components/site/Quote";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-dvh flex flex-col bg-coal text-bone">
      {/* Scroll progress (RTL: grows from right) */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress, transformOrigin: "right" }}
        className="fixed top-0 inset-x-0 h-[3px] bg-voltage z-50"
      />

      {/* Film grain */}
      <div aria-hidden="true" className="grain" />

      <Navbar />

      <main className="flex-1">
        <Hero />
        <Marquee />
        <Manifesto />
        <Collections />
        <Process />
        <Projects />
        <Quote />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
