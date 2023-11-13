import { ChartComponent } from "./ShellCount";
import { ChartComponentProjects } from "./ShellCardProjects";
import YearToDate from "./YearToDate";
import MyBarChart from "./Barchart";
import TeamLeads from "./TeamLeads";
import Piechart from "./Piechart";
import axios from "axios";
import { useEffect } from "react";
const baseId = process.env.NEXT_PUBLIC_AIRTABLE_SHELLHACKS_BASE_ID;
const tableId =
  process.env.NEXT_PUBLIC_AIRTABLE_SHELLHACKS_VOLUNTEER_SCHEDULE_TABLE;
const apiKey = process.env.NEXT_PUBLIC_AIRTABLE_PERSONAL_ACCESS_TOKEN;

export default function MasonBody() {
  useEffect(() => {
    const fetchDataFromAirtable = async () => {
      try {
        const response = await axios.get(
          `https://api.airtable.com/v0/${baseId}/${tableId}`,
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          },
        );
        console.log(response.data);
      } catch (error) {
        // Handle error
        console.error(error);
      }
    };

    fetchDataFromAirtable().catch(console.error);
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      {/* Adjusted the flex value of this div to flex-1 */}
      <div className="mr-5 flex flex-1 flex-col">
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
        <div className="flex flex-col justify-start space-y-5 md:space-y-0">
          <div className="mb-8 w-full p-2">
            <a
              href="#"
              className="block w-full rounded-lg bg-zinc-800 p-4 shadow-xl"
            >
              <YearToDate />
            </a>
          </div>
          {/* Removed the flex-grow class, retained mt-10 and w-full */}
          <div className="w-full p-2">
            <a
              href="#"
              className="block w-full rounded-lg bg-zinc-800 p-4 shadow-xl"
            >
              <Piechart />
            </a>
          </div>
        </div>
      </div>
      {/* This div remains flex-1, ensuring equal width with the left side */}
      <div className="flex flex-1 flex-col">
        <div className="p-2">
          <a
            href="#"
            className="block w-full rounded-lg bg-zinc-800 p-4 shadow-xl"
          >
            <MyBarChart />
          </a>
        </div>
        <div className="mt-8 p-2">
          <a
            href="#"
            className="block w-full rounded-lg bg-zinc-800 p-4 shadow-xl"
          >
            <TeamLeads />
          </a>
        </div>
      </div>
    </div>
  );
}
