"use client";

import About from "../components/About/About";
import Intro from "../components/Intro/Intro";
import Projects from "../components/Projects/Projects";

const HomePage = () => {
  return (
    <div className="home-page">
      <Intro></Intro>
      <About></About>
      <Projects></Projects>
    </div>
  );
};

export default HomePage;
