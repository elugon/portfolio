import React from 'react'
import Typewriter from 'typewriter-effect';

type Props = {}

export default function Hero({}: Props) {
  return (
    <div>{<Typewriter
        options={{
          strings: ['Hello', 'World'],
          autoStart: true,
          loop: true,
        }}
      />}</div>
  )
}