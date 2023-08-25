import PostTitle from "../post-title";
import FilmNav from "./filmnav";

type Props = {
  title: string;
  coverImage: string;
  embedlink: string;
  releasedate: string;
};

const Film = ({ title, coverImage, embedlink, releasedate }: Props) => {
  return (
    <div className="flex flex-row space-x-20 pt-10">
      <div></div>
      <div>
        <PostTitle>{title}</PostTitle>
      </div>
    </div>
  );
};

export default Film;
