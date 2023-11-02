import React, { PureComponent } from "react";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 50,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 324,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 500,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 987,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 1200,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 1600,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2000,
  },
];

export const ChartComponent = () => {
  const maxAmt = Math.max(...data.map((item) => item.amt));

  return (
    <div className="h-35 relative">
      <div className="absolute right-0 top-0 mr-2">
        <svg
          className="h-8 w-8 text-white dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 19"
        >
          <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
          <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
        </svg>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-white">Total Registrations</h2>
      </div>
      <div className="mt-10">
        <p className="text-4xl text-white">{maxAmt}</p>
      </div>
    </div>
  );
};
