"use client";

import {
  SiJavascript,
  SiTypescript,
  SiSolidity,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiEthereum,
  SiGit,
  SiGithub,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiTailwindcss,
  SiMui,
  SiLinux,
} from "react-icons/si";
import { FaJava, FaDocker } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { Caveat } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const icons = [
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiSolidity, name: "Solidity" },
  { icon: SiPython, name: "Python" },
  { icon: SiReact, name: "ReactJS" },
  { icon: SiNextdotjs, name: "NextJS" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiMui, name: "Material UI" },
  { icon: TbBrandFramerMotion, name: "Framer Motion" },
  { icon: SiNodedotjs, name: "NodeJS" },
  { icon: SiExpress, name: "ExpressJS" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiMysql, name: "MySQL" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiMongoose, name: "Mongoose" },
  { icon: SiFirebase, name: "Firebase" },
  { icon: SiEthereum, name: "Ethereum" },
  { icon: SiGit, name: "Git" },
  { icon: SiGithub, name: "GitHub" },
  { icon: SiFlutter, name: "Flutter" },
  { icon: SiDart, name: "Dart" },
  { icon: FaJava, name: "Java" },
  { icon: FaDocker, name: "Docker" },
  { icon: SiLinux, name: "Linux OS" },
];

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const iconMotion = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const About = () => {
  const [selectedId, setSelectedId] = useState<null | string>(null);

  return (
    <div id="about" className="pb-60 pt-10">
      <div className="flex my-10 items-center container mx-auto py-5">
        <motion.div
          layoutId={"1"}
          onClick={() => setSelectedId("1")}
          className={`${caveat.className} w-1/2 bg-gray-900/75 h-full rounded-3xl p-10 glow-story mr-20 duration-300 ease-in-out`}
        >
          <h4
            className="text-5xl font-bold text-orange-200"
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 0.75, ease: "easeInOut" }}
          >
            Short Story:
          </h4>
          <p
            className="text-2xl my-5 text-justify text-orange-50"
            // initial={{ opacity: 0, y: 50 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.75, ease: "easeInOut" }}
          >
            Over the past four years of my CS undergrad life at BRAC University,
            Bangladesh, I took a lot of time to explore myself and find my core
            interests. Like all other undergrads, I began learning computer
            science fundamentals like{" "}
            <span className="text-green-400">
              Data Structures and Algorithms, OOP, Operating Systems, Computer
              Networks,
            </span>{" "}
            etc. Later on, I realized that academia alone is not enough to gain
            the hands-on experience required to become a proficient software
            engineer. So, I started working with programming languages such as{" "}
            <span className="text-green-400">
              C, C++, C#, Python, Java, JavaScript / TypeScript, and Solidity
            </span>
            . <br />
            <br />
            The first project that I ever made was after the finals of my first
            semester back in March 2020. It was a cross-platform space shooter
            game that I had developed using the Unity game engine. After going
            through some experience with web tech and all, I began participating
            in national and international hackathons from my sophomore year
            whether I did good in them or not. Fortunately, those hackathons and
            olympiads turned out well for me. Eventually, one thing led to
            another and now I find myself solely focusing on{" "}
            <span className="text-green-400">
              Web2 and Web3/Blockchain technologies
            </span>
            .
          </p>
        </motion.div>
        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId}
              className={`${caveat.className} w-1/2 bg-gray-900/75 h-full rounded-3xl p-10 glow-story mr-20 duration-300 ease-in-out absolute`}
            >
              <h4 className="text-5xl font-bold text-orange-200">
                Short Story:
              </h4>
              <p className="text-2xl my-5 text-justify text-orange-50">
                Over the past four years of my CS undergrad life at BRAC
                University, Bangladesh, I took a lot of time to explore myself
                and find my core interests. Like all other undergrads, I began
                learning computer science fundamentals like{" "}
                <span className="text-green-400">
                  Data Structures and Algorithms, OOP, Operating Systems,
                  Computer Networks,
                </span>{" "}
                etc. Later on, I realized that academia alone is not enough to
                gain the hands-on experience required to become a proficient
                software engineer. So, I started working with programming
                languages such as{" "}
                <span className="text-green-400">
                  C, C++, C#, Python, Java, JavaScript / TypeScript, and
                  Solidity
                </span>
                . <br />
                <br />
                The first project that I ever made was after the finals of my
                first semester back in March 2020. It was a cross-platform space
                shooter game that I had developed using the Unity game engine.
                After going through some experience with web tech and all, I
                began participating in national and international hackathons
                from my sophomore year whether I did good in them or not.
                Fortunately, those hackathons and olympiads turned out well for
                me. Eventually, one thing led to another and now I find myself
                solely focusing on{" "}
                <span className="text-green-400">
                  Web2 and Web3/Blockchain technologies
                </span>
                .
              </p>
              <motion.button onClick={() => setSelectedId("")}>X</motion.button>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="w-1/2">
          <h4 className="text-3xl font-bold text-center">
            DEVELOPMENT SKILLSET
          </h4>
          <motion.div
            className="grid grid-cols-4 gap-y-10 px-5 my-14 iconMotion"
            variants={iconMotion}
            initial="hidden"
            animate="visible"
          >
            {icons.map((Icon, idx) => (
              <motion.div
                className="flex flex-col items-center item"
                key={idx}
                variants={item}
              >
                <Icon.icon
                  className="glow-icon text-blue-400 hover:scale-125 hover:text-purple-400 duration-200"
                  size={50}
                ></Icon.icon>
                <p className="mt-3 font-bold">{Icon.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
