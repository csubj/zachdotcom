import Link from "next/link";
import PostTitle from "../post-title";

type Props = {
  titles: string[];
};

const FilmNav = ({ titles }: Props) => {
  return (
    <>
      <div className="flex flex-col space-y-5">
        {titles.map((o) => (
          <Link href={o} className="hover:underline">
            {o}
          </Link>
        ))}
      </div>
    </>
  );
};

export default FilmNav;
