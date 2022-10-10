import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import SupercellcompLogo from "../../public/experiencesImages/SupercellcompLogo.png"

type Props = {}

export default function ExperienceCards({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 h-5/6 snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
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
        <Image src={SupercellcompLogo} 
        alt="Supercellcomp Logo"/>
    </motion.div>

    <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>IT Consulting</h4>
        <p className='font-bold text-2xl mt-1 decoration-[#F7AB0A]/50 underline'>SuperCellComp</p>
        <p className='py-5 text-gray-300'>July.2013 - July.2015</p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>API Developer</li>
            <li>IT Support</li>
        </ul>
    </div>
    </article> 
  ) 
}