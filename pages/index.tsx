import Divider from "@/components/divider";
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
