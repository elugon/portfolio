import { motion } from "framer-motion";
import React from "react";
import ShoesHouse from "../components/projects/ShoesHouse";
import IronCrypto from "../components/projects/IronCrypto";
import UltimateTodo from "../components/projects/UltimateTodo";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
      className="my-screen relative z-0 mx-auto flex max-w-full flex-col items-center justify-evenly overflow-hidden text-left"
    >
      <h3 className="absolute top-16 text-2xl uppercase tracking-[20px] text-gray-500">
        Projects
      </h3>

      <div className="relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
        <ShoesHouse />
        <IronCrypto />
        <UltimateTodo />
      </div>
      <div className="absolute top-[30%] left-0 h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10" />
    </motion.div>
  );
}
