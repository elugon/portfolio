import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name:string,
    email:string,
    subject:string,
    message:string
  };
type Props = {}

export default function ContactMe({}: Props) {

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href=`mailto:elugon10@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    }

  return (
    <div className='h-screen flex relative flex-col text-center max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3
         className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>

        <div className='flex flex-col space-y-10 pt-28'>
            <h4 className='text-md sm:text-lg md:text-xl font-semibold text-center'>
            At this point, why not to reach out to someone who loves coding?.{" "}
            <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk</span>
            </h4>
        </div>

        <div className='space-y-2 h-10 mb-4'>
            <div className='flex items-center space-x-5'>
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 sm:h-12 sm:w-12 animate-pulse' />
            <p className='text-md sm:text-lg'>+34 634 91 86 59</p>
            </div>

            <div className='flex items-center space-x-5'>
            <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 sm:h-12 sm:w-12 animate-pulse' />
            <p className='text-md sm:text-lg'>elugon10@gmail.com</p>
            </div>

            <div className='flex items-center space-x-5'>
            <MapPinIcon className='text-[#F7AB0A] h-7 w-7 sm:h-12 sm:w-12 animate-pulse' />
            <p className='text-md sm:text-lg'>Barcelona, Spain.</p>
            </div>

        </div>
              <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 mx-auto pt-4 sm:pt-10 md:pt-12 lg:pt-16 text-xs sm:text-base md:text-lg'>
                <div className='flex flex-col space-y-2 mx-auto'>
                    <input {...register('name')} placeholder='Name' className='contactInput' type="text"/>
                    <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                </div>
                <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                <textarea {...register('message')} placeholder='Message' className='contactInput' />
                <button type='submit' className='bg-[#F7AB0A] py-2 px-5 rounded-md text-black font-bold text-lg'>Submit</button>
              </form>
        
    </div>
  )
}