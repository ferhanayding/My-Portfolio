"use client";
import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { TbBrandRedux, TbBrandNextjs } from "react-icons/tb";
import { FaReact, FaSass } from "react-icons/fa";
import { GiOctopus } from "react-icons/gi";
import { DiNodejs } from "react-icons/di";
import { BsGit } from "react-icons/bs";
import {
  SiJavascript,
  SiTypescript,
  SiJest,
  SiCss3,
  SiHtml5,
  SiTailwindcss,
} from "react-icons/si";
import { useTranslations } from "next-intl";

type SkillIcon = { el: React.ReactElement; color: string; label: string };

const ICONS: SkillIcon[] = [
  { el: <FaReact />, color: "#5ED3F3", label: "React" },
  { el: <TbBrandRedux />, color: "purple", label: "Redux" },
  { el: <SiJavascript />, color: "#EFD81D", label: "JavaScript" },
  { el: <SiTypescript />, color: "#2F74C0", label: "TypeScript" },
  { el: <TbBrandNextjs />, color: "#9CA3AF", label: "Next.js" },
  { el: <SiJest />, color: "#C63D14", label: "Jest" },
  { el: <GiOctopus />, color: "#DB3434", label: "RTL" },
  { el: <DiNodejs />, color: "#7CB701", label: "Node.js" },
  { el: <BsGit />, color: "#E84D31", label: "Git" },
  { el: <SiCss3 />, color: "#254BDD", label: "CSS3" },
  { el: <SiHtml5 />, color: "#E96329", label: "HTML5" },
  { el: <FaSass />, color: "#C76494", label: "Sass" },
  { el: <SiTailwindcss />, color: "#07B0CE", label: "Tailwind" },
];

export default function Loading({
  intervalMs = 500,
  showLabel = true,
}: {
  intervalMs?: number;
  showLabel?: boolean;
}) {
  const [i, setI] = useState(0);
  const t = useTranslations();

  useEffect(() => {
    const id = setInterval(
      () => setI((v) => (v + 1) % ICONS.length),
      intervalMs
    );
    return () => clearInterval(id);
  }, [intervalMs]);

  const current = useMemo(() => ICONS[i], [i]);

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[9999] grid place-items-center 
                 bg-transparent backdrop-blur-md"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-28 w-28 sm:h-32 sm:w-32 grid place-items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(4px)" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="grid place-items-center"
              style={{ color: current.color }}
              aria-label={current.label}
              title={current.label}
            >
              <div className="text-[56px] sm:text-[64px]">{current.el}</div>
            </motion.div>
          </AnimatePresence>
        </div>

        {showLabel && (
          <div className="text-center">
            <div className="text-sm tracking-widest text-white/70">
              {t("loading")}
            </div>
            <div className="text-lg sm:text-xl font-semibold text-white/90">
              {current.label}
            </div>
          </div>
        )}

        <div className="w-40 h-1.5 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            key={`bar-${i}`}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: intervalMs / 1000, ease: "linear" }}
            className="h-full bg-white/30"
          />
        </div>
      </div>
    </div>
  );
}
