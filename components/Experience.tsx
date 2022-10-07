import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCards from "../components/ExperienceCards"

type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.8}}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl'>
            Experience
        </h3>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
            <ExperienceCards />
            <ExperienceCards />
            <ExperienceCards />
            <ExperienceCards />
        </div>
    </motion.div>
  )
}