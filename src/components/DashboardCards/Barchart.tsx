import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "2020", $: 500 },
  { name: "2021", $: 1500 },
  { name: "2022", $: 2000 },
  { name: "2023", $: 3000 },
];

export default function MyBarChart() {
  const totalValue = data.reduce((acc, item) => acc + item.$, 0);
  return (
    <div>
      <p className="flex justify-center font-medium text-white">
        Yearly Spending
      </p>
      <div className="mt-5 max-w-full" style={{ width: "100%", height: 581 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 0,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFD550" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FFD550" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis dataKey="name" stroke="white" />
            <YAxis stroke="white" />
            <Tooltip
              contentStyle={{ backgroundColor: "white", color: "black" }}
              formatter={(value) => [`$${value.toLocaleString()}`]}
              labelFormatter={() => ""} // Add this line to hide the label
            />
            <Bar dataKey="$" fill="url(#colorUv)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="flex justify-center text-xl">
        Total: ${totalValue.toLocaleString()}
      </p>
    </div>
  );
}
