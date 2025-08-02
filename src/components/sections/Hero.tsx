import Typewriter from "typewriter-effect";
import React from "react";
import BackgroundCircles from "../BackgroundCircles";
import { personalInfo, typewriterStrings } from "../../data/personal-info";

interface HeroProps {
  className?: string;
}

export default function Hero({ className = "" }: HeroProps) {
  return (
    <div className={`my-screen flex flex-col items-center justify-center space-y-8 overflow-hidden pt-14 text-center md:pt-32 lg:pt-52 xl:pt-64 ${className}`}>
      <BackgroundCircles />
      
      <div className="relative mx-auto h-32 w-32 rounded-full object-cover md:h-40 md:w-40 lg:h-48 lg:w-48">
        <img 
          src="/profileImages/profilePicture3.png" 
          alt={`${personalInfo.name} profile picture`}
          className="rounded-full w-full h-full object-cover"
          loading="eager"
          width="192"
          height="192"
        />
      </div>
      
      <div className="z-20">
        <h2 className="pb-2 text-xs uppercase tracking-[3px] text-gray-500 sm:text-sm">
          {personalInfo.title}
        </h2>
        <h1 className="px-10 pt-8 text-xs font-semibold sm:text-sm md:text-base lg:text-2xl">
          <span className="mr-3">
            <Typewriter
              options={{
                strings: typewriterStrings,
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
          </span>
        </h1>
      </div>
      
      <nav className="flex w-20 flex-row justify-center pt-5 sm:pt-12 md:pt-24" aria-label="Navigation to portfolio sections">
        <a href="#about" className="heroButton" aria-label="Go to About section">
          About
        </a>
        <a href="#experience" className="heroButton" aria-label="Go to Experience section">
          Experience
        </a>
        <a href="#skills" className="heroButton" aria-label="Go to Skills section">
          Skills
        </a>
        <a href="#projects" className="heroButton" aria-label="Go to Projects section">
          Projects
        </a>
      </nav>
    </div>
  );
}