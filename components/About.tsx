import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.8}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.img
        initial={{
            x:-200,
            opacity:0
        }}
        transition={{duration:1.2}}
        whileInView={{
            opacity:1,
            x:0
        }}
        src='https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'
        className='mt-20 flex-shrink-0 w-44 h-44 sm:w-56 sm:h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]'
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a little background</h4>
            <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto pariatur eaque tenetur dicta nemo voluptatum optio laudantium voluptatibus, sit laboriosam facere! Laboriosam ea dolores quo quae nemo ut in molestias.</p>
        </div>
    </motion.div>
  )
}