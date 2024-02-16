import About from "../components/About/About";
import EarlyLife from "../components/EarlyLife/EarlyLife";
import Education from "../components/Education/Education";
import Intro from "../components/Intro/Intro";
import Projects from "../components/Projects/Projects";

const HomePage = () => {
  return (
    <div className="home-page">
      <Intro></Intro>
      <EarlyLife></EarlyLife>
      <Education></Education>
      <Projects></Projects>
      <About></About>
    </div>
  );
};

export default HomePage;
