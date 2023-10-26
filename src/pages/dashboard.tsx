import { Datepicker } from "flowbite-react";

export default function Dashboard() {
  return (
    <div className="mx-auto min-h-screen w-auto max-w-screen-2xl">
      <div>
        <h1 className="text-2xl text-white md:text-3xl">Dashboard</h1>
        <Datepicker />
      </div>
    </div>
  );
}
