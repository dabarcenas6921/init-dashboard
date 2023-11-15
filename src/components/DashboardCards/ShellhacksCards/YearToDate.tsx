import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
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

const totalValue = data.reduce((acc, item) => acc + item.value, 0);

export default function YearToDate() {
  return (
    <div style={{ width: "100%", height: "475px" }}>
      <h1 style={{ textAlign: "center", color: "white" }}>YTD Funding</h1>
      <ResponsiveContainer width="100%" height="90%">
        <AreaChart
          data={data}
          margin={{
            top: 5,
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
            contentStyle={{ backgroundColor: "white" }}
            itemStyle={{ color: "black" }}
            formatter={(value) => [`$${value.toLocaleString()}`]}
            labelFormatter={() => ""}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#FFD550"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <p
        className="flex justify-center text-xl"
        style={{ textAlign: "center" }}
      >
        Total: ${totalValue.toLocaleString()}
      </p>
    </div>
  );
}
