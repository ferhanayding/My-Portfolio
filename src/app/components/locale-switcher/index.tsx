"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState, useTransition } from "react";

type Loc = "tr" | "en";

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

export default function LocaleSwitcher({ current }: { current: Loc }) {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const [pending, start] = useTransition();

  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const firstItemRef = useRef<HTMLButtonElement | null>(null);
  const secondItemRef = useRef<HTMLButtonElement | null>(null);

  const go = (next: Loc) => {
    if (next === current) return;
    start(() => {
      const parts = pathname.split("/");
      parts[1] = next;
      const nextPath = parts.join("/") || `/${next}`;
      router.push(nextPath);
      setOpen(false);
    });
  };

  const CurrentFlag = useMemo(
    () => (current === "tr" ? TRFlag : GBFlag),
    [current]
  );

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    window.addEventListener("mousedown", onClick);
    window.addEventListener("keydown", onEsc);
    return () => {
      window.removeEventListener("mousedown", onClick);
      window.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      const el =
        current === "tr" ? secondItemRef.current : firstItemRef.current;
      (el ?? firstItemRef.current)?.focus();
    }
  }, [open, current]);

  const onMenuKeyDown = (e: React.KeyboardEvent) => {
    const items = [firstItemRef.current, secondItemRef.current].filter(
      Boolean
    ) as HTMLButtonElement[];
    const idx = items.findIndex((el) => el === document.activeElement);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      items[(idx + 1) % items.length]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      items[(idx - 1 + items.length) % items.length]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      items[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      items[items.length - 1]?.focus();
    }
  };

  return (
    <>
      <div className="relative inline-block text-left">
        <button
          ref={btnRef}
          type="button"
          aria-haspopup="menu"
          aria-expanded={open}
          aria-label="Dil değiştir"
          disabled={pending}
          onClick={() => setOpen((o) => !o)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setOpen(true);
            }
          }}
          className={[
            "inline-flex items-center justify-center rounded-2xl border px-2.5 py-1.5",
            "border-white/15 bg-white/5 hover:bg-white/10",
            "transition focus:outline-none focus:ring-2 focus:ring-white/20",
            pending ? "opacity-80" : "",
            open
              ? "ring-1 ring-white/30 shadow-[0_0_24px_-10px_rgba(255,255,255,0.5)]"
              : "",
          ].join(" ")}
        >
          <span
            className={[
              "grid place-items-center rounded-md overflow-hidden",
              "flag-wave",
            ].join(" ")}
            aria-hidden
          >
            <CurrentFlag />
          </span>
          <svg
            className={`ml-1 h-3 w-3 transition-transform ${
              open ? "rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden
          >
            <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.17l3.71-2.94a.75.75 0 111.04 1.08l-4.24 3.36a.75.75 0 01-.94 0L5.21 8.31a.75.75 0 01.02-1.1z" />
          </svg>
        </button>

        <div
          ref={menuRef}
          role="menu"
          aria-label="Diller"
          tabIndex={-1}
          onKeyDown={onMenuKeyDown}
          className={[
            "absolute right-0 mt-2 w-18 origin-top-right",
            "rounded-2xl border border-white/10 backdrop-blur",
            "bg-mainColor shadow-lg ring-1 ring-black/5",
            "transition will-change-transform",
            open
              ? "scale-100 opacity-100"
              : "pointer-events-none scale-95 opacity-0",
          ].join(" ")}
          style={{
            transformOrigin: "90% 0%",
          }}
        >
          <ul className="p-1.5">
            <li>
              <button
                ref={firstItemRef}
                role="menuitem"
                aria-label="Türkçe"
                onClick={() => go("tr")}
                className={[
                  "w-full flex items-center justify-center rounded-xl p-2",
                  "hover:bg-white/15 focus:bg-white/15 focus:outline-none",
                  current === "tr" ? "ring-1 ring-white/30" : "",
                ].join(" ")}
              >
                <TRFlag />
              </button>
            </li>
            <li className="mt-1">
              <button
                ref={secondItemRef}
                role="menuitem"
                aria-label="English"
                onClick={() => go("en")}
                className={[
                  "w-full flex items-center justify-center rounded-xl p-2",
                  "hover:bg-white/15 focus:bg-white/15 focus:outline-none",
                  current === "en" ? "ring-1 ring-white/30" : "",
                ].join(" ")}
              >
                <GBFlag />
              </button>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        /* hafif dalga animasyonu */
        @keyframes wave {
          0% {
            transform: rotate(0deg) translateZ(0);
          }
          25% {
            transform: rotate(2deg) translateY(-0.5px);
          }
          50% {
            transform: rotate(0deg) translateY(0);
          }
          75% {
            transform: rotate(-2deg) translateY(0.5px);
          }
          100% {
            transform: rotate(0deg) translateY(0);
          }
        }
        .flag-wave {
          animation: wave 1.8s ease-in-out infinite;
          transform-origin: 10% 90%;
        }
        button[disabled] {
          cursor: default;
          opacity: 0.9;
        }
      `}</style>
    </>
  );
}
