import React from 'react'
import { motion } from 'framer-motion'
import ProgressusLogo from "../../../public/experiencesImages/ProgressusLogo.png"

type Props = {}

export default function ExperienceCards({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 h-5/6 snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.div
        client:load
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
            <img src={ProgressusLogo.src} 
            alt="Progressus Logo"/>
        </motion.div>

        <div className='px-0 md:px-10'>
            <h4 className='text-sm md:text-4xl font-light'>Software Engineer</h4>
            <p className='font-bold text-sm md:text-2xl mt-1 decoration-primary/50 underline'>Progressus Europe</p>
            <p className='text-sm md:text-xl py-5 text-gray-300'>December.2022 - Present</p>

            <ul className='text-sm list-disc space-y-4 ml-5 md:text-lg'>
                <li>Software Development</li>
                <li>CRM Consulting</li>
            </ul>
        </div>
    </article> 
  ) 
}