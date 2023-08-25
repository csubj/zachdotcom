import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <Link href="/" className="hover:underline">
        Home
      </Link>
      <Link href="/bio" className="hover:underline">
        Bio
      </Link>
      <Link href="/films/joy" className="hover:underline">
        Film
      </Link>
    </nav>
  );
};

export default Nav;
