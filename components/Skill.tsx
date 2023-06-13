import React from "react";
import Image from "next/image";
import js from "../public/skillsImages/js.svg";
import cs from "../public/skillsImages/css.webp";
import html from "../public/skillsImages/html.webp";
import godb from "../public/skillsImages/mongodb.svg";
import ntjs from "../public/skillsImages/nextjs.png";
import node from "../public/skillsImages/node.png";
import react from "../public/skillsImages/react.png";
import tw from "../public/skillsImages/tailwind.png";
import ts from "../public/skillsImages/ts.png";
import vscode from "../public/skillsImages/visualcode.png";
import gt from "../public/skillsImages/git.png";
import gthub from "../public/skillsImages/github.png";

type Props = {};

const javascript: any[] = [
  js,
  "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
];
const typescript: any[] = [ts, "https://www.typescriptlang.org/"];
const reactjs: any[] = [react, "https://en.reactjs.org/"];
const css: any[] = [cs, "https://developer.mozilla.org/en-US/docs/Web/CSS"];
const tailwind: any[] = [tw, "https://tailwindcss.com/"];
const nextjs: any[] = [ntjs, "https://nextjs.org/"];
const html5: any[] = [
  html,
  "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
];
const mongodb: any[] = [godb, "https://www.mongodb.com"];
const nodejs: any[] = [node, "https://nodejs.org"];
const visualCode: any[] = [vscode, "https://code.visualstudio.com"];
const git: any[] = [gt, "https://git-scm.com"];
const gitHub: any[] = [gthub, "https://github.com"];

const skillsLogos: any[] = [
  javascript,
  typescript,
  reactjs,
  css,
  tailwind,
  nextjs,
  html5,
  mongodb,
  nodejs,
  visualCode,
  git,
  gitHub,
];

export default function Skill({}: Props) {
  return (
    <>
      {skillsLogos.map((ele, i) => {
        return (
          <div key={i} className="group relative flex cursor-pointer">
            <div className="h-16 w-16 rounded-full border border-gray-500 bg-white object-cover filter transition duration-300 ease-in-out group-hover:grayscale sm:h-24 sm:w-24 xl:h-28 xl:w-28">
              <a href={ele[1]} target="_blank" rel="noopener noreferrer">
                <Image src={ele[0]} alt="" />
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}
