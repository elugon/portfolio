import { motion } from "framer-motion";
import React from "react";
import { personalInfo } from "../data/personal-info";
import { motionPresets } from "../utils/animations";

type Props = Record<string, never>;

export default function About(_props: Props) {
  return (
    <motion.section
      {...motionPresets.fadeInUp}
      className="my-screen relative mx-auto flex max-w-7xl flex-col items-center justify-evenly px-2 text-center sm:px-10 md:flex-row md:text-left"
      id="about"
    >
      <motion.h2 
        {...motionPresets.slideInFromTop}
        className="absolute top-16 text-2xl uppercase tracking-[20px] text-gray-500"
      >
        About
      </motion.h2>
      
      <motion.div
        {...motionPresets.slideInFromLeft}
        className="mt-2 h-32 w-32 flex-shrink-0 rounded-full object-cover sm:h-56 sm:w-56 md:mt-36 md:h-[500px] md:w-[400px] md:rounded-lg overflow-hidden"
      >
        <img 
          src="/profileImages/profilePicture4.jpg" 
          alt={`${personalInfo.name} profile picture`}
          className="w-full h-full object-cover rounded-full md:rounded-lg transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </motion.div>
      
      <motion.div 
        {...motionPresets.slideInFromRight}
        className="mt-6 space-y-2 px-0 md:mt-10 md:space-y-10 md:px-10"
      >
        <h3 className="text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
          Here is a little background
        </h3>
        <div className="w-full text-xs sm:text-base md:text-lg lg:text-xl space-y-4">
          <p>
            <span className="underline decoration-primary/50 font-semibold">
              {personalInfo.title}.
            </span>{" "}
            {personalInfo.description}
          </p>
          <p className="text-gray-400 text-sm">
            This allows me to have a good ability to analyze and solve problems of many types, 
            always focusing on clean code, performance optimization, and user experience.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}