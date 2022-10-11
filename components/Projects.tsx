import React from 'react'
import { motion } from 'framer-motion'
import ShoesHouse from "../components/projects/ShoesHouse"
import IronCrypto from "../components/projects/IronCrypto"
import UltimateTodo from "../components/projects/UltimateTodo"

type Props = {}

export default function Projects({}: Props) {
    const projects=[1,2,3,4,5];
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.8}} 
    className='my-screen relative flex overflow-hidden flex-col text-left max-w-full justify-evenly mx-auto items-center z-0'>
        <h3
         className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
            <ShoesHouse />
            <IronCrypto />
            <UltimateTodo />              
        </div>
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}