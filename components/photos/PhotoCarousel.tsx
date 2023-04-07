import React from "react";

type Props = {
  title: string;
  imageCount: number;
};

const PhotoCarousel = ({ title, imageCount }: Props) => {
  return (
    <>
      {Array.from(Array(imageCount).keys()).map((i) => (
        <div>
          <img
            src={`/images/films/${title}/${i}.png`}
            className=""
            loading={i <= 2 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </>
  );
};

export default PhotoCarousel;
