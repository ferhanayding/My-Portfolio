"use client";
import * as React from "react";
import type { Loc } from "./types";
import { TRFlag, GBFlag } from "./flag";

type Props = {
  locale: Loc;
  onChange: (next: Loc) => void;
};

export default function LocaleSwitcher({ locale, onChange }: Props) {
  return (
    <div className="mt-1 flex items-center gap-2 px-5">
      <button
        type="button"
        aria-label="Türkçe"
        onClick={() => onChange("tr")}
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
        onClick={() => onChange("en")}
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
  );
}
