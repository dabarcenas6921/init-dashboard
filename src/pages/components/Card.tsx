import React from "react";
import { Carousel } from "antd";

const Card: React.FC = () => (
  <div className="flex justify-center pt-20">
    <div className="max-w-5xl rounded-lg border border-gray-200 bg-primary p-6 shadow dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
            This Week
          </h5>
        </a>
        <a
          href="#"
          className="inline-flex items-center rounded-lg border border-yellow-200 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register Now!
          <svg
            className="ml-2 h-3.5 w-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>

      <p className="text-white-700 mb-3 font-normal dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>

      <a
        href="#"
        className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          className="ml-2 h-3.5 w-3.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  </div>
);

export default Card;
