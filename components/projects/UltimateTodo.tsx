import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function UltimateTodo({}: Props) {
  return (
    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-2 mt-2 md:p-44 h-screen'>
    <motion.img
        initial={{
            y:-300
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{
            opacity:1,
            y:0
        }}
        viewport={{
            once:true
        }}
        src='https://github.com/elugon/ultimate-todo-app/raw/master/public/wireframe.png'
        alt=''
        className='max-h-22 sm:max-h-38 md:max-h-80 rounded'
    />
    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
        <h4 className='text-sm sm:text-xl md:text-4xl font-semibold text-center'>
            <span className='underline decoration-[#F7AB0A]/50'>
            Ultimate To-Do
            </span>
        </h4>
        <p className='text-xs sm:text-md md:text-lg text-center md:text-left'>
        A desktop web application which allows you to make a to-do list, has developed multiple functions such as adding, modifying, deleting and completing tasks.</p>
        <p className='space-x-2 text-xs sm:text-md md:text-lg text-center underline decoration-[#F7AB0A]/50'>
        <a href="https://github.com/elugon/ultimate-todo-app" target="_blank" rel="noopener noreferrer">
        Github
        </a>
        <a href="https://ultimate-to-do-list.netlify.app/" target="_blank" rel="noopener noreferrer">
        Deployed
        </a>
        </p>
    </div>
    </div>
  )
}