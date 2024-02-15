import Image from "next/image";
import nextJS from "../../../public/next-js.svg";
import tailwindCSS from "../../../public/tailwind-css.svg";

const Footer = () => {
  return (
    <footer className="text-center my-20">
      <h3 className="text-xl my-10">Made with</h3>
      <div className="stack flex justify-center items-center">
        <Image className="mx-10 w-40" src={nextJS} alt="next-js-logo"></Image>
        <Image
          className="mx-10 w-40"
          src={tailwindCSS}
          alt="tailwind-css-logo"
        ></Image>
      </div>
      <p className="my-10 text-lg">Copyright © 2024 - Yamin Raad</p>
    </footer>
  );
};

export default Footer;
