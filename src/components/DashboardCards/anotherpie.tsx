import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Label,
  Cell,
  LabelList,
  Legend,
} from "recharts";

// Updated data to represent months
const data = [
  { name: "January", value: 2400 },
  { name: "February", value: 4567 },
  { name: "March", value: 1398 },
  { name: "April", value: 9800 },
  { name: "May", value: 3908 },
  { name: "June", value: 4800 },
  { name: "July", value: 2600 },
  { name: "August", value: 4100 },
  { name: "September", value: 3800 },
  { name: "October", value: 2300 },
  { name: "November", value: 1100 },
  { name: "December", value: 6500 },
];

// Compute the total sum
const totalValue = data.reduce((acc, item) => acc + item.value, 0);

export default function AnotherPie() {
  return (
    <div className="max-w-xs" style={{ width: 900, height: 248 }}>
      <div>
        <h1 className="flex justify-center font-medium text-white">
          YTD Funding
        </h1>
      </div>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            cx="50%"
            cy="45%"
            innerRadius={40}
            outerRadius={80}
            fill="#82ca9d"
          >
            <Label value={totalValue} position="center" fill="white" />{" "}
            {
              // Optional: If you want to have different colors for each month
              data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))
            }
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

// Array of colors for the slices
const colors = [
  "#FFBB28",
  "#FF8042",
  "#00C49F",
  "#FF8882",
  "#8884d8",
  "#82ca9d",
  "#a4de6c",
  "#d0ed57",
  "#ffc658",
  "#d084d6",
  "#83a6ed",
  "#8dd1e1",
];
