"use client";

import Image from "next/image";
import me from "../../../public/me.gif";
import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className="intro flex justify-around my-16">
      <div className="w-1/2">
        <div className="who-am-i">
          <motion.h3
            className="text-5xl font-bold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
          >
            Hey there{" "}
            <motion.span
              className="inline-block"
              animate={{ rotate: ["0deg", "45deg", "-30deg", "45deg", "0deg"] }}
              transition={{ duration: 0.5, ease: "linear", delay: 1.5 }}
            >
              👋
            </motion.span>
            , this is Raad
          </motion.h3>
          <motion.p
            className="text-xl my-10 text-slate-300 text-justify"
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
          <ul className="list-disc text-xl ml-10 text-slate-300">
            <li>
              🌱 I am actively learning about Web2 and Web3/Blockchain
              technologies
            </li>
            <li className="leading-relaxed">
              💬 My interests extend to full-stack engineering
            </li>
            <li>
              📫 Reach me at{" "}
              <span className="text-orange-400 underline underline-offset-4">
                yamin.raad6109@gmail.com
              </span>
            </li>
          </ul>
        </motion.div>
        <motion.div
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
        </motion.div>
      </div>
      <Image
        className="rounded-lg"
        width={600}
        height={600}
        src={me}
        alt="me"
      ></Image>
    </div>
  );
};

export default Intro;
