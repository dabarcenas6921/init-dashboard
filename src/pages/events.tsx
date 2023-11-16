import { api } from "~/utils/api";
import EventCard from "../components/EventCard";
import EventModal from "../components/EventModal";
import SearchInput, {
  getWasSearchBtnClicked,
  setWasSearchBtnClicked,
} from "~/components/SearchInput";
import { useRouter, useSearchParams } from "next/navigation";
import { type EventType } from "~/server/api/routers/eventRouter";
import { useUser } from "@clerk/nextjs";

export default function Events() {
  const router = useRouter();
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const encodedSearchQuery = encodeURI(searchQuery ?? "");
  const input = { q: encodedSearchQuery };
  let events: EventType[] | undefined = [];

  //Checking if user is logged in for conditional rendering of the add event button
  const { isSignedIn } = useUser();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  if (getWasSearchBtnClicked()) {
    events = api.events.getByQuery.useQuery(input).data;
  } else {
    events = api.events.getAll.useQuery().data;
  }

  const resetEvents = () => {
    setWasSearchBtnClicked(false);
    router.push("/events");
  };

  return (
    <main className="mx-auto min-h-screen max-w-7xl p-4 px-8 md:p-0 md:px-8">
      <div className="ordered mb-4 flex flex-col items-center justify-between md:mb-0 md:flex-row">
        <h1 className="mb-4 text-xl text-white md:mb-0 md:text-2xl lg:text-3xl">
          Upcoming Events
        </h1>
        <div className="flex w-full flex-col items-center space-y-4 md:w-auto md:flex-row md:space-x-5 md:space-y-0">
          {getWasSearchBtnClicked() && (
            <button
              className="cursor-pointer  hover:text-primary_yellow hover:underline"
              onClick={resetEvents}
            >
              See All Events
            </button>
          )}
          {isSignedIn && <EventModal />}
          <SearchInput searchType="event" />
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
