"use client";

import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function ContactForm() {
  const { t, lang } = useLang();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [interest, setInterest] = useState("");
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", message: "" });

  const inputCls =
    "w-full border-b border-charcoal/20 bg-transparent py-3 text-sm font-light text-charcoal placeholder:text-charcoal/35 focus:border-rustic focus:outline-none transition-colors";

  const submit = async () => {
    if (!form.email || !form.name) return;
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/mjcalvo92@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `MVOG Web · ${interest || "Contacto"} · ${form.name}`,
          _template: "table",
          Nombre: form.name,
          Email: form.email,
          WhatsApp: form.whatsapp,
          Interés: interest,
          Mensaje: form.message,
          Idioma: lang.toUpperCase(),
          Origen: "mvog-studio.vercel.app",
        }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <p className="border hairline px-6 py-8 text-center text-sm font-light text-rustic">
        {t.contact.sent}
      </p>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <input
          className={inputCls}
          placeholder={t.contact.name}
          aria-label={t.contact.name}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className={inputCls}
          type="email"
          placeholder={t.contact.email}
          aria-label={t.contact.email}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <input
        className={inputCls}
        placeholder={t.contact.whatsapp}
        aria-label={t.contact.whatsapp}
        value={form.whatsapp}
        onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
      />

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
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      <button
        type="button"
        onClick={submit}
        disabled={status === "sending" || !form.name || !form.email}
        className="bg-charcoal px-10 py-4 text-[11px] uppercase tracking-widest2 text-offwhite transition-colors duration-300 hover:bg-tropical disabled:opacity-40"
      >
        {status === "sending" ? "···" : t.contact.send}
      </button>
      {status === "error" && (
        <p className="text-xs font-light text-red-800/70">{t.contact.error}</p>
      )}
    </div>
  );
}
