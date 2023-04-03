import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <div className="pl-10 space-x-5">
        <Link href="/" className="hover:underline">
          home
        </Link>
        <Link href="/about" className="hover:underline">
          about
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
