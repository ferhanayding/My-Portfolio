import { Inter } from "next/font/google";
import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import WorkExperience from "@/components/workExperience";
import Contact from "@/components/contact";
import Skills from "@/components/skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` ${inter.className} bg-mainColor
       text-white z-0 overflow-x-hidden`}
    >
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <WorkExperience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
