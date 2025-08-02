import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      client:load
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
      className="my-screen relative mx-auto flex min-h-screen max-w-[2000px] flex-col items-center justify-center text-center md:text-left xl:flex-row xl:space-y-0 xl:px-10"
    >
      <h3 className="absolute top-16 text-2xl uppercase tracking-[20px] text-gray-500">
        Skills
      </h3>
      <motion.div
        client:load
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.5 }}
        className="grid grid-cols-3 gap-5 sm:grid-cols-4"
      >
        <Skill />
      </motion.div>
    </motion.div>
  );
}