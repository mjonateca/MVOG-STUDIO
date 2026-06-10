"use client";

import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function ContactForm() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  const [interest, setInterest] = useState("");

  const inputCls =
    "w-full border-b border-charcoal/20 bg-transparent py-3 text-sm font-light text-charcoal placeholder:text-charcoal/35 focus:border-rustic focus:outline-none transition-colors";

  if (sent) {
    return (
      <p className="border hairline px-6 py-8 text-center text-sm font-light text-rustic">
        {t.contact.sent}
      </p>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <input className={inputCls} placeholder={t.contact.name} aria-label={t.contact.name} />
        <input className={inputCls} type="email" placeholder={t.contact.email} aria-label={t.contact.email} />
      </div>
      <input className={inputCls} placeholder={t.contact.whatsapp} aria-label={t.contact.whatsapp} />

      <div>
        <p className="mb-3 text-[10px] uppercase tracking-widest2 text-charcoal/50">
          {t.contact.interest}
        </p>
        <div className="flex flex-wrap gap-3">
          {t.contact.interests.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setInterest(opt)}
              className={`border px-5 py-2 text-[11px] uppercase tracking-widest2 transition-colors duration-300 ${
                interest === opt
                  ? "border-rustic bg-rustic text-offwhite"
                  : "hairline text-charcoal/60 hover:border-charcoal/40"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <textarea
        className={`${inputCls} min-h-[110px] resize-none`}
        placeholder={t.contact.message}
        aria-label={t.contact.message}
      />

      <button
        type="button"
        onClick={() => setSent(true)}
        className="bg-charcoal px-10 py-4 text-[11px] uppercase tracking-widest2 text-offwhite transition-colors duration-300 hover:bg-tropical"
      >
        {t.contact.send}
      </button>
    </div>
  );
}
