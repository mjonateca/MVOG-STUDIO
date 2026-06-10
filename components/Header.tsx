"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function Header() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#estudio", label: t.nav.studio },
    { href: "/#modelo", label: t.nav.model },
    { href: "/projects/casa-174", label: t.nav.project },
    { href: "/#proceso", label: t.nav.process },
    { href: "/#nosotros", label: t.nav.about },
    { href: "/#contacto", label: t.nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b hairline bg-offwhite/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group">
          <span className="font-display text-xl tracking-widest3 text-charcoal">
            M V O G
          </span>
          <span className="mt-0.5 hidden text-[9px] uppercase tracking-widest2 text-concrete sm:block">
            {t.nav.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[11px] uppercase tracking-widest2 text-charcoal/70 transition-colors duration-300 hover:text-rustic"
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            aria-label="Cambiar idioma / Switch language"
            className="border hairline px-3 py-1.5 text-[11px] uppercase tracking-widest2 text-charcoal transition-colors duration-300 hover:bg-charcoal hover:text-offwhite"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            aria-label="Cambiar idioma / Switch language"
            className="border hairline px-2.5 py-1 text-[11px] uppercase tracking-widest2"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5"
          >
            <span className={`h-px w-5 bg-charcoal transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-charcoal transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t hairline bg-offwhite px-6 py-6 md:hidden">
          <ul className="space-y-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-widest2 text-charcoal"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
