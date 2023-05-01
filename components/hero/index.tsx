import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "../backgroundCircles";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
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
          Software Engineer
        </h2>
        <h1 className="text-3xl lg:text-4xl font-semibold px-10">
          <span className="mr-3 text-primary/70">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
        <div className="mt-20  hidden sm:block ">
          <Link href={"#about"}>
            <button className="heroButton">About</button>
          </Link>
          <Link href={"#experience"}>
            <button className="heroButton">Experience</button>
          </Link>
          <Link href={"#skills"}>
            <button className="heroButton">Skills</button>
          </Link>
          <Link href={"#projects"}>
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
