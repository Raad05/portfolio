"use client";

import Image from "next/image";
import stack from "../../../public/stack.svg";
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
import { TfiDownload } from "react-icons/tfi";
import { MdContacts } from "react-icons/md";

const opacityXY = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const opacityX = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
};

const opacityY = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const greetAnimation = {
  animate: {
    rotate: ["0deg", "45deg", "-30deg", "45deg", "0deg"],
    transition: { duration: 0.5, ease: "linear", delay: 1.5 },
  },
};

const levitate = {
  animate: { y: [0, 15, 0] },
};

const Intro = () => {
  return (
    <div id="intro" className="container mx-auto flex mt-20 pb-60">
      <div className="w-1/2 mr-10">
        <div className="who-am-i">
          <div className="text-5xl font-bold">
            <motion.h3
              variants={opacityY}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
            >
              Hey there{" "}
              <motion.span
                className="inline-block"
                variants={greetAnimation}
                whileInView="animate"
                viewport={{ once: true }}
              >
                👋
              </motion.span>
              ,
            </motion.h3>
            <motion.h3
              className="leading-loose"
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              variants={opacityY}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: "easeInOut", delay: 0.5 }}
            >
              This is{" "}
              <motion.span
                className="text-blue-400 glow-text"
                variants={opacityXY}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease: "easeInOut", delay: 1 }}
              >
                Yamin Raad!
              </motion.span>
            </motion.h3>
          </div>
          <motion.h3
            className="text-3xl mb-10 font-bold text-orange-400"
            variants={opacityXY}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
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
            className="text-lg my-5 text-justify text-slate-200"
            variants={opacityY}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
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
          variants={opacityY}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeInOut", delay: 0.5 }}
        >
          <h4 className="text-2xl my-5 font-bold">
            A little more about myself:
          </h4>
          <ul className="list-disc text-lg ml-10 text-slate-200">
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
      </div>
      <motion.div
        className="w-1/2 ml-10"
        variants={opacityXY}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      >
        <motion.div
          variants={levitate}
          whileInView="animate"
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <Image
            src={stack}
            alt="me"
            className="my-16 rounded-3xl glow-img"
          ></Image>
        </motion.div>
        <motion.div
          variants={opacityY}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
        >
          <Link
            href="/"
            className="btn mr-3 hover:bg-red-600/20 border-2 hover:scale-110 border-green-600 hover:border-red-600 rounded-full text-lg"
          >
            <MdContacts size={20}></MdContacts>Contact
          </Link>
          <Link
            href="/"
            className="btn ml-3 hover:bg-purple-600/20 border-2 hover:scale-110 border-blue-600 hover:border-purple-600 rounded-full text-lg"
          >
            <TfiDownload size={20}></TfiDownload>Resume
          </Link>
        </motion.div>
        <div className="socials my-10">
          <motion.h4
            className="text-2xl my-5 font-bold"
            variants={opacityXY}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeInOut", delay: 0.75 }}
          >
            Connect with me:
          </motion.h4>
          <motion.div
            className="flex"
            variants={opacityX}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeInOut", delay: 1.25 }}
          >
            <Link
              href="https://www.facebook.com/Ashabul.Yamin.L/"
              target="_blank"
            >
              <FaFacebookSquare
                className="mr-5 hover:scale-125 duration-200 ease-in-out text-blue-600 bg-white rounded-lg"
                size={45}
              ></FaFacebookSquare>
            </Link>
            <Link href="https://www.linkedin.com/in/yaminraad/" target="_blank">
              <FaLinkedin
                className="mx-5 hover:scale-125 duration-200 ease-in-out text-blue-900 bg-white rounded-lg"
                size={45}
              ></FaLinkedin>
            </Link>
            <Link href="https://github.com/Raad05" target="_blank">
              <FaGithub
                className="mx-5 hover:scale-125 duration-200 ease-in-out"
                size={45}
              ></FaGithub>
            </Link>
            <Link
              href="https://discord.com/channels/@Luci4_here"
              target="_blank"
            >
              <FaDiscord
                className="mx-5 hover:scale-125 duration-200 ease-in-out text-indigo-700"
                size={45}
              ></FaDiscord>
            </Link>
            <Link href="https://twitter.com/YaminRaad" target="_blank">
              <FaTwitter
                className="mx-5 hover:scale-125 duration-200 ease-in-out text-blue-400"
                size={45}
              ></FaTwitter>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;
