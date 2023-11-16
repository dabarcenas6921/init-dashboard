import Image from "next/image";
import type { EventCard } from "../interfaces/EventCard.interface";
import { api } from "~/utils/api";

export default function EventCard({
  id,
  name,
  description,
  picture,
  time,
  location,
  program,
  rsvpLink,
}: EventCard) {
  const deleteMutation = api.events.delete.useMutation();
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
        <button
          onClick={() => deleteMutation.mutate({ id: id })}
          className="absolute right-4 top-4 rounded-lg bg-primary bg-opacity-70 p-2 text-red-600 hover:bg-opacity-80 hover:text-red-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-grow flex-col justify-between p-4 md:p-6">
        <div>
          <span
            className={`mb-1 block text-xs font-semibold uppercase ${
              program === "ShellHacks" || program === "General"
                ? "text-primary_yellow"
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
