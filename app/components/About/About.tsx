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
} from "react-icons/si";
import { FaJava, FaDocker } from "react-icons/fa";

const icons = [
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiSolidity, name: "Solidity" },
  { icon: SiPython, name: "Python" },
  { icon: SiReact, name: "ReactJS" },
  { icon: SiNextdotjs, name: "NextJS" },
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
];

const About = () => {
  return (
    <div id="about" className="pb-60">
      <div className="container mx-auto py-5">
        <h3 className="text-5xl font-bold text-center">JOURNEY SO FAR</h3>
        <div className="flex my-10">
          <div className="w-1/2">
            <h4 className="text-3xl font-bold mb-10">
              Technologies I have worked with:
            </h4>
            <div className="grid grid-cols-4 gap-y-10 px-5">
              {icons.map((Icon, idx) => (
                <div className="w-24 flex flex-col items-center" key={idx}>
                  <Icon.icon
                    className="glow-icon text-blue-400 hover:scale-125 hover:text-purple-400 duration-200"
                    size={50}
                  ></Icon.icon>
                  <p className="mt-3 font-bold">{Icon.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/2">
            <h4 className="text-3xl font-bold">Short Story:</h4>
            <p className="text-lg my-5 text-slate-300 text-justify px-5">
              Over the past four years of my CS undergrad life at BRAC
              University, Bangladesh, I took a lot of time to explore myself and
              find my core interests. Like all other undergrads, I began
              learning computer science fundamentals like Data Structures and
              Algorithms, OOP, Operating Systems, Computer Networks, etc. Later
              on, I realized that academia alone is not enough to gain the
              hands-on experience required to become a proficient software
              engineer. So, I started working with programming languages such as
              C, C++, C#, Python, Java, Javascript, and Solidity. <br />
              <br />
              The first project that I ever made was after the finals of my
              first semester back in March 2020. It was a cross-platform space
              shooter game that I had developed using the Unity game engine.
              After going through some experience with web tech and all, I began
              participating in national and international hackathons from my
              sophomore year whether I did good in them or not. Fortunately,
              those hackathons and olympiads turned out well for me. Eventually,
              one thing led to another and now I find myself solely focusing on
              web3 and web3/Blockchain technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
