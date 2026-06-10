"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import PrincipleCard from "@/components/PrincipleCard";
import ProcessStep from "@/components/ProcessStep";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import { useLang } from "@/lib/LanguageContext";

export default function Home() {
  const { t } = useLang();

  return (
    <main>
      <Header />
      <Hero />

      {/* 2 — What MVOG is */}
      <section id="estudio" className="px-6 py-28 sm:py-36">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <SectionLabel>{t.what.label}</SectionLabel>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="font-display text-4xl font-light leading-tight text-charcoal sm:text-5xl">
                {t.what.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-charcoal/75">
                {t.what.p1}
              </p>
              <p className="mt-5 max-w-2xl font-display text-2xl font-light italic leading-snug text-tropical">
                {t.what.p2}
              </p>
              <p className="mt-10 inline-block border-l-2 border-wood pl-5 text-xs font-light leading-relaxed text-charcoal/55">
                {t.what.note}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Cinematic break */}
      <Reveal className="px-0">
        <img
          src="/villa/villa_174_b_16_foto.jpg"
          alt="Vista aérea, Casa 174"
          className="h-[55vh] w-full object-cover sm:h-[75vh]"
        />
      </Reveal>

      {/* 3 — One project a year */}
      <section id="modelo" className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>{t.model.label}</SectionLabel>
            <h2 className="mt-6 max-w-3xl font-display text-4xl font-light leading-tight text-charcoal sm:text-5xl">
              {t.model.title}
            </h2>
            <p className="mt-5 text-sm font-light text-charcoal/60">{t.model.intro}</p>
          </Reveal>
          <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {t.model.cards.map((c, i) => (
              <Reveal key={c.t} delay={i * 0.06} className="border-t hairline pt-5">
                <p className="text-[10px] uppercase tracking-widest2 text-concrete">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 font-display text-xl font-normal text-charcoal">{c.t}</p>
                <p className="mt-2 text-sm font-light leading-relaxed text-charcoal/60">{c.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Philosophy */}
      <section className="bg-stone/30 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>{t.philosophy.label}</SectionLabel>
            <h2 className="mt-6 font-display text-4xl font-light text-charcoal sm:text-5xl">
              {t.philosophy.title}
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {t.philosophy.principles.map((p, i) => (
              <PrincipleCard key={p.t} index={i} title={p.t} body={p.d} />
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Featured project */}
      <section id="proyecto" className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>{t.featured.label}</SectionLabel>
          </Reveal>
          <div className="mt-12">
            <ProjectCard />
          </div>
        </div>
      </section>

      {/* 6 — Process */}
      <section id="proceso" className="bg-tropical px-6 py-28 sm:py-36">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-widest3 text-wood">
              {t.process.label}
            </p>
            <h2 className="mt-6 font-display text-4xl font-light text-offwhite sm:text-5xl">
              {t.process.title}
            </h2>
          </Reveal>
          <div>
            {t.process.steps.map((s, i) => (
              <ProcessStep key={s.t} index={i} title={s.t} body={s.d} />
            ))}
          </div>
        </div>
      </section>

      {/* 7 — Buyers & investors */}
      <section className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel>{t.buyers.label}</SectionLabel>
            <h2 className="mt-6 font-display text-4xl font-light leading-tight text-charcoal sm:text-5xl">
              {t.buyers.title}
            </h2>
            <p className="mt-8 text-base font-light leading-relaxed text-charcoal/70">
              {t.buyers.body}
            </p>
            <p className="mx-auto mt-10 max-w-xl text-[11px] font-light italic leading-relaxed text-charcoal/45">
              {t.buyers.disclaimer}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 8 — Partners */}
      <section className="border-y hairline px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <Reveal>
            <SectionLabel>{t.partners.label}</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-light text-charcoal">
              {t.partners.title}
            </h2>
            <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-charcoal/60">
              {t.partners.body}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="flex flex-wrap gap-x-10 gap-y-4">
              {t.partners.roles.map((r) => (
                <li
                  key={r}
                  className="text-[11px] uppercase tracking-widest2 text-charcoal/55"
                >
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 9 — Contact */}
      <section id="contacto" className="px-6 py-28 sm:py-36">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <SectionLabel>{t.contact.label}</SectionLabel>
            <h2 className="mt-6 font-display text-4xl font-light leading-tight text-charcoal sm:text-5xl">
              {t.contact.title}
            </h2>
            <img
              src="/villa/50_54_foto.jpg"
              alt=""
              className="mt-10 hidden aspect-[4/5] w-full max-w-sm object-cover lg:block"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
