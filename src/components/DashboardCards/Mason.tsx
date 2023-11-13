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
          <div className="mb-8 mt-5 w-full p-2">
            <a
              href="#"
              className="block w-full rounded-lg bg-zinc-800 p-4 shadow-xl"
            >
              <YearToDate />
            </a>
          </div>
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
      {/* This div will take full width on mobile and flex-1 (50% of the parent container) on medium screens and up */}
      <div className="mt-5 flex w-full flex-col md:mt-0 md:flex-1">
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
