import React, { useState, useEffect } from "react";
import { api } from "~/utils/api";

export default function SearchInput() {
  const query = api.jobs.getAll.useQuery();

  useEffect(() => {
    const formEl = document.getElementById("search-jobs");
    formEl?.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("Form submitted");
    });

    return () => {
      formEl?.removeEventListener("submit", (e) => {
        e.preventDefault();
      });
    };
  }, []);

  const getData = () => {
    if (query.data) {
      query.data.forEach((job) => {
        console.log(job);
      });
    }
  };

  return (
    <form className="flex items-center" id="search-jobs">
      <label
        htmlFor="search-jobs-input-field"
        className="sr-only text-sm font-medium text-gray-900"
      >
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="h-4 w-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="search-jobs-input-field"
          className="border-yellow_primary block w-full rounded-md border bg-white p-2 pl-10 text-sm text-gray-900 focus:border-yellow-500 focus:ring-yellow-500 md:w-[400px]"
          placeholder="Search jobs..."
          required
        />
        <button
          id="search-submit-btn"
          className="hover-bg-yellow-500 absolute inset-y-0 right-0 flex items-center justify-center rounded-r-lg bg-primary_yellow px-4 py-2 text-sm font-medium text-black focus:outline-none focus:ring-4 focus:ring-yellow-300"
          onClick={getData}
        >
          Search
        </button>
      </div>
    </form>
  );
}
