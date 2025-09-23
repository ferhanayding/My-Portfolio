"use client";
import React, { useRef, useState, useCallback } from "react";
import Title from "../../components/ui/title";
import { motion } from "framer-motion";
import { ExperienceCard } from "../../components/experience-card";
import { CtaCard } from "../../components/experience-card/empty-card";
import Divider from "../../components/ui/divider";
import { useLocale, useTranslations } from "next-intl";

// Yerelleşmiş veri dosyaları:
import { EXPERIENCES_EN } from "@/data/experience/en";
import { EXPERIENCES_TR } from "@/data/experience/tr";

export default function WorkExperience() {
  const railRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const dragState = useRef<{ startX: number; scrollLeft: number }>({
    startX: 0,
    scrollLeft: 0
  });

  const onWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    if (!railRef.current) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      railRef.current.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  }, []);

  const onMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!railRef.current) return;
    setDragging(true);
    railRef.current.classList.add("dragging");
    dragState.current = {
      startX: e.pageX - railRef.current.offsetLeft,
      scrollLeft: railRef.current.scrollLeft
    };
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!dragging || !railRef.current) return;
      const x = e.pageX - railRef.current.offsetLeft;
      const walk = (x - dragState.current.startX) * 1.2;
      railRef.current.scrollLeft = dragState.current.scrollLeft - walk;
    },
    [dragging]
  );

  const endDrag = useCallback(() => {
    if (!railRef.current) return;
    setDragging(false);
    railRef.current.classList.remove("dragging");
  }, []);

  const locale = useLocale(); // 'tr' | 'en'
  const t = useTranslations("nav");
  const EXPERIENCES = locale === "tr" ? EXPERIENCES_TR : EXPERIENCES_EN;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="md:min-h-screen flex flex-col justify-evenly text-left max-w-6xl px-6 sm:px-10 mx-auto"
    >
      <div className="text-center md:my-16 my-10 md:mt-14">
        <Title title={t("experience")} />
      </div>

      <div
        ref={railRef}
        onWheel={onWheel}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseLeave={endDrag}
        onMouseUp={endDrag}
        className="
          mb-0 md:mb-20 rail fancy-scrollbar cursor-grab
          w-full p-2 sm:p-6 
          flex flex-col space-y-6 
          md:flex-row md:space-y-0 md:space-x-6 
          md:overflow-x-auto md:snap-x md:snap-mandatory
          select-none
        "
      >
        {EXPERIENCES.map((exp) => (
          <ExperienceCard key={`${exp.company}-${exp.start}`} exp={exp} />
        ))}
        <CtaCard />
      </div>

      <Divider className="mt-10" />
    </motion.div>
  );
}
