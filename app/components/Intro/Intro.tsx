import Image from "next/image";
import me from "../../../public/me.jpg";

const Intro = () => {
  return (
    <div className="intro flex justify-around items-center my-20">
      <div className="w-1/2">
        <h3 className="text-5xl">Hey there 👋, this is Raad</h3>
        <p className="text-xl my-10 text-slate-400">
          So, who am I? I am a junior software engineer with a focus on Web2 and
          Web3/Blockchain technologies. My interests extend to full-stack
          engineering, where I create intuitive user experiences and build
          scalable applications. Feel free to reach out and start a
          conversation. I am looking forward to connecting with like-minded
          people who share my enthusiasm.
        </p>
        <h4 className="text-2xl my-5">A little more about myself:</h4>
        <ul className="list-disc text-xl ml-10">
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
      </div>
      <Image
        className="rounded-full"
        width={600}
        height={600}
        src={me}
        alt="me"
      ></Image>
    </div>
  );
};

export default Intro;
