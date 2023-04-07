import FilmNav from "./filmnav";
import PostTitle from "../post-title";
import PhotoCarousel from "../carousel/Carousel";

type Props = {
  title: string;
  coverImage: string;
  embedlink: string;
  releasedate: string;
};

const Film = ({ title, coverImage, embedlink, releasedate }: Props) => {
  return (
    <>
      <div className="flex flex-row space-x-20 pt-10">
        <div>
          <FilmNav titles={["joy", "other film"]} />
        </div>
        <div>
          <PostTitle>{title}</PostTitle>
        </div>
      </div>
    </>
  );
};

export default Film;
