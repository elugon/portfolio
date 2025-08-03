import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./common/ExperienceCard";
import { experiences } from "../data/experience";
import { motionPresets } from "../utils/animations";

type Props = Record<string, never>;

export default function Experience(_props: Props) {
  return (
    <motion.div
      {...motionPresets.fadeInUp}
      className="my-screen relative mx-auto flex max-w-full flex-row items-center justify-evenly overflow-hidden px-10 text-left"
    >
      <h3 className="absolute top-16 text-2xl uppercase tracking-[15px] text-gray-500">
        Experience
      </h3>

      <div className="flex h-max w-max space-x-5 overflow-x-scroll scroll-smooth p-10 pt-6 sm:pt-16 md:pt-36 lg:pt-44 xl:justify-evenly">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} {...experience} />
        ))}
      </div>
    </motion.div>
  );
}