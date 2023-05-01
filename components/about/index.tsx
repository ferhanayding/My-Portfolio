import React from "react";
import { motion } from "framer-motion";
import Title from "../title";
type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex  h-screen flex-col   max-w-7xl px-10 justify-center  sm:gap-20 gap-10  mx-auto items-center ">
      <Title title={"About"} />
      <div className="flex flex-col md:flex-row gap-7">
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          src="/images/ferhan.png"
          className="rounded-full h-56 mx-auto object-cover mt-30 md:mb-0
        flex-shrink-0 w-56 md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px] "
        />
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="space-y-2 px-0 md:px-10 sm:px-2"
        >
          <h4 className="text-4xl font-semibold md:text-left text-center text-gray-300 ">
            Here is a little background
          </h4>
          <p className="text-center md:text-left text-gray-200">
            Software developer with experience in frontend development. Skilled
            in developing web apps, solving problems, and researching new
            technologies. Able to work in harmony as part of a team.
            Consistently delivers effective solutions to complex software
            problems and always seeking new challenges and opportunities to
            further growth as a developer.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
