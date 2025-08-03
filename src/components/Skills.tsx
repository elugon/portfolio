import { motion } from "framer-motion";
import React from "react";
import SkillCard from "./common/SkillCard";
import { skills } from "../data/skills";
import { motionPresets } from "../utils/animations";

type Props = Record<string, never>;

export default function Skills(_props: Props) {
  return (
    <motion.div
      {...motionPresets.fadeInUp}
      className="my-screen relative mx-auto flex min-h-screen max-w-[2000px] flex-col items-center justify-center text-center md:text-left xl:flex-row xl:space-y-0 xl:px-10"
    >
      <h3 className="absolute top-16 text-2xl uppercase tracking-[20px] text-gray-500">
        Skills
      </h3>
      <motion.div
        {...motionPresets.staggerChildren}
        className="grid grid-cols-3 gap-5 sm:grid-cols-4"
      >
        {skills.map((skill) => (
          <SkillCard key={skill.id} {...skill} />
        ))}
      </motion.div>
    </motion.div>
  );
}