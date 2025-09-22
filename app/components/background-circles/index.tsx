"use client"

import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 1.5 }}
      className="flex relative justify-center items-center"
    >
      <div className="absolute border border-primary/40 rounded-full h-[150px] w-[150px] mt-52 animate-ping " />
      <div className="absolute border border-secondary rounded-full h-[250px] w-[250px] mt-52 " />
      <div className="absolute border hidden sm:block border-secondary rounded-full h-[350px] w-[350px] mt-52 " />
      <div className="absolute border hidden sm:block border-primary opacity-20 rounded-full h-[450px] w-[450px] mt-52 animate-pulse " />
    </motion.div>
  );
}
