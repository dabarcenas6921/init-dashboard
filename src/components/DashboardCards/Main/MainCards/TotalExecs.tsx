import React from "react";

const data = [
  { name: "Andy" },
  { name: "David" },
  { name: "Gino" },
  { name: "John" },
  { name: "Giancarlo" },
  { name: "Jacob" },
  { name: "Gabriel" },
];

export default function TotalExecs() {
  const totalItems = data.length; // Counts the number of items in the data array

  return (
    <div className="h-35 relative">
      <div className="absolute right-0 top-0 mr-2">
        <svg
          className="h-8 w-8 text-white dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 22 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 16.5A2.493 2.493 0 0 1 6.51 18H6.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .921-3.182 2.477 2.477 0 0 1 1.875-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 11 3.5m0 13v-13m0 13a2.492 2.492 0 0 0 4.49 1.5h.01a2.467 2.467 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.479 2.479 0 0 0-1.875-3.344A2.5 2.5 0 0 0 13.5 1 2.5 2.5 0 0 0 11 3.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M19 8.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185"
          />
        </svg>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-white">Total Executives</h2>
      </div>
      <div className="mt-10">
        <p className="text-4xl text-white">{totalItems}</p>{" "}
        {/* Display the total number of items */}
      </div>
    </div>
  );
}
