"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "../../components/background-circles";
import HashLink from "../../components/hash-link";
import Divider from "../../components/divider";
import { useTranslations } from "next-intl";

type Props = {};

export default function Hero({}: Props) {
  const t = useTranslations();

  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Ferhan👋",
      "<Developer knowledge={experience}/>",
      "../SolutionOriented.tsx",
    ],
    delaySpeed: 2000,
    loop: true,
  });
  return (
    <div className=" sm:h-[80vh] h-[70vh] flex flex-col space-y-8 pt-20 items-center justify-center text-center overflow-hidden ">
      <div className="relative">
        <BackgroundCircles />
      </div>
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover "
        src="/images/ben.jpeg"
        alt=""
      />
      <div className="z-10">
        <h2 className="text-sm uppercase ml-4 text-gray-500  pb-2 tracking-[7px] md:tracking-[15px]">
          {t("nav.softwareDev")}
        </h2>
        <h1 className="text-base lg:text-2xl font-semibold ">
          <span className=" text-primary/70">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
        <div className="sm:mt-20 mt-5 grid sm:grid-cols-4  grid-cols-2  ">
          <HashLink href="/#about">
            <button className="heroButton group">{t("nav.about")}</button>
          </HashLink>
          <HashLink href="/#experience">
            <button className="heroButton group">{t("nav.experience")}</button>
          </HashLink>
          <HashLink href="/#skills">
            <button className="heroButton group">{t("nav.skills")}</button>
          </HashLink>
          <HashLink href="/#projects">
            <button className="heroButton group">{t("nav.projects")}</button>
          </HashLink>
        </div>
      </div>
      <Divider className="bg-primary/30" />
    </div>
  );
}
