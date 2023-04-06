import FilmNav from "./filmnav";
import PostTitle from "./post-title";

type Props = {
  title: string;
  coverImage: string;
  embedlink: string;
  releasedate: string;
};

const Film = ({ title, coverImage, embedlink, releasedate }: Props) => {
  return (
    <>
      <div className="flex flex-row space-x-10 pt-10">
        <FilmNav titles={["joy", "other film"]} />
        <div>
          <PostTitle>{title}</PostTitle>
        </div>
      </div>
    </>
  );
};

export default Film;
