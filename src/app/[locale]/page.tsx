import { Inter } from "next/font/google";
import Header from "../components/header";
import Hero from "../sections/hero";
import About from "../sections/about";
import MyProjects from "../sections/projects";
import WorkExperience from "../sections/work-experience";
import Skills from "../sections/skills";
import Education from "../sections/education";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` ${inter.className} bg-mainColor
       text-white z-0 overflow-x-hidden scroll-smooth`}
    >
     
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
      </section>
      <section id="skills" className="scroll-mt-[72px] relative">
        <Education />
      </section>
    
    </main>
  );
}
