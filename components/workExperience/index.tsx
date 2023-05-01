import React from "react";
import Title from "../title";
import { motion } from "framer-motion";
import ExperienceCard from "../experienceCard";

type Props = {};

export default function WorkExperience({}: Props) {
  return (
    <motion.div className="h-screen flex flex-col justify-evenly relative overflow-hidden text-left max-w-full px-10  mx-auto">
      <div className="text-center">
        <Title title="Experience" />
      </div>
      <div className=" w-full  flex space-x-5 p-10 snap-x snap-mandatory overflow-x-scroll">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}
