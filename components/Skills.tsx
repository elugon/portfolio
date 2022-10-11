import React from 'react'
import { motion } from 'framer-motion'
import Skill from '../components/Skill'

type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.8}} 
    className='my-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 
        className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3>
          <motion.div
          initial={{opacity:0, x:-200}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:2.5}}  
          className='grid grid-cols-3 sm:grid-cols-4 gap-5'
          >
            <Skill />
          </motion.div>
        
    </motion.div>
  )
}