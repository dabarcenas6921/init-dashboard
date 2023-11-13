import { api } from "~/utils/api";
import EventCard from "../components/EventCard";
import EventModal from "../components/EventModal";

export default function Events() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const events = api.events.getAll.useQuery().data;

  return (
    <main className="mx-auto min-h-screen max-w-7xl p-4 px-8 md:p-0 md:px-8">
      <div className="mb-4 flex flex-col items-center justify-between md:mb-0 md:flex-row">
        <h1 className="mb-4 text-xl text-white md:mb-0 md:text-2xl lg:text-3xl">
          Upcoming Events
        </h1>
        <div className="flex w-full flex-col items-center space-y-4 md:w-auto md:flex-row md:space-x-5 md:space-y-0">
          <EventModal />
          <Search />
        </div>
      </div>
      <div className="mx-auto mt-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {events?.map((event, index) => (
            <EventCard
              key={index}
              id={index}
              name={event.name}
              description={event.description}
              picture={event.picture}
              time={event.time}
              location={event.location}
              program={event.program}
              rsvpLink={event.rsvpLink}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

function Search() {
  return (
    <div className="w-full md:w-auto">
      <label htmlFor="hs-trailing-button-add-on-with-icon" className="sr-only">
        Search
      </label>
      <div className="flex rounded-md shadow-sm">
        <input
          type="text"
          id="hs-trailing-button-add-on-with-icon"
          name="hs-trailing-button-add-on-with-icon"
          placeholder="Search for events"
          className="block w-full rounded-l-md px-4 py-3 text-sm text-primary shadow-sm focus:border-none focus:ring-light_yellow dark:bg-primary dark:text-primary_gray md:pr-28"
        />

        <button
          type="button"
          className="inline-flex h-[2.875rem] w-[2.875rem] flex-shrink-0 items-center justify-center rounded-r-md bg-primary_yellow text-sm font-semibold text-primary transition-all hover:bg-light_yellow focus:z-10 focus:outline-none focus:ring-2 focus:ring-light_yellow"
        >
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
