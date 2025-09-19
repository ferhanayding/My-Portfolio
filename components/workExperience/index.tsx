import React from "react";
import Title from "../title";
import { motion } from "framer-motion";
import { EXPERIENCES } from "@/data/experience";
import { ExperienceCard } from "../experienceCard";
import { CtaCard } from "../experienceCard/empty-card";

export default function WorkExperience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen flex flex-col justify-evenly relative overflow-hidden text-left max-w-6xl px-6 sm:px-10 mx-auto"
    >
      <div className="text-center">
        <Title title="EXPERIENCE" />
      </div>

      <div
        className="w-full flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 
                   p-2 sm:p-6 md:snap-x md:snap-mandatory 
                   md:overflow-x-auto fancy-scrollbar"
      >
        {EXPERIENCES.map((exp) => (
          <ExperienceCard key={`${exp.company}-${exp.start}`} exp={exp} />
        ))}

        <CtaCard />
      </div>
    </motion.div>
  );
}
