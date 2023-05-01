import React, { Component } from "react";
import { motion } from "framer-motion";
import Title from "../title";
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

import SkillItem from "../skilltem";
type Props = {};
type SkillData = {
  directionLeft: boolean;
  icon: JSX.Element;
  title: string;
  color: string;
};

const data: SkillData[] = [
  {
    directionLeft: true,
    icon: <FaReact className="text-[40px]" color="#5ED3F3" />,
    color: "#5ED3F3",
    title: "React JS",
  },
  {
    directionLeft: false,
    icon: <TbBrandRedux className="text-[40px]" color="purple" />,
    title: "Redux",
    color: "purple",
  },
  {
    directionLeft: true,
    icon: <SiJavascript className="text-[40px]" color="#EFD81D" />,
    title: "JS",
    color: "#EFD81D",
  },
  {
    directionLeft: false,
    icon: <SiTypescript className="text-[40px]" color="#2F74C0" />,
    title: "TS",
    color: "#2F74C0",
  },
  {
    directionLeft: true,
    icon: <TbBrandNextjs className="text-[40px]" color="gray" />,
    title: "Next JS",
    color: "#5ED3F3",
  },
  {
    directionLeft: false,
    icon: <SiJest className="text-[40px]" color="#C63D14" />,
    title: "Jest",
    color: "#C63D14",
  },
  {
    directionLeft: true,
    icon: <GiOctopus className="text-[40px]" color="#DB3434" />,
    title: "RTL",
    color: "#DB3434",
  },
  {
    directionLeft: false,
    icon: <DiNodejs className="text-[40px]" color="#7CB701" />,
    title: "Node JS",
    color: "#7CB701",
  },
  {
    directionLeft: true,
    icon: <BsGit className="text-[40px]" color="#E84D31" />,
    title: "Git",
    color: "#E84D31",
  },
  {
    directionLeft: false,
    icon: <SiCss3 className="text-[40px]" color="#254BDD" />,
    title: "Css",
    color: "#254BDD",
  },
  {
    directionLeft: true,
    icon: <SiHtml5 className="text-[40px]" color="#E96329" />,
    title: "html",
    color: "#E96329",
  },
  {
    directionLeft: false,
    icon: <FaSass className="text-[40px]" color="#C76494" />,
    title: "Sass",
    color: "#C76494",
  },
  {
    directionLeft: true,
    icon: <SiTailwindcss className="text-[40px]" color="#07B0CE" />,
    title: "tailwind",
    color: "#07B0CE",
  },
];

export default function Skills({}: Props) {
  return (
    <motion.div
      className="h-screen flex flex-col
     justify-evenly items-center max-w-[2000]  relative overflow-hidden text-left px-10  mx-auto"
    >
      <div className="text-center">
        <Title title="skills" />
      </div>
      <div className="grid grid-cols-4 gap-5 ">
        {data.map((SkillData) => (
          <SkillItem data={SkillData} />
        ))}
      </div>
    </motion.div>
  );
}
