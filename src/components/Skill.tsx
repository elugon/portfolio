import React from "react";
import js from "../../public/skillsImages/js.svg";
import cs from "../../public/skillsImages/css.webp";
import html from "../../public/skillsImages/html.webp";
import godb from "../../public/skillsImages/mongodb.svg";
import ntjs from "../../public/skillsImages/nextjs.png";
import node from "../../public/skillsImages/node.png";
import react from "../../public/skillsImages/react.png";
import tw from "../../public/skillsImages/tailwind.png";
import ts from "../../public/skillsImages/ts.png";
import vscode from "../../public/skillsImages/visualcode.png";
import gt from "../../public/skillsImages/git.png";
import gthub from "../../public/skillsImages/github.png";

type Props = Record<string, never>;

type SkillData = [any, string];

const javascript: SkillData = [
  js,
  "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
];
const typescript: SkillData = [ts, "https://www.typescriptlang.org/"];
const reactjs: SkillData = [react, "https://en.reactjs.org/"];
const css: SkillData = [cs, "https://developer.mozilla.org/en-US/docs/Web/CSS"];
const tailwind: SkillData = [tw, "https://tailwindcss.com/"];
const nextjs: SkillData = [ntjs, "https://nextjs.org/"];
const html5: SkillData = [
  html,
  "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
];
const mongodb: SkillData = [godb, "https://www.mongodb.com"];
const nodejs: SkillData = [node, "https://nodejs.org"];
const visualCode: SkillData = [vscode, "https://code.visualstudio.com"];
const git: SkillData = [gt, "https://git-scm.com"];
const gitHub: SkillData = [gthub, "https://github.com"];

const skillsLogos: SkillData[] = [
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

export default function Skill(_props: Props) {
  return (
    <>
      {skillsLogos.map((ele, i) => {
        return (
          <div key={i} className="group relative flex cursor-pointer">
            <div className="h-16 w-16 rounded-full border border-gray-500 bg-white object-cover filter transition duration-300 ease-in-out group-hover:grayscale sm:h-24 sm:w-24 xl:h-28 xl:w-28">
              <a href={ele[1]} target="_blank" rel="noopener noreferrer">
                <img src={ele[0].src} alt="" />
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}