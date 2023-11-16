import TotalMembers from "./TotalMembers";
import TotalExecs from "./TotalExecs";
import MemberSuccess from "./MemberSuccess";
import Demographic from "./Demographic";
import Workshops from "./Workshops";
import Attendance from "./Attendance";
import Budgeting from "./Budgeting";

export default function MainsLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
      {/* TotalMembers and TotalExecs in the first row */}
      <div className="p-2">
        <a
          href="#"
          className="block w-full rounded-lg bg-zinc-800 p-4 shadow-xl"
        >
          <TotalMembers />
        </a>
      </div>
      <div className="p-2">
        <a
          href="#"
          className="block w-full rounded-lg bg-zinc-800 p-4 shadow-xl"
        >
          <TotalExecs />
        </a>
      </div>

      {/* Demographic and Attendance in the second row */}
      <div className="p-2">
        <a
          href="#"
          className="block w-full rounded-lg bg-zinc-800 p-4 shadow-xl"
        >
          <Demographic />
        </a>
      </div>
      <div className="p-2">
        <a
          href="#"
          className="block w-full rounded-lg bg-zinc-800 p-4 shadow-xl"
        >
          <Attendance />
        </a>
      </div>

      {/* MemberSuccess and Workshops in the third row */}
      <div className="p-2">
        <a
          href="#"
          className="block w-full rounded-lg bg-zinc-800 p-4 shadow-xl"
        >
          <MemberSuccess />
        </a>
      </div>
      <div className="p-2">
        <a
          href="#"
          className="block w-full rounded-lg bg-zinc-800 p-4 shadow-xl"
        >
          <Workshops />
        </a>
      </div>
      <div className="p-2 md:col-span-2">
        <a
          href="#"
          className="block w-full rounded-lg bg-zinc-800 p-4 shadow-xl"
        >
          <Budgeting />
        </a>
      </div>
    </div>
  );
}
