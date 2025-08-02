import React from 'react'
import { motion } from 'framer-motion'
import shoesHouseLogo from "../../../public/projectsImages/shoesHouse.png"

type Props = {}

export default function ShoesHouse({}: Props) {
  return (
    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-2 mt-2 md:p-44 h-screen'>
    <motion.div
        client:load
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
        className='h-auto w-auto mx-1 lg:h-[750px] lg:w-[600px] rounded'
    >
        <img src={shoesHouseLogo.src} 
            alt="shoes house Logo"/>
    </motion.div>
    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
        <h4 className='text-sm sm:text-xl md:text-4xl font-semibold text-center'>
            <span className='underline decoration-primary/50'>
            Shoes House
            </span>
        </h4>
        <p className='text-xs mx-2 sm:text-md md:text-lg text-center md:text-left'>
        An e-Commerce (Mobile First) developed during the Bootcamp at IronHack, has been made with MongoDB/NodeJS for the Backend and with Reactjs for the Frontend.
        </p>
        <p className='space-x-2 text-xs sm:text-md md:text-lg text-center underline decoration-primary/50'>
        <a href="https://github.com/elugon/ShoesHouse-Frontend" target="_blank" rel="noopener noreferrer">
        Github
        </a>
        <a href="https://shoes-house.netlify.app/" target="_blank" rel="noopener noreferrer">
        Deployed
        </a>
        </p>
    </div>
    </div>
  )
}