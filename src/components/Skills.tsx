import React from "react";
import SkillCard from "./common/SkillCard";
import { skills } from "../data/skills";
import { animationClasses } from "../utils/tailwind-animations";

type Props = Record<string, never>;

export default function Skills(_props: Props) {
  return (
    <div
      className={`my-screen relative mx-auto flex min-h-screen max-w-[2000px] flex-col items-center justify-center text-center md:text-left xl:flex-row xl:space-y-0 xl:px-10 ${animationClasses.fadeInUp}`}
    >
      <h3 className="absolute top-16 text-2xl uppercase tracking-[20px] text-gray-500">
        Habilidades
      </h3>
      <div
        className={`grid grid-cols-3 gap-5 sm:grid-cols-4 ${animationClasses.staggerChildren}`}
      >
        {skills.map((skill, index) => (
          <div
            key={skill.id}
            style={{ animationDelay: `${index * 100}ms` }}
            className="animate-scale-in motion-reduce-animation"
          >
            <SkillCard {...skill} />
          </div>
        ))}
      </div>
    </div>
  );
}