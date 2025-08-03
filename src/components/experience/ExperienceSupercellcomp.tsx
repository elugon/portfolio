import React from 'react'
import { motion } from 'framer-motion'
import SupercellcompLogo from "../../../public/experiencesImages/SupercellcompLogo.png"

type Props = Record<string, never>

export default function ExperienceCards(_props: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 h-5/6 bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
    <motion.div
    initial={{
        y:-100,
        opacity:0
    }}
    transition={{duration:1.2}}
    whileInView={{
        opacity:1,
        y:0
    }}
    viewport={{once:true}}
    className='w-32 h-32 rounded-lg xl:w-[200px] xl:h-[200px] object-cover object-center'
    >
        <img src={SupercellcompLogo.src} 
        alt="Supercellcomp Logo"/>
    </motion.div>

    <div className='px-0 md:px-10'>
        <h4 className='text-sm md:text-4xl font-light'>IT Consulting</h4>
        <p className='text-sm font-bold md:text-2xl mt-1 decoration-primary/50 underline'>SuperCellComp</p>
        <p className='text-sm md:text-xl py-5 text-gray-300'>July.2013 - July.2015</p>

        <ul className='text-sm list-disc space-y-4 ml-5 md:text-lg'>
            <li>API Developer</li>
            <li>IT Support</li>
        </ul>
    </div>
    </article> 
  ) 
}