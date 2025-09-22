"use client";
import * as React from "react";

type Props = {
  open: boolean;
  onClick: () => void;
};

export default function MenuButton({ open, onClick }: Props) {
  return (
    <button
      type="button"
      aria-haspopup="menu"
      aria-expanded={open}
      aria-label="Menüyü aç"
      onClick={onClick}
      className={[
        "inline-flex items-center gap-2 rounded-xl  px-3 py-2",
        "border-white/15 bg-transparent  text-gray-200",
        "focus:outline-none  ",
        open ? " text-primary" : "",
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
        className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
        aria-hidden
      >
        <path
          d="M5.23 7.21a.75.75 0 011.06.02L10 10.17l3.71-2.94a.75.75 0 111.04 1.08l-4.24 3.36a.75.75 0 01-.94 0L5.21 8.31a.75.75 0 01.02-1.1z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
}
