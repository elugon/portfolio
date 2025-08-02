import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
      className="my-screen relative mx-auto flex max-w-7xl flex-col items-center justify-evenly px-2 text-center sm:px-10 md:flex-row md:text-left"
      client:load
    >
      <h3 className="absolute top-16 text-2xl uppercase tracking-[20px] text-gray-500">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        className="mt-2 h-32 w-32 flex-shrink-0 rounded-full object-cover sm:h-56 sm:w-56 md:mt-36 md:h-[500px] md:w-[400px] md:rounded-lg"
        client:load
      >
        <img 
          src="/profileImages/profilePicture4.jpg" 
          alt="profile picture"
          className="w-full h-full object-cover rounded-full md:rounded-lg"
        />
      </motion.div>
      <div className="mt-6 space-y-2 px-0 md:mt-10 md:space-y-10 md:px-10">
        <h4 className="text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
          Here is a little background
        </h4>
        <p className="w-full text-xs sm:text-base md:text-lg lg:text-xl">
          <span className="underline decoration-primary/50">
            Systems Engineer.
          </span>{" "}
          I have extensive experience in the design, programming, implementation
          and maintenance of IT applications and a global perspective of the
          main branches of computer science which gives me a multidisciplinary
          vision in many fields of engineering. This allows me to have a good
          ability to analyze and solve problems of many types.
        </p>
      </div>
    </motion.div>
  );
}