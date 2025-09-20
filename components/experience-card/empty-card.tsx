"use client";
import React, { useCallback, useState } from "react";
import { Mail } from "lucide-react";

const EMAIL = "ferhanaydin099@gmail.com";
const SUBJECT = "İşbirliği%20Talebi";

export function CtaCard() {
  const [copied, setCopied] = useState(false);

  const onMailClick = useCallback(async () => {
    const mailto = `mailto:${EMAIL}?subject=${SUBJECT}`;
    const w = window.open(mailto, "_self");
    setTimeout(async () => {
      try {
        await navigator.clipboard.writeText(EMAIL);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch {
        window.location.href = mailto;
      }
    }, 300);
  }, []);

  return (
    <article
      className="
        min-w-full md:min-w-[720px] md:max-w-3xl 
        snap-center shrink-0 rounded-3xl border border-white/10 
        bg-zinc-900/50 dark:bg-zinc-900/50 backdrop-blur-xl 
        shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)] text-zinc-200
      "
    >
      <header
        className="
          p-4 sm:p-5 md:p-6 pb-2 md:pb-3 
          flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4
        "
      >
        <div className="space-y-1">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight">
            Burayı Doldurmak İster misiniz?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400">
            “Şimdilik tek iş — ama ikinci kartı sizinle doldurabiliriz.” 😄
          </p>
        </div>
        <span className="self-start md:self-auto text-[10px] sm:text-[11px] md:text-xs rounded-full px-2.5 md:px-3 py-1 border border-white/15 bg-white/5 text-zinc-300 whitespace-nowrap">
          Açık Davet
        </span>
      </header>

      <div className="px-4 sm:px-5 md:px-6">
        <hr className="border-white/10" />
      </div>

      <section className="p-4 sm:p-5 md:p-6 pt-3 md:pt-4 space-y-4">
        <p className="text-[13px] sm:text-sm md:text-[15px] leading-relaxed text-zinc-300">
          Bu alanda yeni işbirliklerine yer var. Projenize değer katacak, modern
          ve performans odaklı arayüzler için iletişime geçin.
        </p>

        {/* Büyük mail butonu: mailto + fallback */}
        <button
          type="button"
          onClick={onMailClick}
          aria-label="E-posta ile iletişim kur"
          className="
            group mt-2 inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 
            px-5 py-4 text-base font-medium tracking-tight hover:bg-white/10 transition
            shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
            focus:outline-none focus:ring-2 focus:ring-white/20
          "
        >
          <span
            className="
              grid place-items-center h-9 w-9 rounded-xl border border-white/20 bg-white/5 
              shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] group-hover:scale-105 transition
            "
            aria-hidden
          >
            <Mail className="h-5 w-5" />
          </span>
          <span className="text-sm sm:text-xl break-all">{EMAIL}</span>
        </button>

        {copied && (
          <p className="text-xs text-emerald-300/90">
            Mail uygulaması açılamadıysa adres panoya kopyalandı ✅
          </p>
        )}

        <p className="text-[11px] sm:text-xs text-zinc-400">
          Not: Tıklayınca e-posta istemciniz açılır; açılamazsa adresi otomatik
          kopyalar.
        </p>
      </section>
    </article>
  );
}
