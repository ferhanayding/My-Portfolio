"use client";
import React from "react";
import { motion } from "framer-motion";
import Title from "../../components/title";
import Divider from "@/app/components/divider";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="md:h-screen max-w-7xl mx-auto items-center justify-center px-5 sm:gap-20 gap-10">
      <div className="mt-20 px-4 sm:px-0">
        <Title title={"About"} />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-7 px-4 sm:px-0">
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          src="/images/ferhan.png"
          className="rounded-full h-56 w-56 mx-auto object-cover md:mb-0 md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"
          alt="Ferhan Aydın"
        />

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="space-y-2 px-0 sm:px-2 md:px-10 w-full"
        >
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold md:text-left text-center text-gray-300">
            Here is a little background
          </h4>

          <p className="text-sm sm:text-base md:text-[1rem] text-gray-200 md:text-left text-center leading-relaxed sm:leading-7 break-words whitespace-normal max-w-full">
            I began my software journey in 2021 by building on the knowledge I
            gained at school, and in 2022 I took my first professional step into
            the industry at Privia Security. Over the past 3 years, I have
            gained solid experience in frontend development, creating
            user-focused, high-performance, and scalable web applications.
            Throughout this journey, I have not only written code but also
            focused on solving complex problems, researching and applying new
            technologies, and working harmoniously within teams. My goal in
            every project has been to deliver sustainable solutions that combine
            functionality with a refined user experience. Today, as a frontend
            developer driven by continuous learning and growth, I am always
            ready to take on new challenges, develop creative solutions, and
            bring value to every project I contribute to.
          </p>
        </motion.div>
      </div>

      <Divider inverted />
    </div>
  );
}
