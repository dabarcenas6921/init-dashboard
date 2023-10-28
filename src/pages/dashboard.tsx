import { useState, ReactElement } from "react";
import Build from "~/components/DashboardCards/Build";
import Explore from "~/components/DashboardCards/Explore";
import Guilds from "~/components/DashboardCards/Guilds";
import Main from "~/components/DashboardCards/Main";
import Reach from "~/components/DashboardCards/Reach";
import ShellHacks from "~/components/DashboardCards/ShellHacks";

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

  const buttonLabels: CardName[] = [
    "Main",
    "ShellHacks",
    "Explore",
    "Build",
    "Reach",
    "Guilds",
  ];

  return (
    <div className="mx-auto min-h-screen w-auto max-w-screen-2xl">
      <div className="mb-4">
        <h1 className="text-2xl text-white md:text-3xl">Dashboard</h1>
      </div>
      <div className="mb-4 flex flex-col justify-between sm:flex-row">
        <div className="mb-4 sm:mb-0">
          <div className="flex flex-col rounded-md shadow-sm sm:inline-flex sm:flex-row">
            {buttonLabels.map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => setActiveCard(label)}
                className="-ml-px -mt-px inline-flex items-center justify-center gap-2 border bg-white px-4 py-3 align-middle text-sm font-medium text-gray-700 transition-all first:rounded-t-lg last:rounded-b-lg hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 sm:mt-0 sm:first:ml-0 sm:first:rounded-l-lg sm:first:rounded-tr-none sm:last:rounded-r-lg sm:last:rounded-bl-none"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10">{cardComponents[activeCard]}</div>
    </div>
  );
}
