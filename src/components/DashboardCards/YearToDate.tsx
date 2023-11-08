import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Cell,
} from "recharts";

// Updated data to represent months
const data = [
  { name: "Jan", value: 2400 },
  { name: "Feb", value: 4567 },
  { name: "Mar", value: 1398 },
  { name: "Apr", value: 9800 },
  { name: "May", value: 3908 },
  { name: "Jun", value: 4800 },
  { name: "Jul", value: 2600 },
  { name: "Aug", value: 4100 },
  { name: "Sep", value: 3800 },
  { name: "Oct", value: 2300 },
  { name: "Nov", value: 1100 },
  { name: "Dec", value: 6500 },
];

// Compute the total sum
const totalValue = data.reduce((acc, item) => acc + item.value, 0);

export default function YearToDate() {
  return (
    <div className="max-w-3xl" style={{ width: 900, height: 478 }}>
      <div>
        <h1 className="flex justify-center font-medium text-white">
          YTD Funding
        </h1>
        <div className="mt-5 max-w-full" style={{ width: "100%", height: 370 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="white" />
              <YAxis stroke="white" />
              <Tooltip
                contentStyle={{ backgroundColor: "white", color: "black" }}
                itemStyle={{ color: "black" }}
              />
              <Bar dataKey="value" fill="#FFD550">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-8 flex justify-center text-xl">Total: ${totalValue}</p>
      </div>
    </div>
  );
}
