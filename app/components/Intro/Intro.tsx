"use client";

import Image from "next/image";
import stack from "../../../public/stack.png";
import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <div className="intro flex items-center mt-10 pb-60 min-h-screen">
      <div className="w-1/2 mr-10">
        <div className="who-am-i">
          <div className="text-5xl font-bold">
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
            >
              Hey there{" "}
              <motion.span
                className="inline-block"
                animate={{
                  rotate: ["0deg", "45deg", "-30deg", "45deg", "0deg"],
                }}
                transition={{ duration: 0.5, ease: "linear", delay: 1.5 }}
              >
                👋
              </motion.span>
              ,
            </motion.h3>
            <motion.h3
              className="leading-loose"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, ease: "easeInOut", delay: 0.5 }}
            >
              This is{" "}
              <motion.span
                className="text-blue-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, ease: "easeInOut", delay: 1 }}
              >
                Yamin Raad!
              </motion.span>
            </motion.h3>
          </div>
          <motion.h3
            className="text-3xl mb-10 font-bold text-orange-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeInOut", delay: 1.25 }}
          >
            <Typewriter
              options={{
                strings: ["FULLSTACK ENGINEER", "BLOCKCHAIN DEVELOPER"],
                autoStart: true,
                loop: true,
                cursor: "_",
                delay: 50,
                deleteSpeed: 20,
              }}
            />
          </motion.h3>
          <motion.p
            className="text-lg my-5 text-slate-300 text-justify"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeInOut", delay: 0.25 }}
          >
            So, who am I? I am a junior software engineer with a focus on Web2
            and Web3/Blockchain technologies. My interests extend to full-stack
            engineering, where I create intuitive user experiences and build
            scalable applications. Feel free to reach out and start a
            conversation. I am looking forward to connecting with like-minded
            people who share my enthusiasm.
          </motion.p>
        </div>
        <motion.div
          className="more-about-me"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeInOut", delay: 0.5 }}
        >
          <h4 className="text-2xl my-5 font-bold">
            A little more about myself:
          </h4>
          <ul className="list-disc text-lg ml-10 text-slate-300">
            <li>
              🌱 I am actively learning about Web2 and Web3/Blockchain
              technologies
            </li>
            <li className="leading-relaxed">
              💬 My interests extend to full-stack engineering
            </li>
            <li>
              📫 Reach me at{" "}
              <span className="text-green-400 underline underline-offset-4">
                yamin.raad6109@gmail.com
              </span>
            </li>
          </ul>
        </motion.div>
        {/* <motion.div
          className="socials my-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeInOut", delay: 0.75 }}
        >
          <h4 className="text-2xl my-5 font-bold">Connect with me:</h4>
          <div className="flex">
            <Link
              href="https://www.facebook.com/Ashabul.Yamin.L/"
              target="_blank"
            >
              <FaFacebookSquare
                className="mx-5 hover:scale-125 duration-200 ease-in-out text-blue-600 bg-white rounded-lg"
                size={50}
              ></FaFacebookSquare>
            </Link>
            <Link href="https://www.linkedin.com/in/yaminraad/" target="_blank">
              <FaLinkedin
                className="mx-5 hover:scale-125 duration-200 ease-in-out text-blue-900 bg-white rounded-lg"
                size={50}
              ></FaLinkedin>
            </Link>
            <Link href="https://github.com/Raad05" target="_blank">
              <FaGithub
                className="mx-5 hover:scale-125 duration-200 ease-in-out"
                size={50}
              ></FaGithub>
            </Link>
            <Link
              href="https://discord.com/channels/@Luci4_here"
              target="_blank"
            >
              <FaDiscord
                className="mx-5 hover:scale-125 duration-200 ease-in-out text-indigo-700"
                size={50}
              ></FaDiscord>
            </Link>
            <Link href="https://twitter.com/YaminRaad" target="_blank">
              <FaTwitter
                className="mx-5 hover:scale-125 duration-200 ease-in-out text-blue-400"
                size={50}
              ></FaTwitter>
            </Link>
          </div>
        </motion.div> */}
      </div>
      <div className="w-1/2 ml-10">
        <Image
          src={stack}
          quality={100}
          alt="me"
          className="my-10 rounded-lg"
        ></Image>
        <Link
          href="/"
          className="bg-red-600 hover:bg-red-700 duration-200 ease-in-out px-4 py-3 rounded text-xl"
        >
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Intro;
