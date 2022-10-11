import React from 'react'
import { motion } from 'framer-motion'
import ExperienceEY from "./experience/ExperienceEY"
import ExperienceStudentfy from "./experience/ExperienceStudentfy"
import ExperienceSupercellcomp from "./experience/ExperienceSupercellcomp"

type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.8}}
    className='my-screen flex relative overflow-hidden text-left flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-16 uppercase tracking-[15px] text-gray-500 text-2xl'>
            Experience
        </h3>

        <div className='h-max w-max pt-36 xl:justify-evenly flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
            <ExperienceEY />
            <ExperienceStudentfy />
            <ExperienceSupercellcomp />
            
        </div>
    </motion.div>
  )
}