import React from "react";
import ExperienceCard from "./common/ExperienceCard";
import { experiences } from "../data/experience";
import { animationClasses } from "../utils/tailwind-animations";

type Props = Record<string, never>;

export default function Experience(_props: Props) {
  return (
    <div
      className={`my-screen relative mx-auto flex max-w-full flex-row items-center justify-evenly overflow-hidden px-10 text-left ${animationClasses.fadeInUp}`}
    >
      <h3 className="absolute top-16 text-2xl uppercase tracking-[15px] text-gray-500">
        Experiencia
      </h3>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-6 pt-6 sm:pt-16 md:pt-24 lg:pt-32">
        {experiences.map((experience, index) => (
          <ExperienceCard 
            key={experience.id}
            {...experience} 
            className="animate-slide-up motion-reduce-animation"
            style={{ animationDelay: `${index * 150}ms` }}
          />
        ))}
      </div>
    </div>
  );
}