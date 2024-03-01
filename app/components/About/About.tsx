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
  SiHyperledger,
} from "react-icons/si";
import { FaJava, FaDocker } from "react-icons/fa";
import { Caveat } from "next/font/google";
import { motion } from "framer-motion";

const icons = [
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiSolidity, name: "Solidity" },
  { icon: SiPython, name: "Python" },
  { icon: SiReact, name: "ReactJS" },
  { icon: SiNextdotjs, name: "NextJS" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiMui, name: "Material UI" },
  { icon: SiNodedotjs, name: "NodeJS" },
  { icon: SiExpress, name: "ExpressJS" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiMysql, name: "MySQL" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiMongoose, name: "Mongoose" },
  { icon: SiFirebase, name: "Firebase" },
  { icon: SiEthereum, name: "Ethereum" },
  { icon: SiHyperledger, name: "Hyperledger Family" },
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
  initial: { scale: 0 },
  animate: {
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  initial: { x: 50, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
  },
};

const opacityXY = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const opacityY = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <div id="about" className="pb-20 pt-10">
      <div className="md:flex my-10 items-center container mx-auto py-5">
        <motion.div
          className={`${caveat.className} w-1/2 bg-gray-900/75 h-full rounded-3xl p-10 glow-story mr-20 duration-300 ease-in-out hover:cursor-pointer hover:scale-110`}
          variants={opacityXY}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
        >
          <motion.h4
            className="text-5xl font-bold text-orange-200"
            variants={opacityXY}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeInOut", delay: 0.25 }}
          >
            Short Story:
          </motion.h4>
          <motion.p
            className="text-2xl my-5 text-justify text-orange-50"
            variants={opacityY}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeInOut", delay: 0.5 }}
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
            another and now I find myself solely specializing in{" "}
            <span className="text-green-400">
              Web2 and Web3/Blockchain technologies
            </span>
            .
          </motion.p>
        </motion.div>
        <div className="w-1/2">
          <motion.h4
            className="text-4xl font-bold text-center glow-heading"
            variants={opacityXY}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeInOut", delay: 0.5 }}
          >
            DEVELOPMENT SKILLSET
          </motion.h4>
          <motion.div
            className="grid grid-cols-4 gap-y-10 px-5 my-14 iconMotion"
            variants={iconMotion}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
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
                <p className="mt-3 font-bold text-center">{Icon.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
