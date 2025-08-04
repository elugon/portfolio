import React from "react";
import ProjectCard from "./common/ProjectCard";
import { projects } from "../data/projects";
import { animationClasses } from "../utils/tailwind-animations";

type Props = Record<string, never>;

export default function Projects(_props: Props) {
  return (
    <div
      className={`my-screen relative z-0 mx-auto flex max-w-full flex-col items-center justify-evenly overflow-hidden text-left ${animationClasses.fadeInUp}`}
    >
      <h3 className="absolute top-16 text-2xl uppercase tracking-[20px] text-gray-500">
        Projects
      </h3>

      <div className="relative z-20 flex w-full overflow-y-hidden overflow-x-scroll">
        {projects.map((project, index) => (
          <div
            key={project.id}
            style={{ animationDelay: `${index * 150}ms` }}
            className="animate-scale-in motion-reduce-animation"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
      <div className="absolute top-[30%] left-0 h-[500px] w-full -skew-y-12 bg-primary/10" />
    </div>
  );
}