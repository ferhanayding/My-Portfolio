"use client";
import React from "react";
import { motion } from "framer-motion";
import Title from "../../components/title";
import Divider from "../../components/divider";
import { useTranslations } from "next-intl";

type Props = {};

export default function About({}: Props) {
  const t = useTranslations();
  const ta = useTranslations("about");

  return (
    <div className="md:h-screen max-w-7xl mx-auto items-center justify-center px-5 sm:gap-20 gap-10">
      <div className="mt-20 px-4 sm:px-0">
        <Title title={t("nav.about")} />
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
            {ta("heading")}
          </h4>

          <p className="text-sm sm:text-base md:text-[1rem] text-gray-200 md:text-left text-center leading-relaxed sm:leading-7 break-words whitespace-normal max-w-full">
            {ta("body")}
          </p>
        </motion.div>
      </div>

      <Divider inverted />
    </div>
  );
}
