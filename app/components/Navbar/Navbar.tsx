import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar text-2xl py-10 flex justify-around">
      <Link href="/">Home</Link>
      <Link href="/">Early Life</Link>
      <Link href="/">Education</Link>
      <Link href="/">Projects</Link>
      <Link href="/">About me!</Link>
    </nav>
  );
};

export default Navbar;
