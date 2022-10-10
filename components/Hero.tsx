import React from 'react'
import Typewriter from 'typewriter-effect';
import BackgroundCircles from "../components/BackgroundCircles"
import Link from 'next/link'
import Image from 'next/image'
import profilePicture1 from "../public/profileImages/profilePicture3.png"

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className='pt-8 md:pt-32 lg:pt-52 xl:pt-64 my-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <div className="relative rounded-full h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 mx-auto object-cover">
      <Image src={profilePicture1} 
       alt="profile picture"/>
      </div>
      <div className='z-20'>
          <h2 className='text-xs sm:text-sm uppercase text-gray-500 pb-2 tracking-[3px]'>Software Developer</h2>
          <h1 className='text-xs sm:text-sm md:text-base lg:text-2xl font-semibold px-10 pt-8'>
            <span className='mr-3'>{<Typewriter
            options={{
              strings: [`Hi, The Name's Elu Gonzalez`,`Props: Let's play soccer`, 'this.cinema = Interstellar', 'const loveCoding = True'],
              autoStart: true,
              loop: true,
              delay:100
            }}
          />}</span>
          </h1>
          </div>
            <div className='pt-5 sm:pt-12 md:pt-24 flex flex-row w-20 justify-center'>
              <Link href='#about'>
              <div className='heroButton'>About</div>
              </Link>
              <Link href='#experience'>
              <div className='heroButton'>Experience</div>
              </Link>
            </div>
            <div className='pt-5 sm:pt-12 md:pt-24 flex flex-row w-20 justify-center'>
               <Link href='#skills'>
              <div className='heroButton'>Skills</div>
              </Link>
              <Link href='#projects'>
              <div className='heroButton'>Projects</div>
              </Link>
            </div>
        
      </div>
  )
}