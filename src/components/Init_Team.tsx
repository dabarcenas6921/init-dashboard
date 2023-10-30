import Image, { StaticImageData } from "next/image";
import type { Init_Member } from "~/interfaces/Init_Member.interface";

export default function init_member({
  name,
  position,
  linkedin,
  image,
}: Init_Member) {
  return (
    <div className="card text-align flex flex-col items-center justify-center pb-10">
      <img
        className="rounded-full object-cover"
        src={image}
        width={200}
        height={200}
        alt={`${name} image`}
      />
      <div className="card-body text-center">
        <h5 className="mb-1 text-xl font-medium dark:text-white">{name}</h5>
        <span className="text-sm text-white dark:text-gray-400">
          {position}
        </span>
      </div>
      <div className="card-footer mt-4 flex space-x-3 md:mt-6">
        <a
          href={linkedin}
          className="inline-flex items-center rounded-lg bg-primary_yellow px-5 py-2 font-bold text-primary hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
