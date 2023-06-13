import { motion } from "framer-motion";
import React from "react";
import ExperienceEY from "./experience/ExperienceEY";
import ExperienceStudentfy from "./experience/ExperienceStudentfy";
import ExperienceSupercellcomp from "./experience/ExperienceSupercellcomp";
import ExperienceProgressus from "./experience/ExperienceProgressus";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
      className="my-screen relative mx-auto flex max-w-full flex-row items-center justify-evenly overflow-hidden px-10 text-left"
    >
      <h3 className="absolute top-16 text-2xl uppercase tracking-[15px] text-gray-500">
        Experience
      </h3>

      <div className="flex h-max w-max snap-x snap-mandatory space-x-5 overflow-x-scroll scroll-smooth p-10 pt-6 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A] sm:pt-16 md:pt-36 lg:pt-44 xl:justify-evenly">
        <ExperienceProgressus />
        <ExperienceEY />
        <ExperienceStudentfy />
        <ExperienceSupercellcomp />
      </div>
    </motion.div>
  );
}
