import React from "react";
import {
  LineChart,
  Area,
  AreaChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const data = [
  { month: "January", spending: 3800 },
  { month: "February", spending: 4200 },
  { month: "March", spending: 3500 },
  { month: "April", spending: 4000 },
  { month: "May", spending: 4500 },
  { month: "June", spending: 3700 },
  { month: "July", spending: 4800 },
  { month: "August", spending: 3900 },
  { month: "September", spending: 4100 },
  { month: "October", spending: 3600 },
  { month: "November", spending: 4200 },
  // ... more months
];

const budgetValue = 4000;

export default function Budgeting() {
  return (
    <div className="mx-auto rounded-lg  p-4 ">
      <h2 className="mb-4 text-center text-xl font-bold text-white">
        Monthly Budgeting
      </h2>
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 20 }} // Increased bottom margin
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFD550" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FFD550" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              tick={{ fontSize: 10, fill: "white" }} // Smaller font size for X-axis labels
              angle={-45} // Optional: tilt labels if needed
              textAnchor="end"
            />
            <YAxis domain={[3400, 4900]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="spending"
              stroke="#FFA500"
              strokeWidth={3}
            />
            <ReferenceLine
              y={budgetValue}
              label="Budget"
              stroke="red"
              strokeDasharray="3 3"
            />
            <Area
              type="monotone"
              dataKey="spending"
              stroke="#FFD550"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
