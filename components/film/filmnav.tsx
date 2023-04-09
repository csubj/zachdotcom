import Link from "next/link";
import PostTitle from "../post-title";

type Props = {
  titles: string[];
};

const FilmNav = ({ titles }: Props) => {
  return (
    <>
      <div className="flex flex-col space-y-3 m-3 fixed">
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
