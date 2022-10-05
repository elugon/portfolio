import React from 'react'
import Typewriter from 'typewriter-effect';
import BackgroundCircles from "../components/BackgroundCircles"
import Link from 'next/link'

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className='pt-20 h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" className="relative rounded-full h-32 w-32 mx-auto object-cover" alt="profile picture"/>
      <div className='z-20'>
          <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
          <h1 className='text-xl lg:text-2xl font-semibold px-10'>
            <span className='mr-3'>{<Typewriter
            options={{
              strings: [`Hi, The Name's Elu Gonzalez`,`Props: Let's play soccer`, 'this.cinema = Interstellar', 'const loveCoding = True'],
              autoStart: true,
              loop: true,
              delay:100
            }}
          />}</span>
          </h1>
            <div className='pt-5 flex flex-row justify-center'>
              <Link href='#about'>
              <div className='heroButton'>About</div>
              </Link>
              <Link href='#experience'>
              <div className='heroButton'>Experience</div>
              </Link>
              <Link href='#skills'>
              <div className='heroButton'>Skills</div>
              </Link>
              <Link href='#projects'>
              <div className='heroButton'>Projects</div>
              </Link>
            </div>
        </div>
      </div>
  )
}