import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCards({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 h-5/6 snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
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
        src='https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'
        className='w-32 h-32 rounded-lg xl:w-[200px] xl:h-[200px] object-cover object-center'
        alt=''
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>IT Consulting</h4>
            <p className='font-bold text-2xl mt-1'>EY</p>
            <div className='flex space-x-2 my-2'>
                <img
                    className='h-10 w-10 rounded-full'
                    src='https://ih1.redbubble.net/image.815350023.4911/pp,840x830-pad,1000x1000,f8f8f8.u7.jpg'
                    alt=''
                />
                <img
                    className='h-10 w-10 rounded-full'
                    src='https://ih1.redbubble.net/image.815350023.4911/pp,840x830-pad,1000x1000,f8f8f8.u7.jpg'
                    alt=''
                />
                <img
                    className='h-10 w-10 rounded-full'
                    src='https://ih1.redbubble.net/image.815350023.4911/pp,840x830-pad,1000x1000,f8f8f8.u7.jpg'
                    alt=''
                />
            </div>
            <p className='uppercase py-5 text-gray-300'>Started work... - Ended...</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
            </ul>
        </div>
    </article> 
  ) 
}