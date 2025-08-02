import { motion } from "framer-motion";
import React from "react";
import { personalInfo } from "../../data/personal-info";
import { motionPresets } from "../../utils/animations";
import type { SectionProps } from "../../types";

interface AboutProps extends SectionProps {
  profileImage?: string;
}

export default function About({ 
  title = "About", 
  profileImage = "/profileImages/profilePicture4.jpg",
  className = ""
}: AboutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
      className={`my-screen relative mx-auto flex max-w-7xl flex-col items-center justify-evenly px-2 text-center sm:px-10 md:flex-row md:text-left ${className}`}
      client:load
    >
      <h3 className="absolute top-16 text-2xl uppercase tracking-[20px] text-gray-500">
        {title}
      </h3>
      
      <motion.div
        {...motionPresets.slideInFromLeft}
        className="mt-2 h-32 w-32 flex-shrink-0 rounded-full object-cover sm:h-56 sm:w-56 md:mt-36 md:h-[500px] md:w-[400px] md:rounded-lg"
        client:load
      >
        <img 
          src={profileImage} 
          alt={`${personalInfo.name} about picture`}
          className="w-full h-full object-cover rounded-full md:rounded-lg"
          loading="lazy"
        />
      </motion.div>
      
      <div className="mt-6 space-y-2 px-0 md:mt-10 md:space-y-10 md:px-10">
        <h4 className="text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
          Here is a little background
        </h4>
        <p className="w-full text-xs sm:text-base md:text-lg lg:text-xl leading-relaxed">
          <span className="underline decoration-primary/50">
            Systems Engineer.
          </span>{" "}
          {personalInfo.description} This allows me to have a good
          ability to analyze and solve problems of many types.
        </p>
        
        {/* Additional info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <h5 className="text-primary font-semibold mb-2">Focus Areas</h5>
            <p className="text-gray-300 text-sm">Full-stack development, React ecosystem, and modern web technologies</p>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <h5 className="text-primary font-semibold mb-2">Approach</h5>
            <p className="text-gray-300 text-sm">Clean code, user-centered design, and continuous learning</p>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <h5 className="text-primary font-semibold mb-2">Interests</h5>
            <p className="text-gray-300 text-sm">Soccer, cinema, and exploring new technologies</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}