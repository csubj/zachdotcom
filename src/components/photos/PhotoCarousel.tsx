import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  imageCount: number;
};

const PhotoCarousel = ({ title, imageCount }: Props) => {
  return (
    <>
      {Array.from(Array(imageCount).keys()).map((i, index) => (
        <div key={index}>
          <Image
            src={`/images/films/${title}/${i}.png`.toLowerCase()}
            className=""
            width={700}
            height={475}
            loading={i <= 2 ? "eager" : "lazy"}
            alt={""}
          />
        </div>
      ))}
    </>
  );
};

export default PhotoCarousel;
