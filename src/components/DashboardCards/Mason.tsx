import { ChartComponent } from "./ShellCardCount";
import { ChartComponentProjects } from "./ShellCardProjects";
import Piechart from "./Piechart";
import Anotherpie from "./anotherpie";
import MyBarChart from "./Barchart";

export default function MasonBody() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-grow flex-col md:mr-5">
        <div className="mb-5 flex flex-col justify-start space-y-5 md:flex-row md:space-x-5 md:space-y-0">
          <div className="w-full p-2">
            <a
              href="#"
              className="block w-full rounded-lg bg-zinc-800 p-4 shadow-xl"
            >
              <ChartComponentProjects />
            </a>
          </div>
          <div className="w-full p-2">
            <a
              href="#"
              className="block w-full rounded-lg bg-zinc-800 p-4 shadow-xl"
            >
              <ChartComponent />
            </a>
          </div>
        </div>
        <div className="mt-5 flex flex-grow flex-col justify-start space-y-5 md:flex-row md:space-x-5 md:space-y-0">
          <div className="w-full p-2">
            <a
              href="#"
              className="block w-full flex-grow rounded-lg bg-zinc-800 p-4 shadow-xl"
            >
              <Piechart />
            </a>
          </div>
          <div className="w-full p-2">
            <a
              href="#"
              className="block w-full flex-grow rounded-lg bg-zinc-800 p-4 shadow-xl"
            >
              <Anotherpie />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-5 flex w-full flex-col p-2 md:mt-0 md:w-1/2">
        <div className="w-full flex-grow rounded-lg bg-zinc-800 p-4 shadow-xl">
          <MyBarChart />
        </div>
      </div>
    </div>
  );
}
