"use client";
import * as React from "react";
import { SocialIcon } from "react-social-icons";
import type { Item } from "./types";

type Props = {
  items: Item[];
  active: string | null;
  setActive: (label: string | null) => void;
};

export default function SocialList({ items, active, setActive }: Props) {
  return (
    <ul role="menu" aria-label="Sosyal bağlantılar">
      {items.map((it) => {
        const isActive = active === it.label;
        return (
          <li key={it.label}>
            <SocialIcon
              className={[
                "w-full flex items-center gap-2 rounded-xl px-2 py-2",
                "hover:bg-white/10 active:bg-white/15 focus:outline-none",
                isActive
                  ? "text-primary ring-1 ring-primary/40 bg-white/5"
                  : "text-gray-300",
              ].join(" ")}
              onMouseEnter={() => setActive(it.label)}
              onMouseLeave={() => setActive(null)}
              role="menuitem"
              url={it.href}
              bgColor="transparent"
              fgColor="gray"
            />
            <span className="text-sm">{it.label}</span>
          </li>
        );
      })}
    </ul>
  );
}
