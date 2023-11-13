import Image from "next/image";
import type { EventCard } from "../interfaces/EventCard.interface";

export default function EventCard({
  name,
  description,
  picture,
  time,
  location,
  program,
  rsvpLink,
}: EventCard) {
  const date = time.toLocaleDateString("en-us", {
    weekday: "short",
    month: "long",
    day: "numeric",
  });
  const realTime = time.toLocaleTimeString("en-us", {
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  });

  return (
    <div className="group flex h-full flex-col rounded-sm border border-zinc-600 bg-zinc-900 shadow-lg shadow-zinc-900">
      <div className="relative h-52 overflow-hidden rounded-t-sm sm:h-56">
        <Image
          src={picture}
          alt={`${name} Event Image`}
          width={1000}
          height={1000}
          className="absolute h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-grow flex-col justify-between p-4 md:p-6">
        <div>
          <span
            className={`mb-1 block text-xs font-semibold uppercase ${
              program === "ShellHacks" || program === "General"
                ? "text-primary"
                : `text-${program.toLowerCase()}`
            }`}
          >
            {program}
          </span>
          <h3 className="text-lg font-semibold text-gray-300 sm:text-xl">
            {name}
          </h3>
          <p className="sm:text-md mt-2 text-sm text-gray-500">{description}</p>
          <div className="mt-2 space-y-1 text-sm sm:mt-4">
            <p className="text-gray-400">{date}</p>
            <p className="text-xs text-gray-400">
              {location} | {realTime}
            </p>
          </div>
        </div>
        <div className="mt-4 flex">
          <a
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary_yellow px-3 py-2 text-xs font-medium text-gray-700 shadow-sm transition-all hover:bg-light_yellow focus:outline-none focus:ring-2 focus:ring-light_yellow sm:rounded-lg sm:px-4 sm:py-3 sm:text-sm"
            href={rsvpLink}
            target="_blank"
          >
            RSVP Now
          </a>
        </div>
      </div>
    </div>
  );
}
