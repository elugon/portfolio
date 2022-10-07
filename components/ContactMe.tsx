import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

type Props = {}

export default function ContactMe({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3
         className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
            At this point, why not to reach out to someone who loves coding?.{" "}
            <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk</span>
            </h4>
        </div>

        <div className='space-y-10'>
            <div className='flex items-center space-x-5'>
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+34 634 91 86 59</p>
            </div>

            <div className='flex items-center space-x-5'>
            <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>elugon10@gmail.com</p>
            </div>

            <div className='flex items-center space-x-5'>
            <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>Barcelona, Spain.</p>
            </div>

            <form className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input placeholder='Name' className='contactInput' type="text" />
                    <input placeholder='Email' className='contactInput' type="email" />
                </div>

                <input placeholder='Subject' className='contactInput' type="text" />

                <textarea placeholder='Message' className='contactInput' />
                <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>

            </form>


        </div>
    </div>
  )
}