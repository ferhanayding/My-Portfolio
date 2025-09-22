import React from "react";
import { motion } from "framer-motion";
type SkillItemProps = {
  data: {
    directionLeft: boolean;
    icon: JSX.Element;
    title: string;
    color: string;
  };
};
export default function SkillItem({ data }: SkillItemProps) {
  return (
    <motion.div
      key={data?.title}
      initial={{ x: data.directionLeft ? -200 : 200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="group  relative flex cursor-pointer  border border-gray-500 min-w-20 min-h-20  md:w-24 md:h-24 p-2  items-center justify-center  rounded-full "
    >
      <div className="group-hover:opacity-0 transition-all duration-300">
        {data.icon}
      </div>
      <div
        className={`absolute text-base text-center uppercase opacity-0 transition-all  font-medium duration-300 group-hover:opacity-100    `}
      >
        <span style={{ color: data.color }}>{data.title}</span>
      </div>
    </motion.div>
  );
}
