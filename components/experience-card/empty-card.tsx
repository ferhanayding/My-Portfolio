"use client";
import React, { useCallback, useState } from "react";
import { Mail } from "lucide-react";

type CtaCardProps = {
  email?: string;
  subject?: string; // düz metin ver; ben encode edeceğim
  title?: string;
  subtitle?: string;
  badge?: string;
  body?: string;
  buttonAriaLabel?: string;
  copiedText?: string;
  note?: string;
};

export function CtaCard({
  email = "ferhanaydin099@gmail.com",
  subject = "Collaboration Request",
  title = "Want to fill this space?",
  subtitle = "Just one project for now — but the second card could be yours. 😄",
  badge = "Open Invite",
  body = "There’s room here for new collaborations. Get in touch for modern, performance-focused UIs that add real value to your project.",
  buttonAriaLabel = "Contact via email",
  copiedText = "If your mail client didn’t open, the address was copied to your clipboard ✅",
  note = "Note: Clicking attempts to open your default mail client; if it can’t, the address is copied automatically.",
}: CtaCardProps) {
  const [copied, setCopied] = useState(false);

  const onMailClick = useCallback(async () => {
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    if (typeof window !== "undefined") {
      window.location.href = mailto;
    }
    setTimeout(async () => {
      try {
        if (navigator?.clipboard?.writeText) {
          await navigator.clipboard.writeText(email);
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        }
      } catch {
        // yok say: bazı tarayıcılarda izin çıkabilir
      }
    }, 250);
  }, [email, subject]);

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
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400">{subtitle}</p>
        </div>
        <span className="self-start md:self-auto text-[10px] sm:text-[11px] md:text-xs rounded-full px-2.5 md:px-3 py-1 border border-white/15 bg-white/5 text-zinc-300 whitespace-nowrap">
          {badge}
        </span>
      </header>

      <div className="px-4 sm:px-5 md:px-6">
        <hr className="border-white/10" />
      </div>

      <section className="p-4 sm:p-5 md:p-6 pt-3 md:pt-4 space-y-4">
        <p className="text-[13px] sm:text-sm md:text-[15px] leading-relaxed text-zinc-300">
          {body}
        </p>

        <button
          type="button"
          onClick={onMailClick}
          aria-label={buttonAriaLabel}
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
          <span className="text-sm sm:text-xl break-all">{email}</span>
        </button>

        {copied && <p className="text-xs text-emerald-300/90">{copiedText}</p>}

        <p className="text-[11px] sm:text-xs text-zinc-400">{note}</p>
      </section>
    </article>
  );
}
