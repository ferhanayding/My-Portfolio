"use client";
import React, { JSX } from "react";
import Title from "../../components/ui/title";
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
import {
  SiMui,
  SiReactquery,
  SiReacthookform,
  SiSwiper,
  SiFramer,
  SiGitlab,
} from "react-icons/si";
import { TbApi, TbNetwork, TbTopologyStar3, TbShare3 } from "react-icons/tb";
import SkillItem from "../../components/skill-item";
import { useTranslations } from "next-intl";
import Divider from "../../components/ui/divider";
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
  {
    directionLeft: false,
    icon: <SiMui className="text-[40px]" color="#007FFF" />,
    title: "Material UI",
    color: "#007FFF",
  },
  {
    directionLeft: true,
    icon: <SiReactquery className="text-[40px]" color="#FF4154" />,
    title: "React Query",
    color: "#FF4154",
  },
  {
    directionLeft: false,
    icon: <SiReacthookform className="text-[40px]" color="#02539A" />,
    title: "Formik • Yup",
    color: "#02539A",
  },
  {
    directionLeft: true,
    icon: <SiReacthookform className="text-[40px]" color="#EC5990" />,
    title: "React Hook Form",
    color: "#EC5990",
  },
  {
    directionLeft: false,
    icon: <TbTopologyStar3 className="text-[40px]" color="#7C3AED" />,
    title: "React Flow",
    color: "#7C3AED",
  },
  {
    directionLeft: true,
    icon: <TbShare3 className="text-[40px]" color="#61DAFB" />,
    title: "Context API",
    color: "#61DAFB",
  },
  {
    directionLeft: false,
    icon: <TbApi className="text-[40px]" color="#22C55E" />,
    title: "REST",
    color: "#22C55E",
  },
  {
    directionLeft: true,
    icon: <TbNetwork className="text-[40px]" color="#0EA5E9" />,
    title: "WebSocket",
    color: "#0EA5E9",
  },
  {
    directionLeft: false,
    icon: <SiSwiper className="text-[40px]" color="#6332F6" />,
    title: "Swiper",
    color: "#6332F6",
  },
  {
    directionLeft: true,
    icon: <SiFramer className="text-[40px]" color="#0055FF" />,
    title: "Framer Motion",
    color: "#0055FF",
  },
  {
    directionLeft: false,
    icon: <SiGitlab className="text-[40px]" color="#FCA326" />,
    title: "GitLab • CI/CD",
    color: "#FCA326",
  },
  {
    directionLeft: true,
    icon: <TbApi className="text-[40px]" color="#10B981" />,
    title: "SWR",
    color: "#10B981",
  },
  {
    directionLeft: false,
    icon: <TbShare3 className="text-[40px]" color="#764ABC" />,
    title: "Redux Toolkit",
    color: "#764ABC",
  },
];

export default function Skills({}: Props) {
  const t = useTranslations("nav")
  return (
    <div className="max-w-6xl overflow-hidden text-left p-10 my-auto  mx-auto">
      <div className="text-center mb-10">
        <Title title={t("skills")} />
      </div>
      <div className="grid grid-cols-3  md:grid-cols-9 gap-5 ">
        {data.map((item, index) => (
          <SkillItem key={index} data={item} />
        ))}
      </div>
      <Divider className="bg-primary/60" />
    </div>
  );
}
