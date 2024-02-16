import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="text-xl py-10 flex justify-center text-slate-300">
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
    </nav>
  );
};

export default Navbar;
