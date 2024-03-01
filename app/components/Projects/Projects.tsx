import { motion } from "framer-motion";
import Link from "next/link";
import { ImNewTab } from "react-icons/im";

const projects = [
  {
    name: "BloodSync",
    stack: "NextJS | Redux | GraphQL | NodeJS | ExpressJS | PostgreSQL",
    link: "",
  },
  {
    name: "EventHub DApp",
    stack: "NextJS | Solidity | Hardhat | NodeJS | ExpressJS",
    link: "",
  },
  {
    name: "FoodStarter DApp",
    stack: "NextJS | Solidity | Hardhat",
    link: "",
  },
  {
    name: "Decentralized MFI",
    stack:
      "ReactJS | NodeJS | ExpressJS | Solidity | MSSql | Hardhat | Hyperledger Fireﬂy",
    link: "",
  },
  {
    name: "DriveChain DApp",
    stack:
      "ReactJS | NodeJS | ExpressJS | Solidity | Hardhat | Hyperledger Fireﬂy",
    link: "",
  },
  {
    name: "HealthChain DApp",
    stack:
      "ReactJS | NodeJS | ExpressJS | Solidity | Hardhat | Hyperledger Fireﬂy",
    link: "",
  },
  {
    name: "AlgoWizR",
    stack: "ReactJS | NodeJS | ExpressJS | MongoDB | Firebase Auth",
    link: "",
  },
  {
    name: "Fire Prevention App",
    stack: "React Native | Firebase | Arduino",
    link: "",
  },
];

const opacityXY = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const projectMotion = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  initial: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const Projects = () => {
  return (
    <div id="projects" className="pb-52 pt-10">
      <div className="container mx-auto">
        <motion.h4
          className="text-4xl font-bold text-center glow-heading"
          variants={opacityXY}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
        >
          PROJECTS
        </motion.h4>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-y-10 my-14"
          variants={projectMotion}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {projects.map((project, idx) => (
            <motion.div
              className="w-80 h-72 p-10 mx-auto bg-gray-900/90 rounded-2xl flex flex-col relative glow-card border-4 border-blue-400 hover:border-green-600"
              key={idx}
              variants={item}
            >
              <p className="text-xl font-bold text-yellow-200">
                {project.name}
              </p>
              <p className="text-sm my-5 text-yellow-50">
                <span className="font-bold">Stack: </span>
                <i>{project.stack}</i>
              </p>
              <Link
                href="/"
                className="btn mr-3 hover:bg-blue-600/20 border-2 hover:scale-105 border-green-600 hover:border-blue-600 rounded-full text-lg absolute bottom-10"
              >
                <ImNewTab size={20}></ImNewTab>View
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
