import { motion } from "framer-motion";
import React from "react";
import SkillCard from "../common/SkillCard";
import { skills } from "../../data/skills";
import { motionPresets } from "../../utils/animations";
import type { SectionProps } from "../../types";

interface SkillsProps extends SectionProps {
  showProficiency?: boolean;
}

export default function Skills({ 
  title = "Skills", 
  showProficiency = false,
  className = ""
}: SkillsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={`my-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center ${className}`}
      client:load
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        {title}
      </h3>

      <h3 className="absolute top-28 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 pt-20 max-w-6xl">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            {...motionPresets.scaleIn}
            transition={{ 
              ...motionPresets.scaleIn.transition, 
              delay: skills.indexOf(skill) * 0.1 
            }}
            client:load
            className="group"
          >
            <SkillCard 
              {...skill} 
              showProficiency={showProficiency}
              className="h-full"
            />
          </motion.div>
        ))}
      </div>

      {/* Skills summary */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-gray-400 text-sm max-w-md">
          Technologies I've worked with in professional and personal projects
        </p>
      </div>
    </motion.div>
  );
}