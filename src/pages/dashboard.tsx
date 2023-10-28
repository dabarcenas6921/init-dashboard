import { Button, CustomFlowbiteTheme, Datepicker } from "flowbite-react";
import { useState, ReactElement } from "react";
import Build from "~/components/DashboardCards/Build";
import Explore from "~/components/DashboardCards/Explore";
import Guilds from "~/components/DashboardCards/Guilds";
import Main from "~/components/DashboardCards/Main";
import Reach from "~/components/DashboardCards/Reach";
import ShellHacks from "~/components/DashboardCards/ShellHacks";

const customButtonTheme: CustomFlowbiteTheme["button"] = {
  color: {
    gray: "text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 :ring-cyan-700 focus:ring-2",
  },
};

type CardName =
  | "Main"
  | "ShellHacks"
  | "Explore"
  | "Build"
  | "Reach"
  | "Guilds";

export default function Dashboard() {
  const [activeCard, setActiveCard] = useState<CardName>("Main");

  const cardComponents: Record<CardName, ReactElement> = {
    Main: <Main />,
    ShellHacks: <ShellHacks />,
    Explore: <Explore />,
    Build: <Build />,
    Reach: <Reach />,
    Guilds: <Guilds />,
  };

  const cards = [
    "Main",
    "ShellHacks",
    "Explore",
    "Build",
    "Reach",
    "Guilds",
  ] as CardName[];

  return (
    <div className="mx-auto min-h-screen w-auto max-w-screen-2xl">
      <div className="mb-4">
        <h1 className="text-2xl text-white md:text-3xl">Dashboard</h1>
      </div>
      <div className="flex justify-between">
        <Button.Group>
          {cards.map((name) => (
            <Button
              key={name}
              theme={customButtonTheme}
              color="gray"
              onClick={() => setActiveCard(name)}
            >
              {name}
            </Button>
          ))}
        </Button.Group>
        <div className="flex items-center">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <Datepicker />
          </div>
          <span className="mx-4 text-white">to</span>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <Datepicker />
          </div>
        </div>
      </div>
      <div className="mt-10">{cardComponents[activeCard]}</div>
    </div>
  );
}
