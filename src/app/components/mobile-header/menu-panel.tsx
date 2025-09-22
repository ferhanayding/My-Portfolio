"use client";
import * as React from "react";

import type { Item, Loc } from "./types";
import SocialList from "./social-list";
import LocaleSwitcher from "./locale-swicther";

type Props = {
  open: boolean;
  items: Item[];
  active: string | null;
  setActive: (label: string | null) => void;
  locale: Loc;
  onLocaleChange: (next: Loc) => void;
};

export default function MenuPanel({
  open,
  items,
  active,
  setActive,
  locale,
  onLocaleChange,
}: Props) {
  return (
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
      <SocialList items={items} active={active} setActive={setActive} />
      <div className="my-2 h-px bg-white/20" />
      <LocaleSwitcher locale={locale} onChange={onLocaleChange} />
    </div>
  );
}
