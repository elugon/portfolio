import React from 'react'
import { animationClasses } from "../../utils/tailwind-animations"
import StudentfyLogo from "../../../public/experiencesImages/StudentfyLogo.png"

type Props = Record<string, never>

export default function ExperienceCards(_props: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 h-5/6 bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
    <div
    className={`w-32 h-32 rounded-lg xl:w-[200px] xl:h-[200px] object-cover object-center ${animationClasses.slideInFromTop} motion-reduce-animation`}
    >
        <img src={StudentfyLogo.src} 
        alt="Studentfy Logo"/>
    </div>

    <div className='px-0 md:px-10'>
        <h4 className='text-sm md:text-4xl font-light'>IT Support</h4>
        <p className='text-sm font-bold md:text-2xl mt-1 decoration-primary/50 underline'>Studentfy</p>
        <p className='text-sm md:text-xl py-5 text-gray-300'>September.2015 - April.2019</p>

        <ul className='text-sm list-disc space-y-4 ml-5 md:text-lg'>
            <li>Provide IT assistance</li>
            <li>Keep track of new IT trends</li>
        </ul>
    </div>
</article> 
  ) 
}