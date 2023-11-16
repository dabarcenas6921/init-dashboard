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
    amt: 200,
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
    amt: 1000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 1500,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2000,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const ChartComponentProjects = () => {
  const maxAmt = Math.max(...data.map((item) => item.amt));

  return (
    <div className="relative">
      <div className="absolute right-0 top-0 mr-2">
        <svg
          className="h-8 w-8 text-white dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
          />
        </svg>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-white">Total Projects</h2>
      </div>
      <div className="mt-10">
        <p className="text-4xl text-white">{maxAmt}</p>
      </div>
    </div>
  );
};

{
  /* 
  <div>
          <img
            src="/assets/images/coder.png"
            loading="lazy"
            alt=""
            width={50}
            height={500}
            className="w-xs"
          />
        </div>
       */
}
