import Header from "@/components/header";
import About from "@/sections/about";
import Contact from "@/sections/contact";
import Hero from "@/sections/hero";
import MyProjects from "@/sections/projects";
import Skills from "@/sections/skills";
import WorkExperience from "@/sections/work-experience";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` ${inter.className} bg-mainColor
       text-white z-0 overflow-x-hidden scroll-smooth`}
    >
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="about" className="scroll-mt-[72px]">
        <About />
      </section>
      <section id="experience" className="scroll-mt-[72px]">
        <WorkExperience />
      </section>
      <section id="projects" className="scroll-mt-[72px]">
        <MyProjects />a
      </section>
      <section id="skills" className="scroll-mt-[72px]">
        <Skills />
      </section>
      <section id="contact" className="scroll-mt-[72px]">
        <Contact />
      </section>
    </main>
  );
}
