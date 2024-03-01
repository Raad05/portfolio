import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const icons = [
  { icon: SiNextdotjs, name: "NextJS" },
  { icon: SiTailwindcss, name: "Tailwind CSS", iconColor: "text-blue-400" },
  {
    icon: TbBrandFramerMotion,
    name: "Framer Motion",
    iconColor: "text-purple-400",
  },
];

const Footer = () => {
  return (
    <footer className="container mx-auto text-center text-yellow-50 mt-20 md:mt-0">
      <h3 className="text-xl font-bold">Made with</h3>
      <div className="md:flex justify-center items-center mt-10 mb-20">
        {icons.map((Icon, idx) => (
          <div key={idx} className="mx-10">
            <Icon.icon
              className={`mx-auto ${Icon.iconColor}`}
              size={100}
            ></Icon.icon>
            <p className="font-bold my-3">{Icon.name}</p>
          </div>
        ))}
      </div>
      <p className="my-20 text-xs ">Copyright © 2024 - Yamin Raad</p>
    </footer>
  );
};

export default Footer;
