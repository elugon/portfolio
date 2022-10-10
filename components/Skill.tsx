import React from 'react'
import Image from 'next/image'
import js from "../public/skillsImages/js.svg"
import css from "../public/skillsImages/css.webp"
import html from "../public/skillsImages/html.webp"
import mongodb from "../public/skillsImages/mongodb.svg"
import nextjs from "../public/skillsImages/nextjs.png"
import node from "../public/skillsImages/node.png"
import react from "../public/skillsImages/react.png"
import tailwind from "../public/skillsImages/tailwind.png"
import ts from "../public/skillsImages/ts.png"
import visualcode from "../public/skillsImages/visualcode.png"
import git from "../public/skillsImages/git.png"
import github from "../public/skillsImages/github.png"

type Props = {}

const skillsLogos: string[] =[js,ts,react,css,tailwind,nextjs,html,mongodb,node,visualcode,git,github]

export default function Skill({}: Props) {
  return (
  <>
   
            skillsLogos.map((ele,i)=>{
                return <div key={i} className='group relative flex cursor-pointer'>  
                <div
                    className='rounded-full bg-white object-cover border border-gray-500 w-16 h-16 sm:w-24 sm:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
                    >
                    <Image src={ele} 
                        alt=""/>
                </div>
                </div>
     
                        })
    
   </>
  )
}