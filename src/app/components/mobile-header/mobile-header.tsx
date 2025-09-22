"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { SOCIALS } from "./constants";

import type { Loc } from "./types";
import MenuButton from "./menu-button";
import MenuPanel from "./menu-panel";
import { greatVibes } from "../../fonts";

type Props = { locale: Loc };

export default function MobileHeader({ locale }: Props) {
  const pathname = usePathname() || "/";
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const goLocale = (next: Loc) => {
    if (next === locale) return;
    const parts = pathname.split("/");
    parts[1] = next;
    const nextPath = parts.join("/") || `/${next}`;
    router.push(nextPath);
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
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
        <div ref={wrapRef} className="relative">
          <MenuButton open={open} onClick={() => setOpen((o) => !o)} />
          <MenuPanel
            open={open}
            items={SOCIALS}
            active={active}
            setActive={setActive}
            locale={locale}
            onLocaleChange={goLocale}
          />
        </div>

        <div
          className={[
            greatVibes.className,
            "text-xl sm:text-2xl",
            "tracking-normal leading-none",
            "text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-primary",
            "drop-shadow-[0_1px_0_rgba(0,0,0,0.35)]",
            "select-none antialiased",
            "rotate-[0.5deg]",
          ].join(" ")}
          style={{ letterSpacing: "0.2px" }}
        >
          Ferhan Aydın
        </div>
      </div>
    </header>
  );
}
