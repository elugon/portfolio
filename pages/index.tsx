import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";

const Home: NextPage = () => {
  return (
    <div className="my-screen z-0 snap-y snap-mandatory overflow-x-hidden overflow-y-scroll bg-[rgb(36,36,36)] p-2 text-white scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title>Elu Gonzalez Portfolio</title>
      </Head>
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;
