import type { StaticImageData } from "next/image";

export interface ChapterCardProps {
  image: StaticImageData;
  name: string;
  description: string;
}
