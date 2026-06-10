"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/villa/villa_174_b_11_foto.jpg"
          alt="Casa 174, Vista Cana"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-charcoal/10" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-44 text-offwhite">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-[10px] uppercase tracking-widest3 text-offwhite/70"
        >
          {t.hero.kicker}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-display text-5xl font-light leading-[1.05] sm:text-7xl lg:text-8xl"
        >
          {t.hero.line1}
          <br />
          <span className="italic text-stone">{t.hero.line2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-8 max-w-xl text-sm font-light leading-relaxed text-offwhite/85"
        >
          {t.hero.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="/projects/casa-174"
            className="bg-offwhite px-8 py-3.5 text-[11px] uppercase tracking-widest2 text-charcoal transition-colors duration-300 hover:bg-stone"
          >
            {t.hero.cta1}
          </Link>
          <Link
            href="/#contacto"
            className="border border-offwhite/40 px-8 py-3.5 text-[11px] uppercase tracking-widest2 text-offwhite transition-colors duration-300 hover:border-offwhite hover:bg-offwhite/10"
          >
            {t.hero.cta2}
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-14 border-t border-offwhite/20 pt-5 text-[10px] uppercase tracking-widest3 text-offwhite/50"
        >
          {t.hero.year} — Casa 174 · Vista Cana
        </motion.p>
      </div>
    </section>
  );
}
