import React from "react";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";

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
            src={`/assets/film/${title}/${i}.png`}
            className=""
            loading={i <= 1 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </>
  );
};

export default PhotoCarousel;
