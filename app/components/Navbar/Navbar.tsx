"use client";

import { motion } from "framer-motion";

const Navbar = () => {
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
  };

  return (
    <motion.nav
      className="w-1/3 mx-auto text-xl py-8 my-5 flex justify-center sticky z-10 top-5 bg-gray-900/50 rounded-3xl"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <button
        onClick={() => scrollToElement("intro")}
        className="glow-nav-link mx-10 font-bold"
      >
        HOME
      </button>
      <button
        onClick={() => scrollToElement("about")}
        className="glow-nav-link mx-10 font-bold"
      >
        MY STORY
      </button>
      <button
        onClick={() => scrollToElement("projects")}
        className="glow-nav-link mx-10 font-bold"
      >
        PROJECTS
      </button>
    </motion.nav>
  );
};

export default Navbar;
