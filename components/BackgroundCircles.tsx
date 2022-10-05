import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div initial={{
        opacity:0,
    }} animate={{
        scale:[1,2,2,3,1],
        opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
        borderRadius:['20%','20%','50%','80%','20%'],
    }} transition={{
        duration:2.5,
    }} className='mb-2 relative flex justify-center items-center'>
        <div className='absolute border border-[#333333] rounded-full h-[50px] w-[50px] sm:h-[150px] sm:w-[150px] md:h-[250px] md:w-[250px] mt-52 animate-ping'/>
        <div className='absolute border border-[#333333] rounded-full h-[150px] w-[150px] sm:h-[250px] sm:w-[250px] md:h-[350px] md:w-[350px] mt-52'/>
        <div className='absolute border border-[#333333] rounded-full h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] md:h-[450px] md:w-[450px] mt-52'/>
        <div className='absolute border border-[#F7AB0A] rounded-full h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] md:h-[550px] md:w-[550px] mt-52 animate-pulse'/>
        <div className='absolute border border-[#333333] rounded-full h-[450px] w-[450px] sm:h-[550px] sm:w-[550px] md:h-[650px] md:w-[650px] mt-52'/>
    </motion.div>
  )
}

{/* <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52'/>
        <div className='absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52'/>
        <div className='absolute border border-[#F7AB0A] rounded-full h-[650px] w-[650px] mt-52 animate-pulse'/>
        <div className='absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52'/> */}