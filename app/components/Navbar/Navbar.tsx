"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="text-xl py-10 flex justify-center text-slate-300"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Link
        className="hover:text-yellow-400 duration-150 ease-in-out mx-10"
        href="/"
      >
        Home
      </Link>
      <Link
        className="hover:text-yellow-400 duration-150 ease-in-out mx-10"
        href="/"
      >
        About me!
      </Link>
      <Link
        className="hover:text-yellow-400 duration-150 ease-in-out mx-10"
        href="/"
      >
        Early Life
      </Link>
      <Link
        className="hover:text-yellow-400 duration-150 ease-in-out mx-10"
        href="/"
      >
        Education
      </Link>
      <Link
        className="hover:text-yellow-400 duration-150 ease-in-out mx-10"
        href="/"
      >
        Projects
      </Link>
    </motion.nav>
  );
};

export default Navbar;
