import Typewriter from "typewriter-effect";
import React from "react";
import BackgroundCircles from "../components/BackgroundCircles";
import Link from "next/link";
import Image from "next/image";
import profilePicture1 from "../public/profileImages/profilePicture3.png";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="my-screen flex flex-col items-center justify-center space-y-8 overflow-hidden pt-14 text-center md:pt-32 lg:pt-52 xl:pt-64">
      <BackgroundCircles />
      <div className="relative mx-auto h-32 w-32 rounded-full object-cover md:h-40 md:w-40 lg:h-48 lg:w-48">
        <Image src={profilePicture1} alt="profile picture" />
      </div>
      <div className="z-20">
        <h2 className="pb-2 text-xs uppercase tracking-[3px] text-gray-500 sm:text-sm">
          Software Developer
        </h2>
        <h1 className="px-10 pt-8 text-xs font-semibold sm:text-sm md:text-base lg:text-2xl">
          <span className="mr-3">
            {
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
            }
          </span>
        </h1>
      </div>
      <div className="flex w-20 flex-row justify-center pt-5 sm:pt-12 md:pt-24">
        <Link href="#about">
          <div className="heroButton">About</div>
        </Link>
        <Link href="#experience">
          <div className="heroButton">Experience</div>
        </Link>
        <Link href="#skills">
          <div className="heroButton">Skills</div>
        </Link>
        <Link href="#projects">
          <div className="heroButton">Projects</div>
        </Link>
      </div>
    </div>
  );
}
