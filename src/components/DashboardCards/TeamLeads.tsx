import axios from "axios";
import { useEffect } from "react";
const baseId = process.env.NEXT_PUBLIC_AIRTABLE_SHELLHACKS_BASE_ID;
const tableId =
  process.env.NEXT_PUBLIC_AIRTABLE_SHELLHACKS_VOLUNTEER_SCHEDULE_TABLE;
const apiKey = process.env.NEXT_PUBLIC_AIRTABLE_PERSONAL_ACCESS_TOKEN;

const data = [
  {
    name: "Gerald",
    schedule: "Fri - Sat",
    time: "9:00 AM - 5:00 PM",
    contact: "foolsfool@gmail.com",
  },
  {
    name: "Steve",
    schedule: "Sat - Sun",
    time: "9:00 AM - 5:00 PM",
    contact: "foolsfool@gmail.com",
  },
  {
    name: "Sam",
    schedule: "Mon - Fri",
    time: "9:00 AM - 5:00 PM",
    contact: "foolsfool@gmail.com",
  },
  {
    name: "Andy",
    schedule: "Sat - Fri",
    time: "9:00 AM - 5:00 PM",
    contact: "foolsfool@gmail.com",
  },
  {
    name: "Kevin",
    schedule: "Fri",
    time: "9:00 AM - 5:00 PM",
    contact: "foolsfool@gmail.com",
  },
  {
    name: "John",
    schedule: "Mon - Fri",
    time: "9:00 AM - 5:00 PM",
    contact: "foolsfool@gmail.com",
  },
  {
    name: "Mike",
    schedule: "Mon - Fri",
    time: "9:00 AM - 5:00 PM",
    contact: "foolsfool@gmail.com",
  },
  {
    name: "Mike",
    schedule: "Mon - Fri",
    time: "9:00 AM - 5:00 PM",
    contact: "foolsfool@gmail.com",
  },
  {
    name: "Mike",
    schedule: "Mon - Fri",
    time: "9:00 AM - 5:00 PM",
    contact: "foolsfool@gmail.com",
  },
  {
    name: "Mike",
    schedule: "Mon - Fri",
    time: "9:00 AM - 5:00 PM",
    contact: "foolsfool@gmail.com",
  },
  {
    name: "Mike",
    schedule: "Mon - Fri",
    time: "9:00 AM - 5:00 PM",
    contact: "foolsfool@gmail.com",
  },
  {
    name: "Mike",
    schedule: "Mon - Fri",
    time: "9:00 AM - 5:00 PM",
    contact: "foolsfool@gmail.com",
  },
  {
    name: "Mike",
    schedule: "Mon - Fri",
    time: "9:00 AM - 5:00 PM",
    contact: "foolsfool@gmail.com",
  },
  {
    name: "Mike",
    schedule: "Mon - Fri",
    time: "9:00 AM - 5:00 PM",
    contact: "foolsfool@gmail.com",
  },
];

export default function MyBarChart() {
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
    <div className="overflow-x-auto">
      <h1 className="text-center text-lg font-semibold text-white sm:text-xl">
        Volunteer Schedule
      </h1>
      <div className="max-h-[420px] overflow-y-auto">
        {/* Use divs instead of table on small screens */}
        <div className="mt-5 w-full text-sm text-gray-400 sm:hidden">
          {data.map((item, index) => (
            <div key={index} className="mb-4 rounded bg-zinc-800 p-4">
              <div className="font-medium text-white">{item.name}</div>
              <div className="text-yellow-300">{item.schedule}</div>
              <div className="text-white">{item.time}</div>
              <div className="text-white">{item.contact}</div>
            </div>
          ))}
        </div>
        {/* Show table on larger screens */}
        <table className="hidden w-full text-left text-gray-400 sm:block">
          <thead className="bg-zinc-800 text-xs uppercase text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 text-white">
                Volunteer Name
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                Schedule
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                Time
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                Contact
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b border-gray-700 bg-zinc-800">
                <td className="px-6 py-4 font-medium text-white">
                  {item.name}
                </td>
                <td className="px-6 py-4 text-yellow-300">{item.schedule}</td>
                <td className="px-6 py-4 text-white">{item.time}</td>
                <td className="px-6 py-4 text-white">{item.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
