import Header from "@/app/components/header";
import About from "@/app/sections/about";
import Hero from "@/app/sections/hero";
import MyProjects from "@/app/sections/projects";
import Skills from "@/app/sections/skills";
import WorkExperience from "@/app/sections/work-experience";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` ${inter.className} bg-mainColor
       text-white z-0 overflow-x-hidden scroll-smooth`}
    >
      <Header />
      <section id="hero" className=" relative">
        <Hero />
      </section>
      <section id="about" className="scroll-mt-[72px] relative">
        <About />
      </section>
      <section id="experience" className="scroll-mt-[72px] relative">
        <WorkExperience />
      </section>
      <section id="projects" className="scroll-mt-[72px] relative">
        <MyProjects />
      </section>
      <section id="skills" className="scroll-mt-[72px] relative">
        <Skills />
        {/* <Divider /> */}
      </section>
      {/* <section id="contact" className="scroll-mt-[72px] relative">
        <Contact />
        <Divider inverted />
      </section> */}
    </main>
  );
}
