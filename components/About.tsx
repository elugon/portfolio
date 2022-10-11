import { motion } from 'framer-motion'
import React from 'react'
import profilePicture4 from "../public/profileImages/profilePicture4.jpg"
import Image from 'next/image'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.8}}
    className='flex flex-col relative my-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.div
        initial={{
            x:-200,
            opacity:0
        }}
        transition={{duration:1.2}}
        whileInView={{
            opacity:1,
            x:0
        }}
        className='mt-2 md:mt-36 flex-shrink-0 h-32 w-32 sm:w-56 sm:h-56 rounded-full object-cover md:rounded-lg md:w-[400px] md:h-[500px]'
        >
        <Image src={profilePicture4} 
       alt="profile picture"/>
        </motion.div>
        <div className='mt-6 md:mt-10 space-y-10 px-0 md:px-10'>
            <h4 className='text-base font-semibold sm:text-lg md:text-xl lg:text-2xl'>Here is a little background</h4>
            <p className='text-xs sm:text-base md:text-lg lg:text-xl'>
            <span className='decoration-[#F7AB0A]/50 underline'>Systems Engineer.</span> I have extensive experience in the design, programming, implementation and maintenance of IT applications and a global perspective of the main branches of computer science which gives me a multidisciplinary vision in many fields of engineering. This allows me to have a good ability to analyze and solve problems of many types.
         </p>
        </div>
    </motion.div>
  )
}