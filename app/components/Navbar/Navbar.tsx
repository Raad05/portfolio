import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="text-xl py-10 flex justify-around">
      <Link className="hover:text-yellow-400 duration-150 ease-in-out" href="/">
        Home
      </Link>
      <Link className="hover:text-yellow-400 duration-150 ease-in-out" href="/">
        About me!
      </Link>
      <Link className="hover:text-yellow-400 duration-150 ease-in-out" href="/">
        Early Life
      </Link>
      <Link className="hover:text-yellow-400 duration-150 ease-in-out" href="/">
        Education
      </Link>
      <Link className="hover:text-yellow-400 duration-150 ease-in-out" href="/">
        Projects
      </Link>
    </nav>
  );
};

export default Navbar;
