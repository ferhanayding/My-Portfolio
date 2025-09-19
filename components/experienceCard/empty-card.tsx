"use client";
import React from "react";
import { Mail } from "lucide-react";

export function CtaCard() {
  return (
    <article
      className="min-w-full md:min-w-[720px] md:max-w-3xl snap-center shrink-0 rounded-3xl border border-white/10 
                 bg-zinc-900/50 dark:bg-zinc-900/50 backdrop-blur-xl 
                 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)] text-zinc-200"
    >
      <header className="p-6 pb-3 flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Burayı Doldurmak İster misiniz?
          </h3>
          <p className="text-sm text-zinc-400">
            “Şimdilik tek iş — ama ikinci kartı sizinle doldurabiliriz.” 😄
          </p>
        </div>
        <span className="text-[11px] sm:text-xs rounded-full px-3 py-1 border border-white/15 bg-white/5 text-zinc-300 whitespace-nowrap">
          Açık Davet
        </span>
      </header>

      <div className="px-6">
        <hr className="border-white/10" />
      </div>

      <section className="p-6 pt-4 space-y-4">
        <p className="text-sm sm:text-[15px] leading-relaxed text-zinc-300">
          Bu alanda yeni işbirliklerine yer var. Projenize değer katacak, modern
          ve performans odaklı arayüzler için iletişime geçin.
        </p>

        <a
          href="mailto:ferhanaydin099@gmail.com?subject=İşbirliği%20Talebi"
          className="group mt-2 inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 
                     px-5 py-4 text-base font-medium tracking-tight hover:bg-white/10 transition
                     shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
        >
          <span
            className="grid place-items-center h-9 w-9 rounded-xl border border-white/20 bg-white/5 
                           shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] group-hover:scale-105 transition"
          >
            <Mail className="h-5 w-5" aria-hidden />
          </span>
          <span className="text-lg sm:text-xl">ferhanaydin099@gmail.com</span>
        </a>

        <p className="text-xs text-zinc-400">
          Not: Mail butonuna tıklayınca doğrudan e-posta istemciniz açılır.
        </p>
      </section>
    </article>
  );
}
