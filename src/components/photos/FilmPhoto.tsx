"use client";

import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  photonNum: number;
};

export default function FilmPhoto({ title, photonNum }: Props) {
  return (
    <>
      <img
        src={`/images/films/${title}/${photonNum}.png`.toLowerCase()}
        className="h-auto max-w-full"
        loading={photonNum <= 2 ? "eager" : "lazy"}
        alt={""}
      />
    </>
  );
}
