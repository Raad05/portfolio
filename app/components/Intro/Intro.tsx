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

const Intro = () => {
  return (
    <div className="intro flex justify-around my-16">
      <div className="w-1/2">
        <div className="who-am-i">
          <h3 className="text-5xl font-bold">Hey there 👋, this is Raad</h3>
          <p className="text-xl my-10 text-slate-300 text-justify">
            So, who am I? I am a junior software engineer with a focus on Web2
            and Web3/Blockchain technologies. My interests extend to full-stack
            engineering, where I create intuitive user experiences and build
            scalable applications. Feel free to reach out and start a
            conversation. I am looking forward to connecting with like-minded
            people who share my enthusiasm.
          </p>
        </div>
        <div className="more-about-me">
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
        </div>
        <div className="socials my-10">
          <h4 className="text-2xl my-5 font-bold">Connect with me:</h4>
          <div className="flex">
            <Link
              href="https://www.facebook.com/Ashabul.Yamin.L/"
              target="_blank"
            >
              <FaFacebookSquare
                className="mx-5 text-blue-600 bg-white rounded-lg"
                size={50}
              ></FaFacebookSquare>
            </Link>
            <Link href="https://www.linkedin.com/in/yaminraad/" target="_blank">
              <FaLinkedin
                className="mx-5 text-blue-900 bg-white rounded-lg"
                size={50}
              ></FaLinkedin>
            </Link>
            <Link href="https://github.com/Raad05" target="_blank">
              <FaGithub className="mx-5" size={50}></FaGithub>
            </Link>
            <Link
              href="https://discord.com/channels/@Luci4_here"
              target="_blank"
            >
              <FaDiscord className="mx-5 text-indigo-700" size={50}></FaDiscord>
            </Link>
            <Link href="https://twitter.com/YaminRaad" target="_blank">
              <FaTwitter className="mx-5 text-blue-400" size={50}></FaTwitter>
            </Link>
          </div>
        </div>
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
