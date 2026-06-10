"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { useLang } from "@/lib/LanguageContext";

type Cat = "exterior" | "interior" | "suite" | "garden";

const photos: { src: string; cat: Cat }[] = [
  { src: "/villa/villa_174_b_11_foto.jpg", cat: "exterior" },
  { src: "/villa/villa_174_b_12_foto.jpg", cat: "exterior" },
  { src: "/villa/villa_174_b_14_foto.jpg", cat: "exterior" },
  { src: "/villa/villa_174_b_16_foto.jpg", cat: "exterior" },
  { src: "/villa/villa_174_b_18_foto.jpg", cat: "exterior" },
  { src: "/villa/10_11_foto.jpg", cat: "exterior" },
  { src: "/villa/20_16_foto.jpg", cat: "interior" },
  { src: "/villa/30_22_foto.jpg", cat: "interior" },
  { src: "/villa/30_26_foto.jpg", cat: "interior" },
  { src: "/villa/80_4_foto.jpg", cat: "suite" },
  { src: "/villa/70_2_foto.jpg", cat: "suite" },
  { src: "/villa/60_14_foto.jpg", cat: "suite" },
  { src: "/villa/40_34_foto.jpg", cat: "garden" },
  { src: "/villa/50_54_foto.jpg", cat: "garden" },
];

export default function Casa174() {
  const { t } = useLang();
  const [filter, setFilter] = useState<"all" | Cat>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = photos.filter((p) => filter === "all" || p.cat === filter);

  const tabs: { key: "all" | Cat; label: string }[] = [
    { key: "all", label: t.casa.gallery.all },
    { key: "exterior", label: t.casa.gallery.exterior },
    { key: "interior", label: t.casa.gallery.interior },
    { key: "suite", label: t.casa.gallery.suite },
    { key: "garden", label: t.casa.gallery.garden },
  ];

  return (
    <main>
      <Header />

      {/* Project hero */}
      <section className="relative flex min-h-[80vh] flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/villa/villa_174_b_18_foto.jpg"
            alt="Casa 174 · Pórtico"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-transparent" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-44 text-offwhite">
          <Link
            href="/"
            className="text-[10px] uppercase tracking-widest2 text-offwhite/60 transition-colors hover:text-offwhite"
          >
            ← {t.casa.back}
          </Link>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-8 text-[10px] uppercase tracking-widest3 text-offwhite/70"
          >
            {t.casa.kicker}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-display text-6xl font-light sm:text-8xl"
          >
            {t.casa.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-6 max-w-xl text-sm font-light leading-relaxed text-offwhite/85"
          >
            {t.casa.intro}
          </motion.p>
        </div>
      </section>

      {/* Specs */}
      <section className="border-b hairline px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>{t.casa.specsLabel}</SectionLabel>
          </Reveal>
          <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-4">
            {t.featured.specs.map((s, i) => (
              <Reveal key={s} delay={i * 0.05} className="border-t hairline pt-4">
                <p className="font-display text-xl font-light text-charcoal">{s}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>{t.casa.galleryLabel}</SectionLabel>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`border px-5 py-2 text-[11px] uppercase tracking-widest2 transition-colors duration-300 ${
                  filter === tab.key
                    ? "border-charcoal bg-charcoal text-offwhite"
                    : "hairline text-charcoal/60 hover:border-charcoal/40"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.button
                  key={p.src}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  onClick={() => setLightbox(i)}
                  className="group relative overflow-hidden"
                  aria-label={`Casa 174 — ${p.cat}`}
                >
                  <img
                    src={p.src}
                    alt={`Casa 174 — ${p.cat}`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                  />
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute right-6 top-6 text-2xl font-light text-offwhite/70 hover:text-offwhite"
              aria-label="Cerrar / Close"
            >
              ×
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((lightbox - 1 + filtered.length) % filtered.length);
              }}
              className="absolute left-4 px-3 py-6 text-3xl font-light text-offwhite/60 hover:text-offwhite sm:left-8"
              aria-label="Anterior / Previous"
            >
              ‹
            </button>
            <img
              src={filtered[lightbox]?.src}
              alt="Casa 174"
              className="max-h-[85vh] max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((lightbox + 1) % filtered.length);
              }}
              className="absolute right-4 px-3 py-6 text-3xl font-light text-offwhite/60 hover:text-offwhite sm:right-8"
              aria-label="Siguiente / Next"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="bg-tropical px-6 py-24 text-center">
        <Reveal>
          <h2 className="font-display text-4xl font-light text-offwhite sm:text-5xl">
            {t.casa.ctaTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm font-light leading-relaxed text-offwhite/70">
            {t.casa.ctaBody}
          </p>
          <div className="mt-10">
            <CTA href="/#contacto" variant="light">
              {t.casa.ctaBtn}
            </CTA>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
