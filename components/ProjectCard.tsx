"use client";

import Reveal from "./Reveal";
import CTA from "./CTA";
import { useLang } from "@/lib/LanguageContext";

export default function ProjectCard() {
  const { t } = useLang();
  return (
    <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
      <Reveal>
        <div className="relative overflow-hidden">
          <img
            src="/villa/villa_174_b_12_foto.jpg"
            alt="Casa 174 · Vista Cana"
            className="aspect-[4/3] w-full object-cover transition-transform duration-[1.5s] ease-out hover:scale-[1.03]"
          />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4">
          {["/villa/20_16_foto.jpg", "/villa/80_4_foto.jpg", "/villa/40_34_foto.jpg"].map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              className="aspect-square w-full object-cover"
            />
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <h3 className="font-display text-4xl font-light text-charcoal sm:text-5xl">
          {t.featured.title}
        </h3>
        <p className="mt-6 text-sm font-light leading-relaxed text-charcoal/70">
          {t.featured.body}
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2.5 border-t hairline pt-6">
          {t.featured.specs.map((s) => (
            <li key={s} className="text-xs font-light tracking-wide text-charcoal/70">
              — {s}
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-4">
          <CTA href="/projects/casa-174" variant="dark">
            {t.featured.cta1}
          </CTA>
          <CTA href="/#contacto" variant="outline">
            {t.featured.cta2}
          </CTA>
        </div>
      </Reveal>
    </div>
  );
}
