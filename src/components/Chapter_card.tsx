import React from "react";
import Image from "next/image";
import type { ChapterCardProps } from "../interfaces/Chapter_Card.interface";

export default function chapter_card({
  image,
  name,
  description,
}: ChapterCardProps) {
  return (
    <div className="bg-dark  max-w-sm rounded-lg border  border-yellow-500 shadow dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center justify-center pt-5">
        <Image src={image} alt="Chapter Logo" width={300} height={300} />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold text-white dark:text-white">
          {name}
        </h5>
        <p className="mb-3 font-normal text-white dark:text-gray-400">
          {description}
        </p>
        <a
          href="https://go.fiu.edu/beinit"
          className="inline-flex items-center rounded-lg bg-primary_yellow px-5 py-2 font-bold text-primary hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          Apply Here!
        </a>
      </div>
    </div>
  );
}
