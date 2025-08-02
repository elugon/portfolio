import Typewriter from "typewriter-effect";
import React from "react";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="my-screen flex flex-col items-center justify-center space-y-8 overflow-hidden pt-14 text-center md:pt-32 lg:pt-52 xl:pt-64">
      <BackgroundCircles />
      <div className="relative mx-auto h-32 w-32 rounded-full object-cover md:h-40 md:w-40 lg:h-48 lg:w-48">
        <img 
          src="/profileImages/profilePicture3.png" 
          alt="profile picture"
          className="rounded-full w-full h-full object-cover"
        />
      </div>
      <div className="z-20">
        <h2 className="pb-2 text-xs uppercase tracking-[3px] text-gray-500 sm:text-sm">
          Software Developer
        </h2>
        <h1 className="px-10 pt-8 text-xs font-semibold sm:text-sm md:text-base lg:text-2xl">
          <span className="mr-3">
            <Typewriter
              options={{
                strings: [
                  `Hi, I'm Elu Gonzalez`,
                  `Props: Let's play soccer`,
                  "this.cinema = Interstellar",
                  "const loveCoding = True",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
          </span>
        </h1>
      </div>
      <div className="flex w-20 flex-row justify-center pt-5 sm:pt-12 md:pt-24">
        <a href="#about">
          <div className="heroButton">About</div>
        </a>
        <a href="#experience">
          <div className="heroButton">Experience</div>
        </a>
        <a href="#skills">
          <div className="heroButton">Skills</div>
        </a>
        <a href="#projects">
          <div className="heroButton">Projects</div>
        </a>
      </div>
    </div>
  );
}