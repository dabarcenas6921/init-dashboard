import axios from "axios";
import { useEffect, useState } from "react";

const baseId = process.env.NEXT_PUBLIC_AIRTABLE_SHELLHACKS_BASE_ID;
const tableId =
  process.env.NEXT_PUBLIC_AIRTABLE_SHELLHACKS_VOLUNTEER_SCHEDULE_TABLE;
const apiKey = process.env.NEXT_PUBLIC_AIRTABLE_PERSONAL_ACCESS_TOKEN;

interface RecordType {
  fields: {
    Name: string;
    "Last Name": string;
    "Discord ID copy": string;
    Times: string[];
  };
  // Include other properties if needed
}

export default function MyBarChart() {
  const [volunteers, setVolunteers] = useState([]);

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

        // First, filter out any records where the necessary fields are not defined
        const validRecords = response.data.records.filter(
          (record) =>
            record.fields.Name &&
            record.fields["Last Name"] &&
            record.fields.Times &&
            record.fields.Times.length > 0,
        );

        // Then, map over the filtered records to transform them into the desired shape
        const fetchedData = validRecords.map((record) => {
          // Extract the schedule without time details
          const schedule = record.fields.Times[0].split(":")[0].trim();

          // Extract the time range
          const timeRangeMatch = record.fields.Times[0].match(
            /(\d{1,2}[APM\s]+-\s*\d{1,2}[APM\s]+)/,
          );
          const time = timeRangeMatch ? timeRangeMatch[0] : "No time available"; // Extract the time range or provide "No time available" if the format doesn't match

          return {
            name: `${record.fields.Name} ${record.fields["Last Name"]}`,
            schedule: schedule,
            time: time,
            contact: record.fields["Discord ID copy"],
          };
        });

        setVolunteers(fetchedData);
      } catch (error) {
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
        {/* Display data in cards for smaller screens */}
        <div className="mt-5 w-full text-sm text-gray-400 sm:hidden">
          {volunteers.map((item, index) => (
            <div key={index} className="mb-4 rounded bg-zinc-800 p-4">
              <div className="font-medium text-white">{item.name}</div>
              <div className="text-yellow-300">{item.schedule}</div>
              <div className="text-white">{item.time}</div>
              <div className="text-white">{item.contact}</div>
            </div>
          ))}
        </div>

        {/* Display data in a table for larger screens */}
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
            {volunteers.map((item, index) => (
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
