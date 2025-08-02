import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative mb-2 flex items-center justify-center"
      client:load
    >
      <div className="absolute mt-52 h-[50px] w-[50px] animate-ping rounded-full border border-[#333333] sm:h-[150px] sm:w-[150px] md:h-[250px] md:w-[250px]" />
      <div className="absolute mt-52 h-[150px] w-[150px] rounded-full border border-[#333333] sm:h-[250px] sm:w-[250px] md:h-[350px] md:w-[350px]" />
      <div className="absolute mt-52 h-[250px] w-[250px] rounded-full border border-[#333333] sm:h-[350px] sm:w-[350px] md:h-[450px] md:w-[450px]" />
      <div className="absolute mt-52 h-[300px] w-[300px] animate-pulse rounded-full border border-primary sm:h-[450px] sm:w-[450px] md:h-[550px] md:w-[550px]" />
      <div className="absolute mt-52 h-[450px] w-[450px] rounded-full border border-[#333333] sm:h-[550px] sm:w-[550px] md:h-[650px] md:w-[650px]" />
    </motion.div>
  );
}