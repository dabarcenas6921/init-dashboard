import { useState } from "react";

// Mock data for volunteers
const mockVolunteers = [
  {
    name: "Google",
    schedule: "Tuesday",
    time: "8AM - 12PM",
    contact: "John342@gmail.com",
  },
  {
    name: "META",
    schedule: "Wednesday",
    time: "1PM - 5PM",
    contact: "Jane378@gmail.com",
  },
  {
    name: "Netflix",
    schedule: "Thursday",
    time: "8AM - 12PM",
    contact: "Alex782@gmail.com",
  },
  {
    name: "NVIDIA",
    schedule: "Monday",
    time: "8AM - 12PM",
    contact: "Emily987@gmail.com",
  },
  {
    name: "Salesforce",
    schedule: "Wednesday",
    time: "6PM - 10PM",
    contact: "Michael118@gmail.com",
  },
  {
    name: "Workday",
    schedule: "Tuesday",
    time: "8AM - 12PM",
    contact: "Sarah513@gmail.com",
  },
  {
    name: "Microsoft",
    schedule: "Tuesday",
    time: "8AM - 12PM",
    contact: "David446@gmail.com",
  },
  {
    name: "Capital One",
    schedule: "Thursday",
    time: "6PM - 10PM",
    contact: "Laura364@gmail.com",
  },
  {
    name: "JP Morgan Chase",
    schedule: "Friday",
    time: "1PM - 5PM",
    contact: "James893@gmail.com",
  },
];

export default function Workshops() {
  // Initialize volunteers state with mock data
  const [volunteers, setVolunteers] = useState(mockVolunteers);

  return (
    <div className="overflow-x-auto">
      <h1 className="text-center text-lg font-semibold text-white sm:text-xl">
        Sponsors Workshops Schedule
      </h1>
      <div className="max-h-[555px] overflow-y-auto">
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
                Company
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                Schedule
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                Time
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                Recruiter Contact
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
