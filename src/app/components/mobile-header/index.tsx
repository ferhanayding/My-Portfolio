"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

type Loc = "tr" | "en";

type Item = {
  label: string;
  href: string;
  color: string; // icon fg color
};

const SOCIALS: Item[] = [
  {
    label: "GitHub",
    href: "https://github.com/ferhanayding",
    color: "gray",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ferhanaydin_/",
    color: "gray",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Ferhanaydin_",
    color: "gray",
  },
  {
    label: "Medium",
    href: "https://medium.com/@ferhanaydin099",
    color: "gray",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ferhan-aydin-6904402b4/",
    color: "gray",
  },
  { label: "Email", href: "mailto:ferhanaydin099@gmail.com", color: "gray" },
];

function TRFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 60 40" width="28" height="18" {...props} aria-hidden>
      <rect width="60" height="40" fill="#E30A17" />
      <circle cx="25" cy="20" r="9" fill="#fff" />
      <circle cx="28" cy="20" r="7" fill="#E30A17" />
      <path
        d="M35.5 20l6.5 2.1-4-5.6v7l4-5.6-6.5 2.1z"
        fill="#fff"
        transform="translate(-2,0)"
      />
    </svg>
  );
}
function GBFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 60 40" width="28" height="18" {...props} aria-hidden>
      <clipPath id="c">
        <rect width="60" height="40" rx="3" />
      </clipPath>
      <g clipPath="url(#c)">
        <rect width="60" height="40" fill="#012169" />
        <path d="M0,0 60,40 M60,0 0,40" stroke="#fff" strokeWidth="8" />
        <path d="M0,0 60,40 M60,0 0,40" stroke="#C8102E" strokeWidth="4" />
        <rect x="26" width="8" height="40" fill="#fff" />
        <rect y="16" width="60" height="8" fill="#fff" />
        <rect x="28" width="4" height="40" fill="#C8102E" />
        <rect y="18" width="60" height="4" fill="#C8102E" />
      </g>
    </svg>
  );
}

export default function MobileHeader({ locale }: { locale: Loc }) {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const goLocale = (next: Loc) => {
    if (next === locale) return;
    const parts = pathname.split("/");
    parts[1] = next;
    const nextPath = parts.join("/") || `/${next}`;
    router.push(nextPath);
    setOpen(false);
  };
  const CurrentFlag = useMemo(
    () => (locale === "tr" ? TRFlag : GBFlag),
    [locale]
  );

  // --- menu state ---
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const btnWrapRef = useRef<HTMLDivElement | null>(null);

  // esc kapat
  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-[70] h-14",
        "backdrop-blur bg-transparent border-b border-white/10",
        "md:hidden", 
      ].join(" ")}
      role="banner"
    >
      <div className="mx-auto h-full max-w-7xl px-4 flex items-center justify-between">
        <div ref={btnWrapRef} className="relative">
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={open}
            aria-label="Menüyü aç"
            onClick={() => setOpen((o) => !o)}
            className={[
              "inline-flex items-center gap-2 rounded-xl border px-3 py-2",
              "border-white/15 bg-mainColor hover:bg-white/10 text-gray-200",
              "focus:outline-none focus:bg-mainColor focus:ring-white/20",
              open ? "ring-1 ring-white/30" : "",
            ].join(" ")}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden>
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>

            <svg
              viewBox="0 0 20 20"
              className={`w-3 h-3 transition-transform ${
                open ? "rotate-180" : ""
              }`}
              aria-hidden
            >
              <path
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.17l3.71-2.94a.75.75 0 111.04 1.08l-4.24 3.36a.75.75 0 01-.94 0L5.21 8.31a.75.75 0 01.02-1.1z"
                fill="currentColor"
              />
            </svg>
          </button>

          <div
            className={[
              "absolute left-0 top-full mt-2 w-[16rem] origin-top-left",
              "rounded-2xl border border-white/10 backdrop-blur",
              "bg-zinc-900/90 text-gray-200 shadow-xl ring-1 ring-black/40 p-2",
              "transition",
              open
                ? "scale-100 opacity-100"
                : "pointer-events-none scale-95 opacity-0",
            ].join(" ")}
            role="menu"
            aria-label="Ana menü"
          >
  
          
            <ul>
              {SOCIALS.map((it) => {
                const isActive = active === it.label;
                return (
                  <li key={it.label}>
                    <Link
                      role="menuitem"
                      href={it.href}
                      target={
                        it.href.startsWith("mailto:") ? "_self" : "_blank"
                      }
                      rel="noreferrer"
                      onClick={() => setActive(it.label)}
                      className={[
                        "w-full flex items-center gap-2 rounded-xl px-2 py-2",
                        "hover:bg-white/10 active:bg-white/15 focus:outline-none",
                        isActive
                          ? "text-primary ring-1 ring-primary/40 bg-white/5"
                          : "text-gray-300",
                      ].join(" ")}
                    >
                      <SocialIcon
                        url={it.href}
                        bgColor="transparent"
                        fgColor={it.color}
                      />
                      <span className="text-sm">{it.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="my-2 h-px bg-white/20" />

            
            <div className="mt-1 flex items-center gap-2 px-5">
              <button
                type="button"
                aria-label="Türkçe"
                onClick={() => goLocale("tr")}
                className={[
                  "inline-flex items-center justify-center rounded-xl p-1.5",
                  "hover:bg-white/10 focus:bg-white/10 focus:outline-none",
                  locale === "tr" ? "ring-1 ring-white/30" : "",
                ].join(" ")}
                title="Türkçe"
              >
                <TRFlag />
              </button>
              <button
                type="button"
                aria-label="English"
                onClick={() => goLocale("en")}
                className={[
                  "inline-flex items-center justify-center rounded-xl p-1.5",
                  "hover:bg-white/10 focus:bg-white/10 focus:outline-none",
                  locale === "en" ? "ring-1 ring-white/30" : "",
                ].join(" ")}
                title="English"
              >
                <GBFlag />
              </button>
            </div>
          </div>
        </div>
        {/* Center: (opsiyonel logo / ad) */}
        {/* Right: boş veya hızlı eylem */}
        <div className="text-sm font-medium text-gray-200">Ferhan Aydın</div>
      </div>
    </header>
  );
}
