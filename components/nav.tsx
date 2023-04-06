import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <div className="pl-10 space-x-5">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/bio" className="hover:underline">
          Bio
        </Link>
        <Link href="/films/joy" className="hover:underline">
          Film
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
