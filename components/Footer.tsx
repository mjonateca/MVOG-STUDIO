"use client";

import { useLang } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-charcoal px-6 py-16 text-offwhite">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 md:flex-row md:items-end">
        <div>
          <p className="font-display text-2xl tracking-widest3">M V O G</p>
          <p className="mt-2 text-[10px] uppercase tracking-widest2 text-offwhite/50">
            {t.footer.tagline}
          </p>
        </div>
        <div className="text-xs leading-relaxed text-offwhite/60">
          <p>{t.footer.entity}</p>
          <p>{t.footer.country}</p>
          <p className="mt-4 text-offwhite/35">
            © {new Date().getFullYear()} {t.footer.entity}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
