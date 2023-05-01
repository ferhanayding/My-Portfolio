import React from "react";
import { motion } from "framer-motion";
import { SiJavascript } from "react-icons/si";
type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
     w-[500px] md:w-[600px] xl:w-[900px] bg-[#292929] p-10 snap-center hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden  "
    >
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="w-32 h-32 rounded-full   xl:w-[200px] xl:h-[200px] object-contain object-center"
        src="data:image/png;base64,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"
        alt=""
      />
      <div className="px-0  md:px-10 ">
        <h4 className="text-4xl  font-light ">Frontend Developer</h4>
        <p className="font-bold text-2xl mt-1">Privia Hub</p>
        <div className="flex space-x-2 my-2">
          <SiJavascript color="yellow" />
          <SiJavascript color="yellow" />
          <SiJavascript color="yellow" />
          <SiJavascript color="yellow" />
        </div>
        <p className="uppercase py-5 text-gray-300">
          started work... - ended work..
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            summarysummary summary summary summary summary summary summary
          </li>
          <li>
            summarysummary summary summary summary summary summary summary
          </li>
          <li>
            summarysummary summary summary summary summary summary summary
          </li>
          <li>
            summarysummary summary summary summary summary summary summary
          </li>
          <li>
            summarysummary summary summary summary summary summary summary
          </li>
        </ul>
      </div>
    </article>
  );
}
