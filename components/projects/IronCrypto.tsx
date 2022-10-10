import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function IronCrypto({}: Props) {
  return (
    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 mt-10 md:p-44 h-screen'>
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
        src='https://github.com/elugon/IronCrypto/raw/dev/public/img/IronCryptoLayout.png'
        alt=''
        className='max-h-26 sm:max-h-38 md:max-h-80 rounded'
    />
    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
        <h4 className='text-xl md:text-4xl font-semibold text-center'>
            <span className='underline decoration-[#F7AB0A]/50'>
            IronCrypto
            </span>
        </h4>
        <p className='text-md md:text-lg text-center md:text-left'>
        A web application (Mobile First) developed during the bootcamp at IronHack, designed to visualize the data of the main cryptocurrencies in the market, it has been made with MongoDB - Express - Mongoose - Handlebars and the data is consulted to the CoinGecko API.        </p>
        <p className='space-x-2 text-md md:text-lg text-center underline decoration-[#F7AB0A]/50'>
        <a href="https://github.com/elugon/IronCrypto" target="_blank" rel="noopener noreferrer">
        Github
        </a>
        <a href="https://iron-crypto.herokuapp.com/" target="_blank" rel="noopener noreferrer">
        Deployed
        </a>
        </p>
    </div>
    </div>
  )
}