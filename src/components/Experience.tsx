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

      <div className="flex h-max w-max space-x-5 overflow-x-scroll scroll-smooth p-10 pt-6 sm:pt-16 md:pt-36 lg:pt-44 xl:justify-evenly">
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            style={{ animationDelay: `${index * 200}ms` }}
            className="animate-slide-up motion-reduce-animation"
          >
            <ExperienceCard {...experience} />
          </div>
        ))}
      </div>
    </div>
  );
}