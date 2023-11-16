import TotalMembers from "./TotalMembers";
import TotalExecs from "./TotalExecs";
import MemberSuccess from "./MemberSuccess";
import Demographic from "./Demographic";
import Workshops from "./Workshops";

export default function MainsLayout() {
  return (
    // On mobile, the content will stack (flex-col). On medium screens and up, it will be side by side (md:flex-row).
    <div className="flex flex-col md:flex-row">
      {/* This div will take full width on mobile and flex-1 (50% of the parent container) on medium screens and up */}
      <div className="flex w-full flex-col md:mr-5 md:flex-1">
        {/* On mobile, each child will stack. On medium screens, they will be side by side */}
        <div className="flex flex-col justify-start space-y-5 md:flex-row md:space-x-5 md:space-y-0">
          <div className="w-full p-2">
            <a
              href="#"
              className="block w-full rounded-lg bg-zinc-800 p-4 shadow-xl"
            >
              <TotalMembers />
            </a>
          </div>
          <div className="w-full p-2">
            <a
              href="#"
              className="block w-full rounded-lg bg-zinc-800 p-4 shadow-xl"
            >
              <TotalExecs />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-start space-y-5 md:space-y-0">
          <div className="mb-8 mt-5 w-full p-2">
            <a
              href="#"
              className="block w-full rounded-lg bg-zinc-800 p-4 shadow-xl"
            >
              <Demographic />
            </a>
          </div>
          <div className="w-full p-2">
            <a
              href="#"
              className="block w-full rounded-lg bg-zinc-800 p-4 shadow-xl"
            >
              {/*Card component goes here*/}
            </a>
          </div>
        </div>
      </div>
      {/* This div will take full width on mobile and flex-1 (50% of the parent container) on medium screens and up */}
      <div className="mt-5 flex w-full flex-col md:mt-0 md:flex-1">
        <div className="p-2">
          <a
            href="#"
            className="block w-full rounded-lg bg-zinc-800 p-4 shadow-xl"
          >
            <MemberSuccess />
          </a>
        </div>
        <div className="mt-8 p-2">
          <a
            href="#"
            className="block w-full rounded-lg bg-zinc-800 p-4 shadow-xl"
          >
            <Workshops />
          </a>
        </div>
        <div className="mt-8 p-2">
          <a
            href="#"
            className="block w-full rounded-lg bg-zinc-800 p-4 shadow-xl"
          >
            {/*Card component goes here*/}
          </a>
        </div>
      </div>
    </div>
  );
}
