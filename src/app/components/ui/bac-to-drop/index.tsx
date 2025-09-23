"use client";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0;
        setVisible(y > 300);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="En üste git"
      className={[
        "fixed bottom-4 right-4 z-[80] md:hidden",
        "h-12 w-12 rounded-full",
        "bg-primary/80 text-black shadow-lg shadow-black/30",
        "flex items-center justify-center",
        "outline-none ring-0 focus:ring-2 focus:ring-white/60",
        "active:scale-[0.97]",
        "transition-all duration-300",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none",
      ].join(" ")}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          d="M12 5l-6.5 6.5a1 1 0 001.4 1.4L11 8.3V19a1 1 0 102 0V8.3l4.6 4.6a1 1 0 001.4-1.4L12 5z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
}
